import Joi from 'joi'

const loginValidation = (data) => {
    const schema = Joi.object({
        phone: Joi.string()
            .min(6)
            .required(),
        password: Joi.string()
            .min(6)
            .max(1024)
            .required()
    })

    return schema.validate(data)
}

const signupValidation = (data) => {
    const schema = Joi.object({
        phone: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .min(6)
            .max(1024)
            .required(),
        first_name: Joi.string()
            .min(3)
            .max(255)
            .required(),
        last_name: Joi.string()
            .min(3)
            .max(255)
            .required(),
        sex: Joi.any()
            .valid(1, 2, 3)
            .required(),
        type: Joi.any()
            .valid(1, 2, 3)
            .required()
    })

    return schema.validate(data)
}

const pagesCreateValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string()
            .min(6)
            .max(255)
            .required(),
        about: Joi.string()
            .max(1024)
    })

    return schema.validate(data)
}

const wallPostValidation = (data) => {
    const schema = Joi.object({
        text: Joi.string()
            .min(1)
            .max(1024)
            .required()
    })

    return schema.validate(data)
}

const photosSaveValidation = (data) => {
    const schema = Joi.object({
        photo: Joi.string()
            .required()
    })

    return schema.validate(data)
}

export {
    loginValidation,
    signupValidation,
    pagesCreateValidation,
    wallPostValidation,
    photosSaveValidation
}