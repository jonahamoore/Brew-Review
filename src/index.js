import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import { BrewReview } from './components/BrewReview'
import { Grommet } from 'grommet';
// import { withStyles } from '@material-ui/core/styles';



const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

<Grommet theme={theme}></Grommet>


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Grommet>
      <BrewReview />
    </Grommet>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

