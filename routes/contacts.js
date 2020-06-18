const express = require('express');
const router = express.Router();

//Signature for each route

//@route    GET api/contacts
//@desc     Get all user contacts
//@access   Public
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

//@route    POST api/contacts
//@desc     Add new user
//@access   Private
router.get('/', (req, res) => {
  res.send('Add contact');
});

//@route    PUT api/contacts/:id
//@desc     Update contact
//@access   Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

//@route    DELETE api/contacts/:id
//@desc     Delete contact
//@access   Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

module.exports = router;
