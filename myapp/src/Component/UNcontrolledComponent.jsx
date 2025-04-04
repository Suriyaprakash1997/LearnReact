import React, { useRef, useState } from "react";

export function UncontrolledComponent() {
  const productRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const ratingRef = useRef();
  const [feedbackList, setFeedbackList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = {
      product: productRef.current.value,
      name: nameRef.current.value,
      email: emailRef.current.value,
      rating: ratingRef.current.value
    };
    setFeedbackList((prev) => [...prev, feedback]);
    e.target.reset();
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <form onSubmit={handleSubmit} className="bg-pink-50 p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-5">Product Feedback Form</h2>

        <div className="grid grid-cols-1 gap-4">
          <input ref={productRef} placeholder="Product Name" className="p-2 border border-pink-300 rounded" />
          <input ref={nameRef} placeholder="Your Name" className="p-2 border border-pink-300 rounded" />
          <input ref={emailRef} type="email" placeholder="Email" className="p-2 border border-pink-300 rounded" />

          <select ref={ratingRef} className="p-2 border border-pink-300 rounded">
            <option value="">Select Rating</option>
            <option value="5 - Excellent">5 - Excellent</option>
            <option value="4 - Good">4 - Good</option>
            <option value="3 - Average">3 - Average</option>
            <option value="2 - Poor">2 - Poor</option>
            <option value="1 - Terrible">1 - Terrible</option>
          </select>


          <button type="submit" className="bg-pink-600 py-2 rounded hover:bg-pink-700 transition">
            Submit Feedback
          </button>
        </div>
      </form>

      {/* Feedback Table */}
      {feedbackList.length > 0 && (
        <div className="mt-8 bg-white p-4 shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold text-pink-700 mb-3">Submitted Feedbacks</h3>
          <table className="w-full border text-sm">
            <thead>
              <tr className="bg-pink-200 text-left">
                <th className="border px-3 py-2">Product</th>
                <th className="border px-3 py-2">Name</th>
                <th className="border px-3 py-2">Email</th>
                <th className="border px-3 py-2">Rating</th>
                <th className="border px-3 py-2">Comment</th>
              </tr>
            </thead>
            <tbody>
              {feedbackList.map((item, idx) => (
                <tr key={idx} className="hover:bg-pink-50">
                  <td className="border px-3 py-2">{item.product}</td>
                  <td className="border px-3 py-2">{item.name}</td>
                  <td className="border px-3 py-2">{item.email}</td>
                  <td className="border px-3 py-2">{item.rating}</td>
                  <td className="border px-3 py-2">{item.comment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UncontrolledComponent;