import GenderCheckbox from "../../components/genderCheckbox";


export default function SignUp() {
  return (
    <>
      <div className="flex flex-col justify-center items-center minw-96 mx-auto">
        <div className="p-6 w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100">
          <h1 className="text-3xl font-semibold text-center text-gray -300">
            Sign Up
            <span className="hover:underline text-blue-500 ">ChatApp</span>
          </h1>

          <form>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="label-text  text-base">First Name</span>
              </label>
              <input
                type="text"
                className="w-full h-10 input input-bordered"
                placeholder="John "
              />
            </div>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="label-text  text-base">Last Name</span>
              </label>
              <input
                type="text"
                className="w-full h-10 input input-bordered"
                placeholder="Doe"
              />
            </div>
            <div>
              <label htmlFor="" className="label p-2">
                <span className="label-text  text-base">Username</span>
              </label>
              <input
                type="text"
                className="w-full h-10 input input-bordered"
                placeholder="johndoe"
              />
            </div>
            <div>
              <label htmlFor="password" className="label p-2">
                <span className="label-text  text-base">Password</span>
              </label>
              <input
                type="password" placeholder="Enter password"
                className="w-full h-10 input input-bordered"
              />
            </div>
            <div>
              <label htmlFor="password" className="label p-2">
                <span className="label-text  text-base">Confirm Password</span>
              </label>
              <input
                type="password" placeholder="Confirm password"
                className="w-full h-10 input input-bordered"
              />
            </div>
            <GenderCheckbox />
            <div>
              <a
                href="#"
                className="label text-m mt-2 hover:underline hover:text-blue-600 hover:font-bold"
              >
                <span>Already have an account? Log In</span>
              </a>
            </div>
            <div>
              <button className="btn btn-netural btn-block btn-m mt-2">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
