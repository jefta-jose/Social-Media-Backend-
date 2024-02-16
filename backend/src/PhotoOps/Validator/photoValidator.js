import joi from 'joi';

export const photoValidator = (photo) => {
    const photoValidatorSchema = joi.object({
        PhotoID: joi.number().integer().required(),
        UserID: joi.number().integer().required(),
        PhotoURL: joi.string().required(),
        UploadDate: joi.date().required(),
    });
    return photoValidatorSchema.validate(photo);
};
