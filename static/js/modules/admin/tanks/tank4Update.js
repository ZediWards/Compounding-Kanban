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

//? [x] tank 4 update form
async function submitForm4(e) {
  e.preventDefault();
  try {
    const stageRadios = document.querySelectorAll(".tank4-stage-val");
    let selectedValue;
    for (const radio of stageRadios) {
      if (radio.checked) {
        selectedValue = radio.value;
        break;
      }
    }

    const body = {
      tank_id: 4,
      dom_target: "tank-4",
      tank_num: 4,
      product_type: `${prodType[3].value}`,
      run_sequence: `${seqVal[3].value}`,
      stage: `${selectedValue}`,
      volume: +`${volVal[3].value}`,
      cans: +`${canVal[3].value}`,
      note_1: `${note1Val[3].value}`,
      note_2: `${note2Val[3].value}`,
      the_v: `${theVVal[3].value}`
    };

    // ************************** Local Storage Reducer Function
    const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));

    reducer(jsonDb, { type: ACTIONS.UPDATE_TANK, payload: body });
    // ******************************************

    // const response = await fetch(`${httpAddress}:${httpPort}/tanks/4`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(body),
    // });
    // if (response.ok) {
    //   const updateBtn = document.querySelector(".tank-4-update-btn");
    //   updateBtn.disabled = true;
    // } else {
    //   alert("try to update tank 4 again");
    // }
  } catch (err) {
    console.error(err.message);
  }
}

export default submitForm4;
