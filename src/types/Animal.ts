import {Point} from 'geojson';
import {Types, Model} from 'mongoose';
import {Species} from './Species';

type Animal = {
  name: string;
  species: Types.ObjectId | Species;
  location: Point;
  birthdate: Date;
};

type AnimalModel = Model<Animal> & {
  findBySpecies: (species: string) => Promise<Animal[]>;
};

export type {Animal, AnimalModel};
