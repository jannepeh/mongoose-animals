import {Point} from 'geojson';
import {Types, Model} from 'mongoose';

type Animal = {
  name: string;
  species: Types.ObjectId;
  location: Point;
  birthdate: Date;
};

type AnimalModel = Model<Animal> & {
  findBySpecies: (species: string) => Promise<Animal[]>;
};

export type {Animal, AnimalModel};
