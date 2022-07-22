'use strict';
//array destructuring




/* 
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia','Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
    order:function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

};
/* const arr = [2,3,4]; */
/* const a = arr[1]; */
/* console.log(a); */
/* const [x, y ,z] = arr */;
/* console.log(x, y, z); 
let [first, second] =restaurant.categories;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);
//receive 2 return values from a function
 const [starter, mainCourse] = restaurant.order(2,0);
 console.log(starter, mainCourse);
////////////////////////////////////////////////////////////////////////////

 //nested destructuring
 const nested = [3, 4, [5,6]];
 let [num1, , num2] = nested;
 const[num1a, num2a] = num2;    
 console.log(num1, num1a) */
 //End of array destructuring


////////////////////////////////////////////////////////////////////////////

 //Object Destructuring
/*  const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia','Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
openingHours: {
thu :{
    open : 12,
    close: 22,
},
fri :{
    open: 11,
    close: 23,
},
sat:{
    open: 0,//open 24 hours
    close: 24,
},
},

    orderDelivery:function({starterIndex, mainIndex, time, address}){
       // console.log(`ORDER RECEIVED ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to be delivered by ${time} to ${address}`);
    },

    orderPasta:function(ing1, ing2, ing3)
    {
       // console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
      

}; 
restaurant.orderDelivery({
    time: '22:30', 
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
})
const {name, openingHours, categories}=restaurant;
//default value
const {menu = [], starterMenu: starters = []} = restaurant
//end of def value
 const {thu } = openingHours;
 const {open:o, close: c}= thu ;*/
// console.log(o, c ); 

//mutating variables
 let a =111;
 let b = 999;
 let c = 222;
 const obj ={a:23, b:7, c:14 };
 //{a,b}=obj;wrong because a and b are inside curly braces or codeblocks 
 //which demands a terminator ;
 //end of object destructuring
({a,b,c}= obj);
// console.log(a,b,c);
////////////////////////////////////////////////////////////////////////////

 //THE SPREAD OPERATOR   unpacking all elements of an array
/*  const arr = [7,8,9];
 const goodNew = [1,2,...arr];
console.log(goodNew); */
 
/* 
const newMenu = [...restaurant.mainMenu, 'gnocci', 'tuna' ]; */
//console.log(...newMenu);

/* const jointMenu = [...restaurant.mainMenu, ...restaurant.starterMenu]; */
//console.log(...jointMenu)

//iterables are arrays strings maps and sets but not OBJECT....YOU CAN USE SPREAD OPERATOR ON ALL ITERABLES
const str ='Jeremiah';
const letters = [...str];
//console.log(...letters)
//real-world example
//const ingredients = [prompt('Let\'s make pasta. Ingredient 1?'), prompt('Ingredient 2?'),  prompt('Ingredient 3?')];
//restaurant.orderPasta(...ingredients);
//spread operators on objects even though they ar not iterables
/* const restaurant2 = {...restaurant,
    name: 'Jerry',
    location: 'Aerodrome',
} */

//end of spread operator

////////////////////////////////////////////////////////////////////////////

//REST PATTERN AND REST PARAMETERS
// const[...others] = [1,2,3,4,5];

////////////////////////////////////////////////////////////////////////////

//short circuiting(&&'  ||)
//falsey values are undefined,null, 0, ''.
//console.log(null||undefined);
// console.log(4||'Jerry'); will print out a 4 because 4 is a truthy value and or operator short circuits the operation if the 1st operand is a truthy value
//falsey values are undefined,null, 0, ''. so if the come first b4 an or operator, they will be skipped and the last operand will be printed instead
//   and operator short cicuits when the 1st value is falsey  
//End of short circuiting

////////////////////////////////////////////////////////////////////////////

//THE NULLISH COALESCING OPERATOR(??)
//it regards 0 and '' as truthy values it only recognizes null and undefined as nullish/falsey
/*restaurant.numGuests = 0;
const guests = restaurant.numGuests ?? 10;
console.log(guests);*/

