const sgMail = require('@sendgrid/mail');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;
  const SENDER_EMAIL = process.env.SENDER_EMAIL || RECIPIENT_EMAIL;

  if (!SENDGRID_API_KEY || !RECIPIENT_EMAIL) {
    console.error('Missing SENDGRID_API_KEY or RECIPIENT_EMAIL env vars');
    return res.status(500).json({ error: 'Server not configured' });
  }

  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const subjectText = subject || `New contact form submission from ${name}`;
    const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const msg = {
      to: RECIPIENT_EMAIL,
      from: SENDER_EMAIL,
      replyTo: email,
      subject: subjectText,
      text,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, '<br/>')}</p>`,
    };

    await sgMail.send(msg);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('SendGrid error', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
