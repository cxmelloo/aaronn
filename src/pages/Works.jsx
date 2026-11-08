import PageHero from "../components/PageHero";
import Img1 from '../assets/works/Img1.svg'
import Img2 from '../assets/works/Img2.png'
import Img3 from '../assets/works/Img3.png'
import Img4 from '../assets/works/Img4.png'
import Img5 from '../assets/works/Img5.png'
import Img6 from '../assets/works/Img6.png'
import Img7 from '../assets/works/Img7.png'
import Img8 from '../assets/works/Img8.svg'
  
function Works() {
  const arts = [
    { id: 1, image: Img1, title: 'blue',text: 'Orvillebury'},
    { id: 2, image: Img2, title: 'green',text: 'West Lavada'},
    { id: 3, image: Img3, title: 'aqua',text: 'Rempelshire'},
    { id: 4, image: Img4, title: 'lime',text: 'Delfinaland'},
    { id: 5, image: Img5, title: 'fuchsia',text: 'Buckridgeburgh'},
    { id: 6, image: Img6, title: 'black',text: 'Pfefferstad'},
    { id: 7, image: Img7, title: 'purple',text: 'South Adrienne'},
    { id: 8, image: Img8, title: 'maroon',text: 'Lake Trevor'},

  ]
  return (
    <>
    <section className="bg-[#1A1A1A] py-25">
      <div className="c-container">
        <PageHero title='My works' desc='Showcase About Works'/>

        <div className="mt-16">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {arts.map((art, index) => (
            <li key={art.id} className={`group overflow-hidden rounded-xl
                ${index < 3 ? "lg:col-span-2" : ""}
                ${index === 3 || index === 4 ? "lg:col-span-3" : ""}
                ${index > 4 ? "lg:col-span-2" : ""}`}>

              <div className="overflow-hidden rounded-xl">
                <img src={art.image} alt={art.title} className="w-full h-70 sm:h-80 lg:h-87 object-cover transition-transform duration-500 group-hover:scale-105 mb-8"/>
              </div>

              <div className="mt-4 text-center">
                <h4 className="text-sm text-[#F4F7FA] uppercase mb-2">{art.title}</h4>
                <h2 className="text-2xl font-semibold text-white mt-1"> {art.text}</h2>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-12">
          <button className="border border-[#FF9142] text-[#FF9142] px-8 py-3 rounded-full hover:bg-[#FF9142] hover:text-black transition duration-300 active:opacity-80 cursor-pointer">Load More works</button>
        </div>
      </div>
      </div>
    </section>
    </>
  )
}

export default Works