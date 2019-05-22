let lastScroll = 0;
let index = 0;
const MyDocument = window;
// I only have article, sections and footer
const documentChilds = Array.from(document.querySelectorAll("article, footer, section"));
// console.log(documentChilds);
// Hide all elements in order to display the first one

hideAllElements();

refactorFirstElement(documentChilds[0]);
// console.log(MyDocument.innerHeight);
MyDocument.addEventListener("scroll", function(){
  let st = this.pageYOffset || document.documentElement.scrollTop;
  if(st > lastScroll)
  {
    // Scroll down code
    console.log("You Scrolled Down");
    index++;
    onScrollDownRefactorElements(documentChilds[index]);
    // Now you need to get the component that is infront of the user screen
  }
  else if(st == 0)
  {
    // documentChilds[0].classList.remove("hide");
    // console.log(documentChilds);
  }
  else {
    // Scroll up code
    console.log("Op, you went back up");
    index--;
    // onScrollUpRefactorElements(documentChilds[index]);
  }

  lastScroll = st;
  // console.log(document.documentElement.scrollTop);
});

function refactorFirstElement(firstElement){
  // Display first element and get the height of everything to 100%;
  firstElement.classList.remove("hide");
  firstElement.style.height = `${MyDocument.innerHeight - 50}px`; 
  firstElement.querySelector("img").style.height = `${MyDocument.innerHeight - 50}px`;
}

function hideAllElements()
{
  documentChilds.map(child => {
    child.classList.add("hide")
    child.style.height = `0px`;
  });
}

function onScrollDownRefactorElements(element){
  // debugger;
  if(index < documentChilds.length)
  {
    hideAllElements();
    element.classList.remove("hide");
    element.style.height = `${MyDocument.innerHeight - 30}px`;
  }
}

function onScrollUpRefactorElements(element){
  // debugger;
  if(index < documentChilds.length)
  {
    hideAllElements();
    element.classList.remove("hide");
    element.style.height = `${MyDocument.innerHeight - 40}px`;
  }
}