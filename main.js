const lScreen = document.querySelector(".lockscreen"),
  signIn = document.querySelector(".sign-in"),
  dateClock = document.querySelector(".clock");
window.addEventListener("load", () => {
  setTimeout(function () {
    lScreen.classList.remove("inactive-zoomOut");
  }, 1000);

  lScreen.addEventListener("click", () => {
    signIn.classList.remove("off");
    setTimeout(() => {
      signIn.classList.remove("inactive");
    }, 100);
    dateClock.classList.add("inactive");
    dateClock.style.transform = "translateY(-5px)";
  });
});

$("#Ex40cKlZ").keyup(function (event) {
  let inputSignin = $("#Ex40cKlZ").val();
  if (event.keyCode === 13 && inputSignin == "YNTKTS") {
    $(".form-ct").css("display", "none");
    $(".welcome-ct").css({
      height: "10px",
      display: "flex",
    });
    let delayLogin = Math.random() * 10000;
    console.log(delayLogin)
    setTimeout(() => {
        // $(".desktop-app").addClass("active");
        $(".desktop-app").removeClass("inactive");
    }, delayLogin)
    $(".sign-in-name").css("margin-bottom", "20px");
    $(".desktop-app").removeClass("off");
    $(".desktop-app").addClass("active");
  }
});
