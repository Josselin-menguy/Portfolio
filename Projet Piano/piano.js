const key = document.querySelector(".white-key");
const keyq = document.querySelector(".q-key");
const keya = document.querySelector(".a-key");
const keys = document.querySelector(".s-key");
const keyz = document.querySelector(".z-key");
const keyd = document.querySelector(".d-key");
const keye = document.querySelector(".e-key");
const keyf = document.querySelector(".f-key");
const keyr = document.querySelector(".r-key");
const keyg = document.querySelector(".g-key");
const keyt = document.querySelector(".t-key");
const keyh = document.querySelector(".h-key");
const keyy = document.querySelector(".y-key");
const keyj = document.querySelector(".j-key");
const keyu = document.querySelector(".u-key");
const keyk = document.querySelector(".k-key");
const keyi = document.querySelector(".i-key");
const keyl = document.querySelector(".l-key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  console.log(e.key);
  ring(e.key);
  if (e.key === "q") {
    keyq.style.background = "grey";
  } else if (e.key === "a") {
    keya.style.background = "grey";
  } else if (e.key === "s") {
    keys.style.background = "grey";
  } else if (e.key === "z") {
    keyz.style.background = "grey";
  } else if (e.key === "d") {
    keyd.style.background = "grey";
  } else if (e.key === "e") {
    keye.style.background = "grey";
  } else if (e.key === "f") {
    keyf.style.background = "grey";
  } else if (e.key === "r") {
    keyr.style.background = "grey";
  } else if (e.key === "g") {
    keyg.style.background = "grey";
  } else if (e.key === "t") {
    keyt.style.background = "grey";
  } else if (e.key === "h") {
    keyh.style.background = "grey";
  } else if (e.key === "y") {
    keyy.style.background = "grey";
  } else if (e.key === "j") {
    keyj.style.background = "grey";
  } else if (e.key === "u") {
    keyu.style.background = "grey";
  } else if (e.key === "k") {
    keyk.style.background = "grey";
  } else if (e.key === "i") {
    keyi.style.background = "grey";
  } else if (e.key === "l") {
    keyl.style.background = "grey";
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key === "q") {
    keyq.style.background = "white";
  } else if (e.key === "a") {
    keya.style.background = "black";
  } else if (e.key === "s") {
    keys.style.background = "white";
  } else if (e.key === "z") {
    keyz.style.background = "black";
  } else if (e.key === "d") {
    keyd.style.background = "white";
  } else if (e.key === "e") {
    keye.style.background = "black";
  } else if (e.key === "f") {
    keyf.style.background = "white";
  } else if (e.key === "r") {
    keyr.style.background = "black";
  } else if (e.key === "g") {
    keyg.style.background = "white";
  } else if (e.key === "t") {
    keyt.style.background = "black";
  } else if (e.key === "h") {
    keyh.style.background = "white";
  } else if (e.key === "y") {
    keyy.style.background = "black";
  } else if (e.key === "j") {
    keyj.style.background = "white";
  } else if (e.key === "u") {
    keyu.style.background = "black";
  } else if (e.key === "k") {
    keyk.style.background = "white";
  } else if (e.key === "i") {
    keyi.style.background = "black";
  } else if (e.key === "l") {
    keyl.style.background = "white";
  }
});
