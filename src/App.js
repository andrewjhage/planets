import './App.css';
import React from 'react';
import AppRoutes from './components/AppRoutes';
import MainLayout from './components/MainLayout';
import Footer from './components/Footer';

function App() {
  return (
    <MainLayout>
      <AppRoutes />
      <Footer />
    </MainLayout>
  );
}

export default App;
