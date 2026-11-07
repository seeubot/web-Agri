"use client";
import { useEffect } from "react";
const WARN = "⛔ Unauthorized action\n\nThis content is protected. Developer tools, right-click, and inspection are disabled for security.";
export default function ClientGuard() {
  useEffect(() => {
    // 1. Right-click
    const blockContext = (e: MouseEvent) => {
      e.preventDefault();
      alert(WARN);
    };
    // 2. Keyboard shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U view-source, Ctrl+S save)
    const blockKeys = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      const meta = e.ctrlKey || e.metaKey;
      const blocked =
        e.key === "F12" ||
        (meta && e.shiftKey && (k === "i" || k === "j" || k === "c")) ||
        (meta && (k === "u" || k === "s"));
      if (blocked) {
        e.preventDefault();
        e.stopPropagation();
        alert(WARN);
        return false;
      }
    };
    // 3. Copy / cut / select-drag protection (light)
    const blockCopy = (e: ClipboardEvent) => {
      // Allow copying inside inputs/textareas
      const t = e.target as HTMLElement | null;
      const tag = t?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || t?.isContentEditable) return;
      e.preventDefault();
    };
    // 4. Drag image save
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
  }, []);
  return null;
}
