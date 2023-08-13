const initializePage = () => {

    //  1. Main function to create the whole page body, establishing the flow...


    // A. Create container of the body - position it on the page, and style.
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "30px";
    container.style.background = "#efdcdc";

      // append to body
    document.body.appendChild(container);


    // B. Activate all helper functions
    createMainContent();
    createScoreContainer();
    createCommentContainer();


    // C. Create local storage
    if (localStorage.url) {
        document.querySelector("img").src = localStorage.url;
        document.querySelector(".score").innerHTML = localStorage.score;
        renderComments(JSON.parse(localStorage.comments));
    } else {
        fetchImage();
    }
};


// CONTAINERS AND ELEMENTS (creating, positioning and styling)


// 2. Function to create the main content of the page:
const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "CATSTAGRAM";
    h1.style.color = "navy"
    h1.style.fontSize = "38px"
    h1.style.fontFamily = " sans-serif"
    h1.style.marginBottom = "30px"

    // Create new pic button
    const newPicButton = document.createElement("button");
    newPicButton.id = "new-pic";
    newPicButton.innerText = "Get A New Kitty";
    newPicButton.style.color = "brown";
    newPicButton.style.fontSize = "18px";
    newPicButton.style.border = "none";
    newPicButton.style.marginBottom = "30px";
    newPicButton.style.paddingLeft = "80px";
    newPicButton.style.paddingRight = "80px";
    newPicButton.style.paddingTop = "10px";
    newPicButton.style.paddingBottom = "10px";
    newPicButton.style.boxShadow = "2px 2px 4px grey";
    newPicButton.style.display = "flex";
    newPicButton.style.justifyContent = "center";
    newPicButton.style.alignItems = "center";

    // Create cat img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";
    img.src = fetchImage();

    // get container here
    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(newPicButton);
    container.appendChild(img);
}




// 3. Function to create the score container.
const createScoreContainer = () => {
    // score container
    const scoreContainer = document.createElement("div");
    scoreContainer.className = "score-container";
    scoreContainer.style.display = "flex";
    scoreContainer.style.flexDirection = "column";
    scoreContainer.style.alignItems = "center";

    // score display
    const scoreDisplay = document.createElement("div");
    scoreDisplay.className = "score-display";
    scoreDisplay.style.marginBottom = "10px";

    const scoreTitle = document.createElement("span");
    scoreTitle.innerText = "Popularity Score: ";
    scoreTitle.style.color = "brown";
    scoreTitle.style.fontSize = "28px";
    scoreTitle.style.fontWeight = "bold";
    scoreTitle.style.fontFamily = "Roboto, sans-serif"

    const score = document.createElement("span");
    score.className = "score";
    score.innerText = "0";
    score.style.color = "navy"
    score.style.fontSize = "36px"
    score.style.marginLeft = "5px"

    scoreDisplay.appendChild(scoreTitle);
    scoreDisplay.appendChild(score);

    // upvote/downvote buttons:
    const buttonContainer = document.createElement("div");

    const upvoteBtn = document.createElement("button");
    upvoteBtn.id = "upvote";
    upvoteBtn.innerText = "YES";
    upvoteBtn.style.padding = "20px 40px";
    upvoteBtn.style.color = "brown";
    upvoteBtn.style.boxShadow = "2px 2px 4px grey";
    upvoteBtn.style.border = "none";

    const downvoteBtn = document.createElement("button");
    downvoteBtn.id = "downvote";
    downvoteBtn.innerText = "NO";
    downvoteBtn.style.padding = "20px 40px";
    downvoteBtn.style.marginLeft = "5px";
    downvoteBtn.style.color = "brown"
    downvoteBtn.style.boxShadow = "2px 2px 4px grey";
    downvoteBtn.style.border = "none";

    buttonContainer.appendChild(upvoteBtn);
    buttonContainer.appendChild(downvoteBtn);

    scoreContainer.appendChild(scoreDisplay);
    scoreContainer.appendChild(buttonContainer);

    const container = document.querySelector(".container");
    container.appendChild(scoreContainer);
}


  // 4. Function to create comments container:
