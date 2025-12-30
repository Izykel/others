let Beans = [
  "healthyBeans",
  "chaff",
  "stone",
  "defectedBeans",
  "healthyHalfBeans",
];
function beansSelector(Beans) {
  for (let content of Beans) {
    switch (content) {
      case "healthyBeans":
        console.log("GOOD");
        break;

      case "chaff":
        console.log("BAD");
        break;

      case "stone":
        console.log("BAD");
        break;

      case "defectedBeans":
        console.log("BAD");
        break;

      case "healthyHalfBeans":
        console.log("GOOD");
        break;

      //for rice,corn,millet,etc. that mix with beans
      default:
        console.log("Unknown");
        break;
    }
  }
}
beansSelector(Beans);
