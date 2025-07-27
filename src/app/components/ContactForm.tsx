"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const formRef = useRef<HTMLFormElement>(null);

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your actual EmailJS public key
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Method 1: EmailJS (requires setup)
            // Uncomment this when you set up EmailJS
            /*
            const result = await emailjs.sendForm(
              'YOUR_SERVICE_ID',
              'YOUR_TEMPLATE_ID',
              formRef.current!,
              'YOUR_PUBLIC_KEY'
            );
            */

            // Method 2: Fallback to mailto (works immediately)
            const mailtoLink = `mailto:parthinteract@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${formData.subject}`)}&body=${encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
      `)}`;

            // Open default email client
            window.open(mailtoLink);

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');

            // Reset error message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">Send me a message</h3>

            {/* Success Message */}
            {submitStatus === 'success' && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                    <div>
                        <p className="text-green-800 font-medium text-sm sm:text-base">Message sent successfully!</p>
                        <p className="text-green-600 text-xs sm:text-sm">I&apos;ll get back to you soon.</p>
                    </div>
                </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 sm:gap-3">
                    <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                    <div>
                        <p className="text-red-800 font-medium text-sm sm:text-base">Something went wrong!</p>
                        <p className="text-red-600 text-xs sm:text-sm">Please try again or contact me directly.</p>
                    </div>
                </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                            placeholder="Your name"
                            disabled={isSubmitting}
                        />
                    </div>
                    <div>
                        <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                            placeholder="your@email.com"
                            disabled={isSubmitting}
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                        Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                        placeholder="What's this about?"
                        disabled={isSubmitting}
                    />
                </div>
                <div>
                    <label className="block text-xs sm:text-sm font-medium text-foreground mb-1.5 sm:mb-2">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                        placeholder="Tell me about your project..."
                        disabled={isSubmitting}
                    />
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                            Send Message
                        </>
                    )}
                </button>
            </form>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-muted/50 rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground">
                    💡 <strong>Tip:</strong> You can also reach me directly at{' '}
                    <a
                        href="mailto:parthinteract@gmail.com"
                        className="text-primary hover:underline"
                    >
                        parthinteract@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ContactForm; 