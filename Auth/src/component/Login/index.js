import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useUserLoginAuth } from "#hooks/auth/index.js";

export default function LoginUser() {

  const { handleLoginWithGoogle, handleLoginWithApple, handleLoginWithFacebook, handleLoginWithPhone } = useUserLoginAuth()
  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in With:</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                  <NavLink to={"/accounts/forgot-password"} className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</NavLink>
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <button type="submit"
                onClick={handleLoginWithPhone}
                className="flex w-full justify-center rounded-md bg-gray-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >Log In</button>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
              New account?
              <NavLink to={"/accounts/signup"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> SignUp</NavLink>
            </p>
          </form>
          <div className='flex flex-col justify-items-center items-center  gap-4'>

            <button
              onClick={handleLoginWithGoogle}
              className="flex justify-center text-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <span>Continue with Google</span>
            </button>
            <button
              onClick={handleLoginWithFacebook}
              className="flex  justify-center text-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <span>Continue with Facebook</span>

            </button>
            <div id="recaptcha-container">

            </div>

          </div>
        </div>
      </div>
      <div>
        <img
        src='/images/login-welcome.png'
        alt='login-welcome'
        />
      </div> 

    </div>

  )
}