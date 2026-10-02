import { SectionHeading } from "../shared/SectionHeading";
import client1 from "../../assets/images/Clients/client1.png";
import client2 from "../../assets/images/Clients/client2.png";
import client3 from "../../assets/images/Clients/client3.png";
import client4 from "../../assets/images/Clients/client4.png";
import client5 from "../../assets/images/Clients/client5.png";
import client6 from "../../assets/images/Clients/client6.png";
import client7 from "../../assets/images/Clients/client7.png";
import client8 from "../../assets/images/Clients/client8.png";
import client9 from "../../assets/images/Clients/client9.png";
import client10 from "../../assets/images/Clients/client10.png";
import client11 from "../../assets/images/Clients/client11.png";
import client12 from "../../assets/images/Clients/client12.png";
import client13 from "../../assets/images/Clients/client13.png";
import client14 from "../../assets/images/Clients/client14.png";
import client15 from "../../assets/images/Clients/client15.png";
import client16 from "../../assets/images/Clients/client16.png";
const CLIENT_LOGOS = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12, client13, client14, client15, client16];

export const HomeClientsSection = () => (
<section className="relative z-10 w-full overflow-hidden py-14 md:py-16">
  <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
    <div className="mb-8 text-center">
      <SectionHeading
        primary="Our"
        secondary="Clients"
        className="text-center"
      />
      {/* <div className="mx-auto mt-3 h-[2px] w-12 bg-[#92d1bc]" /> */}
    </div>

    <div className="space-y-4 overflow-hidden">
      {[{ id: "left", items: [...CLIENT_LOGOS, ...CLIENT_LOGOS], direction: "left" }, { id: "right", items: [...CLIENT_LOGOS, ...CLIENT_LOGOS], direction: "right" }].map((row) => (
        <div key={row.id} className="overflow-hidden">
          <div
            className={`client-marquee-track ${row.direction === "right" ? "client-marquee-track-reverse" : "client-marquee-track-left"} flex w-max items-center gap-3 md:gap-5`}
          >
            {row.items.map((logo, index) => (
              <div
                key={`${row.id}-${index}`}
                className="client-logo-card flex h-16 w-28 shrink-0 items-center justify-center rounded-xl border border-[#DCE8E1] bg-white/80 px-3 py-2 shadow-[0_10px_24px_rgba(23,57,42,0.08)] backdrop-blur-sm sm:h-20 sm:w-32 md:h-24 md:w-36 lg:h-28 lg:w-40"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="h-full w-full object-contain p-1"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
);
