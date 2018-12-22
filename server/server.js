const express = require("express")

const bodyParser = require("body-parser")
const MongoClient = require('mongodb').MongoClient

var db;
const app = express();


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded({extended: true}))



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  console.log(__dirname)
  
})

app.post('/resume', (req, res) => {
    console.log('Hellooooooooooooooooo!')
    console.log(req.body)
    db.collection('resume').update(
        { _id: "5c1da3edb6e571984fab2a20"},
       { $set:{
           
     name: req.body.name,
     github: req.body.github,
     tagline: req.body.tagline,
    email: req.body.email,
    phone: req.body.phone,
   image: req.body.image,
   website: req.body.website,
   linkedin:  req.body.linkdin,
   experience: [{
    jobtitle:req.body.jobtitle1, 
    period:req.body.period1,
    company: req.body.company1,
    companyURL: req.body.companyurl1,
    description: req.body.description1,
     
},

{
    jobtitle : req.body.jobtitle2 ,
	period: req.body.period2 ,
	company: req.body.company2 ,
    companyURL: req.body.companyurl2 ,
    description: req.body.description2 ,
},
{
    jobtitle : req.body.jobtitle3 ,
	period: req.body.period3,
	company: req.body.company3,
    companyURL: req.body.companyurl3,
	description: req.body.description3,
}], 
summary: req.body.summary, 
projects: [{
    projectname : req.body.projectname1,
	url :req.body.url1,
    details : req.body.details1,
},
{
    projectname: req.body.projectname2,
	url :req.body.url2,
    details: req.body.details2,
},
{

    projectname: req.body.projectname3,
	url :req.body.url3,
	details: req.body.details3,
}],
  

    }},
    { upsert: true })

    res.redirect("http://localhost:3000/")
})

// app.get('/', (req, res) => {
//   var cursor = db.collection('quotes').find()
//   console.log(cursor)
// })

//You use toArray to be able to do shit with the data you get from the database
app.get('/resume1', (req, res) => {
    console.log("We lit")
  db.collection('resume').find().toArray((err, result) => {
    if (err) return console.log(err);
    console.log(result)
    res.json(result)
    // renders index.ejs
    //res.render('index.ejs', {quotes: result})
  })
})



app.put('/update', (req, res) =>{
    resume.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, resume) {
        if (err) return next(err);
        res.send('data has been udpated.');
    });
})


MongoClient.connect('mongodb://terron23:kobesmalls23@ds139934.mlab.com:39934/fullstack-resume-app', (err, database) => {
    db = database.db('fullstack-resume-app')
 app.listen(3001, () => {
  console.log('listening on 3000')
})
})



// name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//    image: req.body.image,
//    website: req.body.website,
//    linkedin:  req.body.linkdin,
//     jobtitle1 : req.body.jobtitle1,
// 	period1: req.body.period1,
// 	company1: req.body.company1,
//     companyURL1: req.body.companyurl1,
//     description1: req.body.description1,
//     jobtitle2 : req.body.jobtitle2 ,
// 	period2: req.body.period2 ,
// 	company2: req.body.company2 ,
//     companyURL2: req.body.companyurl2 ,
//     description2: req.body.description2 ,
//     jobtitle3 : req.body.jobtitle3 ,
// 	period3: req.body.period3,
// 	company3: req.body.company3,
//     companyURL3: req.body.companyurl3,
// 	description3: req.body.description3,
//     projectname1 : req.body.projectname1,
// 	url1 :req.body.url1,
//     details1: req.body.details1,
//     projectname2: req.body.projectname2,
// 	url2 :req.body.url2,
//     details2: req.body.details2,
//     projectname3: req.body.projectname3,
// 	url3 :req.body.url3,
// 	details3: req.body.details3,