import React from 'react';
import PropTypes from 'prop-types';
import { toMauritiusLocaleDateString } from '../common/date';

const Metadata = ({
  timeToRead,
  date,
  created,
  modified,
  abstract,
  page,
  totalPages,
}) => {
  return (
    <div className="text-center text-neutral leading-loose text-sm">
      <div className=" opacity-50">
        Estimated {timeToRead} minute read{' '}
        {date && <>&nbsp;&middot; {toMauritiusLocaleDateString(date)}</>}
        {page && totalPages && (
          <>
            &nbsp;&middot; Page {parseInt(page, 10)} out of {totalPages}
          </>
        )}
        {created && (
          <>&nbsp;&middot; Created on {toMauritiusLocaleDateString(created)}</>
        )}
        {modified && (
          <>
            &nbsp;&middot; Last modified on{' '}
            {toMauritiusLocaleDateString(modified)}
          </>
        )}
      </div>
      {abstract && <p className="mt-2 max-w-3xl mx-auto">{abstract}</p>}
    </div>
  );
};

export default Metadata;

Metadata.propTypes = {
  timeToRead: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date),
  crated: PropTypes.instanceOf(Date),
  modified: PropTypes.instanceOf(Date),
  abstract: PropTypes.string,
  page: PropTypes.string,
  totalPages: PropTypes.string,
};
