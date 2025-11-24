import { Card } from '../ui/card';
import { Users, Award, BookOpen } from 'lucide-react';

export function Faculty() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="mb-4">Faculty</h1>
          <p className="text-gray-600">
            Our faculty comprises experienced professionals and academics dedicated to excellence in education.
          </p>
        </div>

        {/* Faculty Highlights */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-t-4 border-blue-600">
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Highly Qualified</h3>
              <p className="text-gray-600">
                Faculty members with advanced degrees and industry experience.
              </p>
            </Card>

            <Card className="p-6 text-center border-t-4 border-teal-600">
              <div className="bg-gradient-to-br from-teal-600 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Research Focused</h3>
              <p className="text-gray-600">
                Engaged in cutting-edge research and academic publications.
              </p>
            </Card>

            <Card className="p-6 text-center border-t-4 border-blue-500">
              <div className="bg-gradient-to-br from-blue-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Student Centered</h3>
              <p className="text-gray-600">
                Committed to mentoring and guiding students towards success.
              </p>
            </Card>
          </div>
        </div>

        {/* Faculty Directory */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Faculty Directory</h2>
          <Card className="p-8 text-center">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              Faculty profiles will be available here. Our team of educators brings expertise from diverse academic and professional backgrounds.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
