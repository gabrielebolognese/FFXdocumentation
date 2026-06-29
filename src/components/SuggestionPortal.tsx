import { useState } from 'react';
import { Lightbulb, ChevronDown, CheckCircle } from 'lucide-react';

const CATEGORIES = [
  { value: 'tutorial_suggestion', label: 'Tutorial Suggestion' },
  { value: 'content_mistake', label: 'Content Mistake' },
  { value: 'missing_topic', label: 'Missing Topic' },
  { value: 'unclear_explanation', label: 'Unclear Explanation' },
  { value: 'outdated_content', label: 'Outdated Content' },
  { value: 'broken_link', label: 'Broken Link or Asset' },
  { value: 'other', label: 'Other' },
];

interface FormData {
  name: string;
  email: string;
  category: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  category?: string;
  message?: string;
}

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function SuggestionPortal() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    category: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'This field is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'This field is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.category) newErrors.category = 'Please select a category.';
    if (!formData.message.trim()) newErrors.message = 'This field is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('success');
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', category: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-navy-elevated text-white text-sm px-4 py-3 rounded-md border transition-colors focus:outline-none ${
      errors[field]
        ? 'border-red-400 focus:border-red-400'
        : 'border-white/10 focus:border-yellow-accent'
    }`;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white/5 border border-white/10 rounded-lg p-8 space-y-6">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 w-8 h-8 rounded-md bg-yellow-accent/10 flex items-center justify-center shrink-0">
            <Lightbulb className="w-4 h-4 text-yellow-accent" />
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-white">Make a Suggestion</h2>
            <p className="text-xs text-white/60 leading-relaxed">
              Spotted something wrong, missing, or unclear in the docs? Let us know,every suggestion helps us improve.
            </p>
          </div>
        </div>

        {status === 'success' ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle className="w-12 h-12 text-green-400" />
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">Suggestion received!</h3>
              <p className="text-white/60 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you for helping us improve the documentation. We'll review your feedback shortly.
              </p>
            </div>
            <button
              onClick={handleReset}
              className="mt-2 text-yellow-accent text-sm hover:underline transition-all"
            >
              Submit another suggestion
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/50 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass('name')}
                />
                {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-white/50 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-white/50 uppercase tracking-wider">
                Category
              </label>
              <div className="relative">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`appearance-none w-full bg-navy-elevated text-sm px-4 py-3 rounded-md border transition-colors focus:outline-none pr-10 ${
                    formData.category ? 'text-white' : 'text-white/40'
                  } ${
                    errors.category
                      ? 'border-red-400 focus:border-red-400'
                      : 'border-white/10 focus:border-yellow-accent'
                  }`}
                >
                  <option value="" disabled>Select a category</option>
                  {CATEGORIES.map(cat => (
                    <option key={cat.value} value={cat.value} className="text-white bg-[#1a2035]">
                      {cat.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              </div>
              {errors.category && <p className="text-red-400 text-xs">{errors.category}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-white/50 uppercase tracking-wider">
                Your Suggestion
              </label>
              <textarea
                name="message"
                placeholder="Describe what should be added, corrected, or improved..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`${inputClass('message')} resize-y min-h-[140px]`}
              />
              {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-yellow-accent text-black font-medium py-3 px-6 rounded-md hover:bg-[#fde047] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Submitting...' : 'Submit Suggestion'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
