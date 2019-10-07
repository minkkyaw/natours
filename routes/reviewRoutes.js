const express = require('express');
const authController = require('./../controllers/authController');
const reviewController = require('./../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewController.createReview
  );

router
  .route('/:id')
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    reviewController.setTourUserIds,
    reviewController.deleteReview
  )
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    reviewController.updateReview
  );

module.exports = router;
