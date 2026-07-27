import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Flame, MapPin, Phone, Instagram, ArrowRight, Star, Clock, Menu as MenuIcon, X } from 'lucide-react';
const IMG = {
  burger: 'https://horizons-cdn.hostinger.com/c13d319d-ae8b-4f13-b1d0-ae658ac0b892/67f6ec7dc8424ae0e669ffe87cbb0800.jpg',
  mural: 'https://horizons-cdn.hostinger.com/c13d319d-ae8b-4f13-b1d0-ae658ac0b892/226127494f8b454bb585c3004e47f43c.jpg',
  storefront: 'https://horizons-cdn.hostinger.com/c13d319d-ae8b-4f13-b1d0-ae658ac0b892/e9b8ccb21587b8eb97442f1ebbddb917.jpg',
  streetFries: 'https://horizons-cdn.hostinger.com/c13d319d-ae8b-4f13-b1d0-ae658ac0b892/f2b2b5edb6582e8eb31a4c8215d335e6.jpg',
  interior: 'https://horizons-cdn.hostinger.com/c13d319d-ae8b-4f13-b1d0-ae658ac0b892/230cfcad04eae7a9ab2a320b32eb3237.jpg',
  loadedFries: 'https://horizons-cdn.hostinger.com/c13d319d-ae8b-4f13-b1d0-ae658ac0b892/48ba508b9df638cc984b71a09f2125cc.jpg',
  spread: 'https://horizons-cdn.hostinger.com/c13d319d-ae8b-4f13-b1d0-ae658ac0b892/d6c2b5810de18560ff3f3e15616ec2b3.png',
  joint: 'https://horizons-cdn.hostinger.com/c13d319d-ae8b-4f13-b1d0-ae658ac0b892/d5ff2d36033e4997d7a7674ac8cebdea.jpg',
  tenders: 'https://horizons-cdn.hostinger.com/c13d319d-ae8b-4f13-b1d0-ae658ac0b892/a5d1f8fe4585eaf83a591e5e79b0d966.jpg'
};
const LINKS = {
  instagram: 'https://www.instagram.com/flames_cafe_?igsh=YjNpb2ZuZjU4MmMz',
  maps: 'https://maps.app.goo.gl/qj8VajS9JyMywyYm8',
  zomato: 'https://zomato.onelink.me/xqzv/u8esm1kn',
  phone: 'tel:+917063963398'
};
const MENU = {
  Sides: [{
    n: 'Cheese Corn Nuggets',
    d: '10 pieces of golden cheese-loaded corn nuggets',
    p: '179',
    img: 'https://images.hostinger.com/c9ad2d25-e315-448f-a66e-1c2d1cb84ada.png'
  }, {
    n: 'Jalapeno Cheese Poppers',
    d: '10 pieces, spicy jalapeno stuffed with melty cheese',
    p: '189',
    img: 'https://images.hostinger.com/f34c5404-7ac7-4a2b-8d1f-e28c631c8303.png'
  }, {
    n: 'Chicken Nuggets',
    d: '10 pieces of crispy fried chicken nuggets',
    p: '199',
    img: 'https://images.hostinger.com/d4351940-719c-4c94-8eef-16e5c66ce23b.png'
  }, {
    n: 'French Fries',
    d: 'Normal / Peri-Peri seasoned',
    p: '149 / 169',
    img: 'https://images.hostinger.com/8fe8ccba-298a-4805-af51-f24383d8ced8.png'
  }, {
    n: 'Street Fries',
    d: 'Loaded with garlic, sriracha, jalapenos, fried onions & spring greens',
    p: '219',
    img: 'https://images.hostinger.com/a9f1901c-851d-4fc9-843f-24393681d440.png'
  }, {
    n: 'Chicken Popcorn',
    d: 'Bite-sized crispy fried chicken seasoned with spices',
    p: '219',
    img: 'https://images.hostinger.com/06ec514c-e5bb-469b-8619-1a4a2837da7b.png'
  }, {
    n: 'Animal Fries',
    d: 'Fries loaded with fried chicken tenders, in-house sauce & veggies',
    p: '299',
    img: 'https://images.hostinger.com/4a240b46-c792-4604-89de-e72126d1159c.png'
  }, {
    n: 'BBQ Loaded Animal Fries',
    d: 'Topped with tenders, spring onions, smokey BBQ sauce & seasoning',
    p: '309',
    img: 'https://images.hostinger.com/f0b165ee-893c-4957-8cde-e7d86720ca99.png'
  }, {
    n: 'Nashville Loaded Animal Fries',
    d: 'Nashville fried tenders, spring onions, sriracha mayo & greens',
    p: '319',
    img: 'https://images.hostinger.com/6962fe78-7da8-44b3-8912-aa8198d156f5.png'
  }, {
    n: 'Naked Chicken',
    d: 'Fried chicken tenders with house sauces, fried onions & jalapenos',
    p: '319',
    img: 'https://images.hostinger.com/158eb24d-7922-44cb-b2eb-b73cdf2c6bf3.png'
  }],
  'Wings & Tenders': [{
    n: 'Classic Wings / Tenders',
    d: 'Good old crispy fried chicken',
    p: '299',
    img: 'https://images.hostinger.com/d68fbec7-f90f-407f-a22a-3521b681b0f1.png'
  }, {
    n: 'Buffalo Wings / Tenders',
    d: 'Super tangy, buttery & slightly spicy',
    p: '299',
    img: 'https://images.hostinger.com/dec08492-0a35-413b-b103-569acadea162.png'
  }, {
    n: 'Yangnyeom Wings / Tenders',
    d: 'Korean sweet & fermented flavour',
    p: '299',
    img: 'https://images.hostinger.com/4d92a8d1-f701-49c4-a2a6-7c373add3e5a.png'
  }, {
    n: 'Hot Honey & Chili Pepper Wings',
    d: 'Sweet & slightly spicy',
    p: '299',
    img: 'https://images.hostinger.com/352dd97f-c6da-4a6f-9488-5986476f352c.png'
  }, {
    n: 'Smokey BBQ Wings / Tenders',
    d: 'Smokey & sweeter flavour',
    p: '299',
    img: 'https://images.hostinger.com/7df1525c-5bed-4fed-87f0-9d9d6936c194.png'
  }, {
    n: 'Sriracha Wings / Tenders',
    d: 'Spicy & slightly salty',
    p: '299',
    img: 'https://images.hostinger.com/ce2d1c95-ca29-4c93-9df0-e4870404c982.png'
  }, {
    n: 'Butter & Lemon Wings / Tenders',
    d: 'Buttery & zesty',
    p: '299',
    img: 'https://images.hostinger.com/432f39de-4a74-4078-aa91-f829ec3910e3.png'
  }, {
    n: 'Nashville Wings / Tenders',
    d: 'Super spicy & oily',
    p: '319',
    img: 'https://images.hostinger.com/2a64c45a-2354-4a4f-94f7-024ae2c11455.png'
  }],
  'Gourmet Burgers': [{
    n: 'Supreme Deluxe Fried Chicken Burger',
    d: 'Two humongous fried chicken fillets, fried onions, cheese & in-house sauce',
    p: '469',
    img: 'https://images.hostinger.com/d95257f2-c676-4f94-8ffb-c66c157ce5c5.png'
  }, {
    n: 'OG Fried Chicken Burger',
    d: 'Caramelized onion, tomato salsa, fried egg, cheese & sriracha sauce',
    p: '349',
    img: 'https://images.hostinger.com/04d8a7d9-5266-4595-82f6-75eb81e6ad98.png'
  }, {
    n: 'Nashville Fried Chicken Burger',
    d: 'Chili-oil dipped, Nashville spices, pickles & garlic mayo',
    p: '319',
    img: 'https://images.hostinger.com/4807fd8b-3c7b-433c-a331-dbaed3d89189.png'
  }, {
    n: 'Classic Fried Chicken Burger',
    d: 'Onions, tomato, burger sauce & cheese over shredded lettuce',
    p: '299',
    img: 'https://images.hostinger.com/b9087be1-1873-488a-b411-8088715c5d32.png'
  }, {
    n: 'Backyard BBQ Fried Chicken Burger',
    d: 'Caramelized onions, pickles, BBQ sauce & cheese',
    p: '309',
    img: 'https://images.hostinger.com/4b79f472-23f1-4a6d-99d2-7c68ebe1ea00.png'
  }, {
    n: 'Buffalo Fried Chicken Burger',
    d: 'Generously coated in buffalo sauce with cheese',
    p: '309',
    img: 'https://images.hostinger.com/36771d1e-bdd8-4987-b864-7f3abe61bddd.png'
  }, {
    n: 'Hot Honey Fried Chicken Burger',
    d: 'Hot honey sauce, jalapenos, sriracha sauce & cheese',
    p: '309',
    img: 'https://images.hostinger.com/15394a33-0e17-4aec-a0ec-c79e8b2da897.png'
  }, {
    n: 'Loaded A1 Chicken Burger',
    d: 'Fried onions, chipotle sauce & cheese over shredded lettuce',
    p: '309',
    img: 'https://images.hostinger.com/19223166-d034-417d-8d10-93413fbd8bca.png'
  }, {
    n: 'Extra Cheese',
    d: 'Add an extra slice of melty cheese to any burger',
    p: '25',
    img: 'https://images.hostinger.com/b9087be1-1873-488a-b411-8088715c5d32.png'
  }]
};
const Logo = ({
  className = ''
}) => <span className={`font-display leading-none inline-flex items-center ${className}`}>
    <span className="text-white">FLA</span>
    <Flame className="mx-[0.02em] text-orange-500 flame-anim" strokeWidth={0} fill="currentColor" style={{
    width: '0.85em',
    height: '0.85em'
  }} />
    <span className="text-white">MES</span>
  </span>;
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
function Header() {
  const [open, setOpen] = useState(false);
  const nav = [['Menu', '#menu'], ['Vibe', '#experience'], ['Gallery', '#gallery'], ['Visit', '#location']];
  return <header className="fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <Logo className="text-2xl" />
          <span className="font-condensed text-orange-500 text-sm tracking-[0.35em] hidden sm:block">CAFE</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map(([l, h]) => <a key={l} href={h} className="text-sm font-medium text-neutral-300 hover:text-orange-400 transition-colors">{l}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href={LINKS.zomato} target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-orange-500 hover:bg-orange-400 text-black font-semibold text-sm px-4 py-2 transition-colors active:scale-95">
            Order Now <ArrowRight className="w-4 h-4" />
          </a>
          <button className="md:hidden text-white" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {open && <div className="md:hidden bg-black border-t border-white/5 px-5 py-4 flex flex-col gap-4">
          {nav.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)} className="text-neutral-200 font-medium">{l}</a>)}
          <a href={LINKS.zomato} target="_blank" rel="noreferrer" className="rounded-full bg-orange-500 text-black font-semibold text-center py-2.5">Order Now</a>
        </div>}
    </header>;
}
function Hero() {
  return <section id="top" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMG.burger} alt="Flames Cafe fried chicken burger" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 w-full pt-24 pb-16">
        <motion.div initial="hidden" animate="show" variants={{
        show: {
          transition: {
            staggerChildren: 0.12
          }
        }
      }} className="max-w-2xl">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 mb-6">
            <Flame className="w-4 h-4 text-orange-500" fill="currentColor" strokeWidth={0} />
            <span className="text-xs font-semibold tracking-widest text-orange-300 uppercase"></span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-display text-white text-[3.2rem] leading-[0.92] sm:text-7xl lg:text-8xl uppercase">
            Bold Flavours.<br />
            <span className="text-orange-500">Big Bites.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-neutral-300 max-w-lg">
            Nashville-style fried chicken, gourmet burgers, loaded fries and saucy wings — cooked hot, served bold. The tastiest joint in Port Blair.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold px-6 py-3 hover:bg-neutral-200 transition-colors active:scale-95">
              View Menu
            </a>
            <a href={LINKS.zomato} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#e23744] text-white font-semibold px-6 py-3 hover:brightness-110 transition active:scale-95">
              Order on Zomato
            </a>
            <a href={LINKS.maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white font-semibold px-6 py-3 hover:bg-white/10 transition active:scale-95">
              <MapPin className="w-4 h-4" /> Visit Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>;
}
function MenuSection() {
  const [tab, setTab] = useState('Gourmet Burgers');
  const cats = Object.keys(MENU);
  return <section id="menu" className="bg-[#0a0a0b] py-20 sm:py-28">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-condensed text-orange-500 tracking-[0.3em] text-lg">THE MENU</p>
            <h2 className="font-display text-white text-5xl sm:text-6xl uppercase leading-none mt-1">Feed The Fire</h2>
          </div>
          <p className="text-neutral-400 max-w-sm text-sm">Every wing & tender comes with a complimentary dip. Choose boneless tenders or wings when ordering. Extra cheese +25.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map(c => <button key={c} onClick={() => setTab(c)} className={`font-condensed text-lg tracking-wide px-5 py-2 rounded-full transition-colors ${tab === c ? 'bg-orange-500 text-black' : 'bg-white/5 text-neutral-300 hover:bg-white/10'}`}>
              {c}
            </button>)}
        </div>

        <motion.div key={tab} initial="hidden" animate="show" variants={{
        show: {
          transition: {
            staggerChildren: 0.04
          }
        }
      }} className="columns-1 md:columns-2 gap-5 [column-fill:_balance]">
          {MENU[tab].map(item => <motion.div variants={fadeUp} key={item.n} className="break-inside-avoid mb-5 group rounded-2xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-transparent overflow-hidden hover:border-orange-500/40 transition-colors flex">
              <div className="w-28 sm:w-32 shrink-0 overflow-hidden">
                <img src={item.img} alt={item.n} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4 flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-white font-bold text-base leading-snug group-hover:text-orange-400 transition-colors">{item.n}</h3>
                  <span className="font-condensed text-orange-500 text-2xl shrink-0">₹{item.p}</span>
                </div>
                <p className="text-neutral-400 text-sm mt-1.5">{item.d}</p>
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}
function Experience() {
  return <section id="experience" className="relative py-20 sm:py-28 bg-neutral-950">
      <div className="max-w-[1200px] mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial="hidden" whileInView="show" viewport={{
        once: true,
        margin: '-80px'
      }} variants={fadeUp}>
          <p className="font-condensed text-orange-500 tracking-[0.3em] text-lg">THE VIBE</p>
          <h2 className="font-display text-white text-5xl sm:text-6xl uppercase leading-[0.95] mt-1">
            Don't look for love.<br /><span className="text-orange-500">Look for Flames.</span>
          </h2>
          <p className="text-neutral-400 mt-6 max-w-md">
            Bold red velvet seating, hand-painted murals and warm street-food energy — Flames Cafe is where Port Blair comes to hang out, dig in and refuel. Dine in for the full experience or grab it to go.
          </p>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-neutral-300"><Star className="w-5 h-5 text-orange-500" fill="currentColor" strokeWidth={0} /> Loved locally</div>
            <div className="flex items-center gap-2 text-neutral-300"><Clock className="w-5 h-5 text-orange-500" /> Open daily</div>
            <div className="flex items-center gap-2 text-neutral-300"><MapPin className="w-5 h-5 text-orange-500" /> Port Blair</div>
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{
        once: true
      }} variants={fadeUp} className="grid grid-cols-2 gap-4">
          <img src={IMG.storefront} alt="Flames Cafe storefront at night" className="col-span-2 rounded-2xl h-56 w-full object-cover" />
          <img src={IMG.mural} alt="Nashville burger mural inside Flames Cafe" className="rounded-2xl h-52 w-full object-cover" />
          <img src={IMG.interior} alt="Flames Cafe interior seating" className="rounded-2xl h-52 w-full object-cover" />
        </motion.div>
      </div>
    </section>;
}
function Gallery() {
  const shots = [{
    src: IMG.spread,
    alt: 'Flames Cafe feast spread',
    cls: 'sm:col-span-2 sm:row-span-2 h-64 sm:h-full'
  }, {
    src: IMG.tenders,
    alt: 'Nashville fried chicken tenders',
    cls: 'h-44 sm:h-56'
  }, {
    src: IMG.loadedFries,
    alt: 'Loaded animal fries',
    cls: 'h-44 sm:h-56'
  }, {
    src: IMG.joint,
    alt: 'Street loaded fries',
    cls: 'h-44 sm:h-56'
  }, {
    src: IMG.streetFries,
    alt: 'Peri-peri street fries',
    cls: 'h-44 sm:h-56'
  }];
  return <section id="gallery" className="py-20 sm:py-28 bg-[#0a0a0b]">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="font-condensed text-orange-500 tracking-[0.3em] text-lg">STRAIGHT FROM THE FRYER</p>
          <h2 className="font-display text-white text-5xl sm:text-6xl uppercase leading-none mt-1">The Good Stuff</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-fr gap-4">
          {shots.map((s, i) => <motion.div key={i} initial={{
          opacity: 0,
          scale: 0.96
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: i * 0.06
        }} className={`overflow-hidden rounded-2xl ${s.cls}`}>
              <img src={s.src} alt={s.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </motion.div>)}
        </div>
      </div>
    </section>;
}
function Location() {
  return <section id="location" className="py-20 sm:py-28 bg-neutral-950">
      <div className="max-w-[1200px] mx-auto px-5 grid lg:grid-cols-2 gap-10 items-stretch">
        <div>
          <p className="font-condensed text-orange-500 tracking-[0.3em] text-lg">FIND US</p>
          <h2 className="font-display text-white text-5xl sm:text-6xl uppercase leading-none mt-1">Come Hungry</h2>
          <p className="text-neutral-400 mt-5 max-w-md">Flames Cafe, Minnie Bay, near D&K City Gate, opposite CWE Office. Walk in for dine-in or order ahead on Zomato.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LINKS.maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-orange-500 text-black font-semibold px-6 py-3 hover:bg-orange-400 transition active:scale-95">
              <MapPin className="w-4 h-4" /> Get Directions
            </a>
            <a href={LINKS.phone} className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white font-semibold px-6 py-3 hover:bg-white/10 transition active:scale-95">
              <Phone className="w-4 h-4" /> Call Us
            </a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[320px]">
          <iframe title="Flames Cafe location" src="https://www.google.com/maps?q=Flames+Cafe+Port+Blair&output=embed" className="w-full h-full min-h-[320px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>;
}
function OrderCTA() {
  return <section className="relative py-24 overflow-hidden">
      <img src={IMG.tenders} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 max-w-[900px] mx-auto px-5 text-center">
        <Flame className="w-10 h-10 text-orange-500 mx-auto flame-anim" fill="currentColor" strokeWidth={0} />
        <h2 className="font-display text-white text-5xl sm:text-7xl uppercase leading-[0.95] mt-4">Hunger Won't Wait</h2>
        <p className="text-neutral-300 mt-5 max-w-lg mx-auto">Get Flames delivered hot to your door. Tap in on your favourite app and let the feast begin.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={LINKS.zomato} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#e23744] text-white font-semibold px-8 py-4 text-lg hover:brightness-110 transition active:scale-95">
            Order on Zomato <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>;
}
function Footer() {
  return <footer className="bg-black border-t border-white/5 py-14">
      <div className="max-w-[1200px] mx-auto px-5 grid sm:grid-cols-3 gap-10">
        <div>
          <Logo className="text-3xl" />
          <p className="text-neutral-500 text-sm mt-4 max-w-xs">Bold flavours, big bites. Nashville fried chicken, gourmet burgers & loaded fries in Port Blair.</p>
        </div>
        <div>
          <p className="font-condensed text-orange-500 tracking-widest text-lg mb-4">EXPLORE</p>
          <ul className="space-y-2 text-neutral-400 text-sm">
            <li><a href="#menu" className="hover:text-orange-400">Menu</a></li>
            <li><a href="#experience" className="hover:text-orange-400">The Vibe</a></li>
            <li><a href="#gallery" className="hover:text-orange-400">Gallery</a></li>
            <li><a href="#location" className="hover:text-orange-400">Visit Us</a></li>
          </ul>
        </div>
        <div>
          <p className="font-condensed text-orange-500 tracking-widest text-lg mb-4">ORDER & FOLLOW</p>
          <div className="flex flex-wrap gap-3">
            <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 text-white text-sm px-4 py-2 hover:bg-white/10">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
            <a href={LINKS.zomato} target="_blank" rel="noreferrer" className="rounded-full bg-[#e23744] text-white text-sm px-4 py-2 hover:brightness-110">Zomato</a>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-5 mt-10 pt-6 border-t border-white/5 text-neutral-600 text-xs">
        © {new Date().getFullYear()} Flames Cafe, Port Blair. All rights reserved.
      </div>
    </footer>;
}
export default function HomePage() {
  return <div className="bg-[#0a0a0b] min-h-screen">
      <Helmet>
        <title>Flames Cafe — Bold Flavours. Big Bites. | Port Blair</title>
        <meta name="description" content="Flames Cafe — Nashville fried chicken, gourmet burgers, loaded fries and saucy wings. Order on Zomato." />
      </Helmet>
      <Header />
      <Hero />
      <MenuSection />
      <Experience />
      <Gallery />
      <Location />
      <OrderCTA />
      <Footer />
    </div>;
}