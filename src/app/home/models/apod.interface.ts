interface ApodData {
  id: string;
  type: string;
  attributes: ApodAttributes;
}

interface ApodAttributes {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export interface Apod {
  data: ApodData;
}
