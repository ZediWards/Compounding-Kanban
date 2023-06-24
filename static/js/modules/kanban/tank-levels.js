// import getStuff from "./getTanks.js";

// // ************** USING LOCAL STORAGE **************************
// const jsonDb = JSON.parse(window.localStorage.getItem("jsonDb"));
// // ************************************************************

const showTankModal = function () {
  // ---------------------------------------------------------
  //show modal click
  const modalBtns = document.querySelectorAll(".modal-btn");
  modalBtns.forEach((item) => {
    item.addEventListener("click", showModal);
  });

  function showModal(e) {
    e.target.nextElementSibling.style.display = "block";
  }

  // ------------------------------------------------------

  // close modal click
  const closeBtn = document.querySelectorAll(".close-btn");
  closeBtn.forEach((closeBtn) => {
    closeBtn.addEventListener("click", closeModal);
  });

  function closeModal(e) {
    e.target.parentElement.parentElement.parentElement.style.display = "none";
  }

  // ---------------------------------------------------------

  // window click close modal
  const modal = document.querySelectorAll(".modal");

  window.onclick = function (e) {
    modal.forEach((modal) => {
      e.stopPropagation();
      if (e.target == modal) {
        modal.style.display = "none";
      }
    });
  };

  // ----------------------------------------------------------------

  // Tank Modal functions
  // const tankParams = {
  //   tank1: {
  //     bottomProp: 600,
  //     max: 3000
  //   },
  //   tank2: {
  //     bottomProp: 450,
  //     max: 4000
  //   },
  //   tank3: {
  //     bottomProp: 800,
  //     max: 4000
  //   },
  //   tank4: {
  //     bottomProp: 350,
  //     max: 2500
  //   },
  //   tank5: {
  //     bottomProp: 410,
  //     max: 3500
  //   },
  //   tank6: {
  //     bottomProp: 410,
  //     max: 3500
  //   }
  // };

  // event listeners
  const modalForm = document.querySelectorAll(".tank-modal-form");
  modalForm.forEach((form) => {
    form.addEventListener("change", modalChange);
    // form.addEventListener("submit", updateModal);
  }); //thisArg

  function modalChange(e) {
    this.lastElementChild.disabled = false;
    // !!!!!! lack of svg as sibling is causeing error !!!!!!!!
  }

  //  export function updateModal(e) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     // ************** USING LOCAL STORAGE **************************
  //     const jsonDb = JSON.parse(window.localStorage.getItem("jsonDb"));
  //     // ************************************************************
  //     // Grab dom elements in relationship to **this** not class or id selectors
  //     // This way function will work with all forms that are structured the same way
  //     // SVG Variables
  //     // Aaha
  //     const svg = this.parentElement.previousElementSibling;
  //     const propNumberSvg = svg.querySelector(".prop-number");

  //     // input values
  //     let inputCanSize = this.querySelector(".can-size-input").value;
  //     let canCoderInput = this.querySelector(".can-coder-input").value;

  //     // Tank V
  //     const tankV = 100;

  //     // batch size
  //     let batchGallons = 4000;

  //     // tank param
  //     function getTankParams(tankNum) {
  //       jsonDb.tankParams.forEach((tankObj) => {
  //         if (Object.values(tankObj).indexOf(tankNum) > -1) {
  //           return tankObj
  //           // console.log(tank, bottomProp, max, tankV);
  //           // return tank;
  //         } else {
  //           console.log("DIDN'T FIND TANK");
  //         }
  //       });
  //     }
  //     const getTankMax = () => {
  //       switch (
  //         this.parentElement.parentElement.previousElementSibling.children[0]
  //           .textContent
  //       ) {
  //         case "tank-1":
  //           return getTankParams("tank 1");
  //           break;
  //         case "tank-2":
  //           return getTankParams("tank 2");
  //           break;
  //         case "tank-3":
  //           return getTankParams("tank 3");
  //           break;
  //         case "tank-4":
  //           return getTankParams("tank 4");
  //           break;
  //         case "tank-5":
  //           return getTankParams("tank 5");
  //           break;
  //         case "tank-6":
  //           return getTankParams("tank 6");
  //           break;
  //         default:
  //           break;
  //       }
  //     };
  //     const { tank, bottomProp, max, tankV } = tankObj;
  //     console.log(tank);
  //     // tank max
  //     let tankMax = getTankMax();
  //     console.log(tankMax);

  //     // Bottom Prop
  //     const getTankBottomProp = () => {
  //       switch (
  //         this.parentElement.parentElement.previousElementSibling.children[0]
  //           .textContent
  //       ) {
  //         case "tank-1":
  //           return tankParams.tank1.bottomProp;
  //           break;
  //         case "tank-2":
  //           return tankParams.tank2.bottomProp;
  //           break;
  //         case "tank-3":
  //           return tankParams.tank3.bottomProp;
  //           break;
  //         case "tank-4":
  //           return tankParams.tank4.bottomProp;
  //           break;
  //         case "tank-5":
  //           console.log("Tank 5");
  //           return tankParams.tank5.bottomProp;
  //           break;
  //         case "tank-6":
  //           return tankParams.tank6.bottomProp;
  //           break;
  //         default:
  //           break;
  //       }
  //     };
  //     let tankBottomPropGallons = getTankBottomProp();

  //     // Cans sizes, cph
  //     let canSizes = {
  //       2: {
  //         cpg: 57,
  //         cph: 8500
  //       },
  //       2.25: {
  //         cpg: 55,
  //         cph: 11100
  //       },
  //       2.85: {
  //         cpg: 44,
  //         cph: 8500
  //       },
  //       5: {
  //         cpg: 25.25,
  //         cph: 11100
  //       },
  //       6: {
  //         cpg: 21.35,
  //         cph: 11100
  //       },
  //       7: {
  //         cpg: 18.3,
  //         cph: 11100
  //       },
  //       7.25: {
  //         cpg: 17.25,
  //         cph: 11100
  //       },
  //       8: {
  //         cpg: 16,
  //         cph: 11100
  //       },
  //       8.75: {
  //         cpg: 14.4,
  //         cph: 11100
  //       },
  //       9.5: {
  //         cpg: 13.35,
  //         cph: 11100
  //       },
  //       10: {
  //         cpg: 13.4,
  //         cph: 11100
  //       },
  //       10.5: {
  //         cpg: 11.6,
  //         cph: 11100
  //       },
  //       10.88: {
  //         cpg: 12,
  //         cph: 11100
  //       },
  //       11: {
  //         cpg: 12.25,
  //         cph: 11100
  //       }
  //     };

  //     // Lesson: Object.entries returns key:value pairs as an array [0] is key, [1] is value
  //     // getting cpg of inputed can size
  //     let canMatch = Object.entries(canSizes).find(
  //       (canSize) => canSize[0] === inputCanSize
  //     );
  //     let canMatchCpg = canMatch[1].cpg;
  //     console.log(`cpg: ${canMatchCpg}`);

  //     // Set Bottom Prop Number with cpg
  //     let cansToSaveAtBottomProp = tankBottomPropGallons * canMatchCpg;
  //     propNumberSvg.textContent = `${cansToSaveAtBottomProp} Cans`;

  //     // Gallons left in tank from can coder count
  //     let canTotalForBatch = batchGallons * canMatchCpg;
  //     let gallonsLeftInTank = (canTotalForBatch - canCoderInput) / canMatchCpg;
  //     console.log(`Gallons left in tank: ${Math.round(gallonsLeftInTank)}`);

  //     // Cans left to run from gallons left in tank
  //     let cansLeftToRun = gallonsLeftInTank * canMatchCpg;
  //     console.log(`Cans left to run: ${cansLeftToRun}`);

  //     // Current time
  //     let currentTime = new Date();
  //     console.log(`Current time: ${currentTime.toLocaleTimeString("en-US")}`);

  //     // Minutes of run time left
  //     let minutesOfRunTimeLeft = (cansLeftToRun / canMatch[1].cph) * 60;
  //     console.log(`Minutes left to run ${minutesOfRunTimeLeft}`);

  //     // ADDING MINUTES TO CURRENT LOCAL TIME
  //     currentTime.setMinutes(currentTime.getMinutes() + minutesOfRunTimeLeft);

  //     // CONVERTS TO 12 HOUR FORMAT AND RETURNS JUST TIME, NO DATE
  //     let local12hrChangeOverTime = currentTime.toLocaleTimeString("en-US", {
  //       hour: "2-digit",
  //       minute: "2-digit"
  //     });
  //     console.log(`Change over time: ${local12hrChangeOverTime}`);

  //     // Inject c/o in DOM
  //     let changeOverDisplay = this.previousElementSibling.querySelector(
  //       ".change-over-time"
  //     );
  //     changeOverDisplay.textContent = local12hrChangeOverTime;

  //     // Inject Last updated time in DOM
  //     let lastUpdatedAt = svg.querySelector(".last-updated");
  //     let updatedDate = new Date().toDateString();
  //     let updatedTime = new Date().toLocaleTimeString("en-US", {
  //       hour: "2-digit",
  //       minute: "2-digit"
  //     });
  //     lastUpdatedAt.textContent = `Last updated: ${updatedDate} @ ${updatedTime}`;

  //     // ******* Adjust column gradient based on gallons left in tank ******
  //     let gallonsinColumn = gallonsLeftInTank - tankV;
  //     console.log(`gall - v = ${gallonsinColumn}`);
  //     let columnMax = tankMax - tankV;
  //     let columnStopPercent = Math.round((gallonsinColumn / columnMax) * 100);

  //     console.log(svg);

  //     console.log(`Updated column stop % ${columnStopPercent}`);
  //     let gradient1Svg = svg.firstElementChild.firstElementChild;
  //     console.log(gradient1Svg);

  //     let gradient1SvgStop1 = gradient1Svg.children[0].attributes[1];
  //     let gradient1SvgStop2 = gradient1Svg.children[1].attributes[1];
  //     let gradient1SvgStop3 = gradient1Svg.children[2].attributes[1];

  //     console.log(gradient1SvgStop1, gradient1SvgStop2, gradient1SvgStop3);

  //     gradient1SvgStop2.value = `${columnStopPercent}%`;
  //     gradient1SvgStop3.value = `${columnStopPercent}%`;

  //     console.log(gradient1SvgStop1, gradient1SvgStop2, gradient1SvgStop3);

  //     const modalUpdateBtn = this.querySelector(".modal-update-btn");
  //     modalUpdateBtn.disabled = true;
  //   }

  // tank 5&6 cir.23'13/4"
};

