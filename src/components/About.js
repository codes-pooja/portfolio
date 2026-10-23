import img2 from '../assets/image2.png';
export default function About() {
    const config={
        line1:'I am a passionate B.Sc. Computer Science student interested in web development and emerging technologies.',
        line2:'I have basic knowledge of HTML, CSS, and JavaScript and am currently learning React and full-stack development.',
        line3:'I enjoy building creative projects, learning new skills, and developing innovative solutions to real-world problems.'
    }
    return <section id='about' className='flex flex-col md:flex-row bg-secondary px-5 '>
        <div className=' md:w-1/2 py-5 '>
            <img src={img2} width={500} />
        </div>
        <diV className=' md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl text-white  border-b-4 mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='text-white pb-5'> </p>
                <p className='text-white pb-5' > </p>
                <p className='text-white' pb-5></p>
            </div>

        </diV>
    </section>
}