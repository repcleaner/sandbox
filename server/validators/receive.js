const Joi = require('joi');

const schema = Joi.object().keys({
   email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().min(6).max(50).required()
});

const validate = (data) => {
   const result = Joi.validate(data, schema);
   return result;
};

module.exports = validate;