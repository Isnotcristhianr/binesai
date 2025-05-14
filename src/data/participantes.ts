export interface Participante {
  id: number
  nombre: string
  provincia: string
  // Campos adicionales para el detalle
  descripcion?: string
  imagen?: string
  obras?: Obra[]
}

export interface Obra {
  id: number
  titulo: string
  tecnica: string
  soporte: string
  dimensiones: string
  materiales: string
  imagenes: string[]
}

export const participantes: Participante[] = [
  { id: 1, nombre: 'Alomoto Angélica', provincia: 'Pichincha', obras: [
    {
      id: 1,
      titulo: 'El mismo chancho con diferente soga',
      tecnica: 'mixta: modelado, cerámica esmaltada (doble cocción. 1: 1040 °, 2: 980° ) y aplicaciones de pan de oro.',
      soporte: 'cubo de madera color blanco',
      dimensiones: '100 de largo x 70 de ancho x 80 de alto, centímetros aproximadamente. 18 kilos aproximadamente.',
      materiales: 'cerámica, madera, pan de oro',
      imagenes: ['/imgs/artistas/1_alomoto/1.jpg', '/imgs/artistas/1_alomoto/2.jpg'],
    }
  ] },
  { id: 2, nombre: 'Ayala Mónica', provincia: 'Imbabura', obras: [
    {
      id: 1,
      titulo: 'Susurros del pasado',
      tecnica: 'Mixta',
      soporte: 'Módulo de madera',
      dimensiones: "100 cm alto, 80 cm ancho, 30 cm profundidad. 35Kg aproximadamente.",
      materiales: 'Arcilla, acero inoxidable, acero negro, fluido especial para producción de movimiento.',
      imagenes: ['/imgs/artistas/2_ayala/1.jpg', '/imgs/artistas/2_ayala/2.jpg'],
    }
  ] },
  { id: 3, nombre: 'Buitrón Héctor', provincia: 'Imbabura', obras: [
    {
      id: 1,
      titulo: "Sinfonía para no dormir",
      tecnica: "Mixta (Modelado en arcilla, tallado en cerámica, tallado en madera, piedra)",
      soporte: "Arcilla, madera, piedra",
      dimensiones: "135cm alto x 70cm fondo x 100cm ancho ",
      materiales: "Arcilla, madera, piedra",
      imagenes: ['/imgs/artistas/3_buitron/1.jpg', '/imgs/artistas/3_buitron/2.jpg'],
    }
  ] },
  { id: 4, nombre: 'Cabascango Carlos', provincia: 'Imbabura', obras: [
    {
      id: 1,
      titulo: "Protégenos Arcángel San Miguel",
      tecnica: "Escultura estilo barroco.",
      soporte: "Mi objetivo es continuar el legado de la escultura en madera en San Antonio, recuperando la tradición y la técnica que se están perdiendo. Quiero crear una obra completamente de madera, sin intervención de materiales modernos, que refleje la pasión y la dedicación de los artesanos que vinieron antes que yo. Un tributo a la tradición y un ejemplo de que la técnica y la calidad pueden seguir siendo relevantes en la era moderna.",
      dimensiones: "1.15 de alto 60 de ancho, peso 7 kilogramos.",
      materiales: "Madera de nogal ",
      imagenes: ['/imgs/artistas/4_cabascango/1.jpg', '/imgs/artistas/4_cabascango/2.jpg'],
    }
  ] },
  { id: 5, nombre: 'Casamin Edison', provincia: 'Pichincha', obras: [
    {
      id: 1,
      titulo: "DESFALCARD: Homo Economicus",
      tecnica: "Escultura",
      soporte: "Mixta - Instalación",
      dimensiones: "200cmX100cmX100cm 15kg",
      materiales: "Metal soldado, MDF, hilo nylon, arena, grabado, intaglio ",
      imagenes: ['/imgs/artistas/5_casamin/1.jpg', '/imgs/artistas/5_casamin/2.jpg'],
    }
  ] },
  { id: 6, nombre: 'Castillo Carlos', provincia: 'Imbabura', obras: [
    {
      id: 1,
      titulo: "LA NUEVA ERA",
      tecnica: "Mixta",
      soporte: "N/A",
      dimensiones: "Alto 1.90 cm x 80.5 cm x 30.5 cm",
      materiales: "Madera, metal, aluminio, tuercas, tornillos, auto perforantes, microchips,soldadura, acero, plástico, resina poliéster, fibra de vidrio, tubos plásticos, acrílicos,lacas.",
      imagenes: ['/imgs/artistas/6_castillo/1.jpg', '/imgs/artistas/6_castillo/2.jpg'],
    }
  ] },
  { id: 7, nombre: 'Celi David', provincia: 'Pichincha', obras: [
    {
      id: 1,
      titulo: "Ritualidad Desencofrada",
      tecnica: "Talla sobre bloque de cemento (instalación)",
      soporte: "Bloque de cemento",
      dimensiones: "30*30*120 cm aprox",
      materiales: "Cemento, metal barrillas, pigmentos y bloques de cemento",
      imagenes: ['/imgs/artistas/7_celi/1.jpg', '/imgs/artistas/7_celi/2.jpg'],
    }
  ] },
  { id: 8, nombre: 'Chalco Patricio', provincia: 'Azuay', obras: [
    {
      id: 1,
      titulo: "Sombra y Permanencia: La Huella del Obrero",
      tecnica: "Instalación escultórica",
      soporte: "Reproducciones en yeso, madera y metal",
      dimensiones: "Ancho 80, largo 80 y alto 1.20",
      materiales: "Base de madera para soportes de luz, fuentes de luz neutra y blanca fuerte, reproducción de manos en yeso, herramientas dañadas y oxidadas.",
      imagenes: ['/imgs/artistas/8_chalco/1.jpg', '/imgs/artistas/8_chalco/2.jpg'],
    }
  ] },
  { id: 9, nombre: 'Estrella Milton', provincia: 'Pichincha', obras: [
    {
      id: 1,
      titulo: "GEOMETRIA ORGANICA",
      tecnica: "ESCULTURA-MADERA MIXTA",
      soporte: "Base escultura (9 cm x 30 cm x 16 cm)",
      dimensiones: "Escultura (54 cm x 69cm x 30 cm)",
      materiales: "Escultura: Madera de Nogal y Naranjillo",
      imagenes: ['/imgs/artistas/9_estrella/1.jpg', '/imgs/artistas/9_estrella/2.jpg'],
    }
  ] },
  { id: 10, nombre: 'Fernández Richard', provincia: 'Pichincha', obras: [
    {
      id: 1,
      titulo: "Retratos del Despojo",
      tecnica: "Escultura Cerámica/ Placas, Modelado y Esgrafiado",
      soporte: "Madera y Pernos de Hierro",
      dimensiones: "190 cm x 40 cm",
      materiales: "Arcilla de baja y alta temperatura, engobes, patinas, bajo cubiertas, esmaltes brillantes y mates.",
      imagenes: ['/imgs/artistas/10_fernandez/1.jpg', '/imgs/artistas/10_fernandez/2.jpg'],
    }
  ] },
  { id: 11, nombre: 'Forster Ana', provincia: 'Guayas', obras: [
    {
      id: 1,
      titulo: "“El jardín de mi mejor amigo: brotes de una ternura compartida",
      tecnica: "Cerámica escultórica, modelada a mano y quemada con aplicación de pigmentos y esmaltes.",
      soporte: "Cemento",
      dimensiones: "Dimensiones: 200 x 50 x 40 cm, Peso: 40 kg, Volumen: 400,000 cm3",
      materiales: "Barro blanco, pigmentos y esmaltes cerámicos. Estructura de tubo y base de cemento.",
      imagenes: ['/imgs/artistas/11_forster/1.jpg', '/imgs/artistas/11_forster/2.jpg'],
    }
  ] },
  { id: 12, nombre: 'Fuentes Mario', provincia: 'Imbabura', obras: [
    {
      id: 1,
      titulo: "Luz-Wituk",
      tecnica: "Tallado en madera aplicada la técnica japonesa Yakisugido",
      soporte: "Madera",
      dimensiones: "125 x 42 x 32 cm. Peso aproximado 16 kg.",
      materiales: "Madera de cedro y pino, cable electroluminiscente, inversor de corriente eléctrica",
      imagenes: ['/imgs/artistas/12_fuentes/1.jpg', '/imgs/artistas/12_fuentes/2.jpg'],
    }
  ] },
  { id: 13, nombre: 'Fuentes David', provincia: 'Imbabura', obras: [
    {
      id: 1,
      titulo: "MARTES 13",
      tecnica: "Escultura Cerámica/ Placas, Modelado y Esgrafiado",
      soporte: "N/E",
      dimensiones: "1.20m de alto, 0.30 m de ancho, 0.45m de profundidad.",
      materiales: "Madera de pino - cipreses envejecida.",
      imagenes: ['/imgs/artistas/13_fuentes/1.jpg', '/imgs/artistas/13_fuentes/2.jpg'],
    }
  ] },
  { id: 14, nombre: 'Gamboa Pablo', provincia: 'Pichincha', obras: [
    {
      id: 1,
      titulo: "VESTIGIOS DEL ANTROPOCENO",
      tecnica: "ENSAMBLAJE",
      soporte: "MDF",
      dimensiones: "110 x 103 x 16 cm. 20 lbs.",
      materiales: "PLÁSTICO REUTILIZADO, MDF Y TORNILLOS",
      imagenes: ['/imgs/artistas/14_gamboa/1.jpg', '/imgs/artistas/14_gamboa/2.jpg'],
    }
  ] },
  { id: 15, nombre: 'García Moreno Pablo', provincia: 'Imbabura', obras: [
    {
      id: 1,
      titulo: "DESEQUILIBRIO DEL EQUILIBRIO",
      tecnica: "Madera vista",
      soporte: "N/E",
      dimensiones: "54cm x 54cmx 96cm 30 kilos",
      materiales: "Madera reciclada, chanul, caimitillo, cedro, planta de cactus y aceite de linaza",
      imagenes: ['/imgs/artistas/15_garcia/1.jpg', '/imgs/artistas/15_garcia/2.jpg'],
    }
  ] },
  { id: 16, nombre: 'Jarrín Aguiles', provincia: 'Pichincha', obras: [
    {
      id: 1,
      titulo: "Lo que se niega crece",
      tecnica: "Escultura en tierra apisonada y acero pulido con inserción de elementos vegetales.",
      soporte: "N/E",
      dimensiones: "Base de tierra apisonada: 75 cm (alto) x 75 cm (ancho) x 75 cm (profundidad), Altura total aproximada incluyendo hojas metálicas: hasta 200 cm (según distribución de elementos superiores).",
      materiales: "Tierra compactada (suelo local), acero pulido (en piezas de dimensiones variables)",
      imagenes: ['/imgs/artistas/16_jarrin/1.jpg', '/imgs/artistas/16_jarrin/2.jpg'],
    }
  ] },
  { id: 17, nombre: 'Loayza Gabriela', provincia: 'Los Ríos', obras: [
    {
      id: 1,
      titulo: "Transportando mi piel",
      tecnica: "Escultura de bronce y acrílico",
      soporte: "Tubo de hierro redondo 1",
      dimensiones: "190cm x 120cm x120, 20kg",
      materiales: "Bronce, acrílico, tubo de hierro redondo 1",
      imagenes: ['/imgs/artistas/17_loaiza/1.jpg', '/imgs/artistas/17_loaiza/2.jpg'],
    }
  ] },
  { id: 18, nombre: 'Lopez Marlon', provincia: 'Imbabura', obras: [
    {
      id: 1,
      titulo: "Maskashpa maskashpa, tukuy pachapi tarinkami",
      tecnica: "Instalación: mesa de trabajo en madera de ciprés recubierta de oro falso, herramientas de talladores incrustadas a la mesa de trabajo, en la pared hay un marco tallado y dorado con pan de oro y plata que de modo decorativo contiene libros de Eugenio Espejo, en un rincón dentro de la instalación está un parlante que repite un texto de Eugenio Espejo.",
      soporte: "Piso estable y pared",
      dimensiones: "50kg. 200 x 125 x 50 cm",
      materiales: "Madera, oro 22.5k, falso oro, gubias y formones recuperadas en algunos talleres Libros de Eugenio Espejo",
      imagenes: ['/imgs/artistas/18_lopez/1.jpg', '/imgs/artistas/18_lopez/2.jpg'],
    }
  ] },
  { id: 19, nombre: 'Mayorga Noé', provincia: 'Tungurahua', obras: [
    {
      id: 1,
      titulo: "Nachan Wuanwhisca",
      tecnica: "Escultura",
      soporte: "Cerámica cocida ",
      dimensiones: "Alto: 105 cm. Ancho: 65 cm. ",
      materiales: "Arcilla cocida, oro cerámico,  latón repujado con baño de plata, piedra tallada",
      imagenes: ['/imgs/artistas/19_mayorga/1.jpg', '/imgs/artistas/19_mayorga/2.jpg'],
    }
  ] },
  { id: 20, nombre: 'Ordoñez Boris', provincia: 'Azuay', obras: [
    {
      id: 1,
      titulo: "Retratos del Despojo",
      tecnica: "Escultura Cerámica/ Placas, Modelado y Esgrafiado",
      soporte: "N/E",
      dimensiones: "1.20m de alto, 0.30 m de ancho, 0.45m de profundidad.",
      materiales: "Madera de pino - cipreses envejecida.",
      imagenes: ['/imgs/artistas/20_ordonez/1.jpg', '/imgs/artistas/20_ordonez/2.jpg'],
    }
  ] },
  { id: 21, nombre: 'Ortega Hugo', provincia: 'Pichincha',
    obras: [
      {
        id: 1,
        titulo: "Gótica",
        tecnica: "Mixta",
        soporte: "Madera",
        dimensiones: "Alt. 102cm, Diametro 45cm, Peso Aprox. 15/20 libras",
        materiales: "Madera, Piedra, Vidrio",
        imagenes: ['/imgs/artistas/21_ortega/1.jpg', '/imgs/artistas/21_ortega/2.jpg'],
      }
    ]
   },
  { id: 22, nombre: 'Pozo Carlos', provincia: 'Imbabura', 
    obras: [
      {
        id: 1,
        titulo: "Yakuruna",
        tecnica: "Talla en piedra",
        soporte: "Piedra andesita",
        dimensiones: "Alto: 62cm. Ancho: 25 cm. Profundidad: 40 cm.",
        materiales: "Piedra andesita gris.",
        imagenes: ['/imgs/artistas/22_pozo/1.jpg', '/imgs/artistas/22_pozo/2.jpg'],
      }
    ]
   },
  { id: 23, nombre: 'Puebla Omar', provincia: 'Pichincha',
    obras: [
      {
        id: 1,
        titulo: "El eterno juego de recordar para olvidars",
        tecnica: "Imaginería contemporánea: modelado en plastilina autofraguante y muebles intervenidos con pan de oro y aerosol",
        soporte: "Plastilina autofraguante de colores, muebles de madera",
        dimensiones: "183 cm de alto x 65 cm profundidad x 177 cm de ancho Peso aproximado 50 kilogramos",
        materiales: "Plastilina autofraguante, muebles de madera, vidrio, pan de oro, pintura aerosol",
        imagenes: ['/imgs/artistas/23_puebla/1.jpg', '/imgs/artistas/23_puebla/2.jpg'],
      }
    ]
   },
  { id: 24, nombre: 'Punín Gabriela', provincia: 'Loja',
    obras: [
      {
        id: 1,
        titulo: "Entre la Piel y la Membrana",
        tecnica: "Bioarte",
        soporte: "Resina",
        dimensiones: "25 de altura x 20 de ancho x 10 de profundidad",
        materiales: "Piel a partir de microorganismo sobre resina.",
        imagenes: ['/imgs/artistas/24_punin/1.jpg', '/imgs/artistas/24_punin/2.jpg'],
      }
    ]
   },
  { id: 25, nombre: 'Quilumbango Byron', provincia: 'Imbabura',
    obras: [
      {
        id: 1,
        titulo: "Grano de Oro",
        tecnica: "Escultura",
        soporte: "Madera de capul",
        dimensiones: "Alto: 200 cm Ancho: 40 cm Profundidad: 35 cm. Peso: 25 libras",
        materiales: "Madera de capulí, lija, sellador, cera",
        imagenes: ['/imgs/artistas/25_quilumbango/1.jpg', '/imgs/artistas/25_quilumbango/2.jpg'],
      }
    ]
   },
  { id: 26, nombre: 'Rivera Juan', provincia: 'Imbabura',
    obras: [
      {
        id: 1,
        titulo: "Memoria y ser",
        tecnica: "Mixta",
        soporte: "Madera, metal, piedra, resina.",
        dimensiones: "150 cm de largo x 115 cm de ancho x 120 cm de alto",
        materiales: "Madera, metal, piedra, resina.",
        imagenes: ['/imgs/artistas/26_rivera/1.jpg', '/imgs/artistas/26_rivera/2.jpg'],
      }
    ]
   },
  { id: 27, nombre: 'Sinchi Damián', provincia: 'Azuay',
    obras: [
      {
        id: 1,
        titulo: "PUTUTU",
        tecnica: "ESCULTURA INTERACTIVA-SONORA EN MADERA DE PINO Y TEKA",
        soporte: "LA ESCULTURA DEBE COLGAR A 12CM DESDE SU BASE AL PISO. LA ESCULTURA POSEE 12 METROS DE HILO NYLON PARA QUE PUEDA SER COLGADA. A LADO DE LA ESCULTURA DEBE HABER UN RECIPIENTE CON “POROTOS BOLA” PARA QUE EL ESPECTADOR PUEDA INTERACTUAR CON LA ESCULTURA. EN EL PISO SE PONE UN CÍRCULO DE TIERRA DE UN DIÁMETRO DE 64CM. PARA QUE LOS POROTOS CAIGAN AHÍ.",
        dimensiones: "120 X 120 X 60 CM, 30 Kg, 864.000 cm3.",
        materiales: "Madera de pino y teka",
        imagenes: ['/imgs/artistas/27_sinchi/1.jpg', '/imgs/artistas/27_sinchi/2.jpg'],
      }
    ]
   },
  { id: 28, nombre: 'Suasti Pamela', provincia: 'Pichincha',
    obras: [
      {
        id: 1,
        titulo: "Tensiones de un tejido desdibujado",
        tecnica: "Instalación conjunto escultórico de papel maché tejido",
        soporte: "Madera",
        dimensiones: "170 x 50 cm 4,8 kilos",
        materiales: "Pulpa de papel, cola blanca, resina, tintes vegetales, hilo chillo.",
        imagenes: ['/imgs/artistas/28_suasti/1.jpg', '/imgs/artistas/28_suasti/2.jpg'],
      }
    ]
   },
  { id: 29, nombre: 'Taller Hermanos Fuentes', provincia: 'Imbabura',
    /* no hay obras */
   },
  { id: 30, nombre: 'Velasco Jorge Chay', provincia: 'Guayas',
    obras: [
      {
        id: 1,
        titulo: "",
        tecnica: "Escultura instalada",
        soporte: "Ninguno",
        dimensiones: "110 cm. 5lb y volumen variabl2",
        materiales: "Piedra de mármol y orbejos",
        imagenes: ['/imgs/artistas/29_taller/1.jpg', '/imgs/artistas/29_taller/2.jpg'],
      }
    ]
   },
  { id: 31, nombre: 'Villacís Raúl', provincia: 'Cotopaxi', 
    obras: [
      {
        id: 1,
        titulo: "Melodías del alma",
        tecnica: "Soldadura eléctrica",
        soporte: "Metálico",
        dimensiones: "Alto - 76 cm sin base / 120 cm con base, Ancho - 12 cm, Fondo - 28 cm, Peso: 5 kg",
        materiales: "Materiales reciclados, Pedazos de tubo, Piezas de tensores de bicicletas, Pieza de máquina de coser antigua, Apliques metálicos, Monedas antiguas de Ecuador de diferente denominación",
        imagenes: ['/imgs/artistas/29_taller/1.jpg', '/imgs/artistas/29_taller/2.jpg'],
      }
    ]
  }
]
