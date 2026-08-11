import { useState } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import Lottie from 'lottie-react';
import emailjs from '@emailjs/browser';

// Replace this with your actual Lottie JSON file
import contactAnimation from '../../assets/ContactLottie.json';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // ========== EmailJS Setup ==========
            // 1. Go to https://www.emailjs.com (free account)
            // 2. Create Email Service + Template
            // 3. Replace the 3 values below
            await emailjs.send(
                'YOUR_SERVICE_ID',      // e.g. service_abc123
                'YOUR_TEMPLATE_ID',     // e.g. template_xyz789
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                    to_email: 'hello@vibehive.com', // Owner's email
                },
                'YOUR_PUBLIC_KEY'       // e.g. user_xxxxxxxxxxxx
            );

            setStatus({
                type: 'success',
                message: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
            });
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Something went wrong. Please try again or email us directly at hello@vibehive.com',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#f7f7f5] text-slate-900 min-h-screen">
            <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
                {/* Header */}
                <Fade cascade damping={0.15} triggerOnce>
                    <div className="text-center mb-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF5E13]">
                            Get in Touch
                        </p>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                            We’d love to hear from you
                        </h1>
                        <p className="mt-5 max-w-2xl mx-auto text-lg leading-8 text-slate-600">
                            Have a question about our products, wholesale, or partnership?
                            Send us a message — our team will reply as soon as possible.
                        </p>
                    </div>
                </Fade>

                {/* Animation + Form */}
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Left Side - Lottie Animation */}
                    <Zoom triggerOnce>
                        <div className="flex justify-center">
                            <div className="w-full max-w-md">
                                <Lottie
                                    animationData={contactAnimation}
                                    loop={true}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </Zoom>

                    {/* Right Side - Contact Form */}
                    <Fade triggerOnce delay={150}>
                        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
                            <h2 className="text-2xl font-semibold text-slate-900">Send us a message</h2>
                            <p className="mt-2 text-sm text-slate-500 mb-8">
                                Fill out the form below and we’ll respond within 24 hours.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            className="w-full rounded-xl border border-slate-200 bg-[#f8faf9] px-4 py-3 text-slate-900 outline-none focus:border-[#FF5E13] focus:ring-2 focus:ring-[#FF5E13]/20 transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="w-full rounded-xl border border-slate-200 bg-[#f8faf9] px-4 py-3 text-slate-900 outline-none focus:border-[#FF5E13] focus:ring-2 focus:ring-[#FF5E13]/20 transition"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+880 1XXX-XXXXXX"
                                            className="w-full rounded-xl border border-slate-200 bg-[#f8faf9] px-4 py-3 text-slate-900 outline-none focus:border-[#FF5E13] focus:ring-2 focus:ring-[#FF5E13]/20 transition"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="How can we help?"
                                            className="w-full rounded-xl border border-slate-200 bg-[#f8faf9] px-4 py-3 text-slate-900 outline-none focus:border-[#FF5E13] focus:ring-2 focus:ring-[#FF5E13]/20 transition"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        className="w-full rounded-xl border border-slate-200 bg-[#f8faf9] px-4 py-3 text-slate-900 outline-none focus:border-[#FF5E13] focus:ring-2 focus:ring-[#FF5E13]/20 transition resize-none"
                                    />
                                </div>

                                {/* Status Message */}
                                {status.message && (
                                    <div
                                        className={`rounded-xl px-4 py-3 text-sm ${status.type === 'success'
                                            ? 'bg-green-50 text-green-700 border border-green-200'
                                            : 'bg-red-50 text-red-700 border border-red-200'
                                            }`}
                                    >
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-xl bg-[#FF5E13] px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-[#e54f0c] focus:outline-none focus:ring-2 focus:ring-[#FF5E13] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition"
                                >
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </Fade>
                </div>

                {/* Quick Contact Info */}
                <Fade cascade damping={0.1} triggerOnce>
                    <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Phone</p>
                            <a
                                href="tel:+8801700000000"
                                className="mt-2 block font-medium text-slate-900 hover:text-[#FF5E13] transition"
                            >
                                +880 1700 000 000
                            </a>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Email</p>
                            <a
                                href="mailto:hello@vibehive.com"
                                className="mt-2 block font-medium text-slate-900 hover:text-[#FF5E13] transition"
                            >
                                hello@vibehive.com
                            </a>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Facebook</p>
                            <a
                                href="https://facebook.com/VibeHiveOfficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 block font-medium text-slate-900 hover:text-[#FF5E13] transition"
                            >
                                VibeHive Official
                            </a>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">LinkedIn</p>
                            <a
                                href="https://linkedin.com/company/vibehive"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 block font-medium text-slate-900 hover:text-[#FF5E13] transition"
                            >
                                VibeHive Company
                            </a>
                        </div>
                    </div>
                </Fade>
            </section>
        </div>
    );
};

export default Contact;