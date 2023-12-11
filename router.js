const {Router} = require('express') ; 
const router = Router() ; 
const films = require('./data/films.json')

router.get('/' , (req,res) => {
    res.render('index')
})

router.get('/story', (req,res) => {
    res.render('story')
})

router.get('/films', (req,res) => {
    res.render('films', {films})
}) ; 

router.get('/films/:id', (req,res) => {
    const id = parseInt(req.params.id )

    const film = films.find(film => film.id === id)

    if(!film) {
        res.status(404).send('404 error');
        return ; 
    }
    res.render('film', {film});
})



module.exports = router ; 