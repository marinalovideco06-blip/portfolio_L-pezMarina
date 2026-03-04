export interface Apps {
  id: number,
  name: string,
  icon: string,
  description: string,

}


export const apps: Apps [] = [
  { id: 1, name: 'Photoshop', icon: '/icons/photoshop.png', description: 'Holiwis' },
  { id: 2, name: 'Illustrator', icon: '/icons/illustrator.png', description: 'Holiwis' },
  { id: 3, name: 'Figma', icon: '/icons/figma.png', description: 'Holiwis'},
  { id: 4, name: 'Premiere', icon: '/icons/premiere.png', description: 'Holiwis' }
]