'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const pathname = usePathname()

    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'Grammar of RAKS', href: '/grammar-of-raks' },
        { label: 'Admissions', href: '/admissions' },
        { label: 'Learning @ RAKS', href: '/learning-at-raks' },
        { label: 'Hidden Curriculum @ RAKS', href: '/hiddencurricular-at-raks' },
        { label: 'Careers', href: '/careers' },
        { label: 'News & Events', href: '/news-and-events' },
        { label: 'Contact Us', href: '/contact-us' },
    ]
    return (
        <footer className="bg-black text-white w-full py-20 px-4 md:px-[3%]">
            <div className="container mx-auto border border-white/40">
                <div className="flex flex-col">
                    {/* Top Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white/40">
                        {/* Links */}
                        <div className="p-8 border-b md:border-b-0 border-white/40 lg:border-r flex flex-col gap-3 font-light text-gray-300">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`transition-colors ${isActive
                                            ? 'text-blue-600 font-medium'
                                            : 'text-white hover:text-blue-600'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            })}
                        </div>
                        {/* Socials */}
                        <div className="p-8 border-b md:border-b-0 border-white/40 lg:border-r flex flex-col gap-3 font-light text-gray-300">
                            <Link href="https://www.linkedin.com/company/pallikkoodam" className="hover:text-white">LinkedIn</Link>
                            <Link href="https://www.instagram.com/pallikkoodamcoimbatore" className="hover:text-white">Instagram</Link>
                            <Link href="https://www.facebook.com/PallikkoodamCoimbatore" className="hover:text-white">Facebook</Link>
                            <Link href="https://x.com/raks_lil?s=08" className="hover:text-white">X</Link>
                            <Link href="https://www.youtube.com/c/LilandRaksPallikkoodam" className="hover:text-white">YouTube</Link>
                        </div>
                        {/* Address */}
                        <div className="p-8 border-b md:border-b-0 border-white/40 lg:border-r font-light text-gray-300">
                            <p className="max-w-[200px] leading-relaxed">Codissia Trade Fair Complex Rd, Peelamedu, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014</p>
                        </div>
                        {/* Contact */}
                        <div className="p-8 font-light text-gray-300">
                           <Link href="tel:+917538898333"> <p>+91 75388 98333</p></Link>
                            <Link href="mailto:admissions@rakspallikkoodam.com" className="mt-1" >admissions@rakspallikkoodam.com</Link>
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Subscribe */}
                        <div className="p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/30 flex flex-col justify-center">
                            <h2 className="text-3xl md:text-5xl mb-10 leading-tight">Subscribe to our <br /> newsletter</h2>
                            <div className="relative max-w-md w-full">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    suppressHydrationWarning={true}
                                    className="w-full bg-black border border-white/30 rounded-full py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                                />
                                <button suppressHydrationWarning={true} className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </div>
                        {/* Logo */}
                        <div className="relative h-[300px] lg:h-auto overflow-hidden flex items-center justify-center bg-black -mr-px px-10 -mb-px">
                            <div className="relative w-full h-full min-h-[300px] p-8">
                                <Image src="/logo.png" alt="RAKS" fill className="object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="container mx-auto px-4 lg:px-0 mt-8 flex flex-col md:flex-row justify-between text-base font-normal leading-[17px]">
                <p className=''>© 2026 RAKS Pallikoodam. All Rights Reserved.</p>
                <Link href="https://www.theinternetcompany.one/" target="_blank">Designed & Developed by TIC Global Services</Link>
            </div>
        </footer>
    )
}

export default Footer