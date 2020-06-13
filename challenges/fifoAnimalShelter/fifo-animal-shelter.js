'use strict';


class Queue{
  constructor(){
    this.front = null;
    this.rare = null;
    this.queue = [];
  }
  enqueue(value){
    if (this.queue.length === 0){
      this.front = value;
    }
    this.queue.push(value);
    this.rare = value;
  }
  dequeue(){
    let value = this.queue.shift();
    this.front = this.queue[0];
    return value;
  }
  
}



class AnimalShelter{
  constructor(){
    this.cats = new Queue();
    this.dogs = new Queue();
  }
  
  enqueueAnimal(animal){
    if(animal ==='cat'){
      this.cats.enqueue(animal);
    }else if(animal ==='dog')
    {
      this.dogs.enqueue(animal);
    }else{return 'just cat or dog';}
      
  }
  
  dequeueAnimal(pref){
    if(pref==='cat'){
      if(this.cats.length===0){
        return null;
      }

      let adoptedCat = this.cats.dequeue();
      return adoptedCat;
    }
    if(pref==='dog'){
      if(this.cats.length===0){
        return null;
      }
      let adoptedDog = this.dogs.dequeue();
      return adoptedDog;
    }
  }
  
}


let animal = new AnimalShelter();


animal.enqueueAnimal('cat');
animal.enqueueAnimal('dog');
animal.enqueueAnimal('cat');
animal.enqueueAnimal('dog');
animal.enqueueAnimal('cat');
animal.enqueueAnimal('dog');
console.log(animal);

animal.dequeueAnimal('cat');
animal.dequeueAnimal('dog');
console.log(animal);









