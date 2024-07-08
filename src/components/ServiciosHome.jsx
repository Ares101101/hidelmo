
const Servicios = [
    {
        image: "plan-corporativo.webp",
        title: "Contabilidad",
        lista: [
            "✔ Servicios contables.",
            "✔ Presentaciones Tributarias.",
            "✔ Asesoría Contable – Tributaria.",
            "✔ Control Interno.",
            "✔ Preparación de Estados Financieros.",
            "✔ Declaración de Impuestos."
        ]
    },
    {
        image: "administracion.webp",
        title: "Administracion",
        lista: [
            "✔ Outsourcing Laboral y de Recursos Humanos.",
            "✔ Servicios Laborales y de Recursos Humanos.",
            "✔ Outsourcing Administrativo Financiero.",
        ]
    },
    {
        image: "reorganizacion.webp",
        title: "Reestructuracion y Liquidacion",
        lista: [
            "✔ Auditoria de Estados Financieros.",
            "✔ Auditoria Operativa.",
            "✔ Auditoria Tributaria.",
            "✔ Auditoria Interna.",
            "✔ Exámenes Especiales de Auditoria."
        ]
    },
    {
        image: "otras.webp",
        title: "Otras especiaidades",
        lista: [
            "✔ Asesoría Jurídica en lo Civil.",
            "✔ Asesoría ante Registros Públicos.",
            "✔ Asesoría ante Notarías."
        ]
    }
]

export default function ServiciosHome() {
    return (
        <section className=" bg-[#1d3557] text-[#f3f8f2]  font-bold">
            <h2 className=" text-center text-5xl py-8">
                Nuestros Servicios 
            </h2>
            <article className=" m-8 flex-wrap flex gap-8 justify-center">
                {Servicios.map(({ image, title, lista }, index) => (
                    <div
                        className=" min-w-64 max-w-96 flex flex-col justify-between card w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        key={index}
                    >
                        <article>
                            <a href="#">
                                <img className="rounded-t-lg" src={image} alt="" />
                            </a>
                            <div className="px-5 pt-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                </a>
                                <ul className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {lista.map((lista, i) => (
                                        <li key={i}>{lista}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                        <a
                            href="#"
                            className=" mb-4 mx-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Leer más
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                ))}

            </article>
        </section>
    )
}