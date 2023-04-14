/** @format */

import logo from '../assets/logo.svg';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
const Header = () => {
  const [mobileIcon, setMobileIcon] = useState(false);
  const mobileHandler = () => {
    setMobileIcon((prev) => !prev);
  };

  return (
    <div className="flex justify-between px-[60px] py-5 items-center shadow-lg fixed w-full bg-white">
      <img src={logo} alt="logo" />
      <div onClick={mobileHandler} className="block md:hidden">
        {mobileIcon ? (
          <GrClose className="text-[30px]" />
        ) : (
          <HiOutlineMenuAlt3 className="text-[30px]" />
        )}
      </div>

      {mobileIcon && (
        <nav className="grid absolute bg-white left-0 top-[80px] w-full px-[60px]">
          <ul className="grid gap-5 pr-5 ">
            <li>
              <Link to="/">Daily Digest</Link>
            </li>
            <li>Design Tools</li>
            <li>Tutorials</li>
          </ul>
          <button className="bg-black text-white px-4 mt-5 py-2 rounded-xl">
            Subscribe
          </button>
        </nav>
      )}

      <nav className="hidden justify-center items-center md:flex">
        <ul className="flex gap-5 pr-5">
          <li>
            <Link to="/daily-digest">Daily Digest</Link>
          </li>
          <li>
            <Link to="/design-tools">Design Tools</Link>
          </li>
          <li>
            <Link to="/tutorials">Tutorials</Link>
          </li>
        </ul>
        <button className="bg-black text-white px-4 py-2 rounded-xl">
          Subscribe
        </button>
      </nav>
    </div>
  );
};

export default Header;
