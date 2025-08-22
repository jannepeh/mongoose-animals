import mongoose from 'mongoose';
import {Species} from '../../types/Species';

const speciesSchema = new mongoose.Schema<Species>({
  species_name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 100,
    trim: true,
  },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
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

  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model<Species>('Species', speciesSchema);
