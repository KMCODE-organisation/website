// Tarifs affichés sur le site, en euros. Source : doc « KMCODE Domotique — Offre, matériel
// et gestion des données » (prix matériel relevés le 2026-11-11, à revoir régulièrement).
// [min, max] = fourchette ; un nombre seul = prix fixe ou constaté.

export const plans = {
  diagnostic: 79,
  essential: { labor: 490, hardware: 225 },
  comfort: { labor: 1190, hardware: [500, 650] },
  vigilance: { labor: 390, perCamera: 90, camera: [60, 115] },
};

export const care = { serenity: 19, serenityPlus: 35 };

export const options = {
  aiVoice: 190,
  aiCameras: 150,
  extraDevice: 30,
  extraAutomation: 40,
  hour: 65,
};

// Ordre d'affichage du matériel de référence.
export const hardware = [
  { key: 'boxSimple', icon: 'server', price: 179 },
  { key: 'boxPro', icon: 'server', price: [200, 400] },
  { key: 'radio', icon: 'wifi', price: [45, 51] },
  { key: 'voice', icon: 'mic', price: [53, 59] },
  { key: 'tablet', icon: 'tablet', price: [150, 180] },
  { key: 'cameraIndoor', icon: 'camera', price: 60 },
  { key: 'cameraPtz', icon: 'camera', price: 69, from: true },
  { key: 'cameraOutdoor', icon: 'camera', price: 95 },
  { key: 'doorbell', icon: 'bell', price: [92, 116] },
];

/** 490 → « 490 € » (fr) / « €490 » (en) ; [500, 650] → « 500 à 650 € » / « €500–650 ». */
export function formatPrice(value, locale) {
  const fmt = new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'en-GB', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  });
  if (!Array.isArray(value)) return fmt.format(value);
  const num = new Intl.NumberFormat(locale === 'fr' ? 'fr-FR' : 'en-GB');
  const [min, max] = value;
  return locale === 'fr' ? `${num.format(min)} à ${fmt.format(max)}` : `${fmt.format(min)}–${num.format(max)}`;
}
