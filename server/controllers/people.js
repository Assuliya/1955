var mongoose = require('mongoose');
var Person = mongoose.model('Person')

module.exports = {
  show: function(req, res){
    Person.find({}, function(err, people) {
      console.log(people)
      res.json(people)
    })
  },
  create: function(req,res){
    console.log("POST DATA", req.body);
    var person = new Person({name: req.params.name});
    person.save(function(err) {
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully added a person!');
        res.redirect('/');
        }
    })
  },
  destroy: function(req,res){
    Person.remove({name: req.params.name}, function(err){
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('successfully destroyed a person!');
        res.redirect('/');
        }
    })
  },
  one: function(req, res){
    Person.find({name: req.params.name}, function(err, person) {
      console.log(person)
      res.json(person)
    })
  }
}
