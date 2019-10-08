let modal = document.getElementById("myModal__pharmacist");
let btn = document.getElementById("farm__btn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
	modal.style.display = "block";
}
span.onclick = function(){
	modal.style.display = "none";
}
window.onclick = function(event){
	if (event.target == modal){
		modal.style.display = "none";
	}
}


let modalPatient = document.getElementById("myModal__patient");
let btnPatient = document.getElementById("patient_btn");
let spanPatient = document.getElementsByClassName("close2")[0];

btnPatient.onclick = function(){
	modalPatient.style.display = "block";
}
spanPatient.onclick = function(){
	modalPatient.style.display = "none";
}
window.onclick = function(event){
	if (event.target == modalPatient){
		modalPatient.style.display = "none";
	}
}





let turn_patientConsult = document.getElementById('btn__patient-consult');
let turn_patientMedicine = document.getElementById('btn__patient-medicine');
let turn_patientTechnics = document.getElementById('btn__patient-technics');

let turn = [];

turn_patientConsult.onclick = function(){
	let mimg = document.createElement('img');
    mimg.setAttribute('src', 'man2.png');
	turn.push(mimg);
	document.getElementById('pacient1').appendChild(mimg);
	
}
let turnMedicine = [];

turn_patientMedicine.onclick = function(){
	let img2 = document.createElement('img');
    img2.setAttribute('src', 'girl1.png');
	turnMedicine.push(img2);
	document.getElementById('pacient2').appendChild(img2);
}

let turnTechnics = [];

turn_patientTechnics.onclick = function(){
	let img3 = document.createElement('img');
    img3.setAttribute('src', 'girl.png');
	turnTechnics.push(img3);
	document.getElementById('pacient3').appendChild(img3);
}


let turn_pharmacistConsult = document.getElementById('btn__pharmacist-consult');
let turn_ppharmacistMedicine = document.getElementById('btn__pharmacist-medicine');
let turn_pharmacistTechnics = document.getElementById('btn__pharmacist-technics');



turn_pharmacistConsult.onclick = function(){
	let served = document.createElement('img');
    served.setAttribute('src', 'man2.png');
	turn.shift(served);
	document.getElementById('pacient1').remove(served);
}



turn_ppharmacistMedicine.onclick = function(){
	let servedMedicine = document.createElement('img');
    servedMedicine.setAttribute('src', 'girl1.png');
	turnMedicine.shift(servedMedicine);
	document.getElementById('pacient2').remove(servedMedicine);
}



turn_pharmacistTechnics.onclick = function(){
	let servedTechnics = document.createElement('img');
    servedTechnics.setAttribute('src', 'girl.png');
	turnTechnics.shift(servedTechnics);
	document.getElementById('pacient3').remove(servedTechnics);
}