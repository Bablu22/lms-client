import React from "react";

const LoginForm = () => {
  return (
    <form className="space-y-6 mt-10" action="#" method="POST">
      <div>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          required
          className="input"
        />
      </div>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Password"
          required
          className="input"
        />
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-accent px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm "
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
