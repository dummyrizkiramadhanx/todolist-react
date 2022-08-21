import * as yup from "yup";

const SchemaValidation = yup
  .object({
    nama: yup.string().required(),
    angkatan: yup.number().positive().integer().required().moreThan(2015),
    jurusan: yup.string().required(),
  })
  .required();

export default SchemaValidation;
