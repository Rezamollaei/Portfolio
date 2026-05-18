import { useState } from 'react';

export const socialLinks = [
  { key: 'contact.directGitHub', url: 'https://github.com/Rezamollaei' },
  { key: 'contact.directLinkedIn', url: 'https://www.linkedin.com/in/reza-mollaei/' },
  { key: 'contact.directEmailLabel', url: 'mailto:contact@rezamollaei.dev' }
];

export const useContactForm = (t) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    const subject = t('contact.form.emailSubject');
    const body = [
      `${t('contact.form.nameLabel')}: ${form.name.trim()}`,
      `${t('contact.form.emailLabel')}: ${form.email.trim()}`,
      '',
      `${t('contact.form.messageLabel')}:`,
      form.message.trim()
    ].join('\n');

    window.location.href = `mailto:contact@rezamollaei.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return { form, onChange, onSubmit };
};
