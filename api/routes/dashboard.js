const router = require("express").Router();

// dashboard route
router.get("/", (req, res) => {
  res.json({
    error: null,
    data: {
      message: 'You made it to the secure route',
      user: req.user,
      token: req.query.secret_token,
    },
  });
});

module.exports = router;
