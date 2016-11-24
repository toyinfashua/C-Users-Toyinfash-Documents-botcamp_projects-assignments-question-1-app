
(function() {

var aritGeo = function (arr) {
	if(!arr.length) {
		return 0;
	}
	var seq1 = arr[1] - arr[0];
	var seq2 = arr[1]/arr[0];
if(arithmetic(arr,seq1)) {
	return 'Arithmetic';
}

if(geometric(arr,seq2)) {
	return 'Geometric';
}
return -1;

/*for ( var i = 0; i < arr.length - 1; i++) {
    
     if((arr[i + 1] - arr[i]) == seq1) {

     }
	/*if (arr[i+1] - arr[i] === seq1) {
		return 'Arithmetic';
	}
	if (arr[i+1] / seq2 === arr[i]) {
		return 'Geometric';
	}
	else if ((arr !== []) && (arr[i + 1] - arr[i] !== seq1) && (arr[i + 1]/seq2 == arr[i])) {
		return '-1';
	} 
}*/



}

function arithmetic(arr, sep) {
	var seps = sep;
	var value = false; 
	for(var i = 0; i < arr.length - 1; i++) {
     if((arr[i + 1] - arr[i]) === seps) {
     	seps = arr[i + 1] - arr[i];
     	value = true;
     }
     else{
     	value = false;
     	return value;
     }


 }
 return value;
}

function geometric(arr, gep) {
	var geps = gep;
	var value = false; 
	for(var i = 0; i < arr.length - 1; i++) {
     if((arr[i + 1] / arr[i]) === geps) {
     	geps = arr[i + 1] / arr[i];
     	value = true;
     }
     else{
     	value = false;
     	return value;
     }

    
}
 return value;

}
module.exports = {
	'aritGeo': aritGeo
}

}) ();