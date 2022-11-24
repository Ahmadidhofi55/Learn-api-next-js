const express = require('express')
const app = express()
const port = 3000
const bodyparser = require('body-parser')

//routes utama method get / URL / endpoint
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.send('HOMEPAGE')
})

//pengambilan query
app.get('/guys', (req, res) => {
    console.log({urlParam: req.query})
    res.send('Hello guys')
    const username = req.body.username
    if(username === usernameFromDbExist){
        res.status(400).send("username sudah ada")
    }
})

app.post('/login',(req,res) => {
    console.log({ requestFromOutside : req.body})
       res.send('login berhasil')
})

app.put('/username', (req,res)=> {
    console.log({update: req.body})
    res.send('updateberhasil')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})