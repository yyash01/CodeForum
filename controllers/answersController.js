const User = require("../models/User");
const Answer = require("../models/Answer");
const Question = require("../models/Question");
const Comment = require("../models/Comment");

//to show a form to user to enter the answer
module.exports.newQ = (req, res) => {
  Question.findById(req.params.id, function (err, questions) {
    if (err) {
      console.log(err);
    } else {
      res.render("answers/new", { question: questions });
    }
  });
};

//to post a new Answer of A particular Question in Database.
module.exports.newAnswerPost = async (req, res) => {
  //look For the Question using ID
  Question.findById(req.params.id, async function (err, questions) {
    if (err) {
      console.log(err);
    } else {
      const { title, content } = req.body;
      const userData = await User.findOne({ googleId: req.params.userid });
      var author = {
        id: req.params.userid,
        link: `http://localhost:3000/profile/${req.params.userid}`,
        name: userData.firstName,
      };
      const newAnswer = new Answer({
        topic: title,
        content: content,
        author: author,
      });
      Answer.create(newAnswer, function (err, answer) {
        if (err) {
          console.log(err);
        } else {
          //save answer
          answer.save();
          questions.answers.push(answer);
          questions.save();
          userData.answers.push(answer);
          userData.save();
          res.status(200).json({ answerID: answer._id });
        }
      });
    }
  });
};

//find the Answer with provided ID and show its detail , with comments related to this Answer
module.exports.detailAnswer_get = (req, res) => {
  Answer.findById(req.params.id)
    .populate("comments")
    .exec((err, foundanswer) => {
      if (err) {
        console.log(err);
      } else {
        //render show template with that Question
        res.render("answers/show", { answer: foundanswer });
      }
    });
};

//delete the answer
module.exports.delete_answer = (req, res) => {
  Answer.findByIdAndRemove(req.body.answerID, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({ msg: "success" });
    }
  });
};

//upvote a answer
module.exports.upvote_answer = async (req, res) => {
  await Answer.findOne({ _id: req.body.answerID }, function (err, found) {
    if (found) {
      const vote = found.votes + 1;
      found.updateOne({ votes: vote }, function (err) {
        if (err) {
          console.log(err);
        } else {
          found.save();
        }
      });
      res.status(200).json({ msg: "success" });
    } else {
      console.log(err);
    }
  });
};
