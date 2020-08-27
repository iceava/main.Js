var userObj = {firstName:'Victor', lastName:'Kamar', age:25}

userObj.fullName = function(firstName, lastName){
return this.firstName + ' ' + this.lastName
}
var someText = 'My text'
function defUpperStr(someText ){
        return (someText || 'Default text').toUpperCase();
        
      }

var n =10
function evenFn(n){
let arr = [ ]
for (let i=1; i<=n; i++) if (i%2===0) arr.push(i);
return arr
}

var x = 1
function weekFn(x){
let str = [''];
switch (x){
 case 1 : str = 'Понедельник';break;
 case 2 : str = 'Вторник';break;
 case 3 : str = 'Среда';break;
 case 4 : str = 'Четверг';break;
 case 5 : str = 'Пятница';break;
 case 6 : str = 'Суббота';break;
 case 7 : str = 'Воскресенье';break;
 default: str = null;
 
}
return str
}

var age = 21
function ageClassification(age){
        return age < 0 ? null:
        age <=24 ? 'детский возраст':
        age <=44 ? 'молодой возраст':
        age <=65 ? 'средний возраст': 
        age <=75 ? 'пожилой возраст':
        age <=90 ? 'старческий возраст':
        age <=122 ? 'долгожители':
        age > 122 ? null:
        null;
       

}

 var n =10
 function oddFn(n){
 let i =0
 let arr = [ ]
 while (i++<n ) if (i%2 !==0)
 arr.push(i);
 return arr
}

function mainFunc(a, b, cbAdd) {
  if (cbAdd && typeof cbAdd === 'function') return cbAdd(a, b);

  return false;
}
function mainFunc(a, b, cbPow) {
  if (cbPow&& typeof cbPow=== 'function') return cbPow(a, b);

  return false;
}
function mainFunc(a, b, cbRandom) {
  if (cbRandom && typeof cbRandom === 'function') return cbRandom(a, b);

  return false;
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
  return Math.pow(num, pow);
}

function cbAdd(a, b) {
  return a + b;
}