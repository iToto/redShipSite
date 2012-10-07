
/*
 * GET home page.
 */

exports.index = function(req, res){
    console.log('Index Requested');
  res.render('index', { title: 'Red Ship Studios' });
};