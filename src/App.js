import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Currencies, CryptoDetails, Exchanges, News, MarketPlace, Minted, Lottery } from './components';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>

              <Route exact path="/currencies">
                <Currencies />
              </Route>

              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>

              <Route exact path="/exchanges">
                <Exchanges />
              </Route>

              <Route exact path="/news">
                <News />
              </Route>

              <Route exact path="/marketplace">
                <MarketPlace />
              </Route>

              <Route exact path="/minted">
                <Minted />
              </Route>

              <Route className="lottery" exact path="/lottery">
                <Lottery />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
            Cryptopia <br />
            All rights Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
            <Link to="/marketplace">MarketPlace</Link>
            <Link to="/minted">Mint NFTs</Link>
            <Link to="/lottery">Crypto Lottery</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App;