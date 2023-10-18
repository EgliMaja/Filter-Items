export interface ProductListModel {
  name: string;
  category: string;
  price: number;
  currency: string;
  image: ImageModel;
  bestseller: boolean;
  featured: boolean;
  details: AboutProductModel;
}

export interface ImageModel {
  src: string;
  alt: string;
}

export interface AboutProductModel {
  dimmentions: DimentionsModel;
  description: string;
  recomandations: RecomandationsModel[];
}

export interface DimentionsModel {
  width: number;
  height: number;
}

export interface RecomandationsModel {
  src: string;
  alt: string;
}
