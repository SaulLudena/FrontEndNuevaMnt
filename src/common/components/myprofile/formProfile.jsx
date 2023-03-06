const styles = {
  inputGroup: 'flex justify-between padding items-center',
}
export default function FormProfile() {
  return (
    <form className="">
      <div>
        <div className="bg-white">
          <img
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            alt="portada"
            className="w-full h-60 object-cover rounded-xl opacity-20 shadow-2xl"
          />
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-5  -translate-y-10 px-10">
            <div>
              <img
                src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
                alt="portada"
                className="w-40 object-cover rounded-full border-[7px] border-[#F7F7F7]"
              />
            </div>
            <div className="grid items-center">
              <div>
                <h1 className="text-3xl font-bold">Jeff Blas</h1>
                <h1 className="text-lg">Mr Jeff</h1>
              </div>
            </div>
          </div>
          <div className=" mt-3 flex items-start gap-5">
            <button className="px-3 py-2 bg-white">Cancelar</button>
            <button className="px-3 py-2 bg-black text-white">Guardar</button>
          </div>
        </div>
      </div>
      <div className=" w-2/3 grid gap-3">
        <div className={styles.inputGroup}>
          <p className="font-medium">Nombre</p>
          <input type="text" value="Jeff Blas" className="border px-4 py-3 outline-none rounded-lg border-gray-200" />
        </div>
        <hr />
        <div className={styles.inputGroup}>
          <p className="font-medium">Apellido</p>
          <input type="text" value="Ascencios" className="border px-4 py-3 outline-none rounded-lg border-gray-200" />
        </div>
        <hr />
        <div className={styles.inputGroup}>
          <p className="font-medium">Apodo</p>
          <input type="text" value="Pep" className="border px-4 py-3 outline-none rounded-lg border-gray-200" />
        </div>
        <hr />
        <div className={styles.inputGroup}>
          <p className="font-medium">Foto perfil de usuario</p>
          <div className="border-2 borde-black">
            <img
              src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
              alt="portada"
              className="w-10 object-cover rounded-full border-[7px] border-[#F7F7F7]"
            />
          </div>
        </div>
        <hr />
      </div>
    </form>
  )
}
