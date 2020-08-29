

            
    let counting = (function () {
        let count = 0;
      
        return {
          value (num) {
            if (num !== undefined) count = num;
      
            return count;
          },
           decrement() {
            count--;
          },
          increment() {
            count++;
          }
        };
      }());
       console.log(counting.value())
       console.log(counting.increment())
       console.log(counting.increment())
       console.log(counting.value())

let myPrint = function(a,b, myPow){
let myPow = function(a,b,  callback){
let pow = (a,b);
        if (n ==! 1) return x*=pow(x,n-1);
        return a;
};

return callback (a,b,pow(a,b));
};
console.log(myPow(3, 4, myPrint)); 
console.log(myPow(2, 3, myPrint));

let car = {
  engine: 3000,   
  model: 'auris'  ,
  name: 'toyota',
  year : 2008,
  _used:'used',
  info: fullInfo,
  get used() {
        return this._used;
      },
      set used(value) {
        this._used = value ;
      }
    };




function fullInfo(){
return `${this.name} ${this.model}, ${this.engine}, year ${this.year}, ${this.used}`;
}

        console.log(car.info())

let list = [12, 23, 100, 34, 56, 9, 233];
let myMax = (arg) => Math.max.apply(Math, arg); // max не зависит от контекста, в apply можно передать как Math, так и null



console.log(myMax(list));


let arr =[12,22,82,188,288,388,488,588,688,7888];
let myArr = function (func){
return Math.max.apply(Math,func);
}

console.log(myArr(arr))


let a = 2
    b = 8

function myMul(a,b){
        
        return  a*b
}
console.log(myMul(a,b))


let myDouble = myMul.bind(2)
console.log(myDouble(a,b))

let myTriple = myMul.bind(null,3)

console.log(myTriple(a,b))

 let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];

 let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];
 let myUniq = function(notUniqNums){
       return  new Set(notUniqNums);
                
 }
let  myUniq = function(notUniqNums){

return notUniqNums = arr.push().notUniqNums



} 
console.log(myUniq(notUniqNums));