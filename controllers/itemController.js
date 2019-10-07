const Item = require('./../models/itemModel');

exports.getAllItem = async (req, res) => {
  const avg = await Item.aggregate([
    {
      $project: {
        price: 1,
        quantity: 1,
        total: { $multiply: ['$price', '$quantity'] }
      }
    },
    {
      $group: {
        _id: 'average',
        average: { $avg: '$total' }
      }
    }
  ]);
  res.status(200).json({
    status: 'success',
    data: avg
  });
};

exports.createItem = async (req, res) => {
  const newItem = await Item.create(req.body);

  res.status(200).json({
    status: 'success',
    data: newItem
  });
};
