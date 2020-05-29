
function pasos(){
    var n1,n2, contador=0, i=0;
	n1 = document.getElementById('numero1').value;
    n2 = document.getElementById('numero2').value;
    var ms="<br> Procedimiento <br>";
    var sn="par ";

    while(n1>=1){
		if(n1%2!=0){
            contador=parseInt(contador+n2);
            sn="impar ";
		}
		n1=parseInt(n1/2);
        n2=n2*2;
        ms+=" numero  "+ parseInt(n1)+"    numero  " +parseInt(n2)+"  =  "+sn+"<br>";
        i++;
    }
    document.getElementById('section').innerHTML=ms;
    document.getElementById('respuesta').innerHTML=contador;
	return false;
}