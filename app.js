const r = document.querySelector(":root");
const circle = document.querySelector(".circle");
const lastScreen = document.querySelector(".last-val");
const newScreen = document.querySelector(".new-val");
var lastVal = 0;
var newVal = 0;
var operation = "equal";

// change theme

const makeTheme = (theme) => {
  switch (theme) {
    case 1:
      circle.style.setProperty("left", "3px");
      circle.style.setProperty("transform", "translateX(0)");
      r.style.setProperty("--main_bg", "hsl(222, 26%, 31%)");
      r.style.setProperty("--toggle_keypad_bg", "hsl(223, 31%, 20%)");
      r.style.setProperty("--screen_bg", "hsl(224, 36%, 15%)");
      r.style.setProperty("--key_bg", "hsl(30, 25%, 89%)");
      r.style.setProperty("--key_shadow", "hsl(28, 16%, 65%)");
      r.style.setProperty("--equal_bg", "hsl(6, 63%, 50%)");
      r.style.setProperty("--equal_shadow", "hsl(6, 70%, 34%)");
      r.style.setProperty("--dell_bg", "hsl(225, 21%, 49%)");
      r.style.setProperty("--dell_shadow", "hsl(224, 28%, 35%)");
      r.style.setProperty("--head_txt", "hsl(0, 0%, 100%)");
      r.style.setProperty("--btns_txt", "hsl(221, 14%, 31%)");
      r.style.setProperty("--dell_res_txt", "hsl(0, 0%, 100%)");
      r.style.setProperty("--equal_txt", "hsl(0, 0%, 100%)");
      break;
    case 2:
      circle.style.setProperty("left", "50%");
      circle.style.setProperty("transform", "translateX(-50%)");
      r.style.setProperty("--main_bg", "hsl(0, 0%, 90%)");
      r.style.setProperty("--toggle_keypad_bg", "hsl(0, 5%, 81%)");
      r.style.setProperty("--screen_bg", "hsl(0, 0%, 93%)");
      r.style.setProperty("--key_bg", "hsl(45, 7%, 89%)");
      r.style.setProperty("--key_shadow", "hsl(35, 11%, 61%)");
      r.style.setProperty("--equal_bg", "hsl(25, 98%, 40%)");
      r.style.setProperty("--equal_shadow", "hsl(25, 99%, 27%)");
      r.style.setProperty("--dell_bg", "hsl(185, 42%, 37%)");
      r.style.setProperty("--dell_shadow", "hsl(185, 58%, 25%)");
      r.style.setProperty("--head_txt", "hsl(60, 10%, 19%)");
      r.style.setProperty("--btns_txt", "hsl(60, 10%, 19%)");
      r.style.setProperty("--dell_res_txt", "hsl(0, 0%, 100%)");
      r.style.setProperty("--equal_txt", "hsl(0, 0%, 100%)");
      break;
    case 3:
      circle.style.setProperty("left", "100%");
      circle.style.setProperty("transform", "translateX(-18px)");
      r.style.setProperty("--main_bg", "hsl(268, 75%, 9%)");
      r.style.setProperty("--toggle_keypad_bg", "hsl(268, 71%, 12%)");
      r.style.setProperty("--screen_bg", "hsl(268, 71%, 12%)");
      r.style.setProperty("--key_bg", "hsl(268, 47%, 21%)");
      r.style.setProperty("--key_shadow", "hsl(290, 70%, 36%)");
      r.style.setProperty("--equal_bg", "hsl(176, 100%, 44%)");
      r.style.setProperty("--equal_shadow", "hsl(177, 92%, 70%)");
      r.style.setProperty("--dell_bg", "hsl(281, 89%, 26%)");
      r.style.setProperty("--dell_shadow", "hsl(285, 91%, 52%)");
      r.style.setProperty("--head_txt", "hsl(52, 100%, 62%)");
      r.style.setProperty("--btns_txt", "hsl(52, 100%, 62%)");
      r.style.setProperty("--dell_res_txt", "hsl(0, 0%, 100%)");
      r.style.setProperty("--equal_txt", "hsl(198, 20%, 13%)");
      break;
  }
};

