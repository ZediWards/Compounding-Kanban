// import jsonDb from "../../jsonDb.js"

// [x] displaying data form db
async function noteGetList(e) {
  // ************** USING LOCAL STORAGE **************************
  const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
  // ************************************************************
  const noteBodyId = document.getElementById("kanban-notes");

  try {
    // represents notes table in Compounding database
    console.table(jsonDb.note);

    // hmm seems like the text field follows the regex "/n" line break which is in the database string. Still don't know if it is the CSS wrap:hard which is making the "/n"?
    const jsonDbNotes = jsonDb.note.map((note) => {
      return note.note;
    });

    noteBodyId.value = `${jsonDbNotes}`;
  } catch (err) {
    console.error(err.message);
  }
}
export default noteGetList;
