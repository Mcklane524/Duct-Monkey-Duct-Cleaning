import { Service, Review, BeforeAfter } from './types';

export const BUSINESS_NAME = "Duct Monkey";
export const PHONE_NUMBER = "(555) 382-8666"; // (555) DUCT-MONKEY (approx)
export const EMAIL = "hello@ductmonkey.com";
export const SERVICE_AREAS = ["Springfield", "Shelbyville", "Capital City", "Ogdenville", "North Haverbrook"];

export const SERVICES: Service[] = [
  {
    id: "air-duct",
    title: "Air Duct Cleaning",
    description: "Our signature deep-clean removes dust, pet dander, and allergens from your entire HVAC system. We use high-powered vacuum suction and agitation tools to ensure every vent is spotless.",
    icon: "Wind",
    priceFrom: "$299",
    signs: [
      "Visible dust on vent covers",
      "Unexplained allergies or sneezing",
      "Uneven airflow between rooms",
      "Musty odors when the AC kicks on"
    ]
  },
  {
    id: "dryer-vent",
    title: "Dryer Vent Cleaning",
    description: "Prevent house fires and save on energy bills. A clogged dryer vent forces your dryer to work harder and longer, creating a major fire hazard.",
    icon: "FlameKindling",
    priceFrom: "$99",
    signs: [
      "Clothes take more than one cycle to dry",
      "Dryer is hot to the touch",
      "Burning smell while drying",
      "Lint visible outside the vent cap"
    ]
  },
  {
    id: "hvac-sanitizing",
    title: "HVAC Sanitizing & Mold Removal",
    description: "Kill bacteria, mold spores, and viruses living in your ductwork. We use EPA-approved, family-safe solutions to sanitize your system and improve air quality.",
    icon: "ShieldCheck",
    priceFrom: "$149",
    signs: [
      "Visible mold growth near vents",
      "Persistent musty or damp smells",
      "Recent water damage or leaks",
      "High humidity in the home"
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Sarah J.",
    rating: 5,
    text: "I couldn't believe the amount of dust they pulled out of our vents! My son's allergies improved almost overnight. The 'monkey' crew was professional and super clean.",
    date: "2 days ago",
    location: "Springfield"
  },
  {
    id: "2",
    name: "Mike D.",
    rating: 5,
    text: "Fast, affordable, and they actually showed me the before and after photos. Highly recommend Duct Monkey for anyone who hasn't had their ducts cleaned in years.",
    date: "1 week ago",
    location: "Shelbyville"
  },
  {
    id: "3",
    name: "Linda K.",
    rating: 5,
    text: "The dryer vent cleaning was a lifesaver. Our dryer was taking 2 hours to dry a small load. Now it's back to 40 minutes. Worth every penny!",
    date: "3 weeks ago",
    location: "Capital City"
  }
];

export const BEFORE_AFTER_GALLERY: BeforeAfter[] = [
  {
    id: "ba1",
    before: "https://picsum.photos/seed/dusty-duct/800/600",
    after: "https://picsum.photos/seed/clean-duct/800/600",
    title: "Main Return Vent - 10 Years of Dust"
  },
  {
    id: "ba2",
    before: "https://picsum.photos/seed/lint-clog/800/600",
    after: "https://picsum.photos/seed/clear-vent/800/600",
    title: "Dryer Vent - Major Fire Hazard Removed"
  }
];
