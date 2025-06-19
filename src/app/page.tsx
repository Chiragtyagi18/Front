// pages/index.tsx

import Image from "next/image";
import { Button } from "@/components/ui/button";
import FaqSection from '../components/request';

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-white">
       
<section className="relative w-full overflow-hidden h-screen">
  {/* Right diagonal image */}
  <div className="absolute inset-0 z-0 w-full h-full">
    <div
      className="absolute right-0 top-0 h-full w-full md:w-1/2"
      style={{
        clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)'
      }}
    >
      <Image
        src="/hero.jpg"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />
    </div>
     <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white via-white/10 to-transparent pointer-events-none" />
  </div>

  {/* Header (over everything) */}
  <header className="relative z-10 flex justify-between items-center px-8 py-4">
    <div className="text-2xl font-bold bg-gray-200 px-4 py-1">LOGO</div>
    <nav className="flex gap-6 text-blue-700 font-medium mr-40">
      <div className="cursor-pointer">Lorem Ipsum ᐯ</div>
      <div className="cursor-pointer">Lorem Ipsum ᐯ</div>
      <div className="cursor-pointer ">Lorem Ipsum ᐯ</div>
    </nav>
    <Button className="bg-white text-black border shadow-sm">Sign In</Button>
  </header>

  {/* Hero Content */}
  <div className="relative z-10 grid md:grid-cols-2 items-center max-w-7xl mx-auto h-full px-4 md:px-8">
    <div className="bg-white bg-opacity-90 p-4 rounded-md">
      <h1 className="text-5xl font-bold mb-6">Lorem ipsum dolor sit amet</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
      </p>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter something..."
          className="px-4 py-2 rounded-md border w-full max-w-xs"
        />
        <Button className="bg-blue-800">Submit →</Button>
      </div>
    </div>
  </div>
</section>



      {/* Bike Section */}
     <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
  {/* Left Text */}
  <div>
    <h2 className="text-3xl font-bold mb-4">LOREM IPSUM DOLOR SIT AMET</h2>
    <p className="text-muted-foreground mb-6">
      Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis
      donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in
      nam. Non nisi iaculis et felis aliquet. Hendrerit tellus at purus lectus.
    </p>

    {/* Cards */}
    <div className="space-y-4">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="flex items-start gap-4">
          <Image
            src={`/bike-${i + 1}.png`}
            alt="Bike"
            width={80}
            height={80}
            className="rounded-md object-cover"
          />
          <div>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur. Vestibulum ornare
              fermentum feugiat.
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="mt-8 flex items-center gap-4">
      <Button className="bg-blue-600">Lorem Ipsum</Button>
      <span className="text-l text-blue-600 "> ✆ 123456789</span>
    </div>
  </div>

  {/* Right Image */}
  <div className="w-full rounded-md overflow-hidden">
    <Image
      src="/multiple.jpg"
      alt="Multiple Bikes"
      width={600}
      height={500}
      className="w-full h-full object-cover"
    />
  </div>
</section>

<div className="relative w-full h-[60px] overflow-visible bg-white">
  {/* Blurred background with lines */}
  <div className="absolute top-[-60px] bottom-[-20px] left-1/2 right-[20%] z-0">
    {/* Diagonal lines */}
    <div
      className="w-full h-full opacity-60"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #a5d8ff 2%, transparent 2%, transparent 50%, #a5d8ff 52%, #a5d8ff 54%, transparent 54%, transparent)",
        backgroundSize: "20px 20px",
      }}
    ></div>

    {/* Blur overlay at top inside the same block */}
    <div className="absolute top-0 left-0 w-full h-[60px] backdrop-blur-sm"></div>
  </div>

  {/* Gradient bar */}
  <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-blue-800 via-green-500 to-purple-700 shadow-md z-20"></div>
</div>






      {/* Feature List Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. EU ELIT.
          </h2>
          <p className="text-muted-foreground mb-8">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare.
          </p>

          {/* List Items */}
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-start gap-4">
                {/* Icon */}
                <Image
                  src="/happy.png"
                  alt="Icon"
                  width={40}
                  height={40}
                  className="object-contain mt-1"
                />
                {/* Text */}
                <div>
                  <p className="font-semibold text-lg">
                    Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
                  </p>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="w-full rounded-md overflow-hidden">
          <Image
            src="/conversation.jpg"
            alt="Conversation"
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </section>
      

