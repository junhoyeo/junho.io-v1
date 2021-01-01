import React from 'react';
import styled, { css } from 'styled-components';

const Pagination = () => {
  return (
    <Wrapper>
      {/* <PaginationCircle /> */}
      <PaginationCircle isSelected />
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

interface IPaginationCircle {
  isSelected?: boolean;
}

const PaginationCircle = styled.div<IPaginationCircle>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);

  &:not(:last-child) {
    margin-right: 10px;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: white;
    `};
`;
