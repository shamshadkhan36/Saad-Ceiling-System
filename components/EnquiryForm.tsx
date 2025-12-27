
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const EnquiryForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Get a Free Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
            placeholder="Enter your phone"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Requirement</label>
          <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all">
            <option>False Ceiling</option>
            <option>POP Work</option>
            <option>Gypsum Work</option>
            <option>Full Interior Decor</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
          <textarea
            rows={3}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={status !== 'idle'}
          className="w-full bg-sky-600 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-sky-700 transition-all flex items-center justify-center active:scale-95 disabled:opacity-70"
        >
          {status === 'loading' ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : status === 'success' ? (
            'Sent Successfully!'
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Enquiry
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
