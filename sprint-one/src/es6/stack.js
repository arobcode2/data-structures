class Stack {
  
  constructor() {
    this.storage = {};
    this.counter = 0;
  }
  
  push (string){
    this.storage[this.counter] = string;
    this.counter ++;
  }

  pop  (){
    if (this.counter > 0){
      this.counter --;
      return this.storage[this.counter];
    }  
  }
  size (){
    return this.counter
  }
}