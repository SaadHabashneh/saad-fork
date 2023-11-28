const express = require("express")
const app =express()
const port =process.env.PORT || 5000
require("dotenv").config()
app.use(express.json())
const cors = require("cors")
app.use(cors())
const usersRouter = require("./routers/users")
const rolesRouter = require("./routers/roles")
app.use("/roles",rolesRouter)
app.use("/users",usersRouter)



app.listen(port,()=>{
    console.log(`App listing at: http://localhost:${port}`);
})
