import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import { Switch, Route } from 'react-router-dom'

import Navbar from './components/header/Navbar'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

import ProductPage from './components/page/ProductPage'
import HomePage from './components/page/HomePage'

function App() {
  return (
    <>
      <Navbar />
      <Content>
        <Switch>
          <Route path="/Cardapio">
            <ProductPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Content>
      <Footer />
    </>
  );
}

export default App;
