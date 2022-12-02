import type { Thread } from "./Thread";

export interface Faculty {
  name: string;
  accreditation: string;
}

export interface Campus {
  _id: string;
  name: string;
  address: string;
  description: string;
  accreditation: string;
  status: string;
  faculties: Faculty[];
  admin: string;
  links: {
    instagram: string;
    website: string;
  };
  imageUrl: string;
  threads: Thread[];
}
