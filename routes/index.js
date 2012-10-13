
/*
 * GET home page.
 */

exports.index = function(req, res){
    console.log('Index Requested');
    res.render('index', { title: 'Red Ship Studios' });
};

exports.games = function(req,res){
    console.log('Games Requested');
    res.render('games',{ title: 'Red Ship Studios - Our Games'});
};

exports.contact = function(req,res){
    console.log('Contact Requested');
    res.render('contact',{ title: 'Red Ship Studios - Contact Us'});
};

