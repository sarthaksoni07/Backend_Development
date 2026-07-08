const studentMiddleware = (req, res,next) => {
  console.log("student api called");
  next();
}
module.exports =  studentMiddleware 
