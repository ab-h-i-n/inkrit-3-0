"use client";
import { aboutData } from '@/data/about';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-4 space-y-16">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-4">{aboutData.fest.title}</h2>
          <p className="text-gray-600 mb-4">{aboutData.fest.description}</p>
          <p className="font-semibold mb-2">Vision:</p>
          <p className="text-gray-600 mb-4">{aboutData.fest.vision}</p>
          <div>
            <p className="font-semibold mb-2">Highlights:</p>
            <ul className="list-disc list-inside text-gray-600">
              {aboutData.fest.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-4">{aboutData.college.name}</h2>
          <p className="text-gray-600 mb-4">{aboutData.college.description}</p>
          <div>
            <p className="font-semibold mb-2">Achievements:</p>
            <ul className="list-disc list-inside text-gray-600">
              {aboutData.college.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-4">{aboutData.department.name}</h2>
          <p className="text-gray-600 mb-4">{aboutData.department.description}</p>
          <div className="mb-4">
            <p className="font-semibold mb-2">Programs:</p>
            <ul className="list-disc list-inside text-gray-600">
              {aboutData.department.programs.map((program, index) => (
                <li key={index}>{program}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Faculty:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aboutData.department.faculty.map((member, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold">{member.name}</p>
                  <p className="text-gray-600">{member.designation}</p>
                  <p className="text-gray-600">{member.specialization}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}