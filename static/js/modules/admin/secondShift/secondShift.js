// (test)import { httpAddress, httpPort } from "../../config.js";
import { ACTIONS, reducer } from "../../../localStorageReducer.js";

// 2nd Shift Radio and Input
const l2SecondShift = document.getElementById("Line2-schedule");
const l1SecondShift = document.getElementById("Line1-schedule");
const l2SecondShiftDates = document.querySelector(
  "[name = Line2-2nd-shift-date]"
);
const l1SecondShiftDates = document.querySelector(
  "[name = Line1-2nd-shift-date]"
);
const l2ShiftSaveBtn = document.getElementById("Line-2-2nd-shift-save");
const l1ShiftSaveBtn = document.getElementById("Line-1-2nd-shift-save");
l2ShiftSaveBtn.addEventListener("click", save2ndShiftInfo);
l1ShiftSaveBtn.addEventListener("click", save2ndShiftInfo);

//! (not working) update line 2 and delete line 1 dates
async function save2ndShiftInfo(e) {
  e.stopImmediatePropagation();
  e.preventDefault();

  // Lesson: click event to rebuild the line 1 runs after item gets updated
  const clickEvent = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: false
  });

  // Items that get click event dispatched to
  const line1MenuItem = document.querySelector("#Line1-get-and-list");
  const line2MenuItem = document.querySelector("#Line2-get-and-list");

  try {
    const body = {
      line_1_date_range: `${l1SecondShiftDates.value}`,
      line_2_date_range: `${l2SecondShiftDates.value}`
    };

    // ************************** Local Storage Reducer Function
    const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
    reducer(jsonDb, { type: ACTIONS.UPDATE_SECOND_SHIFT, payload: body });

    if (this.id === "Line-2-2nd-shift-save") {
      l2ShiftSaveBtn.disabled = true;
      line2MenuItem.dispatchEvent(clickEvent);
    } else if (this.id === "Line-1-2nd-shift-save") {
      l1ShiftSaveBtn.disabled = true;
      line1MenuItem.dispatchEvent(clickEvent);
    }

    // ******************************************
    // const response = await fetch(
    //   `${httpAddress}:${httpPort}/second-shift/Line-2`,
    //   {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(body),
    //   }
    // );
    // if (response.ok) {
    //   const l2ShiftSaveBtn = document.getElementById("Line-2-2nd-shift-save");
    //   l2ShiftSaveBtn.disabled = true;
    // } else {
    //   alert("try to update 2nd. shift date again");
    // }
  } catch (err) {
    console.error(err.message);
  }

  // const response = await fetch(
  //   `${httpAddress}:${httpPort}/second-shift/Line-1`,
  //   {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(body),
  //   }
  // );
  // if (response.ok) {
  //   const l1ShiftSaveBtn = document.getElementById("Line-1-2nd-shift-save");
  //   l1ShiftSaveBtn.disabled = true;
  // } else {
  //   alert("try to update 2nd. shift date again");
  // }
}

// used input event instead of change b/c save btn starts as disabled
l2SecondShiftDates.addEventListener("input", enableSubmitBtn);
l1SecondShiftDates.addEventListener("input", enableSubmitBtn);
function enableSubmitBtn(e) {
  if (e.target.id === "2nd-shift-date-line2") {
    l2ShiftSaveBtn.disabled = false;
  } else if (e.target.id === "2nd-shift-date-line1") {
    l1ShiftSaveBtn.disabled = false;
  }
}

// const input = document.querySelector("input");
// const log = document.getElementById("log");

// input.addEventListener("change", updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }

// radio btn
// l2SecondShift.addEventListener("click", enable2ndShiftL2DateInput);
// function enable2ndShiftL2DateInput(e) {
//   e.stopImmediatePropagation();
//   if (l2SecondShift.value) {
//     l2SecondShiftDates.disabled = false;
//     l2ShiftSaveBtn.disabled = false;
//     l1ShiftSaveBtn.disabled = true;
//     l1SecondShiftDates.disabled = true;
//     // l1SecondShiftDates.value = "";     //commenting out to be able to save notes for both lines at same time
//     // app.delete(./2nd-shift:l1)
//   } else {
//     return;
//   }
// }
// // save btn app.add(./2nd-shift-l2)

// l1SecondShift.addEventListener("click", enable2ndShiftL1DateInput);
// function enable2ndShiftL1DateInput(e) {
//   e.stopImmediatePropagation();
//   if (l1SecondShift.value) {
//     l1SecondShiftDates.disabled = false;
//     l1ShiftSaveBtn.disabled = false;
//     l2ShiftSaveBtn.disabled = true;
//     l2SecondShiftDates.disabled = true;
//     // l2SecondShiftDates.value = "";         //commenting out to be able to save notes for both lines at same time
//     // app.delete(./2nd-shift:l2)
//   } else {
//     return;
//   }
// }
// save btn app.add(./2nd-shift-l1)
