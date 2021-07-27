
// This section is for Complete Variable and Function Settings

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// These are random strings and they mostly need their own array/variable.
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

// The segment above is the main story; the arrays below are where are randomness (and silliness) come into play.

let insertX = ["Willy the Goblin", "Big Daddy", 'Father Christmas'];

let insertY = ["the soup kitchen", "Disneyland", "the White House"];

let insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

// This is the final section, Event listener and Partial Function Definition

randomize.addEventListener('click', result); //This means that result will run once you make a click?

function result() {

    let newStory = storyText; //This allows us to constantly create new texts. as a result, only you var newStory inside this function.
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ); //now from the arrays a specic string is selected for each click.

    newStory = newStory.replace(":insertx:",xItem); //Theoretically, doing the / /g should replace both instances of :insertx: . but if the code doesn't work this should be the first line to check.
    newStory = newStory.replace(":insertx:",xItem); //Yeah, ignore the line above i just duplicated it.
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14);
    weight = weight.toString();
    weight = weight.concat(" stone"); //this just calculates the stones, and then converts it into a string for concatenation.
    let temperature =  Math.round((94-32)*(5/9));
    temperature = temperature.toString();
    temperature = temperature.concat(" centigrade");
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}