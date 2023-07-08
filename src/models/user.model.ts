import { InferSchemaType, Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

export type UserType = InferSchemaType<typeof userSchema>;

const UserModel = models.User || model('User', userSchema);

export default UserModel;
