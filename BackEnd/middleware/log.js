const logMiddelware = (req , res , next)=>{
    console.log('Logging middleware');
    next();
}

export{logMiddelware}