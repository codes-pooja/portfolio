import resume from '../assets/resume.png';

export default function Resume() {
    return (
        <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
            <div className='md:w-1/2 py-5'>
                <img src={resume} width={500} alt='Resume' />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl text-white border-b-4 mb-5 w-[140px] font-bold'>Resume</h1>
                    <p className='text-white pb-5'>
                        You can view my resume <a className='btn' href='#'>Download</a>
                    </p>
                </div>
            </div>
        </section>
    );
}