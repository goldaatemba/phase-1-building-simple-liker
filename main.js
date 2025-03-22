// Defining text characters for the empty and full hearts for you to use later.
document.addEventListener("DOMContentLoaded", () => {
  const EMPTY_HEART = '♡';
  const FULL_HEART = '♥';


// Your JavaScript code goes here!
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">

    <title>Simple Liker</title>
  </head>
  <body>
    <div id="modal">
      <h2>Error!</h2>
      <p id="modal-message"></p>
    </div>

    <header>
      <h1>Simple Liker</h1>
    </header>
    <article class="media-post" id="201811189">
      <header>
        <h2> <span>Byron Flatiron</span> says:</h2>
      </header>
      <p>Practice your JavaScript!</p>
      <footer>
        <ul>
          <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
        </ul>
      </footer>
    </article>
    <article class="media-post" id="201811190">
      <header>
        <h2> <span>Rashaun Flatiron</span> says:</h2>
      </header>
      <p>Practice your Ruby!</p>
      <footer>
        <ul>
          <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
        </ul>
      </footer>
    </article>
    <article class="media-post" id="201811191">
      <header>
        <h2> <span>Matt Flatiron</span> says:</h2>
      </header>
      <p>Practice your Python!</p>
      <footer>
        <ul>
          <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
        </ul>
      </footer>
    </article>
    <article class="media-post" id="201811192">
      <header>
        <h2> <span>Yunchu Flatiron</span> says:</h2>
      </header>
      <p>Practice your Java!</p>
      <footer>
        <ul>
          <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
        </ul>
      </footer>
    </article>
    <article class="media-post" id="201811193">
      <header>
        <h2> <span>Hussein Flatiron</span> says:</h2>
      </header>
      <p>Practice your Elixr!</p>
      <footer>
        <ul>
          <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
        </ul>
      </footer>
    </article>
  </body>
  <script src="main.js" charset="utf-8"></script>
</html>

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
