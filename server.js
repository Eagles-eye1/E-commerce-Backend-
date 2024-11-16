const express = require("express")
const app = express()
const cors = require('cors');
app.use(cors());

const names = ["Gold","silver","frankicense" ,"myrrh", "salt"]

app.get("/api/names",(req,res)=>{res.json(names)})

const PORT = process.env.PORT || 3000

app.listen(PORT,()=> {console.log("Server is Running on");
})