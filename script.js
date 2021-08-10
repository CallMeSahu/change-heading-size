var txtInput = document.querySelector("#txt-input");
var h1Btn = document.querySelector("#h1");
var h2Btn = document.querySelector("#h2");
var h3Btn = document.querySelector("#h3");
var h1Output = document.querySelector("#H1");
var h2Output = document.querySelector("#H2");
var h3Output = document.querySelector("#H3");

h1Btn.addEventListener("click", () =>{
  h1Output.style.display = "block";
  h2Output.style.display = "none";
  h3Output.style.display = "none";

  h1Btn.style.backgroundColor = "transparent";
  h2Btn.style.backgroundColor = "whitesmoke";
  h3Btn.style.backgroundColor = "whitesmoke";

  h1Output.innerText = txtInput.value;
});

h2Btn.addEventListener("click", () =>{
  h1Output.style.display = "none";
  h2Output.style.display = "block";
  h3Output.style.display = "none";

  h1Btn.style.backgroundColor = "whitesmoke";
  h2Btn.style.backgroundColor = "transparent";
  h3Btn.style.backgroundColor = "whitesmoke";

  h2Output.innerText = txtInput.value;
});

h3Btn.addEventListener("click", () =>{
  h1Output.style.display = "none";
  h2Output.style.display = "none";
  h3Output.style.display = "block";

  h1Btn.style.backgroundColor = "whitesmoke";
  h2Btn.style.backgroundColor = "whitesmoke";
  h3Btn.style.backgroundColor = "transparent";

  h3Output.innerText = txtInput.value;
});