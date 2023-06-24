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

//? [x] tank 2 db populate form
async function tank2FormPop(e) {
  // ************** USING LOCAL STORAGE **************************
  const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
  // ************************************************************
  try {
    // represents tank 2 row in Compounding database, tanks table
    console.table(jsonDb.tanks[1]);

    const jsonDbTank2 = jsonDb.tanks[1];

    const stageRadios = document.querySelectorAll(".tank2-stage-val");
    let selectedValue;
    for (const radio of stageRadios) {
      if (radio.value === `${jsonDbTank2.stage}`) {
        radio.checked = true;
        selectedValue = `${jsonDbTank2.stage}`;
        break;
      }
    }

    prodType[1].value = `${jsonDbTank2.product_type}`;
    seqVal[1].value = `${jsonDbTank2.run_sequence}`;
    selectedValue = `${jsonDbTank2.stage}`;
    volVal[1].value = `${jsonDbTank2.volume}`;
    canVal[1].value = `${jsonDbTank2.cans}`;
    note1Val[1].value = `${jsonDbTank2.note_1}`;
    note2Val[1].value = `${jsonDbTank2.note_2}`;
    theVVal[1].value = `${jsonDbTank2.the_v}`;
  } catch (err) {
    console.error(err.message);
  }
}

export default tank2FormPop;
