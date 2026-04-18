// ============================================================
//  MULTI-LANGUAGE SYSTEM — FR / EN / ES
//  All translations + switching engine
//  Language choice persisted via localStorage
// ============================================================

var TRANSLATIONS = {

  // ===================== INDEX.HTML =====================

  // Nav
  nav_book:               { fr: "Réserver",            en: "Book Now",              es: "Reservar" },
  nav_back:               { fr: "Retour à la flotte",  en: "Back to fleet",         es: "Volver a la flota" },

  // Hero masthead
  hero_issue:             { fr: "Numéro 07 —",         en: "Issue 07 —",            es: "Número 07 —" },
  hero_season:            { fr: "Printemps / Été 2026", en: "Spring / Summer 2026",  es: "Primavera / Verano 2026" },
  hero_tagline:           { fr: "Une voiture pour chaque dune", en: "A car for every dune", es: "Un coche para cada duna" },

  // Hero title
  hero_line1:             { fr: "Roulez au",            en: "Drive the",             es: "Conduce por" },
  hero_line2:             { fr: "bord du",              en: "edge of",               es: "el borde del" },
  hero_line3:             { fr: "Sahara.",              en: "Sahara.",                es: "Sahara." },

  // Hero CTAs
  hero_discover:          { fr: "Découvrir la flotte",  en: "Discover the fleet",    es: "Descubrir la flota" },

  // Ticker
  ticker_airport:         { fr: "Livraison gratuite à l'aéroport de Dakhla", en: "Free delivery to Dakhla airport", es: "Entrega gratuita en el aeropuerto de Dakhla" },
  ticker_km:              { fr: "illimité",             en: "unlimited",             es: "ilimitado" },
  ticker_km_label:        { fr: "Kilométrage",          en: "Mileage",               es: "Kilometraje" },
  ticker_assist:          { fr: "Assistance routière 24h/24", en: "24/7 roadside assistance", es: "Asistencia en carretera 24/7" },
  ticker_insurance:       { fr: "Assurance tous risques", en: "Full insurance",       es: "Seguro a todo riesgo" },
  ticker_languages:       { fr: "Français · English · العربية", en: "Français · English · العربية", es: "Français · English · العربية" },

  // Fleet section
  fleet_eyebrow:          { fr: "Chapitre 01 / La Flotte", en: "Chapter 01 / The Fleet", es: "Capítulo 01 / La Flota" },
  fleet_title_html:       { fr: 'Une voiture pour <span class="it">chaque route</span><br/>et chaque piste.', en: 'A car for <span class="it">every road</span><br/>and every trail.', es: 'Un coche para <span class="it">cada carretera</span><br/>y cada pista.' },

  // Filter chips
  chip_all:               { fr: "Tous",                 en: "All",                   es: "Todos" },
  chip_economy:           { fr: "Économique",           en: "Economy",               es: "Económico" },
  chip_suv:               { fr: "SUV",                  en: "SUV",                   es: "SUV" },
  chip_4x4:               { fr: "4×4",                  en: "4×4",                   es: "4×4" },
  chip_premium:           { fr: "Premium",              en: "Premium",               es: "Premium" },
  chip_minivan:           { fr: "Monospaces",           en: "Minivans",              es: "Monovolúmenes" },

  // Car card labels
  car_seats:              { fr: "Places",               en: "Seats",                 es: "Plazas" },
  car_gearbox_label:      { fr: "Boîte",                en: "Gearbox",               es: "Caja" },
  car_fuel_label:         { fr: "Carburant",            en: "Fuel",                  es: "Combustible" },
  car_traction_label:     { fr: "Traction",             en: "Drive",                 es: "Tracción" },
  car_baggage_label:      { fr: "Bagages",              en: "Luggage",               es: "Equipaje" },
  car_price_unit:         { fr: "MAD / jour",           en: "MAD / day",             es: "MAD / día" },
  car_book_link:          { fr: "Réserver →",           en: "Book →",                es: "Reservar →" },

  // Car gearbox values
  gearbox_manual:         { fr: "Manuelle",             en: "Manual",                es: "Manual" },
  gearbox_auto:           { fr: "Automatique",          en: "Automatic",             es: "Automático" },

  // Car fuel values
  fuel_diesel:            { fr: "Diesel",               en: "Diesel",                es: "Diésel" },
  fuel_gasoline:          { fr: "Essence",              en: "Gasoline",              es: "Gasolina" },

  // Car label values
  label_berline_eco:      { fr: "Berline · Économique", en: "Sedan · Economy",       es: "Berlina · Económico" },
  label_economy:          { fr: "Économique",           en: "Economy",               es: "Económico" },
  label_compact:          { fr: "Compacte",             en: "Compact",               es: "Compacto" },
  label_suv_compact:      { fr: "SUV Compact",          en: "Compact SUV",           es: "SUV Compacto" },
  label_suv_4x4:          { fr: "SUV · 4×4",            en: "SUV · 4×4",             es: "SUV · 4×4" },
  label_suv_premium:      { fr: "SUV Premium",          en: "Premium SUV",           es: "SUV Premium" },
  label_4x4_offroad:      { fr: "4×4 / Tout-terrain",   en: "4×4 / Off-road",        es: "4×4 / Todo terreno" },
  label_family_7:         { fr: "Familiale · 7 places", en: "Family · 7 seats",      es: "Familiar · 7 plazas" },
  label_minivan_9:        { fr: "Monospace · 9 places",  en: "Minivan · 9 seats",     es: "Monovolumen · 9 plazas" },

  // Destinations section
  dest_eyebrow:           { fr: "Chapitre 02 / Destinations", en: "Chapter 02 / Destinations", es: "Capítulo 02 / Destinos" },
  dest_title_html:        { fr: 'Où <span class="it">vous allez.</span>', en: 'Where <span class="it">you go.</span>', es: 'Adónde <span class="it">vas.</span>' },
  dest_sub:               { fr: "Sélectionné par l'équipe. Chaque location est accompagnée d'une carte hors ligne et d'un carnet d'adresses de spots que seuls les locaux connaissent.", en: "Curated by the team. Every rental comes with an offline map and a list of spots only locals know.", es: "Seleccionado por el equipo. Cada alquiler incluye un mapa sin conexión y una lista de lugares que solo conocen los locales." },
  dest_must_see:          { fr: "★ Incontournable",      en: "★ Must-see",            es: "★ Imprescindible" },
  dest_dune_html:         { fr: 'La Dune <em>Blanche</em>', en: 'The White <em>Dune</em>', es: 'La Duna <em>Blanca</em>' },
  dest_dune_sub:          { fr: "Dune blanche · Oued Ed-Dahab", en: "White Dune · Oued Ed-Dahab", es: "Duna Blanca · Oued Ed-Dahab" },
  dest_dragon_html:       { fr: 'Île du <em>Dragon</em>', en: 'Dragon <em>Island</em>', es: 'Isla del <em>Dragón</em>' },
  dest_lagoon_html:       { fr: 'Lagune de <em>Dakhla</em>', en: 'Dakhla <em>Lagoon</em>', es: 'Laguna de <em>Dakhla</em>' },
  dest_imlili_html:       { fr: 'Imlili <em>Sebkha</em>', en: 'Imlili <em>Sebkha</em>', es: 'Imlili <em>Sebkha</em>' },
  dest_porto_html:        { fr: 'Porto <em>Rico</em>',   en: 'Porto <em>Rico</em>',   es: 'Porto <em>Rico</em>' },

  // Why section
  why_eyebrow:            { fr: "Chapitre 03 / L'Esprit Ouahdou", en: "Chapter 03 / The Ouahdou Spirit", es: "Capítulo 03 / El Espíritu Ouahdou" },
  why_title_html:         { fr: 'Quatre raisons de <span class="it">revenir.</span>', en: 'Four reasons to <span class="it">return.</span>', es: 'Cuatro razones para <span class="it">volver.</span>' },
  why1_title_html:        { fr: 'Ancré <em>localement</em>', en: 'Rooted <em>locally</em>', es: 'Arraigado <em>localmente</em>' },
  why1_desc:              { fr: "Né à Dakhla en 2017. Nous ne vous tendons pas seulement les clés — nous vous disons où le vent faiblit, où casser la croûte, et quelle piste la pluie vient de fermer.", en: "Born in Dakhla in 2017. We don't just hand you the keys — we tell you where the wind drops, where to eat, and which trail the rain just closed.", es: "Nacidos en Dakhla en 2017. No solo te entregamos las llaves — te decimos dónde baja el viento, dónde comer, y qué pista acaba de cerrar la lluvia." },
  why2_title_html:        { fr: 'Prix <em>transparents</em>', en: 'Transparent <em>pricing</em>', es: 'Precios <em>transparentes</em>' },
  why2_desc:              { fr: "Tarifs tout compris, sans supplément aéroport et kilométrage illimité. Ce que nous annonçons, c'est ce que vous payez — en MAD, en euro, par écrit.", en: "All-inclusive rates, no airport surcharge and unlimited mileage. What we quote is what you pay — in MAD, euros, in writing.", es: "Tarifas todo incluido, sin suplemento de aeropuerto y kilometraje ilimitado. Lo que anunciamos es lo que pagas — en MAD, en euros, por escrito." },
  why3_title_html:        { fr: 'Flotte <em>récente</em>', en: 'Recent <em>fleet</em>', es: 'Flota <em>reciente</em>' },
  why3_desc:              { fr: "Véhicules de moins de quatre ans, révisés à chaque rotation, nettoyés de fond en comble. Parce qu'une pincée de sable saharien, c'est charmant — deux, beaucoup moins.", en: "Vehicles under four years old, serviced every rotation, cleaned top to bottom. Because a pinch of Saharan sand is charming — two, much less so.", es: "Vehículos de menos de cuatro años, revisados en cada rotación, limpiados a fondo. Porque una pizca de arena sahariana es encantadora — dos, mucho menos." },
  why4_title_html:        { fr: 'Disponibles, <em>toujours</em>', en: 'Available, <em>always</em>', es: 'Disponibles, <em>siempre</em>' },
  why4_desc:              { fr: "Une crevaison au PK40 à 23h ? Nous décollons. Notre téléphone est décroché par un humain, et souvent cet humain est déjà à mi-chemin.", en: "A flat tire at PK40 at 11 PM? We take off. Our phone is answered by a human, and often that human is already halfway there.", es: "¿Un pinchazo en el PK40 a las 23h? Salimos. Nuestro teléfono lo contesta una persona, y a menudo esa persona ya va a medio camino." },

  // Testimonial
  testimonial_html:       { fr: 'Nous avons loué un <em>Hilux</em> pour cinq jours de dunes et de spots de kite. Livré propre à l\'aéroport à 6h du matin, récupéré à notre riad à minuit. <em>Irréprochable</em>.', en: 'We rented a <em>Hilux</em> for five days of dunes and kite spots. Delivered clean at the airport at 6 AM, picked up at our riad at midnight. <em>Flawless</em>.', es: 'Alquilamos un <em>Hilux</em> para cinco días de dunas y spots de kite. Entregado limpio en el aeropuerto a las 6 de la mañana, recogido en nuestro riad a medianoche. <em>Impecable</em>.' },
  testimonial_loc:        { fr: "Paris → Dakhla · Mars 2026", en: "Paris → Dakhla · March 2026", es: "París → Dakhla · Marzo 2026" },

  // CTA / Contact
  cta_eyebrow:            { fr: "Réservez vos clés",     en: "Book your keys",        es: "Reserva tus llaves" },
  cta_title_html:         { fr: 'Le <em>lagon</em> vous attend.<br/>Nous aussi.', en: 'The <em>lagoon</em> awaits.<br/>So do we.', es: 'La <em>laguna</em> te espera.<br/>Nosotros también.' },
  cta_sub:                { fr: "Écrivez-nous sur WhatsApp en français, anglais ou arabe. Réponse en moins de dix minutes, tous les jours, y compris les dimanches et jours fériés.", en: "Write to us on WhatsApp in French, English or Arabic. Response in under ten minutes, every day, including Sundays and holidays.", es: "Escríbenos por WhatsApp en francés, inglés o árabe. Respuesta en menos de diez minutos, todos los días, incluidos domingos y festivos." },
  cta_wa_label:           { fr: "WhatsApp · +212 000 000 000", en: "WhatsApp · +212 000 000 000", es: "WhatsApp · +212 000 000 000" },

  // Contact details
  contact_address_label:  { fr: "Adresse",              en: "Address",               es: "Dirección" },
  contact_hours_label:    { fr: "Horaires",             en: "Hours",                 es: "Horario" },
  contact_hours_value:    { fr: "Tous les jours · 07h00 — 23h00", en: "Every day · 07:00 AM — 11:00 PM", es: "Todos los días · 07:00 — 23:00" },
  contact_airport_label:  { fr: "Aéroport",             en: "Airport",               es: "Aeropuerto" },
  contact_phone_label:    { fr: "Téléphone",            en: "Phone",                 es: "Teléfono" },
  contact_social_label:   { fr: "Réseaux",              en: "Social",                es: "Redes" },

  // Footer
  footer_desc:            { fr: "Location de voitures indépendante à la pointe sud du Maroc — pour les kitesurfeurs, les voyageurs et les curieux discrets.", en: "Independent car rental at the southern tip of Morocco — for kitesurfers, travelers and the quietly curious.", es: "Alquiler de coches independiente en el extremo sur de Marruecos — para kitesurfistas, viajeros y curiosos discretos." },
  footer_rights:          { fr: "© 2026 Ouahdou Rio Rental — Tous droits réservés", en: "© 2026 Ouahdou Rio Rental — All rights reserved", es: "© 2026 Ouahdou Rio Rental — Todos los derechos reservados" },
  footer_made:            { fr: "Fait à",                en: "Made in",               es: "Hecho en" },

  // ===================== BOOKING.HTML =====================

  // Page title
  booking_page_title:     { fr: "Réserver — Ouahdou Rio Rental · Dakhla", en: "Book — Ouahdou Rio Rental · Dakhla", es: "Reservar — Ouahdou Rio Rental · Dakhla" },

  // Car card
  booking_seats:          { fr: "Places",               en: "Seats",                 es: "Plazas" },
  booking_gearbox:        { fr: "Boîte",                en: "Gearbox",               es: "Caja" },
  booking_traction:       { fr: "Traction",             en: "Drive",                 es: "Tracción" },
  booking_price_unit:     { fr: "MAD / jour",           en: "MAD / day",             es: "MAD / día" },

  // Includes
  inc_km:                 { fr: "Kilométrage illimité",  en: "Unlimited mileage",     es: "Kilometraje ilimitado" },
  inc_insurance:          { fr: "Assurance tous risques", en: "Full insurance",       es: "Seguro a todo riesgo" },
  inc_airport:            { fr: "Livraison gratuite à l'aéroport", en: "Free airport delivery", es: "Entrega gratuita en el aeropuerto" },
  inc_assist:             { fr: "Assistance routière 24h/24", en: "24/7 roadside assistance", es: "Asistencia en carretera 24/7" },

  // Form
  form_title_html:        { fr: 'Réservez <em>votre voiture.</em>', en: 'Book <em>your car.</em>', es: 'Reserva <em>tu coche.</em>' },
  form_total_label:       { fr: "Total estimé",          en: "Estimated total",       es: "Total estimado" },
  form_select_dates:      { fr: "Sélectionnez vos dates", en: "Select your dates",   es: "Seleccione sus fechas" },
  form_pickup_date:       { fr: "Date de départ",        en: "Pick-up date",          es: "Fecha de recogida" },
  form_return_date:       { fr: "Date de retour",        en: "Return date",           es: "Fecha de devolución" },
  form_car_label:         { fr: "Voiture",               en: "Car",                   es: "Coche" },
  form_car_placeholder:   { fr: "Choisissez une voiture…", en: "Choose a car…",      es: "Elija un coche…" },
  form_pickup_loc:        { fr: "Lieu de prise en charge", en: "Pick-up location",    es: "Lugar de recogida" },
  form_loc_placeholder:   { fr: "Choisissez un lieu…",   en: "Choose a location…",   es: "Elija un lugar…" },
  form_notes:             { fr: "Notes",                 en: "Notes",                 es: "Notas" },
  form_notes_placeholder: { fr: "Numéro de vol, nom de l'hôtel, siège enfant, conducteur supplémentaire…", en: "Flight number, hotel name, child seat, additional driver…", es: "Número de vuelo, nombre del hotel, silla infantil, conductor adicional…" },
  form_submit:            { fr: "Envoyer la demande de réservation", en: "Send booking request", es: "Enviar solicitud de reserva" },
  form_note_line1:        { fr: "Aucun paiement maintenant — confirmation par WhatsApp en moins de 10 min.", en: "No payment now — confirmation via WhatsApp in under 10 min.", es: "Sin pago ahora — confirmación por WhatsApp en menos de 10 min." },
  form_note_fleet:        { fr: "Retour à la flotte",    en: "Back to fleet",         es: "Volver a la flota" },
  form_note_terms:        { fr: "Conditions de location", en: "Rental terms",         es: "Condiciones de alquiler" },

  // Pickup locations
  loc_airport:            { fr: "Aéroport de Dakhla (VIL) — gratuit", en: "Dakhla Airport (VIL) — free", es: "Aeropuerto de Dakhla (VIL) — gratis" },
  loc_pk25:               { fr: "PK25 — Zone kitesurf (+200 MAD)", en: "PK25 — Kitesurf zone (+200 MAD)", es: "PK25 — Zona kitesurf (+200 MAD)" },
  loc_hotel:              { fr: "Mon hôtel / Riad",      en: "My hotel / Riad",       es: "Mi hotel / Riad" },

  // Days text in total
  days_text:              { fr: "jour",                  en: "day",                   es: "día" },
  days_text_plural:       { fr: "jours",                 en: "days",                  es: "días" },

  // Success screen
  success_title_html:     { fr: 'Demande <em>envoyée.</em>', en: 'Request <em>sent.</em>', es: 'Solicitud <em>enviada.</em>' },
  success_sub:            { fr: "Nous confirmerons votre réservation par WhatsApp en moins de 10 minutes — tous les jours de l'année.", en: "We will confirm your booking via WhatsApp within 10 minutes — every day of the year.", es: "Confirmaremos su reserva por WhatsApp en menos de 10 minutos — todos los días del año." },
  success_wa:             { fr: "Discuter sur WhatsApp",  en: "Chat on WhatsApp",      es: "Chatear en WhatsApp" },
  success_back:           { fr: "← Retour à la flotte",  en: "← Back to fleet",       es: "← Volver a la flota" },

  // WhatsApp message
  wa_title:               { fr: "Demande de réservation", en: "Booking request",      es: "Solicitud de reserva" },
  wa_car:                 { fr: "Voiture",               en: "Car",                   es: "Coche" },
  wa_pickup_date:         { fr: "Date de départ",        en: "Pick-up date",          es: "Fecha de recogida" },
  wa_return_date:         { fr: "Date de retour",        en: "Return date",           es: "Fecha de devolución" },
  wa_duration:            { fr: "Durée",                 en: "Duration",              es: "Duración" },
  wa_location:            { fr: "Lieu de prise en charge", en: "Pick-up location",    es: "Lugar de recogida" },
  wa_total:               { fr: "Prix total estimé",     en: "Estimated total price", es: "Precio total estimado" },
  wa_travel_fee:          { fr: "Frais de déplacement",  en: "Travel fee",            es: "Gastos de desplazamiento" },
  wa_car_price:           { fr: "Prix voiture",          en: "Car price",             es: "Precio coche" },
  wa_notes:               { fr: "Notes",                 en: "Notes",                 es: "Notas" },
  total_car_price:        { fr: "Prix voiture",          en: "Car price",             es: "Precio coche" },
  total_travel_fee:       { fr: "Frais déplacement PK25", en: "PK25 travel fee",      es: "Gastos desplazamiento PK25" },

  // Booking car dropdown text
  car_dropdown_suffix:    { fr: "MAD/jour",              en: "MAD/day",               es: "MAD/día" }
};


