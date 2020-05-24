import { Agent } from './agent';

export class Day {
    public date: Date;
    public cured: number;
    public infected: number;
    public dead: number;
    public agentsCured: Agent[];
    public agentsDead: Agent[];
    public agentsInfected: Agent[];
}