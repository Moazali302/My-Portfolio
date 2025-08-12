export interface SiteData {
  name: string;
  role: string;
  tagline: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    education: {
      degree: string;
      institution: string;
      year: string;
      description: string;
    };
    interests: string[];
  };
  skills: {
    title: string;
    description: string;
    categories: {
      frontend: Array<{
        name: string;
        icon: string;
        level: string;
      }>;
      backend: Array<{
        name: string;
        icon: string;
        level: string;
      }>;
      tools: Array<{
        name: string;
        icon: string;
        level: string;
      }>;
    };
  };
  contact: {
    title: string;
    description: string;
    phone: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  social: {
    github: string;
    linkedin: string;
    email: string;
  };
}
