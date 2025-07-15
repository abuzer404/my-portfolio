# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## EmailJS Integration for Contact Form

This project uses [EmailJS](https://www.emailjs.com/) to send contact form submissions directly to your email. To enable this feature:

1. **Sign up at [EmailJS](https://dashboard.emailjs.com/)** and create a new email service and email template.
2. **Get your Service ID, Template ID, and Public Key** from the EmailJS dashboard.
3. **Create a `.env` file in the project root** (or use your deployment provider's environment variable settings) and add:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Restart your dev server** after adding environment variables.

The contact form will now send emails using your EmailJS configuration. No sensitive keys are hardcoded in the codebase.
