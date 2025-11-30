import React, { useState, useEffect } from 'react';

// --- Components ---

const Header = () => (
  <header className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
            <i className="fa-solid fa-layer-group text-sm"></i>
          </div>
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            UiBuilder AI
          </span>
        </div>
        <button 
          onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold rounded-full text-white bg-white/10 hover:bg-white/20 transition-all duration-200 border-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          Unirse a la Beta
        </button>
      </div>
    </div>
  </header>
);

const Hero = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulation of API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/20 blur-[120px] rounded-full opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-violet-600/20 blur-[100px] rounded-full opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8 hover:bg-blue-500/20 transition-colors cursor-default">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          Acceso Beta Limitado
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Crea webs con <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Elementor</span> <br className="hidden lg:block" />
          en 60 segundos.
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10">
          La primera IA que combina la calidad visual de plantillas premium con Elementor. 
          Exporta a tu hosting. Sin cuotas abusivas ni plantillas genéricas.
        </p>

        {/* Capture Form */}
        {!submitted ? (
          <form id="hero-form" onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="fa-regular fa-envelope text-slate-500"></i>
              </div>
              <input
                type="email"
                required
                className="block w-full pl-10 pr-3 py-4 text-base rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-xl"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-slate-900 transition-all duration-300 shadow-lg shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {loading ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin mr-2"></i> Procesando
                </>
              ) : (
                <>
                  Solicitar Acceso <i className="fa-solid fa-arrow-right ml-2"></i>
                </>
              )}
            </button>
          </form>
        ) : (
          <div className="max-w-md mx-auto p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 flex items-center justify-center gap-2 animate-fade-in-up">
            <i className="fa-solid fa-check-circle"></i>
            <span className="font-medium">¡Te has unido a la lista de espera!</span>
          </div>
        )}

        <div className="mt-6 text-sm text-slate-500">
          <i className="fa-solid fa-lock mr-1.5 opacity-70"></i> Sin spam. Darse de baja en cualquier momento.
        </div>

        {/* Video Placeholder */}
        <div className="mt-20 relative max-w-5xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-2xl bg-slate-900 ring-1 ring-white/10 overflow-hidden shadow-2xl aspect-video flex flex-col">
            
            {/* Mock Browser Header */}
            <div className="h-10 bg-slate-800/50 border-b border-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="mx-auto w-1/3 h-5 bg-slate-700/50 rounded-md text-[10px] flex items-center justify-center text-slate-500 font-mono">
                uibuilder.ai/editor
              </div>
            </div>

            {/* Video Content Placeholder */}
            <div className="flex-1 flex flex-col items-center justify-center bg-slate-900 relative">
               <div className="absolute inset-0 bg-[url('https://picsum.photos/1200/675?grayscale&blur=2')] bg-cover bg-center opacity-20"></div>
               <div className="z-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 group-hover:bg-blue-600/80">
                  <i className="fa-solid fa-play text-white text-2xl pl-1"></i>
               </div>
               <p className="z-10 mt-6 font-semibold text-lg text-white drop-shadow-md">
                 VER DEMO: Generando web Dental en 50s
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => (
  <section className="py-24 bg-slate-950 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">¿Por qué otra herramienta de IA?</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Las herramientas actuales te obligan a elegir entre calidad, libertad o tiempo. Nosotros eliminamos el compromiso.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: "fa-solid fa-layer-group",
            title: "ZipWP es básico",
            desc: "Sus diseños gritan 'plantilla barata'. No puedes usarlos para clientes premium que pagan bien sin editarlos por horas.",
            color: "text-red-400"
          },
          {
            icon: "fa-solid fa-lock",
            title: "Webflow te encierra",
            desc: "Plataformas cerradas con hostings caros. Si dejas de pagar, pierdes tu web. Con nosotros, el código es tuyo.",
            color: "text-orange-400"
          },
          {
            icon: "fa-solid fa-stopwatch",
            title: "Diseñar a mano es lento",
            desc: "Construir un sitio desde cero en Elementor tarda de 10 a 20 horas. UiBuilder lo hace en 1 minuto, listo para entregar.",
            color: "text-blue-400"
          }
        ].map((item, idx) => (
          <div key={idx} className="glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${item.color}`}>
              <i className={`${item.icon} text-8xl -mr-4 -mt-4`}></i>
            </div>
            <div className={`w-14 h-14 rounded-xl bg-slate-900/50 flex items-center justify-center text-2xl mb-6 border border-white/10 ${item.color}`}>
              <i className={item.icon}></i>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Abstract Background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-20">
        <span className="text-blue-500 font-semibold tracking-wider uppercase text-sm">Flujo de Trabajo</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">De Prompt a Elementor en 3 Pasos</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent border-t border-dashed border-slate-600"></div>

        {[
          {
            step: "01",
            title: "Describe tu Visión",
            desc: "Escribe un prompt simple: 'Clínica dental moderna en Madrid, colores azules y blancos, enfoque en implantes'.",
            icon: "fa-solid fa-wand-magic-sparkles"
          },
          {
            step: "02",
            title: "IA Generativa",
            desc: "Nuestra IA selecciona los mejores bloques premium, redacta el copy persuasivo y estructura la navegación.",
            icon: "fa-solid fa-microchip"
          },
          {
            step: "03",
            title: "Exportación Nativa",
            desc: "Recibes un archivo JSON. Impórtalo en Elementor y verás la magia. Totalmente editable y tuyo para siempre.",
            icon: "fa-brands fa-elementor"
          }
        ].map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-slate-950 shadow-[0_0_0_4px_rgba(59,130,246,0.3)] flex items-center justify-center text-3xl text-white mb-8 z-10 group-hover:scale-110 transition-transform duration-300">
               <i className={`${item.icon} bg-clip-text text-transparent bg-gradient-to-br from-white to-slate-400`}></i>
            </div>
            <div className="absolute top-0 right-1/2 translate-x-10 -translate-y-2 text-6xl font-black text-slate-800/50 select-none z-0">
              {item.step}
            </div>
            <h3 className="text-xl font-bold text-white mb-4 z-10">{item.title}</h3>
            <p className="text-slate-400 z-10">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ComparisonTable = () => (
  <section className="py-24 bg-slate-900/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">La verdad incómoda</h2>
        <p className="text-slate-400">Deja de pagar mensualidades por herramientas que limitan tu crecimiento.</p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px] bg-slate-950 rounded-2xl border border-white/10 p-2 shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-6 text-slate-400 font-medium w-1/4">Característica</th>
                <th className="p-6 text-center text-slate-400 font-medium w-1/4">ZipWP / Otros</th>
                <th className="p-6 text-center w-1/4 bg-blue-600/10 rounded-t-xl border-t border-x border-blue-500/20 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Recomendado
                  </div>
                  <span className="text-white font-bold text-lg">UiBuilder AI</span>
                </th>
                <th className="p-6 text-center text-slate-400 font-medium w-1/4">Hosting Builders</th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base">
              {[
                { label: "Calidad de Diseño", c1: "Básica / Genérica", c2: "Premium / Agencia", c3: "Limitada", highlight: true },
                { label: "Exportación", c1: "Limitada", c2: "JSON Nativo Elementor", c3: "No (Lock-in)", highlight: true },
                { label: "Propiedad del Código", c1: "Sí", c2: "100% Tuyo", c3: "No (Alquilado)", highlight: false },
                { label: "Costo Mensual", c1: "$29/mes+", c2: "Pago por uso (Barato)", c3: "$15/mes+", highlight: true },
                { label: "Curva de Aprendizaje", c1: "Baja", c2: "Nula (Prompting)", c3: "Media/Alta", highlight: false },
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 text-slate-300 font-medium">{row.label}</td>
                  <td className="p-6 text-center text-slate-500">{row.c1}</td>
                  <td className={`p-6 text-center font-bold bg-blue-600/5 border-x border-blue-500/10 ${row.highlight ? 'text-blue-400' : 'text-white'}`}>
                    {row.highlight ? <i className="fa-solid fa-star text-xs mr-1 text-yellow-500"></i> : null}
                    {row.c2}
                  </td>
                  <td className="p-6 text-center text-slate-500">{row.c3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="glass p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 to-slate-950/90 relative overflow-hidden">
        {/* Glow Effects inside card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none"></div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para escalar tu agencia?</h2>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
          Únete a la beta privada y sé de los primeros en generar webs que normalmente costarían $2,000 en cuestión de minutos.
        </p>
        
        <button 
          onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-white/10 hover:bg-white/20 border-white/20 transition-all duration-300 hover:scale-105 shadow-xl backdrop-blur-sm"
        >
          Solicitar Acceso Anticipado <i className="fa-solid fa-arrow-up-right-from-square ml-3"></i>
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 border-t border-white/5 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white text-xs">
          <i className="fa-solid fa-layer-group"></i>
        </div>
        <span className="font-bold text-lg text-slate-300">UiBuilder AI</span>
      </div>
      
      <div className="flex gap-8 text-sm text-slate-500">
        <a href="#" className="hover:text-white transition-colors">Privacidad</a>
        <a href="#" className="hover:text-white transition-colors">Términos</a>
        <a href="#" className="hover:text-white transition-colors">Contacto</a>
      </div>
      
      <div className="text-slate-600 text-sm">
        &copy; 2024 UiBuilder AI. Hecho con <i className="fa-solid fa-heart text-red-900 mx-1"></i> para creadores.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30">
      <Header />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <ComparisonTable />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}