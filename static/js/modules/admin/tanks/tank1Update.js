// import { httpAddress, httpPort } from "../../config.js";
import { ACTIONS, reducer } from "../../../localStorageReducer.js";

const prodType = document.getElementsByClassName("prod-type");
const seqVal = document.getElementsByClassName("seq-val");
const stageVal = document.getElementsByClassName("stage-val");
const checkedStageVal = stageVal.checked;
//select=true.value
const volVal = document.getElementsByClassName("vol-val");
const canVal = document.getElementsByClassName("can-val");

const note1Val = document.getElementsByClassName("note-1-val");
const note2Val = document.getElementsByClassName("note-2-val");
const theVVal = document.getElementsByClassName("note-3-val");

//? [x] tank 1 update form
async function submitForm1(e) {
  e.preventDefault();
  try {
    const stageRadios = document.querySelectorAll(".tank1-stage-val");
    let selectedValue;
    for (const radio of stageRadios) {
      if (radio.checked) {
        selectedValue = radio.value;
        break;
      }
    }

    const body = {
      tank_id: 1,
      dom_target: "tank-1",
      tank_num: 1,
      product_type: `${prodType[0].value}`,
      run_sequence: `${seqVal[0].value}`,
      stage: `${selectedValue}`,
      volume: +`${volVal[0].value}`,
      cans: +`${canVal[0].value}`,
      note_1: `${note1Val[0].value}`,
      note_2: `${note2Val[0].value}`,
      the_v: `${theVVal[0].value}`
    };

    // ************************** Local Storage Reducer Function
    const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));

    reducer(jsonDb, { type: ACTIONS.UPDATE_TANK, payload: body });
    // ******************************************

    // const response = await fetch(`${httpAddress}:${httpPort}/tanks/1`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body),
    // });
    // if (response.ok) {
    //   const updateBtn = document.querySelector(".tank-1-update-btn");
    //   updateBtn.disabled = true;
    // } else {
    //   alert("try to update tank 1 again");
    // }
  } catch (err) {
    console.error(err.message);
  }
}

export default submitForm1;
