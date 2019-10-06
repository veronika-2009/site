let queue=[];
let orderNumber = 1;
let served = 1;
let numbers = document.getElementById('totalServed');


 function queueGrowth(){
	 queue.push(orderNumber);
	$('#fullOrderAmount').text(queue.length);
	$('#totalLine').text(queue.length);
	$('#nextOrderNumber').text(queue[0]);
	orderNumber++;
 }

let purchase = [];
let medicines = 1;

function buyMedical() {
	purchase.push(medicines);
	$('#turnForTechnology').text(purchase.length);

}
let help = [];
let pharmacist = 1;

function consultation() {
	help.push(pharmacist);
	$('#turnForConsultation').text(help.length);

}


function medicinesProducts() {
	queue.shift(orderNumber);
	$('#fullOrderAmount').text(queue.length);
	let tmp = '';
	for (let i=0; i<=queue.length; i++){
		tmp= tmp + i +'';
	    numbers.innerHTML = tmp;
	}

}
function medicinesTechnics() {
	purchase.shift(medicines);
	$('#turnForTechnology').text(purchase.length);
	//$('#totalServed').text(purchase[0]).value;

 }
   function medicinesHelp() {
 	help.shift(pharmacist);
	$('#turnForConsultation').text(help.length);
}



 function newUser() {
 	let element = document.getElementById('user');
 	let link = document.createElement('i');
 	link.innerHTML = '<i class="fas fa-users" id="user"></i>';
 	element.appendChild(link);
 }