////////////////////////////////////////////////////////////////////////////
//CODING CHALLENGE

// Football betting app 

const game1 = {
    team1: 'Bayern Munich',
    team2:'Borussia Dortmund',
    players: [
        [
        'Neuer',
        'Pavarrd',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnabry',
        'Lewandowski',   
     ],
     [
        'Burki',
        'Schulz',
        'Hummels',
        'Can',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Bellingham',
        'Reus',
        'Hazard',
        'Haaland',
     ],
    ],
    score:'4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    Date:  'Nov 9th, 2034',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,

    },
 
};
/* 
1.Create one player array for each team ('variables 'players1' and 'players2') 
2.The first player in any player array is the goal keeper and the others are field players. For Bayern(team1), create one variable 'gk' 
with the goalie's name, and one array('fieldPlayers') with all the remaining 10 field players.
3.Create an array 'allPlayers'  containing all plaayers of both teams
4.During the game, Bayern (team1) used 3 substitute players . So create a new array ('players1Final') containing all the original team1 
players plus 'Thiago','Perisic','Coutinho'.
5.Based on the game.odds object, create one variable for each odd called ('team1', 'draw', 'team2')
6.Write a function ('printGoals') that receives an arbitrary number  of player names(not an array) and print each of them to the console
, along with the number of goals who were scored(number of player names passed in).
7.The team with the lower odd is more likely to win. Print to the console which team is more likely to winwithouot if/else statement or 
terenary operator
 */
// const [players1, players2]=game.players;//1
// const [gk1,...fieldPlayers1]=players1;//2
// const [gk2,...fieldPlayers2]=players2;//2
// const allPlayers = [...players1,...players2];//3
// const sub1 = ['thiago','perisic','coutinho'];//4
// const players1Final = [...players1,...sub1 ];//4
// const team1 = game.odds.team1;//5
// const draw = game.odds.x;//5
// const team2 = game.odds.team2;//5
const printGoals = function(...players){
 
    // console.log(`${players.length} goals were scored`)
}
// printGoals(...game.scored);//6/
// 7
// team1<team2 && console.log('team1 is more likely to win');
// team2<team1 && console.log('team2 is more likely to win');

//CODING CHALLENGE COMPLETED

////////////////////////////////////////////////////////////////////////////
//LOOPING ARRAYS: THE FOR -OF LOOP
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia','Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
openingHours: {
thu :{
    open : 12,
    close: 22,
},
fri :{
    open: 11,
    close: 23,
},
sat:{
    open: 0,//open 24 hours
    close: 24,
},
},

    orderDelivery:function({starterIndex, mainIndex, time, address}){
       // console.log(`ORDER RECEIVED ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to be delivered by ${time} to ${address}`);
    },

    orderPasta:function(ing1, ing2, ing3)
    {
       // console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
};
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]; 
// console.log(...menu);

//For of loop
// for(const item of menu){console.log(item)};
// originally you can only use the for of loop to get the current item in the array but u can aslo get bth the index and current items like this
// menu.entries() is an array iterator in es6 . It contains an array which contains the index and the element
/* 
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}
[[Prototype]]: Object
 */
for(const [i,el] of menu.entries())
{
    // console.log(`${i + 1}: ${el}`)
};

//end of for of loop  Come back for better explantion

//////////////////////////////////////////////////////////////////////////

//ENHANCED OBJECT LITERALS
/* const openingHours= {
    thu :{
        open : 12,
        close: 22,
    },
    fri :{
        open: 11,
        close: 23,
    },
    sat:{
        open: 0,//open 24 hours
        close: 24,
    },
    };
const restaurant = 
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia','Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
    //putting only the name of the variable that holds the external object that you wan to insert will add the properties of that object too
    openingHours,
//old syntax
    orderDelivery:function({starterIndex, mainIndex, time, address}){
       // console.log(`ORDER RECEIVED ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to be delivered by ${time} to ${address}`);
    },
    //new syntax you will remove the colon and 'function' so the new es6 syntax will be property(paramter){},
    orderPasta(ing1, ing2, ing3)
    {
       //console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
}; */

