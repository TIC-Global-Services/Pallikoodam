'use client'

import React, { useState } from 'react'
import { Eye, Download, FileText } from 'lucide-react'
import type { Resource } from '@/lib/newsletters-data'
import { getThumbnailUrl, getViewUrl, getDownloadUrl } from '@/lib/newsletters-data'

export default function ResourceCard({ resource }: { resource: Resource }) {
  const [imgError, setImgError] = useState(false)
  const thumbnail = getThumbnailUrl(resource.fileId, resource.type)
  const viewUrl = getViewUrl(resource.fileId, resource.type)
  const downloadUrl = getDownloadUrl(resource.fileId, resource.type)

  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden">
        {thumbnail && !imgError ? (
          <img
            src={thumbnail}
            alt={resource.title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-gray-400">
            <FileText size={40} strokeWidth={1.5} />
            <span className="text-xs font-medium uppercase tracking-wide">Document</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="text-base md:text-lg font-medium text-gray-900 leading-snug tracking-tight">
            {resource.title}
          </h3>
          {resource.subtitle && (
            <p className="text-xs text-gray-500 mt-0.5">{resource.subtitle}</p>
          )}
        </div>

        <div className="mt-auto flex gap-3 pt-2">
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#000086] hover:bg-[#000066] text-white px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors"
          >
            <Eye size={15} />
            <span>View</span>
          </a>
          <a
            href={downloadUrl}
            download
            className="flex items-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors"
          >
            <Download size={15} />
            <span>Download</span>
          </a>
        </div>
      </div>
    </div>
  )
}
