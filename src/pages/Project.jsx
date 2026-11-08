import PageHero from "../components/PageHero";
import Img1 from '../assets/projects/Img1.png'
import Img2 from '../assets/projects/Img2.png'
import Img3 from '../assets/projects/Img3.png'
import Img4 from '../assets/projects/Img4.png'
import Img5 from '../assets/projects/Img5.png'
import Img6 from '../assets/projects/Img6.png'
function Project() {
  return (
    <>
    <section className="bg-[#1A1A1A] py-12 sm:py-16 lg:py-25">
      <div className="c-container">
        <PageHero title='Project Detail' desc='Details About The Porject'/>

        <div className="py-12 sm:py-16 lg:py-28">
          <img src={Img1} alt="Image" className="w-full h-auto object-cover"/>

          <div className="py-12 sm:py-16 lg:py-20 max-w-3xl mx-auto">
            <h3 className="font-bold font-syne text-white text-3xl sm:text-4xl mb-5 sm:mb-7">Project Story</h3>
          <p className="text-sm sm:text-base text-[#9CA7B8] leading-relaxed">The fact that photography has different meanings to different people is one of the many components of its appeal. Photography is such an important part of our life that it is now very difficult to imagine the world without it. 
            <br /> <br />
          We cannot imagine a wedding without the opportunity to capture it on film, we would not be able to remember the growing up of children or the holidays if we did not have pictures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <img src={Img2} alt="Image" className="w-full h-auto object-cover"/>
            <img src={Img3} alt="Image" className="w-full h-auto object-cover"/>
          </div>

          <div className="py-12 sm:py-16 lg:py-20 max-w-3xl mx-auto">
            <h3 className="font-bold font-syne text-white text-3xl sm:text-4xl mb-5 sm:mb-7">Day One</h3>
          <p className="text-sm sm:text-base text-[#9CA7B8] leading-relaxed">Everywhere we are haunted by photography in newspapers, magazines, advertisements on television on the Internet, but we still crave even more. 
            <br /><br />
          And what helps to achieve a good result? We will look at these issues and some of the possibilities of photography and explain that it is a combination of thought imagination, visual design, technical skills and organizational skills</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold font-syne text-4xl sm:text-5xl lg:text-6xl mb-10 sm:mb-14 lg:mb-20 text-center text-white">Other Projects</h1>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
            <li>
              <img className="w-full h-auto mb-5 sm:mb-7" src={Img4} alt="image"/>
              <h5 className="font-semibold text-white text-xl sm:text-2xl">Logo Project 1</h5>
              <p className="text-[#949494] mt-2">Branding</p>
            </li>
            <li>
              <img className="w-full h-auto mb-5 sm:mb-7" src={Img5} alt="image"/>
              <h5 className="font-semibold text-white text-xl sm:text-2xl">Logo Project 2</h5>
              <p className="text-[#949494] mt-2">Branding</p>
            </li>
            <li>
              <img className="w-full h-auto mb-5 sm:mb-7" src={Img6} alt="image"/>
              <h5 className="font-semibold text-white text-xl sm:text-2xl">Logo Project 3</h5>
              <p className="text-[#949494] mt-2">Branding</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </>
  )
}

export default Project