import React from "react";
import { useState } from "react";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [phone, setphone] = useState('');


    const handleSubmit = (e) => {

        console.log('Form submitted!');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('phone:', phone);
    };

    return (
        <div>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>phone:</label>
                    <textarea
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;