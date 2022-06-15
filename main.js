// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const liker=document.querySelectorAll(".like-glyph")
const error=document.querySelector('#modal')

for(const likes of liker){
  liker.addEventListerner('click', ()=>{
    mimicServerCall(url="http://mimicServer.example.com")
    .then(()=>{
      if(liker===EMPTY_HEART){
        liker.className=".activated-heart";
      }
      else{
        liker.innerText===EMPTY_HEART;
      }
    })
    .catch((message)=>{
      error.className="";
      error.innerText=message;
      setTimeout(()=>{
        error.className="hidden", 3000;
      })
    })


  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
