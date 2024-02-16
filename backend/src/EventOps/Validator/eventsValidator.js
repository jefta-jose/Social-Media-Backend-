import joi from 'joi';

export const eventValidator = (events) => {
    const eventValidatorSchema = joi.object({
        EventID: joi.number().integer().required(),
        EventName: joi.string().required(),
        Descri_ption: joi.string().required(),
        EventDate: joi.date().required(),
        Location: joi.string().max(100).required(),
        EventPosterURL: joi.string().required(),
    });

    return eventValidatorSchema.validate(events);
};