//////////////////////////////////////////////////////////////////////


//OPTIONAL CHAINING(?.)
/* 
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia','Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
    order:function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
openingHours: {
thu :{
    open : 12,
    close: 22,
},
fri :{
    open: 11,
    close: 23,
},
sat:{
    open: 0,//open 24 hours
    close: 24,
},
},

    orderDelivery:function({starterIndex, mainIndex, time, address}){
       // console.log(`ORDER RECEIVED ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to be delivered by ${time} to ${address}`);
    },

    orderPasta:function(ing1, ing2, ing3)
    {
       // console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },
      

}; 

//if a property does not extist and you want to call another property after it, it will throw up an error because the previous property is undefined
//es6 added optional chaining so that only if the property before the  (?.) exists then  the next property will be read

console.log(`${restaurant.openingHours.fri?.open}:00am`);

//example of for of loop and optional chaining
const weekDays = ['mon','tue','wed','thu','fri','sat','sun'];
for(const days of weekDays){
    //console.log(days);
   const open = restaurant.openingHours[days]?.open??`closed`;
   console.log(`The restaurant will be open at ${open}:00am on ${days}`)

}
//if you want to use a variable name as the property name use []
//You can also use this optional chaining for methods

console.log(restaurant.orderDelivery?. (0, 1) ?? 'we are out of stock');
console.log(restaurant.order ?. (0, 1) ?? 'we are out');

//optional chaining works on arrays

const journey = ['js1', 'js2','js3'];
 console.log(journey[3]?.open); */


 //END OF OPTIONAL CHAINING



 /////////////////////////////////////////////////

 //LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES

//iterables are arrays strings maps and sets but not OBJECT
const restaurant2 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia','Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Rissoto'],
    order:function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
openingHours: {
thu :{
    open : 12,
    close: 22,
},
fri :{
    open: 11,
    close: 23,
},
sat:{
    open: 0,//open 24 hours
    close: 24,
},
},

    // orderDelivery:function({starterIndex, mainIndex, time, address}){
    //     console.log(`ORDER RECEIVED ! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} to be delivered by ${time} to ${address}`);
    // },

    // orderPasta:function(ing1, ing2, ing3)
    // {
    //     console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    // },
      

}; 
//PROPERTY VALUES
for (const foodie of Object.values(restaurant)){
    // console.log(foodie);
}
//property names(object.keys(object))
const openHours = restaurant.openingHours;
const properties = Object.keys(openHours);
// console.log(properties);
let openStr =`We are open on ${properties.length} days
:`;
for(const day of properties ){
    // console.log(day)
    openStr += `${day}, `
}
// console.log(openStr);
//FOR PROPERTY VALUES AND NAMES USE OBJECT.ENTRIES
const entries = Object.entries(openHours);
// console.log(entries);
for(const [key,{open,close}] of entries)
{
    // console.log(`On ${key}, we open at ${open} and close by ${close}`);
}

// CODING CHALLENGE NO 2

/* 
Continuation of the football betting app
1.Loop over the game.scored array  and print each player name to the console along with the number exmple(goal 1 : Lewandwoski;)
2.Use a loop to calculate the average odd and log it to the console
3.Print the 3 odds to the console like this 
odds of victory bayern munich:1.33;
odd of draw:3.25;
odd of victory borrusia dortmund:6.5;
Get the team name from the game object directly dont hardcode it (except for draw) hint:note how the odds and the game have same proprty names😏;
BONUS:
create an object called scorers which contains the names of the players who scored as properties and the number of goals as the value
eg:
{
    Gnarby:1,
    Hummels:1,
    Lewandowski:2,
};
 */

