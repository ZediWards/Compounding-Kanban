// try this method to be able to get a transition.
// display properties are not able to have transistions.
// https://www.impressivewebs.com/animate-display-block-none/

function addListeners() {
  let toolTipBtn = document.querySelectorAll(".sequence-card-container");
  toolTipBtn.forEach((item) => {
    item.addEventListener("mouseover", showToolTip);
    item.addEventListener("click", toggleList);
  });
}

function addListenerOut() {
  let toolTipBtn = document.querySelectorAll(".sequence-card-container");
  toolTipBtn.forEach((item) => {
    item.addEventListener("mouseout", hideToolTip);
  });
}

function showToolTip(e) {
  // e.stopPropagation();
  this.children[0].style.display = "none";
  this.children[1].style.display = "block";
  this.children[1].style.transition = "2.0s all ease-in-out";
  this.children[1].style.opacity = "1.0";
  // setTimeout(() => {
  //     this.children[0].style.display = "none";
  //     this.children[1].style.display = "block";
  //   }, 500);
}

function hideToolTip(e) {
  // e.stopPropagation();
  this.children[0].style.display = "flex";
  this.children[1].style.display = "none";
}

function toggleList(e) {
  const sequenceCard = this.querySelector(".sequence-card");
  const modalTooltip = this.querySelector(".modal-tooltip");
  if (sequenceCard.style.display === "none") {
    sequenceCard.style.display = "";
    modalTooltip.style.display = "none";
    modalTooltip.style.transition = "2.0s all ease-in-out";
    modalTooltip.style.opacity = "0";
  } else if (sequenceCard.style.display === "") {
    sequenceCard.style.display = "none";
    modalTooltip.style.display = "block";
    modalTooltip.style.transition = "2.0s all ease-in-out";
    modalTooltip.style.opacity = "1.0";
  }
}

//  hide tooltip
// const modalToolTip = document.querySelectorAll(".sequence-card-container");

// modalToolTip.forEach(item => {
//     item.addEventListener("mouseout", hideToolTip);
// })

function test() {}
export { addListeners, addListenerOut, showToolTip, hideToolTip };
