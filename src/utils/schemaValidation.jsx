import * as yup from "yup";

const SchemaValidation = yup
  .object({
    nama: yup.string("harus berupa string").required("harus diisi"),
    angkatan: yup
      .number("harus berupa angka")
      .positive("harus bernilai positif")
      .integer("harus berupa angka")
      .required("kolom ini harus diisi")
      .moreThan(2015, "harus lebih dari 2015"),
    jurusan: yup
      .string("harus berupa string")
      .required("kolom ini harus diisi"),
  })
  .required();

export default SchemaValidation;
