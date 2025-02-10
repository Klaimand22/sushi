/** @format */

import React from "react";
import { Menu, Clock, Phone, MapPin, Instagram, Facebook } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <nav className="relative z-10 flex items-center justify-between px-6 py-4 text-white">
          <h1 className="text-2xl font-light tracking-wider">SUSHI D'OR </h1>
          <Menu className="w-6 h-6 md:hidden" />
          <div className="hidden md:flex space-x-8">
            <a href="#menu" className="hover:text-gold-400 transition">
              Menu
            </a>
            <a href="#about" className="hover:text-gold-400 transition">
              À propos
            </a>
            <a href="#contact" className="hover:text-gold-400 transition">
              Contact
            </a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-5xl md:text-7xl font-light mb-6">SUSHI D'OR</h2>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl">
            Une expérience gastronomique japonaise d'exception à Paris.
          </p>
          <a
            href="#reservation"
            className="px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300"
          >
            Réserver une table
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-12 text-center font-light">
            NOTRE HISTOIRE
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1617196701537-7329482cc9fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Chef preparing sushi"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Depuis 2015, Sushi d'Or vous propose une expérience culinaire
                unique au cœur de la ville. Notre chef exécutif, formé à Tokyo,
                marie avec passion les techniques traditionnelles japonaises aux
                saveurs contemporaines.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Chaque plat est préparé avec des ingrédients soigneusement
                sélectionnés, importés directement du Japon ou sourcés
                localement auprès de producteurs de confiance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl mb-12 text-center font-light">
            NOS SPÉCIALITÉS
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Sushi Premium",
                description: "Une sélection de nos meilleurs nigiri",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Maki Signature",
                description: "Créations uniques du chef",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                title: "Sashimi Deluxe",
                description: "Les plus beaux poissons crus",
              },
            ].map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xl mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <Clock className="w-8 h-8 mx-auto" />
            <h3 className="text-xl">Horaires</h3>
            <p>Mardi - Samedi</p>
            <p>12h00 - 14h30</p>
            <p>19h00 - 22h30</p>
          </div>
          <div className="space-y-4">
            <Phone className="w-8 h-8 mx-auto" />
            <h3 className="text-xl">Réservation</h3>
            <p>01 23 45 67 89</p>
            <p>reservation@sushidor.fr</p>
          </div>
          <div className="space-y-4">
            <MapPin className="w-8 h-8 mx-auto" />
            <h3 className="text-xl">Adresse</h3>
            <p>123 Avenue des Champs-Élysées</p>
            <p>75008 Paris</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2024 Sushi d'Or. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-400 transition">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
