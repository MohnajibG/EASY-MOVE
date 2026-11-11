export type Lang = "fr" | "en" | "ar";

export const languages: { code: Lang; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "fr", label: "FR", dir: "ltr" },
  { code: "en", label: "EN", dir: "ltr" },
  { code: "ar", label: "AR", dir: "rtl" },
];

export const dict = {
  fr: {
    meta: {
      title: "Easy Move — Déménagement en toute facilité",
      description:
        "Easy Move - Déménagement résidentiel, professionnel et longue distance partout en Algérie. Devis gratuit, prix fixe garanti.",
    },
    nav: {
      accueil: "Accueil",
      services: "Services",
      tarifs: "Tarifs",
      stockage: "Stockage",
      emballage: "Emballage",
      avis: "Avis",
      faq: "FAQ",
      devis: "Devis gratuit",
      openMenuAria: "Ouvrir le menu",
    },
    hero: {
      badge: "Partout en Algérie",
      titlePart1: "Votre déménagement,",
      titleHighlight: "en toute facilité",
      subtitle:
        "Équipe professionnelle, transport sécurisé et emballage soigné. Votre bien, notre priorité — où que vous alliez en Algérie.",
      ctaPrimary: "Obtenir un devis gratuit",
      imgAlt: "Déménager c'est stressant, la solution avec Easy Move",
    },
    trustbar: {
      items: [
        "Devis en 2 minutes",
        "Prix fixe garanti",
        "Disponible 7j/7",
        "Partout en Algérie",
      ],
    },
    services: {
      eyebrow: "Nos services",
      title: "Tout ce qu'il faut pour déménager l'esprit tranquille",
      subtitle:
        "Quel que soit votre besoin, notre équipe s'occupe de tout, de A à Z.",
      items: [
        {
          title: "Déménagement résidentiel",
          desc: "Appartement ou maison, nous prenons soin de chaque meuble et carton du départ à l'arrivée.",
        },
        {
          title: "Bureaux & entreprises",
          desc: "Déménagement professionnel organisé pour limiter l'arrêt de votre activité.",
        },
        {
          title: "Longue distance",
          desc: "D'une wilaya à l'autre, votre déménagement est planifié et suivi de bout en bout.",
        },
        {
          title: "Petits déménagements",
          desc: "Studio, quelques meubles ou objets volumineux : un service adapté, sans minimum.",
        },
        {
          title: "Service rapide",
          desc: "Besoin de déménager vite ? Nous nous organisons pour intervenir dans les meilleurs délais.",
        },
        {
          title: "Transport sécurisé",
          desc: "Véhicules équipés et équipe formée pour un transport sans dommage.",
        },
      ],
    },
    whyUs: {
      eyebrow: "Pourquoi Easy Move",
      title: "Le déménagement, sans le stress",
      subtitle: "Déménager, c'est stressant. Avec Easy Move, ça ne l'est plus.",
      pillars: [
        {
          title: "Équipe professionnelle",
          desc: "Des déménageurs formés et expérimentés, qui traitent vos biens comme les leurs.",
        },
        {
          title: "Transport sécurisé",
          desc: "Véhicules adaptés et arrimage soigné pour un trajet sans accroc.",
        },
        {
          title: "Emballage & manutention",
          desc: "Matériel professionnel et gestes précis pour chaque objet, fragile ou non.",
        },
        {
          title: "Votre bien, notre priorité",
          desc: "Partout en Algérie, on s'engage sur un service soigné du premier au dernier carton.",
        },
      ],
    },
    pricing: {
      eyebrow: "Tarification",
      title: "Un prix fixe, sans surprise",
      subtitle:
        "Nous vous donnons un tarif garanti avant le jour de votre déménagement. La durée du chargement ne change rien au prix annoncé.",
      cta: "Demander mon prix fixe",
      includedTitle: "Toujours inclus dans votre devis",
      included: [
        "Devis ferme avant le jour J",
        "Main d'œuvre et carburant inclus",
        "Protection de vos meubles",
        "Protection murs, sols et portes",
        "Aucun frais caché, jamais",
      ],
    },
    storage: {
      eyebrow: "Stockage",
      title: "Besoin de place ? Stockez en toute sérénité",
      subtitle:
        "Entre deux logements ou pour désencombrer, nous récupérons vos biens à domicile et les stockons en lieu sûr aussi longtemps que nécessaire.",
      cta: "Demander un devis stockage",
      points: [
        {
          title: "Garde-meuble sécurisé",
          desc: "Vos affaires sont stockées dans un espace surveillé, à l'abri de l'humidité.",
        },
        {
          title: "Courte ou longue durée",
          desc: "Quelques jours ou plusieurs mois, vous gardez le contrôle sur la durée.",
        },
        {
          title: "Récupération flexible",
          desc: "Nous venons chercher et livrons vos biens au moment qui vous arrange.",
        },
      ],
    },
    packing: {
      eyebrow: "Emballage",
      title: "On emballe, vous n'avez rien à faire",
      subtitle:
        "Matériel professionnel et méthode adaptée à chaque objet. Voici ce que nous emballons avec le plus grand soin :",
      items: [
        "Télévisions et écrans plats",
        "Miroirs et vitres",
        "Lampes et luminaires",
        "Tableaux et objets décoratifs",
        "Ordinateurs et électronique",
        "Vaisselle et objets fragiles",
      ],
      statNumber: "100%",
      statLabel: "matériel pro fourni",
    },
    gallery: {
      eyebrow: "En images",
      title: "Notre flotte, nos couleurs",
      alts: [
        "Camion Easy Move, vue avant",
        "Ruban adhésif Easy Move",
        "Logo Easy Move",
        "Camion Easy Move, vue arrière",
        "Monte-meuble Easy Move",
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Tout ce que vous devez savoir",
      items: [
        {
          q: "Combien coûte un déménagement avec Easy Move ?",
          a: "Le prix dépend du volume, de la distance et du type de déménagement. Remplissez le formulaire de devis pour recevoir un tarif fixe et gratuit sous peu.",
        },
        {
          q: "Dans quelles villes intervenez-vous ?",
          a: "Nous intervenons à Alger et dans toute l'Algérie, y compris pour les déménagements longue distance entre wilayas.",
        },
        {
          q: "Fournissez-vous les cartons et le matériel d'emballage ?",
          a: "Oui, notre équipe apporte tout le matériel nécessaire : cartons, housses, film plastique et protections pour meubles.",
        },
        {
          q: "Le prix peut-il changer le jour du déménagement ?",
          a: "Non. Une fois votre devis validé, le prix est fixe et ne change pas, même si le chargement prend plus de temps que prévu.",
        },
        {
          q: "Proposez-vous un service de stockage ?",
          a: "Oui, nous proposons une solution de stockage sécurisé à court ou long terme, avec récupération et livraison à votre convenance.",
        },
      ],
    },
    reviews: {
      eyebrow: "Avis clients",
      title: "Ils ont déménagé avec Easy Move",
      subtitle: "Nos avis vérifiés, directement depuis Google.",
      notConfigured: "Widget d'avis Google non configuré.",
    },
    instagramFeed: {
      eyebrow: "Instagram",
      title: "Nos dernières publications",
      subtitle: "Suivez les coulisses de nos déménagements au quotidien.",
      notConfigured: "Widget Instagram non configuré.",
    },
    socialCTA: {
      title: "Suivez notre camion sur les réseaux",
      subtitle:
        "Coulisses de nos déménagements, astuces d'emballage et bons plans : rejoignez la communauté Easy Move.",
      cta: "Nous suivre",
    },
    footer: {
      tagline:
        "Votre bien, notre priorité. Déménagement résidentiel, professionnel et longue distance, partout en Algérie.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      followTitle: "Suivez-nous",
      city: "Alger, Algérie",
      rights: "Tous droits réservés.",
      devisBtn: "Devis gratuit",
      whatsapp: "WhatsApp",
      whatsappChatAria: "Discuter sur WhatsApp",
      legalLink: "Mentions légales",
    },
    miniFooter: {
      madeBy: "Site conçu par",
    },
    booking: {
      eyebrow: "Devis gratuit",
      title: "Votre déménagement en 5 étapes",
      subtitle: "2 minutes suffisent, c'est gratuit et sans engagement.",
      stepLabels: ["Départ", "Arrivée", "À déménager", "Vos infos", "Envoyer"],
      step0Title: "D'où partez-vous ?",
      step1Title: "Où emménagez-vous ?",
      addressLabel: "Adresse *",
      addressPlaceholder: "Ville, quartier, rue...",
      floorLabel: "Étage *",
      floorPlaceholder: "Choisir un étage",
      floors: [
        "Rez-de-chaussée",
        "1er étage",
        "2e étage",
        "3e étage",
        "4e étage",
        "5e étage",
        "6e étage",
        "7e étage",
        "8e étage",
        "9e étage",
        "10e étage ou +",
      ],
      elevatorLabel: "Ascenseur disponible ?",
      yes: "oui",
      no: "non",
      step2Title: "Qu'y a-t-il à déménager ?",
      bienTypeLabel: "Type de bien *",
      bienTypes: [
        "Studio / F1",
        "F2",
        "F3",
        "F4",
        "F5 et +",
        "Maison",
        "Bureau",
        "Autre",
      ],
      descLabel: "Décrivez ce qu'il faut déménager",
      descPlaceholder:
        "Ex : salon complet, 2 chambres, électroménager, pas d'objets fragiles particuliers...",
      photosLabel: "Photos pour estimer le volume (optionnel)",
      dropzoneText: "Glissez vos photos ici ou",
      browseText: "parcourir",
      maxPhotos: "(8 max)",
      removePhotoAria: "Retirer la photo",
      step3Title: "Vos informations",
      prenomLabel: "Prénom *",
      nomLabel: "Nom *",
      telLabel: "Téléphone *",
      telPlaceholder: "05 XX XX XX XX",
      emailLabel: "Email *",
      emailPlaceholder: "vous@email.com",
      dateLabel: "Date souhaitée *",
      messageLabel: "Message (optionnel)",
      messagePlaceholder: "Une précision à nous donner ?",
      errorMsg: "Merci de remplir les champs marqués d'un *.",
      backBtn: "Précédent",
      nextBtn: "Suivant",
      submitBtn: "Envoyer ma demande",
      submittingBtn: "Envoi en cours...",
      submitError: "Une erreur est survenue. Vérifiez votre connexion et réessayez, ou contactez-nous directement.",
      successTitle: "Demande envoyée !",
      successMsg: (prenom: string, tel: string) =>
        `Merci ${prenom}, nous avons bien reçu votre demande de devis. Notre équipe vous recontacte très vite au ${tel}.`,
    },
    legal: {
      title: "Mentions légales",
      updated: "Dernière mise à jour : novembre 2026",
      backHome: "Retour à l'accueil",
      sections: [
        {
          heading: "Éditeur du site",
          body: "Ce site est édité par Easy Move, entreprise de déménagement basée à Alger, Algérie. Numéro de registre de commerce et NIF disponibles sur demande. Pour toute question, contactez-nous via WhatsApp ou par téléphone au 07 78 63 74 33.",
        },
        {
          heading: "Directeur de la publication",
          body: "La direction de la publication est assurée par le représentant légal d'Easy Move.",
        },
        {
          heading: "Hébergement",
          body: "Le site est hébergé par Hostinger International Ltd. Pour plus d'informations sur l'hébergeur, consultez hostinger.fr.",
        },
        {
          heading: "Propriété intellectuelle",
          body: "L'ensemble des contenus présents sur ce site (textes, images, logo, charte graphique) est la propriété d'Easy Move, sauf mention contraire, et ne peut être reproduit sans autorisation préalable.",
        },
        {
          heading: "Données personnelles",
          body: "Les informations collectées via le formulaire de devis (nom, téléphone, email, adresse, photos) sont utilisées exclusivement pour traiter votre demande de déménagement et ne sont jamais revendues à des tiers. Vous pouvez demander leur suppression à tout moment en nous contactant.",
        },
        {
          heading: "Contact",
          body: "Pour toute question relative à ces mentions légales, contactez-nous via WhatsApp, Instagram (@easy_move_dz) ou par téléphone au 07 78 63 74 33.",
        },
      ],
    },
    status: {
      notFound: {
        title: "Page introuvable",
        subtitle:
          "On dirait que ce carton s'est égaré en chemin. La page que vous cherchez n'existe pas ou a été déplacée.",
        cta: "Retour à l'accueil",
      },
      error: {
        title: "Un imprévu s'est produit",
        subtitle:
          "Quelque chose s'est mal passé de notre côté. Réessayez, ou revenez à l'accueil en attendant.",
        retry: "Réessayer",
        cta: "Retour à l'accueil",
      },
      construction: {
        badge: "Bientôt disponible",
        title: "Cette page est en construction",
        subtitle: "Notre équipe prépare quelque chose de bien. Revenez très vite !",
        cta: "Retour à l'accueil",
      },
    },
  },
  en: {
    meta: {
      title: "Easy Move — Moving made effortless",
      description:
        "Easy Move - Residential, professional and long-distance moving all over Algeria. Free quote, guaranteed fixed price.",
    },
    nav: {
      accueil: "Home",
      services: "Services",
      tarifs: "Pricing",
      stockage: "Storage",
      emballage: "Packing",
      avis: "Reviews",
      faq: "FAQ",
      devis: "Free quote",
      openMenuAria: "Open menu",
    },
    hero: {
      badge: "All over Algeria",
      titlePart1: "Your move,",
      titleHighlight: "made effortless",
      subtitle:
        "Professional crew, secure transport and careful packing. Your belongings, our priority — wherever you're headed in Algeria.",
      ctaPrimary: "Get a free quote",
      imgAlt: "Moving is stressful the Easy Move solution",
    },
    trustbar: {
      items: [
        "Quote in 2 minutes",
        "Guaranteed fixed price",
        "Available 7 days a week",
        "All over Algeria",
      ],
    },
    services: {
      eyebrow: "Our services",
      title: "Everything you need for a stress-free move",
      subtitle: "Whatever you need, our team handles everything from A to Z.",
      items: [
        {
          title: "Residential moving",
          desc: "Apartment or house, we take care of every piece of furniture and box from pickup to delivery.",
        },
        {
          title: "Offices & businesses",
          desc: "Professional relocation organized to minimize downtime for your business.",
        },
        {
          title: "Long distance",
          desc: "From one wilaya to another, your move is planned and tracked from start to finish.",
        },
        {
          title: "Small moves",
          desc: "Studio, a few pieces of furniture, or bulky items: a tailored service, no minimum.",
        },
        {
          title: "Fast service",
          desc: "Need to move fast? We organize ourselves to step in as quickly as possible.",
        },
        {
          title: "Secure transport",
          desc: "Equipped vehicles and a trained team for damage-free transport.",
        },
      ],
    },
    whyUs: {
      eyebrow: "Why Easy Move",
      title: "Moving, without the stress",
      subtitle: "Moving is stressful. With Easy Move, it no longer is.",
      pillars: [
        {
          title: "Professional team",
          desc: "Trained, experienced movers who treat your belongings as their own.",
        },
        {
          title: "Secure transport",
          desc: "Suitable vehicles and careful strapping for a smooth journey.",
        },
        {
          title: "Packing & handling",
          desc: "Professional materials and precise handling for every item, fragile or not.",
        },
        {
          title: "Your belongings, our priority",
          desc: "All over Algeria, we commit to careful service from the first box to the last.",
        },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "A fixed price, no surprises",
      subtitle:
        "We give you a guaranteed rate before moving day. How long loading takes won't change the price quoted.",
      cta: "Get my fixed price",
      includedTitle: "Always included in your quote",
      included: [
        "Firm quote before the big day",
        "Labor and fuel included",
        "Protection for your furniture",
        "Protection for walls, floors and doors",
        "No hidden fees, ever",
      ],
    },
    storage: {
      eyebrow: "Storage",
      title: "Need space? Store with peace of mind",
      subtitle:
        "Between homes or to declutter, we pick up your belongings at home and store them safely for as long as needed.",
      cta: "Request a storage quote",
      points: [
        {
          title: "Secure storage unit",
          desc: "Your belongings are stored in a monitored space, safe from humidity.",
        },
        {
          title: "Short or long term",
          desc: "A few days or several months you stay in control of the duration.",
        },
        {
          title: "Flexible pickup",
          desc: "We pick up and deliver your belongings whenever suits you.",
        },
      ],
    },
    packing: {
      eyebrow: "Packing",
      title: "We pack, you do nothing",
      subtitle:
        "Professional materials and a method suited to every item. Here's what we pack with the greatest care:",
      items: [
        "TVs and flat screens",
        "Mirrors and glass",
        "Lamps and light fixtures",
        "Paintings and decorative items",
        "Computers and electronics",
        "Dishware and fragile items",
      ],
      statNumber: "100%",
      statLabel: "professional materials provided",
    },
    gallery: {
      eyebrow: "In pictures",
      title: "Our fleet, our colors",
      alts: [
        "Easy Move truck, front view",
        "Easy Move packing tape",
        "Easy Move logo",
        "Easy Move truck, rear view",
        "Easy Move furniture lift",
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Everything you need to know",
      items: [
        {
          q: "How much does a move with Easy Move cost?",
          a: "The price depends on volume, distance and type of move. Fill in the quote form to receive a free, fixed price shortly.",
        },
        {
          q: "Which cities do you cover?",
          a: "We operate in Algiers and all over Algeria, including long-distance moves between wilayas.",
        },
        {
          q: "Do you provide boxes and packing materials?",
          a: "Yes, our team brings all the necessary materials: boxes, covers, plastic wrap and furniture protection.",
        },
        {
          q: "Can the price change on moving day?",
          a: "No. Once your quote is confirmed, the price is fixed and won't change, even if loading takes longer than planned.",
        },
        {
          q: "Do you offer a storage service?",
          a: "Yes, we offer secure short- or long-term storage, with pickup and delivery at your convenience.",
        },
      ],
    },
    reviews: {
      eyebrow: "Customer reviews",
      title: "They moved with Easy Move",
      subtitle: "Our verified reviews, straight from Google.",
      notConfigured: "Google reviews widget not configured.",
    },
    instagramFeed: {
      eyebrow: "Instagram",
      title: "Our latest posts",
      subtitle: "Follow the daily behind-the-scenes of our moves.",
      notConfigured: "Instagram widget not configured.",
    },
    socialCTA: {
      title: "Follow our truck on social media",
      subtitle:
        "Behind the scenes of our moves, packing tips and good deals: join the Easy Move community.",
      cta: "Follow us",
    },
    footer: {
      tagline:
        "Your belongings, our priority. Residential, professional and long-distance moving, all over Algeria.",
      navTitle: "Navigation",
      contactTitle: "Contact",
      followTitle: "Follow us",
      city: "Algiers, Algeria",
      rights: "All rights reserved.",
      devisBtn: "Free quote",
      whatsapp: "WhatsApp",
      whatsappChatAria: "Chat on WhatsApp",
      legalLink: "Legal notice",
    },
    miniFooter: {
      madeBy: "Website designed by",
    },
    booking: {
      eyebrow: "Free quote",
      title: "Your move in 5 steps",
      subtitle: "It only takes 2 minutes, it's free and there's no commitment.",
      stepLabels: ["Pickup", "Drop-off", "What to move", "Your info", "Send"],
      step0Title: "Where are you moving from?",
      step1Title: "Where are you moving to?",
      addressLabel: "Address *",
      addressPlaceholder: "City, district, street...",
      floorLabel: "Floor *",
      floorPlaceholder: "Choose a floor",
      floors: [
        "Ground floor",
        "Floor 1",
        "Floor 2",
        "Floor 3",
        "Floor 4",
        "Floor 5",
        "Floor 6",
        "Floor 7",
        "Floor 8",
        "Floor 9",
        "Floor 10 or more",
      ],
      elevatorLabel: "Elevator available?",
      yes: "yes",
      no: "no",
      step2Title: "What needs to be moved?",
      bienTypeLabel: "Property type *",
      bienTypes: [
        "Studio / 1-bed",
        "2-bed",
        "3-bed",
        "4-bed",
        "5-bed +",
        "House",
        "Office",
        "Other",
      ],
      descLabel: "Describe what needs to be moved",
      descPlaceholder:
        "E.g.: full living room, 2 bedrooms, appliances, nothing particularly fragile...",
      photosLabel: "Photos to estimate volume (optional)",
      dropzoneText: "Drag your photos here or",
      browseText: "browse",
      maxPhotos: "(8 max)",
      removePhotoAria: "Remove photo",
      step3Title: "Your information",
      prenomLabel: "First name *",
      nomLabel: "Last name *",
      telLabel: "Phone *",
      telPlaceholder: "05 XX XX XX XX",
      emailLabel: "Email *",
      emailPlaceholder: "you@email.com",
      dateLabel: "Preferred date *",
      messageLabel: "Message (optional)",
      messagePlaceholder: "Anything else we should know?",
      errorMsg: "Please fill in the fields marked with an *.",
      backBtn: "Back",
      nextBtn: "Next",
      submitBtn: "Send my request",
      submittingBtn: "Sending...",
      submitError: "Something went wrong. Check your connection and try again, or contact us directly.",
      successTitle: "Request sent!",
      successMsg: (prenom: string, tel: string) =>
        `Thank you ${prenom}, we've received your quote request. Our team will contact you shortly at ${tel}.`,
    },
    legal: {
      title: "Legal notice",
      updated: "Last updated: November 2026",
      backHome: "Back to home",
      sections: [
        {
          heading: "Site publisher",
          body: "This site is published by Easy Move, a moving company based in Algiers, Algeria. Trade register number and tax ID available on request. For any questions, contact us via WhatsApp or by phone at 07 78 63 74 33.",
        },
        {
          heading: "Publication director",
          body: "Publication is managed by Easy Move's legal representative.",
        },
        {
          heading: "Hosting",
          body: "This site is hosted by Hostinger International Ltd. For more information about the host, visit hostinger.com.",
        },
        {
          heading: "Intellectual property",
          body: "All content on this site (text, images, logo, visual identity) is the property of Easy Move, unless stated otherwise, and may not be reproduced without prior authorization.",
        },
        {
          heading: "Personal data",
          body: "Information collected through the quote form (name, phone, email, address, photos) is used solely to process your moving request and is never sold to third parties. You may request its deletion at any time by contacting us.",
        },
        {
          heading: "Contact",
          body: "For any question about this legal notice, contact us via WhatsApp, Instagram (@easy_move_dz) or by phone at 07 78 63 74 33.",
        },
      ],
    },
    status: {
      notFound: {
        title: "Page not found",
        subtitle:
          "Looks like this box got lost along the way. The page you're looking for doesn't exist or has moved.",
        cta: "Back to home",
      },
      error: {
        title: "Something unexpected happened",
        subtitle:
          "Something went wrong on our end. Try again, or head back home in the meantime.",
        retry: "Try again",
        cta: "Back to home",
      },
      construction: {
        badge: "Coming soon",
        title: "This page is under construction",
        subtitle: "Our team is building something great. Check back soon!",
        cta: "Back to home",
      },
    },
  },
  ar: {
    meta: {
      title: "Easy Move — انتقال بكل سهولة",
      description:
        "Easy Move - خدمات نقل الأثاث السكني والمهني ولمسافات طويلة في جميع أنحاء الجزائر. عرض سعر مجاني وسعر ثابت مضمون.",
    },
    nav: {
      accueil: "الرئيسية",
      services: "خدماتنا",
      tarifs: "الأسعار",
      stockage: "التخزين",
      emballage: "التغليف",
      avis: "التقييمات",
      faq: "الأسئلة الشائعة",
      devis: "عرض سعر مجاني",
      openMenuAria: "فتح القائمة",
    },
    hero: {
      badge: "في جميع أنحاء الجزائر",
      titlePart1: "انتقالك",
      titleHighlight: "بكل سهولة",
      subtitle:
        "طاقم محترف، نقل آمن وتغليف بعناية فائقة. أغراضك هي أولويتنا، أينما كنت ذاهبًا في الجزائر.",
      ctaPrimary: "احصل على عرض سعر مجاني",
      imgAlt: "الانتقال أمر متعب، الحل مع Easy Move",
    },
    trustbar: {
      items: [
        "عرض سعر في دقيقتين",
        "سعر ثابت مضمون",
        "متوفرون 7 أيام في الأسبوع",
        "في جميع أنحاء الجزائر",
      ],
    },
    services: {
      eyebrow: "خدماتنا",
      title: "كل ما تحتاجه للانتقال بكل راحة بال",
      subtitle: "مهما كانت احتياجاتك، فريقنا يتكفل بكل شيء من الألف إلى الياء.",
      items: [
        {
          title: "انتقال سكني",
          desc: "شقة أو منزل، نعتني بكل قطعة أثاث وكل صندوق من الانطلاق إلى الوصول.",
        },
        {
          title: "المكاتب والشركات",
          desc: "انتقال احترافي منظم للحد من توقف نشاطك.",
        },
        {
          title: "الانتقال لمسافات طويلة",
          desc: "من ولاية إلى أخرى، يتم التخطيط لانتقالك ومتابعته من البداية إلى النهاية.",
        },
        {
          title: "الانتقالات الصغيرة",
          desc: "استوديو، بعض الأثاث أو أغراض كبيرة: خدمة مناسبة بدون حد أدنى.",
        },
        {
          title: "خدمة سريعة",
          desc: "تحتاج الانتقال بسرعة؟ ننظم أنفسنا للتدخل في أقرب وقت ممكن.",
        },
        {
          title: "نقل آمن",
          desc: "مركبات مجهزة وفريق مدرب لنقل آمن بدون أضرار.",
        },
      ],
    },
    whyUs: {
      eyebrow: "لماذا Easy Move",
      title: "الانتقال، بدون توتر",
      subtitle: "الانتقال أمر متعب. مع Easy Move، لم يعد كذلك.",
      pillars: [
        {
          title: "فريق محترف",
          desc: "عمال نقل مدربون وذوو خبرة، يتعاملون مع ممتلكاتك كما لو كانت ممتلكاتهم.",
        },
        { title: "نقل آمن", desc: "مركبات مناسبة وتثبيت دقيق لرحلة سلسة." },
        {
          title: "التغليف والمناولة",
          desc: "مواد احترافية وحركات دقيقة لكل غرض، سواء كان هشًا أم لا.",
        },
        {
          title: "ممتلكاتك أولويتنا",
          desc: "في جميع أنحاء الجزائر، نلتزم بخدمة متقنة من أول صندوق إلى آخره.",
        },
      ],
    },
    pricing: {
      eyebrow: "التسعير",
      title: "سعر ثابت، بدون مفاجآت",
      subtitle:
        "نمنحك سعرًا مضمونًا قبل يوم الانتقال. مدة التحميل لا تغيّر السعر المعلن.",
      cta: "اطلب سعري الثابت",
      includedTitle: "مشمول دائمًا في عرض السعر",
      included: [
        "عرض سعر نهائي قبل يوم الانتقال",
        "اليد العاملة والوقود مشمولان",
        "حماية أثاثك",
        "حماية الجدران والأرضيات والأبواب",
        "بدون رسوم خفية أبدًا",
      ],
    },
    storage: {
      eyebrow: "التخزين",
      title: "تحتاج إلى مساحة؟ خزّن بكل أمان",
      subtitle:
        "بين سكنين أو لتفريغ مساحتك، نستلم أغراضك من منزلك ونخزنها في مكان آمن طوال المدة التي تحتاجها.",
      cta: "اطلب عرض سعر للتخزين",
      points: [
        {
          title: "مستودع تخزين آمن",
          desc: "تُخزَّن أغراضك في مكان مراقب وبمنأى عن الرطوبة.",
        },
        {
          title: "قصير أو طويل المدى",
          desc: "بضعة أيام أو عدة أشهر، تبقى المدة بين يديك.",
        },
        {
          title: "استرجاع مرن",
          desc: "نأتي لاسترجاع أغراضك وتسليمها في الوقت الذي يناسبك.",
        },
      ],
    },
    packing: {
      eyebrow: "التغليف",
      title: "نحن نغلّف، أنت لا تفعل شيئًا",
      subtitle:
        "مواد احترافية وطريقة مناسبة لكل غرض. إليك ما نغلّفه بأقصى عناية:",
      items: [
        "أجهزة التلفاز والشاشات المسطحة",
        "المرايا والزجاج",
        "المصابيح وتجهيزات الإضاءة",
        "اللوحات والقطع الزخرفية",
        "الحواسيب والإلكترونيات",
        "الأواني والأغراض الهشة",
      ],
      statNumber: "100%",
      statLabel: "مواد احترافية مُوفَّرة",
    },
    gallery: {
      eyebrow: "بالصور",
      title: "أسطولنا، ألواننا",
      alts: [
        "شاحنة Easy Move، منظر أمامي",
        "شريط لاصق Easy Move",
        "شعار Easy Move",
        "شاحنة Easy Move، منظر خلفي",
        "رافعة أثاث Easy Move",
      ],
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "كل ما تحتاج معرفته",
      items: [
        {
          q: "كم تكلفة الانتقال مع Easy Move؟",
          a: "يعتمد السعر على الحجم والمسافة ونوع الانتقال. املأ استمارة طلب عرض السعر لتصلك قريبًا تسعيرة ثابتة ومجانية.",
        },
        {
          q: "في أي المدن تعملون؟",
          a: "نعمل في الجزائر العاصمة وفي جميع أنحاء الجزائر، بما في ذلك الانتقالات لمسافات طويلة بين الولايات.",
        },
        {
          q: "هل توفرون الصناديق ومواد التغليف؟",
          a: "نعم، يحضر فريقنا كل المواد اللازمة: الصناديق، الأغطية، الفيلم البلاستيكي وحماية الأثاث.",
        },
        {
          q: "هل يمكن أن يتغير السعر يوم الانتقال؟",
          a: "لا. بمجرد تأكيد عرض السعر، يبقى السعر ثابتًا ولا يتغير، حتى لو استغرق التحميل وقتًا أطول من المتوقع.",
        },
        {
          q: "هل تقدمون خدمة التخزين؟",
          a: "نعم، نقدم حلاً آمنًا للتخزين على المدى القصير أو الطويل، مع الاسترجاع والتسليم في الوقت الذي يناسبك.",
        },
      ],
    },
    reviews: {
      eyebrow: "آراء العملاء",
      title: "انتقلوا مع Easy Move",
      subtitle: "تقييماتنا الموثقة، مباشرة من Google.",
      notConfigured: "أداة تقييمات Google غير مُفعّلة.",
    },
    instagramFeed: {
      eyebrow: "إنستغرام",
      title: "أحدث منشوراتنا",
      subtitle: "تابع كواليس عمليات انتقالنا يوميًا.",
      notConfigured: "أداة إنستغرام غير مُفعّلة.",
    },
    socialCTA: {
      title: "تابع شاحنتنا على مواقع التواصل",
      subtitle:
        "كواليس عمليات انتقالنا، نصائح التغليف والعروض المميزة: انضم إلى مجتمع Easy Move.",
      cta: "تابعنا",
    },
    footer: {
      tagline:
        "ممتلكاتك أولويتنا. انتقال سكني ومهني ولمسافات طويلة، في جميع أنحاء الجزائر.",
      navTitle: "التصفح",
      contactTitle: "اتصل بنا",
      followTitle: "تابعنا",
      city: "الجزائر العاصمة، الجزائر",
      rights: "جميع الحقوق محفوظة.",
      devisBtn: "عرض سعر مجاني",
      whatsapp: "واتساب",
      whatsappChatAria: "تحدث عبر واتساب",
      legalLink: "الإشعار القانوني",
    },
    miniFooter: {
      madeBy: "صمم هذا الموقع",
    },
    booking: {
      eyebrow: "عرض سعر مجاني",
      title: "انتقالك في 5 خطوات",
      subtitle: "تكفي دقيقتان فقط، مجانًا وبدون أي التزام.",
      stepLabels: ["الانطلاق", "الوصول", "ما سيُنقل", "معلوماتك", "الإرسال"],
      step0Title: "من أين تنطلق؟",
      step1Title: "إلى أين تنتقل؟",
      addressLabel: "العنوان *",
      addressPlaceholder: "المدينة، الحي، الشارع...",
      floorLabel: "الطابق *",
      floorPlaceholder: "اختر الطابق",
      floors: [
        "الطابق الأرضي",
        "الطابق 1",
        "الطابق 2",
        "الطابق 3",
        "الطابق 4",
        "الطابق 5",
        "الطابق 6",
        "الطابق 7",
        "الطابق 8",
        "الطابق 9",
        "الطابق 10 أو أكثر",
      ],
      elevatorLabel: "هل يوجد مصعد؟",
      yes: "نعم",
      no: "لا",
      step2Title: "ما الذي سيتم نقله؟",
      bienTypeLabel: "نوع العقار *",
      bienTypes: [
        "استوديو / غرفة واحدة",
        "غرفتان",
        "3 غرف",
        "4 غرف",
        "5 غرف فأكثر",
        "منزل",
        "مكتب",
        "أخرى",
      ],
      descLabel: "صف ما يجب نقله",
      descPlaceholder:
        "مثال: صالون كامل، غرفتا نوم، أجهزة كهرومنزلية، بدون أغراض هشة بشكل خاص...",
      photosLabel: "صور لتقدير الحجم (اختياري)",
      dropzoneText: "اسحب صورك هنا أو",
      browseText: "تصفح",
      maxPhotos: "(8 كحد أقصى)",
      removePhotoAria: "إزالة الصورة",
      step3Title: "معلوماتك",
      prenomLabel: "الاسم الأول *",
      nomLabel: "اللقب *",
      telLabel: "الهاتف *",
      telPlaceholder: "05 XX XX XX XX",
      emailLabel: "البريد الإلكتروني *",
      emailPlaceholder: "you@email.com",
      dateLabel: "التاريخ المطلوب *",
      messageLabel: "رسالة (اختياري)",
      messagePlaceholder: "هل لديك أي توضيح إضافي؟",
      errorMsg: "يرجى ملء الحقول المعلّمة بعلامة *.",
      backBtn: "السابق",
      nextBtn: "التالي",
      submitBtn: "إرسال طلبي",
      submittingBtn: "جارٍ الإرسال...",
      submitError: "حدث خطأ ما. تحقق من اتصالك وحاول مجددًا، أو تواصل معنا مباشرة.",
      successTitle: "تم إرسال الطلب!",
      successMsg: (prenom: string, tel: string) =>
        `شكرًا ${prenom}، لقد استلمنا طلب عرض السعر الخاص بك. سيتواصل معك فريقنا قريبًا على الرقم ${tel}.`,
    },
    legal: {
      title: "الإشعار القانوني",
      updated: "آخر تحديث: نوفمبر 2026",
      backHome: "العودة إلى الرئيسية",
      sections: [
        {
          heading: "ناشر الموقع",
          body: "هذا الموقع تابع لشركة Easy Move لخدمات النقل والتوضيب، ومقرها الجزائر العاصمة. رقم السجل التجاري والرقم الجبائي متوفران عند الطلب. لأي استفسار، تواصلوا معنا عبر واتساب أو بالهاتف على الرقم 07 78 63 74 33.",
        },
        {
          heading: "مدير النشر",
          body: "يتولى الممثل القانوني لشركة Easy Move مسؤولية النشر.",
        },
        {
          heading: "الاستضافة",
          body: "هذا الموقع مستضاف لدى Hostinger International Ltd. لمزيد من المعلومات حول مزود الاستضافة، يرجى زيارة hostinger.com.",
        },
        {
          heading: "الملكية الفكرية",
          body: "جميع المحتويات الموجودة في هذا الموقع (النصوص، الصور، الشعار، الهوية البصرية) هي ملك لشركة Easy Move، ما لم يُذكر خلاف ذلك، ولا يجوز إعادة إنتاجها دون إذن مسبق.",
        },
        {
          heading: "البيانات الشخصية",
          body: "المعلومات التي يتم جمعها عبر استمارة طلب عرض السعر (الاسم، الهاتف، البريد الإلكتروني، العنوان، الصور) تُستخدم حصريًا لمعالجة طلب انتقالكم، ولا يتم بيعها لأي طرف ثالث. يمكنكم طلب حذفها في أي وقت بالتواصل معنا.",
        },
        {
          heading: "التواصل",
          body: "لأي سؤال يخص هذا الإشعار القانوني، تواصلوا معنا عبر واتساب أو إنستغرام (@easy_move_dz) أو بالهاتف على الرقم 07 78 63 74 33.",
        },
      ],
    },
    status: {
      notFound: {
        title: "الصفحة غير موجودة",
        subtitle:
          "يبدو أن هذا الكرتون قد ضاع في الطريق. الصفحة التي تبحثون عنها غير موجودة أو تم نقلها.",
        cta: "العودة إلى الرئيسية",
      },
      error: {
        title: "حدث خطأ غير متوقع",
        subtitle:
          "حدث خطأ ما من جانبنا. أعيدوا المحاولة، أو عودوا إلى الصفحة الرئيسية في غضون ذلك.",
        retry: "إعادة المحاولة",
        cta: "العودة إلى الرئيسية",
      },
      construction: {
        badge: "قريبًا",
        title: "هذه الصفحة قيد الإنشاء",
        subtitle: "فريقنا يعمل على إعداد شيء رائع. عودوا قريبًا!",
        cta: "العودة إلى الرئيسية",
      },
    },
  },
};

export type Dict = typeof dict.fr;
