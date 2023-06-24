// passing into the anonomouse function in the eventListener.
// just passing the strait function made the addNew buton fire the funtion when clicked
function changeFragranceBorder(e) {
  // li to apply the border to
  const li = e.target.closest("li");
  switch (e.target.value) {
    // Blank select option
    case "":
      //   add classname to li for border styles
      return (li.className = "sequence-item blank-frag-border");
    // Flavors
    case "Kiwi":
      return (li.className = "sequence-item kiwi-flavor-border");
    case "Citrus":
      return (li.className = "sequence-item citrus-flavor-border");
    case "Blueberry":
      return (li.className = "sequence-item blueberry-flavor-border");
    case "Strawberry":
      return (li.className = "sequence-item strawberry-flavor-border");
    default:
      console.error(`Something went wrong:(`);
  }
}

export default changeFragranceBorder;
