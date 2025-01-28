type navbarLink = {
    label:string,
    address: string
}

type navbarProps = {
    links: navbarLink[],
    image: string,

}

export function Navbar({ links,image }:navbarProps) {
    return (
        <nav className="px-12 flex w-full justify-between bg-cyan-600">
            <img src={image} alt="" />
            <ul className="flex gap-10 p-4">
                {links.map((link,index) => {
                    return (
                    <li className="bg-amber-200 px-4 rounded text-lg hover:bg-amber-800" key={index}><a href={link.address}> {link.label}</a>
                    </li>
                    )
                })}
            </ul>
       </nav>
    )    
}