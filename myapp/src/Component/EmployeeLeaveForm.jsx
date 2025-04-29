import React, { useState, useEffect } from 'react';

export default function LeaveForm() {
  const [formData, setFormData] = useState({
    employeeName: '',
    fromDate: '',
    toDate: '',
    noOfDays: '',
    reason: ''
  });

  const [leaveRecords, setLeaveRecords] = useState([]);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem('leaveRecords'));
    if (storedRecords) {
      setLeaveRecords(storedRecords);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevState => {
      let updatedForm = {
        ...prevState,
        [name]: value
      };

      if (name === 'fromDate' || name === 'toDate') {
        const validationResult = validateDates(
          name === 'fromDate' ? value : prevState.fromDate,
          name === 'toDate' ? value : prevState.toDate
        );

        if (!validationResult.isValid) {
          alert(validationResult.message);
          updatedForm.toDate = '';   
          updatedForm.noOfDays = '';
        } else {
          updatedForm.noOfDays = calculateDays(updatedForm.fromDate, updatedForm.toDate);
        }
      }

      return updatedForm;
    });
  };

  const validateDates = (from, to) => {
    if (from && to) {
      const fromDate = new Date(from);
      const toDate = new Date(to);

      if (toDate < fromDate) {
        return {
          isValid: false,
          message: '"To Date" cannot be earlier than "From Date". Please select a valid date.'
        };
      }
    }
    return { isValid: true };
  };

  const calculateDays = (from, to) => {
    if (from && to) {
      const fromDate = new Date(from);
      const toDate = new Date(to);
      const diffTime = toDate - fromDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      return diffDays > 0 ? diffDays : '';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.employeeName && formData.fromDate && formData.toDate && formData.noOfDays && formData.reason) {
      const updatedRecords = [...leaveRecords, formData];
      setLeaveRecords(updatedRecords);
      localStorage.setItem('leaveRecords', JSON.stringify(updatedRecords)); // Save to localStorage

      setFormData({
        employeeName: '',
        fromDate: '',
        toDate: '',
        noOfDays: '',
        reason: ''
      });

      alert('Leave Submitted Successfully!');
    } else {
      alert('Please fill all the fields properly.');
    }
  };

  return (
    <div className="container my-5">
      {/* Form Card */}
      <div className="card p-4 shadow rounded-4 border-0 bg-light">
        <h3 className="text-primary mb-4 text-center fw-bold">Leave Application Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-md-3">
              <label className="form-label fw-semibold">Employee Name</label>
              <input
                type="text"
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                className="form-control rounded-3"
                placeholder="Enter employee name"
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label fw-semibold">From Date</label>
              <input
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                className="form-control rounded-3"
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label fw-semibold">To Date</label>
              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                className="form-control rounded-3"
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label fw-semibold">No. of Days</label>
              <input
                type="text"
                name="noOfDays"
                value={formData.noOfDays}
                className="form-control rounded-3"
                disabled
              />
            </div>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-12">
              <label className="form-label fw-semibold">Reason for Leave</label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="form-control rounded-3"
                rows="3"
                placeholder="Enter the reason for leave"
                required
              ></textarea>
            </div>
          </div>

          <div className="text-end mt-4">
            <button type="submit" className="btn btn-success px-5 rounded-pill">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Records Table */}
      <div className="card p-4 shadow rounded-4 border-0 bg-white mt-5">
        <h3 className="text-secondary mb-4 text-center fw-bold">Leave Records</h3>
        {leaveRecords.length === 0 ? (
          <p className="text-center text-muted">No leave records found.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Employee Name</th>
                  <th>From Date</th>
                  <th>To Date</th>
                  <th>No. of Days</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                {leaveRecords.map((record, index) => (
                  <tr key={index}>
                    <td>{record.employeeName}</td>
                    <td>{record.fromDate}</td>
                    <td>{record.toDate}</td>
                    <td>{record.noOfDays}</td>
                    <td>{record.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
