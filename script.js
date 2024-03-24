//your JS code here. If required.
const size=document.getElementById("fontsize");
const color=document.getElementById("fontcolor");


document.cookies={size:size.value,color:color.value};
	console.log(document.cookies);
document.body.style.color=`${document.cookies.color}`; 
document.body.style.fontSize=`${document.cookies.size}px`; 

function handleSubmit() {
	this.event.preventDefault();  
	document.cookies={size:size.value,color:color.value};
	console.log(document.cookies);
document.body.style.color=`${document.cookies.color}`; 
document.body.style.fontSize=`${document.cookies.size}px`; 
		console.log(document.cookies.size);
}