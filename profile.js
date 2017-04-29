let username;
if(window.location.search.includes('username')){
    username = window.location.search.replace('?','').split('&').filter(x => x.includes('username'))[0].replace('username=','');
    getReadingList(username).then(displayBooks);
}
else{
    logIn((user) => {
       username = user.displayName.replace(' ','').toLowerCase();
       getReadingList(username).then(list => displayBooks(list));
       getFriends().then(list => displayFriends(list));
    });
}

function displayBooks(list){
    let bookList = document.querySelector('#books-list');
    list.forEach(bookItem => {
        let template = document.getElementsByClassName('book')[0];
        let elem = template.cloneNode(true);
        elem.className = elem.className.replace('template','');
        elem.querySelector('.book-image').setAttribute('src',bookItem.imageLinks.thumbnail);
        elem.querySelector('.title').innerHTML = bookItem.title;
        elem.querySelector('.author').innerHTML = bookItem.authors[0];
        bookList.appendChild(elem);
    })
}


function displayFriends(list){
    let friendsList = document.querySelector('#friends-list');
    list.forEach(friend => {
        let template = document.querySelector('.friend.template');
        let elem = template.cloneNode(true);
        elem.innerHTML = template.innerHTML.replace('{{username}}', friend.username).replace('{{name}}', friend.name);
        elem.className = elem.className.replace('template', '');
        friendsList.appendChild(elem);
    });
}