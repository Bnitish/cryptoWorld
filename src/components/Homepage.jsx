import React from 'react'
import millify from 'millify'
import {Typography, Row, Col, Statistic} from 'antd';
import {Link} from 'react-router-dom'
import {useGetCryptosQuery} from '../services/cryptoApi'
import { Cryptocurrencies , News} from '../components/index';
import Loader from './Loader';
const {Title} = Typography;
 const Homepage = () => {
     const {data, isFetching} = useGetCryptosQuery(10);
     
     const globalStats = data?.data?.stats;
     if(isFetching)return <Loader />
    
    return (
        <>
        <Title level={2} className='heading'>Global Crypto stats</Title>
        <Row>
            <Col span={12}><Statistic title="Total crypto currencies" value={globalStats.total}/></Col>
            <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
            <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title="Total 24 hour Value" value={millify(globalStats.total24hVolume)}/></Col>
            <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)}/></Col>
            
        </Row>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Top 10 cryptocurrencies</Title>
            <Title level={3} className="show-more"><Link to="/cryptocurrencies">show more</Link></Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className="home-heading-container">
            <Title level={2} className="home-title">Latest crypto news</Title>
            <Title level={3} className="show-more"><Link to="/news">show more</Link></Title>
        </div>
        <News simplified/>
        </>
    )
}

export default Homepage