export interface RobotStructure {
  id: string;
  name: string;
  image: string;
  stats: {
    speed: number;
    endurance: number;
    dateOfCreation: number;
  };
}

export type RobotsStructure = RobotStructure[];

export interface ApiResponseStructure {
  robots: RobotsStructure;
}
