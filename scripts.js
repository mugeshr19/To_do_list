let todocontainer = document.getElementById('listofwork');
let input_box=document.getElementById('input_box') ;
document.getElementById('input_box').addEventListener("keyup",function(e){
    e.preventDefault();
    if(e.keyCode === 13){
        todolist();
    }
})
function todolist(){
    if(input_box.value === ''){
        alert("type something dude!");
    }
    else{
        var paragraph = document.createElement('ul')
        paragraph.innerHTML = `
            <li class="todo-item">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#5f6368"><path d="m288-96-68-68 316-316-316-316 68-68 384 384L288-96Z"/></svg>
                </div>
                <div>${input_box.value}</div>
            </li>
        `;
        paragraph.addEventListener('click',function(){
            paragraph.style.textDecoration = "line-through";
        })
        paragraph.addEventListener('dblclick',function(){
            todocontainer.removeChild(paragraph);
        })
        todocontainer.appendChild(paragraph);
    }input_box.value = "";
    save();
}
function save(){
    localStorage.setItem("data",listofwork.innerHTML);
}
function showwork(){
    listofwork.innerHTML = localStorage.getItem("data");
}
// showwork()
// document.getElementById('addbutton').style.backgroundColor = "blue";


