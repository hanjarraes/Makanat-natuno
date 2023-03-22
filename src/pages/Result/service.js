import IMG1 from "../../assets/img/content/Image-1.png";
import IMG2 from "../../assets/img/content/Image-3.png";
import IMG3 from "../../assets/img/content/Image-4.png";
import IMG4 from "../../assets/img/content/Image-5.png";
import IMG5 from "../../assets/img/content/Image-6.png";
import IMG6 from "../../assets/img/content/Image-7.png";
import IMG7 from "../../assets/img/content/Image-8.png";
import IMG8 from "../../assets/img/content/Image-9.png";
import IMG from "../../assets/img/content/Image.png";

export const optionProductions = [
  { value: "1", label: "Production" },
  { value: "2", label: "Meeting" },
  { value: "3", label: "Event" },
];
export const optionAttendees = [
  { value: "1", label: "2 to 10" },
  { value: "2", label: "11 to 25" },
  { value: "3", label: "26 to 50" },
  { value: "4", label: "51 to 100" },
  { value: "5", label: "Over 100" },
];

export const colourOptions = [
  { value: "1", label: "Photo Shoot" },
  { value: "2", label: "Film Shoot" },
];

export const showItems = ({ selectPage, showData, setDataContent }) => {
  const startIndex = (selectPage - 1) * showData;
  const endIndex = startIndex + showData;
  const allData = [];
  for (let i = startIndex; i < endIndex; i++) {
    if (ContentCard[i] !== undefined) {
      allData.push(ContentCard[i]);
    }
  }
  setDataContent(allData);
};

export const showPagination = ({ selectPage, totalPages, setDataPage }) => {
  const dataPage = [];
  let startPage, endPage;
  if (totalPages <= 3) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (selectPage <= 2) {
      startPage = 1;
      endPage = 3;
    } else if (selectPage >= totalPages - 1) {
      startPage = totalPages - 2;
      endPage = totalPages;
    } else {
      startPage = selectPage - 1;
      endPage = selectPage + 1;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    dataPage.push(i);
  }
  setDataPage(dataPage);
};

export const ContentCard = [
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Professional Photo Studio",
    desc: "Within 1 hour",
    rate: 3.9,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG3 },
      { image: IMG1 },
      { image: IMG2 },
      { image: IMG4 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Professional Photo Studio",
    desc: "Within 1 hour",
    rate: 3.9,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG3 },
      { image: IMG1 },
      { image: IMG2 },
      { image: IMG4 },
      { image: IMG5 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Professional Photo Studio",
    desc: "Within 1 hour",
    rate: 3.9,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG3 },
      { image: IMG1 },
      { image: IMG2 },
      { image: IMG4 },
      { image: IMG5 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Professional Photo Studio",
    desc: "Within 1 hour",
    rate: 3.9,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG3 },
      { image: IMG1 },
      { image: IMG2 },
      { image: IMG4 },
      { image: IMG5 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Professional Photo Studio",
    desc: "Within 1 hour",
    rate: 3.9,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG3 },
      { image: IMG1 },
      { image: IMG2 },
      { image: IMG4 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Professional Photo Studio",
    desc: "Within 1 hour",
    rate: 3.9,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG3 },
      { image: IMG1 },
      { image: IMG2 },
      { image: IMG4 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Creative Photo Studio",
    desc: "Within 1 hour",
    rate: 3.7,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG6 },
      { image: IMG7 },
      { image: IMG8 },
      { image: IMG },
      { image: IMG1 },
    ],
  },
  {
    title: "Professional Photo Studio",
    desc: "Within 1 hour",
    rate: 3.9,
    newItem: true,
    total: 10,
    slides: [
      { image: IMG3 },
      { image: IMG1 },
      { image: IMG2 },
      { image: IMG4 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
  {
    title: "Minimalist Photo Studio",
    desc: "Within 1 hour",
    rate: 4.6,
    newItem: false,
    total: 10,
    slides: [
      { image: IMG4 },
      { image: IMG2 },
      { image: IMG3 },
      { image: IMG5 },
    ],
  },
];
