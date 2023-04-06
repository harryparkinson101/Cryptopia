import React, { useState } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { TrophyOutlined, ShoppingOutlined, SketchOutlined, HomeOutlined, MoneyCollectOutlined, FundOutlined, MenuOutlined, BulbOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../images/crypto.jpg';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar className="btc" src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptopia</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item icon={<FundOutlined />}>
          <Link to="/currencies">Currencies</Link>
        </Menu.Item>

        <Menu.Item icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>

        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>

        <Menu.Item icon={<ShoppingOutlined />}>
          <Link to="/marketplace">NFT Marketplace</Link>
        </Menu.Item>

        <Menu.Item icon={<SketchOutlined />}>
          <Link to="/minted">Mint NFTs</Link>
        </Menu.Item>

        <Menu.Item icon={<TrophyOutlined spin="true"/>}>
          <Link to="/lottery">Crypto Lottery</Link>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar;
