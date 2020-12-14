import React from 'react';
import styled from 'styled-components';

import { DEVICE_WIDTH } from '../constants';

const Mail = () => {
  return <Container></Container>;
};

export default Mail;

const Container = styled.div`
  background-image: linear-gradient(to bottom, #1d52ef, #14e6fd);
  width: ${DEVICE_WIDTH * 0.16}px;
  height: ${DEVICE_WIDTH * 0.16}px;
  border-radius: 18px;
  cursor: pointer;
`;
