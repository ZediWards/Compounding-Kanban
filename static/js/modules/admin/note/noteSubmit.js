// import { httpAddress, httpPort } from "../../config.js";
import { ACTIONS, reducer } from "../../../localStorageReducer.js";

// [x]note update form to db
async function submitNote(e) {
  e.stopImmediatePropagation();
  e.preventDefault();
  const noteBody = document.getElementsByClassName("note-to-db");

  try {
    const body = {
      note: `${noteBody[0].value}`
    };

    // ************************** Local Storage Reducer Function
    const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
    reducer(jsonDb, { type: ACTIONS.UPDATE_NOTE, payload: body });
    // ******************************************

    // const response = await fetch(`${httpAddress}:${httpPort}/note/1`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body),
    // });
    // if (response.ok) {
    //   const updateBtn = document.querySelector(".kanban-note-update");
    //   updateBtn.disabled = true;
    // } else {
    //   alert("try to update notes again");
    // }
  } catch (err) {
    console.error(err.message);
  }
}

export default submitNote;
