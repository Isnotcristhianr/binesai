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
      imagenes: ['/imgs/artistas/1_alomoto/1.JPG', '/imgs/artistas/1_alomoto/2.JPG'],
    }
  ] },
  { id: 2, nombre: 'Ayala Mónica', provincia: 'Imbabura' },
  { id: 3, nombre: 'Buitrón Héctor', provincia: 'Imbabura' },
  { id: 4, nombre: 'Cabascango Carlos', provincia: 'Imbabura' },
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
