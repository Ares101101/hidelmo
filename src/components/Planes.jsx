const PlanesJsonPrueba = [
    {
        nombrePlan: "Plan Emprendedor",
        precio: "300",
        incluye: [
            "Calculo de los Impuestos a Pagar a SUNAT",
            "Declaración Mensual de SIRE",
            "Declaración Mensual de Compras y Ventas a SUNAT plataforma virtual 621",
            "Gestión, Manejo e Impresión de los Libros Contables obligados a llevar",
            "Gestión de Planilla de Trabajadores",
            "Declaración Mensual AFP",
            "Emision de boletas de pago del trabajdor",
            "Asesoría Permanente Vía WhatsApp",
            "Atención a fiscalizaciones y requerimientos de Sunat.",
            "Registro de operaciones económicas en software contable.",
            "Elaboración de liquidaciones de beneficios sociales a los trabajadores.",
            "Elaboración de contratos de trabajo."
        ],
        excluye: [
            "Elaboración de presupuestos y flujo de caja proyectado.",
            "Elaboración de Estados Financieros consolidados.",
            "Elaboración de Estados Financieros y notas.",
            "Planeamiento tributario.",
            "Auditoría y revisión de Estados Financieros.",
            "Auditoría interna y externa."
        ]
    },
    {
        nombrePlan: "Plan Vision",
        precio: "500",
        incluye: [
            "Calculo de los Impuestos a Pagar a SUNAT",
            "Declaración Mensual de SIRE",
            "Declaración Mensual de Compras y Ventas a SUNAT plataforma virtual 621",
            "Gestión, Manejo e Impresión de los Libros Contables obligados a llevar",
            "Gestión de Planilla de Trabajadores",
            "Declaración Mensual AFP",
            "Emision de boletas de pago del trabajdor",
            "Asesoría Permanente Vía WhatsApp",
            "Atención a fiscalizaciones y requerimientos de Sunat.",
            "Registro de operaciones económicas en software contable.",
            "Elaboración de liquidaciones de beneficios sociales a los trabajadores.",
            "Elaboración de contratos de trabajo.",
            "Elaboración de presupuestos y flujo de caja proyectado.",
            "Elaboración de Estados Financieros y notas.",
            "Elaboración de Estados Financieros consolidados."
        ],
        excluye: [
            "Planeamiento tributario.",
            "Auditoría y revisión de Estados Financieros.",
            "Auditoría interna y externa."
        ]
    },
    {
        nombrePlan: "Plan Empresarial",
        precio: "700",
        incluye: [
            "Calculo de los Impuestos a Pagar a SUNAT",
            "Declaración Mensual de SIRE",
            "Declaración Mensual de Compras y Ventas a SUNAT plataforma virtual 621",
            "Gestión, Manejo e Impresión de los Libros Contables obligados a llevar",
            "Gestión de Planilla de Trabajadores",
            "Declaración Mensual AFP",
            "Emision de boletas de pago del trabajdor",
            "Asesoría Permanente Vía WhatsApp",
            "Atención a fiscalizaciones y requerimientos de Sunat.",
            "Registro de operaciones económicas en software contable.",
            "Elaboración de liquidaciones de beneficios sociales a los trabajadores.",
            "Elaboración de contratos de trabajo.",
            "Elaboración de presupuestos y flujo de caja proyectado.",
            "Elaboración de Estados Financieros y notas.",
            "Elaboración de Estados Financieros consolidados.",
            "Planeamiento tributario.",
            "Auditoría y revisión de Estados Financieros.",
            "Auditoría interna y externa."
        ],

    }
]

export default function Planes() {
    return (
        <div className=" bg-[#1d3557] text-[#f3f8f2]">
            <h2 className=" text-center text-5xl py-8 font-bold">
                Nuestros Planes
            </h2>
            <article className=" m-8 flex-wrap flex gap-4">
                {
                    PlanesJsonPrueba.map((plan, i) => (
                        <div key={i} className="plan w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
                            <h5 className="mb-4 text-xl font-medium text-gray-500 ">{plan.nombrePlan}</h5>
                            <div className="flex items-baseline text-gray-900 ">
                                <span className="text-3xl font-semibold">S/</span>
                                <span className="text-5xl font-extrabold tracking-tight">{plan.precio}
                                </span>
                                <span className="ms-1 text-xl font-normal  ">mensual</span>
                            </div>
                            <ul role="list" className="space-y-5 my-7">
                                {
                                    plan.incluye.map((incluye, e) => (
                                        <li key={e} className="flex items-center">
                                            <svg className="flex-shrink-0 w-4 h-4 text-blue-700 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            <span className="text-base font-normal leading-tight text-gray-500  ms-3">{incluye}</span>
                                        </li>
                                    ))
                                }

                                {
                                    plan.excluye?.map((excluye, e) => (
                                        <li key={e} className="flex line-through decoration-gray-500">
                                            <svg className="flex-shrink-0 w-4 h-4 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                            </svg>
                                            <span className="text-base font-normal leading-tight text-gray-500 ms-3">{excluye  }</span>
                                        </li>
                                    ))
                                }


                            </ul>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200   font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Comprar plan</button>
                        </div>
                    ))
                }

            </article>

        </div>
    )
}