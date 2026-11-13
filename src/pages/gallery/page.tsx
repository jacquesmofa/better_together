import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import SiteGallery from '../../components/feature/SiteGallery';

// Gallery: albums in src/content/gallery.json, soft masonry in burgundy + blush.
export default function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery | Better Together';
  }, []);
  return (
    <div className="min-h-screen bg-blush-50">
      <Navbar />
      <section className="pt-36 pb-16 px-4 text-center bg-gradient-to-br from-burgundy-900 via-burgundy-800 to-burgundy-700 mb-14">
        <p className="font-script text-4xl text-gold-400">moments</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold text-white mt-2">Our Gallery</h1>
        <p className="mt-5 text-lg text-white/85 max-w-xl mx-auto">Love, faith and family in pictures. Tap any photo to see it full size.</p>
      </section>
      <section className="px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <SiteGallery
            note="Some pictures are illustrations until our own photos are added."
            theme={{ layout: 'masonry', ink: '#72263d', muted: '#4b5563', accent: '#9f2e48', accentInk: '#ffffff', tabBg: '#fbe8eb', radius: '1.25rem', headingClass: 'font-display' }}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
