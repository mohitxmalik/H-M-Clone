
const poll={
    question:"what is your favorite programming language?",
    options:['0:Javascript','1:Python','2:C++','3:Dart'],
    answer:new Array(0,0,0,0)
}
poll.answerPoll=function(){
    let response=Number(prompt(`what is your favorite programming language?
        1.Javascript
        2.Python
        3.C++
        4.Dart
        `));
    if(response>0 && response <5){
    this.answer[response-1]=1;
    let type='string';
    this.display(type);
    return;
    } 
    return this.answerPoll();
    
}

poll.display=function(type){
    let arr=this.answer;
    if(type=='string'){
        console.log(`Poll results are ${arr}`);
    }
    else if(type=='array'){
        console.log(arr);
    }
}


let fun=function(){
    this.answerPoll();
}
    
var answer=[1,2,3,3];

poll.display.bind(window,'array')();




