// CENTRAL CONFIG — edit contact details here only. Every component reads from this file.
export const CONFIG = {
  name: "Kisakye Alexander",
  title: "Freelance Web Developer",
  email: "xxan03363@gmail.com",
  phoneDisplay: "+256 754 544 803",
  phoneHref: "+256754544803",
  whatsappNumber: "256754544803", // no +, no leading 0 — required wa.me format
  location: "Uganda",
  serviceArea: "Uganda and remote clients",
  availability: "Available for freelance web projects",
};

export function waLink(message) {
  const base = `https://wa.me/${CONFIG.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
