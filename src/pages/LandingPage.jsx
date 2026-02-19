import React, { useState } from 'react';
import HeroBanner from '../netflix-ui/components/HeroBanner';
import AuthModal from '../components/AuthModal';
import '../netflix-ui/Netflix.css';

const LandingPage = ({ onLogin }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="landing-page">
            <header className="navbar">
                <div className="navbar-left">
                    <h1 className="logo" style={{ color: '#e50914', fontSize: '30px', fontWeight: 'bold', margin: '20px' }}>NETFLIX</h1>
                </div>
                <div className="navbar-right" style={{ marginRight: '20px' }}>
                    <button
                        className="signin-btn"
                        onClick={() => setIsModalOpen(true)}
                        style={{
                            backgroundColor: '#e50914',
                            color: 'white',
                            padding: '7px 17px',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '16px',
                            fontWeight: '500'
                        }}
                    >
                        Sign In
                    </button>
                </div>
            </header>

            <div className="hero-wrapper" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
                <HeroBanner />
                <div className="hero-overlay" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.4)',
                    pointerEvents: 'none'
                }}></div>
            </div>

            <AuthModal
                isOpen={isModalOpen}
                onClose={handleClose}
                onLoginSuccess={onLogin}
            />
        </div>
    );
};

export default LandingPage;
