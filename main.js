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


let turn = [];
//let man = document.getElementById('user2');
let mimg = document.createElement('img');
mimg.setAttribute('src', 'man2.png');


let turn_patientConsult = document.getElementById('btn__patient-consult');
let turn_patientMedicine = document.getElementById('btn__patient-medicine');
let turn_patientTechnics = document.getElementById('btn__patient-technics');

turn_patientConsult.onclick = function(){
	turn.push(mimg);
	document.body.appendChild(turn[0]);
	
}



