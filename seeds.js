var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://pixabay.com/get/e83db40e28fd033ed1584d05fb1d4e97e07ee3d21cac104491f0c67fa6e5b4b0_340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tincidunt nibh vitae finibus. Aenean iaculis varius luctus. Maecenas non lorem eget est posuere rhoncus. Nunc nulla nisi, mollis ut dolor sed, sollicitudin maximus ligula. Praesent rhoncus ex nec volutpat dapibus. Mauris ut suscipit mauris. Nam non sagittis ligula, sed consequat ante. Proin ac pharetra ipsum. Fusce libero metus, sodales nec turpis quis, tempus fringilla lectus. Sed vel rutrum arcu."
    }, 
    {
        name: "Supreme Heights",
        image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f0c67fa6e5b4b0_340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tincidunt nibh vitae finibus. Aenean iaculis varius luctus. Maecenas non lorem eget est posuere rhoncus. Nunc nulla nisi, mollis ut dolor sed, sollicitudin maximus ligula. Praesent rhoncus ex nec volutpat dapibus. Mauris ut suscipit mauris. Nam non sagittis ligula, sed consequat ante. Proin ac pharetra ipsum. Fusce libero metus, sodales nec turpis quis, tempus fringilla lectus. Sed vel rutrum arcu."
    }, 
    {
        name: "Canyon floor",
        image: "https://pixabay.com/get/e835b20e2bf2013ed1584d05fb1d4e97e07ee3d21cac104491f0c67fa6e5b4b0_340.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tincidunt nibh vitae finibus. Aenean iaculis varius luctus. Maecenas non lorem eget est posuere rhoncus. Nunc nulla nisi, mollis ut dolor sed, sollicitudin maximus ligula. Praesent rhoncus ex nec volutpat dapibus. Mauris ut suscipit mauris. Nam non sagittis ligula, sed consequat ante. Proin ac pharetra ipsum. Fusce libero metus, sodales nec turpis quis, tempus fringilla lectus. Sed vel rutrum arcu."
    }
]

function seedDB(){
Campground.remove({}, function(err){
        if (err){
            console.log(err);
        }
      console.log("removed campgrounds!"); 
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
          if (err) {
              console.log(err)
          } else {
            console.log("added a campground");  
            Comment.create({
                text: "This place is great, but I wish there was internet",
                author: "Homer"
            }, function (err, comment){
                if (err){
                    console.log(err);
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    console.log("Created New Comment");
                }
            });
          }
      });
    });
    });   
}

module.exports = seedDB;