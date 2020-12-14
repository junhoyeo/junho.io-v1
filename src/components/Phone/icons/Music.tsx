import React from 'react';
import styled from 'styled-components';

import { DEVICE_WIDTH } from '../constants';

const Music = () => {
  return <Container></Container>;
};

export default Music;

const Container = styled.div`
  background-image: linear-gradient(to bottom, #fc5d74, #fa233c);
  width: ${DEVICE_WIDTH * 0.16}px;
  height: ${DEVICE_WIDTH * 0.16}px;
  border-radius: 18px;
  cursor: pointer;
`;
