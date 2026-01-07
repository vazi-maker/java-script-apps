//debounce
//request data gathering logic
let button = document.getElementById("demo");
let clickResult = document.getElementById("sample");
let triggeredResult = document.getElementById("simple");
//businness logic
let clickcount = 0;
let triggeredcount = 0;
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}
const debounceResult = debounce(() => {
  triggeredcount++;
  triggeredResult.innerHTML = `triggered ${triggeredcount}`;
}, 1000);
button.addEventListener("click", () => {
  clickcount++;
  clickResult.innerHTML = `user enter characters${clickcount}`;
  debounceResult();
});
