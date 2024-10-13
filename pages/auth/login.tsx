import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Неверные учетные данные');
      }

      const data = await response.json();
      console.log(data);
      router.push('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100 pt-20">
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg w-96">
          <h2 className="text-3xl text-center mb-6 text-gray-800">Вход</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:bg-orange-600 transition duration-200"
          >
            Войти
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;