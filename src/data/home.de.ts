import type { HomeContent } from './types';

const home: HomeContent = {
  seo: {
    title: 'Ruslan Hasanov | KI-/ML-Ingenieur, Zeitreihen & LLM-Agenten',
    description:
      'KI-/ML-Ingenieur und M.Sc.-Student an der TU Ilmenau. Zeitreihenmodelle, LLM-Agenten, über 4 Jahre Flutter-Apps. Bremerhaven.',
  },

  hero: {
    name: 'Ruslan Hasanov',
    role: 'M.Sc.-Student an der TU Ilmenau · DAAD-Stipendiat',
    pitch:
      'KI-/ML-Ingenieur, der liefert. Zeitreihenmodelle und LLM-Agenten.',
    availability: 'Ab sofort verfügbar',
    buttons: { work: 'Projekte ansehen', contact: 'Kontakt aufnehmen' },
    facts: {
      heading: 'Eckdaten',
      asOf: '11/2026',
      status: {
        label: 'Status',
        stripLabel: 'Verfügbarkeit',
        value: 'Ab sofort verfügbar',
        detail: 'Teilzeit oder Vollzeit (auch als Werkstudent) · remote oder vor Ort im Raum Bremerhaven–Bremen',
        stripValue: 'Ab sofort verfügbar',
        stripDetail: 'Teilzeit oder Vollzeit (auch als Werkstudent) · remote oder vor Ort im Raum Bremerhaven–Bremen',
      },
      location: {
        label: 'Standort',
        value: 'Bremerhaven, Deutschland',
        stripValue: 'Bremerhaven',
        stripDetail: 'Deutschland',
      },
      thesis: {
        label: 'Masterarbeit',
        value: 'Masterarbeit bis 03/2027',
        stripValue: 'bis 03/2027',
        stripDetail: 'TU Ilmenau',
      },
      funding: {
        label: 'Förderung',
        value: 'DAAD-Vollstipendium',
        stripValue: 'DAAD',
        stripDetail: 'Vollstipendium',
      },
    },
  },

  highlights: {
    eyebrow: 'kennzahlen',
    heading: 'Kennzahlen',
    items: [
      { index: '[Modelle]', value: '6', caption: 'Foundation Models in der Masterarbeit' },
      {
        index: '[Prognosefehler]',
        value: '29 %',
        caption: 'geringerer 24-h-Fehler (vorläufiger Pilot)',
        bars: { reference: 'saisonal naiv', model: 'Chronos-2', ratio: 0.71 },
      },
      { index: '[Experimente]', value: '192', caption: 'LLM-Prognoseexperimente' },
      { index: '[Reichweite]', value: '55.000+', caption: 'App-Downloads' },
    ],
  },

  work: { eyebrow: 'projekte', heading: 'Ausgewählte Projekte' },

  shipped: {
    eyebrow: 'software',
    heading: 'Produktive Software',
    intro: 'Vier Jahre mobile Apps, meist mit Flutter.',
    jobs: [
      {
        name: 'Flipgoo',
        role: 'Softwareentwickler (Mobile, Client-Anwendungen)',
        period: '09/2023 – 09/2024',
        place: 'Budapest, Ungarn',
        text: 'Ich habe die Flutter-App eines Marktplatzes für iOS und Android gebaut, mit Premium- und Geschäftskonten. Eingebunden habe ich Abos, Anmeldung, Karten und Fehlerüberwachung.',
      },
      {
        name: 'Yashyl Ada',
        role: 'Softwareentwickler (Mobile, Client-Anwendungen)',
        period: '03/2021 – 02/2024',
        place: 'Aschgabat, Turkmenistan',
        text: 'Ich habe zwei Apps für iOS und Android gebaut und drei in den Stores veröffentlicht. Die Kundenzufriedenheit lag nach drei Monaten bei 95 %.',
      },
      {
        name: 'Freelance',
        role: 'Flutter-Entwickler',
        period: '11/2020 – 03/2021',
        place: 'Aschgabat, Turkmenistan',
        text: 'Ich habe die App eines Einzelhändlers gebaut (Umsatz +47 %) und einen Online-Shop mit über 20.000 Downloads und 100.000 Transaktionen.',
      },
      {
        name: 'Sanly Galam',
        role: 'Junior-Softwareentwickler (Mobile)',
        period: '12/2019 – 11/2020',
        place: 'Aschgabat, Turkmenistan',
        text: 'Ich habe rund 90 % des App-Lebenszyklus abgedeckt, von der Konzeption bis zum Support. Die Performance einer produktiven App habe ich um 70 % verbessert.',
      },
      {
        name: 'Digital Solution 2020',
        role: 'Wettbewerb',
        period: '12/2020',
        text: 'Ich habe ein E-Health-System für Ärztinnen/Ärzte und Patientinnen/Patienten geleitet. 1. Platz unter 23 Teams im Bereich Gesundheit.',
      },
    ],
    openSourceHeading: 'Open Source',
    repos: [
      {
        name: 'Yummify',
        url: 'https://github.com/Ruslanbek0809/Yummify',
        stars: '30 Sterne',
        lang: 'Dart',
        text: 'Flutter-App für Restaurantmenüs. MVVM, Stacked, JSON-API.',
      },
      {
        name: 'DigitalSignature',
        url: 'https://github.com/Ruslanbek0809/DigitalSignature',
        stars: '16 Sterne',
        lang: 'Dart',
        text: 'App für digitale Signaturen, „E-Gol“.',
      },
      {
        name: 'yoda_restoran',
        url: 'https://github.com/Ruslanbek0809/yoda_restoran',
        stars: '2 Sterne',
        lang: 'Dart',
        text: 'Restaurant-App in MVVM Clean Architecture.',
      },
      {
        name: 'thuri_cycle',
        url: 'https://github.com/Ruslanbek0809/thuri_cycle',
        lang: 'Dart',
        text: 'App zu Recycling und Müllvermeidung in Thüringen.',
      },
      {
        name: 'sensbee_nvp',
        url: 'https://github.com/Ruslanbek0809/sensbee_nvp',
        lang: 'Python',
        text: 'FastAPI-Dienst für den nächsten Wert von Smart-City-Sensordaten.',
      },
      {
        name: 'hw-verif-agent',
        url: 'https://github.com/Ruslanbek0809/hw-verif-agent',
        lang: 'SystemVerilog, Python',
        text: 'Python-LLM-Agent für die Hardware-Verifikation.',
      },
      {
        name: 'img_harmnztn_impls',
        url: 'https://github.com/Ruslanbek0809/img_harmnztn_impls',
        lang: 'Python',
        text: 'Klassische Verfahren zur Bildharmonisierung.',
      },
    ],
  },

  about: {
    eyebrow: 'über mich',
    heading: 'Über mich',
    paragraphs: [
      'Ich studiere Computer and Systems Engineering (M.Sc.) an der TU Ilmenau mit DAAD-Stipendium und lebe in Bremerhaven. Alle Module sind abgeschlossen: 90 CP, Durchschnitt 2,1.',
      'In der Masterarbeit teste ich sechs vortrainierte Zeitreihenmodelle auf echten Sensordaten einer Smart City. Davor habe ich zu LLM-Prognosen geforscht, an einem LLM-Agenten für Hardware-Verifikation gearbeitet und vier Jahre Apps entwickelt.',
    ],
    now: {
      label: 'Aktuell',
      text: [
        'Masterarbeit an der TU Ilmenau, 09/2026 – 03/2027.',
        'Fachgebiet Datenbanken und Informationssysteme.',
      ],
    },
  },

  experience: {
    eyebrow: 'werdegang',
    heading: 'Werdegang & Ausbildung',
    legend: { work: 'Beruf', study: 'Studium' },
    items: [
      {
        period: '09/2026 – 03/2027',
        title: 'Masterarbeit (Foundation Models für Zeitreihen)',
        org: 'TU Ilmenau, Fachgebiet Datenbanken und Informationssysteme',
        place: 'Ilmenau, Deutschland',
        kind: 'study',
      },
      {
        period: '04/2026 – 08/2026',
        title: 'Gruppenstudien: LLM-Agent für Hardware-Verifikation',
        org: 'TU Ilmenau',
        place: 'Ilmenau, Deutschland',
        kind: 'study',
      },
      {
        period: '10/2025 – 03/2026',
        title: 'Forschungsprojekt: Zero-Shot-Zeitreihenprognose mit LLMs',
        org: 'TU Ilmenau',
        place: 'Ilmenau, Deutschland',
        kind: 'study',
      },
      {
        period: '10/2024 – 03/2027',
        title: 'M.Sc.-Student, DAAD-Stipendiat',
        org: 'TU Ilmenau',
        place: 'Ilmenau, Deutschland',
        kind: 'study',
      },
      {
        period: '09/2023 – 09/2024',
        title: 'Softwareentwickler (Mobile, Client-Anwendungen)',
        org: 'Flipgoo',
        place: 'Budapest, Ungarn',
        kind: 'work',
      },
      {
        period: '03/2021 – 02/2024',
        title: 'Softwareentwickler (Mobile, Client-Anwendungen)',
        org: 'Yashyl Ada',
        place: 'Aschgabat, Turkmenistan',
        kind: 'work',
      },
      {
        period: '11/2020 – 03/2021',
        title: 'Flutter-Entwickler',
        org: 'Freelance Softwareentwicklung',
        place: 'Aschgabat, Turkmenistan',
        kind: 'work',
      },
      {
        period: '12/2019 – 11/2020',
        title: 'Junior-Softwareentwickler (Mobile)',
        org: 'Sanly Galam',
        place: 'Aschgabat, Turkmenistan',
        kind: 'work',
      },
    ],
    educationHeading: 'Ausbildung',
    education: [
      {
        degree: 'M.Sc. Research in Computer and Systems Engineering',
        school: 'Technische Universität Ilmenau, Deutschland',
        period: '10/2024 – 03/2027',
        details:
          '90 CP, Durchschnitt 2,1. Masterarbeit in Arbeit. Module: Deep Learning, Advanced Database Systems, Cloud Computing, Software Systems Engineering.',
      },
      {
        degree: 'B.Sc. Computer Science and Information Technology',
        school: 'Oguzhan-Universität für Ingenieurwesen und Technologie Turkmenistans, Aschgabat',
        period: '09/2016 – 06/2021',
        details:
          'Note 87/100 (deutsche Note 1,7). Schwerpunkte: C++, Algorithmen, Betriebssysteme, Datenstrukturen.',
      },
      {
        degree: 'Graduate Record Examinations (GRE), Kurs',
        school: 'American Councils for International Education, Aschgabat',
        period: '03/2022 – 07/2022',
        details: 'Analytisches und quantitatives Denken, Abschluss mit 90 %.',
      },
    ],
    awardsHeading: 'Auszeichnungen',
    awards: [
      {
        title: 'Vollstipendium, DAAD-Masterprogramm',
        detail: 'Deutscher Akademischer Austauschdienst (DAAD), Bonn.',
        period: '10/2024 – 03/2027',
      },
      {
        title: '1. Platz unter 23 Teams, Kategorie Gesundheitswesen',
        detail:
          'Wettbewerb Digital Solution 2020, Aschgabat. Leitung eines E-Health-Systems für Ärztinnen/Ärzte und Patientinnen/Patienten.',
        period: '12/2020',
      },
    ],
  },

  skills: {
    eyebrow: 'kenntnisse',
    heading: 'Kenntnisse & Sprachen',
    groups: [
      {
        title: 'Programmierung',
        items: ['Python (NumPy, pandas)', 'C/C++', 'Java', 'Dart', 'Swift', 'SQL', 'Shell-Skripte'],
      },
      {
        title: 'KI und ML',
        items: [
          'PyTorch',
          'TensorFlow/Keras',
          'Hugging Face',
          'AutoGluon',
          'CNNs und Transfer Learning (Klassifikation, Lokalisierung, Segmentierung)',
          'Vortrainierte Foundation Models (Zero-Shot, Fine-Tuning)',
          'LLMs und LLM-Agenten',
        ],
      },
      {
        title: 'Evaluation',
        items: [
          'Benchmark-Design',
          'Unsicherheitsquantifizierung (Quantilsprognosen, Intervallabdeckung, Rekalibrierung)',
          'Statistische Tests (Diebold-Mariano, Holm-Korrektur, Bootstrap)',
        ],
      },
      {
        title: 'Systeme',
        items: ['Linux', 'SSH', 'HPC-GPU-Cluster (NVIDIA A100)', 'Docker', 'FastAPI', 'Git/GitLab', 'PostgreSQL', 'MongoDB'],
      },
      {
        title: 'Mobile und Backend',
        items: ['Flutter', 'Firebase', 'RevenueCat', 'Sentry', 'Twilio', 'Google Maps', 'Django'],
      },
    ],
    languagesHeading: 'Sprachen',
    languages: [
      { name: 'Englisch', level: 'verhandlungssicher (C1), TOEFL iBT 108/120' },
      { name: 'Deutsch', level: 'Grundkenntnisse (A2), B1 in Vorbereitung' },
      { name: 'Türkisch', level: 'fließend' },
      { name: 'Russisch', level: 'fortgeschritten' },
      { name: 'Usbekisch, Turkmenisch', level: 'Muttersprache' },
    ],
  },

  contact: {
    eyebrow: 'kontakt',
    heading: 'Kontakt aufnehmen',
    invitation:
      'Ab sofort verfügbar, Teilzeit oder Vollzeit, remote oder im Raum Bremerhaven–Bremen. Schreiben Sie mir zu KI/ML, Prognosen oder LLM-Agenten.',
    note: 'Mein Deutsch ist A2, B1 ist in Vorbereitung. Gespräche laufen derzeit besser auf Englisch.',
  },

  person: {
    jobTitle: 'KI-/ML-Ingenieur',
    almaMater: 'Oguzhan Engineering and Technology University of Turkmenistan',
  },
};

export default home;
