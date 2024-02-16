import joi from 'joi';

export const eventAttendeeValidator = (event) => {
    const eventAttendeeValidatorSchema = joi.object({
        EventID: joi.number().integer().required(),
        AttendeeID: joi.number().integer().required(),
    });

    return eventAttendeeValidatorSchema.validate(event);
};
