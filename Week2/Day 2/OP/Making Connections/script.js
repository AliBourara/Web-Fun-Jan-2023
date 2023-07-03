function removeFriend(id){
    var removedFriend = document.getElementById(id);
    removedFriend.remove();
}

function addConnection(id){
    document.getElementById(id).textContent ++;
    document.getElementById('requests').textContent --;
}

function removeConnection(id){
    document.getElementById(id).textContent --;
}

function rename(id){
    document.getElementById(id).textContent = "Janet Arafa"
}