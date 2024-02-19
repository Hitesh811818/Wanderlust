const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;