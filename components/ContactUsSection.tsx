import { BarChartBig, InstagramIcon, LocateIcon, MailIcon, MapPinIcon, MessageCircleIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactUsSection = () => {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/",
    },
    {
      title: "Events",
      href: "/",
    },
    {
      title: "Sponsors",
      href: "/",
    },
  ];

  const socialLinks = [
    {
      title: "@Inkritfest",
      href: "https://www.instagram.com/inkritfest?utm_source=qr&igsh=YzVuaGZvNXlwODRr",
      icon : <InstagramIcon className="w-6 h-6" />,
    },
    {
        title: "@+919746095567",
        href: "wa.me/+919746095567",
        icon : <MessageCircleIcon className="w-6 h-6" />,
      },
  ];

  const contactLinks = [
    {
      title: "Email",
      href: "mailto:inkritfest@gmail.com",
      value: "inkritfest@gmail.com",
      icon: <MailIcon className="w-6 h-6" />,
    },
    {
      title: "Phone",
      href: "tel:+917994636861",
      value: "+91 79946 36861",
      icon: <PhoneIcon className="w-6 h-6" />,
    },
    {
      title: "Address",
      href: "https://maps.app.goo.gl/79YhYmfD2QNr2APH8",
      value:
        "MES College Marampally\nNorth Vazhakulam, Aluva\nErnakulam (Dist)\nKerala, India\nPin 683 105.",
      icon: <MapPinIcon className="w-6 h-6" />,
    },
  ];

  return (
    <section className="bg-black z-[10] text-white relative sm:px-[7.5%] py-20 sm:py-20 font-poppinsRegular">
      {/* top section  */}
      <section className="sm:flex sm:justify-between grid">
        {/* title  */}
        <div className="text-center">
          <p className="text-sm text-white/70 capitalize">
            Department of computer applications presents
          </p>
          <h1 className="text-white font-ahsing text-5xl sm:text-6xl">INKRIT 3.0</h1>
        </div>

        {/* links  */}
        <div className="mt-10 sm:mt-0 text-center sm:text-start">
          <h1 className="font-bold text-lg">Page Links</h1>
          <div className="grid sm:gap-3 pt-3">
            {links.map((link) => (
              <Link key={link.title} href={link.href} className="text-white/70">
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact links  */}
        <div className="grid justify-items-center sm:justify-items-start mt-10 sm:mt-0">
          <h1 className="font-bold text-lg">Contact Us</h1>
          <div className="grid gap-3 pt-3 justify-items-center sm:justify-items-start">
            {contactLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-white/70 flex justify-center sm:justify-start  gap-1 max-w-[300px]"
              >
                {link.icon}
                <span className="flex-1">{link.value}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* social links  */}
        <div className="mt-10 sm:mt-0 ">
          <h1 className="font-bold text-lg text-center sm:text-start">Connect With Us</h1>
          <div className="grid gap-3 pt-3 justify-items-center sm:justify-items-start">
            {socialLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-white/70 flex items-start gap-1 max-w-[300px]"
              >
                {link.icon}
                <span className="flex-1">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactUsSection;
