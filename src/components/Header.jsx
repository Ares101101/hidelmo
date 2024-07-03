export default function Header (){
    return(
        <header className=" h-20 bg-[#666666] text-white font-bold flex items-center justify-between ">
            <a href="/" className=" text-5xl ">Hidelmos</a>
            <nav  className=" gap-2 flex [&>a]:px-4">
                <a href="">Inicio</a>
                <a href="">Sobre mí</a>
                <a href="">Galeria</a>
                <a href="">contacto</a> 
            </nav>
        </header>
    )
}