import joi from 'joi';


export const commentValidator = (user) => {
    const commentValidatorSchema = joi.object({
        CommentID: joi.number().integer().required(),
        PostID: joi.number().integer().required(),
        UserID: joi.number().integer().required(),
        CommentDate: joi.date().required(),
        Content: joi.string().required(),
    });
    return commentValidatorSchema.validate(user);
}