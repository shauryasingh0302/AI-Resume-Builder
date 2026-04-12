export default function Testimonial() {
    const testimonials = [
        { text: "This AI resume builder helped me create an ATS-friendly resume in minutes. I started getting more interview calls right away.", name: "Cristofer Levin", role: "Software engineering student", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" },
        { text: "The AI suggestions for bullet points and skills saved me hours. It made my internship resume look much more professional.", name: "Rohan Mehta", role: "Computer science student", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" },
        { text: "I used it to tailor my resume for multiple job roles quickly. The formatting stayed clean and recruiter-friendly every time.", name: "Jason Kim", role: "Frontend developer", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60" },
        { text: "The templates and AI writing support made it super easy to build a polished resume even without prior design skills.", name: "Alex Turner", role: "Full stack developer", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60" },
        { text: "I finally built a resume that highlights my strengths properly. The ATS optimization feature is honestly a game changer.", name: "Sofia Martinez", role: "UX design applicant", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop" },
        { text: "As a fresher, I struggled with resume writing. This platform gave me strong action points and a modern professional layout instantly.", name: "Daniel Wong", role: "Final year student", image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png" }
    ];

    const rows = [
        { start: 0, end: 3, className: "animate-scroll" },
        { start: 3, end: 6, className: "animate-scroll-reverse" }
    ];

    const renderCard = (testimonial, index) => (
        <div key={index} className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-4 shrink-0 w-87.5">
            <div className="flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-transparent fill-[#737373]" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                ))}
            </div>
            <p className="text-neutral-700 text-sm mb-6">{testimonial.text}</p>
            <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-11 h-11 rounded-full object-cover"/>
                <div>
                    <p className="font-medium text-neutral-800 text-sm">{testimonial.name}</p>
                    <p className="text-neutral-600 text-sm">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }

                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }
                    @keyframes scrollReverse {
                        0% {
                            transform: translateX(-50%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }
                    .animate-scroll {
                        animation: scroll 15s linear infinite;
                    }
                    .animate-scroll-reverse {
                        animation: scrollReverse 15s linear infinite;
                    }
                `}
            </style>
            <section className="bg-[#FAFAFA] py-16 px-4">
                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-8">
                        <div className="inline-block bg-neutral-100 border border-neutral-400 rounded-full px-4 py-1 mb-3">
                            <span className="text-xs text-neutral-600">Loved by job seekers</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 mb-4">
                            Success stories from users
                        </h2>
                        <p className="text-neutral-600 text-sm max-w-96 mx-auto">
                            Real feedback from students, freshers and professionals building ATS-ready resumes.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {rows.map((row, rowIndex) => (
                            <div key={rowIndex} className="relative overflow-hidden">
                                <div className="absolute left-0 top-0 bottom-0 w-28 bg-linear-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute right-0 top-0 bottom-0 w-28 bg-linear-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none"></div>

                                <div className={`flex gap-6 ${row.className}`}>
                                    {[...testimonials.slice(row.start, row.end), ...testimonials.slice(row.start, row.end)].map((testimonial, index) =>
                                        renderCard(testimonial, index)
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}