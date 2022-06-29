showNotes();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let noteS = localStorage.getItem("notes");
    if (noteS == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(noteS);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    console.log(notesobj);
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html +=
            `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)" style="background-color:red;" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let notesElem = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesElem.innerHTML = html;
    }
    else {

        notesElem.innerHTML = "Enter Some Notes";
    }
}

function deleteNote(index) {
    let k = window.confirm("Confirm");
    if (k == true) {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesobj = [];
        }
        else {
            notesobj = JSON.parse(notes);
        }
        notesobj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notesobj));
        showNotes();
    }
}
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    let inputval = search.value;
    console.log("fire event ", inputval);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
});


