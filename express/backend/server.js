const app = require("./app");

const { connectDB } = require("./config/db");

const PORT = process.env.PORT;

const start = async () => {
  await connectDB();

  //app.listen is where we command the node to listen to the port we hafe just assigned it
  app.listen(PORT, () => {
    console.log(`Server is running! Listening on port ${PORT}`);
  });
};

start();
