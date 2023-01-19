function login() {
  const firstNm = document.getElementById("firstNm").value;
  const lastNm = document.getElementById("lastNm").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let isLogin = false;
  !firstNm
    ? ((document.querySelector("#errFirstNm").style.display = "block"),
      (document.querySelector("#errFirstSpan").style.display = "block"))
    : ((document.querySelector("#errFirstNm").style.display = "none"),
      (document.querySelector("#errFirstSpan").style.display = "none"));
  !lastNm
    ? ((document.querySelector("#errLastNm").style.display = "block"),
      (document.querySelector("#errLastSpan").style.display = "block"))
    : ((document.querySelector("#errLastNm").style.display = "none"),
      (document.querySelector("#errLastSpan").style.display = "none"));
  !password
    ? ((document.querySelector("#errPassword").style.display = "block"),
      (document.querySelector("#errPasswordSpan").style.display = "block"))
    : ((document.querySelector("#errPassword").style.display = "none"),
      (document.querySelector("#errPasswordSpan").style.display = "none"));

  email.indexOf(".") === -1 || email.indexOf("@") === -1
    ? ((document.querySelector("#errEmail").style.display = "block"),
      (document.querySelector("#errEmailSpan").style.display = "block"))
    : ((document.querySelector("#errEmail").style.display = "none"),
      (document.querySelector("#errEmailSpan").style.display = "none"));
  if (
    firstNm &&
    lastNm &&
    password &&
    email.indexOf(".") !== -1 &&
    email.indexOf("@") !== -1
  ) {
    document.querySelector("#firstNm").style.borderColor = "green";
    document.querySelector("#lastNm").style.borderColor = "green";
    document.querySelector("#email").style.borderColor = "green";
    document.querySelector("#password").style.borderColor = "green";
  }
}
