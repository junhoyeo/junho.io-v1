import React from 'react';

import classes from './pagination.module.scss';

const Pagination: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      {/* <div className={classes.pagination_circle} /> */}
      <div className={`${classes.pagination_circle} selected`} />
    </div>
  );
};

export default Pagination;
