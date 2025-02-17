// reviewController.js

const Review = require("../models/Review");

async function submitReview(req, res) {
  try {
    /* assuming request body contains necessary details for submitting a review
    */
   const { userId, destination, rating, comment } = req.body;

   // ceate a new review document in the database
   const review = await Review.create({
     userId,
     destination,
     rating,
     comment,
     createdAt: new Date(),

   });

   res.status(302).json({ review });


  } catch (error)  {
    res.status(500).json({
      error: error.message 
    });
  }
}
module.exports = { submitReview };