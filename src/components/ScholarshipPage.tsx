import { motion } from 'motion/react';
import { GraduationCap, CheckCircle, BookOpen, Award, Target, Clock, ArrowRight, FileText, Calendar, Users, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageWrapper from './PageWrapper';

const scholarshipPrograms = [
  {
    title: 'Merit-Based Scholarship',
    icon: Award,
    amount: 'Up to BDT 50,000',
    description: 'Awarded to students who have demonstrated exceptional academic performance with a minimum GPA of 4.5 (or equivalent).',
    criteria: [
      'Minimum GPA 4.5 in last academic year',
      'Enrolled in recognized educational institution',
      'Strong academic records and teacher recommendations',
      'Active participation in co-curricular activities',
      'Must be from the Bengali Hindu community',
    ],
  },
  {
    title: 'Need-Based Scholarship',
    icon: Target,
    amount: 'Up to BDT 30,000',
    description: 'Designed to support students from economically disadvantaged backgrounds who show academic promise.',
    criteria: [
      'Demonstrated financial need (family income proof required)',
      'Minimum GPA 3.5 in last academic year',
      'Enrolled in recognized educational institution',
      'Good moral character and community involvement',
      'Must be from the Bengali Hindu community',
    ],
  },
  {
    title: 'Cultural Excellence Award',
    icon: BookOpen,
    amount: 'Up to BDT 25,000',
    description: 'Recognizes students who have excelled in traditional Bengali Hindu arts, music, dance, or cultural activities.',
    criteria: [
      'Demonstrated excellence in cultural/artistic pursuits',
      'Minimum GPA 3.0 in last academic year',
      'Portfolio or performance evidence required',
      'Active participation in community cultural events',
      'Must be from the Bengali Hindu community',
    ],
  },
];

const timeline = [
  { step: '1', title: 'Application Opens', date: 'January 1, 2026' },
  { step: '2', title: 'Document Submission', date: 'January 1 – March 31, 2026' },
  { step: '3', title: 'Review & Shortlisting', date: 'April 1 – May 15, 2026' },
  { step: '4', title: 'Interviews (if applicable)', date: 'May 16 – June 15, 2026' },
  { step: '5', title: 'Final Selection', date: 'June 30, 2026' },
  { step: '6', title: 'Award Distribution', date: 'July 15, 2026' },
];

const requiredDocs = [
  'Completed application form (online or physical)',
  'Recent passport-size photograph (2 copies)',
  'Certified copy of last academic transcript/result',
  'Proof of enrollment in current institution',
  'National ID or birth certificate (student)',
  'Family income certificate (for need-based)',
  'Recommendation letter from teacher or community leader',
  'Portfolio or evidence (for cultural excellence award)',
];

export default function ScholarshipPage() {
  return (
    <PageWrapper title="Apply for Scholarship">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-10 left-10 w-72 h-72 bg-saffron-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-gold-500/40 text-gold-500 font-bold text-xs tracking-widest uppercase mb-4 backdrop-blur-sm bg-maroon-900/50">
              Education Support
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Scholarship Program
            </h1>
            <p className="max-w-3xl mx-auto text-saffron-100/90 text-base md:text-lg leading-relaxed">
              Empowering the next generation through education. GBSPF offers scholarships to support 
              deserving students from our community in their academic and cultural pursuits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-maroon-50 text-maroon-800 font-bold text-xs tracking-widest uppercase mb-4">
                Our Scholarship Program
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-6">
                Investing in Bright Futures
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                At GBSPF, we believe education is the foundation of a strong community. Our scholarship 
                program aims to identify and support talented students who demonstrate academic excellence, 
                financial need, or outstanding cultural achievements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-xl bg-saffron-50">
                  <span className="block text-3xl font-bold text-maroon-900">50+</span>
                  <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">Scholarships Awarded</span>
                </div>
                <div className="text-center p-4 rounded-xl bg-saffron-50">
                  <span className="block text-3xl font-bold text-maroon-900">$20K</span>
                  <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">Total Disbursed</span>
                </div>
                <div className="text-center p-4 rounded-xl bg-saffron-50">
                  <span className="block text-3xl font-bold text-maroon-900">3</span>
                  <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">Program Categories</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Students studying"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-saffron-500 text-white px-6 py-4 rounded-xl shadow-lg">
                <GraduationCap size={32} className="mb-1" />
                <span className="block text-xs font-semibold uppercase tracking-wider">Education for All</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scholarship Programs */}
      <section className="py-20 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-maroon-50 text-maroon-800 font-bold text-xs tracking-widest uppercase mb-4">
              Scholarship Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-4">
              Choose Your Scholarship
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We offer three distinct scholarship programs to support different aspects of student development.
            </p>
          </motion.div>

          <div className="space-y-12">
            {scholarshipPrograms.map((program, idx) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    <div className="lg:col-span-2 p-8 lg:p-10 bg-gradient-to-br from-saffron-50 to-saffron-100/50 flex flex-col justify-center">
                      <div className="w-14 h-14 rounded-2xl bg-saffron-100 flex items-center justify-center mb-5">
                        <Icon size={28} className="text-saffron-600" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-2">{program.title}</h3>
                      <p className="text-saffron-600 font-bold text-lg mb-3">{program.amount}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
                    </div>
                    <div className="lg:col-span-3 p-8 lg:p-10">
                      <h4 className="text-sm font-bold uppercase tracking-widest text-maroon-800 mb-4">Eligibility Criteria</h4>
                      <ul className="space-y-3">
                        {program.criteria.map((c, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle size={18} className="text-saffron-500 shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-maroon-50 text-maroon-800 font-bold text-xs tracking-widest uppercase mb-4">
              Timeline
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-4">
              Application Timeline 2026
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Important dates and deadlines for the current scholarship cycle.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {timeline.map((item, idx) => {
                const Icon = [Calendar, Clock, FileText, Users, Award, Gift][idx];
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="relative group"
                  >
                    {/* Connector line (desktop) */}
                    {idx < timeline.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-[calc(100%-2rem)] h-0.5 bg-gradient-to-r from-saffron-300 to-saffron-100 -z-0"></div>
                    )}
                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-saffron-100 hover:border-saffron-300 relative z-10 h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-maroon-800 to-maroon-900 text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0">
                          {item.step}
                        </div>
                        <div className="w-10 h-10 rounded-full bg-saffron-50 flex items-center justify-center">
                          <Icon size={18} className="text-saffron-600" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-maroon-900 mb-1">{item.title}</h3>
                      <div className="flex items-center gap-1.5 text-saffron-600 text-sm font-medium">
                        <Calendar size={14} />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Progress indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 text-center"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-maroon-50 text-maroon-700 text-sm font-medium">
                <Clock size={16} />
                Timeline subject to change. All applicants will be notified via email.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-saffron-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-maroon-50 text-maroon-800 font-bold text-xs tracking-widest uppercase mb-4">
              Documents
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-maroon-900 mb-4">
              Required Documents
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Please ensure you have the following documents ready before submitting your application.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requiredDocs.map((doc, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-sm"
                >
                  <FileText size={18} className="text-saffron-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{doc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-maroon-900 to-maroon-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Ready to Apply?
            </h2>
            <p className="text-saffron-100/80 max-w-2xl mx-auto mb-8 text-lg">
              Submit your scholarship application online. Our review committee will evaluate all applications 
              and notify selected candidates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-saffron-500 hover:bg-saffron-600 text-white font-bold uppercase tracking-widest text-xs shadow-md transition-colors inline-flex items-center gap-2"
              >
                Apply Now <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full border border-gold-500/40 text-gold-500 hover:bg-white/10 font-bold uppercase tracking-widest text-xs transition-colors"
              >
                Ask a Question
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}