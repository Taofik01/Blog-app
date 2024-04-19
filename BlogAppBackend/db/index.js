const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://sulaimontaofik08:Gxt35sNslZrE52TW@cluster0.ovjgyj4.mongodb.net/"
  )
  .then(() => console.log("connected Mongo db"))
  .catch((e) => console.log(e));
