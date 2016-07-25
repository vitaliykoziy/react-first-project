import React, { PropTypes } from 'react';
import styles from './pagination.css';

const setItems = ({ totlaCount, currentPage, perPage, paginate, ID }) => {
  const pagesCount = Math.ceil(totlaCount / perPage);
  let pageNumber;
  let dotsReturned = false;
  return [...Array(pagesCount).keys()].map((value, index) => {
    pageNumber = index + 1;
    if (pageNumber === 1 || pageNumber === pagesCount) {
      // show first and last page
      return (
        <li
          className={currentPage === pageNumber ? styles.active : ''}
          key={index}
        >
          <a onClick={() => paginate(ID, index + 1)}>{pageNumber}</a>
        </li>
      );
    }
    if (pageNumber - 1 === currentPage
      || pageNumber + 1 === currentPage
      || pageNumber === currentPage) {
      // show current page with prev and next pages
      dotsReturned = false;
      return (
        <li
          className={currentPage === pageNumber ? styles.active : ''}
          key={index}
        >
          <a onClick={() => paginate(ID, index + 1)}>{pageNumber}</a>
        </li>
      );
    }
    if (!dotsReturned) {
      dotsReturned = true;
      return (
        <li key={index}>
          <span>...</span>
        </li>
      );
    }
    return false;
  });
};

export const Pagination = (props) => {
  const {
    totlaCount,
    perPage,
  } = props;
  if (totlaCount <= perPage) {
    return <span></span>;
  }

  return (
    <ul className={styles.pagination}>
      {setItems(props)}
    </ul>
  );
};
Pagination.propTypes = {
  totlaCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  ID: PropTypes.string.isRequired,
  paginate: PropTypes.func.isRequired,
};
setItems.propTypes = {
  totlaCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  ID: PropTypes.string.isRequired,
  paginate: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  totlaCount: 0,
  currentPage: 1,
  perPage: 3,
};
