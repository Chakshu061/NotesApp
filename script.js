//popup form for adding new notes
const addBox = document.querySelector(".add-box");
popupBox = document.querySelector(".popup-box");
closeIcon = popupBox.querySelector("header i");
titleTag = popupBox.querySelector("input");
descTag = popupBox.querySelector("textarea");
addBtn = popupBox.querySelector(".button");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//form will popup when clicked on the + sign by adding show
addBox.addEventListener("click", () => {
    popupBox.classList.add("show");
});

//closing the form with x icon on form by removing show
closeIcon.addEventListener("click", () => {
    popupBox.classList.remove("show");
});

//calling the button to printout the new note
addBtn.addEventListener("click", () => {
    e.preventDefault();
    let noteTitle = titleTag.value;
    noteDesc = descTag.value;

    if(noteTitle || noteDesc){
       let dateObj = new Date();
       month = months[dateObj.getMonth()];
       day = dateObj.getDate();
       year = dateObj.getFullYear();

       let noteInfo = {
         title: noteTitle, description: noteDesc, 
         date: '${month} ${day}, ${year}'
       }
       console.log(dateObj);
    }

    console.log("Button clicked");
});



