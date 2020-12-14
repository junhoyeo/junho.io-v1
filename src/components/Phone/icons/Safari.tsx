import React from 'react';
import styled from 'styled-components';

import { DEVICE_WIDTH } from '../constants';

const Safari = () => {
  return <Container></Container>;
};

export default Safari;

const Container = styled.div`
  background-color: white;
  width: ${DEVICE_WIDTH * 0.16}px;
  height: ${DEVICE_WIDTH * 0.16}px;
  border-radius: 18px;
  cursor: pointer;
`;
