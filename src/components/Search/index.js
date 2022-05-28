import { createRef, default as React, useState, useMemo } from "react"
import { InstantSearch } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import PropTypes from "prop-types"
import SearchResult from "./result"
import SearchRoot from "./root"
import useClickOutside from "./use-click-outside"

export default function Search({ indices, toggle }) {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = useMemo(
    () =>
      algoliasearch(
        process.env.GATSBY_ALGOLIA_APP_ID,
        process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      ),
    [],
  )

  useClickOutside(rootRef, () => setFocus(false))

  return (
    <SearchRoot ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchResult
          show={query && query.length > 0 && hasFocus}
          indices={indices}
          toggle={toggle}
          setFocus={setFocus}
          hasFocus={hasFocus}
        />
      </InstantSearch>
    </SearchRoot>
  )
}

Search.propTypes = {
  indices: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
}
