"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Send, Phone } from "lucide-react";

const benefits = [
    {
        title: "安定した案件量",
        description: "東海エリアで継続的な案件をご紹介できます",
    },
    {
        title: "適正な報酬",
        description: "職人さんの技術に見合った報酬をお支払い",
    },
    {
        title: "迅速なお支払い",
        description: "締め日・支払日を明確にし、遅延なくお支払い",
    },
    {
        title: "長期的なパートナーシップ",
        description: "信頼関係を大切にした継続的なお取引",
    },
];

const positions = [
    { id: "cross", name: "クロス職人" },
    { id: "floor", name: "床職人" },
    { id: "lgs", name: "LGS職人" },
    { id: "board", name: "ボード職人" },
    { id: "other", name: "その他" },
];

export default function PartnerPage() {
    const [formData, setFormData] = useState({
        companyName: "",
        contactName: "",
        phone: "",
        email: "",
        positions: [] as string[],
        experience: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handlePositionChange = (positionId: string) => {
        setFormData((prev) => ({
            ...prev,
            positions: prev.positions.includes(positionId)
                ? prev.positions.filter((p) => p !== positionId)
                : [...prev.positions, positionId],
        }));
    };

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
            <>
                <section className="pt-32 pb-16 bg-gradient-to-br from-[#1A2A4A] via-[#2A3A5A] to-[#1A2A4A]">
                    <div className="container mx-auto px-6 text-center">
                        <span className="block text-sm font-medium tracking-widest text-[#C9A962] mb-4">
                            PARTNER
                        </span>
                        <h1
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                            style={{ fontFamily: "var(--font-shippori-mincho)" }}
                        >
                            協力業者募集
                        </h1>
                    </div>
                </section>

                <section className="section bg-white">
                    <div className="container mx-auto text-center">
                        <div className="max-w-md mx-auto">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="text-green-600" size={40} />
                            </div>
                            <h2 className="text-2xl font-bold text-[#1A2A4A] mb-4">
                                ご応募ありがとうございます
                            </h2>
                            <p className="text-gray-600 mb-8">
                                内容を確認の上、担当者よりご連絡いたします。
                                <br />
                                しばらくお待ちください。
                            </p>
                            <Link href="/" className="btn btn-primary">
                                トップページへ戻る
                            </Link>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            {/* ヒーローセクション */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-[#1A2A4A] via-[#2A3A5A] to-[#1A2A4A]">
                <div className="container mx-auto px-6 text-center">
                    <span className="block text-sm font-medium tracking-widest text-[#C9A962] mb-4">
                        PARTNER
                    </span>
                    <h1
                        className="text-3xl md:text-4xl font-bold text-white mb-4"
                        style={{ fontFamily: "var(--font-shippori-mincho)" }}
                    >
                        協力業者募集
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        一緒に最高の仕事をしませんか？
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
                        <span className="text-[#1A2A4A]">協力業者募集</span>
                    </nav>
                </div>
            </div>

            {/* メリット */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <div className="section-title">
                        <span className="section-title-en">BENEFITS</span>
                        <h2 className="section-title-jp">明王インテリアと組むメリット</h2>
                    </div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.title}
                                className="bg-[#F5F5F3] rounded-xl p-6 flex items-start gap-4"
                            >
                                <CheckCircle2 className="text-[#C9A962] shrink-0 mt-1" size={24} />
                                <div>
                                    <h3 className="font-bold text-[#1A2A4A] mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 募集職種 */}
            <section className="section bg-[#F5F5F3]">
                <div className="container mx-auto">
                    <div className="section-title">
                        <span className="section-title-en">POSITIONS</span>
                        <h2 className="section-title-jp">募集職種</h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-xl p-8">
                            <ul className="grid md:grid-cols-2 gap-4">
                                {positions.map((position) => (
                                    <li
                                        key={position.id}
                                        className="flex items-center gap-3 p-4 bg-[#F5F5F3] rounded-lg"
                                    >
                                        <CheckCircle2 className="text-[#C9A962]" size={20} />
                                        <span className="font-medium text-[#1A2A4A]">
                                            {position.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 p-4 bg-[#1A2A4A]/5 rounded-lg">
                                <h4 className="font-medium text-[#1A2A4A] mb-2">応募条件</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                    <li>・各種内装工事の実務経験がある方</li>
                                    <li>・責任を持って仕事に取り組める方</li>
                                    <li>・コミュニケーションを大切にできる方</li>
                                    <li className="text-[#C9A962]">※個人・法人問いません</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 応募フォーム */}
            <section className="section bg-white">
                <div className="container mx-auto">
                    <div className="section-title">
                        <span className="section-title-en">APPLICATION</span>
                        <h2 className="section-title-jp">応募フォーム</h2>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="companyName">
                                    会社名/屋号
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    value={formData.companyName}
                                    onChange={(e) =>
                                        setFormData({ ...formData, companyName: e.target.value })
                                    }
                                    placeholder="例: ○○内装"
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
                                    placeholder="例: 090-1234-5678"
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

                            <div>
                                <label>
                                    対応可能工事 <span className="text-[#E8573D]">*</span>
                                </label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                                    {positions.map((position) => (
                                        <label
                                            key={position.id}
                                            className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${formData.positions.includes(position.id)
                                                    ? "border-[#C9A962] bg-[#C9A962]/10"
                                                    : "border-gray-200 hover:border-[#C9A962]"
                                                }`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={formData.positions.includes(position.id)}
                                                onChange={() => handlePositionChange(position.id)}
                                                className="sr-only"
                                            />
                                            <div
                                                className={`w-5 h-5 rounded border flex items-center justify-center ${formData.positions.includes(position.id)
                                                        ? "bg-[#C9A962] border-[#C9A962]"
                                                        : "border-gray-300"
                                                    }`}
                                            >
                                                {formData.positions.includes(position.id) && (
                                                    <CheckCircle2 className="text-white" size={14} />
                                                )}
                                            </div>
                                            <span className="text-sm">{position.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="experience">
                                    経験年数
                                </label>
                                <input
                                    type="text"
                                    id="experience"
                                    value={formData.experience}
                                    onChange={(e) =>
                                        setFormData({ ...formData, experience: e.target.value })
                                    }
                                    placeholder="例: 10年"
                                />
                            </div>

                            <div>
                                <label htmlFor="message">
                                    自己PR・メッセージ
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    placeholder="これまでの実績や得意な工事、アピールポイントなどをご記入ください"
                                />
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
                                        応募する
                                    </>
                                )}
                            </button>
                        </form>

                        <p className="text-center text-sm text-gray-500 mt-6">
                            お電話でのお問い合わせも歓迎です
                        </p>
                        <p className="text-center mt-2">
                            <a
                                href="tel:052-680-7707"
                                className="inline-flex items-center gap-2 text-[#1A2A4A] font-medium hover:text-[#C9A962]"
                            >
                                <Phone size={18} />
                                052-680-7707
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
