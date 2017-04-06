function writeTweet()
{
var randIndex;
var sentence;
var intro = ["You know what gets me through the day?","Life is full of","Ever heard of","To be happy, one must embrace"];
var body=["existentialism","a good bowl of wheaties","crippling anxieties","Poorly written Harry Potter Fan-fiction","The Unit Circle"];
var end=["the end.","and,you know, maybe some other things"];
randIndex=randomUpTo(intro.length);
//cant figure out how o assign the value
sentence=intro[randIndex];

randIndex=randomUpTo(body.length);

sentence=body[randIndex];

randIndex=randomUpTo(end.length);

sentence=end[randIndex];

document.getElementById("tweet").innerHTML=sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
