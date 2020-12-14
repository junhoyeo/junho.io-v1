import React from 'react';
import styled from 'styled-components';

import { DEVICE_WIDTH } from '../constants';

const Phone = () => {
  return <Container></Container>;
};

export default Phone;

const Container = styled.div`
  background-image: linear-gradient(to bottom, #89f384, #56ba43);
  width: ${DEVICE_WIDTH * 0.16}px;
  height: ${DEVICE_WIDTH * 0.16}px;
  border-radius: 18px;
  cursor: pointer;
`;
