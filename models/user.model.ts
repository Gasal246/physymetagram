import mongoose, { Schema, Document, ObjectId } from 'mongoose';

export interface IUsers extends Document {
  user_name: string | null;
  password: string | null;
  _id: ObjectId;
}

const UsersSchema: Schema = new Schema({
  user_name: { type: String },
  password: { type: String },
}, { timestamps: true });

const Users = mongoose.models?.Users || mongoose.model<IUsers>('Users', UsersSchema);
export default Users;

