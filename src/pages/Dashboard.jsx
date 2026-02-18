import React from 'react';
import Sidebar from '../netflix-ui/components/Sidebar';
import HeroBanner from '../netflix-ui/components/HeroBanner';
import Row from '../netflix-ui/components/Row';
import { requests } from '../netflix-ui/services/api';
import '../netflix-ui/Netflix.css';

const Dashboard = () => {
    return (
        <div className="App">
            <Sidebar />
            <HeroBanner />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
            <Row title="New Releases" fetchUrl="2024" />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
};

export default Dashboard;
