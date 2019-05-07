const db = require('../../db/connect');

const getUsers = (reg, res, next) => {
    db.query ('SELECT * from users', (err, result) => {
    if (err) {
        return next(err);
        }
        res.send (result.rows)
    });
}
const getSingleUsers = (reg, res, next) => {
    const usersId = req.params.usersId;
    db.query('SELECT * from users where id = $1', [usersId], (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
 }
const getNewUsers = (reg, res, next) => {
    const { id, ime_korisnika, prezime_korisnika, oib } = req.body;
    db.query('INSERT INTO users (id, ime_korisnika, prezime_korisnika, oib) VALUES ($1, $2, $3, $4)',
    [id, ime_korisnika, prezime_korisnika, oib], (err, result) => {
    if (err) {
       return next(err);
    }
     res.status(201).send(result.rows)
   })
 }
const updateUsers = (reg, res, next) => {
    const idUsers = req.params.idUsers;
    const { ime_korisnika, prezime_korisnika, oib } = req.body
    db.query(
      'UPDATE users SET ime_korisnika = $1, prezime_korisnika = $2, oib = $3 WHERE id = $4',
      [ime_korisnika, prezime_korisnika, oib, idUsers],
      (err, results) => {
        if (err) {
          throw err;
        }
        res.status(200).send(results.rows)
      });
  }
const deleteteUsers = (reg, res, next) => {
    console.log("bla,", req.params);
    const idUsers2 = req.params.idUsers2;
    db.query('DELETE FROM users WHERE id = $1', [idUsers2], (err, results) => {
     if (err) {
       throw err;
     }
     res.status(200).send(results.rows)
   });
 }




module.exports = {
    getUsers,
    getSingleUsers,
    getNewUsers,
    updateUsers,
    deleteteUsers,
};
