import GenderCheckbox from "../../components/genderCheckbox";
import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

export default function SignUp() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signUp } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(inputs);
  };

  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center ">
        <div className="flex flex-col justify-center items-center minw-96 ">
          <div className="p-10 w-auto bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-gray-100">
            <h1 className="text-3xl font-semibold text-center flex gap-3 text-gray-100 cursor-pointer">
              Sign Up
              <span className=" text-blue-500 ">ChatApp</span>
            </h1>

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="" className="label p-2">
                  <span className="label-text text-white text-base">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  className="w-full h-10 input input-bordered text-white"
                  placeholder="John Doe"
                  value={inputs.fullName}
                  onChange={(e) => {
                    setInputs({ ...inputs, fullName: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="" className="label p-2">
                  <span className="label-text text-white text-base">
                    Username
                  </span>
                </label>
                <input
                  type="text"
                  className="w-full h-10 input input-bordered text-white"
                  placeholder="johndoe"
                  value={inputs.username}
                  onChange={(e) => {
                    setInputs({ ...inputs, username: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="label p-2">
                  <span className="label-text text-white text-base">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full h-10 input input-bordered text-white"
                  value={inputs.password}
                  onChange={(e) => {
                    setInputs({ ...inputs, password: e.target.value });
                  }}
                />
              </div>
              <div>
                <label htmlFor="password" className="label p-2">
                  <span className="label-text text-white text-base">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full h-10 input input-bordered text-white"
                  value={inputs.confirmPassword}
                  onChange={(e) => {
                    setInputs({ ...inputs, confirmPassword: e.target.value });
                  }}
                />
              </div>

              {/* here onCheckBoxChange and selectedGender are passed as props so as to be used in the GenderCheckbox component */}
              <GenderCheckbox
                onCheckBoxChange={handleCheckBoxChange}
                selectedGender={inputs.gender}
              />

              <div>
                <Link
                  to="/login"
                  className="label text-m mt-2  hover:underline hover:text-white "
                >
                  <span>Already have an account? Log In</span>
                </Link>
              </div>
              <div>
                <button className="btn btn-netural btn-block btn-m mt-2 text-white">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