const game = {
    team1: 'Bayern Munich',
    team2:'Borussia Dortmund',
    players: [
        [
        'Neuer',
        'Pavarrd',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnabry',
        'Lewandowski',   
     ],
     [
        'Burki',
        'Schulz',
        'Hummels',
        'Can',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Bellingham',
        'Reus',
        'Hazard',
        'Haaland',
     ],
    ],
    score:'4:0',
    scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
    Date:  'Nov 9th, 2034',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,

    },
 
};
const scored = game.scored;
// console.log(scored)
for(const [index,name] of scored.entries()){
    // console.log(`Goal ${index+1}: ${name}`);
}
const odds = Object.values(game.odds);
// console.log(odds)
let average = 0;
for(const odd of odds) average += odd;
    average/=odds.length;
    // console.log(average);

/* const arr = [1,2,3,4,5];
const average = arr.reduce((a, b) => a+b, 0)/arr.length;
console.log(average) */
/* const victory =['Victory','Draw', 'Victory'];
const game2 = Object.values(team);
for( const [t1,t2] of game2 ){
    console.log(`Odds of ${victory} of ${t1} is `)
} */

for(const [team,odd] of Object.entries(game.odds)){
    const teamStr =  team ==='x'? 'draw' : `Victory ${game[team]}`
    // console.log(`Odd of ${teamStr} is ${odd}`);
} 
// bonus
// const gscore = game.scored;
// for ( const scorers of gscore){
// const scorer = {
//     ${scorers}:
// } }

// ///////
// DATA STRUCTURES MAPS AND SETS
// SETS
const orderSet = new Set(['pizza','pasta','pizza','risotto', 'pasta', 'pizza']);
// console.log(orderSet);
// sets and strings are also iterables
// sets look like arrays but are inside curly braces like objects the ony difference is that unlike objects, sets do not have keys and key values(property===key)
// Sets have unique elements and the order of elements are irrelevant(diff between sets and arrays)

// WE CAN GET THE SIZE OF THE SET
// console.log(orderSet.size);
// WE CAN CHECK THE EXISTENCE OF A SET ELEMENT : nottet it has to be case sensitive
// console.log(orderSet.has('pizza'));
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('bread'));
// WE CAN ADD NEW ELEMENTS TO A SET
// orderSet.add('Ginger');
// orderSet.add('Mushroom');
// console.log(orderSet);
// WE CAN DELETER ELEMENTS FROM A SET
// orderSet.delete('pizza');
// orderSet.clear();//it clears the whole set
// console.log(orderSet);

//also unlike arrays whre u can retrieve a particular value by using variable[index] we cannot and do not need to retrieve values from sets because
// sets dont have indexes and all this makes sense bcoz sets are unique and their order is insignificant
// looping over sets since they are iterables
for(const order of orderSet){
    // console.log(order);
}
// major use case of sets is to remove duplicate values of arrays . Example:
const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter'];
const staffUnique = [...new Set(staff)];//conversion from sets to arrays use spread operator
// console.log(staffUnique);
// console.log(new Set(['Waiter','Chef','Waiter','Manager','Chef','Waiter']).size);

// MAPS
const rest = new Map()
    rest.set('name','FoodCo');
    rest.set(1,'Ologuneru');//.set is used to add to an empty map it is advisable to do it this way
    rest.set(2,'Jericho');
    // u can keep chaining the set method
    rest.set('open',11).set('close', 23).set(true,'We are open').set(false, 'We are closed');
    // console.log(rest);

    // reading data from a map we use the get method(get(key))
    // console.log(rest.get('name'));
     const time = 21; 
    // console.log(rest.get(time>rest.get('open')&&time<rest.get('close')));

    // using arrays and objects as keys in maps
    const arr = [1,2];
    rest.set(arr, 'test');
    rest.set(document.querySelector('h1'), 'title');//u can also use dom elements as keys
    // console.log(rest);
    // console.log(rest.get([1,2]));//this will not work because the array which is the key and the one in the get method are ot the same
    // youd have to do it like this
    // console.log(rest.get(arr));//storing the array key in a variable;


    // MAPS:ITERATION

    const question = new Map([
        ['question','What is the best Programming language in the world?'],
        [1,'C'],
        [2,'Java'],
        [3,'JavaScript'],
        ['correct',3],
        [true, 'Correct'],
        [false,'Try Again'],//same array structure returned from calling Object.entries method[key,value]
    ]);
    // console.log(question)
    // how to convert from Objects to maps
    // console.log(Object.entries(openHours));
    const hoursMap = new Map(Object.entries(openHours));
    // console.log(hoursMap)

    // MAP ITERATION
    // quiz app
    // console.log(question.get('question'));
    for(const [key,value] of question){
        if(typeof key === 'number'){
            // console.log( `Option ${key} : ${value}`)
        }
    }
    // const answer = Number(prompt('Your Answer is ?'))
    // console.log(answer);
    // console.log(question.get(answer===3))
