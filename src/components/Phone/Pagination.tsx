import React from 'react';
import styled from 'styled-components';

const Pagination = () => {
  return (
    <Wrapper>
      {/* <PaginationCircle /> */}
      <PaginationCircle className="selected" />
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 45px;
  margin-bottom: 30px;
`;
const PaginationCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.selected {
    background-color: white;
  }
`;
