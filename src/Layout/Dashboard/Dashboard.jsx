import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import DashNavbar from './DashNavbar';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);

  const handelSideBar = () => {
    if (window.innerWidth < 768) {
      setSidebar(prev => !prev);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebar(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen dark:text-white text-black">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <DashNavbar handelSideBar={handelSideBar} />
      </div>

      {/* Main Content with Sidebar */}
      <div className="flex relative ">
        {/* Sticky Sidebar */}
        {sidebar && (
          <>
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              className="md:w-[20%] absolute lg:static left-0 "
            >
              <div className="sticky top-16 h-[calc(100vh-4rem)] bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
                <Sidebar />
              </div>
            </motion.div>
          </>
        )}

        {/* Main Outlet */}
        <div className="md:w-[80%] p-4 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
