import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/banner/0704df01-5673-4583-b02f-d21225569803_0_0.webp";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../ContextAPI/ContextAPI";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { signUp, updateUser, googleLogIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // create new user
    signUp(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // update user profile
        updateUser(user, data.name)
          .then(() => {})
          .catch((error) => console.log(error));
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="relative py-10 sm:py-16 lg:py-24">
      <Helmet>
        <title>Doc House | Sign up</title>
      </Helmet>
      <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src={image} alt="medical" />
      </div>
      <div className="absolute inset-0 "></div>

      <div className="relative max-w-lg px-4 mx-auto sm:px-0">
        <div
          className="overflow-hidden  rounded-md shadow-2xl shadow-black "
          style={{
            background:
              "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe)",
          }}>
          <div className="px-4 py-6 sm:px-8 sm:py-7">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">
                Create an account
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Already joined?
                <Link
                  to="/login"
                  className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                  Sign in now
                </Link>
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    First & Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      {...register("name")}
                      required
                      placeholder="Enter your full name"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      {...register("email")}
                      required
                      placeholder="Enter email to get started"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900">
                    Password
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      {...register("password")}
                      required
                      placeholder="Enter your password"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                    Sign up
                  </button>
                </div>

                <div>
                  <button
                    onClick={handleGoogleLogIn}
                    type="button"
                    className="
                                  relative
                                  inline-flex
                                  items-center
                                  justify-center
                                  w-full
                                  px-4
                                  py-4
                                  text-base
                                  font-semibold
                                  text-gray-700
                                  transition-all
                                  duration-200
                                  bg-white
                                  border-2 border-gray-200
                                  rounded-md
                                  hover:bg-teal-300
                                  focus:bg-gray-100
                                  hover:text-black
                                  focus:text-black focus:outline-none
                              ">
                    <div className="absolute inset-y-0 left-0 p-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                      </svg>
                    </div>
                    Sign up with Google
                  </button>
                </div>
              </div>
            </form>

            <p className="max-w-xs mx-auto mt-5 text-sm text-center text-gray-600">
              This site is protected by reCAPTCHA and the Google
              <a
                href="#"
                className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                Privacy Policy
              </a>
              &
              <a
                href="#"
                className="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
