import mongoose from 'mongoose';

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    /* The name of this user */

    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  age: {
    /* User's age, if applicable */

    type: Number,
  },
});

const model = mongoose.models.User || mongoose.model('User', UserSchema);
// const model = mongoose.models.CURRY || mongoose.model('CURRY', UserSchema);
export default model;
