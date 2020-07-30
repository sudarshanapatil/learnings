var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/test';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
var Schema = mongoose.Schema;
var userSchema = new Schema({
    userId: { type: String, required: true },
    viewDate: { type: Date, required: true },
    productId: { type: String, required: true }
})
var User = mongoose.model('User', userSchema);

let getCount = async (data) => {
    let { filter, startDate, endDate } = data
    try {
        if (filter === 'daily') {
            startDate = new Date();
            endDate = new Date();
            startDate.setHours(0, 0, 0, 0);
            endDate.setHours(23, 59, 59, 999);
        }
        if (filter === 'weekly') {
            endDate = new Date();
            startDate = new Date();
            startDate.setDate(startDate.getDate() - new Date().getDay());
        }
        if (filter === 'custom') {
            startDate = new Date(startDate)
            endDate = new Date(endDate)
            if (startDate > endDate)
                throw new Error("Invalid date")
        }
        let queryArr = [];
        if (filter === "monthly") {
            let month = new Date().getMonth() + 1;
            queryArr.push({
                $project: {
                    month: { $month: '$viewDate' },
                    productId: '$productId',
                    userId: '$userId'
                }
            }, { $match: { month } })
        }
        else {
            queryArr.push({
                $match: {
                    viewDate: { $gte: startDate, $lte: endDate }
                }
            })
        }
        queryArr.push({
            $group: {
                "_id": { "productId": '$productId', userId: "$userId" },
                count: { $sum: 1 }
            }
        }, {
            $group: {
                "_id": {
                    "productId": "$_id.productId"
                },
                "totalCount": { "$sum": "$count" },
                "distinctCount": { "$sum": 1 }
            }
        })
        let data = await User.aggregate([
            queryArr
        ])
        let res = data.map(eachData => {
            return ({
                productId: eachData._id.productId,
                totalCount: eachData.totalCount, distinctCount: eachData.totalCount
            })
        })
        console.log(res);
    } catch (error) {
        console.log(error, "Error in quering mongo")
    }
}
getCount({ filter: "monthly", startDate: '20-02-2020', endDate: '09-12-2020' })
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

