import React, { useState } from 'react';
import { STUDY_LIBRARY, CONTACT_INFO, ClassData, ResourceItem } from './studyData';
import { BookOpen, FileText, Download, Phone, Mail, Award, CheckCircle } from 'lucide-react';

export default function App() {
  const [activeClassIndex, setActiveClassIndex] = useState<number>(0);
  const [selectedSubjectIndex, setSelectedSubjectIndex] = useState<number>(0);

  const currentClass: ClassData = STUDY_LIBRARY[activeClassIndex];
  const currentSubjects = currentClass.subjects;
  const currentSubject = currentSubjects && currentSubjects[selectedSubjectIndex];

  // Agar class badli toh subject index ko reset karne ke liye
  const handleClassChange = (index: number) => {
    setActiveClassIndex(index);
    setSelectedSubjectIndex(0);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Header Banner Section */}
      <header className="bg-gradient-to-r from-blue-700 to-indigo-800 py-12 px-6 text-center shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="bg-blue-500/30 text-blue-200 text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider">
            Knowing Knowledge Digital Library
          </span>
          <h1 className="text-4xl md:text-5xl font-black mt-4 tracking-tight drop-shadow-md">
            Complete Educational Library
          </h1>
          <p className="text-blue-100/80 mt-3 text-sm md:text-base max-w-xl mx-auto font-light">
            Class 9th se lekar Post Graduation (PG) tak ke saare Guess Papers, Books aur PYQs ek hi jagah par download karein.
          </p>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
        
        {/* 1. Class Navigation Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 bg-slate-800/50 p-2 rounded-2xl border border-slate-700/50">
          {STUDY_LIBRARY.map((item, index) => (
            <button
              key={item.className}
              onClick={() => handleClassChange(index)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeClassIndex === index
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                  : 'bg-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {item.className}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Left Column: Subjects List */}
          <div className="md:col-span-1 bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 h-fit">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 px-2">
              Available Subjects
            </h3>
            {currentSubjects.length === 0 ? (
              <p className="text-xs text-slate-500 italic p-2">Syllabus update ho raha hai...</p>
            ) : (
              <div className="flex flex-col gap-1.5">
                {currentSubjects.map((sub, idx) => (
                  <button
                    key={sub.name}
                    onClick={() => setSelectedSubjectIndex(idx)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                      selectedSubjectIndex === idx
                        ? 'bg-slate-700 text-blue-400 font-bold border-l-4 border-blue-500 pl-2'
                        : 'text-slate-300 hover:bg-slate-800/60'
                    }`}
                  >
                    <BookOpen size={16} className="opacity-70" />
                    <span className="truncate">{sub.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: PDF/Material Cards Grid */}
          <div className="md:col-span-3">
            {currentSubject ? (
              <div>
                <div className="border-b border-slate-800 pb-4 mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                    {currentSubject.name} Materials
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">Latest syllabus aur resources niche se direct download karein.</p>
                </div>

                {currentSubject.resources.length === 0 ? (
                  <div className="bg-slate-800/20 border border-dashed border-slate-700 p-8 rounded-2xl text-center text-slate-500 text-sm">
                    Is subject ke liye jaldi hi PDFs jodi jayengi.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentSubject.resources.map((res: ResourceItem) => (
                      <div 
                        key={res.id} 
                        className="bg-slate-800/60 border border-slate-700/60 hover:border-slate-600/80 p-5 rounded-2xl transition-all flex flex-col justify-between shadow-sm hover:shadow-md group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                              res.type === 'Book' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                              res.type === 'PYQ' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                              'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                            }`}>
                              {res.type}
                            </span>
                            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded-full border border-emerald-500/10">
                              {res.price === 0 ? "FREE" : `₹${res.price}`}
                            </span>
                          </div>
                          <h4 className="text-sm md:text-base font-semibold text-slate-100 group-hover:text-blue-400 transition-colors line-clamp-2">
                            {res.title}
                          </h4>
                        </div>

                        <div className="mt-5 pt-3 border-t border-slate-700/40 flex items-center justify-end">
                          <a
                            href={res.pdfUrl}
                            download
                            className="inline-flex items-center gap-2 text-xs font-bold bg-slate-700 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition-all shadow-sm cursor-pointer"
                          >
                            <Download size={14} /> Download PDF
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-slate-800/20 border border-dashed border-slate-700 p-12 rounded-2xl text-center text-slate-400">
                Kripya left side se koi bhi subject select karein.
              </div>
            )}
          </div>

        </div>
      </main>

      {/* Fixed Footer with Contact Info (Aapka Number aur Mail yahan safe rahega) */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6 mt-12 text-center text-slate-500 text-xs">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="text-left">
            <p className="font-bold text-slate-400 text-sm">Knowing Knowledge Library</p>
            <p className="mt-0.5 text-slate-500">Quality education resources for every student.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-slate-300">
            <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Phone size={14} className="text-blue-500" /> {CONTACT_INFO.phone}
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Mail size={14} className="text-indigo-500" /> {CONTACT_INFO.email}
            </a>
          </div>
        </div>
        <div className="pt-4 border-t border-slate-900 text-[11px]">
          &copy; {new Date().getFullYear()} Knowing Knowledge. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
