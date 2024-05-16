import Hero from '../component/Home/Hero'
import Featured from '../component/Home/FeaturedProducts'
import Footer from '../component/Footer'
const Home = () => {
  return (
    <div className='h-screen'>
      <Hero />
      <Featured />
      <Footer />
    </div>
  )
}

export default Home
