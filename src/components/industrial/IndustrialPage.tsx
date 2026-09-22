import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/atoms/Container";
import { SunavioButton } from "@/components/atoms/SunavioButton";

export function IndustrialPage({ title, eyebrow, intro, path, children, structuredData }:{title:string;eyebrow:string;intro:string;path:string;children:ReactNode;structuredData?:Record<string,unknown>|Record<string,unknown>[]}) {
  return <div className="min-h-screen bg-bg text-gr"><SEO title={`${title} | SUNAVIO`} description={intro} path={path} structuredData={structuredData}/><Header/><main><section className="border-b border-line bg-bg2 pb-16 pt-32 md:pb-20 md:pt-40"><Container size="wide"><p className="text-eyebrow">{eyebrow}</p><h1 className="mt-5 max-w-5xl text-4xl font-bold leading-tight text-wh md:text-6xl">{title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-gr2">{intro}</p><div className="mt-8"><SunavioButton asChild size="lg"><Link to="/pre-etude">Demander une pré-étude gratuite <ArrowRight/></Link></SunavioButton></div></Container></section>{children}</main><Footer/></div>;
}

export function Section({ title, intro, children, alt=false, id }:{title:string;intro?:string;children:ReactNode;alt?:boolean;id?:string}) {
  return <section id={id} className={alt ? "bg-bg2 py-16 md:py-24" : "bg-bg py-16 md:py-24"}><Container size="wide"><div className="max-w-3xl"><h2 className="text-3xl font-bold text-wh md:text-4xl">{title}</h2>{intro && <p className="mt-4 text-lg leading-8 text-gr2">{intro}</p>}</div><div className="mt-10">{children}</div></Container></section>;
}

export function CardGrid({ items }:{items:{title:string;description:string;to?:string}[]}) { return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{items.map(item => {const content=<><h3 className="text-xl font-semibold text-wh">{item.title}</h3><p className="mt-3 leading-7 text-gr2">{item.description}</p>{item.to && <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-or">En savoir plus <ArrowRight className="h-4 w-4"/></span>}</>; return item.to ? <Link key={item.title} to={item.to} className="border border-line bg-bg p-6 shadow-sm transition duration-150 hover:border-or">{content}</Link> : <article key={item.title} className="border border-line bg-bg p-6 shadow-sm">{content}</article>})}</div>; }

export function FinalCTA() { return <section className="bg-wh py-16 text-bg md:py-20"><Container size="wide"><div className="max-w-4xl"><h2 className="text-3xl font-bold text-bg md:text-4xl">Envoyez-nous vos 12 dernières factures.</h2><p className="mt-4 max-w-2xl text-bg/70">Nous revenons vers vous sous trois semaines avec une note de calcul et des hypothèses clairement identifiées.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><SunavioButton asChild size="lg"><Link to="/pre-etude">Demander une pré-étude gratuite</Link></SunavioButton><a href="tel:+212663284424" className="inline-flex h-14 items-center justify-center rounded-md border border-bg/40 px-8 font-semibold text-bg">+212 6 63 28 44 24</a></div></div></Container></section>; }