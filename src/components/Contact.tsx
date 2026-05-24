import React, { useState } from 'react';

const ERROR_MESSAGES = {
    emailAlreadySent: "Email has already been sent in the last 24 hours.",   
};

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            // Make API request to your server
            const response = await fetch('https://o1kx9mdd85.execute-api.eu-west-2.amazonaws.com/prod/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    subject: "HarryCraven.dev Contact Form",
                    message: formData.message,
                }),
            });

            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }

            const data = await response.json();
            const success = data.success;

            if (!success) {
                if(data.message === ERROR_MESSAGES.emailAlreadySent){
                    throw new Error(ERROR_MESSAGES.emailAlreadySent);
                } else {
                    throw new Error('Failed to send message. Please try again.');
                }
            }
            
            // Success feedback
            setSubmitStatus('success');
            setFormData({ email: '', message: '' });
            
            // Reset success message after 3 seconds
            setTimeout(() => setSubmitStatus('idle'), 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
            
            // Reset error message after 3 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
                setErrorMessage('');
            }, 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-900/50">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
                    {/* Left Column: Text & Socials */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Let's <span className="text-blue-500">Connect</span>
                            </h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                            </p>
                        </div>
                        
                        <div className="space-y-4">
                            <ContactInfo icon="📧" text="harrycraven.dev@gmail.com" href="mailto:harrycraven.dev@gmail.com" />
                            <ContactInfo icon="📍" text="South England, UK" />
                        </div>

                        <div className="flex gap-6 pt-4">
                            <SocialLink label="GitHub" href="https://github.com/HarryCravDev" />
                            <SocialLink label="LinkedIn" href="https://www.linkedin.com/in/harry-craven-837601172/" />
                            {/* <SocialLink label="Twitter" href="#" /> */}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full md:w-1/2">
                        <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-xl relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            
                            <div className="space-y-6 relative z-10">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-white resize-none"
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className={`w-full py-4 font-bold rounded-xl transition-all duration-300 transform ${
                                        isSubmitting 
                                            ? 'bg-gray-600 cursor-not-allowed' 
                                            : submitStatus === 'success'
                                            ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-1'
                                            : submitStatus === 'error'
                                            ? 'bg-gradient-to-r from-red-600 to-rose-600 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1'
                                            : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1'
                                    } text-white`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : submitStatus === 'success' ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                            Message Sent!
                                        </span>
                                    ) : submitStatus === 'error' ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                            </svg>
                                            Failed to Send
                                        </span>
                                    ) : (
                                        'Send Message'
                                    )}
                                </button>
                                {submitStatus === 'error' && errorMessage && (
                                    <p className="text-red-400 text-sm text-center mt-2 animate-pulse">
                                        {errorMessage}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* Background Decor (Optimized for Mobile GPU) */}
            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)' }} />
            <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)' }} />
        </section>
    );
};

const ContactInfo = ({ icon, text, href }: { icon: string; text: string; href?: string }) => (
    <div className="flex items-center gap-4 text-gray-300">
        <span className="text-2xl">{icon}</span>
        {href ? (
            <a href={href} className="hover:text-blue-400 transition-colors">{text}</a>
        ) : (
            <span>{text}</span>
        )}
    </div>
);

const SocialLink = ({ label, href }: { label: string; href: string }) => (
    <a 
        href={href} 
        className="text-gray-400 hover:text-white font-medium transition-colors hover:underline decoration-blue-500 decoration-2 underline-offset-4"
        target="_blank"
    >
        {label}
    </a>
)

export default Contact;
