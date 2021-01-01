import React from 'react';
import styled from 'styled-components';

import AppIcon from './AppIcon';
import { DEVICE_WIDTH } from '../constants';
import phoneIcon from '../../../assets/phone/icons/bottom/phone.png';
import mailIcon from '../../../assets/phone/icons/bottom/mail.png';
import safariIcon from '../../../assets/phone/icons/bottom/safari.png';
import musicIcon from '../../../assets/phone/icons/bottom/music.png';

const Phone = () => <PhoneIcon icon={phoneIcon} />;

const Mail = () => <MailIcon icon={mailIcon} />;

const Safari = () => {
  return (
    <AppIcon>
      <SafariImage src={safariIcon} />
    </AppIcon>
  );
};

const Music = () => <MusicIcon icon={musicIcon} />;

export default {
  Phone,
  Mail,
  Safari,
  Music,
};

const PhoneIcon = styled(AppIcon)`
  background-image: linear-gradient(to bottom, #89f384, #56ba43);
`;

const MailIcon = styled(AppIcon)`
  background-image: linear-gradient(to bottom, #1d52ef, #14e6fd);
`;

const MusicIcon = styled(AppIcon)`
  background: linear-gradient(to bottom, #fc5d74, #fa233c);
`;

const SafariImage = styled.img`
  width: ${DEVICE_WIDTH * 0.156 * 0.88}px;
  height: ${DEVICE_WIDTH * 0.156 * 0.88}px;
`;
