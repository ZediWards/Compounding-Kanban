// import jsonDb from "../jsonDb.js"

const getNote = async () => {
  // ************** USING LOCAL STORAGE **************************
  const jsonDb = JSON.parse(localStorage.getItem("jsonDb"));
  // ************************************************************
  try {
    // represents notes table in Compounding database
    console.table(jsonDb.note);

    const note = jsonDb.note.map((note) => {
      let noteParent = document.querySelector(".notes");

      // returns an [] from mapping over original [] and making different [] items after
      const splitNoteString = note.note.split("\n");
      splitNoteString.map((string) => {
        const stringP = document.createElement("p");
        stringP.className = "note-p-from-db";
        stringP.textContent = string;
        noteParent.appendChild(stringP);
        if (string.length < 1) {
          stringP.style.display = "none";
        }
      });

      // const noteP = document.createElement("p");
      // noteP.className = "note-p-from-db";
      // noteP.textContent = `${note.note}`;
      // noteParent.appendChild(noteP);
    });
  } catch (err) {
    console.error(err.message);
  }
};

export default getNote;
