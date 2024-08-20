import {Link} from 'react-router-dom'
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading,login}=useLogin();

  const handleLoginSubmit = async (e) => {
      e.preventDefault();
      await login(username,password);
  }
  
  
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="p-10 w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 ">
            <h1 className="text-3xl font-semibold text-center text-gray-300 mb-5">
              Login
              <span className="text-blue-500"> ChatApp</span>
            </h1>

            <form onSubmit={handleLoginSubmit}>
              <div>
                <label htmlFor="username" className="label p-2">
                  <span className="text-base label-text text-white font-bold">Username</span>
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  placeholder="Enter your username"
                  className="input input-bordered w-full h-10"
                  />
              </div>

              <div>
                <label htmlFor="password" className="label p-2">
                  <span className="text-base label-text text-white font-bold">Password</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  id="password"
                  className="input input-bordered w-full h-10"
                />
              </div>

              <Link
                to='/signup'
                className="label text-lg hover:underline  mt-2 inline-block"
              >
                <span className="label hover:text-white text-blue-200 font-semibold ">
                  Don't have an account? Register here
                </span>
              </Link>

              <div className="">
                 {/* added the disable attibute to disable the button when the loading is true so that the user can't click the button multiple times */}
                {/*loading is a state to determine whether (login,signup,signout) are in progress or not */}
                <button className="btn btn-neutral btn-block btn-sm mt-2 py-5 flex-col text-lg text-white font-bold uppercase" disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span>: "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
