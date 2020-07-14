let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/123.jpg') {
      myImage.setAttribute('src', 'images/456.jpg');
    } else {
      myImage.setAttribute('src', 'images/123.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '秦润田的小猪，' + myName;
  }
}
myButton.onclick = function() {
   setUserName();
}