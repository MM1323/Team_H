function addToList(event){
    console.log(event, event.target.dataset.book);
    let book = JSON.parse(event.target.dataset.book.replace(/'/g, '"'));
    firebase.database().ref('/users/' + userData.uid).child('reading_list').push(book);
}

function addFriend(event) { //<a onclick="addFriend(event)" data-username="ueouoe">
    let user = JSON.parse(event.target.dataset.user);
    firebase.database().ref('/users/' + userData.uid).child('friends').push(user);
}


function getUsers(query){
    return firebase.database().ref('/users').once('value').then(users => {
        let allUsers = users.val(); //object
        let usersArray = [];
        Object.keys(allUsers).forEach( key => {
            usersArray.push(allUsers[key]);
        });
        query = query.toLowerCase();
        results = usersArray.filter(x => x.name.toLowerCase().includes(query) || x.username.toLowerCase().includes(query));
        return results;
    });
}

function getFriends(){
    return firebase.database().ref('/users/'+userData.uid + '/friends').once('value').then(function(users){
        let allUsers = users.val(); //object
        let usersArray = [];
        Object.keys(allUsers).forEach( key => {
            usersArray.push(allUsers[key]);
        });
        return usersArray;
    });
}

function getReadingList(username){
    return firebase.database().ref('/users').once('value').then(function(users){
        let allUsers = users.val(); //object
        let usersArray = [];
        Object.keys(allUsers).forEach( key => {
            usersArray.push(allUsers[key]);
        });
        
        let user = usersArray.filter(x => x.username === username)[0];
        let list = [];
        Object.keys(user.reading_list).forEach( key => {
            list.push(user.reading_list[key]);
        });
        return list;
    });
}

function getUsername(uid){
    
}