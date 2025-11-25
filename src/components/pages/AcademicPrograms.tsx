import { Card } from '../ui/card';
import { GraduationCap, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AcademicPrograms() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="mb-4">Academic Programs</h1>
          <p className="text-gray-600">
            Explore our comprehensive range of academic programs in partnership with SPPU and DES Pune University.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Program Categories */}
            <Link to="/academic-programs/undergraduate">
              <Card className="p-8 border-t-4 border-blue-600 hover:shadow-xl transition-shadow cursor-pointer h-full">
                <div className="bg-gradient-to-br from-blue-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h2 className="mb-4">Undergraduate Programs</h2>
                <p className="text-gray-600 mb-4">
                  Our undergraduate programs provide a strong foundation in various disciplines, preparing students for successful careers.
                </p>
              </Card>
            </Link>

            <Link to="/academic-programs/postgraduate">
              <Card className="p-8 border-t-4 border-teal-600 hover:shadow-xl transition-shadow cursor-pointer h-full">
                <div className="bg-gradient-to-br from-teal-600 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h2 className="mb-4">Postgraduate Programs</h2>
                <p className="text-gray-600 mb-4">
                  Advanced programs designed to deepen knowledge and expertise in specialized fields.
                </p>
              </Card>
            </Link>

            <Link to="/academic-programs/professional-courses">
              <Card className="p-8 border-t-4 border-blue-500 hover:shadow-xl transition-shadow cursor-pointer h-full">
                <div className="bg-gradient-to-br from-blue-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h2 className="mb-4">Professional Certification Programs</h2>
                <p className="text-gray-600 mb-4">
                  Industry-oriented programs that bridge the gap between academia and professional requirements.
                </p>
              </Card>
            </Link>

            {/* <Link to="/academic-programs/certificate-programs">
              <Card className="p-8 border-t-4 border-teal-500 hover:shadow-xl transition-shadow cursor-pointer h-full">
                <div className="bg-gradient-to-br from-teal-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h2 className="mb-4">Certificate Programs</h2>
                <p className="text-gray-600 mb-4">
                  Short-term specialized courses to enhance skills and knowledge in specific areas.
                </p>
              </Card>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}