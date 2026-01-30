"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Send, Phone, Mail, MapPin, Clock } from "lucide-react";

const inquiryTypes = [
    { id: "estimate", name: "お見積もり依頼" },
    { id: "consultation", name: "工事のご相談" },
    { id: "other", name: "その他お問い合わせ" },
];

function ContactForm() {
    const searchParams = useSearchParams();
    const typeParam = searchParams.get("type");

    const [formData, setFormData] = useState({
        inquiryType: typeParam === "estimate" ? "estimate" : "",
        companyName: "",
        contactName: "",
        phone: "",
        email: "",
        location: "",
        timing: "",
        message: "",
        privacyAgreed: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (typeParam === "estimate") {
            setFormData((prev) => ({ ...prev, inquiryType: "estimate" }));
        }
    }, [typeParam]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // フォーム送信のシミュレーション
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="max-w-md mx-auto text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-green-600" size={40} />
                </div>
                <h2 className="text-2xl font-bold text-[#1A2A4A] mb-4">
                    お問い合わせありがとうございます
                </h2>
                <p className="text-gray-600 mb-8">
                    内容を確認の上、担当者よりご連絡いたします。
                    <br />
                    通常、1〜2営業日以内にご返信いたします。
                </p>
                <Link href="/" className="btn btn-primary">
                    トップページへ戻る
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* お問い合わせ種別 */}
                <div>
                    <label>
                        お問い合わせ種別 <span className="text-[#E8573D]">*</span>
                    </label>
                    <div className="space-y-2 mt-2">
                        {inquiryTypes.map((type) => (
                            <label
                                key={type.id}
                                className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${formData.inquiryType === type.id
                                        ? "border-[#C9A962] bg-[#C9A962]/10"
                                        : "border-gray-200 hover:border-[#C9A962]"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name="inquiryType"
                                    value={type.id}
                                    checked={formData.inquiryType === type.id}
                                    onChange={(e) =>
                                        setFormData({ ...formData, inquiryType: e.target.value })
                                    }
                                    className="sr-only"
                                    required
                                />
                                <div
                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.inquiryType === type.id
                                            ? "border-[#C9A962]"
                                            : "border-gray-300"
                                        }`}
                                >
                                    {formData.inquiryType === type.id && (
                                        <div className="w-3 h-3 rounded-full bg-[#C9A962]" />
                                    )}
                                </div>
                                <span>{type.name}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="companyName">会社名・団体名</label>
                        <input
                            type="text"
                            id="companyName"
                            value={formData.companyName}
                            onChange={(e) =>
                                setFormData({ ...formData, companyName: e.target.value })
                            }
                            placeholder="例: 株式会社○○"
                        />
                    </div>

                    <div>
                        <label htmlFor="contactName">
                            担当者名 <span className="text-[#E8573D]">*</span>
                        </label>
                        <input
                            type="text"
                            id="contactName"
                            required
                            value={formData.contactName}
                            onChange={(e) =>
                                setFormData({ ...formData, contactName: e.target.value })
                            }
                            placeholder="例: 山田 太郎"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="phone">
                            電話番号 <span className="text-[#E8573D]">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                            }
                            placeholder="例: 052-123-4567"
                        />
                    </div>

                    <div>
                        <label htmlFor="email">
                            メールアドレス <span className="text-[#E8573D]">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="例: example@email.com"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="location">工事予定場所</label>
                        <input
                            type="text"
                            id="location"
                            value={formData.location}
                            onChange={(e) =>
                                setFormData({ ...formData, location: e.target.value })
                            }
                            placeholder="例: 名古屋市中区"
                        />
                    </div>

                    <div>
                        <label htmlFor="timing">工事希望時期</label>
                        <input
                            type="text"
                            id="timing"
                            value={formData.timing}
                            onChange={(e) =>
                                setFormData({ ...formData, timing: e.target.value })
                            }
                            placeholder="例: 2025年4月頃"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="message">
                        お問い合わせ内容 <span className="text-[#E8573D]">*</span>
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="ご要望やご質問をご記入ください"
                    />
                </div>

                {/* プライバシーポリシー同意 */}
                <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            required
                            checked={formData.privacyAgreed}
                            onChange={(e) =>
                                setFormData({ ...formData, privacyAgreed: e.target.checked })
                            }
                            className="mt-1"
                        />
                        <span className="text-sm text-gray-600">
                            <Link
                                href="/privacy"
                                className="text-[#C9A962] underline"
                                target="_blank"
                            >
                                プライバシーポリシー
                            </Link>
                            に同意する <span className="text-[#E8573D]">*</span>
                        </span>
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        "送信中..."
                    ) : (
                        <>
                            <Send size={18} />
                            送信する
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}

function ContactFormLoading() {
    return (
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
            <div className="animate-pulse space-y-6">
                <div className="h-32 bg-gray-200 rounded-lg"></div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="h-16 bg-gray-200 rounded-lg"></div>
                    <div className="h-16 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="h-32 bg-gray-200 rounded-lg"></div>
                <div className="h-12 bg-gray-200 rounded-lg"></div>
            </div>
        </div>
    );
}

export default function ContactPage() {
    return (
        <>
            {/* ヒーローセクション */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#1A2A4A] via-[#2A3A5A] to-[#1A2A4A]">
                <div className="container mx-auto px-6 text-center">
                    <span className="block text-sm font-medium tracking-widest text-[#C9A962] mb-4">
                        CONTACT
                    </span>
                    <h1
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-shippori-mincho)" }}
                    >
                        お問い合わせ
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        お見積もり・ご相談はお気軽にどうぞ
                    </p>
                </div>
            </section>

            {/* パンくず */}
            <div className="bg-white border-b border-gray-100 py-3">
                <div className="container mx-auto px-6">
                    <nav className="text-sm text-gray-500">
                        <Link href="/" className="hover:text-[#C9A962]">
                            TOP
                        </Link>
                        <span className="mx-2">＞</span>
                        <span className="text-[#1A2A4A]">お問い合わせ</span>
                    </nav>
                </div>
            </div>

            {/* 連絡先情報 */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6 mb-12">
                            {/* 電話 */}
                            <div className="bg-[#F5F5F3] rounded-xl p-8 text-center">
                                <Phone className="text-[#C9A962] mx-auto mb-4" size={40} />
                                <h2 className="text-lg font-bold text-[#1A2A4A] mb-2">
                                    お電話でのお問い合わせ
                                </h2>
                                <a
                                    href="tel:052-680-7707"
                                    className="text-2xl font-bold text-[#1A2A4A] hover:text-[#C9A962] transition-colors"
                                >
                                    052-680-7707
                                </a>
                                <div className="mt-4 text-sm text-gray-600 space-y-1">
                                    <div className="flex items-center justify-center gap-2">
                                        <Clock size={14} />
                                        <span>営業時間: 平日 9:00〜18:00</span>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        ※土日祝も対応可能な場合があります
                                    </p>
                                </div>
                            </div>

                            {/* メール・住所 */}
                            <div className="bg-[#F5F5F3] rounded-xl p-8">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Mail className="text-[#C9A962] mt-1" size={20} />
                                        <div>
                                            <p className="text-sm text-gray-500">メール</p>
                                            <a
                                                href="mailto:o.sasaki@meio.biz"
                                                className="text-[#1A2A4A] font-medium hover:text-[#C9A962]"
                                            >
                                                o.sasaki@meio.biz
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="text-[#C9A962] mt-1" size={20} />
                                        <div>
                                            <p className="text-sm text-gray-500">所在地</p>
                                            <p className="text-[#1A2A4A]">
                                                〒468-0048
                                                <br />
                                                愛知県名古屋市天白区中坪町78
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* お問い合わせフォーム */}
            <section className="section bg-[#F5F5F3]">
                <div className="container mx-auto">
                    <div className="section-title">
                        <span className="section-title-en">FORM</span>
                        <h2 className="section-title-jp">フォームでのお問い合わせ</h2>
                    </div>

                    <Suspense fallback={<ContactFormLoading />}>
                        <ContactForm />
                    </Suspense>
                </div>
            </section>
        </>
    );
}
