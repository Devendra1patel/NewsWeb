import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import NewsItem from './components/NewsItem';
import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
// import { Switch as Switch} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NewsItem_API
  const [progress, setProgress] = useState(0)
 
    return (
       
      <>
        <Router>
            <NavBar/> 
            <Routes>
              <Route exact path="/"><NewsItem setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
              <Route exact path="/business"><NewsItem setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/></Route> 
              <Route exact path="/entertainment"><NewsItem setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route> 
              <Route exact path="/general"><NewsItem setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/></Route> 
              <Route exact path="/health"><NewsItem setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/></Route> 
              <Route exact path="/science"><NewsItem setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/></Route> 
              <Route exact path="/sports"><NewsItem setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/></Route> 
              <Route exact path="/technology"><NewsItem setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/></Route> 
            </Routes>
        </Router>
      </>
    )
 
}

export default App;