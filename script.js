//popup form for adding new notes
const addBox = document.querySelector(".add-box");
popupBox = document.querySelector(".popup-box");
closeIcon = popupBox.querySelector("header i");
titleTag = popupBox.querySelector("input");
descTag = popupBox.querySelector("textarea");
addBtn = popupBox.querySelector(".button");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//getting localStorage notes if exist and parsing them
//to js object else parsing an empty array to notes
const notes = JSON.parse(localStorage.getItem("notes") || "[]");

//form will popup when clicked on the + sign by adding show
addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});

//closing the form with x icon on form by removing show
closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});

function showNotes(){
    notes.forEach((note) => {
        let liTag = `<li class="note">
                        <div class="details">
                            <p>${note.title}</p>
                            <span>${filterDesc}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${note.date}</span>
                            <div class="settings">
                                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="menu">
                                    <li onclick="updateNote(${id}, '${note.title}', '${filterDesc}')"><i class="uil uil-pen"></i>Edit</li>
                                    <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>Delete</li>
                                </ul>
                            </div>
                        </div>
                    </li>`
        addBox.insertAdjacentHTML("afterend", liTag);
    }); //DOM element 
}
showNotes();

//calling the button to printout the new note
addBtn.addEventListener("click", e => {
    e.preventDefault();
    let title = titleTag.value.trim(),
    description = descTag.value.trim();
    if(title || description) {
        let currentDate = new Date(),
        month = months[currentDate.getMonth()],
        day = currentDate.getDate(),
        year = currentDate.getFullYear();
        let noteInfo = {title, description, date: `${month} ${day}, ${year}`}
        if(!isUpdate) {
            notes.push(noteInfo);
        } else {
            isUpdate = false;
            notes[updateId] = noteInfo;
        }
        localStorage.setItem("notes", JSON.stringify(notes));
        showNotes();
        closeIcon.click();
    }
});



