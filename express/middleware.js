 function ageDetector(req, res, next){

    if(req.query.age>18){
        next();
        // res.send("yes")
    }
    else{
        res.send("err");
    }
}
module.exports = ageDetector;