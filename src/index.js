import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import { BrewReview } from './components/BrewReview'
// import { Grommet } from 'grommet';
// import { withStyles } from '@material-ui/core/styles';


ReactDOM.render(
  <React.StrictMode>
    <Router> 
        <BrewReview />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)




