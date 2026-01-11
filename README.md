# Readster

Readster is a simple front-end web app that helps teens discover books, save a reading list, and connect with friends. It uses Google Books for search results and Firebase (auth + realtime database) for user data.

## Features

-   Browse topic-based book suggestions and add books to your reading list.
-   Sign in with Google to create a profile.
-   View your reading list and friends list.
-   Search for users by name or username and add them as friends.

## Pages

-   `home.html`: Landing page with carousel and intro copy.
-   `topics.html`: Book topic search that pulls from Google Books.
-   `profile.html`: Reading list + friends list for the signed-in user (or a friend profile via querystring).
-   `search.html`: User search and add-friend flow.

## Tech stack

-   Vanilla HTML/CSS/JS + jQuery
-   Bootstrap 3
-   Firebase (Auth + Realtime Database)
-   Google Books API

## Local setup

1. Serve the folder with any static server (recommended so Firebase auth works smoothly).
2. Open `home.html` in your browser.

Example using `python`:

```
python -m http.server 8080
```

Then open `http://localhost:8080/home.html`.

## How it works

-   Authentication lives in `login.js` and uses Google sign-in.
-   Firebase reads/writes live in `firebase-logic.js`.
-   Topic search is in `action.js`.
-   Profile rendering is in `profile.js`.
-   User search is in `search.js`.
-   Shared styles live in `style.css`.

## Notes

-   Firebase config is embedded directly in the HTML files.
-   The database structure expects each user under `/users/{uid}` with:
    -   `username`
    -   `name`
    -   `reading_list` (list of book objects)
    -   `friends` (list of user objects)
