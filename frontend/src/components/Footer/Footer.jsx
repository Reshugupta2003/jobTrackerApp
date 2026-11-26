
import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  GithubIcon,
  Linkedin01Icon,
  InstagramIcon,
  BriefcaseBusinessIcon,
} from "@hugeicons/core-free-icons";

function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", path: "/#features" },
        { name: "Dashboard", path: "/login" },
        { name: "How it works", path: "/#how-it-works" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Feedback", path: "/feedback" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", path: "/help" },
        { name: "FAQs", path: "/faqs" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms & Conditions", path: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { icon: GithubIcon, url: "https://github.com/" },
    { icon: Linkedin01Icon, url: "https://linkedin.com/" },
    { icon: InstagramIcon, url: "https://instagram.com/" },
  ];

  return (
    <footer className="bg-white border-t border-slate-800 m-3">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand Section */}
          <div className="lg:col-span-2">

            <Link to="/" className="flex items-center gap-2 w-fit">

              <div className="bg-blue-600 p-2 rounded-lg">
                <HugeiconsIcon
                  icon={BriefcaseBusinessIcon}
                  size={23}
                  color="#ffffff"
                />
              </div>

              <span className="text-xl font-bold text-slate-900">
                JobTrack
              </span>

            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-500 max-w-sm">
              Simplify your job search journey. Track applications,
              manage interviews, and stay organized with everything
              in one place.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">

              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-blue-600
                  transition-colors duration-200"
                  aria-label="Social media"
                >
                  <HugeiconsIcon icon={social.icon} size={21} />
                </a>
              ))}

            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>

              <h3 className="text-sm font-semibold text-slate-900 mb-5">
                {section.title}
              </h3>

              <ul className="space-y-3">

                {section.links.map((link) => (
                  <li key={link.name}>

                    <Link
                      to={link.path}
                      className="text-sm text-slate-500
                      hover:text-blue-600 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>

                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-7 border-t border-slate-200
        flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} JobTrack. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Built to make your career journey easier.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
