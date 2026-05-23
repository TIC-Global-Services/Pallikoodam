import React from 'react'
import ContainerLayout from '@/layout/ContainerLayout'
import ResourceCard from './ResourceCard'
import { newsletters, raksHeralds, blogs } from '@/lib/newsletters-data'

interface SectionProps {
  title: string
  italicWord?: string
  description: string
  items: typeof newsletters
  hideHeader?: boolean
}

function Section({ title, italicWord, description, items, hideHeader }: SectionProps) {
  return (
    <div className="mb-16 md:mb-20">
      {!hideHeader && (
        <div className="mb-8 md:mb-10">
          <h3 className="text-[24px] md:text-[30px] lg:text-[34px] text-[#000000] leading-[1.1] font-medium tracking-tight mb-3">
            {italicWord ? (
              <>
                <span className="font-ppe italic font-normal">{italicWord}</span> {title}
              </>
            ) : (
              title
            )}
          </h3>
          <p className="text-[#000000] text-sm md:text-base lg:text-lg leading-[1.4] font-medium max-w-2xl">
            {description}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
        {items.map((item) => (
          <ResourceCard key={item.id} resource={item} />
        ))}
      </div>
    </div>
  )
}

export default function NewslettersBlogs() {
  return (
    <section id="newsletters" className="w-full bg-white pb-10 scroll-mt-24">
      <ContainerLayout>
        {/* Page Title */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] text-[#000000] leading-[1.1] font-medium tracking-tight mb-4">
            Newsletters <span className="font-ppe italic font-normal">&</span> Blogs
          </h2>
          <p className="text-[#000000] text-sm md:text-base lg:text-xl leading-[1.4] font-medium max-w-3xl">
            Explore our school newsletters, the Raks Herald, and blog posts — sharing stories, updates, and insights from the RAKS community.
          </p>
        </div>

        {/* Newsletters */}
        <Section
          title="Newsletters"
          description="Monthly roundups of campus life, achievements, and upcoming events."
          items={newsletters}
          hideHeader
        />

        {/* Raks Herald */}
        <Section
          title="Herald"
          italicWord="Raks"
          description="In-depth features, student voices, and stories that capture the spirit of RAKS."
          items={raksHeralds}
        />

        {/* Blogs */}
        <Section
          title="Blogs"
          description="Thoughtful pieces from our educators and community."
          items={blogs}
        />
      </ContainerLayout>
    </section>
  )
}
