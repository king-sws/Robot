import { apple, bill, google } from "../assets"
import styles, { layout } from "../style"

function Billing() {
  return (
    <section id="product" className={`${layout.sectionReverse}`} >
      <div className={`${layout.sectionImgReverse}`} >
        <img src={bill} alt="B" className="w-[100%] h-[100%] relative z-10 " />

        {/* Color */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* Color */}
      </div>
      <div className="">
        <h2 className={styles.heading2} >
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.</p>
      
      <div className="flex flex-row cursor-pointer mt-5 gap-2">
        <img src={apple} alt="" />
        <img src={google} alt="" />
      </div>
    </div>
    </section>
  )
}

export default Billing