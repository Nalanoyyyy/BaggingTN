import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import ProductionOrders from './pages/ProductionOrders';
import NewOrderForm from './pages/NewOrderForm';
import QCBagging from './pages/QCBaggingForm';
import GorBagging from './pages/GroBagging';
import ProductionBagging from './pages/ProductionBagging';
import GlobalStyle from './GlobalStyle';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <GlobalStyle />

      {isLoggedIn && (
        <>
          <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
      )}

      <div
        style={{
          paddingTop: isLoggedIn ? '64px' : '0',
          paddingLeft: isLoggedIn && sidebarOpen ? '220px' : '0',
          transition: 'all 0.3s ease',
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/orders" />
              ) : (
                <LoginPage setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
          <Route
            path="/orders"
            element={isLoggedIn ? <ProductionOrders /> : <Navigate to="/" />}
          />
          <Route
            path="/new-order-form"
            element={isLoggedIn ? <NewOrderForm /> : <Navigate to="/" />}
          />
          <Route
            path="/qc/bagging"
            element={isLoggedIn ? <QCBagging /> : <Navigate to="/" />}
          />
          <Route
            path="/gor/bagging"
            element={isLoggedIn ? <GorBagging /> : <Navigate to="/" />}
          />
          <Route
            path="/production/bagging"
            element={isLoggedIn ? <ProductionBagging /> : <Navigate to="/" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;