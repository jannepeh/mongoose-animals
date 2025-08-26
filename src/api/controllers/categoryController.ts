import {NextFunction, Request, Response} from 'express';
import {Category} from '../../types/Category';
import {MessageResponse} from '../../types/Messages';
import categoryModel from '../models/categoryModel';
import CustomError from '../../classes/CustomError';

type DBMessageResponse = MessageResponse & {
  data: Category;
};

const postCategory = async (
  req: Request<{}, {}, Category>,
  res: Response<DBMessageResponse>,
  next: NextFunction,
) => {
  try {
    const newCategory = new categoryModel(req.body);
    const savedCategory = await newCategory.save();

    res.status(201).json({
      message: 'Category created',
      data: savedCategory,
    });
  } catch (error) {
    next(new CustomError((error as Error).message, 500));
  }
};

export {postCategory};
