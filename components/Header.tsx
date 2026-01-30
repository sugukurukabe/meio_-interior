"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

const navigation = [
    { name: "サービス", href: "/services" },
    { name: "施工実績", href: "/works" },
    { name: "強み", href: "/about" },
    { name: "会社概要", href: "/company" },
    { name: "協力業者募集", href: "/partner" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-md shadow-md"
                : "bg-transparent"
                }`}
        >
            {/* Top bar with contact info */}
            <div className="hidden md:block bg-[#1A2A4A] text-white text-sm py-2">
                <div className="container mx-auto px-6 flex justify-end items-center gap-6">
                    <a
                        href="tel:052-680-7707"
                        className="flex items-center gap-2 hover:text-[#C9A962] transition-colors"
                    >
                        <Phone size={14} />
                        <span>052-680-7707</span>
                    </a>
                    <a
                        href="mailto:o.sasaki@meio.biz"
                        className="flex items-center gap-2 hover:text-[#C9A962] transition-colors"
                    >
                        <Mail size={14} />
                        <span>o.sasaki@meio.biz</span>
                    </a>
                </div>
            </div>

            {/* Main navigation */}
            <nav className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <div className={scrolled ? "text-[#1A2A4A]" : "text-white"}>
                            <div className="text-xl font-bold tracking-wider" style={{ fontFamily: "var(--font-shippori-mincho)" }}>
                                明王インテリア
                            </div>
                            <div className={`text-[10px] tracking-widest ${scrolled ? "text-[#C9A962]" : "text-[#C9A962]"}`}>
                                MYOO INTERIOR
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-[#C9A962] ${scrolled ? "text-[#2D2D2D]" : "text-white"}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="btn btn-primary text-sm px-6 py-3"
                        >
                            お問い合わせ
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className={`lg:hidden p-2 ${scrolled ? "text-[#1A2A4A]" : "text-white"}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div
                className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setMobileMenuOpen(false)}
                />

                {/* Menu panel */}
                <div
                    className={`absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="p-6">
                        {/* Close button */}
                        <button
                            type="button"
                            className="absolute top-6 right-6 p-2 text-[#1A2A4A]"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={24} />
                        </button>

                        {/* Logo */}
                        <div className="mb-8">
                            <div className="text-xl font-bold text-[#1A2A4A]" style={{ fontFamily: "var(--font-shippori-mincho)" }}>
                                明王インテリア
                            </div>
                            <div className="text-[10px] tracking-widest text-[#C9A962]">
                                MYOO INTERIOR
                            </div>
                        </div>

                        {/* Navigation links */}
                        <nav className="space-y-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block py-3 text-lg font-medium text-[#2D2D2D] hover:text-[#C9A962] border-b border-gray-100"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Contact CTA */}
                        <div className="mt-8 space-y-4">
                            <Link
                                href="/contact"
                                className="btn btn-primary w-full"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                お問い合わせ
                            </Link>

                            <a
                                href="tel:052-680-7707"
                                className="flex items-center justify-center gap-2 py-3 text-[#1A2A4A] font-medium"
                            >
                                <Phone size={18} />
                                <span>052-680-7707</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
