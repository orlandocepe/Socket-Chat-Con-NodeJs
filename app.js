require("dotenv").config()
const Server=require("./models/server")

const service=new Server();


service.listen();