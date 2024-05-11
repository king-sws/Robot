import { quotes } from "../assets";


const FC = ({ content, name, title, img }) => (
    <div className="flex flex-col justify-between max-w-[340px] rounded-[20px] px-10 py-12 md:mr-5 mr-0 my-5 feedback-card">
        <img src={quotes} alt="H" className='w-[42.6px] h-[27.6px] object-contain' />
        <p className='font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10' > {content} </p>
        <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
                <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite' >
                    {title}
                </p>
            </div>
        </div>
    </div>
  )

export default FC