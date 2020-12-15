$LogCont = $("#VisitorLogCont").get(0)
$EntryCont = $("#FormCont").get(0)
$Table = $("#VisitorList")


function renderTable() {
    //renders table from global 'visitors' object array
    let temp = $("#VisitorList tr:nth-of-type(1)").detach()
    $Table.empty();

    $Table.append(temp)
    for(let visitor of visitors){
        let tempList = [visitor.fullName, visitor.fullAddress, visitor.number, visitor.email, "Remove"];

        let row = document.createElement("TR")

        for(let i of tempList){
            let tempCell = document.createElement("TD")
            let text = document.createTextNode(i)
            if(i == "Remove"){
                tempCell.classList.add("remove");
                tempCell.addEventListener("click", function(){modelDeleteVisitor(visitor.id)});
            }
            tempCell.appendChild(text)
            row.appendChild(tempCell)
        }


        console.log(visitor)
        $Table.append(row);
    }
}


function toggleFormConts(event) {
    //shows visitor list and hides form 
    renderTable()
    let temp1 = $(".logCont:hidden")
    let temp2 = $(".logCont:visible")

    temp1.toggleClass("dNone")
    temp2.toggleClass("dNone")

    $(".formBut").toggleClass("none")

}

function clearForm(e) {
    //clears values on inputs so next time form is loaded they don't have old contents
    e.target.reset()
}