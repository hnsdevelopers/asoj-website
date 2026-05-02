import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryImages = [
    { id: 1, src: "/images/6.jpg", title: "Community Awareness Session", category: "Community Outreach" },
    { id: 2, src: "/images/16-768x432.jpg", title: "Youth Education Program", category: "Education" },
    { id: 3, src: "/images/WhatsApp-Image-2024-03-19-at-13.31.40-1-768x432.jpg", title: "Children's Rally", category: "Child Rights" },
    { id: 4, src: "/images/WhatsApp-Image-2024-03-19-at-13.31.34.jpg", title: "Classroom Learning", category: "Education" },
    { id: 5, src: "/images/422564913_915544820062162_6992698709254487044_n.jpg", title: "Community Meeting", category: "Community Outreach" },
    { id: 6, src: "/images/women_empowerment.jpg", title: "Women Empowerment Activity", category: "Women Empowerment" },
    { id: 7, src: "/images/disaster_management.jpg", title: "Counseling Session", category: "Support Services" },
    { id: 8, src: "/images/health-and-wash.jpg", title: "Health Camp", category: "Health" },
    { id: 9, src: "/images/WhatsApp-Image-2024-03-19-at-13.31.38-1.jpg", title: "Awareness Rally", category: "Awareness" },
    { id: 10, src: "https://freeimage.host/i/BLaU0Zv", title: "Genera", category: "Awareness" },
    { id: 10, src: "https://iili.io/BLaU0Zv.md.jpg", title: "Genera", category: "Awareness" },
    { id: 11, src: "https://iili.io/BLaUlwJ.md.jpg", title: "Genera", category: "Awareness" },
    { id: 12, src: "https://iili.io/BLaUcua.md.jpg", title: "Genera", category: "Awareness" },
    { id: 13, src: "https://iili.io/BLaUYyg.md.jpg", title: "Genera", category: "Awareness" },
    { id: 14, src: "https://iili.io/BLaUEnR.md.jpg", title: "Genera", category: "Awareness" },
    { id: 15, src: "https://iili.io/BLaUGGp.md.jpg", title: "Genera", category: "Awareness" },
    { id: 16, src: "https://iili.io/BLaUM6N.md.jpg", title: "Genera", category: "Awareness" },
    { id: 17, src: "https://iili.io/BLaUWFI.md.jpg", title: "Genera", category: "Awareness" },
    { id: 18, src: "https://iili.io/BLaUXat.md.jpg", title: "Genera", category: "Awareness" },
    { id: 19, src: "https://iili.io/BLaUh8X.md.jpg", title: "Genera", category: "Awareness" },
    { id: 20, src: "https://iili.io/BLaUw9n.md.jpg", title: "Genera", category: "Awareness" },
    { id: 21, src: "https://iili.io/BLaUNus.md.jpg", title: "Genera", category: "Awareness" },
    { id: 22, src: "https://iili.io/BLaUOwG.md.jpg", title: "Genera", category: "Awareness" },
    { id: 23, src: "https://iili.io/BLa6RWJ.md.jpg", title: "Genera", category: "Awareness" },
    { id: 24, src: "https://iili.io/BLa6Axa.md.jpg", title: "Genera", category: "Awareness" },
    { id: 25, src: "https://iili.io/BLa65iv.md.jpg", title: "Genera", category: "Awareness" }
  ]

  const categories = ["All", "Community Outreach", "Education", "Child Rights", "Women Empowerment", "Health", "Support Services", "Awareness"]

  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/16-768x432.jpg"
          alt="Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-lg md:text-xl">Moments of Impact and Change</p>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                onClick={() => openLightbox(image, index)}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold">{image.title}</p>
                    <p className="text-white/80 text-sm">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox() }}
            className="absolute top-4 right-4 text-white hover:text-orange-500 transition"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-500 transition bg-black/50 p-2 rounded-full"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-orange-500 transition bg-black/50 p-2 rounded-full"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <p className="text-white text-lg font-semibold">{selectedImage.title}</p>
              <p className="text-gray-400">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
