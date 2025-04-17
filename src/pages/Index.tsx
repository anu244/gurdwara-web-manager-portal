
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Users, DollarSign, Clock, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data
const upcomingEvents = [
  { id: 1, title: "Weekly Kirtan", date: "2025-04-20", time: "10:00 AM - 12:00 PM" },
  { id: 2, title: "Guru Nanak Birthday Celebration", date: "2025-04-25", time: "9:00 AM - 4:00 PM" },
  { id: 3, title: "Community Langar", date: "2025-04-22", time: "12:00 PM - 2:00 PM" },
];

const prayerSchedule = [
  { name: "Morning Prayer (Japji Sahib)", time: "5:00 AM - 6:30 AM" },
  { name: "Evening Prayer (Rehras Sahib)", time: "6:30 PM - 7:30 PM" },
  { name: "Night Prayer (Kirtan Sohila)", time: "9:00 PM - 9:30 PM" },
];

const services = [
  { 
    title: "Daily Prayer Services", 
    description: "Join us for daily prayers and spiritual practices.",
    icon: <Clock className="h-12 w-12 text-gurdwara-orange" />
  },
  { 
    title: "Community Events", 
    description: "Participate in our vibrant community events and celebrations.",
    icon: <Calendar className="h-12 w-12 text-gurdwara-orange" />
  },
  { 
    title: "Volunteer Opportunities", 
    description: "Serve the community through various volunteer programs.",
    icon: <Users className="h-12 w-12 text-gurdwara-orange" />
  },
  { 
    title: "Donations & Offerings", 
    description: "Support our initiatives through donations and offerings.",
    icon: <DollarSign className="h-12 w-12 text-gurdwara-orange" />
  },
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center" style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 animate-fade-in">
            Gurdwara Management System
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 animate-slide-up">
            Serving the community with spiritual guidance, humanitarian services, and cultural preservation
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button size="lg" className="bg-gurdwara-orange hover:bg-amber-600 text-white">
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gurdwara-blue">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-gurdwara-orange hover:text-amber-600 font-medium">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Schedule Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Events */}
            <div>
              <h2 className="section-title mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="card-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-gurdwara-blue">{event.title}</CardTitle>
                      <CardDescription>
                        <time className="font-medium">{formatDate(event.date)}</time>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="hover:bg-gurdwara-orange hover:text-white w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link to="/events">
                  <Button className="bg-gurdwara-blue hover:bg-gurdwara-lightBlue">
                    View All Events
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Schedule */}
            <div>
              <h2 className="section-title mb-6">Daily Prayer Schedule</h2>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 bg-gurdwara-blue text-white">
                  <h3 className="text-xl font-bold">Today's Schedule</h3>
                  <p className="text-gray-200">Join us in prayer and meditation</p>
                </div>
                <div className="divide-y divide-gray-200">
                  {prayerSchedule.map((prayer, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50">
                      <div className="font-medium">{prayer.name}</div>
                      <div className="text-gurdwara-orange">{prayer.time}</div>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-gray-50">
                  <Link to="/services">
                    <Button variant="outline" className="w-full hover:bg-gurdwara-orange hover:text-white">
                      View Full Schedule
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="mt-8 bg-gurdwara-cream rounded-lg p-6">
                <h3 className="text-xl font-bold text-gurdwara-blue mb-2">Community Langar</h3>
                <p className="text-gray-700 mb-4">Our community kitchen serves free meals to all visitors, regardless of background or belief.</p>
                <div className="flex items-center text-gray-700">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Served daily from 11:00 AM to 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gurdwara-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Join Our Community</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Become a part of our vibrant community and contribute to spiritual growth and humanitarian service.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/volunteers">
              <Button size="lg" className="bg-gurdwara-orange hover:bg-amber-600">
                Volunteer With Us
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Make a Donation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
