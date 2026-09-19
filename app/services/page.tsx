import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import {services} from './data';
export const metadata={title:'บริการแบตเตอรี่รถยนต์ โคราช',description:'เปลี่ยนแบตนอกสถานที่ จั๊มสตาร์ท และรับเทิร์นแบตเก่า ติดต่อ Fastcar Battery โคราช',alternates:{canonical:'/services/'}};
export default function Page(){return <><section className="innerhero"><p className="eyebrow">OUR SERVICES</p><h1>ทุกเรื่องแบตเตอรี่<br/><span className="yellow">ให้เราช่วยดูแล</span></h1><p>บริการเปลี่ยนแบตนอกสถานที่ จั๊มสตาร์ท และรับเทิร์นแบตเก่า ในโคราช</p></section><section className="section"><div className="cards">{Object.entries(services).map(([slug,s],i)=><Link href={`/services/${slug}/`} className="servicecard" key={slug}><div className="cardtop"><span>0{i+1}</span><ArrowUpRight/></div><h2 style={{fontSize:25,marginBottom:18}}>{s.title}</h2><p>{s.intro}</p><span className="cardlink">รายละเอียดบริการ <ArrowUpRight size={18}/></span></Link>)}</div></section></>}
