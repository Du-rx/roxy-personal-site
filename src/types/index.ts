/** A solved difficulty: what the problem was and how it was addressed */
export interface ProjectChallenge {
  problem: string;
  solution: string;
}

/** External project link, e.g. a live demo or source repository */
export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** Unique identifier, also used as URL slug */
  slug: string;
  title: string;
  /** Short editorial tagline shown in lists */
  tagline: string;
  /** One-line summary of the project */
  description: string;
  /** Longer explanation shown on the projects page */
  details: string;
  /** Core ideas / features */
  highlights: string[];
  technologies: string[];
  /** Current state, e.g. "In Progress", "Playable" */
  status: string;
  /** Solved difficulties: problem → solution */
  challenges?: ProjectChallenge[];
  /** Where the project currently stands, one concrete line */
  progress?: string;
  /** Demo / repository links; rendered only when present */
  links?: ProjectLink[];
}

export interface NavItem {
  label: string;
  href: string;
}

/** Small ongoing experiment shown in the "Currently Building" section */
export interface Experiment {
  title: string;
  tagline: string;
  status: string;
}
