export interface Apps {
  id: number,
  name: string,
  icon: string,
  description: string,

}


export const apps: Apps [] = [
  { id: 1, 
    name: 'Photoshop', 
    icon: '/icons/photoshop.png', 
    description: 'Lo utilizo principalmente para edición de imágenes, retoque fotográfico y creación de composiciones visuales.' 
  },

  { id: 2, 
    name: 'Illustrator', 
    icon: '/icons/ilustrator.png', 
    description: 'Lo uso para crear ilustraciones vectoriales, iconos y elementos gráficos que necesitan mantenerse nítidos a cualquier tamaño.' 
  },

  { id: 3, 
    name: 'Indesign', 
    icon: '/icons/indesign.png', 
    description: 'Herramienta que utilizo para maquetar documentos como revistas, presentaciones o proyectos editoriales.'
  },

  { id: 4, 
    name: 'Premiere', 
    icon: '/icons/premier.png', 
    description: 'Lo utilizo para editar vídeo, montar contenido audiovisual y preparar piezas visuales para distintos proyectos.' 
  },

  { id: 5, 
    name: 'Notion', 
    icon: '/icons/notion.png', 
    description: 'Lo uso para organizar proyectos, ideas y procesos creativos, manteniendo todo el trabajo estructurado.' 
  },

  { id: 6, 
    name: 'Procreate', 
    icon: '/icons/procreate.png', 
    description: 'Aplicación que utilizo para ilustración digital, bocetos y desarrollo de ideas directamente en iPad.' 
  },

  { id: 7, 
    name: 'Canva', 
    icon: '/icons/canva.png', 
    description: 'Herramienta práctica para crear diseños rápidos como presentaciones, materiales visuales o contenido para redes.' 
  },

  { id: 8, 
    name: 'Blender', 
    icon: '/icons/blender.png', 
    description: 'Programa que utilizo para modelado y creación de escenas en 3D, así como para experimentar con renders y animación.' 
  },

   { id: 9, 
    name: 'Capcut', 
    icon: '/icons/capcut.png', 
    description: 'Lo utilizo para editar vídeos de forma rápida, especialmente para contenido digital o redes sociales.' 
  },
   { id: 10, 
    name: 'Vue', 
    icon: '/icons/vue.png', 
    description: 'Framework que utilizo para desarrollar interfaces web dinámicas y estructurar proyectos frontend mediante componentes.' 
  },
]