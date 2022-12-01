import type { Thread } from "./Thread";

export type Accreditation = "A" | "B" | "C";

export interface Faculty {
  name: string;
  accreditation: Accreditation;
}

export interface Campus {
  _id: string;
  name: string;
  address: string;
  description: string;
  accreditation: Accreditation;
  status: "PTN" | "PTS";
  faculties: Faculty[];
  admin: string;
  links: {
    instagram: string;
    website: string;
  };
  imageUrl: string;
  threads: Thread[];
}
