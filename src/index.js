import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Categoria from './pages/CriarVideo/Categoria';
import NotFound from './pages/NotFound';
import Video from './pages/CriarVideo/Video';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cadastro/categoria" exact component={Categoria} />
              <Route path="/cadastro/video" exact component={Video} />
              <Route component={NotFound} />
          </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
