const Resume= require('../models/resume.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.resume_create = function (req, res) {
let resume = new Resume(
    {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        // image: req.body.image,
        // website: req.body.website,
        // facebook:req.body.facebook,
        // linkedin:  req.body.linkedin,
        // experience:req.body.experience,
        // Projects:req.body.projects
    }
);

resume.save(function (err) {
    if (err) {
        return "1";
    }
    res.send('Resume Created successfully')
})

}


exports.resume_details = function (req, res) {
    Resume.findById(req.params.id, function (err, resume) {
        if (err) return next(err);

        console.log(resume)
        res.send(resume);
    })
};
