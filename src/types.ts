export interface RobotStructure {
  id: { id: string };
  name: string;
  image: string;
  stats: {
    speed: number;
    endurance: number;
    dataOfCreation: Date;
  };
}

export type RobotListStructure = RobotStructure[];
