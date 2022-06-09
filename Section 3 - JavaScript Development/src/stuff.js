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
