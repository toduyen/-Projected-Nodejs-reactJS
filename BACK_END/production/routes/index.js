var express = require('express');
var router = express.Router();
const {Pool} = require('pg');


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'production_info',
  password: '0973542136',
  port: 5432,
})

/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  res.render('index', { title: 'Express' });
});

router.get('/getdata', function(req, res, next) {
  pool.query('SELECT * FROM production', (err,response) => {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.send(response.rows);
    }
  })
});

router.get('/add', function(req, res, next) {
  res.render('add', { });
});
router.post('/add', function(req, res, next) {
  let id = req.body.id;
  let production_name = req.body.production_name;
  let production_price = req.body.production_price;
  let production_image = req.body.production_image;
  pool.query('INSERT INTO production (id,production_name,production_price,production_image) VALUES ($1,$2,$3,$4)',[id,production_name,production_price,production_image] ,(err,response) => {
    if(err)
    {
      console.log(err);
    }
    else
    {
      res.send('insert du lieu thanh cong'+id)
    }
  })
});

module.exports = router;
