import React, { useState } from "react";

export function ControlledComponent() {
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        department: "",
        gender: ""
      });
    
      const [submittedData, setSubmittedData] = useState([]);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData((prev) => [...prev, formData]);
        console.log("Form submitted:", formData);
        setFormData({ name: "", age: "", email: "", department: "", gender: "" });
      
      };
    
      return (
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded-xl">
            <h2 className="text-xl font-bold text-center">Controlled Student Form</h2>
    
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
            <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} className="w-full p-2 border rounded" />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" />
            <input name="department" placeholder="Department" value={formData.department} onChange={handleChange} className="w-full p-2 border rounded" />
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
    
            <button type="submit" className="w-full bg-blue-500  p-2 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
    
          {/* Temporary Table Below */}
          {submittedData.length > 0 && (
            <div className="mt-6 bg-white shadow-md rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-3">Submitted Students</h3>
              <table className="w-full table-auto border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Age</th>
                    <th className="border p-2">Email</th>
                    <th className="border p-2">Department</th>
                    <th className="border p-2">Gender</th>
                  </tr>
                </thead>
                <tbody>
                  {submittedData.map((student, index) => (
                    <tr key={index}>
                      <td className="border p-2">{student.name}</td>
                      <td className="border p-2">{student.age}</td>
                      <td className="border p-2">{student.email}</td>
                      <td className="border p-2">{student.department}</td>
                      <td className="border p-2">{student.gender}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      );
}



export default ControlledComponent;