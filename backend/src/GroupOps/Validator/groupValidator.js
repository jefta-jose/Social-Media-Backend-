import joi from 'joi';

export const groupValidator = (group) => {
    const groupValidatorSchema = joi.object({
        GroupID: joi.number().integer().required(),
        GroupName: joi.string().max(255).required(),
        Description: joi.string(),
        CreatedDate: joi.date().iso().required(),
    });

    return groupValidatorSchema.validate(group);
};
