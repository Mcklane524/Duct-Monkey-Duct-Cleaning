/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Star, 
  Wind, 
  FlameKindling, 
  ShieldCheck, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight,
  Quote,
  ThumbsUp,
  AlertTriangle,
  Zap,
  Filter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BUSINESS_NAME, 
  PHONE_NUMBER, 
  EMAIL, 
  SERVICES, 
  REVIEWS, 
  BEFORE_AFTER_GALLERY, 
  SERVICE_AREAS 
} from './constants';

// --- Types ---
type View = 'home' | 'services' | 'about' | 'reviews' | 'contact' | 'quote' | 'service-area';

// --- Components ---

const Header = ({ setView, currentView }: { setView: (v: View) => void, currentView: View }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; view: View }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Services', view: 'services' },
    { label: 'Reviews', view: 'reviews' },
    { label: 'About', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => { setView('home'); window.scrollTo(0, 0); }}
        >
          <div className="bg-sky-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
            <Wind className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
            DUCT <span className="text-sky-600">MONKEY</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => { setView(item.view); window.scrollTo(0, 0); }}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                currentView === item.view 
                  ? 'text-sky-600' 
                  : isScrolled ? 'text-slate-600 hover:text-sky-600' : 'text-slate-700 md:text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a 
            href={`tel:${PHONE_NUMBER}`}
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-sky-600/20"
          >
            <Phone className="w-4 h-4" />
            {PHONE_NUMBER}
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => { setView(item.view); setIsMenuOpen(false); window.scrollTo(0, 0); }}
                  className={`text-left py-2 font-bold ${currentView === item.view ? 'text-sky-600' : 'text-slate-700'}`}
                >
                  {item.label}
                </button>
              ))}
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="bg-sky-600 text-white p-4 rounded-xl font-bold flex justify-center items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now: {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = ({ onGetQuote }: { onGetQuote: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2000" 
          alt="Clean HVAC system" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-sky-600/20 border border-sky-500/30 text-sky-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Zap className="w-4 h-4" />
            Same-Day Service Available
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6">
            Stop Breathing <span className="text-sky-500">Dirty Air.</span> We Kick the Dust Out.
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
            Allergies acting up? Dust piling up? Your air ducts are likely the culprit. 
            Professional, deep-clean duct cleaning starting at just <span className="text-white font-bold">$299</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-2xl shadow-sky-600/40"
            >
              <Phone className="w-6 h-6" />
              CALL NOW: {PHONE_NUMBER}
            </a>
            <button 
              onClick={onGetQuote}
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all border-2 border-transparent"
            >
              GET FREE QUOTE
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-slate-900" alt="Customer" referrerPolicy="no-referrer" />
              ))}
            </div>
            <div>
              <div className="flex text-amber-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-400 text-sm font-medium">Trusted by 2,500+ Local Homeowners</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-500 p-3 rounded-2xl">
                <ShieldCheck className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Certified & Insured</h3>
                <p className="text-slate-400">NADCA Standards Compliant</p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "100% Satisfaction Guarantee",
                "No Hidden Fees - Upfront Pricing",
                "Advanced HEPA Filtration Equipment",
                "Family & Pet Safe Sanitizers"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-6 bg-amber-500 text-slate-900 p-6 rounded-2xl font-black shadow-xl rotate-3 animate-pulse">
            <div className="text-3xl">15% OFF</div>
            <div className="text-sm uppercase tracking-wider">First-Time Customers</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustSignals = () => {
  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
        <div className="flex items-center gap-2 font-black text-slate-400 text-xl italic">NADCA CERTIFIED</div>
        <div className="flex items-center gap-2 font-black text-slate-400 text-xl italic">ENERGY STAR PARTNER</div>
        <div className="flex items-center gap-2 font-black text-slate-400 text-xl italic">BBB ACCREDITED A+</div>
        <div className="flex items-center gap-2 font-black text-slate-400 text-xl italic">GOOGLE GUARANTEED</div>
      </div>
    </section>
  );
};

