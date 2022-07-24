const commentsBox = document.getElementById("displayComments"); // where comments are displayed
const commentTextarea = document.getElementById("commentTextarea"); // where to type comments
const form = document.getElementById("wholeForm");
let allCommentsArr = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newCommentLi = document.createElement("li");

  newCommentLi.innerText = commentTextarea.value;
  commentsBox.appendChild(newCommentLi);

  allCommentsArr.push(newCommentLi.innerText);

  // console.log("newCommentLi: ", newCommentLi);
  // console.log("commentsBox: ", commentsBox);
  console.log("allCommentsArr: ", allCommentsArr);
  // console.log("fullComments: ", fullComments);

  commentTextarea.value = "";
});

localStorage.setItem("all comments", allCommentsArr);
localStorage.getItem("all comments");
console.log("here =>", localStorage.getItem("all comments"));

function displayComments() {
  for (let i = 0; i < allCommentsArr.length; i++) {
    const newCommentLi = document.createElement("li");
    newCommentLi.innerText = allCommentsArr[i].value;
    commentsBox.appendChild(newCommentLi);
  }
}
displayComments();
