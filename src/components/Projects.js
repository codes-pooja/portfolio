import ec1 from '../assets/ec1.png';
import ec2 from '../assets/ec2.png';
import ec3 from '../assets/ec3.png';

export default function Projects() {

    const config = {
        projects: [
            {
                image: ec1,
                description: 'A ceative Ecommerce website build with mern stack technology',
                link: 'https://github.com/codes-pooja/portfolio.git'
            },
            {
                image: ec2,
                description: 'A Ecommerce website build with full stack',
                link: 'https://github.com/codes-pooja/portfolio.git'
            },
            {
                image: ec3,
                description: 'A Ecommerce website build with next jsk',
                link:'https://github.com/codes-pooja/portfolio.git'
            }
        ]
    }
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center  bg-purple-600  text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className='text-4xl text-white  border-b-4 border-secondary mb-5 w-[140px] font-bold'>Projects</h1>
                <p>These are some of my best projects. I built it with react and some technologies</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-5 gap-20'>
                {config.projects.map((project) => (

                    <div className='relative'>
                        <img className='h-[200px]' src={project.image} />
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'> {project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View project</a>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    </section>
}