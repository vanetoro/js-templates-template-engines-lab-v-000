function createPost() {
  var postTitle = document.getElementById("postTitle").value;
  var postBody = document.getElementById("postBody").value;
  var postAuthor = document.getElementById("postAuthor").value;


  var postTemplate = document.getElementById("post-template").innerHTML;
  var templateFn = _.template(postTemplate);
  var postDiv = document.getElementById("post");
  var templateHTML = templateFn({ 'postTitle': postTitle, 'postBody': postBody, 'postAuthor': postAuthor });
  postDiv.innerHTML += templateHTML;

}

function postComment() {
  var commenterName = document.getElementById("commenterName").value;
  var commentText = document.getElementById("commentText").value

  var commentTemplate = document.getElementById("comment-template").innerHTML;
  var templateFn = _.template(commentTemplate);
  var commentDiv = document.getElementById('comment')
  var templateHTML = templateFn({ 'commenterName': commenterName, 'commentText': commentText });
  commentDiv.innerHTML += templateHTML
}
