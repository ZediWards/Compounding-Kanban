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

//? [x] tank 4 db populate form
async function tank4FormPop(e) {
  // ************** USING LOCAL STORAGE **************************
  const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
  // ************************************************************
  try {
    // represents tank 1 row in Compounding database, tanks table
    console.table(jsonDb.tanks[3]);

    const jsonDbTank4 = jsonDb.tanks[3];

    const stageRadios = document.querySelectorAll(".tank4-stage-val");
    let selectedValue;
    for (const radio of stageRadios) {
      if (radio.value === `${jsonDbTank4.stage}`) {
        radio.checked = true;
        selectedValue = `${jsonDbTank4.stage}`;
        break;
      }
    }

    prodType[3].value = `${jsonDbTank4.product_type}`;
    seqVal[3].value = `${jsonDbTank4.run_sequence}`;
    selectedValue = `${jsonDbTank4.stage}`;
    volVal[3].value = `${jsonDbTank4.volume}`;
    canVal[3].value = `${jsonDbTank4.cans}`;
    note1Val[3].value = `${jsonDbTank4.note_1}`;
    note2Val[3].value = `${jsonDbTank4.note_2}`;
    theVVal[3].value = `${jsonDbTank4.the_v}`;
  } catch (err) {
    console.error(err.message);
  }
}

export default tank4FormPop;
