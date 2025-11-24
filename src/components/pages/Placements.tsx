import { Card } from '../ui/card';
import { Briefcase, TrendingUp, Users, Building } from 'lucide-react';

export function Placements() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="mb-4">Placements</h1>
          <p className="text-gray-600">
            Our placement cell works closely with industry partners to provide excellent career opportunities for our students.
          </p>
        </div>

        {/* Placement Highlights */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center border-t-4 border-blue-600">
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Industry Partners</h3>
              <p className="text-gray-600">
                Strong connections with leading companies.
              </p>
            </Card>

            <Card className="p-6 text-center border-t-4 border-teal-600">
              <div className="bg-gradient-to-br from-teal-600 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Career Support</h3>
              <p className="text-gray-600">
                Comprehensive career guidance and counseling.
              </p>
            </Card>

            <Card className="p-6 text-center border-t-4 border-blue-500">
              <div className="bg-gradient-to-br from-blue-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Skill Development</h3>
              <p className="text-gray-600">
                Training programs to enhance employability.
              </p>
            </Card>

            <Card className="p-6 text-center border-t-4 border-teal-500">
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Alumni Network</h3>
              <p className="text-gray-600">
                Strong alumni connections for mentorship.
              </p>
            </Card>
          </div>
        </div>

        {/* Placement Process */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-center mb-8">Placement Process</h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white">
                  1
                </div>
                <div>
                  <h3 className="mb-2">Pre-Placement Training</h3>
                  <p className="text-gray-600">
                    Comprehensive training in technical skills, soft skills, and interview preparation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white">
                  2
                </div>
                <div>
                  <h3 className="mb-2">Company Engagement</h3>
                  <p className="text-gray-600">
                    Regular campus recruitment drives and industry interactions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white">
                  3
                </div>
                <div>
                  <h3 className="mb-2">Interview Process</h3>
                  <p className="text-gray-600">
                    Support throughout the selection process including aptitude tests and interviews.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white">
                  4
                </div>
                <div>
                  <h3 className="mb-2">Post-Placement Support</h3>
                  <p className="text-gray-600">
                    Continued guidance during the transition to professional life.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Placement Statistics */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Placement Records</h2>
          <Card className="p-8 text-center">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              Detailed placement statistics and company information will be available here.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
