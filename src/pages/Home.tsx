import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Paintbrush, Droplets, Wrench, Home as HomeIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import ReviewCard from "../components/ReviewCard";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Screenshot 2026-04-02 181731.png" 
            alt="Beautiful house exterior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/20 text-brand-300 backdrop-blur-sm border border-brand-500/30 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse"></span>
              <span className="text-sm font-medium">No.1 in North Wicklow & South Dublin</span>
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
              Bring the <span className="text-brand-400">Sparkle</span> Back to Your Property
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Expert property maintenance, painting, and powerwashing services. We deliver 5-star results that make your home look brand new again.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:0862604005"
                className="bg-brand-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-600 transition-all hover:shadow-lg hover:shadow-brand-500/30 flex items-center gap-2"
              >
                Get a Free Quote
                <ArrowRight size={20} />
              </a>
              <Link 
                to="/gallery"
                className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all flex items-center gap-2"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-lg text-slate-600">Comprehensive property maintenance solutions tailored to your needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Painting"
              description="Professional interior and exterior painting services to refresh and protect your property."
              icon={<Paintbrush size={24} />}
              image="/paintingsparkle.jpg"
            />
            <ServiceCard 
              title="Powerwashing"
              description="Deep cleaning for driveways, patios, and walls to remove years of dirt and grime."
              icon={<Droplets size={24} />}
              image="/pwsparkleclean.jpg"
            />
            <ServiceCard 
              title="Window Cleaning"
              description="Streak-free window cleaning for a crystal clear view, inside and out."
              icon={<HomeIcon size={24} />}
              image="/windowsparkle.jpg"
            />
            <ServiceCard 
              title="Gutter Services"
              description="Complete gutter cleaning, repairs, and maintenance to prevent water damage."
              icon={<Wrench size={24} />}
              image="/gutterservicessparkle.jpg"
            />
            <ServiceCard 
              title="Tiling"
              description="Expert small tiling jobs including kitchen and bathroom splashbacks."
              icon={<HomeIcon size={24} />}
              image="/tilingsparkle.png"
            />
            <ServiceCard 
              title="Handyman Services"
              description="Flat roof waterproofing, fascia board repairs, and miscellaneous property jobs."
              icon={<Wrench size={24} />}
              image="/handywork.jpg"
              objectPosition="bottom 50%"
            />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">See the Difference in Action</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Our industrial-grade powerwashing equipment strips away years of dirt, algae, and grime in seconds. Watch how we restore surfaces to their original glory.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "Removes slippery algae and moss",
                  "Restores original color to paving",
                  "Safe for all exterior surfaces",
                  "Environmentally friendly process"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="text-brand-400 shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] w-full max-w-sm mx-auto lg:ml-auto bg-slate-800">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
                poster="/previewpw.png"
              >
                <source src="/powerwashclean.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transformations</h2>
            <p className="text-lg text-slate-600">Drag the slider to see the incredible results we achieve for our customers.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <BeforeAfterSlider 
              beforeImage="/before1sc.jpg"
              afterImage="/after1sc.jpg"
              objectPositionBefore="top"
            />
            <BeforeAfterSlider 
              beforeImage="/before2sc.jpg"
              afterImage="/after2sc.jpg"
              objectPositionAfter="top"
            />
            <BeforeAfterSlider 
              beforeImage="/before3sc.jpg"
              afterImage="/after3sc.jpg"
              objectPositionBefore="50% 33%"
            />
            <BeforeAfterSlider 
              beforeImage="/before4sc.jpg"
              afterImage="/after4sc.jpg"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/gallery"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors"
            >
              View Full Gallery
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Locals</h2>
              <p className="text-lg text-slate-600">Don't just take our word for it. See what our customers in Wicklow and Dublin have to say.</p>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-4xl font-bold text-slate-900">5.0</div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
                </div>
                <div className="text-sm text-slate-500 font-medium">Based on 40+ reviews</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ReviewCard 
              name="Aoife Clifford"
              date="2 months ago"
              text="Excellent service and communication. Dave came on time, gave detailed quotes and was very pleasant and helpful to deal with."
            />
            <ReviewCard 
              name="Sue Johnson"
              date="9 months ago"
              text="David has been cleaning our windows and gutters for many years now.  He's a pleasure to deal with and his work is excellent.  Also reasonably priced and always turns up as arranged.  I'm happy to highly recommend David and his team!!!"
            />
            <ReviewCard 
              name="Judy Hennesey"
              date="9 months ago"
              text="David and his team cleaned my roof/gutters and patio. They did a fantastic job. Communication from them, the work carried out,  and the finish was perfect. I would highly recommend them and will certainly use their services again in the future. Thank you David & Team."
            />
            <ReviewCard 
              name="Elaine Macken"
              date="11 months ago"
              text="Dave and the lads did a fabulous job painting the outside of my house.  The paintwork was in really bad condition so it was not an easy job but it now looks like new.  Dave kept in contact with me and arrived as agreed.  They got on with the work and cleaned up afterwards and you wouldn’t have known they had been here other than the house looks so much better!  Definitely recommend them!"
            />
            <ReviewCard 
              name="June Shannon"
              date="2 years ago"
              text="Can highly recommend Sparkle Clean they did a brilliant job power hosing our back yard that was covered in moss. It’s so clean it’s like we have a brand new garden. Also they were very friendly and super reliable."
            />
            <ReviewCard 
              name="Genevieve T Reid"
              date="1 year ago"
              text="Superb service from start to finish. David does an excellent job with anything that is asked of him and went over and above for us- nothing is a problem! On time, fair price and great communication. Highly recommend sparkle clean!!"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Ready to refresh your property?</h2>
          <p className="text-xl text-brand-100 mb-10">Contact us today for a free, no-obligation quote.</p>
          <a 
            href="tel:0862604005"
            className="inline-flex items-center gap-2 bg-white text-brand-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all hover:scale-105 shadow-xl"
          >
            <Phone size={24} />
            Call 086 260 4005
          </a>
        </div>
      </section>
    </div>
  );
}

// Need to import Star for the review section summary
import { Star } from "lucide-react";
