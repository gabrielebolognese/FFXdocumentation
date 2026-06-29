import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import SuggestionPortal from '../components/SuggestionPortal';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Support() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'This field is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'This field is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'This field is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'This field is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const mailtoBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    const mailtoHref = `mailto:support@flashfx.app?subject=${encodeURIComponent(formData.subject)}&body=${mailtoBody}`;

    window.location.href = mailtoHref;
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <SEO
        title="Support"
        description="Get help with FlashFX. Contact our support team for assistance."
        keywords="FlashFX, support, help, contact, assistance"
      />

      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4 pt-8">
          <div className="text-yellow-accent text-[10px] font-medium uppercase tracking-widest">
            SUPPORT
          </div>
          <h1 className="text-5xl font-semibold text-white">
            How can we help?
          </h1>
          <p className="text-white/60 text-sm max-w-2xl mx-auto leading-relaxed">
            We are here to help you get the most out of FlashFX. Before reaching out, please take a moment to check the resources below, most questions are answered there.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-lg p-8">
          <p className="text-white/60 text-sm leading-relaxed text-center max-w-2xl mx-auto mb-6">
            Before submitting a support request, please visit the Troubleshooting Guide and the Tutorials section, they cover the most common questions about the editor, animation system, scripting, and 3D tools. Checking these first will get you an answer faster than waiting for a reply.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Link
              to="/runtimes"
              className="text-yellow-accent text-sm hover:underline transition-all"
            >
              Troubleshooting Guide →
            </Link>
            <Link
              to="/tutorials"
              className="text-yellow-accent text-sm hover:underline transition-all"
            >
              Tutorials →
            </Link>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {!isSubmitted ? (
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">Send us a message</h2>
                <p className="text-xs text-white/60">We typically respond within 1–2 business days.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-navy-elevated text-white text-sm px-4 py-3 rounded-md border border-white/10 focus:border-yellow-accent focus:outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="text-yellow-accent text-xs">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-navy-elevated text-white text-sm px-4 py-3 rounded-md border border-white/10 focus:border-yellow-accent focus:outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="text-yellow-accent text-xs">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <input
                    type="text"
                    name="subject"
                    placeholder="What is your question about?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-navy-elevated text-white text-sm px-4 py-3 rounded-md border border-white/10 focus:border-yellow-accent focus:outline-none transition-colors"
                  />
                  {errors.subject && (
                    <p className="text-yellow-accent text-xs">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <textarea
                    name="message"
                    placeholder="Describe your issue or question in as much detail as possible."
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-navy-elevated text-white text-sm px-4 py-3 rounded-md border border-white/10 focus:border-yellow-accent focus:outline-none transition-colors resize-y min-h-[140px]"
                  />
                  {errors.message && (
                    <p className="text-yellow-accent text-xs">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-accent text-navy-deepest font-medium py-3 px-6 rounded-md hover:bg-[#fde047] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-4 text-center">
              <h3 className="text-2xl font-semibold text-white">Message sent.</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto">
                Your email client should have opened with your message ready to send. If it did not, you can email us directly at{' '}
                <a
                  href="mailto:support@flashfx.app"
                  className="text-yellow-accent hover:underline"
                >
                  support@flashfx.app
                </a>
                .
              </p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="text-center space-y-1">
            <div className="text-yellow-accent text-[10px] font-medium uppercase tracking-widest">
              FEEDBACK
            </div>
            <h2 className="text-3xl font-semibold text-white">Make a Suggestion</h2>
            <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed">
              Help us improve the documentation by sharing what you think is missing, incorrect, or unclear.
            </p>
          </div>
          <SuggestionPortal />
        </div>

        <div className="text-center pb-16">
          <p className="text-xs text-white/60">
            You can also reach us directly at{' '}
            <a
              href="mailto:support@flashfx.app"
              className="text-yellow-accent hover:underline"
            >
              support@flashfx.app
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
}
