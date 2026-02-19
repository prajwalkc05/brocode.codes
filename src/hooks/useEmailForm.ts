import { useState, useRef } from 'react';
import { sendContactEmail } from '@/services/emailService';
import { useToast } from '@/hooks/use-toast';

const SERVICES = [
  'Website Development',
  'Mobile App Development',
  'UI/UX Design',
  'E-Commerce Solutions',
  'AI/ML Projects',
  'Data Analytics',
  'Other'
];

export const useEmailForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', service: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const lastSubmitTime = useRef(0);
  const { toast } = useToast();

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim() || !formData.service) {
      toast({
        title: 'Validation Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address',
        variant: 'destructive',
      });
      return false;
    }

    return true;
  };

  const checkRateLimit = () => {
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime.current;
    const RATE_LIMIT = 60000; // 1 minute

    if (timeSinceLastSubmit < RATE_LIMIT) {
      const waitTime = Math.ceil((RATE_LIMIT - timeSinceLastSubmit) / 1000);
      toast({
        title: 'Please Wait',
        description: `You can submit again in ${waitTime} seconds`,
        variant: 'destructive',
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm() || !checkRateLimit()) return;

    console.log('Form data being sent:', formData); // Debug log

    setIsSubmitting(true);

    const result = await sendContactEmail(formData);

    if (result.success) {
      toast({
        title: 'Message Sent!',
        description: "We'll get back to you soon. Check your email for confirmation.",
      });
      setFormData({ name: '', email: '', phone: '', message: '', service: '' });
      lastSubmitTime.current = Date.now();
    } else {
      toast({
        title: 'Failed to Send',
        description: result.error || 'Please try again later',
        variant: 'destructive',
      });
    }

    setIsSubmitting(false);
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return {
    formData,
    isSubmitting,
    handleSubmit,
    updateField,
    services: SERVICES,
  };
};
