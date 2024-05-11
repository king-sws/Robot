import styles from "../style"

const Button = ({items}) => {
  return (
    <button className={`${items} py-4 px-6 font-poppins font-medium rounded-[10px] text-primary bg-blue-gradient text-[18px]  `} > Get Started </button>  
  )
}

export default Button