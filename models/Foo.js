import mongoose from 'mongoose';

/* PetSchema will correspond to a collection in your MongoDB database. */
const FooSchema = new mongoose.Schema({
  name: {
    /* The name of this user */

    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [60, 'Name cannot be more than 60 characters'],
  },
  status: {
    /* User's age, if applicable */

    type: String,
  },
});

const model = mongoose.models.Foo || mongoose.model('Foo', FooSchema);
// const model = mongoose.models.Curry || mongoose.model('Curry', UserSchema);
export default model;
