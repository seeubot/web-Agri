"use client";
import { useEffect } from "react";
import { useDialog } from "./ConfirmDialog";
const TITLE = "Unauthorized action";
const MESSAGE =
  "This content is protected.\n\nDeveloper tools, right-click, and inspection are disabled for security.";
export default function ClientGuard() {
  const showDialog = useDialog();
  useEffect(() => {
    let lastShown = 0;
    const cooldownMs = 1200;
    const fire = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      const now = Date.now();
      if (now - lastShown < cooldownMs) return;
      lastShown = now;
      showDialog({
        title: TITLE,
        message: MESSAGE,
        confirmText: "Understood",
        showCancel: false,
        variant: "warning",
      });
    };
    const blockContext = (e: MouseEvent) => fire(e);
    const blockKeys = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      const meta = e.ctrlKey || e.metaKey;
      const blocked =
        e.key === "F12" ||
        (meta && e.shiftKey && (k === "i" || k === "j" || k === "c")) ||
        (meta && (k === "u" || k === "s"));
      if (blocked) fire(e);
    };
    const blockCopy = (e: ClipboardEvent) => {
      const t = e.target as HTMLElement | null;
      const tag = t?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || t?.isContentEditable) return;
      e.preventDefault();
    };
    const blockDrag = (e: DragEvent) => {
      const t = e.target as HTMLElement | null;
      if (t?.tagName?.toLowerCase() === "img") e.preventDefault();
    };
    document.addEventListener("contextmenu", blockContext);
    document.addEventListener("keydown", blockKeys);
    document.addEventListener("copy", blockCopy);
    document.addEventListener("cut", blockCopy);
    document.addEventListener("dragstart", blockDrag);
    return () => {
      document.removeEventListener("contextmenu", blockContext);
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("copy", blockCopy);
      document.removeEventListener("cut", blockCopy);
      document.removeEventListener("dragstart", blockDrag);
    };
  }, [showDialog]);
  return null;
}
