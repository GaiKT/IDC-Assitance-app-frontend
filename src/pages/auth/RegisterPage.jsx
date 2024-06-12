import { useState } from "react";
import { useAuth } from "../../contexts/authentication";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState(0);

  const { register } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username,
      password,
      firstname,
      lastname,
      level
    };
    register(data);
  };

  return (
    <>
      <header className="text-4xl">Register</header>
      <div className="mt-5">
        <form className="bg-white lg:w-1/2 rounded-lg shadow-lg p-5 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="flex justify-between">
            ชื่อผู้ใช้ *
            <input
              name="username"
              type="text"
              placeholder="Enter username here"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
              value={username}
              className="border px-2 rounded-md"
              required
            />
          </label>
        </div>
        <div>
          <label className="flex justify-between">
            รหัสผ่าน *
            <input
              name="password"
              type="password"
              placeholder="Enter password here"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
              className="border px-2 rounded-md"
              required
            />
          </label>
        </div>
        <div>
          <label className="flex justify-between">
            ชื่อจริง *
            <input
              name="firstname"
              type="text"
              placeholder="Enter first name here"
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
              value={firstname}
              className="border px-2 rounded-md"
              required
            />
          </label>
        </div>
        <div>
          <label  className="flex justify-between">
            นามสกุล *
            <input
              name="lastname"
              type="text"
              placeholder="Enter last name here"
              onChange={(event) => {
                setLastname(event.target.value);
              }}
              value={lastname}
              className="border px-2 rounded-md"
              required
            />
          </label>
        </div>
        <div>
          <label  className="flex justify-between">
            ระดับผู้ใช้ *
            <select name="level" 
            className="border px-2 rounded-md text-sm"
            onChange={(event) => {
              setLevel(event.target.value);
            }}
            required>
              <option disabled>โปรดเลือกระดับของผู้ใช้</option>
              <option value={1}>User</option>
              <option value={2}>Admin</option>
            </select>
          </label>
        </div>
        <div className="flex w-full justify-end gap-3">
          <button type="submit" className="btn btn-success text-white">Submit</button>
          <Link to={'/admin'}>
            <button>Back</button>
          </Link>
        </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;