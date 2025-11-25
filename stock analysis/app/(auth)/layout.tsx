import Link from "next/link";
import Image from "next/image";
import {auth} from "@/lib/better-auth/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

const Layout = async ({ children }: { children : React.ReactNode }) => {
    const session = await auth.api.getSession({ headers: await headers() })

    if(session?.user) redirect('/dashboard')

    return (
        <main className="auth-layout">
            <section className="auth-left-section scrollbar-hide-default">
                <Link href="/" className="auth-logo">
                    <Image src="/assets/icons/logo.png" alt="Signalist logo" width={140} height={32} className='h-8 w-auto' />
                </Link>

                {/* Title Section */}
                <div className="text-center mb-4">
                    <h1 className="text-2xl font-bold mb-2 mt-2 bg-gradient-to-r from-blue-300 to-blue-900 bg-clip-text text-transparent">
                        Never Miss a Market Move Again
                    </h1>
                    <p className="text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed mb-2">
                        Get instant alerts on price movements that matter to your portfolio. Track real-time data across stocks, crypto, forex, and commodities for smarter, AI-powered investment decisions.
                    </p>
                </div>

                <div className="pb-6 lg:pb-8 flex-1">{children}</div>
            </section>

            <section className="auth-right-section">
                <div className="z-10 relative lg:mt-4 lg:mb-16">
                    <blockquote className="auth-blockquote">
                        Signalist turned my watchlist into a winning list. The alerts are spot-on, and I feel more confident making moves in the market
                    </blockquote>
                    <div className="flex items-center justify-between">
                        <div>
                            <cite className="auth-testimonial-author">- Ethan R.</cite>
                            <p className="max-md:text-xs text-gray-500">Retail Investor</p>
                        </div>
                        <div className="flex items-center gap-0.5">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Image src="/assets/icons/star.svg" alt="Star" key={star} width={20} height={20} className="w-5 h-5" />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative">
                    <Image src="/assets/images/dashboard.png" alt="Dashboard Preview" width={1440} height={1150} className="auth-dashboard-preview absolute top-0" />
                </div>
            </section>
        </main>
    )
}
export default Layout
