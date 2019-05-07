const db = require('../../db/connect');

const getReservations = (reg, res, next) => {
    db.query ('SELECT * from rezervacija', (err, result) => {
    if (err) {
        return next(err);
        }
        res.send (result.rows)
    });
}
const getSingleReservations = (reg, res, next) => {
    const reservationsId = req.params.reservationsId;
    db.query('SELECT * from rezervacija where id = $1', [reservationsId], (err, result) => {
        if (err) {
            return next(err);
        }
        res.send(result.rows)
    });
 }
const getNewleReservations = (reg, res, next) => {
    const { id, rezervirano_od, rezervirano_do } = req.body;
    db.query('INSERT INTO rezervacija (id, rezervirano_od, rezervirano_do) VALUES ($1, $2, $3)',
    [id, rezervirano_od, rezervirano_do], (err, result) => {
    if (err) {
       return next(err);
    }
     res.status(201).send(result.rows)
   })
 }
const updateReservations = (reg, res, next) => {
    const idReservations = req.params.idReservations;
    const  {id, rezervirano_od, rezervirano_do } = req.body
    db.query(
      'UPDATE rezervacija SET rezervirano_od = $1, rezervirano_do = $2, WHERE id_dvorane = $3',
      [id, rezervirano_od, rezervirano_do, idReservations],
      (err, results) => {
        if (err) {
          throw err;
        }
        res.status(200).send(results.rows)
      });
  }
const deleteteReservations = (reg, res, next) => {
    console.log("bla,", req.params);
    const idReservations2 = req.params.idReservations2;
    db.query('DELETE FROM rezervacija WHERE id = $1', [idReservations2], (err, results) => {
     if (err) {
       throw err;
     }
     res.status(200).send(results.rows)
   });
 }




module.exports = {
    getReservations,
    getSingleReservations,
    getNewleReservations,
    updateReservations,
    deleteteReservations,
};
