import React from 'react';
import styled from 'styled-components';

import { DEVICE_WIDTH } from '../constants';
import phoneIcon from '../../../assets/phone/icons/bottom/phone.png';
import mailIcon from '../../../assets/phone/icons/bottom/mail.png';
import safariIcon from '../../../assets/phone/icons/bottom/safari.png';
import musicIcon from '../../../assets/phone/icons/bottom/music.png';

const Phone = () => (
  <Container style={{ backgroundImage: `url(${phoneIcon})` }} />
);

const Mail = () => (
  <Container style={{ backgroundImage: `url(${mailIcon})` }} />
);

const Safari = () => {
  return (
    <Container>
      <SafariImage src={safariIcon} />
    </Container>
  );
};

const Music = () => (
  <Container style={{ backgroundImage: `url(${musicIcon})` }} />
);

export default {
  Phone,
  Mail,
  Safari,
  Music,
};

const Container = styled.div`
  background-color: white;
  background-size: cover;
  width: ${DEVICE_WIDTH * 0.16}px;
  height: ${DEVICE_WIDTH * 0.16}px;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SafariImage = styled.img`
  width: ${DEVICE_WIDTH * 0.16 * 0.88}px;
  height: ${DEVICE_WIDTH * 0.16 * 0.88}px;
`;
