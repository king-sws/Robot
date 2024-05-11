import { logo } from "../assets"
import { footerLinks } from "../contants"
import styles from "../style"

function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `} >
      <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full `} >
        <div className="flex-[1.5] flex flex-col justify-start mr-10 ">
          <img src={logo} alt=""  className="w-[266px] h-[72.14px] object-contain" />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] flex justify-between flex-row w-full ">
          {footerLinks.map((link)=>(
            <div key={link.title} className="">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white" > {link.title} </h4>
              <ul className="list-none mt-4" >
                {link.links.map((items , index)=>(
                  <li key={items.link} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== link.links.length ? "mb-4" : "mb-0" }`} >
                    {items.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer