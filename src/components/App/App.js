import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/InfoContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import FAQ from '../FAQ/FAQContainer';
import List from '../List/ListContainer';
import Search from '../SearchResults/SearchResultsContainer';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/FAQ' component={FAQ} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/Search/..." component={Search} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;