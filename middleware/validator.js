const { body , validationResult } = require('express-validator')

exports.validate = () => {
    [
        body('id_card', 'Invalid ID card!').trim().isLength({min : 13, max : 13}),
        body('first_name', 'Invalid first name!').isLength({max : 64}).isAlpha().trim(),
        body('last_name', 'Invalid last name!').isLength({max : 64}).isAlpha().trim(),
        body('email', 'Invalid email!').isEmail().normalizeEmail().trim(),
        body('phone', 'Invalid phone number!').isMobilePhone().trim(),
        body('address', 'Invalid address!').isLength({max :256}).trim(),
        body('branch_name', 'Invalid branch name!').isLength({max :64}).isAlpha().trim(),
        body('branch_phone', 'Invalid phone number!').isMobilePhone().trim(),
        body('branch_address', 'Invalid address!').isLength({max :256}).trim(),
        body('error_description', 'Too long descrition!').isLength({max : 364}).trim(),
        body('part_reason', 'Too long reason!').isLength({max : 364}).trim(),
        body('part_des', 'Too long descrition!').isLength({max : 364}).trim(),
        body('receipt_number', 'Invalid receipt number!').isLength({max : 11}).isNumeric().trim(),
        body('credit_card_number', 'Invalid credit card').isLength({min : 16, max : 16}).isNumeric().trim(),
        body('e_reason', 'Too long reason!').isLength({max : 364}).trim(),
        body('comment', 'Too long comment!').isLength({max : 364}).trim(),
    ], (req, res, next) => {
        const errors  = validationResult(req)
    
        if (!errors.isEmpty()) {
                return res.status(400).json({ 
                errors: errors.array() 
                });
        }
        else if (!req.body) {
                return res.status(400).send({
                message: "Content can not be empty!"
                })
            }
        else{
            return next()
        }}
    }        