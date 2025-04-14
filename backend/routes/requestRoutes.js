const express = require('express');
const { createRequest, getRequests, updateRequest, deleteRequest } = require('../controllers/requestController');

const router = express.Router();

// Routes for Request Management
router.post('/', createRequest); // Create a new request
router.get('/', getRequests); // Get all requests
router.put('/:id', updateRequest); // Update a specific request
router.delete('/:id', deleteRequest); // Delete a specific request

module.exports = router;
