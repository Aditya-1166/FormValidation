function clearErrors()
{ 
    // clears all the errors msg after resloving it 
    errors=document.getElementsByClassName('formerror');
    for (let item of errors) 
    {
        item.innerHTML='';
    }
}
   // To append error msg to span in HTML file
function setErrors(id,erorr)
{
    //sets error inside tag of id
    element=document.getElementById(id)
    element.getElementsByClassName('formerror')[0].innerHTML=erorr;
    

}
  // Return True --- >> Form submitted Successfully
  // Return false --->> Form Thorw Error
function validateForm(){
    var returnval=true;
    clearErrors();
    //perform validation and if validation fails ,set the value ofg returnval to false -- No form submition
   var name=document.forms['myform']['fname'].value;
   var email=document.forms['myform']['femail'].value;
   var phone=document.forms['myform']['fphone'].value;
   var pass=document.forms['myform']['fpass'].value;
   var cpass=document.forms['myform']['fcpass'].value;
   
   if(name.length < 5){
    setErrors('name','*Name is too short');
    returnval=false;            
   }
   if(email.length > 30){
    setErrors('email','*Email is too long');
    returnval=false;            
   }
   if(phone.length != 10){
    setErrors('phone','*Phone number should be 10 digits');
    returnval=false;            
   }
   if(pass.length < 6){
    setErrors('pass','*Password is too short');
    returnval=false;            
   }
   if (cpass!= pass) {
    setErrors('cpass','*Confirm Password not matched!');
   }
   return returnval;

}