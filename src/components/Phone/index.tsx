import React from 'react';

import Device from './Device';

// ha ha
interface IPhone {}

const Phone: React.FC<IPhone> = () => {
  return <Device />;
};

export default Phone;
