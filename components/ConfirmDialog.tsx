"use client";
import { useEffect, useState, createContext, useContext, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle } from "lucide-react";
type DialogOptions = {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: "warning" | "info" | "danger";
  /** If false, only a single "OK" button is shown */
  showCancel?: boolean;
};
type DialogState = DialogOptions & {
  resolve: (value: boolean) => void;
} | null;
type DialogContextValue = {
  showDialog: (opts: DialogOptions) => Promise<boolean>;
};
const DialogContext = createContext<DialogContextValue | null>(null);
export function DialogProvider({ children }: { children: React.ReactNode }) {
  const [dialog, setDialog] = useState<DialogState>(null);
  const showDialog = useCallback((opts: DialogOptions) => {
    return new Promise<boolean>((resolve) => {
      setDialog({ ...opts, resolve });
    });
  }, []);
  const close = (result: boolean) => {
    if (dialog) {
      dialog.resolve(result);
      setDialog(null);
    }
  };
  return (
    <DialogContext.Provider value={{ showDialog }}>
      {children}
      <AnimatePresence>
        {dialog && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => close(false)}
          >
            <motion.div
              className="w-full max-w-sm rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 text-center">
                <div
                  className={`mx-auto mb-4 w-14 h-14 rounded-full flex items-center justify-center ${
                    dialog.variant === "danger"
                      ? "bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400"
                      : dialog.variant === "info"
                      ? "bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400"
                      : "bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400"
                  }`}
                >
                  <AlertTriangle className="w-7 h-7" />
                </div>
                {dialog.title && (
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {dialog.title}
                  </h3>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                  {dialog.message}
                </p>
              </div>
              <div
                className={`px-4 pb-4 flex gap-2 ${
                  dialog.showCancel === false ? "" : "flex-row"
                }`}
              >
                {dialog.showCancel !== false && (
                  <button
                    onClick={() => close(false)}
                    className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {dialog.cancelText || "Cancel"}
                  </button>
                )}
                <button
                  onClick={() => close(true)}
                  className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors ${
                    dialog.variant === "danger"
                      ? "bg-red-600 hover:bg-red-700"
                      : dialog.variant === "info"
                      ? "bg-sky-600 hover:bg-sky-700"
                      : "bg-brand-600 hover:bg-brand-700"
                  }`}
                >
                  {dialog.confirmText || "OK"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DialogContext.Provider>
  );
}
export function useDialog() {
  const ctx = useContext(DialogContext);
  if (!ctx) {
    throw new Error("useDialog must be used inside <DialogProvider>");
  }
  return ctx.showDialog;
}
