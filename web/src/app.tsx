import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureStore from "./configureStore";
import Layout from "./layout";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={Layout} />
      </Router>
    </Provider>
  );
}

export default App;
