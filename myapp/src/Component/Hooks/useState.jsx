import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <><h1  style={{
          marginBottom: "5px"}}>Hooks useState</h1><div
            style={{
                maxWidth: "420px",
                margin: "auto",
                padding: "25px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #6e8efb, #a777e3)",
                color: "#fff",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
            }}
        >
            <h2 style={{ textAlign: "center", marginBottom: "15px" }}>💬 Get in Touch</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "12px",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "16px",
                    }} />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "12px",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "16px",
                    }} />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{
                        width: "100%",
                        padding: "10px",
                        marginBottom: "12px",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "16px",
                        minHeight: "100px",
                    }}
                ></textarea>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "12px",
                        background: "#ff9800",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "18px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: "0.3s",
                    }}
                    onMouseOver={(e) => (e.target.style.background = "#e68900")}
                    onMouseOut={(e) => (e.target.style.background = "#ff9800")}
                >
                    🚀 Send Message
                </button>
            </form>
        </div></>
    );
}
