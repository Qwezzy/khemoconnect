import Link from "next/link"
import Image from "next/image"

export function Header() {
    return (
        <header className="absolute inset-x-0 top-0 z-50 pointer-events-none">
            <nav className="flex items-center justify-between p-6 lg:px-8 pointer-events-auto" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="KhemoConnect Logo"
                            width={200}
                            height={40}
                            className="h-10 w-auto"
                            priority
                        />
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link href="/solutions" className="text-sm font-semibold leading-6 text-brand-charcoal dark:text-brand-white hover:text-brand-orange transition-colors">Solutions</Link>
                    <Link href="/industries" className="text-sm font-semibold leading-6 text-brand-charcoal dark:text-brand-white hover:text-brand-orange transition-colors">Industries</Link>
                    <Link href="/about" className="text-sm font-semibold leading-6 text-brand-charcoal dark:text-brand-white hover:text-brand-orange transition-colors">About Us</Link>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/contact" className="text-sm font-semibold leading-6 text-brand-orange hover:text-brand-orange/80">
                        Book a Call <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}
