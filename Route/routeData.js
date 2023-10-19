// const {bolly,holly,fit,food,tech}=require("../Controller/blogCeteg")
const bolly=require("../Controller/blogCeteg")
// const {middletwo,middlethree}=require("../MiddleW/middle")
const routOne=require("express").Router()
routOne.get('/dynamic/data',bolly)
// routOne.get("/bollywood",bolly)
// routOne.get("/hollywood/:id",middletwo,holly)
// routOne.get("/fitness",middlethree,fit)
// routOne.get("/food",food)
// routOne.get("/technology",tech)



module.exports=routOne

