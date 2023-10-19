const middletwo=((req,res,next)=>{
    console.log("middle ware two working")
    const age=20;
    if(age>18){
        next()
    }
    else{
        res.send("some thing went wrong")
    }
})




const middlethree=((req,res,next)=>{
    console.log("middle ware three working")
    const name="data"
    if(name==="data"){
        next()
    }
    else{
        res.send("some thing went wrong")
    }
})




module.exports={middletwo,middlethree}