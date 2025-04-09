import React, { useState } from 'react';

export default function ValidationComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    country: '',
    gender: '',
    terms: false,
    file: null
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.country) {
      newErrors.country = 'Please select a country';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select your gender';
    }

    if (!formData.terms) {
      newErrors.terms = 'You must agree to terms';
    }

    if (!formData.file) {
      newErrors.file = 'Please upload a file';
    } else {
      const allowedTypes = ['image/jpeg', 'image/png'];
      if (!allowedTypes.includes(formData.file.type)) {
        newErrors.file = 'Only JPG or PNG allowed';
      }
      if (formData.file.size > 2 * 1024 * 1024) {
        newErrors.file = 'File size must be less than 2MB';
      }
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert('Form submitted successfully!');
      console.log('Form Data:', formData);
    }
  };

  return (
    <div className="card mt-4 shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="mb-0">Form Validation</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
            {errors.name && <small className="text-danger">{errors.name}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Message:</label>
            <textarea name="message" className="form-control" value={formData.message} onChange={handleChange} />
            {errors.message && <small className="text-danger">{errors.message}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Country:</label>
            <select name="country" className="form-select" value={formData.country} onChange={handleChange}>
              <option value="">-- Select --</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
            {errors.country && <small className="text-danger">{errors.country}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label d-block">Gender:</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="male" onChange={handleChange} />
              <label className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="female" onChange={handleChange} />
              <label className="form-check-label">Female</label>
            </div>
            {errors.gender && <small className="text-danger d-block">{errors.gender}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Upload Profile Picture:</label>
            <input type="file" name="file" className="form-control" onChange={handleChange} />
            {errors.file && <small className="text-danger">{errors.file}</small>}
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" name="terms" checked={formData.terms} onChange={handleChange} />
            <label className="form-check-label">I agree to the terms and conditions</label>
            {errors.terms && <small className="text-danger d-block">{errors.terms}</small>}
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
