const express = require('express');
const router = express.Router();
const userDocumentController = require('../controller/userDocumentController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    if (!ext) {
      // Fallback: get extension from mimetype (e.g., 'image/jpeg' -> 'jpg')
      const mime = file.mimetype.split('/');
      ext = mime[1] ? '.' + mime[1].replace('jpeg', 'jpg') : '.jpg';
    }
    cb(null, Date.now() + ext);
  }
});
const upload = multer({ storage });

router.get('/:userId', userDocumentController.getUserDocuments);
router.post('/aadhaar/:userId', upload.array('files', 2), userDocumentController.uploadDocument);
router.post('/:userId', upload.single('file'), userDocumentController.uploadDocument);
router.patch('/:userId/:docId/verify', userDocumentController.verifyDocument);

module.exports = router; 