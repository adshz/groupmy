exports.create = (req, res) => {
	res.render('pages/create', {title : 'Create Page'});
};

exports.welcome = (req, res) => {
	res.render('pages/welcome', {title : 'Welcome'});
};

exports.new = (req, res) => {
    res.render('subscriptions/new', { title: 'New Subscription' });
};