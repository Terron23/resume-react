const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ResumeSchema = new Schema({
    name: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    phone: {type: String, required: true, max: 100},
   image: {type: String, required: true, max: 100},
   website: {type: String, required: true, max: 100},
   facebook: {type: String, required: true, max: 100},
   linkedin:  {type: String, required: true, max: 100},
    jobtitle1 : {type: String, required: true, max: 100},
	period1: {type: String, required: true, max: 100},
	company1: {type: String, required: true, max: 100},
    companyURL1: {type: String, required: true, max: 100},
    jobtitle2 : {type: String, required: true, max: 100},
	period2: {type: String, required: true, max: 100},
	company2: {type: String, required: true, max: 100},
    companyURL2: {type: String, required: true, max: 100},
    details2: {type: String, required: true, max: 100},
    jobtitle3 : {type: String, required: true, max: 100},
	period3: {type: String, required: true, max: 100},
	company3: {type: String, required: true, max: 100},
    companyURL3: {type: String, required: true, max: 100},
	details3: {type: String, required: true, max: 100},
    projectname1 : {type: String, required: true, max: 100},
	url1 :{type: String, required: true, max: 100},
    details1: {type: String, required: true, max: 100},
    projectname2: {type: String, required: true, max: 100},
	url2 :{type: String, required: true, max: 100},
    details2: {type: String, required: true, max: 100},
    projectname3: {type: String, required: true, max: 100},
	url3 :{type: String, required: true, max: 100},
	details3: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Resume', ResumeSchema);