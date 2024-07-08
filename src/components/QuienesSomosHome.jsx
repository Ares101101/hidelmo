export default function QuienesSomosHome() {
    return (
        <article className=" flex flex-col">
            <h2 className=" py-8 text-center  text-5xl font-bold text-gray-800 ">
                ¿Quienes Somos? 
            </h2>
            <article className=" m-8">
                <div className=" w-full p-6  bg-white border border-gray-200 rounded-lg shadow ">
                    <a href="#">
                        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Nombre de la Empresa</h3>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                        Leer más
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </article>
        </article>

    )
}