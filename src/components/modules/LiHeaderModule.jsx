import { Link } from "react-scroll"
import cn from 'classnames'

const LiHeaderModule = ({item, index, openLi, setOpenLi}) => {

    const href = ["ourProjects", "work", "team", "cont"]
    // const href = ["about", "serv", "port", "cont"]

    return (
        <Link
            to={href[index]} 
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500}
            className={cn(
                'ms:w-full w-max flex justify-center items-center h-[49px]',
                ' ms:px-[15px] ms:h-[37px] duration-300',
                'hover:bg-c_gray-light hover:rounded-[6px] hover:duration-500'
            )}
        >
            <div
                className='w-max flex h-full items-center ms:px-[3px] px-[10px]' 
                onClick={() => setOpenLi(!openLi)}     
            >
                <li className='menuLi'>
                    {item}
                </li>
            </div>
        </Link>
    )
}

export default LiHeaderModule