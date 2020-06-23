import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home, BookList} from './pages/index'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={['/', '/home']}>
          <Home />
        </Route>
        <Route exact path='/booklist'>
          <BookList />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
