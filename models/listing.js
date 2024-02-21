const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default: "https://media.istockphoto.com/id/1094387460/photo/night-beach-party-in-goa.jpg?s=1024x1024&w=is&k=20&c=Q6pxLE5udrz1KNtpv144EJDNMqKJrc49IKlmft84zng=",
    set: (v) => v === "" ? "https://media.istockphoto.com/id/1094387460/photo/night-beach-party-in-goa.jpg?s=1024x1024&w=is&k=20&c=Q6pxLE5udrz1KNtpv144EJDNMqKJrc49IKlmft84zng=" 
    : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});


listingSchema.post("findOneAndDelete", async(listing) => {
  if(listing){
    await Review.deleteMany({_id: {$in: listing.reviews}});
  };  
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;