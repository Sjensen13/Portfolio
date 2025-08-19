// EmailJS Configuration
// You need to replace these with your actual EmailJS credentials
// Get these from: https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_jb19f38', // Your EmailJS service ID
  TEMPLATE_ID: 'template_234v8fn', // Your EmailJS template ID
  PUBLIC_KEY: 'O0b4mFqILVkMBf4Kf', // Your EmailJS public key
}

// For development, you can use environment variables
// Create a .env file in your project root and add:
// VITE_EMAILJS_SERVICE_ID=your_service_id
// VITE_EMAILJS_TEMPLATE_ID=your_template_id
// VITE_EMAILJS_PUBLIC_KEY=your_public_key

export const getEmailJSConfig = () => ({
  SERVICE_ID: (import.meta as any).env.VITE_EMAILJS_SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID,
  TEMPLATE_ID: (import.meta as any).env.VITE_EMAILJS_TEMPLATE_ID || EMAILJS_CONFIG.TEMPLATE_ID,
  PUBLIC_KEY: (import.meta as any).env.VITE_EMAILJS_PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY,
})
