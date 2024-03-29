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
      <form className="w-1/2 h-1/2 p-10 flex flex-col gap-6 shadow-xl rounded-lg bg-white items-center" onSubmit={handleSubmit}>
        <h1 className="text-center font-extrabold text-4xl mb-2">IDC Assistance</h1>
        <div className="w-3/5 h-full flex flex-col gap-10 text-xl px-5">
          <div>
            <label className="flex justify-between">
              Username :
              <input
                id="username"
                name="username"
                className="w-4/6 text-center h-10 border border-green-700 rounded-lg"
                type="text"
                placeholder="Enter username here"
                required
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                value={username}
              />
            </label>
          </div>
          <div>
            <label className="flex justify-between">
              Password :
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-4/6 text-center h-10 border border-green-700 rounded-lg"
                placeholder="Enter password here"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
            </label>
            <p className="text-red-700 text-center"></p>
          </div>
          <div className="flex justify-center">
            <button className=" bg-green-600 p-2 w-4/6 rounded-lg shadow-lg text-white font-bold " type="submit">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;