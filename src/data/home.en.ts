import type { HomeContent } from './types';

const home: HomeContent = {
  seo: {
    title: 'Ruslan Hasanov | AI/ML Engineer, Time Series & LLM Agents',
    description:
      'AI/ML engineer and M.Sc. student at TU Ilmenau. Time-series foundation models, LLM agents, and 4+ years of shipped Flutter apps. Based in Bremerhaven.',
  },

  hero: {
    name: 'Ruslan Hasanov',
    role: 'AI/ML engineer who ships',
    pitch:
      'I benchmark time-series foundation models and build LLM agents. Before that, I shipped Flutter apps to production for more than four years.',
    availability: 'Available now',
    buttons: { work: 'View work', contact: 'Get in touch' },
    facts: {
      heading: 'Key facts',
      asOf: '11/2026',
      status: {
        label: 'Status',
        stripLabel: 'Availability',
        value: 'Available now',
        detail: 'part-time or full-time (working student possible) · remote or on site in the Bremerhaven–Bremen area',
        stripValue: 'Available now',
        stripDetail: 'part-time or full-time (working student possible) · remote or on site in the Bremerhaven–Bremen area',
      },
      location: {
        label: 'Location',
        value: 'Bremerhaven, Germany',
        stripValue: 'Bremerhaven',
        stripDetail: 'Germany',
      },
      thesis: {
        label: 'Thesis',
        value: "Master's thesis until 03/2027",
        stripValue: 'until 03/2027',
        stripDetail: 'TU Ilmenau',
      },
      funding: {
        label: 'Funding',
        value: 'Full DAAD scholarship',
        stripValue: 'DAAD',
        stripDetail: 'full scholarship',
      },
    },
  },

  highlights: {
    eyebrow: 'highlights',
    heading: 'Highlights',
    items: [
      { index: '[models]', value: '6', caption: 'foundation models benchmarked in my thesis' },
      {
        index: '[forecast error]',
        value: '29 %',
        caption: 'lower 24-hour error (preliminary pilot)',
        bars: { reference: 'seasonal-naive', model: 'Chronos-2', ratio: 0.71 },
      },
      { index: '[experiments]', value: '192', caption: 'LLM forecasting experiments run' },
      { index: '[scale]', value: '20,000+', caption: 'downloads of an online shop I built' },
    ],
  },

  work: { eyebrow: 'work', heading: 'Featured work' },

  shipped: {
    eyebrow: 'shipped',
    heading: 'Shipped software',
    intro: 'Before the research, I built and released mobile apps for more than four years, mostly in Flutter.',
    jobs: [
      {
        name: 'Flipgoo',
        role: 'Software Developer (Mobile and Client Applications)',
        period: '09/2023 – 09/2024',
        place: 'Budapest, Hungary',
        text: 'I developed a cross-platform Flutter marketplace app (iOS, Android) for private and business customers. I integrated backend APIs, Firebase, in-app subscriptions (RevenueCat), error monitoring (Sentry), Twilio, Apple and Google sign-in and Google Maps in the production app. I built buy, sell and shop features, including premium and business accounts.',
      },
      {
        name: 'Yashyl Ada',
        role: 'Software Developer (Mobile and Client Applications)',
        period: '03/2021 – 02/2024',
        place: 'Ashgabat, Turkmenistan',
        text: 'I developed two cross-platform iOS/Android apps with backend APIs, Firebase, Sentry and Google Maps. I tested and released three apps in the stores. Customer satisfaction reached 95 % within three months.',
      },
      {
        name: 'Freelance',
        role: 'Flutter Developer',
        period: '11/2020 – 03/2021',
        place: 'Ashgabat, Turkmenistan',
        text: 'I built a Flutter app for a retailer (revenue +47 %) and an online shop with more than 20,000 downloads and over 100,000 transactions.',
      },
      {
        name: 'Sanly Galam',
        role: 'Junior Software Developer (Mobile)',
        period: '12/2019 – 11/2020',
        place: 'Ashgabat, Turkmenistan',
        text: 'I covered about 90 % of the app lifecycle, from concept through testing to support. I improved the performance of a production app by 70 % through systematic debugging and refactoring.',
      },
      {
        name: 'Digital Solution 2020',
        role: 'Competition entry',
        period: '12/2020',
        text: 'I led the development and rollout of a working e-health system for doctors and patients. It won 1st place of 23 teams in the healthcare category.',
      },
    ],
    openSourceHeading: 'Open source',
    repos: [
      {
        name: 'Yummify',
        url: 'https://github.com/Ruslanbek0809/Yummify',
        stars: '30 stars',
        lang: 'Dart',
        text: 'A fully functional restaurant menu Flutter app. MVVM clean architecture, Stacked, JSON API.',
      },
      {
        name: 'DigitalSignature',
        url: 'https://github.com/Ruslanbek0809/DigitalSignature',
        stars: '16 stars',
        lang: 'Dart',
        text: 'A digital signature app, “E-Gol”.',
      },
      {
        name: 'yoda_restoran',
        url: 'https://github.com/Ruslanbek0809/yoda_restoran',
        stars: '2 stars',
        lang: 'Dart',
        text: 'A restaurant app built with MVVM clean architecture.',
      },
      {
        name: 'thuri_cycle',
        url: 'https://github.com/Ruslanbek0809/thuri_cycle',
        lang: 'Dart',
        text: 'A mobile app that guides users on proper recycling and waste reduction in Thuringia.',
      },
      {
        name: 'sensbee_nvp',
        url: 'https://github.com/Ruslanbek0809/sensbee_nvp',
        lang: 'Python',
        text: 'FastAPI service for next-value prediction of smart-city sensor data.',
      },
      {
        name: 'hw-verif-agent',
        url: 'https://github.com/Ruslanbek0809/hw-verif-agent',
        lang: 'SystemVerilog, Python',
        text: 'A Python LLM agent for a hardware verification flow.',
      },
      {
        name: 'img_harmnztn_impls',
        url: 'https://github.com/Ruslanbek0809/img_harmnztn_impls',
        lang: 'Python',
        text: 'Traditional image harmonization implementations.',
      },
    ],
  },

  about: {
    eyebrow: 'about',
    heading: 'About',
    paragraphs: [
      'I am an AI/ML engineer. I study Computer and Systems Engineering (M.Sc.) at TU Ilmenau on a DAAD scholarship and live in Bremerhaven. All coursework is done (90 CP, average grade 2.1).',
      "My master's thesis tests six pretrained time-series foundation models on real smart-city sensor data, with uncertainty estimates and significance tests. Before it came a research project on LLM-based forecasting (grade 1.3) and a group project on an LLM agent for hardware verification.",
      'For more than four years I built and released mobile apps in Turkmenistan and Hungary. I am available now, part-time or full-time (working student possible), remote or on site in the Bremerhaven–Bremen area.',
    ],
    now: {
      label: 'Currently',
      text: [
        "Master's thesis at TU Ilmenau, Databases and Information Systems Group, 09/2026 – 03/2027.",
        'Available now, part-time or full-time (working student possible).',
      ],
    },
  },

  experience: {
    eyebrow: 'experience',
    heading: 'Experience & education',
    legend: { work: 'Work', study: 'Studies' },
    items: [
      {
        period: '09/2026 – 03/2027',
        title: "Master's thesis (time-series foundation models)",
        org: 'TU Ilmenau, Databases and Information Systems Group',
        place: 'Ilmenau, Germany',
        kind: 'study',
      },
      {
        period: '04/2026 – 08/2026',
        title: 'Group studies: LLM-agent hardware verification',
        org: 'TU Ilmenau',
        place: 'Ilmenau, Germany',
        kind: 'study',
      },
      {
        period: '10/2025 – 03/2026',
        title: 'Research project: zero-shot forecasting with LLMs',
        org: 'TU Ilmenau',
        place: 'Ilmenau, Germany',
        kind: 'study',
      },
      {
        period: '10/2024 – 03/2027',
        title: 'M.Sc. student, DAAD scholar',
        org: 'TU Ilmenau',
        place: 'Ilmenau, Germany',
        kind: 'study',
      },
      {
        period: '09/2023 – 09/2024',
        title: 'Software Developer (Mobile and Client Applications)',
        org: 'Flipgoo',
        place: 'Budapest, Hungary',
        kind: 'work',
      },
      {
        period: '03/2021 – 02/2024',
        title: 'Software Developer (Mobile and Client Applications)',
        org: 'Yashyl Ada',
        place: 'Ashgabat, Turkmenistan',
        kind: 'work',
      },
      {
        period: '11/2020 – 03/2021',
        title: 'Flutter Developer',
        org: 'Freelance',
        place: 'Ashgabat, Turkmenistan',
        kind: 'work',
      },
      {
        period: '12/2019 – 11/2020',
        title: 'Junior Software Developer (Mobile)',
        org: 'Sanly Galam',
        place: 'Ashgabat, Turkmenistan',
        kind: 'work',
      },
    ],
    educationHeading: 'Education',
    education: [
      {
        degree: 'M.Sc. Research in Computer and Systems Engineering',
        school: 'Technische Universität Ilmenau, Germany',
        period: '10/2024 – 03/2027',
        details:
          "All coursework completed: 90 CP, average grade 2.1. Master's thesis in progress. Relevant courses: Deep Learning (CNNs, transfer learning, classification, localization, segmentation), Advanced Database Systems, Cloud Computing, Software Systems Engineering.",
      },
      {
        degree: 'B.Sc. Computer Science and Information Technology',
        school: 'Oguzhan Engineering and Technology University of Turkmenistan, Ashgabat',
        period: '09/2016 – 06/2021',
        details:
          'Grade 87/100 (German equivalent 1.7). Focus: object-oriented programming in C++, algorithms, operating systems, data structures.',
      },
      {
        degree: 'Graduate Record Examinations (GRE) course',
        school: 'American Councils for International Education, Ashgabat',
        period: '03/2022 – 07/2022',
        details: 'Course in analytical and quantitative reasoning, completed with 90 %.',
      },
    ],
    awardsHeading: 'Awards',
    awards: [
      {
        title: "Full Scholarship, DAAD Master's Programme",
        detail: 'German Academic Exchange Service (DAAD), Bonn.',
        period: '10/2024 – 03/2027',
      },
      {
        title: '1st place of 23 teams, healthcare category',
        detail:
          'Digital Solution 2020 competition, Ashgabat. I led the development and rollout of a working e-health system for doctors and patients.',
        period: '12/2020',
      },
    ],
  },

  skills: {
    eyebrow: 'skills',
    heading: 'Skills & languages',
    groups: [
      {
        title: 'Programming',
        items: ['Python (NumPy, pandas)', 'C/C++', 'Java', 'Dart', 'Swift', 'SQL', 'Shell scripting'],
      },
      {
        title: 'AI and ML',
        items: [
          'PyTorch',
          'TensorFlow/Keras',
          'Hugging Face',
          'AutoGluon',
          'CNNs and transfer learning (classification, localization, segmentation)',
          'Pretrained foundation models (zero-shot, fine-tuning)',
          'LLMs and LLM agents',
        ],
      },
      {
        title: 'Evaluation',
        items: [
          'Benchmark design',
          'Uncertainty quantification (quantile forecasts, interval coverage, recalibration)',
          'Statistical tests (Diebold-Mariano, Holm correction, bootstrap)',
        ],
      },
      {
        title: 'Systems',
        items: ['Linux', 'SSH', 'HPC GPU cluster (NVIDIA A100)', 'Docker', 'FastAPI', 'Git/GitLab', 'PostgreSQL', 'MongoDB'],
      },
      {
        title: 'Mobile and backend',
        items: ['Flutter', 'Firebase', 'RevenueCat', 'Sentry', 'Twilio', 'Google Maps', 'Django'],
      },
    ],
    languagesHeading: 'Languages',
    languages: [
      { name: 'English', level: 'fluent (C1), TOEFL iBT 108/120' },
      { name: 'German', level: 'basic (A2), B1 in progress. TU Ilmenau course A2.3, grade 1.3' },
      { name: 'Turkish', level: 'fluent' },
      { name: 'Russian', level: 'advanced' },
      { name: 'Uzbek, Turkmen', level: 'native' },
    ],
  },

  contact: {
    eyebrow: 'contact',
    heading: 'Get in touch',
    invitation:
      'Available now, part-time or full-time, remote or on site in the Bremerhaven–Bremen area. Write to me about AI/ML engineering, forecasting or LLM agents.',
  },

  person: {
    jobTitle: 'AI/ML Engineer',
    almaMater: 'Oguzhan Engineering and Technology University of Turkmenistan',
  },
};

export default home;
