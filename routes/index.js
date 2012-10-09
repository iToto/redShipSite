
/*
 * GET home page.
 */

exports.index = function(req, res){
    console.log('Index Requested');
    res.render('index', { title: 'Red Ship Studios' });
};

exports.about = function(req,res){
    console.log('About Requested');
    res.render('about',{ title: 'Red Ship Studios - About'});
};