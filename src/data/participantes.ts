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
  { id: 5, nombre: 'Casamin Edison', provincia: 'Pichincha' },
  { id: 6, nombre: 'Castillo Carlos', provincia: 'Imbabura' },
  { id: 7, nombre: 'Celi David', provincia: 'Pichincha' },
  { id: 8, nombre: 'Chalco Patricio', provincia: 'Azuay' },
  { id: 9, nombre: 'Estrella Milton', provincia: 'Pichincha' },
  { id: 10, nombre: 'Fernández Richard', provincia: 'Pichincha' },
  { id: 11, nombre: 'Förster Ana', provincia: 'Guayas' },
  { id: 12, nombre: 'Fuentes Mario', provincia: 'Imbabura' },
  { id: 13, nombre: 'Fuentes David', provincia: 'Imbabura' },
  { id: 14, nombre: 'Gamboa Pablo', provincia: 'Pichincha' },
  { id: 15, nombre: 'García Moreno Pablo', provincia: 'Imbabura' },
  { id: 16, nombre: 'Jarrín Aguiles', provincia: 'Pichincha' },
  { id: 17, nombre: 'Loaiza Gabriela', provincia: 'Los Ríos' },
  { id: 18, nombre: 'Lopez Marlon', provincia: 'Imbabura' },
  { id: 19, nombre: 'Mayorga Noé', provincia: 'Tungurahua' },
  { id: 20, nombre: 'Ordoñez Boris', provincia: 'Azuay' },
  { id: 21, nombre: 'Ortega Hugo', provincia: 'Pichincha' },
  { id: 22, nombre: 'Pozo Carlos', provincia: 'Imbabura' },
  { id: 23, nombre: 'Puebla Omar', provincia: 'Pichincha' },
  { id: 24, nombre: 'Punín Gabriela', provincia: 'Loja' },
  { id: 25, nombre: 'Quilumbango Byron', provincia: 'Imbabura' },
  { id: 26, nombre: 'Rivera Juan', provincia: 'Imbabura' },
  { id: 27, nombre: 'Sinchi Damián', provincia: 'Azuay' },
  { id: 28, nombre: 'Suasti Pamela', provincia: 'Pichincha' },
  { id: 29, nombre: 'Taller Hermanos Fuentes', provincia: 'Imbabura' },
  { id: 30, nombre: 'Velasco Jorge Chay', provincia: 'Guayas' },
  { id: 31, nombre: 'Villacís Raúl', provincia: 'Cotopaxi' }
]
