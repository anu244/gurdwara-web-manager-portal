
import { useState } from "react";
import { Calendar, Clock, MapPin, Search, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for events
const events = [
  {
    id: 1, 
    title: "Weekly Kirtan",
    date: "2025-04-20",
    time: "10:00 AM - 12:00 PM",
    location: "Main Hall",
    description: "Join us for our weekly Kirtan session where we sing hymns and spiritual songs.",
    category: "worship"
  },
  {
    id: 2,
    title: "Guru Nanak Birthday Celebration",
    date: "2025-04-25",
    time: "9:00 AM - 4:00 PM",
    location: "Temple Grounds",
    description: "A full day celebration of Guru Nanak's birth with prayers, processions, and communal meals.",
    category: "celebration"
  },
  {
    id: 3,
    title: "Community Langar",
    date: "2025-04-22",
    time: "12:00 PM - 2:00 PM",
    location: "Dining Hall",
    description: "Our weekly community meal where everyone is welcome to eat together.",
    category: "community"
  },
  {
    id: 4,
    title: "Youth Leadership Workshop",
    date: "2025-04-28",
    time: "3:00 PM - 5:00 PM",
    location: "Conference Room",
    description: "A workshop designed to develop leadership skills among the youth of our community.",
    category: "education"
  },
  {
    id: 5,
    title: "Sikh History Seminar",
    date: "2025-05-05",
    time: "6:00 PM - 8:00 PM",
    location: "Lecture Hall",
    description: "Learn about the rich history and traditions of Sikhism from our knowledgeable speakers.",
    category: "education"
  },
  {
    id: 6,
    title: "Charity Drive",
    date: "2025-05-10",
    time: "11:00 AM - 3:00 PM",
    location: "Community Center",
    description: "Join us in collecting donations for families in need within our community.",
    category: "community"
  }
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

type EventCategory = "all" | "worship" | "celebration" | "community" | "education";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<EventCategory>("all");

  // Filter events based on search and category
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeTab === "all" || event.category === activeTab;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header Banner */}
      <div className="bg-gurdwara-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Events & Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us for our regular worship services, special celebrations, and community events.
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center">
              <Filter className="h-5 w-5 mr-2 text-gray-500" />
              <span className="hidden md:inline text-gray-500 mr-2">Filter:</span>
            </div>
            <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={(value) => setActiveTab(value as EventCategory)}>
              <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full md:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="worship">Worship</TabsTrigger>
                <TabsTrigger value="celebration">Celebrations</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Events List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="card-shadow overflow-hidden">
                  <div className={`h-2 ${
                    event.category === 'worship' ? 'bg-amber-500' : 
                    event.category === 'celebration' ? 'bg-purple-500' :
                    event.category === 'community' ? 'bg-green-500' : 'bg-blue-500'
                  }`}></div>
                  <CardHeader>
                    <CardTitle className="text-xl text-gurdwara-blue">{event.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{formatDate(event.date)}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600">{event.description}</p>
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gurdwara-orange hover:bg-amber-600">Register</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No Events Found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              <Button 
                className="mt-4 bg-gurdwara-blue hover:bg-gurdwara-lightBlue"
                onClick={() => {
                  setSearchTerm("");
                  setActiveTab("all");
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
