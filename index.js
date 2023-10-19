const exp=require("express")
const appone=exp()
const port=3500
const final=require("./Route/routeData")
const cors=require("cors")

appone.use(cors({
    origin:"*",
    
}))




const middleware1=((req,res,next)=>{
     console.log("this is first middle ware passs the data")
     next()
})

appone.use(middleware1)

appone.use("/api",final)
appone.get('/',(req,res)=>{
    res.send("there check my data")
})




appone.listen(port,()=>{
    try{
        console.log("server is running")
    }
    catch(err){
        console.log(err,"error")
    }
})
