import React from 'react';
import { NAV_LINKS } from '../../lib/constants';
import { Button } from '../ui/Button';
import { X, FileText, Send, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/personal';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCvModal: () => void;
  onOpenContact: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenCvModal,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-slate-950/98 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="flex items-center justify-between px-6 h-16 border-b border-slate-800">
        <span className="text-lg font-bold font-display text-white">Mohamed Teber</span>
        <button
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <nav className="flex flex-col space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={onClose}
              className="text-lg font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="pt-4 space-y-3">
          <button
            onClick={() => {
              onClose();
              onOpenCvModal();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Interactive CV / Resume</span>
          </button>
          <Button
            className="w-full justify-center"
            size="lg"
            variant="primary"
            icon={<Send className="w-4 h-4" />}
            onClick={() => {
              onClose();
              onOpenContact();
            }}
          >
            Contact Mohamed
          </Button>
        </div>

        <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PERSONAL_INFO.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
