import { arrowUp } from "../assets"
import styles from "../style"

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} rounded-full w-[100%] h-[100%] bg-black flex-col `} >
            <div className={`${styles.flexStart} flex-row gap-2`} >
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Get</span>
            </p>
                <img src={arrowUp} alt="H" className="w-[23px] h-[23px] object-contain"/>
            </div>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                <span className="text-gradient">Started</span>
            </p>
        </div>
    </div>
  )
}

export default GetStarted
