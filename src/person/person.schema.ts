import { Schema } from 'mongoose';

export const PersonSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});
