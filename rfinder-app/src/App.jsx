import { useState } from 'react';
import Home from './pages/Home';
import { Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeDetail from './pages/RecipeDetail';
import Favourites from './pages/Favourites';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="bg-black">
      <Routes>
        {/* Use Layout as the wrapper for all routes */}
        <Route path="/" element={<Layout />}>
          {/* Nested routes that will use the Layout's Outlet */}
          <Route index element={<Home />} />
          
          <Route path="recipes/:id" element={<RecipeDetail />} />
          
          <Route path="favourites" element={<Favourites/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
