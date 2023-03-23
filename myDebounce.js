Function.prototype.myDebounce = function(interval) {
    let countdown = true;
    let that = this;
    console.log("test")
    const timer = ()=> {
        if(countdown){
            countdown = false;
            setTimeout(()=>{return that();},interval);
        }
    }
    return timer;

}
// Similar to throttle but we don't want to call the function until .500 milisonds. 
//
// hello.mydebounce(5000)
// hello
// 
// hello
// hello 


// We invoke a function -> this runs the function
// If we wait interval time, we invoke the function again
// Before, invoke a function
// wait interval time before the function is allowed to be called again
// 

class SearchBar {
    constructor() {
      this.query = "";
  
      this.type = this.type.bind(this);
      this.search = this.search.bind(this);
    }
  
    type(letter) {
      this.query += letter;
      this.search();
    }
  
    search() {
      console.log(`searching for ${this.query}`);
    }
}

const searchBar = new SearchBar();

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
};

searchBar.search = searchBar.search.myDebounce(500);
queryForHelloWorld();


class Neuron {
    fire() {
      console.log("Firing!");
    }
}
  
const neuron = new Neuron();

neuron.fire = neuron.fire.myDebounce(500)

neuron.fire()
neuron.fire()
neuron.fire()
