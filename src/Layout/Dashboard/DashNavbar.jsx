import React, { use } from 'react';
import ThemeToggle from '../../Components/ThemeToggle/ThemeToggle';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Link } from 'react-router';
import { IoMdMenu } from 'react-icons/io';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const DashNavbar = ({ handelSideBar }) => {
  const { user, userLogout } = use(AuthContext);

  const handelLogout = () => {
    userLogout()
      .then(() => {
        Swal.fire({
          title: 'Google login successful!!',
          icon: 'success',
          draggable: true,
        });
      })
      .catch(error => {
        toast.error(error);
      });
  };

  return (
    <div className="navbar bg-white dark:bg-gray-800 shadow-xl px-2 md:px-5 ">
      <div className="flex-1">
        <button className="flex md:hidden" onClick={handelSideBar}>
          <IoMdMenu size={30} />
        </button>

        <Link to={'/'}>
          <p
            className="cursor-pointer text-xl dark:text-white text-black
          font-semibold"
          >
            <span className="font-serif font-bold text-blue-600">🏠 Room</span>
            Match
          </p>
        </Link>
      </div>
      <div className="flex gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.photoURL || ''}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#eef4ff] dark:bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={'/dashboard/dashProfile'} className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>

            <li>
              <Link to={'/dashboard/myListings'}>My post</Link>
            </li>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <span onClick={handelLogout}>Logout</span>
            </li>
          </ul>
        </div>
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
};

export default DashNavbar;
