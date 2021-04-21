/******w***********
    
    Project 3 
    Name: Sarah Dizon	
    Date: April 21, 2021
    Description: The javascript file for Contact webpage.
				

******************/


document.addEventListener("DOMContentLoaded", load);

function load(){
	document.getElementById("feedBackForm").addEventListener("submit", validate);

}

function validate(e){
	
	hideAllErrors();

	//	Determine if the form has errors
	if(formHasErrors()){
		// 	Prevents the form from submitting
		e.preventDefault();
		// 	Returning false prevents the form from submitting
		return false;
	}

	return true;
}

/*	
	formHasErrors function
	returns a true if errors are discovered
	returns a false if there are no errors
*/
function formHasErrors(){

	let errorFlag = false;

	//	Array of input element id values
	let Information = ["fullName", "phoneNumber", "email"];

	let emailRegex = new RegExp(/^(.+)@(\S+)$/);
	let email = document.getElementById("email").value;


	// Validate if user entered anything in the field

	for(let i=0; i<Information.length; i ++){
		let textField = document.getElementById(Information[i]);

		if(textField.value == null || (textField.value) == "")	
		{
			document.getElementById(Information[i] + "_error").style.display = "block";
			if(!errorFlag){
				textField.focus();
				textField.select();
			}
			errorFlag = true;
		}
	}

	//Validates the email
	if(!emailRegex.test(email))
	{
		document.getElementById("email_error1").style.visibility = "visible";
		document.getElementById("email_error1").style.display = "block";

		if(!errorFlag){
			document.getElementById("email").focus();
			document.getElementById("email").select();
		}

		errorFlag = true;
	}

	// Validate the comment section if its empty
	let textArea = document.getElementById("comments").value;
	if(textArea.value == "")
	{
		document.getElementById("comments_error").style.visibility = "visible";
		document.getElementById("comments_error").style.display = "block";

		if(!errorFlag){
			document.getElementById("comments").focus();
			document.getElementById("comments").select();
		}

		errorFlag = true;
	}
	
	//	Code above here!
	return errorFlag;
}

function hideAllErrors()
{
	//	Get an array of the error fields
	var errorFields = document.getElementsByClassName("error");

	//	Loop through each error field
	for(var i = 0;i < errorFields.length; i++){
		//	Hide the error field
		errorFields[i].style.display = "none";
	}
}