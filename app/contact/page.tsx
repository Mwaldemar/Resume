"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import styles from './contact.module.scss';
import { AlertCircle, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";
import Image from "next/image";
import clsx from "clsx";

// https://dev.to/high5dev/how-to-send-emails-via-emailjs-in-a-nextjs-application-44p5

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const sendEmail = async (formData: FormData) => {
        try {
            const res = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                { ...formData },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            if (res.status === 200) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus("error");
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        sendEmail(formData);
    };

    return (
        <div className={styles.container}>
            <div className={styles.pictureContainer}>
                <Image className={styles.picture} src={"/mikkel2.png"} width={400} height={360} alt="Mikkel picture" />
            </div>
            <div className={styles.borderContainer}>
                <div className={styles.border} />
            </div>
            <div className={styles.formContainer}>
                <div className={styles.title}>Contact Me</div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputContainer}>
                        <div>Name:</div>
                        <input
                            name="name"
                            placeholder="Your Name"
                            onChange={handleChange}
                            required
                            className={styles.input}
                            value={formData.name}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <div>Email:</div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            onChange={handleChange}
                            required
                            className={styles.input}
                            value={formData.email}
                        />
                    </div>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        onChange={handleChange}
                        required
                        className={styles.textarea}
                        value={formData.message}
                    />
                    <button type="submit" className={styles.button}>Send Message</button>
                </form>
                <div className={styles.statusMessageContainer}>
                    {status && (
                        <div
                            className={clsx(styles.statusMessage, status === "success" && styles.success, status === "error" && styles.error)}
                        >
                            {status === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                            {status === "success" ? "Email sent successfully!" : "Something went wrong. Try again."}
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}
