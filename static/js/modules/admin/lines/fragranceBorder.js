function fragranceBorder(frag) {
  switch (frag) {
    case "Kiwi": {
      return "kiwi-flavor-border";
    }
    case "Citrus": {
      return "citrus-flavor-border";
    }
    case "Blueberry": {
      return "blueberry-flavor-border";
    }
    case "Strawberry": {
      return "strawberry-flavor-border";
    }
    default:
      throw new Error("no fragrance border");
  }
}

export default fragranceBorder;
