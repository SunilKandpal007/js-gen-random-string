/* Generate random String */
function randomString (){
    let strLen = document.getElementById('strRange').value;
    
    const strChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let stringResult = ' ';
    const strLength = strChars.length;

    if(strLen == ''){
        
        document.getElementById('stringResult').innerText = `Alert! Please enter string-lenght first to get random string.`;
        document.getElementById('stringResult').style.background = "Maroon";
        document.getElementById('stringResult').style.color = "White";
    }
    else{
        for(let i = 0; i < strLen; i++){
            stringResult += strChars.charAt(Math.floor(Math.random() * strLength));
        }   
    //document.write(randomString(2));

        document.getElementById('stringResult').style.background = "darkgreen";
        document.getElementById('stringResult').style.color = "White";
        document.getElementById('stringResult').innerHTML = `Result: ${stringResult}`;    
    }
}
    
function clearString(){
	document.getElementById('strRange').value = '';
	document.getElementById('stringResult').innerHTML = '';
	document.getElementById('stringResult').style.background = 'none';
}