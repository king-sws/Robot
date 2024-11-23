import { features } from "../contants"
import styles, { layout } from "../style"
import Button from './Button'

const Business = () => {
  const FC = ({icon , content , title , index}) =>(
    <div className={`feature-card rounded-[20px] p-6 flex flex-row ${index === features.length ? "mb-6" : "mb-0"}`} >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`} >
        <img src={icon} alt="" className="w-[50%] h-[50%] object-contain" />
      </div>
        <div className="flex flex-col ml-3 flex-1 ">
          <h4 className='font-poppins font-semibold text-[18px] text-white leading-[23.4px] mb-1 ' >
             {title} 
          </h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]" > 
            {content} 
          </p>
        </div>
    </div>
  )
  return (
    <section id="features" className={`${layout.section}  `} >
      <div className={`${layout.sectionInfo}`} >
        <h2 className={`${styles.heading2} `} >
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `} >
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button items={'mt-5'} />
      </div>

      <div className={`${layout.sectionImg} flex-col`} >
        {features.map((link,index)=>(
          <FC {...link} key={index} />
        ))}
      </div>

    </section>
  )
}

export default Business