import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const msg = {
    to: "info@ncc-driver4u.it",
    from: "noreply@ncc-driver4u.it",
    subject: "Nuova richiesta preventivo Driver4u",
    text: `Nome: ${name}\nEmail: ${email}\nServizio: ${service}\nMessaggio: ${message}`,
    html: `
      <h2>Nuova richiesta</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Servizio:</strong> ${service}</p>
      <p><strong>Messaggio:</strong><br/>${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Email not sent" });
  }
}
