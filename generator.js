// function* generatorSequence(){
//     yield 1;
//     yield 2;
//     return 3;
// }
// let generator = [0,...generatorSequence()]
// console.log(generator)
// let one = generator.next()
// let two = generator.next()
// let three = generator.next()
// for(let value of generator){
//     console.log(value)
// }
// console.log(JSON.stringify(one))
// console.log(JSON.stringify(two))
// console.log(JSON.stringify(three))


///////////// Using generators for iterables /////////////

// let range = {
//     from: 1,
//     to: 5,
  
//     // for..of range calls this method once in the very beginning
//     [Symbol.iterator]() {
//       // ...it returns the iterator object:
//       // onward, for..of works only with that object, asking it for next values
//       return {
//         current: this.from,
//         last: this.to,
  
//         // next() is called on each iteration by the for..of loop
//         next() {
//           // it should return the value as an object {done:.., value :...}
//           if (this.current <= this.last) {
//             return { done: false, value: this.current++ };
//           } else {
//             return { done: true };
//           }
//         }
//       };
//     }
//   };
  
  // iteration over range returns numbers from range.from to range.to
  // console.log([...range]);


//   let range ={
//     from:1,
//     to:5,
//     *[Symbol.iterator](){
//       for(let value = this.from;value<=this.to;value++){
//           yield value;
//       }
//     }
//   };
// console.log([...range])


  ///////////////// Generator composition ///////////////
// function* generatorSequence(start,end){
//   for(let i= start;i<=end;i++)
//   yield i;
// }
// function* generatorPasswordCodes (){
//   yield* generatorPasswordCodes(10,15);
//   yield* generatorPasswordCodes(35,55);
//   yield* generatorPasswordCodes(70,100);
// }
// let str = '';
// for(let code of generatorPasswordCodes()){
//   str += String.fromCharCode(code)
// }
// console.log(str)

/////////////////yield” is a two-way street//////////
// function* gen(){
//   try{
//   let result = yield'2+2=?';
//   console.log("The execution does not reach here, because the exception is thrown above")
  // let result1 = yield '3*3=?'
  // console.log(result1)
// }
// catch(e){
//   console.log(e)
// }
// }
// let generator = gen();
// let question = generator.next().value;
// console.log(generator.next(4).value);
// console.log(generator.next(9).done);
// generator.throw(new Error("The answer is not found in my database"));


/////////////////////// asyn iterates ///////////////////////////////////
// let range ={
//   from:1,
//   to:5,
//   [Symbol.asyncIterator](){
//     return {
//       current: this.from,
//       last:this.to,
//       async next(){
//         await new Promise(resolve=>setTimeout(resolve, 3000));
//         if(this.current <= this.last){
//           return { done: false, value: this.current++ };
//         }
//         else{
//           return {done:true};
//         }
//       }
//     }
//   }
// };
// (async ()=>{
//   for await (let value of range) { // (4)
//     console.log(value); // 1,2,3,4,5
//   }
// })()