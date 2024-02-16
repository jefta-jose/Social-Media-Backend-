import joi from 'joi';

export const groupMemberValidator = (groupmember) => {
    const groupMemberValidatorSchema = joi.object({
        GroupID: joi.number().integer().required(),
        MemberID: joi.number().max(255).required(),
    });

    return groupMemberValidatorSchema.validate(groupmember);
};
