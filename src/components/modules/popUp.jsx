import close from "../../assets/icon/closePop.svg"

const PopUp = ({setOpen, background, children}) => {
    
    return (
        <div className={`${background} pt-[90px] fixed top-0 z-50 w-full h-[100vh]`}>
            <div className="w-full flex justify-end items-center">
                <div 
                    className={`flex justify-center items-center w-[30px] h-[30px] hover:scale-75 duration-500 mr-[25px]`} 
                    onClick={() => setOpen(false)}
                >
                    <img className="flex" src={close} alt="close" />
                </div>
            </div>
            <div className="xl:px-[140px] px-[50px] h-full mb-[100px] overflow-y-scroll">
                {children}
            </div>
        </div>
    )
}

export default PopUp