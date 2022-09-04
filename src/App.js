import React from 'react';

import Header from './pages/Header';
import Proposition from './pages/Proposition';
import Value from './pages/Value';
import Features from './pages/Features';
import Statistics from './pages/Statistics';
import Profit from './pages/Profit';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
	<div className="bg-main min-h-screen px-32 text-white font-Rubik">
		<Header/>
		<Proposition/>
		<Value/>
		<Features/>
		<Statistics/>
		<Footer/>
      
    </div>
  );
}

export default App;
