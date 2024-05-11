import { discount, robot } from "../assets"
import styles from "../style"
import GetStarted from "./GetStarted"

const Hero = () => {
  return (
    <section className={`${styles.paddingY} flex flex-col md:flex-row`} id="home">
      <div className={`${styles.flexStart} flex-col px-6 flex-1 sm:px-16 xl:px-0 `} >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]" >
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient" >Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted/>
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]" >
           Payment Method.
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px] `} >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className="relative">
        <img src={robot} alt="R"  className="w-[100%] h-[100%] relative z-[5]" />

        {/* Color */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />        <div className="absolute w-[] h-[]   " />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* Color */}
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero