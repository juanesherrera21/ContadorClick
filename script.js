
function btnIncrementar(){
    var numero=document.getElementById("numero").innerHTML;
    console.log("numero:"+numero);

    
    document.getElementById("numero").innerHTML = incrementar(numero);

}


function incrementar(num){
    num=parseInt(num);
    num=num+1;
    return num;
} 

function btnReset(){
    document.getElementById("numero").innerHTML = 0;
}