const stateAbbreviations = [
  'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
  'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
  'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
  'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
  'VT','VI','VA','WA','WV','WI','WY'
 ];
         
function initValidation(formName) {
    let $form = $(formName);

    datalist = $("datalist")
    for (let state of stateAbbreviations){
        let node = document.createElement("option");
        node.setAttribute("value", state)
        datalist.append(node);
    }

    $("#Number").mask('(000) 000-0000')

    $(':input').change(function(ev){
        validateForm();
        if(!this.checkValidity())
            $(this).addClass("was-validated")
    });
  
    $("#myform").submit(function(event){
        $form = $("#VisitorEntry");
        formEl=$form.get(0);

        event.preventDefault();  //prevent default browser submit
        event.stopPropagation(); //stop event bubbling

        validateForm();

        if (!formEl.checkValidity()){
            $(":input").addClass("was-validated")
        }
        else{
            //TODO
            //hide form
            //show thank you message
        }
   

  });
}

function isNumberKey(evt)
    {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    }

function validateForm() {
    validateCheckboxGroup();
}
function validateState(id, msg){
    $el = $(id);
    let valid=false;
    setElementValidity(id, valid, msg);
}

function validateCheckboxGroup() {

    let valid=false;


  
    setElementValidity(fieldName, valid, message);
  
    return valid;
}

function setElementValidity(fieldName, valid, message){
  let $field=$(fieldName);
  let el = $field.get(0);
  if (valid) {  //it has a value

    el.setCustomValidity('');  //sets to no error message and field is valid
  } else {

    el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat
   
  }
  
}