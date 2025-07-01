import React from "react";

const EducationOverview = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Accent background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100 rounded-full opacity-10 blur-3xl"></div>

        <div className="relative px-6 py-16 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Centru de Studii <span className="text-blue-600">Hortensia</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Primul Centru de Studii din zonă cu atenție personalizată pentru
            fiecare copil
          </p>
        </div>
      </div>

      <div className="px-6 pb-16 max-w-6xl mx-auto space-y-16">
        {/* DE CE SĂ NE ALEGEȚI */}
        <section>
          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-200 hover:shadow-xl transition">
            <h2 className="text-3xl font-bold mb-8 text-blue-600">
              De ce să ne alegeți
            </h2>

            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <p>
                  Primul Centru de Studii din zonă în care copilul tău va avea o{" "}
                  <span className="text-purple-600 font-semibold">
                    atenție personalizată
                  </span>{" "}
                  pe tot parcursul perioadei de învățare, creștere și dezvoltare
                  cuprinse între{" "}
                  <span className="text-indigo-600 font-bold">
                    1 an și 18 ani
                  </span>
                  .
                </p>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
                <p>
                  Familia este "
                  <span className="text-purple-700 font-bold">
                    pilonul principal al societății
                  </span>
                  ", iar împreună vom crea un mediu în care fiecare copil va fi
                  ascultat și susținut.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1616077166746-1790c2e79f47?auto=format&fit=crop&w=900&q=80"
                  alt="Copii fericiți"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
                  Copii fericiți în mediul nostru de învățare
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alte secțiuni (ex: Pentru toate vârstele, Școala de Familie, etc.) */}
        {/* Le poți adapta în același mod: fundaluri albe, accente blue/purple pastel, text gray-700 */}

        {/* Final CTA */}
        <section>
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
              alt="Copii la activități"
              className="w-full h-96 object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent rounded-3xl"></div>
            <div className="absolute bottom-8 left-8 right-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-2">
                Alătură-te comunității noastre!
              </h3>
              <p className="text-lg">
                Unde fiecare copil este special și fiecare moment contează
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationOverview;
