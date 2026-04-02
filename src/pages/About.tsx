import { CheckCircle2, Users, Clock, ThumbsUp } from "lucide-react";

export default function About() {
  return (
    <div className="pt-10 pb-24">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Sparkle Clean</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Your trusted local experts in property maintenance and painting, serving North Wicklow and South Dublin since 2016.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-100 rounded-3xl transform -rotate-3 z-0"></div>
            <img 
              src="/ourstorysc.jpg" 
              alt="Sparkle Clean Team" 
              className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-brand-100 p-3 rounded-full text-brand-600">
                  <ThumbsUp size={32} />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">100%</div>
                  <div className="text-sm font-medium text-slate-500">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Founded in 2016, Sparkle Clean began with a simple mission: to provide reliable, high-quality property maintenance services to the residents of Wicklow and Dublin. Over the years, we've grown into the No.1 choice for homeowners looking to restore and protect their properties.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We understand that your home is your biggest investment. That's why we treat every property as if it were our own, using only the best materials and equipment to ensure lasting results.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              <div className="bg-slate-50 p-6 rounded-2xl">
                <Users className="text-brand-500 mb-4" size={32} />
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Expert Team</h3>
                <p className="text-slate-600">Our dedicated workers bring over 25 years of combined experience to every project.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl">
                <Clock className="text-brand-500 mb-4" size={32} />
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">Since 2016</h3>
                <p className="text-slate-600">Years of proven reliability and countless happy customers across the region.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-brand-900 rounded-3xl p-8 md:p-16 text-white text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Why Choose Sparkle Clean?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Local & Reliable", desc: "Based in Delgany, we're always nearby when you need us." },
              { title: "Fully Insured", desc: "Complete peace of mind knowing your property is protected." },
              { title: "5-Star Rated", desc: "Over 40+ glowing reviews from satisfied local customers." },
              { title: "Attention to Detail", desc: "We don't cut corners. We clean them." },
              { title: "Free Quotes", desc: "Transparent pricing with no hidden surprises." },
              { title: "Comprehensive Service", desc: "From painting to powerwashing, we do it all." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="text-brand-400 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
