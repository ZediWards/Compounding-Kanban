// import jsonDb from "../../jsonDb.js"

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

//? [x] tank 3 db populate form
async function tank3FormPop(e) {
  // ************** USING LOCAL STORAGE **************************
  const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
  // ************************************************************
  try {
    // represents tank 3 row in Compounding database, tanks table
    console.table(jsonDb.tanks[2]);

    const jsonDbTank3 = jsonDb.tanks[2];

    const stageRadios = document.querySelectorAll(".tank3-stage-val");
    let selectedValue;
    for (const radio of stageRadios) {
      if (radio.value === `${jsonDbTank3.stage}`) {
        radio.checked = true;
        selectedValue = `${jsonDbTank3.stage}`;
        break;
      }
    }

    prodType[2].value = `${jsonDbTank3.product_type}`;
    seqVal[2].value = `${jsonDbTank3.run_sequence}`;
    selectedValue = `${jsonDbTank3.stage}`;
    volVal[2].value = `${jsonDbTank3.volume}`;
    canVal[2].value = `${jsonDbTank3.cans}`;
    note1Val[2].value = `${jsonDbTank3.note_1}`;
    note2Val[2].value = `${jsonDbTank3.note_2}`;
    theVVal[2].value = `${jsonDbTank3.the_v}`;
  } catch (err) {
    console.error(err.message);
  }
}

export default tank3FormPop;
