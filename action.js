$(document).ready(function (){
   
    
    
    
    
    
    
})

var search_books = function(search){
    $("#results").empty();
    var url = "https://www.googleapis.com/books/v1/volumes?q="
    var complete_url = url + search
    $.getJSON(complete_url, function(response){
        for (var i=0; i<=6; i++){
             var books = response.items
             var book = response.items[i].volumeInfo
             //console.log(response)
             $('#results').append('<div class="title">' + '<center>' +'<h2 class="title_style">' + book.title + '</h2>' + '</center>' + '</div>');
             $('#results').append('<div class="description">' +  book.description  + '</div>');
             $('#results').append('<div class="author">' + "Author: " + book.authors[0] +  '</div>');
             $('#results').append('<button class="add_list_color" type="button" onclick = "addToList(event)"  data-book="' + JSON.stringify(book).replace(/"/g, "'") + '">Add To My List!</button>');
             
         }
        scrollToText();
    })
    
    
    
}

function scrollToText() {
    window.scroll(0, $("#results").offset().top);
}