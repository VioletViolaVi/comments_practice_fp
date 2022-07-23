console.log("it is linked");

const commentsBox = document.getElementById("displayComments"); // where comments are displayed
const comment = document.getElementById("comment"); // where to type comments

function submitComment(e) {
  e.preventDefault();

  const commentData = {
    comment: e.target.comment.value,
  };
}

function addComment(commentData) {
  const newComment = document.createElement("li");
  newComment.textContent = commentData.comment;
  commentsBox.appendChild(newComment);
}
