import { useNavigate } from "react-router-dom";


function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="overflow-hidden bg-white text-slate-900">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#0a0a0a] text-white">

        {/* Background decoration : create a glorified lightening effect */}
        <div className="absolute -top-40 -right-40 h-125 w-125 rounded-full bg-blue-600/20 blur-3xl" />
        
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        
        {/* Managing grid-layout, lg:grid-cols-2 : use 2 col layout if screen is large */}
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-12 lg:py-28">

          {/* Hero Content */}
          <div>
            {/* This is make text visually attracted, specially this : text-blue-300, bg-blue-500/20,border-blue-400/20 */}
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/20 px-4 py-2 text-sm text-blue-300">
              ✦ Your job search, organized
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your job search.
              <br />

              <span className="bg-linear-to-b from-blue-200 to-indigo-500 bg-clip-text text-transparent">
                Your success.
              </span>

              <br />

              All in one place.
            </h1>

            <p className="mt-6 max-w-lg text-base/7 text-slate-400 sm:text-lg">
              Stop juggling spreadsheets and scattered notes.
              Organize applications, track interviews, and stay
              on top of every opportunity with one simple dashboard.
            </p>

            {/* Trust text */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-3">
                {["👨🏻", "👩🏽", "👨🏽", "👩🏻"].map((avatar, index) => (
                  <div
                    key={index}
                    className="flex h-10 w-10 items-center justify-center
                    rounded-full border-2 border-[#0b1125] bg-slate-700 text-lg"
                  >
                    {avatar}
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-400">
                Built for ambitious job seekers
              </p>
            </div>
          </div>

          {/* ================= DASHBOARD PREVIEW ================= */}
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-3xl" />

            <div className="relative rotate-2 rounded-2xl border border-white/20
              bg-slate-900 p-3 shadow-2xl shadow-blue-950/40 sm:p-5">

              {/* Dashboard header */}
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
                    💼
                  </div>

                  <span className="font-semibold text-white">
                    JobTracker
                  </span>
                </div>
                
                {/* 3 dots */}
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
              </div>

              {/* Dashboard body */}
              <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-[120px_1fr]">

                {/* Sidebar preview */}
                <div className="hidden space-y-3 border-r border-slate-700 pr-3 sm:block">
                  <div className="rounded-lg bg-blue-600/20 px-3 py-2 text-sm text-blue-400">
                    ▦ Dashboard
                  </div>

                  <div className="px-3 py-2 text-sm text-slate-400">
                    ▤ job tracker
                  </div>

                  <div className="px-3 py-2 text-sm text-slate-400">
                    ◷ Resume Analyzer
                  </div>

                  <div className="px-3 py-2 text-sm text-slate-400">
                    ◈ Extension
                  </div>
                </div>

                {/* Main dashboard */}
                <div className="min-w-0">

                  <h3 className="text-lg font-semibold text-white">
                    Overview
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    Here's your job search activity
                  </p>

                  {/* Stats */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      {
                        title: "Applied",
                        value: "12",
                        color: "text-blue-400",
                      },
                      {
                        title: "Interviews",
                        value: "05",
                        color: "text-purple-400",
                      },
                      {
                        title: "Offers",
                        value: "02",
                        color: "text-green-400",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.title}
                        className="rounded-xl border border-slate-700 bg-slate-800 p-3"
                      >
                        <p className="text-xs text-slate-400">
                          {stat.title}
                        </p>

                        <p className={`mt-1 text-2xl font-bold ${stat.color}`}>
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Application list : I think writing each card independently this is better way to use loop on it*/}
                  <div className="mt-5 rounded-xl border border-slate-700 bg-slate-800 p-4">
                    <h4 className="mb-3 text-sm font-semibold text-white">
                      Recent Applications
                    </h4>

                    {[
                      {
                        company: "Google",
                        role: "Software Engineer",
                        status: "Applied",
                        color: "bg-blue-500/10 text-blue-400",
                        logo: "G",
                      },
                      {
                        company: "Microsoft",
                        role: "Frontend Developer",
                        status: "Interview",
                        color: "bg-purple-500/10 text-purple-400",
                        logo: "M",
                      },
                      {
                        company: "Amazon",
                        role: "SDE I",
                        status: "Offer",
                        color: "bg-green-500/10 text-green-400",
                        logo: "a",
                      },
                    ].map((job) => (
                      <div
                        key={job.company}
                        className="flex items-center justify-between gap-2 border-b
                        border-slate-700 py-3 last:border-0"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <div className="flex h-9 w-9 shrink-0 items-center
                            justify-center rounded-lg bg-slate-700 font-bold text-white">
                            {job.logo}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-medium text-white">
                              {job.company}
                            </p>

                            <p className="truncate text-xs text-slate-400">
                              {job.role}
                            </p>
                          </div>
                        </div>

                        <span className={`shrink-0 rounded-full px-2 py-1 text-[10px]
                          font-medium ${job.color}`}>
                          {job.status}
                        </span>
                      </div>
                    ))}
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section id="features" className="bg-slate-50 px-6 py-20">
        
        {/* Pending Work - add data to gain Trust */}
         {/* <div className="grid grid-cols-3 gap-2 text-white bg-black/20 border-indigo-700/20 ">
            {[
              {
                id : "1",
                icon: "d",
                text : "Happy User",
                data : 

              },
              {
                id : "2",
                icon: "",
                text: "Application Tracked"
              }
            ].map((ele) => (
              <div key={ele.id}
              ></div>
            ))}
         </div> */}
        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm
              font-medium text-blue-700">
              Everything in one place
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Make your job search
              <span className="text-blue-600"> less stressful</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Spend less time organizing and more time preparing
              for the opportunities that matter.
            </p>
          </div>

          {/* Feature cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {
                icon: "📋",
                title: "Application Tracking",
                description:
                  "Keep every job application organized. Track company details, role, date applied, and current status.",
                color: "bg-blue-100",
              },
              {
                icon: "📅",
                title: "Interview Management",
                description:
                  "Stay prepared for upcoming interviews. Keep interview dates, rounds, and important notes together.",
                color: "bg-purple-100",
              },
              {
                icon: "📈",
                title: "Track Your Progress",
                description:
                  "Understand your job search progress with a clear overview of applications, interviews, and offers.",
                color: "bg-green-100",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7
                transition duration-300 hover:-translate-y-1 hover:border-blue-200
                hover:shadow-xl hover:shadow-blue-100/50"
              >
                <div className={`flex h-14 w-14 items-center justify-center
                  rounded-2xl text-2xl ${feature.color}`}>
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {feature.description}
                </p>

                <div className="mt-5 font-medium text-blue-600 transition
                  group-hover:translate-x-1">
                  Stay organized →
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      
    </main>
  );
}

export default LandingPage;

/*
  1. Hero section : it is the large, prominent area at the top of a webpage—usually visible before scrolling—that introduces the site and guides visitors on what to do next.

  2. in tailwind css, 
  * top-40 : Pushes the element down by 160px from its top reference edge.
  * -top-40 : Pulls the element up by 160px from its top reference edge.
  * gap : control spacing between rows and columns inside Flexbox and Grid containers.
  * inline-flex : creates a flex container that behaves like an inline element on the outside while laying out its children using Flexbox on the inside.
  * letter-spacing : tracking-tight
  * bg-linear-to-r from-blue-400 to-indigo-500  : linear gradient from left to right. (other directions : -t, -b, -l, -tr, -tl, -br, -bl), if add this gradient to text, then use bg-clip-text and text-transparent to make it visible.
  * inset-0 : right: 0; bottom: 0; left: 0; top: 0;
  * rotate-1 : rotates the element by 1 degree clockwise, while rotate--1 rotates it counterclockwise.
  * last:border-0 : removes the border from the last child element in a group of sibling elements.
  * shrink-0 : to prevent a flex item from shrinking.

  3. Every tag in react.js is a self-closing tag. ex - <div /> this is a self-closing tag here and standard HTML5 convert it into <div></div>. we use self-closing tags when we don't have any content or child elements inside the tag.

  4. bg-indigo-600/20, border-blue-400/20 : this make background transparent (20% opacity).
*/