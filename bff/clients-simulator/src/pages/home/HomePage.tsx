import React from 'react';
import styled from 'styled-components'
import MobileSimulatorPage from '../mobileSimulator/MobileSimulatorPage';
import WebSimulatorPage from '../webSimulator/WebSimulatorPage';
import SmartTvSimulator from '../smartTvSimulator/SmartTvSimulatorPage';

const Simulator = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  padding: 1em 0;
`;

const SimulatorName = styled.h1`
  font-size: var(--step-up-1);
`;



const HomePage: React.FC = () => (
  <React.Fragment>
    <Simulator>
      <SimulatorName>Smart TV Client Simulator</SimulatorName>
      <SmartTvSimulator />
    </Simulator>
    <Simulator>
      <SimulatorName>Smartphone Client Simulator</SimulatorName>
      <MobileSimulatorPage />
    </Simulator>
    <Simulator>
      <SimulatorName>Web Client Simulator</SimulatorName>
      <WebSimulatorPage />
    </Simulator>
  </React.Fragment>
);

export default HomePage