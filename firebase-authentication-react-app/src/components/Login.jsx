import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

export default function Login(){
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState('');
  const navigate=useNavigate();
  const handleLogin=async(e)=>{
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth,email,password);
      alert('Login Successful');
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  }
  return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to your Account</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-green-500" />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
        <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300">Login</button>
        <p className="text-center mt-4 text-sm">Don't have an account?{' '} <Link to="/signup" className="text-indigo-700 font-semibold hover:underline">Signup here</Link></p>
      </form>

    </div>
  )
}