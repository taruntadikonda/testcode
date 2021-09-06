var expres = require('express');
var useraction = expres();
var itemactions = require('./user_function')


useraction.post('/create', (req, res) => {
    itemactions.InsertItemData(req.body).then(result => {
        res.status(200).send({
            'status': 'success'
        })
    }).catch(err => {
        console.log(err);
        res.status(403).send(err);
    })
})



useraction.post('/update', (req, res) => {
    itemactions.UpdateItemData(req.body).then(result => {
        res.status(200).send({
            'status': 'success'
        })
    }).catch(err => {
        console.log(err);
        res.status(403).send(err);
    })
})

useraction.get('/update', (req, res) => {
    itemactions.UpdateItemData(req.body).then(result => {
        res.status(200).send({
            'status': 'success'
        })
    }).catch(err => {
        console.log(err);
        res.status(403).send(err);
    })
})


useraction.post('/list', (req, res) => {
    itemactions.SearchDateData(req.body['date']).then(result => {
        res.status(200).send({
            result
        })
    }).catch(err => {
        console.log(err);
        res.status(403).send(err);
    })
})

useraction.post('/search', (req, res) => {
    itemactions.SearchData(req.body['order_id']).then(result => {
        res.status(200).send({
            result
        })
    }).catch(err => {
        console.log(err);
        res.status(403).send(err);
    })
})

useraction.get('/search', (req, res) => {

    itemactions.SearchData(req.body['order_id']).then(result => {
        res.status(200).send({
            result
        })
    }).catch(err => {
        console.log(err);
        res.status(403).send(err);
    })
})


useraction.post('/delete', (req, res) => {
    itemactions.DeleteData(req.body['order_id']).then(result => {
        res.status(200).send({
            'status': 'Deleted'
        })
    }).catch(err => {
        console.log(err);
        res.status(403).send(err);
    })
})



module.exports = useraction