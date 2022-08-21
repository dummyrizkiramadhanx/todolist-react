import React, { useEffect, useState } from "react";
import { get, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SchemaValidation from "../utils/schemaValidation";

const defaultValue = [
  { nama: "Rizki", angkatan: 2019, jurusan: "Teknik Informatika" },
];

const Todolist = () => {
  let getDataLocalStorage = JSON.parse(localStorage.getItem("key"));
  const [data, setData] = useState(getDataLocalStorage || []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaValidation),
  });

  const submitData = (submitData) => {
    setData([...data, submitData]);
    const xx = [...data, submitData];
    localStorage.setItem("key", JSON.stringify(xx));
  };

  console.log(data);

  const localSave = () => {
    localStorage.setItem("key", "value");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-red-100 w-96">
        <div className="bg-blue-400 rounded-md p-1 text-center">
          Ini adalah Daftar mahasiswa Cabul
        </div>
        <div className="bg-blue-300 rounded-md mt-2">
          <ul className="p-2 list-disc list-inside">
            {data[0] ? (
              data.map((e, i) => (
                <li key={i}>
                  {e.nama} || {e.angkatan} || {e.jurusan}
                </li>
              ))
            ) : (
              <p>Data tidak ada</p>
            )}
          </ul>
        </div>
        <div className="bg-blue-400 mt-2 rounded-md p-2">
          <div className="underline font-bold">Add list</div>
          <form className="mt-2" onSubmit={handleSubmit(submitData)}>
            <label className="mt-2" htmlFor="nama">
              Nama :
            </label>
            <input
              type="text"
              className="w-full rounded-md p-1 outline-none mt-2"
              name="nama"
              id="nama"
              {...register("nama")}
            />
            {errors.nama?.message}
            <label className="mt-2" htmlFor="angkatan">
              Angkatan :
            </label>
            <input
              type="text"
              id="angkatan"
              name="angkatan"
              className="w-full rounded-md p-1 outline-none mt-2"
              {...register("angkatan")}
            />
            {errors.angkatan?.message}
            <label htmlFor="jurusan" className="block">
              Jurusan :
            </label>
            <select
              name="jurusan"
              id="jurusan"
              className="rounded-md p-1 w-full outline-none"
              {...register("jurusan")}
            >
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Teknik Elektro">Teknik Elektro</option>
              <option value="Teknik Sipil">Teknik Sipil</option>
              <option value="Teknik Kimia">Teknik Kimia</option>
            </select>
            {errors.jurusan?.message}

            <button
              type="submit"
              className="bg-green-300 rounded-md mt-2 w-full p-1"
            >
              add
            </button>

            <button
              className="bg-green-300 rounded-md mt-2 w-full p-1"
              onClick={localSave}
            >
              local save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
