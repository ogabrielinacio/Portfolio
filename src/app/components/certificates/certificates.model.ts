export interface Certificate {
  title: string;
  issuer: string;
  url: string;
  issuerUrl?: string;
  issueDate: Date;
  category: CertificateCategory[];
}

export enum CertificateCategory {
  Backend = "Backend",
  DevOps = "DevOps",
  Architecture = "Architecture",
  Mobile = "Mobile",
  Frontend = "Frontend",
  EmbeddedSystem = "Embedded System",
  Events = "Events",
  Tools = "Tools",
  Languages = "Languages",
}

export enum SortType {
  Date = "Date",
  Alphabetical = "Alphabetical",
}
