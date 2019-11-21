const text = document.getElementById("text").innerHTML;
textEdited = text.split(' ');


document.getElementById("send").addEventListener("click" , item =>{
    let sendWord = document.getElementById('inputWord').value;
    textEdited.forEach(element => {
        if(sendWord === element){
        let word = /Lorem/g;
        let newStr = text.replace(word, 'example');
        textEdited.join;
        document.getElementById("edited").innerHTML = newStr;
        }  
    });
});
    