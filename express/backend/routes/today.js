module.exports.getDate = function getDate() {
  // Get the current date and time in the timezone India/Delhi
  let delhiTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  return delhiTime; // Return the formatted date and time
};