// ============================================================
//  ENGINE
// ============================================================

/**
 * Get the current language from localStorage, default to 'fr'
 */
function getLang() {
  return localStorage.getItem('ouahdou_lang') || 'fr';
}

/**
 * Set the language and apply translations
 */
function setLang(lang) {
  localStorage.setItem('ouahdou_lang', lang);
  applyLang(lang);
}

/**
 * Get a translation by key for the current (or given) language
 */
function t(key, lang) {
  lang = lang || getLang();
  var entry = TRANSLATIONS[key];
  if (!entry) return key;
  return entry[lang] || entry['fr'] || key;
}

/**
 * Apply all translations to the page
 */
function applyLang(lang) {
  lang = lang || getLang();

  // Update lang switcher active state
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Plain text: data-i18n
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    el.textContent = t(key, lang);
  });

  // HTML content: data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    el.innerHTML = t(key, lang);
  });

  // Placeholder: data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    el.setAttribute('placeholder', t(key, lang));
  });

  // <html lang="...">
  document.documentElement.lang = lang === 'es' ? 'es' : lang === 'en' ? 'en' : 'fr';

  // Fire custom event so page scripts can re-render dynamic content
  document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: lang } }));
}

/**
 * Initialize language on page load
 * Call this at the end of your page script
 */
function initLang() {
  applyLang(getLang());
}
