import { Asteroid } from './asteroid.interface';

interface Meta {
  pagination: Pagination;
}
interface Pagination {
  page_number: string;
  size: number;
  total_records: number;
  total_pages: number;
  links: Links;
}

interface Links {
  prev: string;
  self: string;
  next: string;
}

export interface AsteroidsResponse {
  meta: Meta;
  data: Asteroid[];
}
