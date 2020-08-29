export type Company = {
  title: string;
  href: string;
  description: string;
};

export type Project = {
  title: string;
  href?: string | null;
  technologies: string[];
  responsibilities: string[];
};
