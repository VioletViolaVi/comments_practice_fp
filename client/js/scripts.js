const commentsBox = document.getElementById("displayComments"); // where comments are displayed
const commentTextarea = document.getElementById("commentTextarea"); // where to type comments
const form = document.getElementById("wholeForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newCommentLi = document.createElement("li");

  newCommentLi.innerText = commentTextarea.value;
  commentsBox.appendChild(newCommentLi);

  console.log("newCommentLi: ", newCommentLi);
  console.log("commentsBox: ", commentsBox);

  commentTextarea.value = "";
});
