import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white py-40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactează-ne
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ai întrebări sau dorești să afli mai multe despre programele
            noastre? Suntem aici să te ajutăm!
          </p>
          <div className="h-px w-24 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
        </div>

        {/* Contact info + form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-indigo-500" />
              <div>
                <h4 className="font-semibold text-gray-800">Adresă</h4>
                <p className="text-gray-600">
                  Str. Educației nr. 12, București, România
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-indigo-500" />
              <div>
                <h4 className="font-semibold text-gray-800">Telefon</h4>
                <p className="text-gray-600">+40 745 123 456</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-indigo-500" />
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">contact@internationalschool.ro</p>
              </div>
            </div>

            {/* Optional map placeholder */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=Nanov%2C%20Romania&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6 bg-gray-50 p-8 rounded-2xl shadow-lg">
            <div>
              <label htmlFor="name" className="block font-semibold mb-1">
                Nume complet
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Numele tău"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="exemplu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-semibold mb-1">
                Mesaj
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Scrie-ne un mesaj..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Trimite mesajul
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
