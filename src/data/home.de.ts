import type { HomeContent } from './types';

const home: HomeContent = {
  seo: {
    title: 'Ruslan Hasanov | KI-/ML-Ingenieur, Zeitreihen & LLM-Agenten',
    description:
      'KI-/ML-Ingenieur, M.Sc. an der TU Ilmenau. Foundation Models für Zeitreihen, LLM-Agenten, über 4 Jahre Flutter-Apps im Produktivbetrieb. Bremerhaven.',
  },

  hero: {
    name: 'Ruslan Hasanov',
    role: 'KI-/ML-Ingenieur, der Software ausliefert',
    pitch:
      'Ich vergleiche Foundation Models für Zeitreihen und baue LLM-Agenten. Zuvor habe ich über vier Jahre Flutter-Apps in den Produktivbetrieb gebracht.',
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
      { index: '[Modelle]', value: '6', caption: 'Foundation Models in der Masterarbeit verglichen' },
      {
        index: '[Prognosefehler]',
        value: '29 %',
        caption: 'geringerer 24-h-Fehler (vorläufiger Pilot)',
        bars: { reference: 'saisonal naiv', model: 'Chronos-2', ratio: 0.71 },
      },
      { index: '[Experimente]', value: '192', caption: 'LLM-Prognoseexperimente durchgeführt' },
      { index: '[Reichweite]', value: '20.000+', caption: 'Downloads eines von mir gebauten Online-Shops' },
    ],
  },

  work: { eyebrow: 'projekte', heading: 'Ausgewählte Projekte' },

  shipped: {
    eyebrow: 'software',
    heading: 'Produktive Software',
    intro: 'Vor der Forschung habe ich über vier Jahre mobile Apps entwickelt und veröffentlicht, überwiegend mit Flutter.',
    jobs: [
      {
        name: 'Flipgoo',
        role: 'Softwareentwickler (Mobile, Client-Anwendungen)',
        period: '09/2023 – 09/2024',
        place: 'Budapest, Ungarn',
        text: 'Ich habe die Flutter-App eines Marktplatzes für Privat- und Geschäftskunden entwickelt (iOS, Android) und Backend-Schnittstellen angebunden. In die produktive App habe ich Firebase, In-App-Abonnements (RevenueCat), Fehlerüberwachung (Sentry), SMS und Anrufe (Twilio), Apple- und Google-Anmeldung sowie Google Maps integriert. Dazu kamen Kauf-, Verkaufs- und Shop-Funktionen mit Premium- und Geschäftskonten.',
      },
      {
        name: 'Yashyl Ada',
        role: 'Softwareentwickler (Mobile, Client-Anwendungen)',
        period: '03/2021 – 02/2024',
        place: 'Aschgabat, Turkmenistan',
        text: 'Ich habe zwei plattformübergreifende Apps für iOS und Android entwickelt, mit Backend-Schnittstellen, Firebase, Sentry und Google Maps. Drei Apps habe ich getestet und in den Stores veröffentlicht. Die Kundenzufriedenheit lag innerhalb von drei Monaten bei 95 %.',
      },
      {
        name: 'Freelance',
        role: 'Flutter-Entwickler',
        period: '11/2020 – 03/2021',
        place: 'Aschgabat, Turkmenistan',
        text: 'Ich habe eine Flutter-App für einen Einzelhändler gebaut (Umsatz +47 %) und einen Online-Shop mit über 20.000 Downloads und mehr als 100.000 Transaktionen umgesetzt.',
      },
      {
        name: 'Sanly Galam',
        role: 'Junior-Softwareentwickler (Mobile)',
        period: '12/2019 – 11/2020',
        place: 'Aschgabat, Turkmenistan',
        text: 'Ich habe rund 90 % des App-Lebenszyklus begleitet, von der Konzeption über Tests bis zum Support. Durch gezielte Fehleranalyse und Überarbeitung habe ich die Performance einer produktiven App um 70 % verbessert.',
      },
      {
        name: 'Digital Solution 2020',
        role: 'Wettbewerb',
        period: '12/2020',
        text: 'Ich habe die Entwicklung und Einführung eines einsatzfähigen E-Health-Systems für Ärztinnen/Ärzte und Patientinnen/Patienten geleitet. Ergebnis: 1. Platz unter 23 Teams in der Kategorie Gesundheitswesen.',
      },
    ],
    openSourceHeading: 'Open Source',
    repos: [
      {
        name: 'Yummify',
        url: 'https://github.com/Ruslanbek0809/Yummify',
        stars: '30 Sterne',
        lang: 'Dart',
        text: 'Eine voll funktionsfähige Flutter-App für Restaurantmenüs. MVVM Clean Architecture, Stacked, JSON-API.',
      },
      {
        name: 'DigitalSignature',
        url: 'https://github.com/Ruslanbek0809/DigitalSignature',
        stars: '16 Sterne',
        lang: 'Dart',
        text: 'Eine App für digitale Signaturen, „E-Gol“.',
      },
      {
        name: 'yoda_restoran',
        url: 'https://github.com/Ruslanbek0809/yoda_restoran',
        stars: '2 Sterne',
        lang: 'Dart',
        text: 'Eine Restaurant-App in MVVM Clean Architecture.',
      },
      {
        name: 'thuri_cycle',
        url: 'https://github.com/Ruslanbek0809/thuri_cycle',
        lang: 'Dart',
        text: 'Eine mobile App, die zu richtigem Recycling und Müllvermeidung in Thüringen anleitet.',
      },
      {
        name: 'sensbee_nvp',
        url: 'https://github.com/Ruslanbek0809/sensbee_nvp',
        lang: 'Python',
        text: 'FastAPI-Dienst zur Vorhersage des nächsten Werts von Smart-City-Sensordaten.',
      },
      {
        name: 'hw-verif-agent',
        url: 'https://github.com/Ruslanbek0809/hw-verif-agent',
        lang: 'SystemVerilog, Python',
        text: 'Ein Python-LLM-Agent für einen Hardware-Verifikationsablauf.',
      },
      {
        name: 'img_harmnztn_impls',
        url: 'https://github.com/Ruslanbek0809/img_harmnztn_impls',
        lang: 'Python',
        text: 'Klassische Implementierungen zur Bildharmonisierung.',
      },
    ],
  },

  about: {
    eyebrow: 'über mich',
    heading: 'Über mich',
    paragraphs: [
      'Ich bin KI-/ML-Ingenieur. Ich studiere Computer and Systems Engineering (M.Sc.) an der TU Ilmenau mit einem DAAD-Stipendium und wohne in Bremerhaven. Alle Module sind abgeschlossen (90 CP, Durchschnittsnote 2,1).',
      'In meiner Masterarbeit teste ich sechs vortrainierte Foundation Models für Zeitreihen auf echten Sensordaten einer Smart City, mit Unsicherheitsschätzungen und Signifikanztests. Davor standen ein Forschungsprojekt zur LLM-basierten Prognose (Note 1,3) und ein Gruppenprojekt zu einem LLM-Agenten für die Hardware-Verifikation.',
      'Über vier Jahre habe ich mobile Apps in Turkmenistan und Ungarn entwickelt und veröffentlicht. Ich bin ab sofort verfügbar, in Teilzeit oder Vollzeit (auch als Werkstudent), remote oder vor Ort im Raum Bremerhaven–Bremen.',
    ],
    now: {
      label: 'Aktuell',
      text: [
        'Masterarbeit an der TU Ilmenau, Fachgebiet Datenbanken und Informationssysteme, 09/2026 – 03/2027.',
        'Ab sofort verfügbar, in Teilzeit oder Vollzeit (auch als Werkstudent).',
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
          'Alle Module abgeschlossen: 90 CP, Durchschnittsnote 2,1. Masterarbeit in Arbeit. Relevante Module: Deep Learning (CNNs, Transfer Learning, Klassifikation, Lokalisierung, Segmentierung), Advanced Database Systems, Cloud Computing, Software Systems Engineering.',
      },
      {
        degree: 'B.Sc. Computer Science and Information Technology',
        school: 'Oguzhan-Universität für Ingenieurwesen und Technologie Turkmenistans, Aschgabat',
        period: '09/2016 – 06/2021',
        details:
          'Note 87/100 (entspricht deutscher Note 1,7). Schwerpunkte: objektorientierte Programmierung in C++, Algorithmen, Betriebssysteme, Datenstrukturen.',
      },
      {
        degree: 'Graduate Record Examinations (GRE), Kurs',
        school: 'American Councils for International Education, Aschgabat',
        period: '03/2022 – 07/2022',
        details: 'Kurs in analytischem und quantitativem Denken, Abschluss mit 90 %.',
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
          'Wettbewerb Digital Solution 2020, Aschgabat. Leitung der Entwicklung und Einführung eines einsatzfähigen E-Health-Systems für Ärztinnen/Ärzte und Patientinnen/Patienten.',
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
      { name: 'Deutsch', level: 'Grundkenntnisse (A2), B1 in Vorbereitung. Kurs an der TU Ilmenau A2.3, Note 1,3' },
      { name: 'Türkisch', level: 'fließend' },
      { name: 'Russisch', level: 'fortgeschritten' },
      { name: 'Usbekisch, Turkmenisch', level: 'Muttersprache' },
    ],
  },

  contact: {
    eyebrow: 'kontakt',
    heading: 'Kontakt aufnehmen',
    invitation:
      'Ab sofort verfügbar, in Teilzeit oder Vollzeit, remote oder vor Ort im Raum Bremerhaven–Bremen. Schreiben Sie mir gern zu KI-/ML-Entwicklung, Prognosen oder LLM-Agenten.',
    note: 'Ich lerne gerade Deutsch (aktuell A2, B1 in Vorbereitung). Gespräche funktionieren derzeit am besten auf Englisch.',
  },

  person: {
    jobTitle: 'KI-/ML-Ingenieur',
    almaMater: 'Oguzhan Engineering and Technology University of Turkmenistan',
  },
};

export default home;
