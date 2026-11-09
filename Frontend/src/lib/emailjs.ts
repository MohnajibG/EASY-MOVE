import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export const isEmailJsConfigured = Boolean(serviceId && templateId && publicKey);

export const sendBookingNotificationEmail = async (params: Record<string, string>) => {
  if (!isEmailJsConfigured) {
    console.warn(
      "EmailJS n'est pas configuré : ajoute VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID et VITE_EMAILJS_PUBLIC_KEY dans .env.local",
    );
    return;
  }

  try {
    await emailjs.send(serviceId!, templateId!, params, { publicKey: publicKey! });
  } catch (err) {
    // La notification email est secondaire : un échec ici ne doit jamais
    // empêcher la demande (déjà enregistrée dans Supabase) d'aboutir.
    console.error("Échec de l'envoi de la notification email :", err);
  }
};
