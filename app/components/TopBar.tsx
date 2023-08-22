import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <section className="topbar_section">
      <div className="topbar_subsection">
        <p>
          <Link href="#">
            Our mission just grew bigger! ⚡️ Presenting Novatr
          </Link>
        </p>
      </div>
    </section>
  );
};

export default TopBar;
