import {Link} from 'react-router-dom'


export default function Login() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="p-6 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
              Login
              <span className="text-blue-500">ChatApp</span>
            </h1>

            <form action="">
              <div>
                <label htmlFor="username" className="label p-2">
                  <span className="text-base label-text text-white">Username</span>
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your username"
                  className="input input-bordered w-full h-10"
                />
              </div>

              <div>
                <label htmlFor="password" class="label p-2">
                  <span className="text-base label-text text-white">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="password"
                  className="input input-bordered w-full h-10"
                />
              </div>

              <Link
                to='/signup'
                className="label text-lg hover:underline  mt-2 inline-block"
              >
                <span className="label hover:text-white">
                  Don't have an account? Register here
                </span>
              </Link>

              <div className="">
                <button className="btn btn-neutral btn-block btn-sm mt-2 text-white">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}