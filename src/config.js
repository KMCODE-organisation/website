// Coordonnées publiques affichées sur le site.
export const contactEmail = 'contact@kmcode.fr';
export const phone = { display: '07 81 93 81 54', href: 'tel:+33781938154' };

// Identité légale (mentions légales, CGV, confidentialité). Source : annuaire des entreprises
// (SIREN 993 201 334) + Kevin, 2026-11-11 (adresse et TVA confirmées). `mediator` : à compléter par Kevin.
export const company = {
  name: 'KMCODE',
  form: 'SASU',
  capital: '1 000 €',
  siren: '993 201 334',
  rcs: 'RCS Montpellier 993 201 334',
  vat: 'FR15993201334',
  address: '180 rue Louis Girardin, 34080 Montpellier',
  director: 'Kevin Morize',
  mediator: 'À COMPLÉTER (nom, adresse et site du médiateur)',
};

/** Valeurs injectées dans les textes i18n : « {email} », « {siren} »… */
export const textVars = {
  email: contactEmail,
  phone: phone.display,
  ...company,
};
