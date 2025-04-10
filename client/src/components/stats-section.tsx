import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const stats = [
  { number: "100+", label: "Projects Delivered" },
  { number: "20+", label: "Certified Team of Experts" },
  { number: "100+", label: "Clients Served Globally" },
  { number: "4+", label: "Years of Excellence" },
];

export function StatsSection() {
  return (
    <section className="bg-gray-100 2xl:py-12 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index !== stats.length - 1 ? "sm:border-r-4 lg:border-r-4 border-[#ED1E3A] pr-4" : ""
            }`}
          >
            <p className="text-4xl 2xl:text-7xl font-bold text-[#ED1E3A]">
              <span>{stat.number}</span>
            </p>
            <p className="mt-4 text-sm 2xl:text-lg font-medium text-gray-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
