import React from 'react';
import styled, { css } from 'styled-components';

import { DEVICE_WIDTH } from '../constants';
import phoneIcon from '../../../assets/phone/icons/bottom/phone.png';
import mailIcon from '../../../assets/phone/icons/bottom/mail.png';
import safariIcon from '../../../assets/phone/icons/bottom/safari.png';
import musicIcon from '../../../assets/phone/icons/bottom/music.png';

const Phone = () => <PhoneIcon backgroundImage={phoneIcon} />;

const Mail = () => <MailIcon backgroundImage={mailIcon} />;

const Safari = () => {
  return (
    <Container>
      <SafariImage src={safariIcon} />
    </Container>
  );
};

const Music = () => <MusicIcon backgroundImage={musicIcon} />;

export default {
  Phone,
  Mail,
  Safari,
  Music,
};

interface IContainer {
  backgroundImage?: string;
}

const Container = styled.div<IContainer>`
  background-color: white;
  width: ${DEVICE_WIDTH * 0.156}px;
  height: ${DEVICE_WIDTH * 0.156}px;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      && {
        background-image: url(${backgroundImage});
        background-size: cover;
      }
    `};
`;

const PhoneIcon = styled(Container)`
  background-image: linear-gradient(to bottom, #89f384, #56ba43);
`;

const MailIcon = styled(Container)`
  background-image: linear-gradient(to bottom, #1d52ef, #14e6fd);
`;

const MusicIcon = styled(Container)`
  background: linear-gradient(to bottom, #fc5d74, #fa233c);
`;

const SafariImage = styled.img`
  width: ${DEVICE_WIDTH * 0.156 * 0.88}px;
  height: ${DEVICE_WIDTH * 0.156 * 0.88}px;
`;
