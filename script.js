let addNoteBtn = document.querySelector(`#addNote`);
showNotes();
addNoteBtn.addEventListener("click", function () {
  let noteBox = document.querySelector(`#note`);

  let notes = localStorage.getItem("notes");
  let noteObj = [];
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }

  noteObj.push(noteBox.value);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  noteBox.value = "";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  let noteObj = [];
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }

  let html = "";
  noteObj.forEach(function (element, index) {
    html += `<div class="noteCard">
						<h4>Note ${index + 1}</h4>
						<p>${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
				</div>`;
  });

  let noteContainer = document.querySelector(`#noteContainer`);
  if (notes != null) {
    noteContainer.innerHTML = html;
  }
}

function deleteNote(id) {
  let notes = localStorage.getItem("notes");
  let noteObj = [];
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }

  let boxId = document.getElementById(`${id}`);
  noteObj.splice(id, 1);
  localStorage.setItem(`notes`, JSON.stringify(noteObj));
  showNotes();
}

//search

let searchTxt = document.querySelector(`#searchTxt`);
searchTxt.addEventListener("input", function () {
  let searchVal = searchTxt.value;
  let noteCards = document.getElementsByClassName("noteCard");

  Array.from(noteCards).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(searchVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

//mark as important function
function MarkAsImp(id) {
  let boxId = document.getElementById(`${id}`);
  boxId.parentElement.style.backgroundColor = "red";
  boxId.parentElement.style.color = "#fff";
}
