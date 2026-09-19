import { MessageCircle } from 'lucide-react';

export default function LineButton({ children = 'แชท LINE', className = '' }: { children?: React.ReactNode; className?: string }) {
  return <a className={`button line-button ${className}`} href="https://lin.ee/rDlbQoC" target="_blank" rel="noopener noreferrer" aria-label="ติดต่อ Fastcar Battery ผ่าน LINE (เปิดในแท็บใหม่)"><MessageCircle size={19} aria-hidden="true" />{children}</a>;
}
