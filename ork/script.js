const text = document.getElementById("text").innerHTML;
textEdited = text.split(' ');

document.getElementById("send").addEventListener("click" , item =>{
    let sendWord = document.getElementById('inputWord').value;
    textEdited.forEach(element => {
        if(sendWord === element){
        console.log(element);
        
        } else{
            alert('Not found');
        }
    });
});
    