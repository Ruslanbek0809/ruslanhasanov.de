/** Shape of the home page copy. Both locales implement it, so a missing field is a type error. */

export interface Fact {
  label: string;
  /** Text in the key-facts card (Hero 1 and 2). */
  value: string;
  /** Short value and small print in the spec strip (Hero 3). */
  stripValue: string;
  stripDetail: string;
}

export interface SectionHead {
  /** Lower-case label after the section number, e.g. "01 / highlights". */
  eyebrow: string;
  heading: string;
}

export interface HomeContent {
  seo: { title: string; description: string };
  hero: {
    name: string;
    role: string;
    pitch: string;
    availability: string;
    buttons: { work: string; contact: string };
    facts: {
      heading: string;
      /** Month the facts were last checked, shown in the card header. */
      asOf: string;
      status: Fact & { stripLabel: string; detail: string };
      location: Fact;
      thesis: Fact;
      funding: Fact;
    };
  };
  highlights: SectionHead & {
    items: {
      index: string;
      value: string;
      caption: string;
      /** Optional mini bar chart: reference bar at 100 %, model bar at `ratio`. */
      bars?: { reference: string; model: string; ratio: number };
    }[];
  };
  work: SectionHead;
  shipped: SectionHead & {
    intro: string;
    jobs: { name: string; role: string; period: string; place?: string; text: string }[];
    openSourceHeading: string;
    repos: { name: string; url: string; stars?: string; lang: string; text: string }[];
  };
  about: SectionHead & {
    paragraphs: string[];
    now: { label: string; text: string[] };
  };
  experience: SectionHead & {
    legend: { work: string; study: string };
    items: { period: string; title: string; org?: string; place: string; kind: 'work' | 'study' }[];
    educationHeading: string;
    education: { degree: string; school: string; period: string; details: string }[];
    awardsHeading: string;
    awards: { title: string; detail: string; period: string }[];
  };
  skills: SectionHead & {
    groups: { title: string; items: string[] }[];
    languagesHeading: string;
    languages: { name: string; level: string }[];
  };
  contact: SectionHead & {
    invitation: string;
    note?: string;
  };
  person: { jobTitle: string; almaMater: string };
}
