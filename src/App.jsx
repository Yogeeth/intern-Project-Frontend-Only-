import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/adminpanel/Login';
import DashBoard from './components/adminpanel/DashBoard';
import EnterCode from './components/client/EnterCode';
import ContactForm from './components/client/ContactForm';
import HomePage from './components/HomePage';
import ProtectedRoute from './ProtectedROute';
import ShootingStars from './components/adminpanel/shootingStars';
import ViewFroms from './components/client/ViewForms';


export default function App() {
  const [code, setCode] = useState("");  // State to store the code
  const [form,setForms] = useState("");
  // Function to handle the data coming from ContactForm
  console.log("form=",form)
  const handleData = (data) => {
    setCode(data);  // Update the code state with the received value
    console.log('Received code:', data);
  };

  const handleForm = (data)=>{
    console.log("Data=",typeof(data))
    setForms(data)
    
  }

  return (
    <div>
      <Router>
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashBoard />
                        </ProtectedRoute>
                    }
                />
          <Route path="/contactForm" element={<EnterCode handle={handleData} />} />
          <Route path={`/:name/:id`} element={<ContactForm handleForm={handleForm} />} />
          <Route path={`/stars`} element={<ShootingStars />} />
          <Route path={`/viewforms/client/:id`} element={<ViewFroms />} />
        </Routes>
      </Router>
    </div>
  );
}
