"use client";import { useState, useEffect, useRef } from "react";import Image from "next/image";const PERSONAJES = [
  { 
    id: 1, 
    nombre: "Takara", 
    desc: "Sus Mejores amigos la describen como alguien con una mascara. por fuera alguien charlatan y Glamorosa, por dentro es alguien ruda y bruta, pero no es alguien mala solo usa esa mascara por motivos personales", 
    imagen: "/img/characters/takara/takara2.png",
    color: "from-pink-600/40",
    habilidades: [
      { id: 1, nombre: "Pasiva: Enojo", desc: "Mientras Menos Vidas tenga, mas aumenta su daño y resistencia al daño.", img: "/hab1.png" },
      { id: 2, nombre: "Habilidad: Giro De Hacha ", desc: "Takara Gira con su hacha durante 3 Segundos y durante el giro se puede mover a cualquier direccion.", img: "/hab2.png" },
      { id: 3, nombre: "Habilidad: Armadura de Hierro", desc: "al activarse Takara Recibe un aumento de 20% resistencia al daño y parte del daño que ella hace se convierte en regeneracion de vida.", img: "/hab3.png" },
      { id: 4, nombre: "Habilidad: Lanzamiento de Hacha ", desc: "Takara lanza su hacha y vuelve. provocando daño a cualquier enemigo que golpe en el trayecto.", img: "/hab4.png" },
      { id: 5, nombre: "Habilidad Definitiva: Valkyria (Superficie) ", desc: "Takara Golpea Con su Hacha el suelo y rompe la superficie aturdiendo cualquier enemigo que este en el area", img: "/hab5.png" },
      { id: 6, nombre: "Habilidad Definitiva: Valkyria (Aerio)", desc: "Si Takara Activa Valkyria mientras esta en el aire se lanza al suelo agresivamente y alterando la superficie en la que cae provocando mucho daño a cualquier enemigo en el area", img: "/hab5.png" }
    ]
  },
  { 
    id: 2, 
    nombre: "Shinoda", 
    desc: "Shinoda es alguien conocida por todo el curso. aunque mas por el nombre familiar, ella es alguien amigable y encantadora que parece no tener ningun defecto pero sus amigos saben todos los defectos de la impecable shinoda", 
    color: "from-yellow-600/40",
    imagen: "/img/shinoda.png",
    habilidades: [
      { id: 1, nombre: "Pasiva: Punto Debil", desc: "Los Enemigos Brillaran de color amarillo cuando su punto debil se revele. al atacar en ese momento el golpe obtendra mas daños", img: "/img/habilidades/shinoda/hab1.png"},
      { id: 2, nombre: "Habilidad: Maestria de la Espada", desc: "Si un enemigo esta por atacar y Punto Debil se activa podras parar y devolver el ataque mucho mas fuerte. si el enemigo esta debil podra ejecutarlo con dicho ataque.", img: "/img/habilidades/shinoda/hab2.png" },
      { id: 3, nombre: "Habilidad: Evasion Amarilla ", desc: "Shinoda puede realizar una evasion en cualquier direccion. cuenta con cuatro cargas y se regeneran", img: "/img/habilidades/shinoda/hab3.png" },
      { id: 4, nombre: "Habilidad: Concentrate Shino", desc: "al activarse obtienes un aumento de velocidad de movimiento y velocidad de ataque y si esta habilidad se utiliza mientras estas en el suelo despues de un ataque fuerte, shinoda se recuperara mas rapido.", img: "/img/habilidades/shinoda/hab4.png" },
      { id: 5, nombre: "Habilidad Definitiva: Corte Shinoda", desc: "al inicio de la habilidad Shino prepara su espada para un gran ataque. cuando lo realiza se teletransporta una gran distancia hacia adelante. todo enemigo que este entre el inicio y final del trayecto recibira una gran cantidad de daño.", img: "/img/habilidades/shinoda/hab5.png" }
    ]
  },
  { 
    id: 3, 
    nombre: "Touko", 
    desc: "Touko es alguien tranquila.. Demasiado tranquila, mayormente pasa el tiempo sola y en su propio mundo y le gusta. aunque tampoco se queja cuando sale a divertirse con sus amigos.", 
    color: "from-red-500/40",
    imagen: "/img/touko.png",
    habilidades: [
      { id: 1, nombre: "Pasiva: Truco del Sombrero", desc: "Cuando touko recibe un golpe fuerte pierde su sombrero. afectando negativamente sus estadisticas, si touko recupera su sombrero recupera sus estadisticas y ademas recibe un aumento breve de las mismas", img: "/hab1.png" },
      { id: 2, nombre: "Habilidad: Esquiva", desc: "Una Esquiva a cualquier direccion. Puede seguir disparando mientras se realiza la Esquiva", img: "/hab2.png" },
      { id: 3, nombre: "Habilidad: ¡Esto es Dinamita!", desc: "Touko Arroja un Paquete de Dinamita y este explota causando daño y empuje al enemigo.", img: "/hab3.png" },
      { id: 4, nombre: "Habilidad: Rifle De Palanca", desc: "Touko Cambia su arma por un Rifle de Palanca que cuenta con 8 Disparos que tienen mucha precicion y mucho mas Daño que los revolver.", img: "/hab4.png" },
      { id: 5, nombre: "Habilidad Definitiva: Manten la calma y ¡DISPARA!", desc: "Touko Canaliza y elimina todo ruido de lo que esta pasando y analizando a su alrededor. cuando touko escucha el ruido de disparar todo enemigo analizado recibira un disparo poderoso y Critico.", img: "/hab5.png" }
    ]
  },
  { 
    id: 4, 
    nombre: "Watanabe", 
    desc: "El Alquimista Jefe de los Caballeros...", 
    color: "from-teal-500/40",
    imagen: "/img/watanabe.png",
    habilidades: [
      { id: 1, nombre: "Pasiva: Combo", desc: "Mientras mas Golpes Aciertes. mas velocidad de ataque recibes pero en el caso de fallar un solo golpe, se pierde toda bonificacion y se reinicia la pasiva.", img: "/hab1.png" },
      { id: 2, nombre: "Habilidad: Patada Voladora", desc: "Watanabe tira una patada voladora hacia adelante. puede golpear multiples objetivos", img: "/hab2.png" },
      { id: 3, nombre: "Habilidad: El Gancho", desc: "Watanabe Tira un gancho que atrae al enemigo hacia el. cualquier enemigo que sea afectado por el gancho obtendra una reduccion de resistencia al daño.", img: "/hab3.png" },
      { id: 4, nombre: "Habilidad: El Otro Gancho", desc: "Watanabe realiza un Gancho al menton que levanta al enemigo. esta habilidad puede golpear a multiples objetivos", img: "/hab4.png" },
      { id: 5, nombre: "Habilidad Definitiva: Servidos En Bandeja", desc: "Watanabe tira su nunchakus que aumentan de tamaño y giran rapidamente atrayendo a cualquier enemigo hacia el centro de la habilidad. y todo daño hecho se traspasa a todo enemigo afectado por la habilidad", img: "/hab5.png" }
    ]
  }
];const IMAGENES_GALERIA = [
  { id: 1, src: "/galeria/img1.jpg", alt: "Paisaje de Liyue" },
  { id: 2, src: "/galeria/img2.jpg", alt: "Combate Arlecchino" },
  { id: 3, src: "/galeria/img3.jpg", alt: "Colombina Arte" },
  { id: 4, src: "/galeria/img4.jpg", alt: "Ciudad de Mondstadt" },
  { id: 5, src: "/img/characters/takara/showcase.png", alt: "Diseño de Takara" },
  { id: 6, src: "/galeria/img6.jpg", alt: "Alquimia de Albedo" },
  { id: 7, src: "/galeria/img7.jpg", alt: "Catedral de Favonius" },
  { id: 8, src: "/galeria/img8.jpg", alt: "Puerto de Liyue" },
];
const CAPITULOS_HISTORIA = [
  {
    id: 1,
    titulo: "El Origen del Caos",
    texto: "En la escuela hay muchos grupos de compañeros y amigos. pero uno que resaltaba bastante siempre era el grupo conformado por takara, shinoda, touko y watanabe. ya que algunos eran populares otros inteligentes entre otras cosas.",
    imagen: "/img/historia/origen.jpg", // Reemplaza con tus rutas reales
    alin: "derecha" // La imagen irá a la derecha
  },
  {
    id: 2,
    titulo: "La Rebelión de la IA",
    texto: "un dia un compañero les pidio ayuda con algo ya que necesitaba compañeros que trabajen en equipo. el grupo acepto por curiosidad. pero en realidad su compañero creo una simulacion.",
    imagen: "/img/historia/rebelion.jpg",
    alin: "izquierda" // La imagen irá a la izquierda
  },
  {
    id: 3,
    titulo: "Los Primeros Caídos",
    texto: "era algo increible. una realidad virtual super aumentada. el grupo estaba disfrutando esto. pero no todo era perfecto o divertido.",
    imagen: "/img/historia/caidos.jpg",
    alin: "derecha"
  },
  {
    id: 4,
    titulo: "La Resistencia Watanabe",
    texto: "el sistema empezo a fallar y a corromperse, y el grupo quedo atrapado dentro de la simulacion, el sistema empezo a ser muy inestable, pero solo les quedaba una opcion",
    imagen: "/img/historia/resistencia.jpg",
    alin: "izquierda"
  },
  {
    id: 5,
    titulo: "El Vórtice Shinoda",
    texto: "tenian que vencer el juego y completar la simulacion. ahora el grupo se enfreta a los enemigos del juego, y tambien a 'Bugs' 'Errores en la Simulacion' y a todo lo que la simulacion les arroje",
    imagen: "/img/historia/vortice.jpg",
    alin: "derecha"
  }
];export default function Home() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [seccion, setSeccion] = useState(0);
  const scrollBloqueado = useRef(false);

  const TOTAL_SECCIONES = 2 + PERSONAJES.length; 

  useEffect(() => {
    const manejarScroll = (e) => {
      const target = e.target;
      if (target.closest('.habilidades-scroll')) return; 

      if (scrollBloqueado.current) return;

      scrollBloqueado.current = true;
      setTimeout(() => { scrollBloqueado.current = false; }, 1000);

      if (e.deltaY > 0) {
        setSeccion((prev) => (prev < TOTAL_SECCIONES ? prev + 1 : prev));
      } else {
        setSeccion((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };

    window.addEventListener("wheel", manejarScroll, { passive: false });
    return () => window.removeEventListener("wheel", manejarScroll);
  }, [TOTAL_SECCIONES]);

  const esInicio = seccion === 0;
  const esHistoria = seccion === 1;
  const esPersonajes = seccion >= 2 && seccion <= 5;
  const esGaleria = seccion === 6;

  const pjActual = esPersonajes ? PERSONAJES[seccion - 2] : null;

  return (
    <main className="relative h-screen w-full overflow-hidden font-sans bg-[oklch(25.7% 0.09 281.288)] text-white">
      
      {/* FONDO DINÁMICO */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 transition-opacity duration-1000 ${esInicio ? 'opacity-100' : 'opacity-0'}`}>
          <Image src="/img/game_picture/background.png" alt="BG" className="object-cover md:object-center brightness-30" priority fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <div className={`absolute inset-0 bg-gradient-to-b ${pjActual?.color || 'from-transparent'} to-[#0e0e0f] transition-all duration-700 ${esPersonajes ? 'opacity-100' : 'opacity-0'}`} />
        <div className={`absolute inset-0 bg-[#0e0e0f] transition-opacity duration-1000 ${esHistoria || esGaleria ? 'opacity-100' : 'opacity-0'}`} />
      </div>

      {/* HEADER */}
      <nav className="absolute top-0 z-50 flex w-full items-center justify-between p-8 md:px-16">
        <div className="relative h-12 w-32 cursor-pointer" onClick={() => setSeccion(0)}>
          <Image src="/img/game_picture/logo2.png" alt="Logo" fill className="object-contain" />
        </div>
        <div className="flex gap-4">
          <button onClick={() => setSeccion(1)} className={`rounded-full px-6 py-2 text-xs font-bold transition-all ${esHistoria ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}>Historia</button>
          <button onClick={() => setSeccion(2)} className={`rounded-full px-6 py-2 text-xs font-bold transition-all ${esPersonajes ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}>Personajes</button>
          <button onClick={() => setSeccion(6)} className={`rounded-full px-6 py-2 text-xs font-bold transition-all ${esGaleria ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20'}`}>Galería</button>
        </div>
      </nav>

      {/* CONTENIDO CENTRAL */}
      <div className="h-full w-full flex items-center justify-center">
        
        {/* ... (Secciones Inicio e Historia permanecen igual) ... */}
        {esInicio && (
          <div className="flex flex-col items-center animate-in fade-in zoom-in duration-700">
            {/*<h1 className="text-7xl md:text-9xl font-serif italic uppercase tracking-tighter mb-6">BetaTester</h1>*/}
            <Image src="/img/game_picture/logo2.png" alt="logo" className="object-cover" width={1000} height={900}/>
            <p className="text-blue-200 tracking-[0.5em] uppercase text-sm mb-10">El Juego esta en tu contra. Literalmente</p>
            <button className="bg-blue-400 text-black px-10 py-4 shadow-lg shadow-blue-400 rounded-full font-bold hover:scale-105 transition-transform">DESCARGAR</button>
          </div>
        )}

{/* 1. HISTORIA REDISEÑADA COMO TIMELINE LARGA */}
{esHistoria && (
  <div className="w-full max-w-7xl px-10 md:px-20 animate-in fade-in slide-in-from-right-10 duration-1000">
    
    {/* Título Fijo de la Sección */}
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-2xl font-black italic mt-2 text-blue-300 uppercase tracking-widest [0_0_15px_rgba(59,130,246,0.5)]">
        Historia
      </h2>
    </div>

    {/* CONTENEDOR CON SCROLL INTERNO */}
    {/* Aquí está la magia: limitamos la altura y permitimos el scroll 
    <div className="h-[80vh] overflow-y-auto pr-6 space-y-24 pb-20 custom-scroll-historia">*/}
    <div className="h-[80vh] overflow-y-auto pr-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full custom-scroll-historia">
      
      {CAPITULOS_HISTORIA.map((cap, idx) => (
        <div 
          key={cap.id} 
          className={`grid grid-cols-1 md:grid-cols-12 gap-10 items-center animate-in fade-in slide-in-from-bottom-10`}
          style={{ animationDelay: `${idx * 200}ms` }} // Efecto cascada sutil
        >
          
          {/* BLOQUE DE TEXTO */}
          {/* Usamos 'order' de CSS para intercalar el orden en desktop si es alineación izquierda */}
          <div className={`col-span-12 md:col-span-6 ${cap.alin === "izquierda" ? "md:order-2" : "md:order-1"} flex flex-col gap-4`}>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black text-white/10 font-serif italic">0{cap.id}</span>
              {/*<h3 className="text-3xl font-bold text-amber-200 uppercase tracking-tight">{cap.titulo}</h3>*/}
            </div>
            <p className="text-zinc-300 text-lg leading-relaxed italic border-l-4 border-white/10 pl-6 py-2 group-hover:border-blue-400/50 transition-colors">
              "{cap.texto}"
            </p>
            <div className={`h-1 w-20 bg-blue-500/50 rounded-full mt-2 ${cap.alin === "derecha" ? "self-start" : "self-end"}`} />
          </div>

          {/* BLOQUE DE IMAGEN */}
          <div className={`col-span-12 md:col-span-6 ${cap.alin === "izquierda" ? "md:order-1" : "md:order-2"}`}>
            <div className="relative aspect-[16/10] bg-white/5 rounded-2xl overflow-hidden border border-white/10 group hover:border-blue-400 transition-all duration-500 shadow-2xl hover:shadow-blue-500/20">
              {/* Overlay sutil de brillo al hover */}
              <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              
              <Image 
                src={cap.imagen} 
                alt={cap.titulo} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Decoración de esquina tipo interfaz de juego */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-2xl pointer-events-none group-hover:border-blue-400 transition-colors" />
              <div className="absolute bottom-4 left-4 z-20 bg-black/70 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Registro Visual // A0{cap.id}</span>
              </div>
            </div>
          </div>

        </div>
      ))}

    </div>
  </div>
)}
        {/* 2-5. PERSONAJES */}
        {esPersonajes && pjActual && (
          <div key={seccion} className="grid grid-cols-12 w-full px-10 md:px-32 items-center animate-in fade-in slide-in-from-bottom-10 duration-700">
            
            <div className="col-span-12 md:col-span-6 flex flex-col justify-center h-[80vh]">
              {/* Títulos más compactos arriba para dar espacio */}
              <div className="mb-4">
                <span className="text-white-500 font-bold tracking-[0.3em] uppercase text-xs">Personajes</span>
                <h2 className="text-6xl md:text-7xl font-onest italic leading-none mt-2">{pjActual.nombre}</h2>
                <p className="text-zinc-300 italic text-base md:text-lg max-w-md mt-2">"{pjActual.desc}"</p>
              </div>
              
              {/* LISTA DE HABILIDADES AMPLIADA */}
              {/* Aumentamos max-h a 55vh para que quepan mejor las tarjetas grandes */}
              <div className="habilidades-scroll flex flex-col gap-4 max-h-[55vh] overflow-y-auto pr-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:rounded-full">
                {pjActual.habilidades.map((hab) => (
                  // Aumentamos el padding (p-4) y el gap (gap-6)
                  <div key={hab.id} className="flex items-center gap-6 bg-white/5 p-7 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all group cursor-default">
                    
                    {/* IMAGEN DE LA HABILIDAD: De w-12/h-12 a w-20/h-20 (o w-24/h-24 en desktop) */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 bg-black/40 rounded-full overflow-hidden border-2 border-white/20 group-hover:scale-105 group-hover:border-amber-400/50 transition-all duration-300 shadow-lg">
                      {/* Aquí reemplazas con tu imagen real de la habilidad */}
                      { <Image src={hab.img} alt={hab.nombre} fill priority className="object-cover" />}
                      <div className="w-full h-full flex items-center justify-center text-xs text-white/50">Img</div>
                    </div>

                    {/* TEXTO DE LA HABILIDAD: Fuentes más grandes y legibles */}
                    <div className="flex flex-col gap-1">
                      {/* Título más grande (text-base a text-lg) */}
                      <h4 className="text-base md:text-lg font-bold text-amber-200 tracking-wide">{hab.nombre}</h4>
                      {/* Descripción más grande (text-xs a text-sm) y color un poco más claro */}
                      <p className="text-sm md:text-[13px] text-zinc-300 leading-relaxed pr-2">{hab.desc}</p>
                    </div>

                  </div>
                ))}
              </div>

            </div>

            <div className="hidden md:block col-span-6 relative h-[80vh]">
              <Image 
                      src={pjActual.imagen} 
                      alt={pjActual.nombre} 
                      width={6000}
                      height={2700}
                      className="object-contain z-10" 
                      priority
                    />
               <div className="h-full w-full bg-gradient-to-t from-white/10 to-transparent blur-3xl rounded-full opacity-20" />
            </div>
          </div>
        )}

{esGaleria && (
          <div className="w-full max-w-6xl px-10 animate-in fade-in zoom-in duration-700">
            <h2 className="text-4xl font-black italic mb-10 text-center text-blue-300 uppercase tracking-widest">Galería</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {IMAGENES_GALERIA.map((img) => (
                <div key={img.id} onClick={() => setImagenSeleccionada(img)} className="group relative aspect-video bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-400 transition-all cursor-pointer shadow-2xl">
                  <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-bold tracking-widest uppercase">Ampliar</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MODAL CORREGIDO - SOLO UNO */}
      {imagenSeleccionada && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setImagenSeleccionada(null)}
        >
          <button className="absolute top-10 right-10 text-white hover:text-blue-400 text-4xl transition-colors">✕</button>
          
          <div className="relative w-[85vw] h-[75vh] animate-in zoom-in duration-500">
            <Image 
              src={imagenSeleccionada.src} 
              alt={imagenSeleccionada.alt} 
              fill 
              className="object-contain"
              priority 
            />
          </div>

          <div className="mt-8 text-center animate-in slide-in-from-bottom-5">
            <h3 className="text-2xl font-bold italic text-blue-200">{imagenSeleccionada.alt}</h3>
            <p className="text-zinc-500 text-sm mt-2 uppercase tracking-widest">Click fuera para cerrar</p>
          </div>
        </div>
      )}
      

      {/* INDICADORES Y SCROLL ICON ... (sin cambios) ... */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {Array.from({ length: TOTAL_SECCIONES + 1 }).map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-500 ${seccion === i ? 'w-8 bg-blue-400' : 'w-4 bg-white/20'}`} 
          />
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
        <span className="text-[8px] uppercase tracking-widest">Scroll para navegar</span>
      </div>
    </main>
  );
} 