export type ProjectBase = {
  id: string
  title: string
  tags: string[]
  color: string
  image?: string
  url: string
}

export type Project = ProjectBase & {
  description: string
  highlights: string[]
}

export const projects: ProjectBase[] = [
  {
    id: 'inpixio-photo-studio',
    title: 'Inpixio Photo Studio',
    tags: ['React', 'TypeScript', 'Performance', 'SciterJS', 'Sass/SCSS'],
    color: '#00e0ff',
    image: '/projects/inpixio-photo-studio.jpg',
    url: 'https://www.inpixio.com/',
  },
  {
    id: 'soda-pdf-desktop',
    title: 'Soda PDF Desktop',
    tags: ['React', 'Sass/SCSS', 'SciterJS', 'Architecture'],
    color: '#7ee8ff',
    image: '/projects/soda-pdf-desktop.jpg',
    url: 'https://www.sodapdf.com/',
  },
  {
    id: 'soda-pdf-online',
    title: 'Soda PDF Online',
    tags: ['Angular', 'Sass/SCSS', 'REST APIs', 'Jest'],
    color: '#33c9e0',
    image: '/projects/soda-pdf-online.jpg',
    url: 'https://www.sodapdf.com/',
  },
]
