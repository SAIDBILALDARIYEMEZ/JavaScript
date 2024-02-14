let list = document.querySelector("#list")
let task = document.querySelector("#task")
let localArray = []


const cancel = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>`

getLocalStorage()

function newElement() {
    var inputValue = task.value.trim(); // Trim ile baştaki ve sondaki boşlukları kaldır

    if (inputValue !== "") {
        createElement(inputValue);
        setLocalStorage(inputValue);
        task.value = "";
        $(".success").toast('show');
    } else {
        $(".error").toast('show');
    }
}

task.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        newElement();
    }
});
function createElement(value) {
    let liDOM = document.createElement("li")
    let btnDOM = document.createElement("span")
    btnDOM.classList.add("close")
    btnDOM.innerHTML = cancel
    btnDOM.setAttribute("onclick", "deleteElement(this)")
    liDOM.innerHTML = value
    liDOM.setAttribute("onclick", "completeElement(this)")
    liDOM.append(btnDOM)
    list.append(liDOM)
}

function completeElement(link) {
    if (link.className == "checked") {
        link.classList.remove("checked")
        $(".completion-removed").toast('show');
    } else {
        link.classList.add("checked")
        $(".completion").toast('show');
    }

}

function deleteElement(link) {
    link.parentNode.remove()
    setLocalArray()
    let parent = link.parentNode.innerHTML
    let parentSplit = parent.split("<")
    localArray.forEach((rm, index) =>{
        if(rm == parentSplit[0]){
            localArray.splice(index, 1);
        }
    })
    localStorage.setItem("localLi", JSON.stringify(localArray));
}

function setLocalArray() {
    if(localStorage.getItem("localLi") === null){
        localArray = []
    }else{
        localArray = JSON.parse(localStorage.getItem("localLi"))
    }
}

function setLocalStorage(value){
    setLocalArray()
    localArray.push(value)
    localStorage.setItem("localLi", JSON.stringify(localArray))
}

function getLocalStorage () {
    setLocalArray()
    if(localArray){
        localArray.forEach(value =>{
            createElement(value)
        })
    }
}

document.getElementById("completeAllBtn").addEventListener("click", completeAllElements);
document.getElementById("deleteAllBtn").addEventListener("click", deleteAllElements);

function completeAllElements() {
    var allLi = document.querySelectorAll("#list li");

        if (allLi.length > 0) {
            allLi.forEach((elem) => {
            if (elem.className == "checked") {
                elem.classList.remove("checked")
                $(".completion-all-removed").toast('show');
            } else {
                elem.classList.add("checked")
                $(".completion-all").toast('show');
            }
            });
        } else {
            $(".completion-all-none").toast('show');
        }
}

function deleteAllElements() {
    var allLi = document.querySelectorAll("#list li");

    if (allLi.length > 0) {
        allLi.forEach((elem) => {
            elem.remove();
            setLocalArray();
        });
        localStorage.removeItem("localLi");
        $(".delete-all").toast('show');
    } else {
        $(".delete-none").toast('show');
    }
}



/*
function deleteAllElements() {
    var allLi = document.querySelectorAll("#list li");
    allLi.forEach((elem) => {
        elem.remove();
        setLocalArray();
    });
    localStorage.removeItem("localLi");
}
*/


