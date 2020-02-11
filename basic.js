const request = require("request");
request(`https://www.w3schools.com/`, function(err, res, body) {
  console.log("body--->>", res);
});
