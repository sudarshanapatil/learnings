var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/test';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
var Schema = mongoose.Schema;
var userSchema = new Schema({
    userId: String,
    viewDate: Date,
    productId: { type: String, required: true }
})
var User = mongoose.model('User', userSchema);

let getCount = async (data) => {
    let { filter, startDate, endDate } = data
    try {
        if (filter == "daily" || filter == "weekly" || filter == "custom") {
            if (filter === 'daily') {
                startDate = new Date();
                endDate = new Date();
                startDate.setHours(0, 0, 0, 0);
                endDate.setDate(endDate.getDate() + 1);
                endDate.setHours(23, 59, 59, 999);
            }
            if (filter === 'weekly') {
                let day=new Date().getDay()
                endDate = new Date();
                startDate = new Date();
                startDate.setDate(startDate.getDate() - new Date().getDay());
            }
            console.log(startDate, endDate)
            let totalCount = await User.aggregate([
                {
                    $match: {
                        viewDate: { $gte: startDate, $lte: endDate }
                    }
                },
                {
                    $group: {
                        "_id": '$productId',
                        totalCount: { $sum: 1 }
                    }
                }
            ])
            console.log(totalCount);
        }
        if (filter === "monthly") {
            let month = new Date().getMonth() + 1;
            let userCount = await User.aggregate(
                [{
                    $project: {
                        month:{ $month: '$viewDate' },
                        productId: '$productId',
                        userId: '$userId'
                    }
                },
                { $match: { month } },
                {
                    $group: {
                        "_id": { 'prod': '$productId', 'user': '$userId' },
                        totaldocs: { $sum: 1 }
                    }
                }
                ]
            );
            console.log(userCount)
        }
    } catch (error) {
        console.log(error, "Error in quering mongo")
    }
}


getCount({ filter: "daily", startDate: 'Product-1', endDate: '' })


//To insert data
let insertData = (userId, viewDate, productId) => {
    let rawData = [
        {
            userId: 12,
            productId: 'Product-1',
            viewDate: new Date()
        },
        {
            userId: 12,
            productId: 'Product-2',
            viewDate: new Date()
        },
        {
            userId: 12,
            productId: 'Product-3',
            viewDate: new Date()
        }
    ]
    User.insertMany(rawData)

}
// insertData()

//get all data
async function findAll() {
    const all = await User.find();
    console.log(all)
}

// findAll()
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

