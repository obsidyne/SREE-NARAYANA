// UserForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Booking.css';

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        phone: '',
        email: '',
        reason: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.reason.split(' ').length > 200) {
            alert('Reason must not exceed 200 words.');
            return;
        }

        try {
            const response = await axios.post('https://your-backend-endpoint.com/api/form', formData);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting the form:', error);
            alert('An error occurred while submitting the form.');
        }
    };

    return (
        <div className="form-container">
            <h2>Submit Your Details</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="reason">Reason:</label>
                <textarea
                    id="reason"
                    name="reason"
                    placeholder='no more then 200 words'
                    value={formData.reason}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserForm;
