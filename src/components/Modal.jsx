// src/components/Modal.jsx
import React, { useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  size = 'md',
  footer,
  closeOnOverlayClick = true,
  showCloseButton = true
}) => {
  const modalRef = useRef(null);
  
  // Fechar modal ao pressionar ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.classList.add('overflow-hidden');
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen, onClose]);
  
  // Fechar ao clicar fora do modal
  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };
  
  if (!isOpen) return null;

  // Tamanhos do modal
  const sizeClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full'
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      onClick={handleOverlayClick}
    >
      {/* Overlay com animação */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-70 transition-opacity duration-300"
        aria-hidden="true"
      />
      
      {/* Container principal */}
      <div className="flex items-center justify-center min-h-screen p-4 sm:p-6">
        <div 
          ref={modalRef}
          className={`bg-base-100 rounded-xl shadow-2xl transform transition-all duration-300 w-full border border-base-300 ${
            sizeClasses[size] || sizeClasses.md
          } overflow-hidden ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        >
          {/* Cabeçalho */}
          <div className="flex justify-between items-center p-4 sm:p-6 bg-base-200 border-b border-base-300">
            <h3 className="text-xl font-bold text-base-content">{title}</h3>
            {showCloseButton && (
              <button 
                className="btn btn-ghost btn-circle btn-sm text-base-content hover:bg-base-300"
                onClick={onClose}
                aria-label="Fechar"
              >
                <FiX className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {/* Corpo */}
          <div className="p-4 sm:p-6 bg-base-100 text-base-content">
            {children}
          </div>
          
          {/* Rodapé */}
          {footer && (
            <div className="p-4 sm:p-6 bg-base-200 border-t border-base-300">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Componente Footer para padronização
Modal.Footer = ({ children, align = 'right' }) => {
  const alignment = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    between: 'justify-between'
  };
  
  return (
    <div className={`flex ${alignment[align] || alignment.right} space-x-3`}>
      {children}
    </div>
  );
};

// Botão para modais
Modal.Button = ({ children, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    info: 'btn-info',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
    ghost: 'btn-ghost',
    outline: 'btn-outline'
  };
  
  return (
    <button
      className={`btn ${variants[variant] || variants.primary}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Modal;