
import { useState } from "react";
import { Users, UserPlus, Check, ChevronRight, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

// Mock volunteer opportunities
const volunteerOpportunities = [
  {
    id: 1,
    title: "Langar Service",
    description: "Help prepare and serve meals in our community kitchen.",
    commitment: "Flexible, 2-4 hours per shift",
    icon: <Clock className="h-8 w-8 text-gurdwara-orange" />
  },
  {
    id: 2,
    title: "Event Coordination",
    description: "Assist in organizing and managing community events and celebrations.",
    commitment: "Event-based, varies",
    icon: <Users className="h-8 w-8 text-gurdwara-orange" />
  },
  {
    id: 3,
    title: "Teaching Assistant",
    description: "Support Punjabi language classes and religious education for children.",
    commitment: "Weekly, 2 hours per session",
    icon: <Users className="h-8 w-8 text-gurdwara-orange" />
  },
  {
    id: 4,
    title: "Maintenance & Cleaning",
    description: "Help maintain the cleanliness and upkeep of the gurdwara premises.",
    commitment: "Weekly or monthly, 2-3 hours",
    icon: <Clock className="h-8 w-8 text-gurdwara-orange" />
  },
  {
    id: 5,
    title: "Administrative Support",
    description: "Assist with office work, record-keeping, and communications.",
    commitment: "Flexible, 3-5 hours per week",
    icon: <Users className="h-8 w-8 text-gurdwara-orange" />
  },
  {
    id: 6,
    title: "Outreach & Community Relations",
    description: "Help with community outreach, social media, and relationship building.",
    commitment: "Flexible, project-based",
    icon: <Users className="h-8 w-8 text-gurdwara-orange" />
  }
];

const Volunteers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interests: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you for volunteering! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      interests: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header Banner */}
      <div className="bg-gurdwara-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Volunteer With Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our team of dedicated volunteers and help make a difference in our community.
          </p>
        </div>
      </div>

      {/* Why Volunteer Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Why Volunteer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-gurdwara-cream rounded-full p-3">
                  <UserPlus className="h-8 w-8 text-gurdwara-orange" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gurdwara-blue">Community Connection</h3>
              <p className="text-gray-600">
                Build meaningful relationships and strengthen your ties to the community.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-gurdwara-cream rounded-full p-3">
                  <Check className="h-8 w-8 text-gurdwara-orange" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gurdwara-blue">Personal Growth</h3>
              <p className="text-gray-600">
                Develop new skills, gain experience, and grow spiritually through service.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="bg-gurdwara-cream rounded-full p-3">
                  <Users className="h-8 w-8 text-gurdwara-orange" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gurdwara-blue">Make an Impact</h3>
              <p className="text-gray-600">
                Contribute directly to programs that benefit many people in need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {volunteerOpportunities.map((opportunity) => (
              <Card key={opportunity.id} className="card-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="bg-gurdwara-cream rounded-full p-3">
                      {opportunity.icon}
                    </div>
                    <CardTitle className="text-xl text-gurdwara-blue">{opportunity.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{opportunity.commitment}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gurdwara-orange hover:bg-amber-600 group flex items-center justify-center">
                    <span>Sign Up</span>
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Registration */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center">Join Our Volunteer Team</h2>
            <p className="text-center text-gray-600 mb-8">
              Fill out the form below to express your interest in volunteering with us. We'll contact you with more information.
            </p>
            
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Volunteer Registration</CardTitle>
                <CardDescription className="text-center">
                  Share your information and interests with us
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="interests">Areas of Interest</Label>
                    <Input
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      placeholder="What volunteer opportunities are you interested in?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your availability, skills, or any questions you have"
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gurdwara-blue hover:bg-gurdwara-lightBlue">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteers;
