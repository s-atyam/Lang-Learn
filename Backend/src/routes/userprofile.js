const express = require('express')
const router = express.Router();

const fetchuser = require('../middleware/fetchUser')
const User = require('../db/schema/user')
const Question = require('../db/schema/question')

// this route is for user data from the database, given the auth token 
router.get('/getUserData',fetchuser, async (req,res)=>{
    try{
        const data = await User.findOne({_id:req.userID}).select('-pass');
        res.status(200).send(data);
    }catch(e){
        console.log("Error : ",e.message);
        res.status(500).send({'error':'Internal server error'});
    }
})

// this route is for getting all the questions | given langauge 
router.get('/questions/:language', fetchuser ,async (req,res)=>{
    try{
        let language = req.params.language
        let ques = await Question.find({lang:language}).select('_id text options');

        // finding the attempted question of the user
        let attemped = await User.findById(req.userID).select('attemped')

        // this will remove those question which user have already attempted
        ques = ques.filter(obj => !attemped.attemped.includes(obj._id))

        res.status(200).send({"questions":JSON.stringify(ques)});
    }catch(e){
        console.log("Error : ",e.message);
        res.status(500).send({"error":'Internal server error'});
    }
})

router.post('/submit',fetchuser,async (req, res)=>{
    try{
        const userAnswer = req.body.userAnswer
        let arrQuesIds = userAnswer.map(e=>e.questionID)
        const ques = await Question.find({ _id: { $in: arrQuesIds } }).select('_id correctOption');
        
        // getting total correct answers
        console.log(userAnswer)
        console.log(ques)
        let totalCorrect = 0
        userAnswer.forEach(element => {
            const corQues = ques.find(q => q._id == element.questionID)
            console.log(corQues)
            if(corQues && element.selectedOption===corQues.correctOption){
                console.log('found')
                totalCorrect++
            }
        });
        console.log(totalCorrect)
        
        // updating user attempted question data
        await User.findByIdAndUpdate(req.userID,{ $push : { attemped: { $each: arrQuesIds }}})

        const user = await User.findById(req.userID).select('-pass')
        let newXp = user.xp+totalCorrect*100
        let updatingFields = {
            testTaken : user.testTaken + 1,
            correctAns : user.correctAns + totalCorrect,
            wrongAns : user.wrongAns + (userAnswer.length-totalCorrect),
            notAns : user.notAns - userAnswer.length,
            xp : newXp%1000,
            level : user.level + Math.floor(newXp/1000)
        }

        await User.updateOne({_id: req.userID},{ $set: updatingFields })

        res.status(200).send({"correct":totalCorrect})

        
    }catch(e){
        console.log("Error : ",e.message);
        res.status(500).send({"error":'Internal server error'});
    }
})

module.exports = router;