import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      email,
      password
    };

    try {
      // Perform the fetch request to the backend
      const response = await fetch('http://localhost:3000/user/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Parse the JSON response from the backend
      const result = await response.json();

      // Handle the response from the server
      if (response.ok) {
        console.log('Login successful:', result);
        // Handle successful login, e.g., redirect to another page or store token
      } else {
        console.error('Login failed:', result);
        setError(result.error || 'An error occurred. Please try again.');
      }
    } catch (err) {
      console.error('Request failed:', err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center content-center justify-center min-h-screen bg-[#1f1f1f]">
      <div className="bg-[#181818] p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-semibold text-white mb-6 text-center">Welcome back</h1>
        <form onSubmit={handleSubmit}>
          <div className="text-left my-2">Email</div>
          <div className="w-5/5 border border-[#424242] rounded-lg flex mb-4 bg-[#181818] text-white">
            <input
              type="email"
              placeholder="xyz@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent placeholder:text-[#424242] w-full px-3 py-2 outline-none text-gray-300"
            />
          </div>

          <div className="text-left my-2">Password</div>
          <div className="w-5/5 border border-[#424242] rounded-lg flex mb-4 bg-[#181818] text-white">
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-transparent placeholder:text-[#424242] w-full px-3 py-2 outline-none text-gray-300"
            />
          </div>

          {error && (
            <div className="text-red-500 text-center mb-4">
              <span>{error}</span>
            </div>
          )}

          <div className="flex w-5/5 h-10 items-center justify-center mb-4">
            <button
              type="submit"
              className="w-full bg-[#3b3b3b] text-white text-xl rounded-lg hover:bg-[#2a2a2a] py-2"
            >
              Sign In
            </button>
          </div>

          <div className="text-center text-[#6c6b6b]">
            Don’t have an account?{' '}
            <span className="text-blue-600 hover:underline">
            <Link to="/" className=" text-blue-700">
            {" "}
            Create one
          </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
