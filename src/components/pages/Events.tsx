import { Card } from '../ui/card';
import { Calendar, Users, Award, BookOpen } from 'lucide-react';

export function Events() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="mb-4">Events</h1>
          <p className="text-gray-600">
            Stay updated with our latest events, workshops, seminars, and academic activities.
          </p>
        </div>

        {/* Event Categories */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-center mb-8">Event Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center border-t-4 border-blue-600 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-600 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Workshops</h3>
              <p className="text-gray-600">
                Hands-on learning experiences
              </p>
            </Card>

            <Card className="p-6 text-center border-t-4 border-teal-600 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-teal-600 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Seminars</h3>
              <p className="text-gray-600">
                Expert talks and presentations
              </p>
            </Card>

            <Card className="p-6 text-center border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Conferences</h3>
              <p className="text-gray-600">
                Academic conferences and symposiums
              </p>
            </Card>

            <Card className="p-6 text-center border-t-4 border-teal-500 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-teal-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Cultural Events</h3>
              <p className="text-gray-600">
                Festivals and celebrations
              </p>
            </Card>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-center mb-8">Upcoming Events</h2>
          <Card className="p-8 text-center">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">
              Event details will be posted here. Check back regularly for updates on upcoming workshops, seminars, and activities.
            </p>
          </Card>
        </div>

        {/* Past Events */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Past Events</h2>
          <Card className="p-8 text-center">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">
              Information about previously conducted events and their outcomes will be available here.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
