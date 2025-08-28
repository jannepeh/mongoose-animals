import mongoose from 'mongoose';
import {Animal, AnimalModel} from '../../types/Animal';

const animalSchema = new mongoose.Schema<Animal>({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
    trim: true,
  },

  species: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Species',
    required: true,
  },

  location: {
    type: {
      type: String,
      required: true,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere',
    },
  },

  birthdate: {
    type: Date,
    required: true,
  },
});

animalSchema.statics.findBySpecies = function (species_name: string) {
  return this.aggregate([
    {
      $lookup: {
        from: 'species',
        localField: 'species',
        foreignField: '_id',
        as: 'species_info',
      },
    },
    {$unwind: '$species_info'},
    {
      $match: {'species_info.species_name': species_name},
    },
    {
      $project: {
        __v: 0,
        'species_info.__v': 0,
      },
    },
  ]);
};

export default mongoose.model<Animal, AnimalModel>('Animal', animalSchema);
