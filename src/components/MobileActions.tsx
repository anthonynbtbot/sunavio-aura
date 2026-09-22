import { Link } from "react-router-dom";
import { MessageCircle, ClipboardCheck } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/tracking";

export function MobileActions() {
  return <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-line bg-bg p-2 md:hidden">
    <a href="https://wa.me/212663284424" onClick={trackWhatsAppClick} className="flex h-11 items-center justify-center gap-2 text-sm font-semibold text-wh"><MessageCircle className="h-4 w-4" />WhatsApp</a>
    <Link to="/pre-etude" className="flex h-11 items-center justify-center gap-2 rounded-md bg-or text-sm font-semibold text-primary-foreground"><ClipboardCheck className="h-4 w-4" />Pré-étude gratuite</Link>
  </div>;
}