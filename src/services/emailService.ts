import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
const REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    await emailjs.send(
      SERVICE_ID,
      ADMIN_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      },
      PUBLIC_KEY
    );

    await emailjs.send(
      SERVICE_ID,
      REPLY_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
      },
      PUBLIC_KEY
    );

    return { success: true };
  } catch (error: unknown) {
    console.error('Email send failed:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
    return { success: false, error: errorMessage };
  }
};
