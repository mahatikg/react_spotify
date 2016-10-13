//LOCAL VARIABLES

// fetch users action - actions/index.js
const user_url = 'http://localhost:5050/users'
// compare users action - actions/index.js
const compare_url = "http://localhost:5050/compare?id1="
// // spotify login url with code callback url - App.js - components
const spotify_auth = "https://accounts.spotify.com/authorize/?client_id=031ed6ea90bd4727b184cd84219dd697&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5050%2Fcallback%2F&scope=user-top-read"


//REMOTE VARIABLES

// spotify login url with code callback url - App.js - components
// const spotify_auth = "https://accounts.spotify.com/authorize/?client_id=031ed6ea90bd4727b184cd84219dd697&response_type=code&redirect_uri=https%3A%2F%2Frocky-dusk-25774.herokuapp.com%2Fcallback%2F&scope=user-top-read"
// // fetch users action - actions/index.js
// const user_url = 'https://rocky-dusk-25774.herokuapp.com/users'
// // compare users action - actions/index.js
// const compare_url = "https://rocky-dusk-25774.herokuapp.com/compare?id1="






export {user_url, compare_url, spotify_auth}
