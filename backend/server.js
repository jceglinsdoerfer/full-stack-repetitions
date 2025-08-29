const express = require('express');
const app = express();
const port = 8080
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')['development']);

app.use(express.json());
app.use(cors());



app.get('/api/', (req,res) => {
    res.status(200).send(`Good request`);
});

// get movie data
app.get('/api/movies', (req, res) => {
    knex('movies')
        .select('*')
        .from('movies')
        .then(data =>  res.status(200).send(data) )
        .catch((err) => {
            if (err) {
                res.status(404).send(`failed to retrieve: ${err}`)
            }
        })
})
//get all playlists data
// app.get('/api/playlists', (req, res) => {
//     knex('playlists')
//         .select('*')
//         .from('playlists')
//         .then(data =>  res.status(200).send(data) )
//         .catch((err) => {
//             if (err) {
//                 res.status(404).send(`failed to retrieve: ${err}`)
//             }
//         })
// })
//get all users data
// app.get('/api/users', (req, res) => {
//     knex('users')
//         .select('*')
//         .from('users')
//         .then(data =>  res.status(200).send(data) )
//         .catch((err) => {
//             if (err) {
//                 res.status(404).send(`failed to retrieve: ${err}`)
//             }
//         })
// })
//get all albums data
// app.get('/api/albums', (req, res) => {
//     knex('albums')
//         .select('*')
//         .from('albums')
//         .then(data =>  res.status(200).send(data) )
//         .catch((err) => {
//             if (err) {
//                 res.status(404).send(`failed to retrieve: ${err}`)
//             }
//         })
// })
//get all artists data
// app.get('/api/artists', (req, res) => {
//     knex('artists')
//         .select('*')
//         .from('artists')
//         .then(data =>  res.status(200).send(data) )
//         .catch((err) => {
//             if (err) {
//                 res.status(404).send(`failed to retrieve: ${err}`)
//             }
//         })
// })



//end
app.listen(port, '0.0.0.0', () => {
    console.log(`express is running on ${port}`);
})



