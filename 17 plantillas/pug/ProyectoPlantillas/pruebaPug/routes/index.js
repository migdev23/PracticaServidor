var express = require('express');
var router = express.Router();

router.get('/', async(req, res, next) => {
  const arr_img = [];

  const response_img1 =  await fetch('https://dog.ceo/api/breeds/image/random');
  const data_img1 = await response_img1.json();
  arr_img.push(data_img1.message);

  const response_img2 =  await fetch('https://dog.ceo/api/breeds/image/random');
  const data_img2 = await response_img2.json();
  arr_img.push(data_img2.message);

  res.render('index2', { title:'Express PUG', curso: 'DAW', nombre:'Miguel', fecha:new Date().toDateString(), arr_img});
});

module.exports = router;