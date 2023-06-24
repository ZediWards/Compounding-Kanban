// import jsonDb from "../jsonDb.js"

const getSecond = async () => {
  // ************** USING LOCAL STORAGE **************************
  const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
  // ************************************************************
  try {
    // represents tanks table in Compounding database
    console.table(jsonDb.secondShift);

    const date_range = jsonDb.secondShift.map((line) => {
      const line2Div = document.querySelector(".l2-second-shift");
      const line2SecondDates = document.querySelector("#l2-second-shift-dates");
      const line1SecondDates = document.querySelector("#l1-second-shift-dates");
      const line1Div = document.querySelector(".l1-second-shift");
      if (line.date_range !== "" && line.line_num === "Line-1") {
        // line2Div.style.visibility = "hidden";                      //commenting out to be able to save notes for both lines at same time
        line1Div.style.visibility = "visible";
        line1SecondDates.innerText = `${line.date_range}`;
      }
      if (line.date_range !== "" && line.line_num === "Line-2") {
        // line1Div.style.visibility = "hidden";                      //commenting out to be able to save notes for both lines at same time
        line2Div.style.visibility = "visible";
        line2SecondDates.innerText = `${line.date_range}`;
      }
    });
  } catch (err) {
    console.error(err.message);
  }
};

export default getSecond;
