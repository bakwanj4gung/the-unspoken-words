'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import MobileMenu from './MobileMenu'
import { pacifico } from '@/lib/fonts'

export default function Navbar() {
    const pathname = usePathname();
    
    return (
        <div id="up" className='relative z-50 flex h-24 items-center justify-between'>
			{/* LEFT */}
			<div className=''>
				<Link href={"/"} className={`${pacifico.className} text-slate-800 text-xl underline decoration-2 underline-offset-3 decoration-transparent transition-all hover:decoration-slate-800`}>the unspoken words</Link>
			</div>
            {/* RIGHT */}
            <div className='hidden md:flex items-center gap-8 text-gray-500 font-semibold whitespace-nowrap'>
                <Link 
                    href={pathname != "/" ? "/#write" : "#write"} 
                    className={`transition-all underline underline-offset-3 decoration-2 
                        ${pathname == '/#write' ? 'decoration-black text-black' : 'decoration-transparent hover:decoration-black hover:text-black'}
                    `}
                >
					Send a letter
				</Link>
                <Link 
                    href={"/search"} 
                    className={`transition-all underline underline-offset-3 decoration-2 
                        ${pathname == '/search' ? 'decoration-black text-black' : 'decoration-transparent hover:decoration-black hover:text-black'}
                    `}
                >
					Search a letter
				</Link>
                <Link 
                    href={"/"} 
                    className={`transition-all underline underline-offset-3 decoration-2 
                        ${pathname == '/about' ? 'decoration-black text-black' : 'decoration-transparent hover:decoration-black hover:text-black'}
                    `}
                >
					About
				</Link>
            </div>
            <MobileMenu />
        </div>
    )
}
