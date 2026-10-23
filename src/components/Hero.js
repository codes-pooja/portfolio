import img1 from '../assets/image1.png'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {

    const config = {
        subtitle:'I am a full stack developer and designer'
    }
    return <section className='flex flex-col md:flex-row px-5 py-32  bg-purple-600 justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl hero font-hero-font'>
                Hi, <br></br> I am <span className='text-black'> JI </span> Pooja Sri
                <p className='text-2xl '>{config.subtitle}</p>
            </h1>
            <div  className='flex  py-10' >
                <a href='#' className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
                <a href='#'className='pr-5  hover:text-white'><AiOutlineFacebook size={40} /></a>
                <a href='#' className=' hover:text-white'><AiOutlineLinkedin size={40} /></a>
            </div>
        </div>

        <img className=' md:w=1/3' src={img1} />
    </section>
}