function NewTodo(){
    var listItem = document.createElement("li");
    var inputField = document.getElementById("myInput").value;
    var tNode = document.createTextNode(inputField);


    listItem.appendChild(tNode);


    document.getElementById("myUL").appendChild(listItem);




}