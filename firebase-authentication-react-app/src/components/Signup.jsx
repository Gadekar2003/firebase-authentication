import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { Link, useNavigate } from "react-router-dom";

export default function Signup(){
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const navigate=useNavigate();
  const handleSignup=async(e)=>{
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth,email,password);
      alert('Account created Successfully');
      navigate('/')

    } catch (error) {
      alert(error.message);
    }
  }
  return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold mb--6 text-center">Create New Account</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blur-500" />
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus-ring-blue-500" />
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Sign Up</button>
        <p>Already have an account?{' '} <Link to="/login" className="text-purple-700 font-semibold hover:underline">Login here</Link></p>
      </form>

    </div>
  )
}