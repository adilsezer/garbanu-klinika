// components/MenuLinks.tsx

import React from "react";

const MenuLinks: React.FC = () => {
  const links = [
    { label: "PARDUOTUVĖ", href: "/parduotuve" },
    { label: "GARBANŲ TESTAS", href: "/garbanu-testas" },
    { label: "PASLAUGOS", href: "/paslaugos" },
    { label: "REGISTRACIJA", href: "/registracija" },
    { label: "APIE MUS", href: "/apie-mus" },
    { label: "KONTAKTAI", href: "/kontaktai" },
  ];

  return (
    <nav className="p-8">
      <div className="container mx-auto flex items-center justify-center">
        {" "}
        {/* Modified justify-between to justify-center */}
        <div className="hidden md:flex space-x-20">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MenuLinks;
