// const {hollyData,bollyData,fitData,foodData,techData}=require("../Data/dummyData")
const blogData=require("../Data/dummyData")

const bolly=(req,res)=>{
    // const id =req.params.id
    // console.log(id)
    // const data=bollyData.find((item)=>item.id==id)
    // console.log(data)
    return res.send(blogData)
}
// const holly=(req,res)=>{
//     return res.send(hollyData)
// }
// const fit=(req,res)=>{
//     return res.send(fitData)
// }
// const food=(req,res)=>{
//     return res.send(foodData)
// }
// const tech=(req,res)=>{
//     return res.send(techData)
// }

module.exports=bolly
// module.exports={bolly,holly,fit,food,tech}