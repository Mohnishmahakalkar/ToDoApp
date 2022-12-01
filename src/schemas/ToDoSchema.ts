import * as mongoose from 'mongoose';

export const ToDoListSchema = new mongoose.Schema({
  id: Number,
  date: Date,
  notes: String,
  status: String,
});
