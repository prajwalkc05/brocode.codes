# EmailJS Setup Guide

## 1. Create EmailJS Account
Visit https://www.emailjs.com/ and sign up

## 2. Add Email Service
- Go to Email Services
- Add your email provider (Gmail recommended)
- Note your Service ID

## 3. Create Template 1 (Admin Notification)

**Template ID:** `template_admin_notification`

**Subject:**
```
New Contact Request from {{from_name}}
```

**Content:**
```
You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

---
Sent from BroCode Contact Form
```

**Variables to use:**
- `{{from_name}}`
- `{{from_email}}`
- `{{message}}`
- `{{to_name}}`

## 4. Create Template 2 (Auto-Reply)

**Template ID:** `template_auto_reply`

**Subject:**
```
Thank you for contacting BroCode
```

**Content:**
```
Hello {{to_name}},

Thank you for reaching out to us. We have received your message and our team will get back to you within 24 hours.

Your message:
{{message}}

Best regards,
BroCode Team
```

**Variables to use:**
- `{{to_name}}`
- `{{to_email}}`
- `{{message}}`

## 5. Get Public Key
- Go to Account > API Keys
- Copy your Public Key

## 6. Configure Environment Variables

Create `.env` file in project root:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_ADMIN_TEMPLATE_ID=template_admin_notification
VITE_EMAILJS_REPLY_TEMPLATE_ID=template_auto_reply
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 7. Test the Form

1. Fill out the contact form
2. Admin should receive notification email
3. User should receive auto-reply email
4. Check spam folders if emails don't arrive

## Security Features Included

✅ Form validation
✅ Rate limiting (1 submission per minute)
✅ Email format validation
✅ Duplicate submission prevention
✅ Loading states
✅ Error handling

## Troubleshooting

**Emails not sending?**
- Check environment variables are set correctly
- Verify template IDs match exactly
- Check EmailJS dashboard for errors
- Ensure email service is connected

**Auto-reply not working?**
- Verify REPLY_TEMPLATE_ID is correct
- Check template variables match
- Test template in EmailJS dashboard

**Rate limit issues?**
- Default is 1 minute between submissions
- Adjust in `useEmailForm.js` if needed
