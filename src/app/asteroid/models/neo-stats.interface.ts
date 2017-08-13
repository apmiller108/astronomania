interface NeoStatsData {
  id: string;
  type: string;
  attributes: NeoStatsAttributes;
}

interface NeoStatsAttributes {
  near_earth_object_count: number;
  close_approach_count: number;
  last_updated: string;
  source: string;
  nasa_jpl_url: string;
}

export interface NeoStats {
  data: NeoStatsData;
}
