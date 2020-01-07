import template from "./imagery.html";
import controller from "./imagery.controller";
import "./imagery.scss";

let ImageryComponent = {
  restrict: "E",
  bindings: {
    allStepsComplete: "=?",
    physicalComplete: "=?",
    goSummary: "=?",
    showToolsDialog: "=?"
  },
  template,
  controller
};

export default ImageryComponent;
