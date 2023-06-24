import { httpAddress, httpPort } from "../config.js";

const test2 = async () => {
  try {
    const response = await fetch(`${httpAddress}:${httpPort}/note`);
    const jsonData = await response.json();
    const note = jsonData.map((note) => {
      let noteParent = document.querySelector(".notes");

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
    });
  } catch (err) {
    console.error(err.message);
  }
};

export default test2;
