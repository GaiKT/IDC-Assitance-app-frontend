import { useState } from "react";
import { useAuth } from "../../contexts/authentication";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    login({
      username,
      password,
    });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-200">
      <form className="w-80 p-10 flex flex-col gap-6 shadow-xl rounded-lg bg-white" onSubmit={handleSubmit}>
        <h1 className="text-center font-bold text-4xl">Login Page</h1>
        <div>
          <label className="flex justify-between">
            Username 
            <input
              id="username"
              name="username"
              className="px-2"
              type="text"
              placeholder="Enter username here"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              value={username}
            />
          </label>
        </div>
        <div>
          <label className="flex justify-between">
            Password
            <input
              id="password"
              name="password"
              type="password"
              className="px-2"
              placeholder="Enter password here"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
            />
          </label>
        </div>
        <div>
          <button className=" bg-green-600 p-2 w-full rounded-lg shadow-lg text-white font-bold " type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;