<section
  className="relative h-screen w-full bg-cover bg-center text-white"
  style={{ backgroundImage: "url('/back.jpg')" }}
>

  {/* Text content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
    <div className="absolute top-0 left-0 pt-4"> 
        <div className="text-2xl font-bold text-black bg-gray-200 px-4 py-1">LOGO</div>
    </div>
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
      Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
      Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisi porta massa diam condimentum nulla quam.
    </p>
    <p className="text-lg md:text-xl max-w-2xl mx-auto">
      Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
    </p>
  </div>
</section>

{/* Brand Logos Section */}
<section className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-2">
    LOREM IPSUM DOLOR SIT AMET
  </h2>
  <p className="text-xl font-semibold text-gray-800 mb-12">
    CONSECTETUR. COMMODO LEO AMET.
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 items-center justify-center">
    {[
      "herobike", "honda", "bjaj", "tvs",
      "rf", "yamaha", "ktm", "ather",
      "ola", "revolt", "uv", "tork"
    ].map((brand, index) => (
      <div key={index} className="flex justify-center items-center">
        <Image
          src={`/${brand}.png`}
          alt={brand}
          width={120}
          height={60}
          className="object-contain"
        />
      </div>
    ))}
  </div>
</section>


{/* Blog / Card Section */}
<section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
  <p className="text-sm text-blue-600 font-semibold mb-2">Lorem ipsum dolor sit amet</p>
  <h2 className="text-3xl md:text-4xl font-bold mb-4">LOREM IPSUM DOLOR SIT</h2>
  <p className="text-muted-foreground mb-10 max-w-3xl">
    Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis
    maecenas eget integer in nam. Non nisi iaculis at felis aliquet. Hendrerit tellus at purus lectus.
  </p>

  {/* Flex-based 2-card-per-row layout */}
  <div className="flex flex-wrap -mx-4">
    {[
      { img: "/monument.jpg" },
      { img: "/meditation.jpg" },
      { img: "/fly.jpg" },
      { img: "/oranges.jpg" },
    ].map((card, i) => (
      <div key={i} className="w-full md:w-1/2 px-8 mb-8">
        <div className="bg-white rounded-xl border shadow-sm overflow-hidden flex flex-col h-[720px]">
          <Image
            src={card.img}
            alt={`Card ${i + 1}`}
            width={500}
            height={300}
            className="w-full h-90 object-fit cover"
          />
          <div className="p-4 flex flex-col gap-2 flex-1">
            <h3 className="text-base font-semibold">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
            <p className="text-bold text-muted-foreground flex-1">
              Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit
            sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero
            imperdiet neque. Justo suspendisse tristique posuere quis eget viverra.
            Nunc euismod ultrices etiam nulla habitasse.Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit
            sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero
            imperdiet neque. Justo suspendisse tristique posuere quis eget viverra.
            Nunc euismod ultrices etiam nulla habitasse.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium text-sm hover:underline mt-auto"
            >
            Learn More
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
<section
  className="relative h-screen w-full bg-cover bg-center text-white"
  style={{ backgroundImage: "url('/back2.jpg')" }}
>

  {/* Text content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
   <div className="absolute top-0 left-0 pt-4"> 
        <div className="text-2xl font-bold text-black bg-gray-200 px-4 py-1">LOGO</div>
    </div>
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
      Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
      Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisi porta massa diam condimentum nulla quam.
    </p>
    <p className="text-lg md:text-xl max-w-2xl mx-auto">
      Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
    </p>
  </div>
</section>

<section className="bg-gray-100 px-6 py-16">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">REQUEST A QUOTE</h2>
    
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded shadow">
      {/* Left Column */}
      <div className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="border p-3 rounded" />
        <input type="text" placeholder="Phone Number" className="border p-3 rounded" />
        
        <select className="border p-3 rounded">
          <option>Choose Size</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>

        <textarea placeholder="Please Describe Your Project*" rows={4} className="border p-3 rounded" />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-4">
        <input type="email" placeholder="E-mail" className="border p-3 rounded" />
        
        <select className="border p-3 rounded">
          <option>Choose Time Frame</option>
          <option>1-2 weeks</option>
          <option>1 month</option>
          <option>Flexible</option>
        </select>

        <select className="border p-3 rounded">
          <option>Choose Quantity</option>
          <option>1-10</option>
          <option>10-50</option>
          <option>50+</option>
        </select>

        <div className="invisible">Placeholder for alignment</div>
      </div>
    </form>

    <p className="text-sm text-center mt-6 text-gray-600">
      By submitting this form you agree to our{" "}
      <a href="#" className="text-blue-600 underline">Terms of Service</a> and{" "}
      <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
    </p>

    <div className="flex justify-center mt-6">
      <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
        Lorem Ipsum
      </button>
    </div>
  </div>
</section>

<section className="bg-gray-100 px-8 py-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    
    {/* Left Content */}
    <div className="flex-1">
      <p className="text-blue-600 text-lg font-medium mb-2">Lorem Ipsum</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        Lorem Ipsum Dolor <br /> Sit Amet
      </h1>
      <p className="text-gray-700 text-lg mb-6 max-w-xl">
        Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi
        suspendisse convallis. Urna a urna lectus donec felis risus duis
        pellentesque. Pellentesque ultricies ipsum.
      </p>
      <div className="flex gap-4">
        <img
          src="/googleplay.jpg"
          alt="Google Play"
          className="h-12"
        />
        <img
          src="/appstore.jpg"
          alt="App Store"
          className="h-12"
        />
      </div>
    </div>

    {/* Right Image */}
    <div className="flex-1">
      <img
        src="/Photo.png"
        alt="Phone mockup"
        className="w-full h-auto"
      />
    </div>
  </div>
</section>

<section className="bg-[#f5f9ff] px-6 py-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
    
    {/* Left Content */}
    <div className="flex flex-col justify-between h-full">
      <div>
        <p className="text-sm text-gray-500 uppercase mb-2">No Limits</p>
        <h2 className="text-4xl font-bold mb-4 text-[#1e293b]">
          Lorem Ipsum Dolor Sit Amet
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
        </p>

        {/* Button */}
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition mb-6">
          Lorem Ipsum →
        </button>

        {/* ✅ Blackbike image now shifted 200px right, 40px up */}
        <div className="relative" style={{ transform: "translate(400px, -40px)" }}>
          <img
            src="/blackbike.jpg"
            alt="Bike 3"
            className="object-cover h-[180px] w-[180px] "
          />
        </div>
      </div>

      {/* 4people + behind; 4people shifted down */}
      <div className="flex gap-4 mt-6" style={{ transform: "translateX(200px)" }}>
        <img
          src="/4people.jpg"
          alt="Bike 6"
          className="object-cover h-[100px] w-[100px]  mt-[100px]"
        />
        <img
          src="/behind.jpg"
          alt="Bike 7"
          className="object-cover h-[200px] w-[300px] "
        />
      </div>
    </div>

    {/* Right Image Collage */}
    <div className="flex flex-col gap-4">
      
      {/* ✅ Row 1 - nightbike restored to original (no shift) */}
      <div className="flex gap-4">
        <img
          src="/hero.jpg"
          alt="Bike 1"
          className="object-cover w-[52%] h-[200px] rounded-md"
        />
        <img
          src="/nightbike.jpg"
          alt="Bike 2"
          className="object-cover w-[48%] h-[200px] rounded-md"
        />
      </div>

      {/* Row 2 - 3people image */}
      <img
        src="/3people.jpg"
        alt="Bike 4"
        className="object-cover w-full h-64 rounded-md mt-4"
      />

      {/* Row 3 - shifted down by 30px */}
      <div className="flex gap-4 mt-[30px]">
        <img
          src="/multiple.jpg"
          alt="Bike 5"
          className="object-cover w-1/3 h-20 rounded-md"
        />
        <img
          src="/bike-3.png"
          alt="Bike 8"
          className="object-cover w-2/3 h-20 rounded-md"
        />
      </div>
    </div>
  </div>
</section>




<section className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid md:grid-cols-2 gap-8 items-center">
  {/* Left Image */}
  <div>
    <img
      src="/your-path/bikers.jpg" // Replace with actual path
      alt="Bikers on road"
      className="w-full h-full object-cover rounded-lg"
    />
  </div>

  {/* Right Content */}
  <div className="flex flex-col justify-between h-full">
    <div>
      <p className="text-blue-600 font-semibold text-sm mb-2">Lorem ipsum</p>
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-blue-700">LOREM</span> IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
      </h2>
      <p className="text-muted-foreground mb-6 text-base">
        Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
      </p>

      <div className="grid grid-cols-2 gap-4 text-lg font-medium text-gray-900 mb-10">
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>
    </div>

    {/* Blue Button - centered */}
    <div className="flex justify-center -10">
      <button className="bg-blue-600 text-white px-6 py-4 rounded-20px text-sm font-medium hover:bg-blue-700 transition">
        Lorem Button{'->'}
      </button>
    </div>
    
  </div>
</section>
<div className="relative overflow-hidden border-t-20 border-transparent" style={{
  borderImage: "linear-gradient(to right, #1e3a8a, #10b981, #6d28d9) 1",
}}></div>

<section className="bg-blue-700 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-md font-semibold uppercase tracking-wide">
          Join other Sun harvesters
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          LOREM IPSUM DOLOR SIT AMET
        </h2>
        <p className="text-md mt-4 max-w-2xl mx-auto text-blue-100">
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-900 rounded-full font-medium">
          Lorem Ipsum
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* First Card: Taller */}
        <div className="bg-white text-black p-6 rounded-lg shadow-md h-[380px] flex flex-col justify-between">
          <div>
            <div className="text-3xl mb-4">⚡</div>
            <p className="text-sm mb-6">
              Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/User Thumb_3.jpg" alt="Jane Cooper" width={32} height={32} className="rounded-full" />
            <span className="text-sm">Jane Cooper</span>
          </div>
        </div>

        {/* Other Cards: Normal height */}
        <div className="bg-white text-black p-6 rounded-lg shadow-md h-[320px] flex flex-col justify-between">
          <div>
            <div className="text-3xl mb-4">⭐⭐⭐</div>
            <p className="text-sm mb-6">
              Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/User Thumb_2.jpg" alt="Ralph Edwards" width={32} height={32} className="rounded-full" />
            <span className="text-sm">Ralph Edwards</span>
          </div>
        </div>

        <div className="bg-white text-black p-6 rounded-lg shadow-md h-[320px] flex flex-col justify-between">
          <div>
            <div className="text-3xl mb-4">🏰</div>
            <p className="text-sm mb-6">
              Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/User Thumb_4.jpg" alt="Courtney Henry" width={32} height={32} className="rounded-full" />
            <span className="text-sm">Courtney Henry</span>
          </div>
        </div>

        <div className="bg-white text-black p-6 rounded-lg shadow-md h-[320px] flex flex-col justify-between">
          <div>
            <div className="text-3xl mb-4">ℹ️</div>
            <p className="text-sm mb-6">
              Hendrerit augue ut nulla quis integer netus. Scelerisque rhoncus magnis habitant tellus ornare. Hendrerit senectus. Mauris eget praesent neque.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/UserThumb_4.jpg" alt="Cameron W" width={32} height={32} className="rounded-full" />
            <span className="text-sm">Cameron W</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 gap-4">
        <button className="bg-white text-blue-600 p-2 rounded-full">←</button>
        <button className="bg-white text-blue-600 p-2 rounded-full">→</button>
      </div>
    </section>
 
<section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          {/* Tab Buttons */}
          <div className="inline-flex border border-gray-300 rounded-md overflow-hidden mb-6 shadow-sm">
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-900">
              Research
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100">
              Plan
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100">
              Design
            </button>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 text-sm mb-4 max-w-md">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet.
            Purus malesuada placerat arcu at enim elit in accumsan.
          </p>

          {/* Check tools link */}
          <a href="#" className="text-blue-700 text-sm font-medium inline-flex items-center gap-1 hover:underline">
            Check tools →
          </a>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center">
          <div className="overflow-hidden rounded-lg shadow-lg w-full max-w-md">
            <Image
              src="/handshake.jpg" // Replace with your image path
              alt="Handshake"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>


 <section className="relative bg-[#F5F5F5] py-20 px-4 overflow-visible z-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start relative z-10">
        {/* Left Column */}
        <div className="relative z-20">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-snug">
            LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. <br /> DIGNISSIM TELLUS.
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar.
            Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis.
            Massa in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
          </p>

          {/* Blue Button */}
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded shadow mb-10 hover:bg-blue-800 transition">
            Lorem Ipsum →
          </button>

          {/* White Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative z-30">
            <h3 className="font-bold mb-2 text-sm text-gray-900">Lorem ipsum dolor sit</h3>
            <p className="text-sm text-gray-600 mb-2">
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.
            </p>
            <p className="text-sm text-gray-600 mb-2">
              Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse
              fermentum velit. Nibh dolor nunc id tristique sit.
            </p>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices
              lectus viverra pharetra commodo.
            </p>
          </div>

          {/* 8px Gradient Border */}
          <div className="h-2 w-full max-w-lg bg-gradient-to-r from-blue-700 via-green-500 to-purple-900 rounded-md mt-[-4px]" />
        </div>

        {/* Right Column Image - overflow above section */}
        <div className="relative z-10 flex justify-center items-start h-full">
          <div className="relative w-[80%] -top-[30px] z-40 shadow-xl rounded-lg overflow-hidden">
            <Image
              src="/sale.jpg" // Replace with actual path
              alt="People with Bike"
              width={700}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>


 <section className="bg-[#F5F5F5] py-14 px-4 relative">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
          LOREM IPSUM DOLOR SIT AMET
        </h2>
        <p className="text-gray-600">
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit
          fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
        </p>
      </div>

      {/* Image + Floating Card */}
      <div className="max-w-8xl  grid md:grid-cols-2  px-4 md:px-8 py-16 items-center relative">
        {/* Image */}
         <div className="w-150 h-100 overflow-hidden">
          <Image
            src="/mount.jpg"
            alt="Hero Image"
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Text Card */}
        <div className="absolute top-[40px] left-3/7 transform -translate-x-[10px] bg-white p-6 rounded-xl shadow-lg w-11/12 sm:w-2/3 md:w-1/2 my-40">
          <h3 className="text-blue-900 font-semibold text-lg mb-2">Artist & Investor</h3>
          <p className="text-gray-600 text-sm mb-3 leading-relaxed">
            Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt.
          </p>
          <a href="#" className="text-blue-700 font-medium text-sm hover:underline">
            Read Full Story →
          </a>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-15 flex justify-center items-center space-x-3">
        {/* First dot: active circle */}
        <span className="w-3 h-3 rounded-full bg-blue-300" />
        
        {/* Second dot: rounded rectangle border */}
        <span className="w-12 h-3 rounded-full border-2 bg-blue-900" />

        {/* Inactive dots: circle border light blue */}
        <span className="w-3 h-3 rounded-full border border-blue-300" />
        <span className="w-3 h-3 rounded-full border border-blue-300" />
      </div>
    </section>


<section className="bg-white py-24 px-4 text-center">
      {/* Logo Placeholder */}
      <div className="mx-auto mb-8 w-32 h-16 bg-gray-200 flex items-center justify-center text-xl font-bold">
        LOGO
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
        LOREM IPSUM DOLOR SIT AMET <br />
        CONSECTETUR. DUI.
      </h1>

      {/* Paragraph */}
      <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-10">
        Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
        pharetra tempor quis arcu. Ipsum nullam.
      </p>

      {/* Button */}
      <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded shadow-lg inline-flex items-center gap-2">
        Loerum Ipsum →
      </button>
    </section>

<section>
  <FaqSection />
</section>
 <footer className="bg-[#1C1F2A] text-white px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Logo */}
        <div className="min-w-[150px]">
          <div className="bg-gray-300 text-black font-bold text-xl px-6 py-4 inline-block">
            LOGO
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
          {Array(4).fill(0).map((_, colIdx) => (
            <div key={colIdx}>
              <h4 className="font-semibold mb-4">Lorem Ipsum</h4>
              {Array(4).fill(0).map((__, idx) => (
                <p key={idx} className="text-sm text-gray-300 mb-2">
                  Lorem Ipsum
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
    </main>
  );
}
