import { Link } from 'react-router-dom';
import { GraduationCap, Users, Briefcase, Calendar, ArrowRight, BookOpen, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import sppuLogo from '../../assets/sppu.png';
import desPuLogo from '../../assets/despu.png';

import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

export function Home() {
  return (
    <div>
      {/* <h1 className="mb-6 text-white">Official Industry Partner</h1> */}
      {/* <p className="mb-2 ml-2 text-black-50 text-m text-center">
        Gnyan Pragya is currently an the official industry partner for Savitribai Phule Pune University and DES Pune University
        <br/>bridging the gap between academic excellence and industry requirements.
      </p> */}

           {/* Official Industry Partner Section */}
      <section className="py-2 bg-gradient-to-br from-blue-50 via-teal-50 to-blue-50"   style={{ background: 'linear-gradient(to right, #f1f4faff, #dbe4f7ff,  #14b8a6)'}}>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-2 md:p-3 border border-blue-100">
          <p className="text-gray-800 leading-relaxed text-base md:text-lg text-center">
            <span style={{ color: '#089282ff', fontWeight: '500' }}>
              GNYAN PRAGYA
            </span>{" "} is the official industry partner for{" "}
            <span style={{ color: '#8B4513', fontWeight: '500' }}>
              Savitribai Phule Pune University
            </span>{" "}
            and{" "}
            <span style={{ color: '#C41E3A', fontWeight: '500' }}>
              DES Pune University
            </span>
            , bridging the gap between academic excellence
            and industry requirements.
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Content */}
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-3xl">
            <div className="flex gap-4 flex-wrap">
              <Link to="/academic-programs">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Explore Programs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/enquiry">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Image Collage */}
        <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 opacity-80">
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${img1})` }}
          />
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${img2})` }}
          />
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${img3})` }}
          />
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${img4})` }}
          />
        </div>
        <p></p>
      </section>

 

      {/* Quick Access Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/academic-programs" className="group">
              <Card className="p-6 hover:shadow-lg transition-all border-l-4 border-blue-600 h-full">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                    <GraduationCap className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="mb-1 group-hover:text-blue-600 transition-colors">Academic Programs</h3>
                    <p className="text-gray-600 text-sm">Comprehensive courses and degree programs</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/placements" className="group">
              <Card className="p-6 hover:shadow-lg transition-all border-l-4 border-teal-600 h-full">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-600 transition-colors">
                    <Briefcase className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="mb-1 group-hover:text-teal-600 transition-colors">Placements</h3>
                    <p className="text-gray-600 text-sm">Career opportunities and industry connections</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/faculty" className="group">
              <Card className="p-6 hover:shadow-lg transition-all border-l-4 border-blue-500 h-full">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-500 transition-colors">
                    <Users className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="mb-1 group-hover:text-blue-500 transition-colors">Our Team</h3>
                    <p className="text-gray-600 text-sm">Experienced educators and industry experts</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/events" className="group">
              <Card className="p-6 hover:shadow-lg transition-all border-l-4 border-teal-500 h-full">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-500 transition-colors">
                    <Calendar className="w-6 h-6 text-teal-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="mb-1 group-hover:text-teal-500 transition-colors">Events</h3>
                    <p className="text-gray-600 text-sm">Workshops, seminars, and activities</p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <Card className="p-8">
                <h2 className="mb-4">Bridging Academia and Industry</h2>
                <p className="text-gray-700 mb-4">
                  Gnyan Pragya is dedicated to creating seamless connections between academic institutions and industry requirements. As the official industry partner for prestigious universities, we ensure that education meets the evolving needs of the professional world.
                </p>
                <p className="text-gray-700 mb-6">
                  Our programs are designed to equip students with both theoretical knowledge and practical skills, preparing them for successful careers in their chosen fields.
                </p>
                <Link to="/academic-programs">
                  <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
                    Learn More About Our Programs
                  </Button>
                </Link>
              </Card>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="bg-gradient-to-br from-blue-600 to-teal-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2">Industry-Aligned Curriculum</h3>
                  <p className="text-gray-600">
                    Programs designed in consultation with industry experts to meet current market demands.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="bg-gradient-to-br from-teal-600 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mb-2">Quality Education</h3>
                  <p className="text-gray-600">
                    Committed to maintaining the highest standards of academic excellence and learning outcomes.
                  </p>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Partner Universities */}
              <Card className="p-6">
                <h3 className="mb-4">Partner Universities</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <img src={sppuLogo} alt="SPPU" className="h-12 w-auto" />
                    <div>
                      <p className="text-sm">Savitribai Phule Pune University</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <img src={desPuLogo} alt="DES PU" className="h-12 w-auto" />
                    <div>
                      <p className="text-sm">DES Pune University</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Links */}
              <Card className="p-6">
                <h3 className="mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <Link to="/enquiry" className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Make an Enquiry</span>
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </div>
                  </Link>
                  <Link to="/careers" className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Career Opportunities</span>
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </div>
                  </Link>
                  <Link to="/placements" className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Placement Cell</span>
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                    </div>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}