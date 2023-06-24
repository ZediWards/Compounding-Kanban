// Imports
import l1AppGetList from "./modules/admin/lines/line1List.js";
import addNewRunForm1 from "./modules/admin/lines/addNewRunLine1.js";
import l2AppGetList from "./modules/admin/lines/line2List.js";
import addNewRunForm2 from "./modules/admin/lines/addNewRunLine2.js";
import noteGetList from "./modules/admin/note/notePop.js";
import submitNote from "./modules/admin/note/noteSubmit.js";

import {
  l2SecondShiftPop,
  l1SecondShiftPop,
} from "./modules/admin/secondShift/second-shift-pop.js";

//EVENT LISTENERS

// Line 1 app.get and list menu btn
const l1AppGetListBtn = document.getElementById("Line1-get-and-list");
l1AppGetListBtn.addEventListener("click", () => {
  l1AppGetList();
  l1SecondShiftPop();
});

// Line 2 app.get and list menu btn
const l2AppGetListBtn = document.getElementById("Line2-get-and-list");
l2AppGetListBtn.addEventListener("click", () => {
  l2AppGetList();
  l2SecondShiftPop();
});

// Line 1 Add new button
const l1AddBtn = document.getElementById("add-new-run-1");
l1AddBtn.addEventListener("click", addNewRunForm1);

// Line 2 Add new button
const l2AddBtn = document.getElementById("add-new-run-2");
l2AddBtn.addEventListener("click", addNewRunForm2);

// note app.get and list menu btn
const noteGetListBtn = document.getElementById("note-get-and-list");
noteGetListBtn.addEventListener("click", noteGetList);

// on input update btn enabled
const kanbanNotes = document.querySelector(".kanban-notes-form");
kanbanNotes.addEventListener("input", updateChange);

function updateChange(e) {
  kanbanUpdateBtn.disabled = false;
}

// submit note event
const kanbanUpdateBtn = document.querySelector(".kanban-note-update");
kanbanUpdateBtn.addEventListener("click", submitNote);

// on input fragrance, border color change 
// const fragranceInput = document.querySelector(".");
// kanbanNotes.addEventListener("input", updateChange);