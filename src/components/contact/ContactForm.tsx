import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity / Senior Systems Role',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setStatus('submitting');

    // Simulate sending with realistic network latency
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Job Opportunity / Senior Systems Role',
        message: '',
      });
    }, 1000);
  };

  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
      <h3 className="text-xl font-bold font-display text-white mb-2">
        Send a Direct Message
      </h3>
      <p className="text-xs sm:text-sm text-slate-400 mb-6">
        Whether you are recruiting for a senior infrastructure position, seeking consultation on a migration, or networking with fellow engineers.
      </p>

      {status === 'success' ? (
        <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-3 animate-in fade-in">
          <div className="w-12 h-12 rounded-full bg-emerald-900/60 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-base font-semibold text-white">Message Dispatched!</h4>
          <p className="text-xs text-slate-300 leading-relaxed max-w-md mx-auto">
            Thank you for reaching out. Mohamed has received your transmission and will review your inquiry promptly.
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="text-xs font-mono text-cyan-400 hover:underline pt-2 inline-block cursor-pointer"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === 'error' && (
            <div className="p-3 rounded-lg bg-red-950/50 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-medium text-slate-300">
                Your Name <span className="text-cyan-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-medium text-slate-300">
                Work Email <span className="text-cyan-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="s.jenkins@company.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="subject" className="block text-xs font-medium text-slate-300">
              Inquiry Scope
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            >
              <option value="Job Opportunity / Senior Systems Role">Job Opportunity / Senior Systems Role</option>
              <option value="Cloud & M365 Migration Consultation">Cloud & M365 Migration Consultation</option>
              <option value="VMware Virtualization & Datacenter Project">VMware Virtualization & Datacenter Project</option>
              <option value="Disaster Recovery & Backup Audit">Disaster Recovery & Backup Audit</option>
              <option value="General Professional Inquiry">General Professional Inquiry</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="block text-xs font-medium text-slate-300">
              Message / Details <span className="text-cyan-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your infrastructure goals, team opening, or technical requirements..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full justify-center"
            size="md"
            variant="primary"
            isLoading={status === 'submitting'}
            icon={<Send className="w-4 h-4" />}
          >
            {status === 'submitting' ? 'Transmitting Message...' : 'Transmit Message'}
          </Button>
        </form>
      )}
    </div>
  );
};
