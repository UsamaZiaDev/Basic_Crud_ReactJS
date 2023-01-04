import { Routes, Route } from "react-router-dom";

import Employee from './../Employe/Index'

const Index = () => {
  return (
    <div className="container mt-5">
      <Routes>
        
        <Route path="/" element={<Employee/>} />

        <Route path="*" element={<> 404 page Error </>} />

      </Routes>
    </div>
  )
}

export default Index