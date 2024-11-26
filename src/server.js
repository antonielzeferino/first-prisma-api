const express = require("express")

const usersRouter = require("./routes/users")
const postsRouter = require("./routes/posts")
const tagsRouter = require("./routes/tags")

const app = express()

app.use(express.json())
app.use("/api/users", usersRouter)
app.use("/api/posts", postsRouter)
app.use("/api/tags", tagsRouter)

app.listen(3000, () => console.log("Servidor rodando com sucesso!"))