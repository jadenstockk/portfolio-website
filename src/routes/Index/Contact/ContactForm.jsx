import React from "react";
import { useForm } from "react-hook-form";
import {IconMail} from "@tabler/icons-react"

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [result, setResult] = React.useState("");

  const onSubmit = async (data) => {
    setResult("Sending...");
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    formData.append("access_key", "7e7eead5-173e-4c43-abbc-c231fc4cc290");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const resultData = await response.json();

    if (resultData.success) {
      setResult("Form Submitted Successfully!");
      reset();
    } else {
      console.error("Error", resultData);
      setResult(resultData.message);
    }
  };

  if (result === "Form Submitted Successfully!") {
    return (
      <div className="wrapper" style={{ textAlign: 'center', padding: '50px 20px', color: 'var(--white)' }}>

        <h3 style={{ marginBottom: '10px' }}>Thank you for reaching out!</h3>
        <p style={{ marginTop: '0' }}>Your message has been sent and I will make sure to be in touch as soon as possible.</p>
      </div>
    );
  }

  return (
    <div style={{
      marginBottom: "0",
    }}>
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form column" style={{
        width: "100%",
        maxWidth: "600px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
      }}>
        <input 
          {...register("name", { required: "Name is required" })} 
          placeholder="Your Name" 
          required 
          className="input" 
          style={{
            padding: "15px",
            margin: "10px 0 2px",
            border: "2px solid var(--slate)",
            borderRadius: "5px", 
            fontFamily: "inherit",
            fontSize: "16px",
            backgroundColor: "var(--background-color-light)",
            color: "var(--white)",
            outline: "none"
          }}
        />
        {errors.name && <p style={{ color: 'lightcoral', margin: '2px 0 10px' }}>{errors.name.message}</p>}

        <input 
          {...register("email", { 
            required: "Email is required", 
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } 
          })} 
          placeholder="Your Email" 
          required 
          className="input" 
          style={{
            padding: "15px",
            margin: "10px 0 2px",
            fontFamily: "inherit",
            border: "2px solid var(--slate)",
            borderRadius: "5px",
            fontSize: "16px",
            backgroundColor: "var(--background-color-light)",
            color: "var(--white)",
            outline: "none"
          }}
        />
        {errors.email && <p style={{ color: 'lightcoral', margin: '2px 0 10px' }}>{errors.email.message}</p>}

        <textarea 
          {...register("message", { required: "Message is required" })} 
          placeholder="Your Message" 
          required 
          className="textarea" 
          style={{
            padding: "15px",
            margin: "10px 0 2px",
            border: "2px solid var(--slate)",
            borderRadius: "5px",
            fontSize: "16px",
            fontFamily: "inherit",
            backgroundColor: "var(--background-color-light)",
            color: "var(--white)",
            outline: "none",
            resize: "none",
            height: "150px"
          }}
        ></textarea>
        {errors.message && <p style={{ color: 'lightcoral', margin: '2px 0 10px' }}>{errors.message.message}</p>}

        <button type="submit" className="btn" style={{
          cursor: "pointer",
          marginTop: "30px"
        }}>Send it!</button>
      </form>
      <span className="result-message">{result}</span>
      <div style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
          marginTop: "30px",
				}}>
				<p className="description-1" style={{
					marginBottom: "-10px",
				}}>
				You can also reach out to me directly at
				</p>
				<div style={{
					display: "flex",
					marginLeft: "auto",
					marginRight: "auto",
				}}>
				<a href="mailto:jaden@jadenstock.com" style={{
					color: "white",
					display: "flex",
					alignItems: "center",
          marginTop: "0",
					gap: "8px",
				}}><IconMail /> jaden@jadenstock.com</a>
				</div>
				</div>
    </div>
  );
}
