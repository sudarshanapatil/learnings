var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/test';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
var Schema = mongoose.Schema;
// create a schema
var userSchema = new Schema({
    userId: String,
    viewDate: Date,
    productId: { type: String, required: true }
})
var User = mongoose.model('User', userSchema);

let getCount = async (data) => {
    let { filter, productId, month, startDate, endDate } = data
    try {
        switch (filter) {
            //finds data for current day
            case "daily":
                {
                    var start = new Date();
                    start.setHours(0, 0, 0, 0);
                    var end = new Date();
                    end.setHours(23, 59, 59, 999);
                    let data = await Promise.all([User.find({ viewDate: { $gte: start, $lte: end }, productId }),
                    User.find({ viewDate: { $gte: start, $lte: end }, productId }).distinct("userId")])
                    let res = { count: data[0].length, uniqueCount: data[1].length }
                    console.log(res);
                    break;
                }
            case "weekly": {
                //get data for current week
                let today = new Date();
                var oneWeekAgo = new Date();
                oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
                let data = await Promise.all([User.find({ viewDate: { $gte: oneWeekAgo, $lte: today }, productId }),
                User.find({ viewDate: { $gte: oneWeekAgo, $lte: today }, productId }).distinct("userId")])
                let res = { count: data[0].length, uniqueCount: data[1].length }
                console.log(res);
                break;
            }
            case "monthly": {
                let userCount = User.aggregate(
                    [{
                        $project: {
                            month:
                                { $month: '$viewDate' },
                            productId: '$productId',
                            userId: '$userId'

                        }
                    },
                    { $match: { month: 7, productId: "Product-1" } },
                    ]
                );

                let uniqueCount = User.aggregate(
                    [{
                        $project: {
                            month:
                                { $month: '$viewDate' },
                            productId: '$productId',
                            userId: '$userId'

                        }
                    },
                    { $match: { month: month, productId } },
                    {
                        $group: {
                            _id: "$userId"
                        }
                    }]
                );
                let data = await Promise.all([userCount, uniqueCount])
                let res = {
                    count: data[0].length,
                    uniqueCount: data[1].length
                }
                console.log(res)
                break
            }

            case "custome": {
                let data = await Promise.all([User.find({ viewDate: { $gte: startDate, $lte: endDate }, productId }),
                User.find({ viewDate: { $gte: startDate, $lte: endDate }, productId }).distinct('userId')])
                let res = { count: data[0].length, uniqueCount: data[1].length }
                console.log(res);
                break;
            }
        }
    } catch (error) {
        console.log(error, "Error in quering mongo")
    }
}

//for daily
getCount({ filter: "daily", productId: 'Product-1' })
//for weekly
getCount({ filter: "weekly", productId: 'Product-1' })
//for monthly
getCount({ filter: "monthly", productId: 'Product-1', month: 7 })
//for custome filter
getCount({ filter: "custome", productId: 'Product-2', startDate: '2015-07-30', endDate: '2020-04-30' })

//To imsert data
let insertData = (userId, viewDate, productId) => {
    let rawData = [
        {
            userId: 10,
            productId: 'Product-1',
            viewDate: new Date()
        },
        {
            userId: 10,
            productId: 'Product-2',
            viewDate: new Date()
        },
        {
            userId: 11,
            productId: 'Product-1',
            viewDate: '2020-04-23T06:12:00.166Z'
        }
    ]
    User.insertMany()

}

//get all data
async function findAll() {
    const all = await User.find();
    console.log(all)
}
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

