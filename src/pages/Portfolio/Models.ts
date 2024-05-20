export interface MediaModel {
    type: string,
    url: string
  }
  
  export interface LinkModel {
    title: string,
    url: string
  }
  
  export interface ProjectModel {
    award?: string
    title: string
    media: MediaModel
    skills: string[]
    description: string
    links: LinkModel[]
  }