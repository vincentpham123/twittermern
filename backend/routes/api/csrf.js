const router = express.Router();

/* GET users listing. */
const { isProduction } = require('../../config/keys');

if (!isProduction) {
  // In development, allow developers to access the CSRF token to test the
  // server endpoints in Postman.
  router.get("/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.status(200).json({
      'CSRF-Token': csrfToken
    });
  });
}

module.exports = router;
