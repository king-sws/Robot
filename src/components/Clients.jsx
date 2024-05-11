import { clients } from "../contants"
import styles from "../style"

function Clients() {
  return (
    <section id="client" className={`${styles.flexCenter} my-4`} >
      <div className={`${styles.flexCenter} flex-wrap w-full`} >
        {clients.map((items,index)=>(
          <div key={index} className={`m-5`} >
            <img src={items.logo} alt="" className="w-[100px] sm:w-[192px] " />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients