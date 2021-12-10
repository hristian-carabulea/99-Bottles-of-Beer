var output = [];
var count = 99;

function _99bottlesOfBeer() {

  while (count >=1) {

    if (count != 1) {
          console.log(count + " bottles of beer on the wall, " + count + " bottles of beer.");
          alert(count + " bottles of beer on the wall, " + count + " bottles of beer.");
    }
    else {
          console.log(count + " bottle of beer on the wall, " + count + " bottle of beer.");
          alert(count + " bottle of beer on the wall, " + count + " bottle of beer.");
    }
    count--;
    
    console.log("Take one down and pass it around, " + count + " bottles of beer on the wall.");
    alert("Take one down and pass it around, " + count + " bottles of beer on the wall.");

  }
  
}

_99bottlesOfBeer();