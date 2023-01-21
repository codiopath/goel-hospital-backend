const express = require('express')

const mongoose = require('mongoose')

const cors = require('cors')

const UserModel = require('./models/UserModel')
const DescriptionModel = require('./models/DescriptionModel')
const BlogModel = require('./models/BlogModel')

mongoose.set('strictQuery', false)

mongoose.connect('mongodb+srv://vaagish:vaagish123@cluster0.gtz5aqb.mongodb.net/my_db?retryWrites=true&w=majority', ()=> {
    console.log('Database connected successfully')
})
.catch((err)=>{
    console.log(err)
})

const app = express()

app.use(express.json())

app.use(cors())

const PORT = '3002'

app.get('/ping', (req, res)=> {
    res.send('pong')
})

// app.post('/post', (req, res)=> {
//     const {userName, password} = req.body
//     res.json(userName, password)
// })

app.post('/adding-user', async (req, res)=> {
    const check = await req.body
   await UserModel.create(check)
   .then(()=> {
        res.send("data uploaded successfully")
   })
   .catch((err)=> {
        res.send(`This is the error : ${err.message}`)
   })

})

app.put('/update-user', async (req, res)=> {
    const check = await req.body

   await UserModel.find(check)
   .then(()=> {
    UserModel.updateOne()
   })
   .catch((err)=> {
    res.send(`This is the error : ${err}`)
   })

})


app.get('/get-user', async (req, res)=> {
    const check = await req.body

   await UserModel.find(check)
   .then((obj)=> {
    res.send(obj)
   })
   .catch((err)=> {
    res.send(`This is the error : ${err}`)
   })

})



app.get('/get-all-user', async (req, res)=> {

   await UserModel.find()
   .then((obj)=> {
    res.send(obj)
   })
   .catch((err)=> {
    res.send(`This is the error : ${err}`)
   })

})


app.post('/adding-desc', async (req, res)=> {
    const check = await req.body
   await DescriptionModel.create(check)
   .then(()=> {
        res.send("data uploaded successfully")
   })
   .catch((err)=> {
        res.send(`This is the error : ${err.message}`)
   })

})

app.get('/get-desc', async (req, res)=> {
    const check = await req.body

   await DescriptionModel.findOne(check)
   .then((obj)=> {
    res.json(obj)
   })
   .catch((err)=> {
    res.send(`This is the error : ${err}`)
   })

})



// ---- Blog Model Start ---


app.post('/adding-blog', async (req, res)=> {
    const check = await req.body
   await BlogModel.create(check)
   .then(()=> {
        res.send("data uploaded successfully")
   })
   .catch((err)=> {
        res.send(`This is the error : ${err.message}`)
   })

})

app.get('/get-blog', async (req, res)=> {
    const check = await req.body

   await BlogModel.find()
   .then((obj)=> {
    res.json(obj)
   })
   .catch((err)=> {
    res.send(`This is the error : ${err}`)
   })

})

app.post('/blogElement', async (req, res)=> {
    const {title} = req.body
    const blogTitle = await BlogModel.findOne({title})

    res.json(blogTitle)
})






app.listen(PORT, ()=> {
    console.log(`Backend is working fine on port ${PORT}`)
})