// let list = $('#list');
// let li = $('<li></li>')
// list.append(li);


function newItem(){
    let li = document.createElement("li");
    let inputValue = document.getElementById("input").value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
}
