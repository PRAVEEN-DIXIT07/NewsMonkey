// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App=()=> {

  const apikey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);
  // setProgress(progress);

    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar />
          <Switch>
            <Route exact path="/"> <News setProgress={setProgress} apikey={apikey} key="general" pageSize={5} country='in' category="general" /></Route>
            <Route exact path="/business"> <News setProgress={setProgress} apikey={apikey} key="business" pageSize={5} country='in' category="business" /></Route>
            <Route exact path="/entertainment"> <News setProgress={setProgress}  apikey={apikey}key="entertainment" pageSize={5} country='in' category="entertainment" /></Route>
            <Route exact path="/health"> <News setProgress={setProgress} apikey={apikey} key="health" pageSize={5} country='in' category="health" /></Route>
            <Route exact path="/sports"> <News setProgress={setProgress} apikey={apikey} key="sports" pageSize={5} country='in' category="sports" /></Route>
            <Route exact path="/science"> <News setProgress={setProgress} apikey={apikey} key="science" pageSize={5} country='in' category="science" /></Route>
            <Route exact path="/technology"> <News setProgress={setProgress} apikey={apikey} key="technology" pageSize={5} country='in' category="technology" /></Route>

          </Switch>
        </Router>
      </div
      >
    )

}

export default App
