import joi from 'joi';


export const postValidator = (post) => {
    const postValidatorSchema = joi.object({
        PostID: joi.number().integer().required(),
        UserID: joi.number().integer().required(),
        Content: joi.string().required(),
        PostDate: joi.date().required(),
        Likes: joi.number().integer().required(),
        Comments: joi.number().integer().required(),
    });
    return postValidatorSchema.validate(post);
}