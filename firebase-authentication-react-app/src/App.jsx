import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import { auth } from './firebase/config';
import { signOut } from 'firebase/auth';

function App() {
  const navigate=useNavigate();
  const handleLogout=async()=>{
    await signOut(auth);
    alert('Logged out');
    navigate('/login');
  }
  return(
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-tr from-indigo-300 to-purple-300 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Firebase Auth App</h1>
      <button onClick={handleLogout} className="bg-white text-purple-700 px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition">Logout</button>

    </div>
  )
}

export default App
