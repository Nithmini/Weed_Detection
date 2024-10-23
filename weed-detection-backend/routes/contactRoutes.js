const router = require("express").Router();
let Contacts = require("../models/contact");



//Add User
router.route("/add").post((req,res) => {
    const name    = req.body.name; 
    const email = req.body.email;
    const message   = req.body.message;
   
    
    if(!name || !email  || !message ){
        return res.status(422).json({error:"please add all the feilds"})

    }
     
    const newContacts = new Contacts({
        name,
        email,
        message
    })

    newContacts.save().then(() => {
         res.json("Contacts Added")

    }).catch((err) => {
        console.log(err);
    })

})



router.route("/").get((req,res) => {
     
    Contacts.find().then((users) => {
        res.json(users)

    }).catch((err) => {
        console.log(err)
    })


})


//Delete Contact Using an Id
router.route("/delete/:id").delete(async (req, res) => {
      let contactId = req.params.id;
      
      await Contacts.findByIdAndDelete(contactId).then(() => {
          res.status(200).send({status: "Contacts deleted"});
      }).catch ((err) => {
          console.log(err.message);
          res.status(500).send({status: " Error with delete Contacts", error: err.message});
      })
    })



module.exports = router;