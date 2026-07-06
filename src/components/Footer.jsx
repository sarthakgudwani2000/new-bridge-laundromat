import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND, HOURS, LOCATIONS, MAPS_LINK_NEW_BRIDGE, SOCIAL } from "@/lib/brand";

function SocialRow({ label, links }) {
  return (
    <div className="mt-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        <motion.a
          href={links.facebook}
          className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-700/90 bg-slate-900/40 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          aria-label={`${label} on Facebook`}
          whileHover={{ scale: 1.08, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFacebook className="h-[1.125rem] w-[1.125rem]" aria-hidden />
        </motion.a>
        <motion.a
          href={links.instagram}
          className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-700/90 bg-slate-900/40 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          aria-label={`${label} on Instagram`}
          whileHover={{ scale: 1.08, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaInstagram className="h-[1.125rem] w-[1.125rem]" aria-hidden />
        </motion.a>
        <motion.a
          href={links.yelp}
          className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-700/90 bg-slate-900/40 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          aria-label={`${label} on Yelp`}
          whileHover={{ scale: 1.08, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaYelp className="h-[1.125rem] w-[1.125rem]" aria-hidden />
        </motion.a>
        <motion.a
          href={links.google}
          className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-slate-700/90 bg-slate-900/40 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          aria-label={`${label} on Google Maps`}
          whileHover={{ scale: 1.08, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          <SiGooglemaps className="h-[1.125rem] w-[1.125rem]" aria-hidden />
        </motion.a>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-300 ring-1 ring-white/10"
      data-testid="site-footer"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_20%_0%,_rgb(37_99_235_/_0.25),_transparent_50%)]"
        aria-hidden
      />
      <div className="container-pad relative py-9 grid md:grid-cols-3 gap-7">
        <div>
          <h3 className="font-display text-white text-xl lg:text-2xl font-bold">
            {BRAND.store}
          </h3>
          <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs">
            Self-serve laundromat and wash &amp; fold hub in Bergenfield. A{" "}
            <strong className="text-slate-300">{BRAND.parent}</strong> store at{" "}
            {LOCATIONS.newBridge.full}.
          </p>
          <SocialRow label={SOCIAL.newBridge.label} links={SOCIAL.newBridge} />
        </div>

        <div>
          <h4 className="font-display text-white font-semibold mb-3 lg:text-lg">Hours</h4>
          <ul className="space-y-2 text-sm">
            <li>{HOURS.newBridgeWeekday}</li>
            <li>{HOURS.newBridgeWeekend}</li>
            <li>{HOURS.lastWash}</li>
          </ul>
          <h4 className="font-display text-white font-semibold mb-3 mt-5 lg:text-lg">
            Visit us
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={MAPS_LINK_NEW_BRIDGE}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                View on Google Maps
              </a>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                {BRAND.store} home
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-white font-semibold mb-3 lg:text-lg">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
              <span>
                <a href={`tel:${BRAND.phoneStore}`} className="hover:text-white">
                  {BRAND.phoneStore}
                </a>
                <span className="block text-xs text-slate-500">{BRAND.store}</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-white">
                {BRAND.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-blue-400 shrink-0" />
              <span>{LOCATIONS.newBridge.full}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container-pad py-5 flex flex-col gap-3 text-xs text-slate-500">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} {BRAND.store}. A {BRAND.parent} store.
            All rights reserved.
          </p>
          <p className="text-center md:text-left">
            <Link to="/" className="hover:text-slate-300">
              {BRAND.store}
            </Link>
            {" | "}
            <a
              href={MAPS_LINK_NEW_BRIDGE}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300"
            >
              Directions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
