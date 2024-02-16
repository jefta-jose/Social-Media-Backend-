import joi from 'joi';

export const FriendshipValidator = (friendship) => {
    const FriendshipValidatorSchema = joi.object({
        FriendshipID: joi.number().integer().required(),
        User1ID: joi.number().integer().required(),
        User2ID: joi.number().integer().required(),
        FriendshipDate: joi.date().required(),
    });
    return FriendshipValidatorSchema.validate(friendship);
};
