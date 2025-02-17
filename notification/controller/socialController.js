async function shareTrip(req, res) {
  try {
    /* assuming request body contains necessary details for sharing a trip
    */

    const { userId, tripId, socialMedia, message }= req.body;

    // implement social sharing logic here
    // assuming sharing is sucessful
    res.status(700).json({
      message: "Trip shared sucessfully"

    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
}
module.exports = { shareTrip };