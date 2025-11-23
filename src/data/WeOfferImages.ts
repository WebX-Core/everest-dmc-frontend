export interface ImageData {
  id: number;
  slug: string;
  src: string;
  alt: string;
  title: string;
  isZoomTarget?: boolean;
}

const images: ImageData[] = [
  {
    id: 1,
    slug: "everest-base-camp-trek",
    src: "/services/everest-min.jpg",
    alt: "Image 1",
    title: "Everest Base Camp Trek",
  },
  {
    id: 2,
    slug: "everest-view-breakfast-helicopter-tour",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mount_Everest_as_seen_from_Drukair2_PLW_edit_Cropped.jpg",
    alt: "Image 2",
    title: "Everest View Breakfast & Helicopter Tour",
  },
  {
    id: 3,
    slug: "everest-three-pass-trek",
    src: "https://cdn.britannica.com/39/76239-050-DE5FCF36/Climbers-side-Nepali-Mount-Everest.jpg",
    alt: "Image 3",
    title: "Everest Three Pass Trek",
  },
  {
    id: 4,
    slug: "annapurna-base-camp-trek",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Close_Up_View_of_Mount_Everest_from_Kala_Patthar_%285644_m%29_in_2023-IMG-3485.jpg/1000px-Close_Up_View_of_Mount_Everest_from_Kala_Patthar_%285644_m%29_in_2023-IMG-3485.jpg",
    alt: "Image 4",
    title: "Annapurna Base Camp Trek",
  },
  {
    id: 5,
    slug: "more-services",
    src: "https://assets-cdn.kathmandupost.com/uploads/source/news/2021/third-party/thumb2-1619021995.jpg",
    alt: "Image 5",
    title: "More Services",
    isZoomTarget: true,
  },
  {
    id: 6,
    slug: "manaslu-base-camp-trek",
    src: "https://cms.discoveryworldtrekking.com/media/4796/everesst.webp",
    alt: "Image 6",
    title: "Manaslu Base Camp Trek",
  },
];

export default images;
