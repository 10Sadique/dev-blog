import { InferSchemaType, Schema, model, models, Model } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password?: string;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = models.User || model('User', userSchema);

export default User;
