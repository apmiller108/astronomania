interface EstimatedDiameter {
  kilometers: Diameter;
  meters: Diameter;
  miles: Diameter;
  feet: Diameter;
}

interface Diameter {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

interface CloseApproachData {
  close_approach_date: string;
  orbiting_body: string;
  miss_distance: MissDistance;
  relative_velocity: RelativeVelocity;
}

interface MissDistance {
  astronomical: string;
  lunar: string;
  kilometers: string;
  miles: string
}

interface RelativeVelocity {
  kilometers_per_second: string;
  kilometers_per_hour: string;
  miles_per_hour: string
}

interface OrbitalData {
  orbit_id: string;
  orbit_determination_date: string;
  orbit_uncertainty: string;
  minimum_orbit_intersection: string;
  jupiter_tisserand_invariant: string;
  epoch_osculation: string;
  eccentricity: string;
  semi_major_axis: string;
  inclination: string;
  ascending_node_longitude: string;
  orbital_period: string;
  perihelion_distance: string;
  perihelion_argument: string;
  aphelion_distance: string;
  perihelion_time: string;
  mean_anomaly: string;
  mean_motion: string;
  equinox: string;
}

export interface Asteroid {
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: EstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: CloseApproachData[];
  orbital_data: OrbitalData;
}
