const {hollyData,bollyData,fitData,foodData,techData}=require("../Data/dummyData")

const bolly=(req,res)=>{
    return res.send(bollyData)
}
const holly=(req,res)=>{
    return res.send(hollyData)
}
const fit=(req,res)=>{
    return res.send(fitData)
}
const food=(req,res)=>{
    return res.send(foodData)
}
const tech=(req,res)=>{
    return res.send(techData)
}

module.exports={bolly,holly,fit,food,tech}