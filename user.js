module.exports = function(req, res) {
    console.log(req.params)
    res.send({params: req.params})
}
