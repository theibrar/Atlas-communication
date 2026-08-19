'use client';

export default function Toast({ toasts }) {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div class="toast-container" id="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} class="toast">
          <i class="fa-solid fa-circle-check" style={{ color: '#ffffff', fontSize: '1.2rem' }}></i>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
