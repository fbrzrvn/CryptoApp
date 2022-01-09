export interface News {
  category: string;
  datePublished: string;
  description: string;
  image: Image;
  name: string;
  provider: Provider[];
  url: string;
}

interface Image {
  thumbnail: {
    contentUrl: string;
    width: number;
    height: number;
  };
}
interface Provider {
  image: Image;
  name: string;
}

export interface NewsMapped {
  category: string;
  datePublished: string;
  description: string;
  thumbnailUrl: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  name: string;
  provider: Provider[];
  url: string;
}

export interface NewsResponse {
  value: News[];
}
