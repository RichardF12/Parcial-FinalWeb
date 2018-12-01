var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST
router.post();

// DELETE
router.delete('/delete', async (req, res) => {
  { id } = Inv.find(req.params._id);
  await res.remove(id);
  res.redirect('/');
});
*/
module.exports = router;
