// Coordonnées publiques affichées sur le site.
export const contactEmail = 'contact@kmcode.fr';
export const phone = { display: '07 81 93 81 54', href: 'tel:+33781938154' };

// Identité légale (mentions légales, CGV, confidentialité). Source : annuaire des entreprises
// (SIREN 993 201 334) + Kevin, 2026-11-11 (adresse et TVA confirmées). `mediator` : médiateur pas encore désigné (issue bloquante).
export const company = {
  name: 'KMCODE',
  form: 'SASU',
  capital: '1 000 €',
  siren: '993 201 334',
  rcs: 'RCS Montpellier 993 201 334',
  vat: 'FR15993201334',
  address: '180 rue Louis Girardin, 34080 Montpellier',
  director: 'Kevin Morize',
  // Phrase complète affichée dans les CGV (fr). Médiateur pas encore choisi : voir l'issue « Médiateur ».
  mediator: 'Ses coordonnées vous sont communiquées sur votre devis.',
  mediatorEn: 'Their contact details are given on your quote.',
};

/** Valeurs injectées dans les textes i18n : « {email} », « {siren} »… */
export const textVars = {
  email: contactEmail,
  phone: phone.display,
  ...company,
};
