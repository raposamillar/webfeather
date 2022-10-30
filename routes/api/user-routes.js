const router = require('express').Router;

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/users/:id 
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
  .route('/:userid/friends/:friendId')
  .post(createFriend)
  .delete(deleteFriend);  

module.exports = router;