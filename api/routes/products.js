const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requets to /products",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Handling POST requets to /products",
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "You discovered the special ID",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "You passed ID",
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Update products!",
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Delete products!",
  });
});
module.exports = router;