const createCommentContainer = () => {

    //  form
    const commentForm = document.createElement("form");
    commentForm.className = "comment-form";
    commentForm.style.margin = "30px";
    commentForm.style.display = "flex";
    commentForm.style.width = "60%";
    commentForm.style.justifyContent = "center";
    commentForm.style.alignItems = "center";


    // comment input
    const userCommentContainer = document.createElement("div");
    userCommentContainer.className = "user-comment-container";
    userCommentContainer.style.marginRight = "10px";


    const label = document.createElement("label");
    label.setAttribute("for", "user-comment");
    label.innerText = "Comment: ";
    label.style.color = "navy";
    label.style.fontSize = "28px";
    label.style.fontWeight = "bold";

    const commentInput = document.createElement("input");
    commentInput.id = "user-comment";
    commentInput.name = "user-comment";
    commentInput.placeholder = "Add a comment... ";
    commentInput.style.color = "navy";
    commentInput.style.fontSize = "18px";
    commentInput.style.outline = "none"; // no border when you type
    commentInput.required = true;
    commentInput.style.border = "none";
    commentInput.style.padding = "10px 30px";
    commentInput.style.marginLeft = "5px";


    userCommentContainer.appendChild(label);
    userCommentContainer.appendChild(commentInput);

    // submit button
    const submitBtn = document.createElement("input");
    submitBtn.id = "submit-comment"
    submitBtn.type = "submit";
    submitBtn.value = "Submit";
    submitBtn.style.color = "brown";
    submitBtn.style.fontSize = "18px";
    submitBtn.style.border = "none";
    submitBtn.style.paddingLeft = "50px";
    submitBtn.style.paddingRight = "50px";
    submitBtn.style.paddingTop = "10px";
    submitBtn.style.paddingBottom = "10px";
    submitBtn.style.boxShadow = "2px 2px 4px grey";

    commentForm.appendChild(userCommentContainer);
    commentForm.appendChild(submitBtn);

    // comments section
    const comments = document.createElement("div");
    comments.className = "comments";
    comments.style.height = "400px";
    comments.style.width = "80%";
    comments.style.margin = "10px";
    comments.style.padding = "5px";
    comments.style.overflow = "scroll";
    comments.style.background = "white";
    comments.style.color = "grey";

    const container = document.querySelector(".container");
    container.appendChild(commentForm);
    container.appendChild(comments);
}



//   PAGE ACTIONS SECTION:

// 1. async function to fetch pictures from API and get img url:
const fetchImage = async () => {
    try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        const data = await res.json();

        localStorage.setItem("url", data[0].url);
        localStorage.setItem("score", 0);
        localStorage.setItem("comments", JSON.stringify([]));

        document.querySelector("img").src = data[0].url;
        document.querySelector('.score').innerHTML = 0;
        document.querySelector('.comments').innerHTML = '';
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
}

// 2. function to create comment:
const createComment = (comment, i) => {
    const newCommentContainer = document.createElement('div');
    newCommentContainer.style.display = "flex";
    newCommentContainer.style.margin = "10px";

    const newComment = document.createElement("p");
    newComment.innerText = comment;

    const deleteButton = document.createElement('button');
    deleteButton.className = "delete-button";
    deleteButton.style.marginLeft = "15px";
    deleteButton.style.border = "none";
    deleteButton.style.color = "brown";
    deleteButton.innerText = 'Delete';
    deleteButton.style.padding = "10px";
    deleteButton.setAttribute('id', i);
    deleteButton.addEventListener("click", e => deleteComment(e));

    newCommentContainer.appendChild(newComment);
    newCommentContainer.appendChild(deleteButton);
    return newCommentContainer;
}


// 3. function to render comments:
const renderComments = comments => {
    const commentsContainer = document.querySelector(".comments");
    commentsContainer.innerHTML = "";
    comments.forEach((comment, i) => {
        commentsContainer.appendChild(createComment(comment, i));
    });
}


// 4. function to delete comments
const deleteComment = e => {
    console.log(e.target);
    const storedComments = JSON.parse(localStorage.comments);
    storedComments.splice(parseInt(e.target.id), 1);
    localStorage.comments = JSON.stringify(storedComments);

    renderComments(storedComments);
}

//  5. function to submit/store comments:
const submitComment = e => {
    e.preventDefault();
    const commentForm = document.querySelector('.comment-form');
    const formData = new FormData(commentForm);

    const commentText = formData.get("user-comment");
    commentForm.reset();

    const storedComments = JSON.parse(localStorage.comments);
    storedComments.push(commentText);
    localStorage.comments = JSON.stringify(storedComments);

    const comment = createComment(commentText, storedComments.length - 1);

    const comments = document.querySelector(".comments");
    comments.appendChild(comment);
};


// 6. function to store votes:
const vote = e => {
    if (e.target.id === "upvote") {
        localStorage.score = parseInt(localStorage.score) + 1;
    } else {
        localStorage.score = parseInt(localStorage.score) - 1;
    }
    document.querySelector('.score').innerHTML = localStorage.score;
}



window.onload = async () => {    // activate page main function and EventListeners!

    initializePage(); // main flow of the page

    // activate all EventListeners!
    document.getElementById("new-pic").addEventListener("click", fetchImage);
    document.getElementById("upvote").addEventListener("click", e => vote(e));
    document.getElementById("downvote").addEventListener("click", e => vote(e));
    document.getElementById("submit-comment").addEventListener("click", e => submitComment(e));
};
