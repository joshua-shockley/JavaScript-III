/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. creates new function permanently bound to "this" value
 * 2. "this" is pointing to what's to the left of the dot... implicit as automatic
 * 3. uses new keyword constructs a new object to point with "this"
 * 4. uses "this" by using .call, .apply or .bind
 *
 * write out a code example of each explanation above
 */

// Principle 1
//creates new function permanently bound to "this" value
// code example for Window Binding
function myBuhdie(says) {
    console.log(this);
    return says;
}
myBuhdie("Hey, Man!");


// Principle 2
// "this" is pointing to what's to the left of the dot... implicit as automatic
// code example for Implicit Binding

let myBuddie = {
    name: 'The Dude!',
    says: 'The Dude Abides',
    dude: function() {
        console.log(this.says);
    }
}
myBuddie.dude();

// Principle 3

// code example for New Binding
function TheDude(speaks) {
    this.words = speaks;
}
let funnyDude = new TheDude('You were never in Naam!');
console.log(funnyDude.words);

// Principle 4
//uses "this" by using .call, .apply or .bind
// code example for Explicit Binding

function dudely() {
    console.log(this.speak);
}
const myDudely = {
    name: 'Dude the Dudest of the Dudes',
    speak: 'Yo, Dude!',
}
dudely.call(myDudely);