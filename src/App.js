import React, { useState } from 'react';
import HomePage from './components/HomePage';
import DashboardPage from './components/DashboardPage';
import AboutPage from './components/AboutPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <HomePage />;
      case 'dashboard': return <DashboardPage />;
      case 'about': return <AboutPage />;
      case 'signup': return <SignUpPage />;
      case 'login': return <LoginPage />;
      default: return <HomePage />;
    }
  }

  return (
    <div className="App">
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
        <button onClick={() => setCurrentPage('about')}>About</button>
        <button onClick={() => setCurrentPage('signup')}>Sign Up</button>
        <button onClick={() => setCurrentPage('login')}>Login</button>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;