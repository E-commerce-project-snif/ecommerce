import React from "react";

function Login() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center gap-16">
      <div className="w-80 h-80 bg-red-600"></div>
      <div className="flex flex-col w-60 gap-5">
        <h3 className="font-medium text-2xl">Create an account</h3>
        <span className="font-small">Enter your detail below</span>
        <input placeholder="Name" className="w-70 h-70" />
        <input placeholder="Email or phone number" className="w-70 h-70" />
        <input placeholder="Password" className="w-70 h-70" />
        <button className="bg-red-600 text-white text-base">
          Create account
        </button>
        {/* <button>Sign up with google</button> */}
      </div>
    </div>
  );
}

export default Login;
