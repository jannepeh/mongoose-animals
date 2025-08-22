import {Point} from 'geojson';
import {Types} from 'mongoose';

type Animal = {
  name: string;
  species: Types.ObjectId;
  location: Point;
  birthdate: Date;
};

export type {Animal};
