export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceFrom: string;
  signs: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  location: string;
}

export interface BeforeAfter {
  id: string;
  before: string;
  after: string;
  title: string;
}
