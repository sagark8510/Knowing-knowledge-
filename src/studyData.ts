export interface ResourceItem {
  id: string;
  title: string;
  type: 'Book' | 'PYQ' | 'Guess Paper' | 'Notes';
  pdfUrl: string; // public/documents/ folder ka sahi path yahan aayega
  price: number;  // Abhi 0 rakhein (Free ke liye), baad mein badal sakte hain
}

export interface SubjectData {
  name: string;
  resources: ResourceItem[];
}

export interface ClassData {
  className: string;
  subjects: SubjectData[];
}

export const STUDY_LIBRARY: ClassData[] = [
  {
    className: "Class 9",
    subjects: [
      {
        name: "Science (Session 2026-2027)",
        resources: [
          {
            id: "c9-sc-ch4",
            title: "Chapter 4: Describing motion around us",
            type: "Book",
            pdfUrl: "/documents/class9-science-ch4.pdf",
            price: 0
          },
          {
            id: "c9-sc-ch5",
            title: "Chapter 5: Exploring mixture",
            type: "Book",
            pdfUrl: "/documents/class9-science-ch5.pdf",
            price: 0
          },
          {
            id: "c9-sc-ch6",
            title: "Chapter 6: How force affect motion",
            type: "Book",
            pdfUrl: "/documents/class9-science-ch6.pdf",
            price: 0
          },
          {
            id: "c9-sc-ch7",
            title: "Chapter 7: Work energy and simple machine",
            type: "Book",
            pdfUrl: "/documents/class9-science-ch7.pdf",
            price: 0
          },
          {
            id: "c9-sc-ch8",
            title: "Chapter 8: Journey inside the atom",
            type: "Book",
            pdfUrl: "/documents/class9-science-ch8.pdf",
            price: 0
          },
          {
            id: "c9-sc-ch9",
            title: "Chapter 9: Atomic foundation of atom",
            type: "Book",
            pdfUrl: "/documents/class9-science-ch9.pdf",
            price: 0
          }
        ]
      },
      {
        name: "Mathematics",
        resources: [
          {
            id: "c9-math-pyq-2025",
            title: "Class 9 Maths Previous Year Question Paper",
            type: "PYQ",
            pdfUrl: "/documents/class9-math-pyq.pdf",
            price: 0
          }
        ]
      }
    ]
  },
  {
    className: "Class 10",
    subjects: [
      {
        name: "Science",
        resources: [
          {
            id: "c10-sc-guess",
            title: "Class 10 Science Most Important Guess Paper",
            type: "Guess Paper",
            pdfUrl: "/documents/class10-science-guess.pdf",
            price: 0
          }
        ]
      }
    ]
  },
  {
    className: "Class 11",
    subjects: []
  },
  {
    className: "Class 12",
    subjects: []
  },
  {
    className: "Graduation (UG)",
    subjects: []
  },
  {
    className: "Post Graduation (PG)",
    subjects: []
  }
];

// Footer Contact Details (Aapka number aur mail yahan se poori website par chalega)
export const CONTACT_INFO = {
  phone: "+91 XXXXXXXXXX", // Apna sahi number yahan likhein
  email: "apnamail@gmail.com" // Apni sahi mail id yahan likhein
};