// converting map back to an array form
// use spread operator
// console.log(...question)

// When to use these data structures and their pros and cons

// CODING CHALLENGE #3
/* 
football betting app #3
We have a map with a log of events that happened during the game . The values are the events themselves and the keys are the minutes in which they happened (90+et)
1.Create an array 'events' of the different game events that happened(no duplicates)
2.After the game finished, it was found that the yellow card from minute 64 was unfair and needs to be removed
3.Print 'An event happened, on average, every 9 minutes '(a game has 90 mins)
4.Loop o'er the events and log 'em to the console, marking whether it's in the first half or 2nd half like this:
[First Half] 17: ⚽Goal
*/
const gameEvents = new Map([
        [17,'⚽Goal'],
        [36,'🔁Substitution'],
        [47,'⚽Goal'],
        [61,'🔁Substitution'],
        [64,'🟨Yellow Card'],
        [69,'🟥Red Card'],
        [70,'🔁Substitution'],
        [72,'🔁Substitution'],
        [76,'⚽Goal'],
        [80,'⚽Goal'],
        [92,'🟨Yellow Card'],
]);
const events = new Set([...gameEvents.values()]);
// console.log([...events]);
// 2
gameEvents.delete(64);
// console.log(gameEvents)
// 3
const time2 = [...gameEvents.keys()].pop();
// console.log(time2);
// console.log(`An event happened, on average, every ${time2/gameEvents.size} minutes `);
// 4
// const eachEvent = [...gameEvents.values()];
// const eachKey = [...gameEvents.keys()];
for(const [min,events] of gameEvents){
 /*    each<45&&console.log(`[First Half] ${each}:`);
    each>45&&console.log(`[Second Half] ${each}:`); */
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    // console.log(`[${half} HALF] ${min} : ${events}`);
}
// END OF CODING CHALLENGE

// WORKING WITH STRINGS

const airline = 'TAP Air Portugal';
const plane = 'A320';

// getting the character at a particular index is same as arrays
// console.log(plane[0]);
// shortcut
// console.log('B737'[0]);

// length of string
// console.log(airline.length);

// STRINGS METHODS
// 1.indexOf 
// console.log(airline.indexOf('r'));
// lastIndexOf
// console.log(airline.lastIndexOf('r'));

// use cases of these string methods
// console.log(airline.slice(4));
// console.log(airline.slice(4,7));//this meand that the indexes after the end slice will be removed. It stops estracting before reaching the specified index
// the length of the extracted string in line 741 will always be the end - beginnning; ie. 7-4
// This doesn't change the underlying because it is impossible to MUTATE strings they are primitives 

// to find the first word in a sentence piece of strings we use
// console.log(airline.slice(0,airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')+1));

// console.log(airline.slice(-4));
// console.log(airline.slice(-4, -2));

// a little function that checks for middle seats b and e in a string
const checkMiddleSeat = function(seat){
    const seatCheck = seat.slice(-1);
    if(seatCheck==='B'||seatCheck==='E'){
       console.log(' You got the middle seat' )}
       else{console.log('lucky you')}
}
// checkMiddleSeat(prompt('Input seat number'));

