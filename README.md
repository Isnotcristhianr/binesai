# BINESAI - 8va Bienal Nacional de Escultura San Antonio de Ibarra

Sitio web oficial de la 8va Bienal Nacional de Escultura San Antonio de Ibarra, desarrollado con Vue 3 + TypeScript + Vite.

## 🎨 Características

- Diseño minimalista y elegante
- Totalmente responsivo
- Animaciones suaves con AOS
- Navegación fluida entre secciones
- Optimizado para SEO
- Integración con Iconify para iconos

## 🛠 Tecnologías

- Vue 3
- TypeScript
- Tailwind CSS
- Vue Router
- AOS (Animate On Scroll)
- Iconify

## 📁 Estructura del Proyecto

```
src/
├── components/         # Componentes reutilizables
│   ├── main/          # Componentes principales
│   └── structure/     # Componentes estructurales (navbar, footer)
├── views/             # Vistas principales
├── router/            # Configuración de rutas
├── assets/            # Recursos estáticos
└── data/             # Datos estáticos
```

## 🚀 Rutas Principales

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con información general |
| `/participantes` | Galería de artistas participantes |
| `/programacion` | Calendario de eventos |
| `/contacto` | Información de contacto |
| `/auspiciantes` | Patrocinadores del evento |
| `/ganadores` | Ganadores de la bienal |
| `/curaduria` | Información sobre la curaduría |
| `/inscripcion` | Formulario de inscripción |

## 💻 Configuración del Proyecto

### Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 🎯 Características Principales

### Vistas Principales

- **Home**: Presentación general de la bienal
- **Participantes**: Galería de artistas con vista detallada
- **Ganadores**: Showcase de los ganadores por categoría
- **Curaduría**: Información detallada sobre el proceso curatorial

### Componentes Destacados

- **Navbar**: Navegación principal con efecto glass
- **Hero**: Sección principal con animaciones
- **Galería**: Sistema de visualización de obras
- **Footer**: Información de contacto y redes sociales

## 🔧 Personalización

### Estilos

El proyecto utiliza Tailwind CSS para los estilos. La configuración principal se encuentra en:
- `tailwind.config.js`
- `src/assets/styles/main.css`

### Meta Tags

Cada ruta incluye meta tags personalizados para SEO:
```typescript
meta: {
  ogTitle: "Título de la página",
  title: "Título del documento"
}
```

## 📱 Responsive Design

El sitio está optimizado para diferentes dispositivos:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contribución

1. Fork el proyecto
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

- Diseño y Desarrollo: [Tu Nombre/Equipo]
- Curaduría: Hernán Pacurucu C.
- Coordinación: [Coordinadores del Proyecto]

## 📞 Contacto

Para más información sobre el proyecto, contactar a:
https://www.isnotcristhianr.dev/

