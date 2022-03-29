const app = require("./index");

const connect = require("./configs/db");

app.listen(4500, async function () {
  try {
    await connect();
    console.log("listing on the port 4500...");
  } catch (err) {
    console.log(err.message);
  }
});
