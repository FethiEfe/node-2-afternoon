const express = require("express");
const app = express();
const {create ,read, update, remove } = require("./controllers/messages_controller")

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));


app.post("/api/messages" , create)
app.get("/api/messages" , read)
app.put("/api/messages/:id" , update)
app.delete("/api/messages/:id" , remove)


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`I am listening ${PORT}`)
})