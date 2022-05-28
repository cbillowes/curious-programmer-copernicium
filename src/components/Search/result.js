import { default as React } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom"
import SearchBox from "./box"

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div>
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : (
    <div className="inline-block animate animate-spin ease-linear rounded-full border-2 border-t-8 border-gray-200 h-6 w-6 z-10"></div>
  )
})

const PageHit = ({ hit }) => (
  <div className="mb-8">
    <Link to={hit.slug}>
      <h4 className="font-semibold">
        <Highlight
          attribute="title"
          hit={hit}
          tagName="mark"
          className="hover:text-color-1-script hover:bg-color-1-alternative"
        />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    ...
  </div>
)

PageHit.propTypes = {
  hit: PropTypes.object.isRequired,
}

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <Hits className="bg-search-neutral-3 px-4 py-10" hitComponent={PageHit} />
  </Index>
)

HitsInIndex.propTypes = {
  index: PropTypes.object.isRequired,
}

const SearchResult = ({ toggle, indices, className, setFocus, hasFocus }) => (
  <div
    className={className}
    onKeyUp={(e) => {
      if (e.key === "Escape") {
        toggle()
      }
    }}
  >
    <SearchBox
      toggle={toggle}
      onFocus={() => setFocus(true)}
      hasFocus={hasFocus}
    />
    <div className="bg-color-2 text-color-2-script px-4 pb-4 pt-4 flex justify-between items-center">
      <div>
        <PoweredBy />
      </div>
      <HitCount />
    </div>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
  </div>
)

SearchResult.propTypes = {
  toggle: PropTypes.func.isRequired,
  indices: PropTypes.array.isRequired,
  className: PropTypes.string,
  setFocus: PropTypes.func.isRequired,
  hasFocus: PropTypes.bool.isRequired,
}

export default SearchResult
