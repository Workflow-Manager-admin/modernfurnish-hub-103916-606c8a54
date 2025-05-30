import React from 'react';
import './App.css';
import SidebarNav from './components/SidebarNav';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="modernfurnish-app">
      <SidebarNav />
      <ProductGrid />
    </div>
  );
}

export default App;