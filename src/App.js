import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  Cryptodetails,
  News,
} from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}/>
              <Route exact path="/crypto/:coinId" element={<Cryptodetails />} />
              <Route exact path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      
      <div className="footer" >
          <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
              CryptoWorld
              <br />
              Copyrights reserved
          </Typography.Title>
          <Space>
              <Link to='/' >Home</Link>
              <Link to='/exchanges'>Exchanges</Link>
              <Link to='/news'>News</Link>
          </Space>
      </div>
      </div>
    </div>
  );
};

export default App;
