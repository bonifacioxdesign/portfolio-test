import { ArrowBigDown, ArrowDown, Badge, Cpu, EyeOffIcon, Handshake, Heart, SmileIcon, SmilePlus, Zap } from 'lucide-react'
import Image from 'next/image'
import { ArrowRight, Menu, Rocket, X } from 'lucide-react'


export default function ContentSection() {
    return (
        <section className="py-8 md:py-16">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 sm:gap-0">
                    <div className="relative space-y-4 md:pt-12 sm:pt-0">
                    <p className="rounded-(--radius) flex w-fit items-center gap-2  p-1 pr-3 text-gray-50 bg-indigo-500 hover:bg-indigo-900 hover:text-stone-50 ">
                                    <span className="text-sm">A little introduction</span>
                                    <span className="bg-(--color-border) block h-4 w-px"></span>
                                    <SmilePlus className="size-4" />
                    </p>
                    <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Who I am</h2>
                        <p className="text-muted-foreground">
                            Let me introduce me I'm Gerardo Bonifacio also know as Bonix <span className="text-accent-foreground font-bold">the creative guy of the team</span> — I like to help others to find out the best solution for the project.
                        </p>
                        <p className="text-muted-foreground">It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Handshake className="size-6" />
                                    <h3 className="text-sm font-medium">Strategist</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Creative</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-0 sm:mt-0"> 
                        <div className="bg-linear-to-b aspect-67/34 rounded-2xl from-zinc-300 to-transparent p-px dark:from-indigo-500">
                            <Image src="/whoim.jpg" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1206} height={612} />
                            <Image src="/whoim.jpg" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1206} height={612} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
