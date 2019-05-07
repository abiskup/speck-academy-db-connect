const db = require('../../db/connect');

const getHalls = (reg, res, next) => {
    db.query ('SELECT * from halls', (err, result) => {
    if (err) {
        return next(err);
        }
        res.send (result.rows)
    });
}
const getSingleHalls = (reg, res, next) => {
    const hallId = req.params.hallId;
    db.query('SELECT * from halls where id_dvorane = $1', [hallId], (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
 }
const getNewleHalls = (reg, res, next) => {
    const { id_dvorane, ime_dvorane, adresa, broj_mjesta } = req.body;
    db.query('INSERT INTO halls (id_dvorane, ime_dvorane, adresa, broj_mjesta) VALUES ($1, $2, $3, $4)',
    [id_dvorane, ime_dvorane, adresa, broj_mjesta], (err, result) => {
    if (err) {
       return next(err);
    }
     res.status(201).send(result.rows)
   })
 }
const updateHall = (reg, res, next) => {
    const idHall = req.params.idHall;
    const { ime_dvorane, adresa, broj_mjesta } = req.body
    db.query(
      'UPDATE halls SET ime_dvorane = $1, adresa = $2, broj_mjesta = $3 WHERE id_dvorane = $4',
      [ime_dvorane, adresa, broj_mjesta, idHall],
      (err, results) => {
        if (err) {
          throw err;
        }
        res.status(200).send(results.rows)
      });
  }
const deleteteHall = (reg, res, next) => {
    console.log("bla,", req.params);
    const idHall2 = req.params.idHall2;
    db.query('DELETE FROM halls WHERE id_dvorane = $1', [idHall2], (err, results) => {
     if (err) {
       throw err;
     }
     res.status(200).send(results.rows)
   });
 }




module.exports = {
    getHalls,
    getSingleHalls,
    getNewleHalls,
    updateHall,
    deleteteHall,
};
