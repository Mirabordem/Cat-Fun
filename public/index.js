const initializePage = async () => {
// func calej strony!
// create main container, position it & append to body
// invoke all helper funcs
// add local storage

const container = document.createElement("section");
container.setAttribute("class", "container");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";
container.style.marginTop = "20px";

document.body.appendChild(container)

mainContent();

}

const mainContent = () => {
// create h1
// new pic button
// img
// bring in container

const container = document.querySelector(".container")

  //Create h1
  const h1 = document.createElement('h1');
  h1.setAttribute('id','h1');
  h1.innerText = 'Catstagram';
  container.appendChild(h1)

  // Create new pic button
  const newPicButton = document.createElement("button");
  newPicButton.id = "new-pic";
  newPicButton.innerText = "Get New Cat";
  container.appendChild(newPicButton);


  //Create img
  const img = document.createElement("img");
  img.style.margin = "30px";
  img.style.maxWidth = "800px"
  container.appendChild(img);
  fetchImg();
//   img.src = imgUrl;

};

// Create voting buttons and Picture Score
const createScoreContainer = () => {
    // Create score container
    const scoreContainer = document.createElement("div");
    scoreContainer.className = "score-container";
    scoreContainer.style.display = "flex";
    scoreContainer.style.flexDirection = "column";
    scoreContainer.style.alignItems = "center";

    // Create score display
    const scoreDisplay = document.createElement("div");
    scoreDisplay.className = "score-display";
    scoreDisplay.style.marginBottom = "10px";

    const scoreTitle = document.createElement("span");
    scoreTitle.innerText = "Popularity Score: ";

    const score = document.createElement("span");
    score.className = "score";
    score.innerText = "0";

    scoreDisplay.appendChild(scoreTitle);
    scoreDisplay.appendChild(score);

    // Create upvote/downvote buttons
    const buttonContainer = document.createElement("div");

    const upvoteBtn = document.createElement("button");
    upvoteBtn.id = "upvote";
    upvoteBtn.innerText = "Upvote";

    const downvoteBtn = document.createElement("button");
    downvoteBtn.id = "downvote";
    downvoteBtn.innerText = "Downvote";
    downvoteBtn.style.marginLeft = "5px";

    buttonContainer.appendChild(upvoteBtn);
    buttonContainer.appendChild(downvoteBtn);

    scoreContainer.appendChild(scoreDisplay);
    scoreContainer.appendChild(buttonContainer);

    const container = document.querySelector(".container");
    container.appendChild(scoreContainer);
}
const createCommentContainer = () => {
    // Create form
    const commentForm = document.createElement("form");
    commentForm.className = "comment-form";
    commentForm.style.margin = "20px";
    commentForm.style.display = "flex";
    commentForm.style.width = "100%";
    commentForm.style.justifyContent = "center";
    commentForm.style.alignItems = "center";

    // Create comment input
    const userCommentContainer = document.createElement("div");
    userCommentContainer.className = "user-comment-container";
    userCommentContainer.style.marginRight = "10px";

    const label = document.createElement("label");
    label.setAttribute("for", "user-comment");
    label.innerText = "Comment: ";

    const commentInput = document.createElement("input");
    commentInput.id = "user-comment";
    commentInput.name = "user-comment";
    commentInput.placeholder = "Add a comment... ";
    commentInput.required = true;

    userCommentContainer.appendChild(label);
    userCommentContainer.appendChild(commentInput);

    // Create submit button
    const submitBtn = document.createElement("input");
    submitBtn.id = "submit-comment"
    submitBtn.type = "submit";
    submitBtn.value = "Submit";

    commentForm.appendChild(userCommentContainer);
    commentForm.appendChild(submitBtn);

    // Create comments section
    const comments = document.createElement("div");
    comments.className = "comments";
    comments.style.border = "solid grey 1px";
    comments.style.height = "400px";
    comments.style.width = "80%";
    comments.style.margin = "10px";
    comments.style.padding = "5px";
    comments.style.overflow = "scroll";

    const container = document.querySelector(".container");
    container.appendChild(commentForm);
    container.appendChild(comments);
}



// Fetch image from API and set img url
const fetchImg = async () => {

try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
    const data = await res.json();
    document.querySelector("img").src = data[0].url;
} catch (e) {
    console.log("Failed to fetch cat image", e);
}
}



window.onload = async () => {
    initializePage();

    document.getElementById("new-pic").addEventListener("click", fetchImg);

};
