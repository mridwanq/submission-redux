import React from 'react';
import Logo from '../layouts/Logo';
import Theme from '../layouts/Theme';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import LogoBrandBig from '../components/layout/LogoBrandBig';
// import ThemeToggler from '../components/layout/ThemeToggler';
// import useInput from '../hooks/useInput';
// import { asyncSetAuthUser } from '../states/authUser/action';
// import useLocale from '../hooks/useLocale';

export default function IndexPage() {
  //   const { authUser = null } = useSelector((states) => states);

  //   const { txtLogin, txtPassword, txtDontHaveAccount, txtRegister } =
  //     useLocale();

  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  //   const [email, setEmail] = useInput('');
  //   const [password, setPassword] = useInput('');

  //   const onLogin = (e) => {
  //     e.preventDefault();
  //     dispatch(asyncSetAuthUser({ email, password }));
  //   };

  //   useEffect(() => {
  //     if (authUser) {
  //       navigate('/');
  //     }
  //   }, [authUser]);

  return (
    <div
      className='
        pt-16
        max-w-2xl
        mx-auto
      '
    >
      {/* header */}
      <Logo />

      <div
        className='
          t-card-big
        '
      >
        <h2
          className='
            text-2xl
            mb-8
          '
        >
          {/* {txtLogin} */}
        </h2>
        <form>
          <label className='block mb-4'>
            <span>Email</span>
            <input
              type='email'
              className='
                t-form
                t-form-base
                mt-2
              '
            />
          </label>
          <label className='block mb-4'>
            <span>Password</span>
            <input
              type='password'
              className='
              t-form
              t-form-base
              mt-2
              '
            />
          </label>
          <button
            type='submit'
            title='Login'
            className='
              w-full
              px-4
              py-3
              rounded-lg
              bg-indigo-600
              text-white
            '
          ></button>
        </form>

        <p className='text-center mt-4 text-neutral-600 dark:text-neutral-400'>
          {/* <Link to='/register' className='border-b border-gray-500'></Link> */}
        </p>
      </div>
      <div className='hidden'>
        <Theme />
      </div>
    </div>
  );
}
