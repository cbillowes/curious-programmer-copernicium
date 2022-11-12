import React from 'react';
import PropTypes from 'prop-types';
import { toMauritiusLocaleDateString } from '../common/date';

const Divider = ({ props, index }) => {
  return index + 1 <= props.length && props[index + 1] ? (
    <>&nbsp;&middot;&nbsp;</>
  ) : (
    <></>
  );
};

const Metadata = ({
  timeToRead,
  date,
  created,
  modified,
  abstract,
  page,
  totalPages,
}) => {
  const props = [
    timeToRead,
    date,
    created,
    modified,
    abstract,
    page,
    totalPages,
  ];
  return (
    <div className="text-center text-neutral leading-loose text-sm">
      <div className=" opacity-50">
        {timeToRead && (
          <>
            Estimated {timeToRead} minute read
            <Divider props={props} index={0} />
          </>
        )}
        {date && (
          <>
            {toMauritiusLocaleDateString(date)}
            <Divider props={props} index={1} />
          </>
        )}
        {page && totalPages && (
          <>
            Page {parseInt(page, 10)} out of {totalPages}
            <Divider props={props} index={2} />
          </>
        )}
        {created && (
          <>
            Created on {toMauritiusLocaleDateString(created)}
            <Divider props={props} index={3} />
          </>
        )}
        {modified && (
          <>
            Last modified on {toMauritiusLocaleDateString(modified)}
            <Divider props={props} index={4} />
          </>
        )}
      </div>
      {abstract && <p className="mt-2 max-w-3xl mx-auto">{abstract}</p>}
    </div>
  );
};

export default Metadata;

Metadata.propTypes = {
  timeToRead: PropTypes.number,
  date: PropTypes.instanceOf(Date),
  crated: PropTypes.instanceOf(Date),
  modified: PropTypes.instanceOf(Date),
  abstract: PropTypes.string,
  page: PropTypes.string,
  totalPages: PropTypes.string,
};
