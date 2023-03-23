import * as yup from "yup";

const serializerAdmin = yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    createdAt: yup.string().required(),
    is_admin: yup.boolean().required(),
});

const serializerClient = yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    createdAt: yup.string().required(),
});


export { serializerAdmin, serializerClient }