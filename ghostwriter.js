function writeTweet()
{
var randIndex;
var sentence;

var intro = [" You know what gets me through the day ?","Life is full of"," Ever heard of "," To be happy, one must embrace "];
randIndex=randomUpTo((intro.length)-1);
sentence=intro[randIndex];

var body=[" existentialism. "," a good bowl of wheaties. "," crippling anxieties. "," Poorly written Harry Potter Fan-fiction "," The Unit Circle "];
randIndex=randomUpTo((body.length)-1);
sentence+=body[randIndex];

var end=[" the end."," and,you know, maybe some other things. "];
randIndex=randomUpTo((end.length)-1);
sentence+=end[randIndex];

document.getElementById("tweet").innerHTML=sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
