import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Briefcase, Users, Target } from 'lucide-react';

export function Careers() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="mb-4">Careers</h1>
          <p className="text-gray-600">
            Join our team and be part of shaping the future of education. Explore career opportunities at Gnyan Pragya.
          </p>
        </div>

        {/* Why Join Us Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-center mb-8">Why Join Gnyan Pragya?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Collaborative Environment</h3>
              <p className="text-gray-600">
                Work with dedicated professionals committed to educational excellence.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-gradient-to-br from-teal-600 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                Continuous learning and professional development programs.
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="bg-gradient-to-br from-blue-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Meaningful Impact</h3>
              <p className="text-gray-600">
                Contribute to shaping the future of students and education.
              </p>
            </Card>
          </div>
        </div>

        {/* Career Opportunities */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Current Openings</h2>
          <Card className="p-8 text-center">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-6">
              Career opportunities will be posted here. Check back regularly for updates.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
              Submit Your Resume
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
