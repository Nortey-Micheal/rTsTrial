type link = {
    label: string,
    address: string
}

type navbarProps = {
    links: link[],
    image: string
}

export function Navbar({links,image}: navbarProps) {
    return (
        <nav className="flex bg-cyan-600 justify-between px-10 py-3">
            <img src={image} alt="" />
            <ul className="flex gap-10">
                {links.map((link,index) => {
                    return (
                        <li className="text-lg bg-amber-300 w-24 text-center py-1 hover:bg-amber-800 hover:cursor-pointer hover:text-amber-100 rounded" key={index}><a className="w-full" href={link.address} >{link.label}</a></li>
                    )
                })}
            </ul>
        </nav>
    )
}