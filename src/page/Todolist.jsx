import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const defaultValue = [
  { nama: "Rizki", angkatan: 2019, jurusan: "Teknik Informatika" },
];

const Todolist = () => {
  const [data, setData] = useState(defaultValue);

  const { register, handleSubmit } = useForm();

  const submitData = (submitData) => {
    setData([...data, submitData]);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-red-100 w-96">
        <div className="bg-blue-400 rounded-md p-1 text-center">
          Ini adalah Daftar mahasiswa Cabul
        </div>
        <div className="bg-blue-300 rounded-md mt-2">
          <ul className="p-2 list-disc list-inside">
            {data.map((e, i) => (
              <li key={i}>
                {e.nama} || {e.angkatan} || {e.jurusan}
              </li>
            ))}
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

            <button
              type="submit"
              className="bg-green-300 rounded-md mt-2 w-full p-1"
            >
              add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
