import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <header>
      <Link to='/'>
        <span
          className='
            block
            w-20
            h-20
            mx-auto
            text-center
            border-4
            border-black
            dark:border-white
            font-bold
            text-7xl
          '
        >
          F
        </span>
        <div className='my-4' />
        <h1
          className='
            text-center
            uppercase
            font-bold
            text-3xl
          '
        >
          Forum Apps
        </h1>
      </Link>
    </header>
  );
}

export default Logo;
