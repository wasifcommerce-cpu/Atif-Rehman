import React from 'react';
import { useShop } from '../context/ShopContext';
import { Check, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Toast: React.FC = () => {
  const { toasts, dismissToast } = useShop();

  return (
    <div
      id="toast-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none"
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto bg-[#FFFFFF] border border-[#DED9D1] rounded-xl p-4 shadow-xl flex items-start gap-3"
          >
            {toast.image ? (
              <img
                src={toast.image}
                alt=""
                className="w-12 h-12 object-cover rounded-lg flex-shrink-0 bg-[#EEE9E1]"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-[#D9894D]/15 text-[#D9894D] flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5" />
              </div>
            )}
            <div className="flex-1 min-w-0 pr-1">
              <p className="text-sm font-medium text-[#292827]">{toast.message}</p>
              {toast.submessage && (
                <p className="text-xs text-[#68645F] mt-0.5 truncate">{toast.submessage}</p>
              )}
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="text-[#9B9995] hover:text-[#292827] transition-colors p-1"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
