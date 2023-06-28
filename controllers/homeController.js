const homeController = (req, res)=>{
    // res.send("Hello world")
    res.render('index',{title: "Home"})
}

export {homeController}