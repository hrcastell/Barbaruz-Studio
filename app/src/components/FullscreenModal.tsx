import { useEffect } from 'react';
import { X } from 'lucide-react';

interface FullscreenModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const FullscreenModal = ({ open, onClose, children }: FullscreenModalProps) => {
  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] w-full h-full"
      onClick={onClose}
    >
      {/* Botón X - Arriba a la derecha */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-[10000] w-12 h-12 rounded-full bg-[#1D1C19]/80 hover:bg-[#1D1C19] text-[#E8E4DC] flex items-center justify-center transition-all duration-300 backdrop-blur-sm shadow-lg"
        aria-label="Cerrar"
      >
        <X size={24} />
      </button>

      {/* Contenido del Modal - Fullscreen */}
      <div
        className="w-full h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default FullscreenModal;
