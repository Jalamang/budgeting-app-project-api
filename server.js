const index = require("./index");
const dotenv = require("dotenv")
// const mongoose = require('mongoose')
// Configuration
dotenv.config()

// mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database is connected!"))


const PORT = process.env.PORT || 3005;

index.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));