document.querySelector(".click1").addEventListener("click", function (e) {
  makeTheme(1);
});
document.querySelector(".click2").addEventListener("click", function (e) {
  makeTheme(2);
});
document.querySelector(".click3").addEventListener("click", function (e) {
  makeTheme(3);
});

// numbers buttons

const tapNum = (num) => {
  let str = newScreen.innerHTML.toString();
  if (num == ".") {
    if (!str.includes(".")) newScreen.innerHTML += num;
  } else if (num == 0) {
    if (str != "0") newScreen.innerHTML += num;
  } else {
    if (str == "0") newScreen.innerHTML = num;
    else newScreen.innerHTML += num;
    newVal = Number(newScreen.innerHTML.toString());
  }
};

document.querySelector(".btn-1").addEventListener("click", function (e) {
  tapNum(1);
});
document.querySelector(".btn-2").addEventListener("click", function (e) {
  tapNum(2);
});
document.querySelector(".btn-3").addEventListener("click", function (e) {
  tapNum(3);
});
document.querySelector(".btn-4").addEventListener("click", function (e) {
  tapNum(4);
});
document.querySelector(".btn-5").addEventListener("click", function (e) {
  tapNum(5);
});
document.querySelector(".btn-6").addEventListener("click", function (e) {
  tapNum(6);
});
document.querySelector(".btn-7").addEventListener("click", function (e) {
  tapNum(7);
});
document.querySelector(".btn-8").addEventListener("click", function (e) {
  tapNum(8);
});
document.querySelector(".btn-9").addEventListener("click", function (e) {
  tapNum(9);
});
document.querySelector(".btn-0").addEventListener("click", function (e) {
  tapNum(0);
});
document.querySelector(".btn-point").addEventListener("click", function (e) {
  tapNum(".");
});

// delete & reset buttons

document.querySelector(".btn-del").addEventListener("click", function (e) {
  newScreen.innerHTML = newScreen.innerHTML.slice(0, -1);
  if (newScreen.innerHTML.toString() == "") newScreen.innerHTML = "0";
  newVal = Number(newScreen.innerHTML.toString());
});

document.querySelector(".btn-reset").addEventListener("click", function (e) {
  newScreen.innerHTML = "0";
  lastScreen.style.setProperty("display", "none");
  newScreen.style.setProperty("top", "20px");
  newVal = lastVal = 0;
});

// operations buttons

const tapOper = (newOperation) => {
  switch (operation) {
    case "plus":
      lastVal += newVal;
      break;
    case "minus":
      lastVal -= newVal;
      break;
    case "multiply":
      lastVal *= newVal;
      break;
    case "divide":
      lastVal /= newVal;
      break;
    case "equal":
      lastVal = newVal;
      break;
  }

  if (newOperation == "equal") {
    newVal = lastVal;
    newScreen.innerHTML = newVal.toString();
    lastScreen.style.setProperty("display", "none");
    newScreen.style.setProperty("top", "20px");
  } else {
    newVal = 0;
    newScreen.innerHTML = "0";
    lastScreen.innerHTML = lastVal.toString();
    lastScreen.style.setProperty("display", "block");
    newScreen.style.setProperty("top", "40px");
  }
  operation = newOperation;
};

document.querySelector(".btn-plus").addEventListener("click", function (e) {
  tapOper("plus");
});

document.querySelector(".btn-minus").addEventListener("click", function (e) {
  tapOper("minus");
});

document.querySelector(".btn-multiply").addEventListener("click", function (e) {
  tapOper("multiply");
});

document.querySelector(".btn-divide").addEventListener("click", function (e) {
  tapOper("divide");
});

document.querySelector(".btn-equal").addEventListener("click", function (e) {
  tapOper("equal");
});
