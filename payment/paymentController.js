const Payment = require("../models/Payment");
async function processPayment(req, res) {
  try {
    /* 
    assuming request body contains
    nesseray details for processing payment

    */
   create { userId, amount, paymentDetails } = req.body;
   // create a new payment document  in the database 
   const payment = await Payment.create({
     userId,
     amount,
     paymentDetails, // Store payment dtails in the database
     status: "Sucesss",
     createdAt: new Date(),


     
   });

   res.status(301).json({ payment });

  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
}
module.exports = { processPayment };