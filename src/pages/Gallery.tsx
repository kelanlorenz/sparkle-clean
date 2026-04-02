import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn } from "lucide-react";

const galleryImages = [
  { id: 1, category: "", src: "/619453482_18082580702519892_2471424990964606461_n.jpg", alt: "" },
  { id: 2, category: "", src: "/619911379_18089495807072154_1927093015103981803_n.jpg", alt: "" },
  { id: 3, category: "", src: "/625110745_18061743800321339_4357563596230609641_n.jpg", alt: "" },
  { id: 4, category: "", src: "/488766364_1156804003123743_6101735731720920143_n.jpg", alt: "" },
  { id: 5, category: "", src: "/489226851_1157155423088601_5462238372843549398_n.jpg", alt: "" },
  { id: 6, category: "", src: "/489901338_1158983299572480_7361052458419172583_n.jpg", alt: "" },
  { id: 7, category: "", src: "/527692570_1258754976261978_6527568052991940349_n.jpg", alt: "" },
  { id: 8, category: "", src: "/620953479_18079737422209047_2548605640854349271_n.jpg", alt: "" },
  { id: 9, category: "", src: "/621146765_18067978433445666_6828815595043152233_n.jpg", alt: "" },
  { id: 10, category: "", src: "/625110745_18061743800321339_4357563596230609641_n.jpg", alt: "" },
  { id: 11, category: "", src: "/639732275_18571164025054183_421781520823314430_n.jpg", alt: "" },
  { id: 12, category: "", src: "/618745846_18078701618589442_3917230198586316839_n.jpg", alt: "" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-10 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Work Gallery</h1>
          <p className="text-lg text-slate-600">
            Browse through our recent projects across North Wicklow and South Dublin. We take pride in every job we do.
          </p>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {galleryImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-medium text-sm">{image.alt}</p>
                  <p className="text-brand-300 text-xs">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
