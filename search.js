function search() {
    let query = document.getElementById('searchInput').value;
    if (query) {
        getUsers(query).then(results => {
            let resultsDiv = document.getElementById('users');
            resultsDiv.innerHTML = '';
            let template = document.getElementsByClassName('template')[0];
            results.forEach(user => {
                let elem = template.cloneNode();
                elem.className = elem.className.replace('template','');
                elem.innerHTML = template.innerHTML.replace('{{username}}', user.username).replace('{{name}}', user.name);
                elem.querySelector('button').dataset.user = JSON.stringify(user);
                resultsDiv.appendChild(elem);
            });
        });
    }
}


function add(event) { //adds friend and runs on click
    let friendUsername = event.target.dataset.username;
}