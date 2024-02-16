import joi from 'joi';

export const messageValidator = (message) => {
    const messageValidatorSchema = joi.object({
        MessageID: joi.number().integer().required(),
        SenderID: joi.number().integer().required(),
        ReceiverID: joi.number().integer().required(),
        MessageDate: joi.date().iso().required(),
        Content: joi.string().required(),
    });
    return messageValidatorSchema.validate(message);
};
