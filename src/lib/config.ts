export interface BusinessCardConfig {
  name: string;
  title: string;
  contact: {
    email: string;
    phone?: string;
    website?: string;
    linkedin?: string;
    github?: string;
  };
  logo: string;
}

export const defaultConfig: BusinessCardConfig = {
  name: "John Doe",
  title: "Software Engineer",
  contact: {
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    website: "https://johndoe.dev",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe"
  },
  logo: "/assets/logo.png"
}; 