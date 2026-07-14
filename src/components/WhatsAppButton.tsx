import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/2209537401"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-dabanani-green hover:bg-dabanani-green/90 text-white p-4 rounded-full shadow-2xl flex items-center justify-center z-50 transition-all hover:scale-110 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" aria-hidden="true" />
    </a>
  );
}
