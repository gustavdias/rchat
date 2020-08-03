import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
// import JoinMUI from './components/Join/JoinMUI';


import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/joinmui" exact component={Join} />

      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
