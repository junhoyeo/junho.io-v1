import React from 'react';

import { DivComponent } from '@/types/html';

import classes from './symbols.module.scss';

const Symbols: DivComponent = (props) => {
  return (
    <div className={classes.wrapper} {...props}>
      <div className={classes.container}>
        <ul className={classes.cellularList}>
          <li className={`${classes.cellularItem} ${classes.cellularOne}`} />
          <li className={`${classes.cellularItem} ${classes.cellularTwo}`} />
          <li className={`${classes.cellularItem} ${classes.cellularThree}`} />
          <li className={`${classes.cellularItem} ${classes.cellularFour}`} />
        </ul>

        <div className={classes.wifiWrapper}>
          <div className={classes.wifi}>
            <div className={classes.wifi}>
              <div className={classes.wifi} style={{ padding: 0 }} />
            </div>
          </div>
        </div>

        <div className={classes.batteryWrapper}>
          <div className={classes.battery}>
            <div className={classes.battery} />
          </div>
          <div className={classes.batteryElectrode} />
        </div>
      </div>
    </div>
  );
};

export default Symbols;
