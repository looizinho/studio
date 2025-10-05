"use client";

import { useState } from "react";
import Link from "next/link";
import { BookMarked, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#services", label: "Serviços" },
  { href: "#about", label: "Sobre Nós" },
  { href: "#testimonials", label: <b>Depoimentos</b> },
  { href: "#ai-tool", label: <div style={{ display: "inline", fontWeight: 700 }}>Ferramenta AI</div> },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <BookMarked className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline inline-block">help</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden md:flex bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <a href="#contact">Fale Conosco</a>
          </Button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={cn(
            "md:hidden",
            "fixed inset-0 top-14 z-40 grid h-[calc(100vh-3.5rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80"
          )}
        >
          <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              {[...navLinks, { href: "#contact", label: "Fale Conosco" }].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
