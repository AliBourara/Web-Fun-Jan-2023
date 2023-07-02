var likes = 3 ;
var likesElement = document.querySelector("h3");
function addLikes(){
    likes ++;
    likesElement.textContent = likes +" like(s)"
}