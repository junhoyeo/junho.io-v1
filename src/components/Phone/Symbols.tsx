import React from 'react';
import styled, { css } from 'styled-components';

const Symbols: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <Wrapper {...props}>
      <Container>
        <CellularList>
          <CellularOne />
          <CellularTwo />
          <CellularThree />
          <CellularFour />
        </CellularList>
        <WifiWrapper>
          <Wifi>
            <Wifi>
              <Wifi style={{ padding: 0 }} />
            </Wifi>
          </Wifi>
        </WifiWrapper>
        <BatteryWrapper>
          <BatteryContainer>
            <Battery />
          </BatteryContainer>
          <BatteryElectrode />
        </BatteryWrapper>
      </Container>
    </Wrapper>
  );
};

export default Symbols;

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
`;
const Container = styled.div`
  display: flex;
  height: 15px;
  align-items: flex-end;
  transform: scale(0.8);
  transform-origin: right center;
`;

const CellularList = styled.div`
  display: flex;
  align-items: flex-end;
`;

const cellularStyle = css`
  background-color: white;
  width: 4px;
  margin-right: 2.5px;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
`;

const CellularOne = styled.div`
  ${cellularStyle}
  height: 6px;
`;

const CellularTwo = styled.div`
  ${cellularStyle}
  height: 8px;
`;

const CellularThree = styled.div`
  ${cellularStyle}
  height: 12px;
`;

const CellularFour = styled.div`
  ${cellularStyle}
  height: 16px;
`;

const WifiWrapper = styled.div`
  margin-bottom: -14px;
`;

const Wifi = styled.div`
  padding: 3px;
  border: 3px solid transparent;
  border-radius: 30px;
  border-top-color: white;
`;

const BatteryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;
`;

const BatteryContainer = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.66);
  width: 34px;
  padding: 2px;
  border-radius: 6px;
`;
const Battery = styled.div`
  background-color: white;
  width: 40%;
  height: 12px;
  border-radius: 4px;
`;
const BatteryElectrode = styled.div`
  background-color: rgba(255, 255, 255, 0.66);
  height: 7px;
  width: 2px;
  margin-left: 2px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;
