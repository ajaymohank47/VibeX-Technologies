import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Smartphone, Users, CheckCircle, Code2, Database, Wifi } from 'lucide-react';
import SEO from '../components/utils/SEO';
import Layout from '../components/layout/Layout';

const BlogCampusBuddy = () => {
    return (
        <Layout>
            <SEO
                title="Building Campus Buddy: A Cross-Platform Mobile App for Smart Education"
                description="How VibeX Technologies engineered a React Native + Java mobile solution to digitize student form management, event registrations, and attendance tracking."
                path="/blog/campus-buddy-app"
            />

            {/* Hero Banner */}
            <div className="relative bg-corporate-navy overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-teal via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
                />
                <div className="container mx-auto px-6 py-24 relative z-10">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-accent-teal-light hover:text-white transition-colors duration-200 text-sm font-medium mb-8 group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                        Back to Blog
                    </Link>

                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="inline-flex items-center gap-1.5 bg-accent-teal/20 border border-accent-teal/30 text-accent-teal-light text-xs font-semibold px-3 py-1.5 rounded-full">
                            <Tag size={11} /> Educational Tech
                        </span>
                        <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full">
                            <Smartphone size={11} /> Mobile Development
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white font-heading leading-tight max-w-4xl mb-6">
                        Building Campus Buddy: A Cross-Platform Mobile Solution for Smart Education
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
                        <span className="flex items-center gap-2">
                            <Calendar size={14} />
                            March 2025
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={14} />
                            6 min read
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
                            Educational institutions across India still rely on paper forms, manual attendance registers, and fragmented communication. Campus Buddy was engineered to change that, one campus at a time.
                        </p>

                        {/* Section 1 */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy font-heading mb-4">
                                The Problem We Set Out to Solve
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                When we first engaged with our client, a rapidly growing educational institution, they were managing over 900+ students, parents and staff entirely through paper-based workflows. Admission forms were lost, event registrations were a spreadsheet nightmare, and attendance had to be manually computed at month-end.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                The administrative overhead was enormous, and parents had zero visibility into their child's daily attendance or upcoming school events. Our mandate was clear: build something that works for <strong className="text-corporate-navy">admins, teachers, and parents</strong>, all from a single platform.
                            </p>
                        </section>

                        {/* Feature Highlights */}
                        <section className="mb-12 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <h2 className="text-2xl font-bold text-corporate-navy font-heading mb-6">
                                Core Features at a Glance
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { icon: <CheckCircle size={18} className="text-accent-teal" />, text: "Digital student form management & admissions" },
                                    { icon: <CheckCircle size={18} className="text-accent-teal" />, text: "Real-time attendance tracking for teachers" },
                                    { icon: <CheckCircle size={18} className="text-accent-teal" />, text: "Event registration & school calendar" },
                                    { icon: <CheckCircle size={18} className="text-accent-teal" />, text: "Parent portal for live attendance visibility" },
                                    { icon: <CheckCircle size={18} className="text-accent-teal" />, text: "Admin dashboard with analytics" },
                                    { icon: <CheckCircle size={18} className="text-accent-teal" />, text: "Push notifications for announcements" },
                                    { icon: <CheckCircle size={18} className="text-accent-teal" />, text: "Fee management & payment status" },
                                    { icon: <CheckCircle size={18} className="text-accent-teal" />, text: "Cross-platform: iOS & Android" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex-shrink-0">{item.icon}</span>
                                        <span className="text-slate-700 text-sm">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 2 - Tech Stack */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy font-heading mb-4">
                                Technology Stack & Architecture
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We chose <strong className="text-corporate-navy">React Native</strong> as our primary framework to achieve a truly shared codebase across iOS and Android. Performance-critical native modules, including real-time data synchronization and biometric authentication, were implemented in <strong className="text-corporate-navy">Java</strong> and bridged into the RN layer.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                {[
                                    { icon: <Smartphone size={28} className="text-accent-teal" />, title: "React Native", desc: "Shared UI components, navigation, and business logic across platforms" },
                                    { icon: <Code2 size={28} className="text-accent-teal" />, title: "Java Native Modules", desc: "Performance-sensitive features like attendance sync and secure storage" },
                                    { icon: <Database size={28} className="text-accent-teal" />, title: "Supabase Backend", desc: "PostgreSQL database with row-level security, auth, and real-time subscriptions" },
                                ].map((tech, i) => (
                                    <div key={i} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-accent-teal/30 transition-all duration-300">
                                        <div className="mb-3">{tech.icon}</div>
                                        <h3 className="font-bold text-corporate-navy text-sm font-heading mb-1">{tech.title}</h3>
                                        <p className="text-slate-500 text-xs leading-relaxed">{tech.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600 leading-relaxed">
                                The backend is powered by <strong className="text-corporate-navy">Supabase</strong>, providing a managed PostgreSQL database with built-in authentication, real-time subscriptions, and row-level security policies. Push notifications were implemented via <strong className="text-corporate-navy">Firebase Cloud Messaging (FCM)</strong>, ensuring reliable delivery across both platforms.
                            </p>
                        </section>

                        {/* Section 3 - Multi-role */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy font-heading mb-4">
                                Designing for Three Distinct User Roles
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                One of the biggest design challenges was creating a single app that serves three fundamentally different user personas, each with their own workflow, data access, and feature set.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { role: "Admin", color: "bg-corporate-navy", light: "bg-corporate-navy/5 border-corporate-navy/15", desc: "Full institutional control: manage students, teachers, fee structures, school events, and analytics dashboards. Admins can broadcast push notifications and generate monthly attendance reports." },
                                    { role: "Teacher", color: "bg-accent-teal", light: "bg-accent-teal/5 border-accent-teal/15", desc: "Class-scoped visibility: mark attendance, manage subject timetables, post assignments, and register students for events. Real-time sync ensures data is always current." },
                                    { role: "Parent", color: "bg-accent-orange", light: "bg-accent-orange/5 border-accent-orange/15", desc: "Read-only dashboard: track daily attendance, view upcoming events, monitor fee payment status, and receive instant notifications. Designed to be extremely simple and intuitive." },
                                ].map((user, i) => (
                                    <div key={i} className={`flex items-start gap-4 p-5 rounded-xl border ${user.light}`}>
                                        <span className={`${user.color} text-white text-xs font-bold px-2.5 py-1 rounded-md font-heading flex-shrink-0 mt-0.5`}>{user.role}</span>
                                        <p className="text-slate-600 text-sm leading-relaxed">{user.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4 - Challenges */}
                        <section className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy font-heading mb-4">
                                Engineering Challenges We Overcame
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-corporate-navy">Offline-first architecture</strong> was a non-negotiable requirement, as many Indian schools operate in areas with spotty internet. We implemented a local SQLite cache layer that queues attendance records and syncs them automatically when connectivity is restored, with guaranteed zero data loss.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong className="text-corporate-navy">Google OAuth integration</strong> required careful alignment between Firebase's token generation and Supabase's JWT verification. We resolved a critical authentication mismatch by bypassing the Firebase exchange layer entirely and using Supabase's native Google OAuth provider configured with the same client credentials.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                <strong className="text-corporate-navy">Cross-platform logout flows</strong> were also trickier than expected. React Native's <code className="bg-slate-100 text-corporate-navy px-1.5 py-0.5 rounded text-sm font-mono">Alert.alert</code> API is native-only, so we built a universal <code className="bg-slate-100 text-corporate-navy px-1.5 py-0.5 rounded text-sm font-mono">ConfirmDialog</code> component with matching behaviour on both Web and native targets.
                            </p>
                        </section>

                        {/* Impact */}
                        <section className="mb-12 bg-corporate-navy rounded-2xl p-8 text-white relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-teal to-transparent" />
                            <h2 className="text-2xl font-bold font-heading mb-6 relative z-10">Impact & Results</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 relative z-10">
                                {[
                                    { value: "90%", label: "Reduction in manual paperwork" },
                                    { value: "3x", label: "Faster admin workflows" },
                                    { value: "2 min", label: "Avg. attendance marking time" },
                                    { value: "100%", label: "Real-time parent visibility" },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-3xl font-bold text-accent-teal-light font-heading mb-1">{stat.value}</div>
                                        <div className="text-white/60 text-xs leading-snug">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Closing */}
                        <section className="mb-10">
                            <h2 className="text-2xl md:text-3xl font-bold text-corporate-navy font-heading mb-4">
                                What's Next for Campus Buddy
                            </h2>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                The next phase includes AI-powered analytics to predict student absenteeism trends, an integrated LMS module for digital assignments, and a parent-teacher messaging system with language localization for regional Indian languages.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Campus Buddy is a testament to how modern mobile technology can transform public institutions, not just in efficiency but in building transparent, accountable relationships between schools and families.
                            </p>
                        </section>

                        {/* CTA */}
                        <div className="border-t border-slate-100 pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-slate-500 text-sm">Interested in a similar solution for your institution?</p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-corporate-navy text-white font-semibold px-6 py-3 rounded-lg hover:bg-corporate-navy-light transition-colors duration-200 text-sm"
                            >
                                Let's Talk
                            </Link>
                        </div>

                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default BlogCampusBuddy;
