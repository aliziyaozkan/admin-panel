import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      toast.success('Giriş başarılı!', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
      setTimeout(()=> {
        navigate('/main/sales');  
      },1000); 
  
    } else {
      setError('Yanlış kullanıcı adı veya şifre');
      toast.error('Yanlış kullanıcı adı veya şifre', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-purple-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col items-center">
        <img src="./src/images/avatar.png" alt="Avatar" className="w-48 h-52 mb-4" />
        <h2 className="text-2xl font-semibold mb-4">Admin Paneli Giriş</h2>
        <form onSubmit={handleLogin} className="w-full">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Kullanıcı Adı"
              className="w-full p-2 border font-semibold border-gray-400 rounded-md focus:outline-none focus:ring-2  placeholder:font-semibold"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Şifre"
              className="w-full p-2 border font-semibold border-gray-400 rounded-md focus:outline-none focus:ring-2 placeholder:font-semibold "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-400 border-2 border-solid border-black font-semibold py-2 rounded-md hover:bg-gray-200 transition duration-200"
          >
            Giriş Yap
          </button>
        </form>
        {error && <p className="mt-2 text-red-500 text-center">{error}</p>}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
