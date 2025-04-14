const Request = require('../models/request');

// Create a new request
exports.createRequest = async (req, res) => {
  try {
    const { title, description, clientId } = req.body;
    const request = new Request({ title, description, clientId });
    await request.save();
    res.status(201).json({ message: 'Request created successfully', request });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all requests
exports.getRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate('clientId', 'name email');
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a request
exports.updateRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRequest = await Request.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedRequest) return res.status(404).json({ message: 'Request not found' });
    res.status(200).json({ message: 'Request updated successfully', updatedRequest });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a request
exports.deleteRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRequest = await Request.findByIdAndDelete(id);
    if (!deletedRequest) return res.status(404).json({ message: 'Request not found' });
    res.status(200).json({ message: 'Request deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
