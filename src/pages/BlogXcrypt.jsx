import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Shield, Zap, Lock, Code2, ExternalLink, CheckCircle } from 'lucide-react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';

const BlogXcrypt = () => {
    return (
        <Layout>
            <SEO path="/blog/xcrypt-payment-gateway" />

            {/* Hero Banner */}
            <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #001A38 0%, #002D62 50%, #0F4C5C 100%)' }}>
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent-teal via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314B8A6' fill-opacity='1'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
                />
                <div className="container mx-auto px-6 py-24 relative z-10">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-accent-teal-light hover:text-white transition-colors duration-200 text-sm font-medium mb-8 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                        Back to Blog
                    </Link>

                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="inline-flex items-center gap-1.5 bg-accent-teal/20 border border-accent-teal/30 text-accent-teal-light text-xs font-semibold px-3 py-1.5 rounded-full">
                            <Tag size={11} /> FinTech
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full">
                            <Shield size={11} /> Blockchain
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white font-heading leading-tight max-w-4xl mb-6">
                        Xcrypt: Engineering a Secure Cryptocurrency Payment Gateway from the Ground Up
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
                        <span className="flex items-center gap-2">
                            <Calendar size={14} />
                            February 2025
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={14} />
                            7 min read
                        </span>
                        <span className="text-white/40">·</span>
                        <span className="text-white/70 font-medium">VibeX Technologies</span>
                    </div>
                </div>
            </div>

            {/* Article Body */}
            <article className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">

                        {/* Intro */}
                        <p className="text-xl text-slate-600 leading-relaxed mb-10 font-light border-l-4 border-accent-teal pl-6">
                            Traditional payment gateways are centralized, opaque, and riddled with intermediaries. Xcrypt was built to prove that cryptocurrency transactions can be as seamless as scanning a QR code, with every rupee and satoshi permanently on-chain.
                        </p>

                        {/* Overview */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy font-heading mb-4">
                                Why Build Another Crypto Gateway?
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                The cryptocurrency payments landscape is fragmented. Existing solutions either demand complex wallet setups, charge exorbitant processing fees, or rely on custodial services that undermine the core principle of decentralization. Businesses that want to accept crypto payments have no elegant, embeddable, developer-friendly option.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Xcrypt was designed with a singular goal: <strong className="text-corporate-navy">make crypto payments as frictionless as paying with a UPI QR code</strong>, while keeping every transaction transparent, immutable, and trustless.
                            </p>
                        </section>

                        {/* How It Works */}
                        <section className="mb-12 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <h2 className="text-2xl font-bold text-corporate-navy font-heading mb-6">
                                How a Payment Works
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { step: "01", title: "Merchant initiates checkout", desc: "The merchant's app calls the Xcrypt API with the amount and preferred cryptocurrency. A unique payment session is created on-chain." },
                                    { step: "02", title: "QR code is generated instantly", desc: "Xcrypt generates a cryptographically signed QR code encoding the recipient wallet, amount, and session token. No manual wallet address entry needed." },
                                    { step: "03", title: "Customer scans & confirms", desc: "The payer scans with any compatible wallet. The smart contract validates the amount and session token before accepting funds." },
                                    { step: "04", title: "Solidity contract settles", desc: "Once confirmed on-chain, the smart contract emits a PaymentSettled event. Xcrypt listens and triggers merchant-side webhooks in real-time." },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-5 p-4 bg-white rounded-xl border border-slate-200 hover:border-accent-teal/30 hover:shadow-sm transition-all duration-200">
                                        <span className="text-2xl font-bold text-accent-teal font-heading flex-shrink-0">{item.step}</span>
                                        <div>
                                            <h3 className="font-bold text-corporate-navy text-sm mb-1 font-heading">{item.title}</h3>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Tech Stack */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy font-heading mb-4">
                                Technology Architecture
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Xcrypt is a three-layer system: a smart contract layer for trustless settlement, a React frontend for the merchant dashboard and payment UX, and a Node.js middleware for session management and webhook delivery.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                {[
                                    { icon: <Code2 size={28} className="text-accent-teal" />, title: "Solidity Smart Contracts", desc: "EVM-compatible contracts validate payment sessions, enforce amount constraints, and emit immutable settlement events" },
                                    { icon: <Zap size={28} className="text-accent-teal" />, title: "React Frontend", desc: "Merchant dashboard with real-time transaction feed, QR generation UI, and embeddable payment widget" },
                                    { icon: <Shield size={28} className="text-accent-teal" />, title: "Node.js Middleware", desc: "Session orchestration, webhook delivery, retry logic, and cryptographic signature validation" },
                                ].map((tech, i) => (
                                    <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-accent-teal/30 transition-all duration-300">
                                        <div className="mb-3">{tech.icon}</div>
                                        <h3 className="font-bold text-corporate-navy text-sm font-heading mb-1">{tech.title}</h3>
                                        <p className="text-slate-500 text-xs leading-relaxed">{tech.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Smart Contract Deep Dive */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy font-heading mb-4">
                                Smart Contract Design Decisions
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                The core <code className="bg-slate-100 text-corporate-navy px-1.5 py-0.5 rounded text-sm font-mono">XcryptGateway.sol</code> contract handles three primitives: session creation, payment validation, and settlement confirmation. Amounts are validated against a declared tolerance window (±0.5%) to account for gas price fluctuations and partial orders.
                            </p>
                            <div className="bg-slate-900 rounded-xl p-6 my-6 overflow-x-auto">
                                <div className="text-xs text-slate-400 mb-3 font-mono">XcryptGateway.sol (simplified)</div>
                                <pre className="text-sm font-mono text-slate-300 leading-relaxed whitespace-pre overflow-x-auto">{`event PaymentSettled(
  bytes32 indexed sessionId,
  address indexed payer,
  uint256 amount,
  uint256 timestamp
);

function settlePayment(bytes32 sessionId)
  external payable {
    PaymentSession storage session =
      sessions[sessionId];
    require(!session.settled, "Already settled");
    require(
      msg.value >= session.minAmount,
      "Insufficient payment"
    );
    session.settled = true;
    emit PaymentSettled(
      sessionId,
      msg.sender,
      msg.value,
      block.timestamp
    );
}`}</pre>
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                The contract is intentionally non-upgradeable to maximize trust. Funds flow directly from payer to merchant wallet, with Xcrypt middleware acting purely as a session orchestrator that never touches the funds.
                            </p>
                        </section>

                        {/* Security */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy font-heading mb-4">
                                Security-First Engineering
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Crypto payment infrastructure is a prime attack target. Every layer of Xcrypt was designed defensively:
                            </p>
                            <div className="space-y-3">
                                {[
                                    { title: "Replay attack prevention", desc: "Each session token is a one-time-use cryptographic hash derived from merchant ID, amount, nonce, and timestamp, making replay attacks computationally infeasible." },
                                    { title: "Re-entrancy guards", desc: "The smart contract uses the checks-effects-interactions pattern and OpenZeppelin's ReentrancyGuard to prevent recursive call exploits." },
                                    { title: "Rate limiting", desc: "The API layer enforces sliding-window rate limits per merchant key, preventing denial-of-service and session-flooding attacks." },
                                    { title: "Immutable audit trail", desc: "All settlement events are permanently on-chain, verifiable by anyone and falsifiable by no one. This eliminates chargeback fraud." },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors duration-200">
                                        <Lock size={16} className="text-accent-teal flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-semibold text-corporate-navy text-sm">{item.title}:</span>{' '}
                                            <span className="text-slate-600 text-sm">{item.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Results */}
                        <section className="mb-12 rounded-2xl overflow-hidden border border-slate-200">
                            <div className="bg-corporate-navy p-6 text-white">
                                <h2 className="text-xl font-bold font-heading">Platform Capabilities</h2>
                            </div>
                            <div className="p-6 bg-white grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "QR-code payment initiation in under 2 seconds",
                                    "Support for ETH, MATIC, and BNB networks",
                                    "On-chain settlement with real-time webhook triggers",
                                    "Embeddable checkout widget (3 lines of JS)",
                                    "Merchant dashboard with live transaction analytics",
                                    "Zero custody, funds go directly to merchant wallet",
                                    "Full transaction history exportable as CSV",
                                    "Audit-ready immutable blockchain records",
                                ].map((feat, i) => (
                                    <div key={i} className="flex items-start gap-2.5">
                                        <CheckCircle size={16} className="text-accent-teal flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-600 text-sm">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Closing */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy font-heading mb-4">
                                The Road Ahead
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                The next version of Xcrypt will introduce fiat on-ramp integrations, enabling customers to pay in INR which is converted to crypto on-the-fly before settlement. We're also exploring Layer 2 deployments on Polygon zkEVM to bring transaction costs below ₹1.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Xcrypt demonstrates that the Web3 payment experience doesn't have to be intimidating. With the right engineering, blockchain-native payments can be faster, cheaper, and more secure than anything traditional fintech offers. We're just getting started.
                            </p>
                        </section>

                        {/* CTA */}
                        <div className="border-t border-slate-100 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-slate-500 text-sm">Want to integrate crypto payments into your platform?</p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-corporate-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-corporate-navy-light transition-colors duration-200 text-sm"
                            >
                                Get In Touch
                            </Link>
                        </div>

                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default BlogXcrypt;
