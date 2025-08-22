import mongoose from 'mongoose';
import {Category} from '../../types/Category';

const categorySchema = new mongoose.Schema<Category>({
  category_name: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
    maxlength: 100,
    trim: true,
  },
});

export default mongoose.model<Category>('Category', categorySchema);
