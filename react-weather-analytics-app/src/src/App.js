import React from 'react';
import './App.css';
import NavBar from './Navbar';

import {
  BasicBarChart,
  StyledBarChart,
  MultiDatasetBarChart,
  MixedLineBarChart,
  LiveChart,
  RealtimeTimeseriesChart
} from './charts';

const App = () => (
  <div>
    <NavBar />
    <div style={{margin: '10px', paddingTop: '65px'}}>
      <StyledBarChart/>
     </div>
  </div>
);

export default App;
