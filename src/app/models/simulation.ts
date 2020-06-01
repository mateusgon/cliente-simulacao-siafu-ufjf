import { Day } from './day';
import { Agent } from './agent';

export class Simulation {
    public scenario: string;
    public initialDate: Date;
    public endDate: Date;
    public cured: number;
    public infected: number;
    public dead: number;
    public createdDate: Date;
    public agentsCount: number;
    public daysCount: number;
    public id: number;
    public days: Day[];
    public agents: Agent[];
    public description: string;
    public videoUrl: string;
    public simulationDays: Day[]
}