function updateModal(e, tankNum) {
  e.preventDefault();
  e.stopPropagation();
  // ************** USING LOCAL STORAGE **************************
  const jsonDb = JSON.parse(window.localStorage.getItem("jsonDb"));

  // getting and destructuring tank data from tankParams
  function tankObj(tankNum) {
    return jsonDb.tankParams.filter((tankObj) => {
      return tankObj.tank === tankNum;
    });
  }

  const result = tankObj(tankNum)[0];
  const { tank, bottomProp, max, tankV } = result;

  // ************************************************************
  // Grab dom elements in relationship to **this** not class or id selectors
  // This way function will work with all forms that are structured the same way
  // SVG Variables
  // Aaha

  const svg = e.target.parentElement.parentElement.querySelector("svg");
  const propNumberSvg = svg.querySelector(".prop-number");

  // input values
  let inputCanSize = e.target.querySelector(".can-size-input").value;
  let canCoderInput = e.target.querySelector(".can-coder-input").value;

  // getting and destructuring batch size data from tanks array
  function batchObj(tankNum) {
    return jsonDb.tanks.filter((tank) => {
      return tank.dom_target === tankNum;
    });
  }

  const batchResult = batchObj(tankNum)[0];
  const { volume, cans } = batchResult;

  // Cans sizes, cph
  // let canSizes = {
  //   2: {
  //     cpg: 57,
  //     cph: 8500,
  //   },
  //   2.25: {
  //     cpg: 55,
  //     cph: 11100,
  //   },
  //   2.85: {
  //     cpg: 44,
  //     cph: 8500,
  //   },
  //   5: {
  //     cpg: 25.25,
  //     cph: 11100,
  //   },
  //   6: {
  //     cpg: 21.35,
  //     cph: 11100,
  //   },
  //   7: {
  //     cpg: 18.3,
  //     cph: 11100,
  //   },
  //   7.25: {
  //     cpg: 17.25,
  //     cph: 11100,
  //   },
  //   8: {
  //     cpg: 16,
  //     cph: 11100,
  //   },
  //   8.75: {
  //     cpg: 14.4,
  //     cph: 11100,
  //   },
  //   9.5: {
  //     cpg: 13.35,
  //     cph: 11100,
  //   },
  //   10: {
  //     cpg: 13.4,
  //     cph: 11100,
  //   },
  //   10.5: {
  //     cpg: 11.6,
  //     cph: 11100,
  //   },
  //   10.88: {
  //     cpg: 12,
  //     cph: 11100,
  //   },
  //   11: {
  //     cpg: 12.25,
  //     cph: 11100,
  //   },
  // };

  // Lesson: Object.entries returns key:value pairs as an array [0] is key, [1] is value
  // getting cpg of inputed can size
  // let canMatch = Object.entries(canSizes).find(
  //   (canSize) => canSize[0] === inputCanSize
  // );

  // getting and destructuring canData
  // lesson: needed + operator to convert input from string to number
  function canDataObj(inputCanSize) {
    return jsonDb.canData.filter((canData) => {
      return canData.size === +inputCanSize;
    });
  }

  const canDataResults = canDataObj(inputCanSize)[0];
  const { size, cpg, cph } = canDataResults;

  // Set Bottom Prop Number with cpg
  let cansToSaveAtBottomProp = bottomProp * cpg;
  propNumberSvg.textContent = `${cansToSaveAtBottomProp} Cans`;

  // Gallons left in tank from can coder count
  let canTotalForBatch = volume * cpg;
  let gallonsLeftInTank = (canTotalForBatch - canCoderInput) / cpg;

  // Cans left to run from gallons left in tank
  let cansLeftToRun = gallonsLeftInTank * cpg;

  // Current time
  let currentTime = new Date();

  // Minutes of run time left
  let minutesOfRunTimeLeft = (cansLeftToRun / cph) * 60;

  // ADDING MINUTES TO CURRENT LOCAL TIME
  currentTime.setMinutes(currentTime.getMinutes() + minutesOfRunTimeLeft);

  // CONVERTS TO 12 HOUR FORMAT AND RETURNS JUST TIME, NO DATE
  let local12hrChangeOverTime = currentTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });

  // Inject c/o in DOM
  let changeOverDisplay = e.target.previousElementSibling.querySelector(
    ".change-over-time"
  );
  changeOverDisplay.textContent = local12hrChangeOverTime;

  // Inject Last updated time in DOM
  let lastUpdatedAt = svg.querySelector(".last-updated");
  let updatedDate = new Date().toDateString();
  let updatedTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });
  lastUpdatedAt.textContent = `Last updated: ${updatedDate} @ ${updatedTime}`;

  // ******* Adjust column gradient based on gallons left in tank ******
  let gallonsinColumn = gallonsLeftInTank - tankV;
  let columnMax = max - tankV;
  let columnStopPercent = Math.round((gallonsinColumn / columnMax) * 100);

  let gradient1Svg = svg.firstElementChild.firstElementChild;

  let gradient1SvgStop1 = gradient1Svg.children[0].attributes[1];
  let gradient1SvgStop2 = gradient1Svg.children[1].attributes[1];
  let gradient1SvgStop3 = gradient1Svg.children[2].attributes[1];

  gradient1SvgStop2.value = `${columnStopPercent}%`;
  gradient1SvgStop3.value = `${columnStopPercent}%`;

  const modalUpdateBtn = e.target.querySelector(".modal-update-btn");
  modalUpdateBtn.disabled = true;
}

export { showTankModal, updateModal };
