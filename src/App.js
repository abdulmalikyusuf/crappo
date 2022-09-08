import React from 'react';

import Header from './pages/Header';
import Proposition from './pages/Proposition';
import Value from './pages/Value';
import Calculator from './pages/Calculator';
import Features from './pages/Features';
import Statistics from './pages/Statistics';
import Profit from './pages/Profit';
import Footer from './components/Footer';
import './App.css';
import Investments from './pages/Investments';

function App() {
  return (
	<div className="bg-main min-h-screen px-4 lg:px-24 xl:px-32 text-white font-Rubik">
		<Header/>
		<Proposition/>
		<Calculator/>
		<Value/>
		<Features/>
		<Statistics/>
		<Investments/>
		<Profit/>
		<Footer/>
    </div>
  );
}

export default App;
