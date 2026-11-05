import { Link } from 'react-router-dom'
import Img1 from '../assets/Img1.png'
import Img2 from '../assets/Img2.png'
import Img3 from '../assets/Img3.png'
import Img4 from '../assets/Img4.png'

function Highlight() {
  const projects = [
    {id: 1,
      image: Img1,
      alt: 'Organc-img',
      title: 'Brand Journey Improvements',
      client: 'Organc',
      work: 'Branding  Logo design'
    },
    {id: 2,
      image: Img2,
      alt: 'FR-img',
      title: 'Brand Grouping',
      client: 'FR',
      work: 'Branding Logo design'
    },
    {id: 3,
      image: Img3,
      alt: 'Rumanda-img',
      title: 'NFT Glimps',
      client: 'Rumanda',
      work: 'NFT Design'
    },
    {id: 4,
      image: Img4,
      alt: 'T3d-img',
      title: 'Brand Suggestions',
      client: 'T3d',
      work: 'NFT logo'
    }
  ]

  return (
    <section className='py-40 bg-[#1A1A1A]'>
      <div className="c-container  text-center">
        <h1 className='text-6xl font-syne text-white mb-14'>My Projects Highlight</h1>

        <Link to="/project" className='text-white bg-transparent border-[#FF9142] border-2 py-4 px-7 rounded-4xl hover:bg-[#FF9142] hover:text-black active:opacity-80'>Explore More</Link>

        <div className='mt-20 text-start'>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {projects.map((project) => (
              <li key={project.id}>
                <img className='mb-8' src={project.image} alt={project.alt}/>

                <div className='flex items-center mb-5 md:mb-8'>
                  <h1 className='text-2xl text-white font-syne font-bold'>{project.title}</h1>
                  <div className='w-12 h-0.5 bg-[#FF9142] ml-8'></div>
                </div>

                <p className='text-[#606060] mb-2'>Client: <span className='text-white'>{project.client}</span></p>
                <p className='text-[#606060] mb-2'>Work: <span className='text-white'>{project.work}</span></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Highlight