const ServicesSection = ({ onGetQuote }: { onGetQuote: () => void }) => {
  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sky-600 font-black uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Professional Cleaning Solutions</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            We don't just clean vents; we restore your home's respiratory system. 
            From the furnace to the dryer, we ensure every cubic inch of airflow is pure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full"
            >
              <div className="bg-sky-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-sky-600">
                {service.icon === 'Wind' && <Wind className="w-8 h-8" />}
                {service.icon === 'FlameKindling' && <FlameKindling className="w-8 h-8" />}
                {service.icon === 'ShieldCheck' && <ShieldCheck className="w-8 h-8" />}
              </div>
              <h4 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
              
              <div className="mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Signs you need it:</p>
                <ul className="space-y-2">
                  {service.signs.map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-sm">Starting at</span>
                  <div className="text-2xl font-black text-sky-600">{service.priceFrom}</div>
                </div>
                <button 
                  onClick={onGetQuote}
                  className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-sky-600 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeforeAfterSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sky-600 font-black uppercase tracking-widest text-sm mb-4">The Proof</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">Seeing is Believing.</h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Most duct cleaning companies just "blow air" through your vents. 
              We use a high-definition camera system to show you exactly what we've removed. 
              No more guessing if the job was done right.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-emerald-100 p-3 rounded-xl h-fit">
                  <ThumbsUp className="text-emerald-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Full Visual Report</h4>
                  <p className="text-slate-500">Every job comes with a digital photo report of your system's condition.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-sky-100 p-3 rounded-xl h-fit">
                  <Filter className="text-sky-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">HEPA-Certified Extraction</h4>
                  <p className="text-slate-500">We capture 99.97% of particles, ensuring dust doesn't just end up in your living room.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {BEFORE_AFTER_GALLERY.map((item) => (
              <div key={item.id} className="group relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={item.before} alt="Before" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-slate-900/80 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase">Before</div>
                  </div>
                  <div className="relative">
                    <img src={item.after} alt="After" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-lg text-xs font-bold uppercase">After</div>
                  </div>
                </div>
                <div className="bg-slate-900 p-4 text-center">
                  <p className="text-white font-bold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="reviews">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sky-400 font-black uppercase tracking-widest text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6">What Your Neighbors Are Saying</h3>
          <div className="flex justify-center items-center gap-4">
            <div className="flex text-amber-400">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <span className="text-2xl font-bold">4.9/5 Average Rating</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 flex flex-col">
              <Quote className="text-sky-500 w-10 h-10 mb-6 opacity-50" />
              <p className="text-slate-300 text-lg italic mb-8 flex-grow">"{review.text}"</p>
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-slate-500 text-sm">{review.location}</p>
                </div>
                <div className="text-slate-500 text-xs font-medium">{review.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-sky-500 hover:text-white transition-all">
            READ ALL 250+ REVIEWS
          </button>
        </div>
      </div>
    </section>
  );
};

const QuoteForm = ({ onClose }: { onClose?: () => void }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-emerald-600 w-10 h-10" />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4">Quote Request Sent!</h3>
        <p className="text-slate-600 mb-8">A Duct Monkey specialist will call you within 15 minutes during business hours.</p>
        <button 
          onClick={onClose}
          className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold"
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Full Name</label>
          <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
          <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="(555) 000-0000" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1">Home Address</label>
        <input required type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none" placeholder="123 Main St, Springfield" />
      </div>
      <div>
        <label className="block text-sm font-bold text-slate-700 mb-1">Service Needed</label>
        <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none">
          <option>Air Duct Cleaning</option>
          <option>Dryer Vent Cleaning</option>
          <option>HVAC Sanitizing</option>
          <option>Full System Bundle</option>
        </select>
      </div>
      <button 
        type="submit"
        className="w-full bg-sky-600 hover:bg-sky-700 text-white py-5 rounded-2xl font-black text-xl shadow-xl shadow-sky-600/30 transition-all transform hover:scale-[1.02]"
      >
        GET MY FREE QUOTE
      </button>
      <p className="text-center text-xs text-slate-400">
        By clicking, you agree to receive a call or text. We never spam.
      </p>
    </form>
  );
};

const QuoteModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-sky-600 p-8 text-white relative">
              <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
              <h2 className="text-3xl font-black mb-2">Get Your Free Quote</h2>
              <p className="text-sky-100 font-medium">Fast response. No pressure. Just clean air.</p>
            </div>
            <div className="p-8">
              <QuoteForm onClose={onClose} />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ServiceAreas = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sky-600 font-black uppercase tracking-widest text-sm mb-4">Service Area</h2>
            <h3 className="text-4xl font-black text-slate-900 mb-6">We're in Your Neighborhood</h3>
            <p className="text-slate-600 text-lg mb-8">
              Duct Monkey serves the greater metropolitan area and surrounding suburbs. 
              Check our list of primary service locations below. Don't see your city? Give us a call!
            </p>
            <div className="grid grid-cols-2 gap-4">
              {SERVICE_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-2 text-slate-700 font-bold">
                  <MapPin className="text-sky-600 w-5 h-5" />
                  {area}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-200 rounded-3xl h-96 overflow-hidden relative shadow-inner">
            {/* Placeholder for Map */}
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-bold text-center p-8">
              <div className="space-y-4">
                <MapPin className="w-16 h-16 mx-auto opacity-20" />
                <p>Interactive Service Map Integration</p>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
              alt="Map" 
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <section className="py-24 bg-white pt-32">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-sky-600 font-black uppercase tracking-widest text-sm mb-4">Our Story</h2>
        <h3 className="text-5xl font-black text-slate-900 mb-8">Why "Duct Monkey"?</h3>
        <div className="prose prose-lg text-slate-600 space-y-6">
          <p className="text-xl leading-relaxed">
            Let's be honest: air duct cleaning can be a boring, technical industry. 
            When we started this business 15 years ago, we wanted a name that was memorable, 
            friendly, and reflected our team's energy.
          </p>
          <p>
            Our technicians are "monkeys" in the best way possible—agile, thorough, and 
            not afraid to get into the tightest spots of your HVAC system to ensure 
            every bit of dust is gone. We take our work seriously, but we don't take 
            ourselves too seriously.
          </p>
          <p className="font-bold text-slate-900">
            Our mission is simple: To provide the most thorough duct cleaning experience 
            you've ever had, with zero "monkey business" when it comes to pricing.
          </p>
        </div>
        
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-black text-sky-600 mb-2">15+</div>
            <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-sky-600 mb-2">10k+</div>
            <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Homes Cleaned</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-sky-600 mb-2">100%</div>
            <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactPage = () => {
  return (
    <section className="py-24 bg-slate-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-sky-600 font-black uppercase tracking-widest text-sm mb-4">Contact Us</h2>
            <h3 className="text-5xl font-black text-slate-900 mb-8">Let's Clear the Air.</h3>
            <p className="text-slate-600 text-lg mb-12">
              Ready to breathe easier? Contact us today for a free inspection or to book your service. 
              Our team is standing by to help.
            </p>
            
            <div className="space-y-8">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-6 group">
                <div className="bg-sky-600 p-4 rounded-2xl text-white group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-1">Call or Text</p>
                  <p className="text-2xl font-black text-slate-900">{PHONE_NUMBER}</p>
                </div>
              </a>
              <div className="flex items-center gap-6">
                <div className="bg-emerald-600 p-4 rounded-2xl text-white">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-1">Email Us</p>
                  <p className="text-2xl font-black text-slate-900">{EMAIL}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-amber-500 p-4 rounded-2xl text-white">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-1">Business Hours</p>
                  <p className="text-2xl font-black text-slate-900">Mon - Sat: 7am - 7pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
            <h4 className="text-2xl font-black text-slate-900 mb-6">Send a Message</h4>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ setView }: { setView: (v: View) => void }) => {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-sky-600 p-2 rounded-lg">
                <Wind className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black tracking-tighter">
                DUCT <span className="text-sky-600">MONKEY</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-md mb-8">
              Providing professional air duct and dryer vent cleaning services since 2011. 
              We're dedicated to improving indoor air quality and home safety for our local community.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-slate-400 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><button onClick={() => setView('home')} className="hover:text-sky-500">Home</button></li>
              <li><button onClick={() => setView('services')} className="hover:text-sky-500">Services</button></li>
              <li><button onClick={() => setView('reviews')} className="hover:text-sky-500">Reviews</button></li>
              <li><button onClick={() => setView('about')} className="hover:text-sky-500">About Us</button></li>
              <li><button onClick={() => setView('contact')} className="hover:text-sky-500">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-sm mb-6">Services</h4>
            <ul className="space-y-4 text-slate-400">
              <li>Air Duct Cleaning</li>
              <li>Dryer Vent Cleaning</li>
              <li>HVAC Sanitizing</li>
              <li>Filter Replacement</li>
              <li>Commercial Cleaning</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2026 {BUSINESS_NAME}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyCall = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-white/80 backdrop-blur-md border-t border-slate-200 flex gap-4">
      <a 
        href={`tel:${PHONE_NUMBER}`}
        className="flex-1 bg-sky-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 shadow-lg shadow-sky-600/30"
      >
        <Phone className="w-5 h-5" />
        CALL NOW
      </a>
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-slate-900 text-white px-6 rounded-2xl font-black"
      >
        QUOTE
      </button>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<View>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const renderView = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero onGetQuote={() => setIsQuoteModalOpen(true)} />
            <TrustSignals />
            <ServicesSection onGetQuote={() => setIsQuoteModalOpen(true)} />
            <BeforeAfterSection />
            <ReviewsSection />
            <ServiceAreas />
          </>
        );
      case 'services':
        return <ServicesSection onGetQuote={() => setIsQuoteModalOpen(true)} />;
      case 'about':
        return <AboutPage />;
      case 'reviews':
        return <ReviewsSection />;
      case 'service-area':
        return <ServiceAreas />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Hero onGetQuote={() => setIsQuoteModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-sky-100 selection:text-sky-900">
      <Header setView={setView} currentView={view} />
      
      <main>
        {renderView()}
      </main>

      <Footer setView={setView} />
      
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      <StickyCall />

      {/* Conversion Strategy Floating Tooltip (Internal/Admin View Only - for Demo) */}
      <div className="fixed bottom-24 right-6 z-40 group hidden lg:block">
        <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl max-w-xs opacity-0 group-hover:opacity-100 transition-all pointer-events-none translate-y-4 group-hover:translate-y-0">
          <h5 className="font-black text-sky-400 text-xs uppercase tracking-widest mb-2">Conversion Strategy</h5>
          <ul className="text-xs space-y-2 text-slate-300">
            <li>• <strong>Urgency:</strong> "Same-day service" & "15% Off"</li>
            <li>• <strong>Trust:</strong> Before/After proof & 4.9/5 rating</li>
            <li>• <strong>Frictionless:</strong> Sticky call button & 15-min response promise</li>
            <li>• <strong>Authority:</strong> NADCA & Google Guaranteed badges</li>
          </ul>
        </div>
        <div className="bg-sky-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl cursor-help">
          <Zap className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
