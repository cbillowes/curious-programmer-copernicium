import { default as React } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from 'react-instantsearch-dom';
import SearchBox from './box';

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;

  return hitCount > 0 ? (
    <div>
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : (
    <div role="status">
      <svg
        class="inline mr-2 w-5 h-5 text-color-2 animate-spin fill-color-3"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>
  );
});

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
);

PageHit.propTypes = {
  hit: PropTypes.object.isRequired,
};

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <Hits className="bg-search-neutral-3 px-4 py-10" hitComponent={PageHit} />
  </Index>
);

HitsInIndex.propTypes = {
  index: PropTypes.object.isRequired,
};

const SearchResult = ({ toggle, indices, className }) => (
  <div
    tabIndex={1}
    ariaLabel="Search"
    role="searchbox"
    className={className}
    onKeyUp={(e) => {
      if (e.key === 'Escape') {
        toggle();
      }
    }}
  >
    <SearchBox toggle={toggle} />
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
);

SearchResult.propTypes = {
  toggle: PropTypes.func.isRequired,
  indices: PropTypes.array.isRequired,
  className: PropTypes.string,
  setFocus: PropTypes.func.isRequired,
  hasFocus: PropTypes.bool.isRequired,
};

export default SearchResult;

{
  /* // <div
  //   className={className}
  //   onKeyUp={(e) => {
  //     if (e.key === 'Escape') {
  //       toggle();
  //     }
  //   }}
  // >
  //   <SearchBox
  //     toggle={toggle}
  //     onFocus={() => setFocus(true)}
  //     hasFocus={hasFocus}
  //   />

  //   {indices.map((index) => (
  //     <HitsInIndex index={index} key={index.name} />
  //   ))}
  // </div> */
}
