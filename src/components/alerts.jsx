// src/utils/alerts.js
import Swal from 'sweetalert2';

// Função para exibir alertas de sucesso
export const showSuccessAlert = (title, text = '') => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: title,
    text: text,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
};

// Você pode criar outras funções para diferentes tipos de alerta
export const showErrorAlert = (title, text = '') => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'error',
    title: title,
    text: text,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
};

// Ou uma função mais genérica que aceita opções personalizadas
export const showAlert = (options) => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
    ...options, // Permite sobrescrever as opções padrão
  });
};