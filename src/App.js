import HelloWorld from './HelloWorld';
import './App.css';
import Tile from './Tile'
import ClickCounter from './ClickCounter';
import AnimalCards from './AnimalCards';
import cardData from './cardData.json';
const colors = ['red', 'orange', 'yellow', 'green', 'purple']
//now let's choose a random num to be passed down by props
//to use random with JS is funky....need the Math module
//Math.random gives a random dec from 0-1. We are then multiplying that by the len of the list 
//use Math.floor to turn it from a dec into a num
//use curly braces anywhere in the return to write regular JS
//injects JS into JSX, for loops, while loops, math
//we are passing in a random color as a prop to the comp
//put {0} so it shows that it will be a num value, maintains type
const sports = ['bball', 'horses', 'baking', 'volleyball', 'coding']
let indexy = Math.floor(Math.random() * colors.length);

//version one that we didn't end up using!
// function animalData(){
//   let content = [];

//   for (let index in cardData){

//     let name = cardData[index]["name"]["name-USen"];
//     let personality = cardData[index]["personality"];
//     let birthday = cardData[index]["birthdayString"];
//     let catchPhrase = cardData[index]["catchphrase"];
//     let imageUri = cardData[index]["imageUri"];
//     let bubbleColor = cardData[index]["bubbleColor"];
//     let textColor = cardData[index]["textColor"];
  
//     content.push(<AnimalCards key={name} name={name} personality={personality} birthday={birthday} catchPhrase={catchPhrase} imageUri={imageUri} bubbleColor={bubbleColor} textColor={textColor}/>);
    
//   }

//   return content
// }

//more consise version with map!
//animal obj has everything in it!
//an arry of HTML elements on line 61
//index is handy, but don't really need to do anything with it here
let animalDisplay = cardData.map((animal, index) => {
  return <AnimalCards animal={animal} key={animal.id}/>
})

//cardData.map to go over the API data



function App() {
  return (
    <div className="App">
      <div id='jumbotron'>  <HelloWorld color={colors[indexy]}/></div>

    <div id="main-content">{
       sports.map((sportprop) => <Tile sport={sportprop} key={sportprop}/>)}
       </div>
     
     <div id='counter-section'>
      <ClickCounter initialCount={0}/>
     </div>
    <div id="main-cards">
      {animalDisplay}

    </div>

    
    </div>
  );
}

export default App;
