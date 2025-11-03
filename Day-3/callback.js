function greet(name,callback){
    console.log("hello "+name);
    callback();
}
// function sayBye(){
//     console.log("goodbye");
// }

// greet("ABC",sayBye);

greet("ABC",()=>{
    console.log("goodbye");
})