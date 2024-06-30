import axios from "axios";
import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post("http://localhost:5000/register", {
        fullName,
        email,
        userName,
        password,
        cpassword,
      });
      alert("Register Successfully");
    } catch (err) {
      setError("Registration failed");
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <div className="flex flex-col px-6 py-4 shadow-md bg-[#f5f7f7] lg:w-[450px] h-auto w-full">
        <h1 className="font-bold text-[#896efd] mb-6 text-[20px]">
          Registration Form
        </h1>
        <form className="w-full flex flex-col" onSubmit={handleSubmit}>
          <label className="mb-3 font-semibold mt-3 text-[#896efd]">
            Full Name
          </label>
          <input
            type="text"
            className="py-2 rounded-md outline-[#896efd] px-2"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label className="mb-3 font-semibold mt-3 text-[#896efd]">
            Email
          </label>
          <input
            type="email"
            className="py-2 rounded-md outline-[#896efd] px-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="mb-3 font-semibold mt-3 text-[#896efd]">
            Username
          </label>
          <input
            type="text"
            className="py-2 rounded-md outline-[#896efd] px-2"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label className="mb-3 font-semibold mt-3 text-[#896efd]">
            Password
          </label>
          <input
            type="password"
            className="py-2 rounded-md outline-[#896efd] px-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="mb-3 font-semibold mt-3 text-[#896efd]">
            Confirm Password
          </label>
          <input
            type="password"
            className="py-2 rounded-md outline-[#896efd] px-2"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#896efd] mt-4 rounded-md text-[#fff] font-semibold"
          >
            Register Now
          </button>
          {message && <p className="mt-4 text-green-500">{message}</p>}
          {error && <p className="mt-4 text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default App;
