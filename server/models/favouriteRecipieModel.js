import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SignIn',
    required: true
  },
  id: {
    type: String,
    unique: true,
  },
  title: String,
  image: String,
  summary: String,
  instructions: String,
});

const Favourites = mongoose.model("favourite", favouriteSchema);

export default Favourites;