// string methods continued

// to change the case
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// Fix   capitalization in a passenger name
// const passenger = 'jErRy';
// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect)

// MAKE A FUNCTION OUT OF IT
 const checkName =function(name){
    const passengerLower = name.toLowerCase();
    // console.log(passengerLower);
    const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
    // console.log(passengerCorrect)
 }
//  checkName(prompt('Input Name'))

// Comparing Email
// const email = 'hello@jonas.io';
// wrong form of inputting the email is inputted
// const loginEmail = '   Hello@Jonas.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail)

// shortcut
// const normalEmail = loginEmail.toLowerCase().trim();
// console.log(normalEmail)
// function time

const  email = function(email1,email2){
const normalEmail = email2.toLowerCase().trim();
// console.log(email1===normalEmail);
}
// email(prompt('ENTER 1ST EMAIL'),prompt('ENTER 2ND EMAIL'));
// replacing strings

const priceGB = '273,22#';
const priceUS = priceGB.replace('#','$').replace(',','.');
// console.log(priceUS)
// .replace() replaces entire words and characters

const announcement = 'All passengers should pass the gate gate';
// console.log(announcement.replaceAll('gate','door'));//all the occurrences of the word that needs to be replaced

// METHODS THAT RETURN BOOLEANS
// 1.Includes();
const plane1 = 'A320neo';
// console.log(plane1.includes('A320'));

// 2. startsWith()
// console.log(plane1.startsWith('A'));//case sensitive 

// 3. endsWith();//the exact opposite of startsWith()

// practice exercise
// to check if you are allowed onboard a plane based on what you have on you
const checkBaggage = function(items){
const baggage = items.toLowerCase();
if(baggage.includes('knife')|| baggage.includes('gun')){
    // console.log('YOU CANNOT COME ON  BOARD THE PLANE');
}else{
    // console.log('WELCOME ONBOARD');

}
}
checkBaggage('I have a Pocket Knife, a laptop and Some Food');
checkBaggage('I have a gun for Protection, and some socks');
checkBaggage('I\'ve got some snacks and a camera');

// one of the most important string methods  .split()

console.log('a+very+nice+string'.split('+'));

const [firstName,lastName] = 'Jeremiah Opara'.split(' ');
// say you want to add a MR at the beginning and change the last name to uppercase, use JOIN() method
const newName = ['MR.' ,firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

// capitalizing name modified
const capitalizeName = function(name){
const names = name.split(' ');
const namesUpper = [];//push the array into this empty array
for(const n of names){
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
}
console.log(namesUpper.join(' '));
}
capitalizeName('jane jonas jacky jerry');

// padding-adding charcaters to a string until it reaches a desired length

const message = 'Go to gate 26!'
console.log(message.padStart(25, '+'));
// paddEnd(number to be padded, 'character to be padded with)  

// real world example of padding
// credit card number padding encryption on internet

const maskCreditCard = function(number){
const str = number + '';//once one of the operands of a plus operator is a string, the whole will be converted to a string likewise
// console.log(str)
const sliceNumber = str.slice(-4);
return sliceNumber.padStart(str.length,'*');
// console.log(str.padStart(8,'*').padEnd(8,'*'))
}
console.log(maskCreditCard(5666767568718396))

// repeat() method


// coding challenge no 4#

/* Write a program that takesa list of variables written inunderscore case and returns it as camelCase

the input will come from a textarea inserted inside the dom and conversion will happen when the button is pressed


THIS TEST DATA  (passed to a textarea)
underscore_case
  first_name
Some_Variable
   calculate_AGE
delayed_departure


should produce this output
(5 separate console.logs
    underscoreCase
    firstName
    someVariable
    calculateAge
    delayedDepature)
 
    HINT 1: Remember which character defines a new line in textarea
    HINT2:The solution only needs to work for a variable made out of 2 words, like a_b;
    // there is no harm in watchomg solution coz its hard on purpose
 
    */
 