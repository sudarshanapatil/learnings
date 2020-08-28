const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/test';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
const { Schema } = mongoose;
const userSchema = new Schema({
  userId: { type: String, required: true },
  viewDate: { type: Date, required: true },
  productId: { type: String, required: true },
});
const User = mongoose.model('User', userSchema);

const getCount = async (data) => {
  let { filter, startDate, endDate } = data;
  const queryArr = [];
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
      startDate = new Date(startDate);
      endDate = new Date(endDate);
      if (startDate > endDate) throw new Error('Invalid date');
    }
    if (filter === 'monthly') {
      const month = new Date().getMonth() + 1;
      queryArr.push({
        $project: {
          month: { $month: '$viewDate' },
          productId: '$productId',
          userId: '$userId',
        },
      }, { $match: { month } });
    } else {
      queryArr.push({
        $match: {
          viewDate: { $gte: startDate, $lte: endDate },
        },
      });
    }
    queryArr.push({
      $group: {
        _id: { productId: '$productId', userId: '$userId' }, // query to find total count
        count: { $sum: 1 },
      },
    }, {
      $group: { // query to find distinct count
        _id: {
          productId: '$_id.productId',
        },
        totalCount: { $sum: '$count' },
        distinctCount: { $sum: 1 },
      },
    });
    const data = await User.aggregate([
      queryArr,
    ]);
    const res = data.map((eachData) => ({
      productId: eachData._id.productId,
      totalCount: eachData.totalCount,
      distinctCount: eachData.totalCount,
    }));
    console.log(res);
  } catch (error) {
    console.log(error, 'Error in quering mongo');
  }
};
getCount({ filter: 'monthly', startDate: '20-02-2020', endDate: '09-12-2020' }); // filter:["daily","weekly","monthly","custom"] startDate/endDate:dd-mm-yyyy
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
