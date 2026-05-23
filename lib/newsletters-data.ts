// Add new items by appending to the relevant array below.
// fileId = file name inside /public/newslettersBlogs

export interface Resource {
  id: string
  title: string
  subtitle?: string
  fileId: string
}

export const newsletters: Resource[] = [
  {
    id: 'nl-aug',
    title: 'August Newsletter',
    subtitle: '2025-26',
    fileId: 'Aug Raks News Letter - August 2025-26.pdf',
  },
  {
    id: 'nl-jun-jul',
    title: 'June & July Newsletter',
    subtitle: '2025-26',
    fileId: 'June & JUly Raks News Letter - June & July 2025-26.pdf',
  },
  {
    id: 'nl-oct',
    title: 'October Newsletter',
    subtitle: '2025-26',
    fileId: 'Oct Raks News Letter - October - 2025-26.pdf',
  },
  {
    id: 'nl-sept',
    title: 'September Newsletter',
    subtitle: '2025-26',
    fileId: 'Sept Raks News Letter - September - 2025-26.pdf',
  },
]

export const raksHeralds: Resource[] = [
  {
    id: 'rh-dec',
    title: 'December Raks Herald',
    subtitle: '2025',
    fileId: "DEC RaK's Herald - December_.pdf",
  },
  {
    id: 'rh-nov',
    title: 'November Raks Herald',
    subtitle: '2025',
    fileId: "NOV Rak's Herald - November.pdf",
  },
  {
    id: 'rh-oct',
    title: 'October Raks Herald',
    subtitle: '2025',
    fileId: "OCT Rak's Herald - October.pdf",
  },
  {
    id: 'rh-sept',
    title: 'September Raks Herald',
    subtitle: '2025',
    fileId: "SEPT Rak's Newsletter September.pdf",
  },
]

export const blogs: Resource[] = [
  {
    id: 'blog-1',
    title: 'Blog Piece',
    subtitle: '',
    fileId: 'Ms. Swetha Blog Post.pdf',
  },
]

/** First-page thumbnail image with same filename as PDF in /public/newslettersBlogs/thumbnails */
export function getThumbnailUrl(fileId: string): string {
  const thumbnailFile = fileId.replace(/\.pdf$/i, '.jpg')
  return `/newslettersBlogs/thumbnails/${encodeURIComponent(thumbnailFile)}`
}

/** View link — opens the file in a new tab */
export function getViewUrl(fileId: string): string {
  return `/newslettersBlogs/${encodeURIComponent(fileId)}`
}

/** Download link */
export function getDownloadUrl(fileId: string): string {
  return `/newslettersBlogs/${encodeURIComponent(fileId)}`
}
