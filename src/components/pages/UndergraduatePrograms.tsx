import { Card } from '../ui/card';
import { BookOpen, Clock, Award, FileText, Download } from 'lucide-react';
import { Button } from '../ui/button';

export function UndergraduatePrograms() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="mb-4">Undergraduate Programs</h1>
          <p className="text-gray-600">
            Our undergraduate programs provide cutting-edge education in collaboration with leading universities.
          </p>
        </div>

        {/* BSc Blockchain Technology */}
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Program Header */}
          <Card className="p-8 border-t-4 border-blue-600">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="mb-2">BSc in Blockchain Technology</h2>
                <p className="text-gray-600 mb-4">
                  A comprehensive program designed to provide in-depth knowledge of blockchain technology, 
                  cryptocurrencies, smart contracts, and distributed systems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">3 Years</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-700">Bachelor's Degree</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* University Offerings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* SPPU Program */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="mb-2" style={{ color: '#8B4513' }}>
                  Savitribai Phule Pune University (SPPU)
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mb-4"></div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-2">Program Highlights</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Comprehensive curriculum covering blockchain fundamentals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Hands-on experience with blockchain platforms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Industry-oriented projects and internships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Expert faculty with industry experience</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2">Key Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      Blockchain Fundamentals
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      Cryptography
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      Smart Contracts
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      Distributed Systems
                    </span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      Data Structures
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
                      <Download className="w-4 h-4 mr-2" />
                      Download SPPU Syllabus
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* DES PU Program */}
            <Card className="p-6">
              <div className="mb-4">
                <h3 className="mb-2" style={{ color: '#C41E3A' }}>
                  DES Pune University (DES PU)
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-teal-600 to-blue-500 rounded-full mb-4"></div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="mb-2">Program Highlights</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">•</span>
                      <span>Industry-aligned blockchain curriculum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">•</span>
                      <span>Practical training on emerging technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">•</span>
                      <span>Real-world project implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal-600 mt-1">•</span>
                      <span>Strong industry partnerships</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-2">Key Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                      Blockchain Architecture
                    </span>
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                      Cryptocurrency
                    </span>
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                      DApps Development
                    </span>
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                      Consensus Mechanisms
                    </span>
                    <span className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                      Web3 Technologies
                    </span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-gradient-to-r from-teal-600 to-blue-500 hover:from-teal-700 hover:to-blue-600">
                      <Download className="w-4 h-4 mr-2" />
                      Download DES PU Syllabus
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Additional Information */}
          <Card className="p-8 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-50">
            <h3 className="mb-4">Admission Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="mb-2">Eligibility Criteria</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>10+2 or equivalent with Mathematics/Computer Science</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Minimum 50% aggregate marks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Valid entrance exam score (as per university norms)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2">Career Opportunities</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Blockchain Developer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Smart Contract Engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Cryptocurrency Analyst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Blockchain Solutions Architect</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
