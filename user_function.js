const { MongoClient } = require('mongodb');
const connectionstring = 'mongodb://localhost:27017/eCommerce';
const client = new MongoClient(connectionstring);


client.connect();
const collection = client.db().collection('orderitems');



const userfunction = {

}

userfunction.InsertItemData = function (item) {
    return new Promise((resolve, reject) => {
        try {
            collection.findOne({ 'order_id': item['order_id'] }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    if (data === null) {
                        collection.insertOne(item, (err, data) => {
                            if (err) {
                                reject(err)
                            } else {
                                resolve()
                            }
                        })
                    } else {
                        reject({ 'error': 'Duplicate Insertion' });
                    }
                }
            })
        } catch (err) {
          //
            console.log(err)
            reject(err)
        }
    })
}


userfunction.UpdateItemData = function (item) {
    return new Promise((resolve, reject) => {
        try {
            collection.findOne({ 'order_id': item['order_id'] }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    if (data) {
                        var newvalues = {
                            $set: item
                        }
                        collection.updateOne({ 'order_id': item['order_id'] }, newvalues, { upsert: true }, (err, data) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve()
                            }
                        })
                    } else {
                        reject({ 'error': 'No Record Found' });
                    }
                }
            })
        } catch (err) {
            reject(err);
        }

    })
}


userfunction.SearchData = function (orderid) {
    return new Promise((resolve, reject) => {

        try {

            collection.findOne({ 'order_id': orderid }, (err, data) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        } catch (err) {
            reject(err);
        }

    })
}

userfunction.SearchDateData = function (date) {
    return new Promise((resolve, reject) => {

        try {
            collection.findOne({ 'delivery_date': date, 'order_date': date }, (err, data) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve(data);
                }
            })
        } catch (err) {
            reject(err);
        }

    })
}


userfunction.DeleteData = function (orderid) {
    return new Promise((resolve, reject) => {

        try {
            collection.findOneAndDelete({ 'order_id': orderid }, (err, data) => {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    resolve();
                }
            })
        } catch (err) {
            reject(err);
        }

    })
}



module.exports = userfunction;