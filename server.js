const index = require("./index");
const dotenv = require("dotenv")

// Configuration
dotenv.config()

const PORT = process.env.PORT || 3000;

index.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));


