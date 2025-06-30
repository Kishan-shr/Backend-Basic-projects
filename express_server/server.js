import 'dotenv/config'
import express from 'express'
const app = express()
const port = process.env.PORT || 3000

// Basic routing and testing via postman

// app.get("/",(req,res)=>{
//     res.send("Hello from kishan and learn from Do while {} learning platform")
// })
// app.get("/home",(req,res)=>{
//  res.send("what you want learn !")
// })
// app.get("/enroll",(req,res)=>{
//  res.send("which course your want to enroll !")
// })

app.use(express.json())
let courseData = []
let nextId = 1
//add a new course
app.post('/enroll',(req,res)=>{
    const {name, price} = req.body
    const newCourse =  {id: nextId++, name, price}
    courseData.push(newCourse)
    res.status(201).send(newCourse)
})
//get all course
app.get("/enroll",(req,res)=>{
    res.status(200).send(courseData)
})
//get course with Id
app.get('/enroll/:id',(req,res)=>{
  const course =  courseData.find((c)=>c.id === parseInt(req.params.id))
    if(!course){
        return res.status(404).send('course not found')
    }
    res.status(200).send(course)
})
//update tea
app.put('/enroll/:id',(req,res)=>{
    const courseId = req.params.id
    const course = courseData.find((c)=>c.id === parseInt(req.params.id)) 
    if(!course){
        return res.status(404).send('course not found')
    }
    const {name,price}= req.body
    course.name = name
    course.price = price 
    res.status(200).send(course)
})

//delete tea
app.delete('/enroll/:id',(req,res)=>{
   const index = courseData.findIndex((c)=> c.id === parseInt(req.params.id))
   if(index === -1){
    return res.status(404).send('course not found')
   }
   courseData.splice(index,1)
   return res.status(204).send('Delete')
})
app.listen(port,(req,res)=>{
    console.log(`server is running at port:${port}...`)
})