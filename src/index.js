import * as $ from "jquery";
import { signUserUp, signUserOut, signUserIn } from "./model";

function initListeners() {
  $("#submit").on("click", () => {
    let firstName = $("#fName").val();
    let lastName = $("#lName").val();
    let email = $("#email").val();
    let password = $("#password").val();
    signUserUp(firstName, lastName, email, password);
  });

  $("#so").on("click", () => {
    signUserOut();
  });

  $("#siSubmit").on("click", () => {
    let siEmail = $("#siEmail").val();
    let siPassword = $("#siPassword").val();
    signUserIn(siEmail, siPassword);
  });
}

$(document).ready(function () {
  initListeners();
});
