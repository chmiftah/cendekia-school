
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* 
        If it's home, we don't add top padding so the Hero starts at top (under transparent header).
        Header height is ~72px, so for other pages we need pt-[72px] or slightly more. 
        Using pt-20 (80px) for comfortable breathing room on inner pages.
      */}
      <main className={`flex-grow ${isHome ? '' : 'pt-20'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
