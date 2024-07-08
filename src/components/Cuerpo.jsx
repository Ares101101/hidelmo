import { useState } from "react"


export default function Cuerpo() {
    const datos = [
        {
            titulo: "Servicios Contables",
            cuerpo: "Con más de 8 años de experiencia en el campo de la contabilidad, ofrecemos servicios contables de alta calidad y personalizados para satisfacer las necesidades de nuestros clientes.",
            on: true
        },


    ]
    const [data, setData] = useState(datos)
    const cambiarmas = (index) => {
        newData = data.map((value, i) => { value.on= index === i })
        setData(newData)
    }
    const cambiarmenos = (index) => {
        newData = data.map((value, i) => { value.on= index === i })
        setData(newData)
    }
    return (

        <div className="text-[#f3f8f2] bg-center bg-cover min-h-80 bg-[url('/bg.webp')] bg-no-repeat h-[70vh] p-4  relative flex flex-col justify-between items-center" >
            <div className="absolute   w-full h-full top-0 left-0  z-0 "></div>
            <h1 className=" align-middle text-center  z-10 mt-4  font-bold text-5xl p-4 rounded-lg">Servicios Contables</h1>
            <h2 className=" max-w-2xl  z-10 text-2xl font-bold text-[#023047]  bg-white/50 backdrop-blur-xl p-4 rounded-lg ">
                Con más de 8 años de experiencia en el campo de la contabilidad, ofrecemos servicios contables de alta calidad y personalizados para satisfacer las necesidades de nuestros clientes.
            </h2>
            <section className="z-10 flex gap-4">
                <button className="hover:bg-[#fb8500] h-8 bg-[#ffb703] rounded-lg px-4 text-xl">
                    anterior
                </button>
                <button className="hover:bg-[#fb8500] h-8 bg-[#ffb703] rounded-lg px-4 text-xl ">
                    siguiente
                </button>
            </section>
        </div>
    )
}