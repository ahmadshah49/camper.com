import Image from 'next/image'
import Navbar from './(components)/Navbar/navbar'
import {FaInstagram,FaTwitter} from "react-icons/fa"
import {GoPeople} from "react-icons/go"
import {PiVanThin} from "react-icons/pi"
import {TfiMapAlt} from "react-icons/tfi"
import Card from './(components)/Navbar/card/card'
import Card2 from './(components)/Navbar/card2/card2'
import Btn from './(components)/Navbar/btn/btn'
import Swiper2 from './(components)/Navbar/swiper/swiper'
import Camper from './(components)/Navbar/camper/camper'

export default function Home() {
  return (
<>
<Navbar/>
<main className='main '>
 <div className="main1">
  <span>Follow us</span>
 <FaInstagram/>
 <FaTwitter/>
 </div>
 <div className="main2">
  <div>
      <span className='line'>________</span>
  <p>Join us on the big canada road trip</p>
  </div>
  <h1>It's Great Time <br /> to start <span>Living Now</span></h1>
  <Btn title="Know More"/>
 </div>
 <div className="main3">
<p>start</p>
<p>01</p>
<p>02</p>
<p>03</p>
 </div>
</main>
<Card title="ABOUT" heading="Become Part of Two-Week canada Westren conquest" peragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." src="/img/john-lee-oMneOBYhJxY-unsplash.jpg"/>
<Card2 title="TRAVEL MAP" heading="Explore & Enjoy" peragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." src="/img/claudio-schwarz-TcYafTzZ3sg-unsplash.jpg" />
<Card title="TRANSPORT" heading="How To Move Around" peragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." src="/img/kevin-schmid--grs8iMGqQE-unsplash.jpg"/>
<div className='main4'>
<div className="left">
  <h2>Let's Explore <br /> the World Together</h2>
  <Btn title="Let's Go"/>
</div>
<div className="right">
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, assumenda ut dolores eveniet nisi eligendi?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nulla expedita dolorum nemo nisi possimus odio, natus vitae laborum dolorem? Nemo vitae itaque hic iste id nisi pariatur, placeat tenetur sapiente obcaecati debitis possimus sunt.</p>
</div>
</div>
<div className="swiper2">
 <Swiper2/>
</div>
<div className="main5">
  <div className='camper'>
    <h1>Why CAMPER?</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil, consectetur odio iste error tempora non reiciendis totam quae architecto. Quod repellat ullam sequi corrupti. Mollitia unde maxime explicabo perferendis recusandae harum consequuntur odit. Incidunt quaerat voluptate architecto consequatur amet?</p>
  </div>
  <div className="icons">
<Camper

icon={<GoPeople/>}
num="10k+"
title="Happy Customers"
p="We Have Over 1000 Happy Customers Who Have Used The Service of CAMPER"
/>
<Camper
icon={<PiVanThin/>}
num="24/7"
title="Comfortable Vans"
p="We Have Over 1000 Happy Customers Who Have Used The Service of CAMPER"
/>
<Camper
icon={<TfiMapAlt  />}
num="2988"
title="Completed Tours"
p="We Have Over 1000 Happy Customers Who Have Used The Service of CAMPER"
/>
  </div>

</div>
<div className="main6">
  <div className="inside6">
  <h1>The Camper Has Other Tours As Well</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nemo quis laudantium ratione laborum odit doloribus quas! Id nam voluptates mollitia? Exercitationem doloremque pariatur sed libero voluptate soluta unde cum veniam saepe, quod a facilis quibusdam sapiente nemo, quidem labore, illo reiciendis animi iusto voluptatum quisquam quasi id repellat! Ut?</p>
  <Btn title="See The Tours"/>
  </div>
</div>
<div className="footer">
  <div className="information">
    <h3>Stay informed</h3>
    <input type="text" placeholder='my email' />
  </div>
  <div className="information">
   <div className="flex">
   <h3>Information</h3>
    <span>About</span>
    <span>Hotels</span>
    <span>Price</span>
   </div>
  </div>
  <div className="information">
    <h3>Contact</h3>
    <span>cmaper@camper.com</span>
  </div>
  <h1>CAMPER</h1>
</div>
<div  className='foot'>
  <span>CopyRight 2023 Camper Agency Pakistan</span>
  </div>
</>
  )
}
