import joi from 'joi';


export const userValidator = (user) => {
    const userValidatorSchema = joi.object({
        UserID: joi.number().integer().required(),
        Username: joi.string().required(),
        Email: joi.string().email().required(),
        Password: joi.string().required(),
        TagName: joi.string().max(50),
        Location: joi.string().max(100).required(),
    });
    return userValidatorSchema.validate(user);
}

export const userLoginValidator = (user) => {
    const userLoginValidatorSchema = joi.object({
        Username: joi.string().required(),
        Password: joi.string().min(4).required(),
    });
    return userLoginValidatorSchema.validate(user);
}