/**
 * Gusto / Rcs Pasticceria - Multilingual Data & Configuration
 * 100% Vanilla JS, autonomous data source
 */

const SITE_DATA = {
  info: {
    name: "Rcs Pasticceria",
    brand: "Rcs",
    subtitleIt: "Bar & Pasticceria",
    subtitleEn: "Bar & Pastry Shop",
    location: "Brescia",
    area: "Mompiano, Brescia",
    address: "Via del Brolo, 34A, 25132 Brescia BS",
    phone: "030 345 6832",
    phoneHref: "tel:+390303456832",
    email: "rcspasticceria@gmail.com",
    emailHref: "mailto:rcspasticceria@gmail.com",
    facebook: "https://www.facebook.com/profile.php?id=100090723205992",
    googleMaps: "https://www.google.com/maps/place/Rcs+Pasticceria/@45.5832903,10.2310383,17z",
    mapEmbed: "https://maps.google.com/maps?q=Rcs%20Pasticceria%20Via%20del%20Brolo%2034A%20Brescia&t=&z=16&ie=UTF8&iwloc=&output=embed",
    rating: "4.5"
  },

  schedule: [
    { dayIt: "Lunedì", dayEn: "Monday", open: null, close: null },
    { dayIt: "Martedì", dayEn: "Tuesday", open: "07:30", close: "19:30" },
    { dayIt: "Mercoledì", dayEn: "Wednesday", open: "07:30", close: "19:30" },
    { dayIt: "Giovedì", dayEn: "Thursday", open: "07:30", close: "19:30" },
    { dayIt: "Venerdì", dayEn: "Friday", open: "07:30", close: "19:30" },
    { dayIt: "Sabato", dayEn: "Saturday", open: "07:30", close: "19:30" },
    { dayIt: "Domenica", dayEn: "Sunday", open: "08:00", close: "13:00" }
  ],

  translations: {
    it: {
      nav: {
        mondo: "Il Nostro Mondo",
        experience: "Esperienza",
        vetrina: "Vetrina",
        menu: "Menu",
        visit: "Visita"
      },
      hero: {
        tagline: "Bar & Pasticceria · Brescia",
        title: "L'arte del dolce, nel cuore di Brescia",
        subtitle: "Un rifugio di lievito, caffè e dolcezza. Dove ogni mattina comincia con il profumo del cornetto caldo e ogni pomeriggio si concede una pausa.",
        ctaVisit: "Vieni a trovarci",
        ctaMenu: "Scopri il menu",
        scroll: "Scorri per scoprire"
      },
      experience: {
        label: "L'Esperienza",
        title: "Un rituale di sensi",
        intro: "Non è solo una pasticceria. È un luogo dove il tempo rallenta, dove l'arco di pietra accoglie e il profumo del caffè appena macinato ti ferma sulla soglia.",
        items: [
          {
            kicker: "La mattina",
            title: "Il profumo del lievito alle 7:00",
            text: "La luce entra morbida dall'arco, il bancone bianco si riempie di cornetti appena sfornati e il vapore del cappuccino si mesconde al profumo della pasta sfoglia.",
            image: "assets/images/interior.jpg",
            alt: "Interno della pasticceria"
          },
          {
            kicker: "Il gesto",
            title: "L'arte dietro il bancone",
            text: "Le mani del pasticcere dosano la crema con precisione millimetrica. Ogni bignè, ogni sfogliatella nasce da un gesto ripetuto, curato, mai uguale.",
            image: "assets/images/chef.jpg",
            alt: "L'arte dietro il bancone"
          },
          {
            kicker: "Il pomeriggio",
            title: "Una pausa a Mompiano",
            text: "Sotto i lampadari di metallo, tra lo sgabello turchese e il legno chiaro, il tempo si concede una sospensione. Un morso, un sorso, una conversazione.",
            image: "assets/images/serving.jpg",
            alt: "Una pausa a Mompiano"
          }
        ]
      },
      vetrina: {
        label: "La Vetrina",
        title: "Dolci che raccontano una storia",
        intro: "Ogni creazione è pensata per essere guardata prima che assaggiata. Sfoglia, crema, frutta fresca: la materia prima diventa arte.",
        viewMenu: "Vedi il menu completo",
        items: [
          {
            name: "Millefoglie ai Frutti di Bosco",
            desc: "Pasta sfoglia dorata, crema chantilly e frutti di bosco freschi.",
            image: "assets/images/millefoglie.jpg"
          },
          {
            name: "Torta alle Fragole",
            desc: "Pan di Spagna soffice, fragolone fresco e glassa lucida.",
            image: "assets/images/strawberryCake.jpg"
          },
          {
            name: "Tortino Fragola e Meringa",
            desc: "Monoporzione con panna montata e fragola, copertura di meringa sbriciolata.",
            image: "assets/images/torte.jpg"
          },
          {
            name: "Torta al Caramello Salato",
            desc: "Mousse vellutata, glassa all'ambra e briciole di biscotto dorato.",
            image: "assets/images/caramelCake.jpg"
          },
          {
            name: "Sfogliatella Riccia",
            desc: "Sfoglia croccante ripiena di crema di semolino e ricotta.",
            image: "assets/images/serving.jpg"
          },
          {
            name: "Bignè al Pistacchio",
            desc: "Pasta choux leggera, crema di pistacchio verde e brillante.",
            image: "assets/images/bite.jpg"
          }
        ]
      },
      menu: {
        label: "Il Menu",
        title: "Carta della casa",
        intro: "Una selezione pensata per ogni momento della giornata, dalla colazione alla merenda.",
        categories: [
          {
            name: "Colazione",
            items: [
              { name: "Cappuccino", desc: "Espresso e latte cremato" },
              { name: "Cornetto", desc: "Artigianale — vuoto, crema, cioccolato o marmellata" },
              { name: "Espresso", desc: "Miscela di casa, tostatura artigianale" },
              { name: "Caffè Latte", desc: "Latte caldo e caffè, in tazza grande" }
            ]
          },
          {
            name: "Pasticceria",
            items: [
              { name: "Sfogliatella", desc: "Riccia o frolla, ripiena di crema" },
              { name: "Cannolo", desc: "Cialda croccante, crema di ricotta" },
              { name: "Bignè alla Crema", desc: "Pasta choux, crema pasticcera" },
              { name: "Millefoglie", desc: "Pasta sfoglia, crema chantilly" }
            ]
          },
          {
            name: "Torte",
            items: [
              { name: "Torta alle Fragole", desc: "Pan di Spagna e fragolone fresco" },
              { name: "Millefoglie", desc: "Sfoglia, crema e frutti di bosco" },
              { name: "Torta al Caramello", desc: "Mousse, caramello e biscotto" },
              { name: "Tartellette alla Frutta", desc: "Frolla, crema e frutta di stagione" }
            ]
          },
          {
            name: "Caffetteria",
            items: [
              { name: "Macchiato", desc: "Espresso con una nuvola di latte" },
              { name: "Orzo", desc: "Orzo tostato, senza caffeina" },
              { name: "Cioccolata", desc: "Calda, densa, in tazza" },
              { name: "Tè e Tisane", desc: "Selezione di foglie sfuse" }
            ]
          }
        ]
      },
      visit: {
        label: "Visita",
        title: "Vieni a trovarci",
        addressLabel: "Indirizzo",
        hoursLabel: "Orari",
        contactLabel: "Contatti",
        openNow: "Aperto ora",
        closedNow: "Chiuso",
        dayClosed: "Chiuso",
        until: "fino alle",
        directions: "Ottieni indicazioni",
        call: "Chiama",
        email: "Scrivici",
        summary: "Mar–Sab 07:30–19:30 · Dom 08:00–13:00 · Lun chiuso"
      },
      footer: {
        tagline: "L'arte del dolce, nel cuore di Brescia.",
        follow: "Seguici",
        rights: "Tutti i diritti riservati.",
        madeWith: "Pasticceria artigianale dal cuore di Mompiano"
      }
    },

    en: {
      nav: {
        mondo: "Our World",
        experience: "Experience",
        vetrina: "Showcase",
        menu: "Menu",
        visit: "Visit"
      },
      hero: {
        tagline: "Bar & Pastry Shop · Brescia",
        title: "The art of pastry, in the heart of Brescia",
        subtitle: "A refuge of leavening, coffee and sweetness. Where every morning begins with the scent of a warm croissant and every afternoon allows itself a pause.",
        ctaVisit: "Visit us",
        ctaMenu: "Explore the menu",
        scroll: "Scroll to discover"
      },
      experience: {
        label: "The Experience",
        title: "A ritual of the senses",
        intro: "It is not just a pastry shop. It is a place where time slows down, where the stone arch welcomes you and the scent of freshly ground coffee stops you at the threshold.",
        items: [
          {
            kicker: "Morning",
            title: "The scent of yeast at 7:00 AM",
            text: "Light enters softly through the arch, the white counter fills with freshly baked croissants and the steam of a cappuccino blends with the scent of puff pastry.",
            image: "assets/images/interior.jpg",
            alt: "Interior of the pastry shop"
          },
          {
            kicker: "The gesture",
            title: "The art behind the counter",
            text: "The pastry chef's hands measure cream with millimetric precision. Every choux, every sfogliatella is born from a repeated, cared-for, never identical gesture.",
            image: "assets/images/chef.jpg",
            alt: "The art behind the counter"
          },
          {
            kicker: "Afternoon",
            title: "A pause in Mompiano",
            text: "Beneath the metal chandeliers, between the teal stool and the light wood, time grants itself a suspension. A bite, a sip, a conversation.",
            image: "assets/images/serving.jpg",
            alt: "A pause in Mompiano"
          }
        ]
      },
      vetrina: {
        label: "The Showcase",
        title: "Sweets that tell a story",
        intro: "Every creation is meant to be looked at before it is tasted. Puff pastry, cream, fresh fruit: raw matter becomes art.",
        viewMenu: "View the full menu",
        items: [
          {
            name: "Mille-feuille with Berries",
            desc: "Golden puff pastry, chantilly cream and fresh berries.",
            image: "assets/images/millefoglie.jpg"
          },
          {
            name: "Strawberry Cake",
            desc: "Soft sponge, fresh strawberries and glossy glaze.",
            image: "assets/images/strawberryCake.jpg"
          },
          {
            name: "Strawberry & Meringue Tartlet",
            desc: "Single portion with whipped cream and strawberry, meringue crumble coating.",
            image: "assets/images/torte.jpg"
          },
          {
            name: "Salted Caramel Cake",
            desc: "Velvety mousse, amber glaze and golden cookie crumbs.",
            image: "assets/images/caramelCake.jpg"
          },
          {
            name: "Sfogliatella Riccia",
            desc: "Crisp pastry filled with semolina and ricotta cream.",
            image: "assets/images/serving.jpg"
          },
          {
            name: "Pistachio Choux",
            desc: "Light choux pastry, bright green pistachio cream.",
            image: "assets/images/bite.jpg"
          }
        ]
      },
      menu: {
        label: "The Menu",
        title: "House Menu",
        intro: "A selection created for every moment of the day, from breakfast to afternoon snack.",
        categories: [
          {
            name: "Breakfast",
            items: [
              { name: "Cappuccino", desc: "Espresso and velvety steamed milk" },
              { name: "Croissant", desc: "Handmade — plain, cream, chocolate or jam" },
              { name: "Espresso", desc: "House blend, artisan roasted" },
              { name: "Caffè Latte", desc: "Warm milk and espresso in a large cup" }
            ]
          },
          {
            name: "Pastry",
            items: [
              { name: "Sfogliatella", desc: "Crisp or shortcrust pastry filled with cream" },
              { name: "Cannolo", desc: "Crispy shell, sweet ricotta cream" },
              { name: "Cream Choux", desc: "Choux pastry, classic pastry cream" },
              { name: "Mille-feuille", desc: "Puff pastry, chantilly cream" }
            ]
          },
          {
            name: "Cakes",
            items: [
              { name: "Strawberry Cake", desc: "Sponge cake and fresh strawberries" },
              { name: "Mille-feuille", desc: "Puff pastry, cream and fresh berries" },
              { name: "Caramel Cake", desc: "Mousse, caramel and biscuit" },
              { name: "Fruit Tartlets", desc: "Shortcrust pastry, cream and seasonal fruit" }
            ]
          },
          {
            name: "Coffee Bar",
            items: [
              { name: "Macchiato", desc: "Espresso with a cloud of milk foam" },
              { name: "Barley Coffee", desc: "Roasted barley, caffeine-free" },
              { name: "Hot Chocolate", desc: "Warm, dense, in a cup" },
              { name: "Tea & Infusions", desc: "Selection of loose leaves" }
            ]
          }
        ]
      },
      visit: {
        label: "Visit",
        title: "Come find us",
        addressLabel: "Address",
        hoursLabel: "Opening hours",
        contactLabel: "Contact",
        openNow: "Open now",
        closedNow: "Closed",
        dayClosed: "Closed",
        until: "until",
        directions: "Get directions",
        call: "Call",
        email: "Write to us",
        summary: "Tue–Sat 07:30–19:30 · Sun 08:00–13:00 · Mon closed"
      },
      footer: {
        tagline: "The art of pastry, in the heart of Brescia.",
        follow: "Follow us",
        rights: "All rights reserved.",
        madeWith: "Artisan pastry from the heart of Mompiano"
      }
    }
  }
};
