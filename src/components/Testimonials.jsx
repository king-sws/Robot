import { feedback } from "../contants"
import styles from "../style"
import FC from "./FC"

function Testimonials() {
  return (
    <section id="client" className={`flex-col ${styles.paddingY} ${styles.flexCenter} `} >
      <div className="flex justify-between items-center w-full md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2} >
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <p className={`${styles.paragraph} max-w-[450px]  `} >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((items)=>
        <FC {...items} key={items.id} />
        )}
      </div>
    </section>
  )
}

export default Testimonials