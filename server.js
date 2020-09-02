















app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
})



const port = process.env.Port || 3000
app.listen(post, () => {
    console.log(`Server Running at ${port}`)
})