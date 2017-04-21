import { IQuakeData } from './quake-data';
import { IGnsQuake } from './gns-quake';

export interface IEventView {
    quake: IGnsQuake,
    userData: IQuakeData
}