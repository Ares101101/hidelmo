import LogoHidelmo from "./Hidelmo";

export default function Header (){
    return(
        <header className=" h-20 bg-[#1d3557] text-[#f3f8f2] font-bold flex items-center justify-between ">
            <a href="/" className=" text-5xl  text-center align-middle truncate">
                <LogoHidelmo className="w-16 inline mx-4"/>
                Hidelmo
            </a>
            <nav  className="gap-2 flex [&>a]:px-4 [&>a]:min-h-8 text-center mr-4">
                <a href="" className="flex items-center   truncate hover:rounded hover:bg-white/50 hover:backdrop-blur-xl">Inicio</a>
                <a href="" className="flex items-center truncate hover:rounded hover:bg-white/50  hover:backdrop-blur-xl">Sobre mí</a>
                <a href="" className="flex items-center truncate hover:rounded hover:bg-white/50 hover:backdrop-blur-xl">Galeria</a>
                <a href="" className="flex items-center truncate hover:rounded hover:bg-white/50 hover:backdrop-blur-xl">Contacto</a> 
            </nav>
        </header>
    )
}