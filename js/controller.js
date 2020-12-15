$(document).ready(function(){
    initValidation("VisitorEntry");
 });
 
function toggleForm(event){
    renderTable()
    $VisitorLog.classList.toggle("none")
    $VisitorBut.classList.toggle("none")
}
 
function submitForm(e) {
    e.preventDefault();
    let order = ["firstName", "lastName" , "street", "city", "state", "zip", "number", "email", "findOptions", "findOptions", "findOptions", "findOptions"]
    let newVisitorInfo = {}

    for(let i in range(12)){
        if(i == 8){
            newVisitorInfo[order[i]] = {}
        }
        if(i > 7){
            newVisitorInfo[order[i]][e.target[i].value] = e.target[i].checked
        } else{
            newVisitorInfo[order[i]] = e.target[i].value
        }
    }

    let newVisitor = new Visitor(getID(), newVisitorInfo)

    modelAddVisitor(newVisitor)
    renderTable()
    toggleFormConts(e)

    //called on form submit. Gets contents of form, creates visitor object, 
    console.log(e)
}
 
 function addVisitor(visitor) {
    //called on 'click' of 'New Visitor' button 
    //calls view 'clearForm' to clear form contents
    //calls view 'showForm'
 }
 
 function deleteVisitor(id) {
    //called on 'click' of 'delete' icon in visitor list 
    //calls model.js modelDeleteVisitor
    //calls view 'renderTable' 
    //calls view 'showTable'
 }