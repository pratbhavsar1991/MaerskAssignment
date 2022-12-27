import React, { useState } from "react";
import { collection, addDoc, getDocs, getFirestore } from "firebase/firestore";


export const LoginComponent = (props) => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const db = getFirestore();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username, password);
    let docs = await getDocs(collection(db, "user"));
    let userObj = null;
    docs.forEach((doc) => {
      let u = doc.data();
      if (u.username == username && u.password==password)  {
        userObj = { ...u, id: doc.id };
      }
      
    });
    if (userObj) {
      props.handleUserLogin({ role: userObj.role || "student" });
    }
      // else {
    //   addDoc(collection(db, "user"), {
    //     username,
    //     password,
    //     role: "student",
    //   }).then((res) => {
    //     props.handleUserLogin({ role: "student" });
    //   });
    // }
  };

  return (
    
    <div
    style={{ backgroundImage: "url(/m.jpg)"}} 
    className="login-background flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
        <div >
         
</div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-white text-3xl font-bold tracking-tight">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Username"
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
