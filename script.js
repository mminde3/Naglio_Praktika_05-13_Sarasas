var array = [...Array(130)].map(() => Math.random().toString(36)[2]).join('');

h1 = "";

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if( element.toUpperCase() != element.toLowerCase() || element.codePointAt(0) > 127 ){
        //Elment = raides 

        h1 += `<p>${element}</p>`;
        var senas = false;
    }else{
        //Element = skaiciai

        if(senas == true){
            h1 = h1.slice(0, -5);
            h1 += `${element}</h1>`
            }else{
                h1 += `<h1>${element}</h1>`;
            }
        var senas = true;
    }
}

document.getElementById("h1").innerHTML = h1;