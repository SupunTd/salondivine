const router = require("express").Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
const { Cart, validate } = require("../models/cart");


let cartItems = [];

router.use(bodyParser.json());

// GET /api/cart
router.get('/', (req, res) => {
    res.send(cartItems);
});

// POST /api/cart
router.post('/', async (req, res) => {
    const item = req.body;
    cartItems.push(item);
    const { error } = validate(item);
    if (error) return res.status(400).send(error.details[0].message);
    res.send('Item added to now available');

    const cart = await new Cart({
        userId: item._id,
        name: item.name
    }).save();

    await cart.save();
    res.send(cart);
});

module.exports = router;
