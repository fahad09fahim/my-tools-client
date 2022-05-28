import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../Hook/useToken";
import Loading from "../Shared/Loading";
const SignUp = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, GUser, GLoading, GError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = async (data) =>
    await createUserWithEmailAndPassword(data.email, data.password);
  let errorMessage;
  const [token] = useToken(user || GUser);
  if (token) {
    navigate("/");
  }
  if (loading || GLoading) {
    return <Loading />;
  }
  if (error) {
    errorMessage = (
      <p className="text-red-500">
        <span>{error?.message}</span>
      </p>
    );
  }
  return (
    <div className="flex justify-center  my-16  ">
      <div className="card w-96 bg-secondary text-white shadow-xl">
        <div className="card-body ">
          <h2 className="text-center text-3xl ">Log in</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("name", {
                  required: {
                    value: "true",
                    message: "Name is Required",
                  },
                })}
                autoComplete="off"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: "true",
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs text-black"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-xl">Password</span>
              </label>
              <input
                autoComplete="off"
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs text-black"
                {...register("password", {
                  required: {
                    value: "true",
                    message: "Password is Required",
                  },

                  minLength: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    message:
                      "Minimum six characters, at least one letter and one number",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <input
              className="btn  w-full max-w-xs text-white"
              type="submit"
              value="Sign Up"
            />
          </form>
          {errorMessage}

          <p className="text-center text-sm">
            Already have an Account? {""}
            <Link to="/login" className="text-black w-19">
              Sign in
            </Link>
          </p>
          <div className="divider">Or</div>
          <h2 onClick={() => signInWithGoogle()} className="mx-auto">
            <FaGoogle className="h-12 w-10" />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
