
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
  help();//so the user knows what this app do
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  //turn input to lowercase letters so that no error ocure if upper case letters appear
 
  // get commands and params
  text=text.replace('\n','');
  var i = text.indexOf(' ');
  if (i==-1) i=text.length;
  var mycommand = text.substring(0,i).toLowerCase();
  var myparams = text.substring(i+1);

  //dispature
  if (mycommand == 'quit') quit();
  else if(mycommand == 'exit') exit();
  else if(mycommand == 'hello') hello(myparams);
  else if(mycommand == 'help') help(); 
  else if(mycommand == 'add') add(myparams);
  else if(mycommand == 'list') list();
  else if(mycommand == 'remove') remove(myparams);
  else  if (mycommand == 'edit') edit(myparams);
  else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed;
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"');
}


/**
 * Says hello
 *
 * @returns {void}
 */

/*function hello(){
  console.log('hello!');
  console.log("--------");
}*/



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('----')
  console.log('Quitting now, goodbye!');
  console.log('-----------------------');
  process.exit();
}
/**
 * Exits the application
 *
 * @returns {void}
 */
 function exit(){
  console.log('----')
  console.log('Exitting now, goodbye!');
  console.log('-----------------------');
  process.exit();
}
//help functions outputs all commands available for the user and the role of each one
function help(){
  console.log('----')
  console.log('add:"Adds a task to My list."');
  console.log('exit:"Exits the application."');
  console.log('hello:"Says hello plus the extra text the user inputs."');
  console.log('help:"Outputs all commands available for the user and the role of each one."');
  console.log('list:"List my tasks."');
  console.log('quit:"Exits the application."');
  console.log('remove:"Removes a certain task from My list."')
  console.log('----------------------------------');
}
// The following line starts the application
startApp('Omar kouzi');
//help function

//======= hello function
function hello(name1){
  //------- remove empty spaces before and after the content then add an initial space as a separaitor from "hello"
  name1 =' '+ name1.trim();
  //------- in case of an empty content remove the empty space added above
  if(name1 == ' '){
    name1='';
  }
  /*other way to compile the above code
  name1 =name1.trim();
  if(name1 != ""){
    name1 = " " + name1}*/
  
  console.log('hello'+name1+'!');
  
  console.log('--------------------');
}

//******************************************************************
//*****************************************************************
//******* task manegment
//*****************************************************************


// list function
const mylist = ["aks","ins","osa","asoa"];
function list(){
console.log('My List\n'+'--------');
mylist.forEach((task, i)=>{
  console.log(`${i+1}`+' - '+task);
});
}
// add function
function add(newtask){
  newtask = newtask.trim();
  if (newtask == '')
  {
    console.log('no task to add.')
  } 
 else{
  mylist.push(newtask);
  console.log(`${newtask} was added to your list`);
 }
  console.log('----------------------------');

}
// remove function
function remove(i){
  if(i > mylist.length){
    console.log("Can't remove task :'task not found'")
  }
  else{
 //remove element at index at i-1 hence it's zero based
 mylist.splice(i-1,1);
 //called for businuss presentation
 list();
  }
 
}

//edit function
function edit(text) {
  if(text == ''){
    console.log('error!!');
    return;
  }
  var i = text.indexOf(' ');
  if (i==-1) {
    var task_numb = mylist.length;
    var edited_task = text ;
    mylist[task_numb-1] = edited_task;
   }
  else{
    var task_numb = text.substring(0,i).toLowerCase();
    var edited_task = text.substring(i+1); 
    mylist[task_numb-1] = edited_task;
 
  }
   
 
  
}







