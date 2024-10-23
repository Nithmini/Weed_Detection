const router = require("express").Router();
let Feedbacks = require("../models/feedback");



//Add User
router.route("/add").post((req,res) => {
    const name    = req.body.name; 
    const description = req.body.description;
    const emoji   = req.body.emoji;
   
    
    if(!name || !description  || !emoji ){
        return res.status(422).json({error:"please add all the feilds"})

    }
     
    const newFeedbacks = new Feedbacks({
        name,
        description,
        emoji
    })

    newFeedbacks.save().then(() => {
         res.json("Feedbacks Added")

    }).catch((err) => {
        console.log(err);
    })

})



router.route("/").get((req,res) => {
     
    Feedbacks.find().then((users) => {
        res.json(users)

    }).catch((err) => {
        console.log(err)
    })


})


//Delete Feedback Using an Id
router.route("/delete/:id").delete(async (req, res) => {
      let feedbackId = req.params.id;
      
      await Feedbacks.findByIdAndDelete(feedbackId).then(() => {
          res.status(200).send({status: "Feedbacks deleted"});
      }).catch ((err) => {
          console.log(err.message);
          res.status(500).send({status: " Error with delete Feedbacks", error: err.message});
      })
    })



module.exports = router;