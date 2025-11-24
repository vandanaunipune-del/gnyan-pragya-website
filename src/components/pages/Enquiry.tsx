import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Card } from '../ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Enquiry() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="mb-4">Enquiry</h1>
          <p className="text-gray-600">
            Have questions? We're here to help. Fill out the form below and our team will get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">Email</h3>
                  <p className="text-gray-600">Contact us via email</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">Phone</h3>
                  <p className="text-gray-600">Call us for inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-600 to-teal-500 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1">Location</h3>
                  <p className="text-gray-600">Pune, Maharashtra</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is your inquiry about?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry"
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600"
                >
                  Submit Enquiry
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
