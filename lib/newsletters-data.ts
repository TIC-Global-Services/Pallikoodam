// Add new items by appending to the relevant array below.
// fileId = the ID in your Google Drive shareable link:
//   https://drive.google.com/file/d/{FILE_ID}/view

export interface Resource {
  id: string
  title: string
  subtitle?: string
  fileId: string
  /** For Google Docs (not PDFs), set type to 'gdoc' */
  type?: 'pdf' | 'gdoc'
}

export const newsletters: Resource[] = [
  {
    id: 'nl-aug',
    title: 'August Newsletter',
    subtitle: 'August 2025-26',
    fileId: '1dWOZIq4-uuTp2Ktt7m79kPpahE-Uww5N',
  },
  {
    id: 'nl-jun-jul',
    title: 'June & July Newsletter',
    subtitle: 'June & July 2025-26',
    fileId: '1LxNjeZPOmR7A1OYeVvZJBHvxuamElpp-',
  },
  {
    id: 'nl-oct',
    title: 'October Newsletter',
    subtitle: 'October 2025-26',
    fileId: '1QFnKRpcZWKa5Ugx4uw6NkGZcezzVAKVD',
  },
  {
    id: 'nl-sept',
    title: 'September Newsletter',
    subtitle: 'September 2025-26',
    fileId: '1NlCUvwVL9IX6QBQixuU2dCR3jvQYmJ8u',
  },
]

export const raksHeralds: Resource[] = [
  {
    id: 'rh-dec',
    title: 'December Raks Herald',
    subtitle: 'December 2025',
    fileId: '1zsiwRKy_1y02hK-7EqaALdsRMXjzwHIp',
  },
  {
    id: 'rh-nov',
    title: 'November Raks Herald',
    subtitle: 'November 2025',
    fileId: '1sV51yYLOYjD7lI0XsDN9S_CkEInJPaMM',
  },
  {
    id: 'rh-oct',
    title: 'October Raks Herald',
    subtitle: 'October 2025',
    fileId: '1Ts3PfwTuMtHD8mWA88jwxTF1sJJBR3VC',
  },
  {
    id: 'rh-sept',
    title: 'September Raks Herald',
    subtitle: 'September 2025',
    fileId: '1YCRkiV4_GTk9BXMB99VWv7Vias0_zV9e',
  },
]

export const blogs: Resource[] = [
  {
    id: 'blog-1',
    title: 'Blog Piece',
    subtitle: '',
    fileId: '1vpsxI7b50IPnJzr5U0y5lF7ziKFWRfizl8vkdiQ9XBA',
    type: 'gdoc',
  },
]

/** Google Drive thumbnail — direct lh3 URL avoids 302 redirect issues in browsers */
export function getThumbnailUrl(fileId: string, type?: 'pdf' | 'gdoc'): string {
  if (type === 'gdoc') {
    return '' // Google Docs thumbnails aren't reliable; use fallback icon
  }
  return `https://lh3.googleusercontent.com/d/${fileId}=w600-h900`
}

/** View link — opens the file in a new tab */
export function getViewUrl(fileId: string, type?: 'pdf' | 'gdoc'): string {
  if (type === 'gdoc') {
    return `https://docs.google.com/document/d/${fileId}/view`
  }
  return `https://drive.google.com/file/d/${fileId}/view`
}

/** Download link */
export function getDownloadUrl(fileId: string, type?: 'pdf' | 'gdoc'): string {
  if (type === 'gdoc') {
    return `https://docs.google.com/document/d/${fileId}/export?format=pdf`
  }
  return `https://drive.google.com/uc?export=download&id=${fileId}`
}
