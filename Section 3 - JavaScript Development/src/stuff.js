// This is display a popup alert at the top of the content area.
function alertbox() {
  alert("error, please refreash");
}

// #### arrays ####
var fruits = ["Apple", "Bananna", "Orange", "Grape", "Mango"];
// does not display last item in the array list
fruits.pop();
// does not display first item in the array list
fruits.shift();
// adds additional element to the end of an arrays item list
fruits.push("Cherry");
// adds additional element to the start of an arrays item list
fruits.unshift("Berry");
// replaces selected array item
fruits[2] = "Kiwi";
// deletes selected array item
delete fruits[2];
// adjust array listing, (2 is the index the items will start on.) (0 is to ensure we do not remove any list elements.)
fruits.splice(2, 0, "Lemon", "Tangerine");
// sort elements from a to b
fruits.sort();
//
// fruits.reverse(); [this will sort elements in the reversed order]

var girls = ["Julie", "Samantha", "Laura", "Jill"];

var boys = ["Bob", "Joe", "Walt", "Sam", "Fred"];

var combined = girls.concat(boys);

combined.sort();

// #### boolean ####

var b1 = Boolean(80);
var b2 = Boolean(2.86);
var b3 = Boolean(-10);
var b4 = Boolean("true");
var b5 = Boolean("false");
var b6 = Boolean(1 + 8 + 10.14);
var b7 = Boolean(0);
