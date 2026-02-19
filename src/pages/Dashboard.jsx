import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../netflix-ui/components/Sidebar';
import HeroBanner from '../netflix-ui/components/HeroBanner';
import Row from '../netflix-ui/components/Row';
import { requests } from '../netflix-ui/services/api';
import '../netflix-ui/Netflix.css';

const Dashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            localStorage.removeItem("user");
            navigate("/");
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    return (
        <div className="App">
            <header className="navbar">
                <div className="navbar-left">
                    <h1 className="logo" style={{ color: '#e50914', fontSize: '30px', fontWeight: 'bold' }}>NETFLIX</h1>
                </div>

                <div className="navbar-right">
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </header>

            <Sidebar />
            <div className="hero">
                <HeroBanner />
            </div>
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
