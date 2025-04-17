
import { Clock, Users, Book, Heart, Music, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

// Mock data for prayer schedule
const prayerSchedule = [
  { day: "Monday - Friday", morning: "5:00 AM - 7:00 AM", evening: "6:30 PM - 8:00 PM" },
  { day: "Saturday", morning: "5:00 AM - 8:00 AM", evening: "6:00 PM - 8:30 PM" },
  { day: "Sunday", morning: "5:00 AM - 9:00 AM", evening: "5:30 PM - 8:00 PM" }
];

// Mock data for FAQs
const faqs = [
  {
    question: "What is Langar?",
    answer: "Langar is the community kitchen at a Gurdwara where vegetarian meals are served to all visitors, regardless of faith, religion, or background. It's a cornerstone of the Sikh faith that promotes equality and community service."
  },
  {
    question: "What should I wear when visiting?",
    answer: "Visitors should dress modestly and cover their heads as a sign of respect. Both men and women need to cover their heads. Scarves are available at the entrance for those who need them."
  },
  {
    question: "Can non-Sikhs visit the Gurdwara?",
    answer: "Absolutely! People of all faiths are welcome at the Gurdwara. We embrace visitors from all backgrounds who want to learn about Sikhism or participate in our community."
  },
  {
    question: "What is an Akhand Path?",
    answer: "An Akhand Path is a continuous reading of the Sri Guru Granth Sahib (the Sikh holy scripture) from beginning to end without a break, typically taking about 48 hours. It is performed for special occasions or commemorations."
  },
  {
    question: "How can I request a prayer service?",
    answer: "You can request special prayer services by contacting our office directly either in person, by phone, or through the contact form on our website. Please provide details about the type of service and preferred dates."
  },
  {
    question: "Are there classes for children?",
    answer: "Yes, we offer Punjabi language classes, religious education, and Kirtan (devotional music) classes for children and youth on weekends. Please contact us for the current schedule and registration information."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header Banner */}
      <div className="bg-gurdwara-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Services & Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our spiritual services, community programs, and educational offerings.
          </p>
        </div>
      </div>

      {/* Services Tabs Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="prayers" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="prayers" className="flex items-center">
                  <Book className="h-4 w-4 mr-2" /> Prayers
                </TabsTrigger>
                <TabsTrigger value="langar" className="flex items-center">
                  <Heart className="h-4 w-4 mr-2" /> Langar
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center">
                  <Info className="h-4 w-4 mr-2" /> Education
                </TabsTrigger>
                <TabsTrigger value="community" className="flex items-center">
                  <Users className="h-4 w-4 mr-2" /> Community
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Prayers Tab */}
            <TabsContent value="prayers">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <Card className="card-shadow h-full">
                    <CardHeader className="bg-gurdwara-blue text-white">
                      <CardTitle className="text-2xl">Daily Prayer Schedule</CardTitle>
                      <CardDescription className="text-gray-200">
                        Join us for daily prayers and meditation
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {prayerSchedule.map((item, index) => (
                          <div key={index} className="border-b pb-4 last:border-0">
                            <h3 className="font-bold text-gurdwara-blue mb-2">{item.day}</h3>
                            <div className="flex items-center mb-2">
                              <Clock className="h-4 w-4 mr-2 text-gurdwara-orange" />
                              <span>Morning: {item.morning}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gurdwara-orange" />
                              <span>Evening: {item.evening}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-2">
                  <Card className="card-shadow">
                    <CardHeader>
                      <CardTitle className="text-2xl">Prayer Services</CardTitle>
                      <CardDescription>Learn about our various prayer services</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gurdwara-blue mb-2">Daily Prayers</h3>
                        <p className="text-gray-600 mb-4">
                          We begin our day with the recitation of Japji Sahib, followed by other morning prayers. Evening prayers include Rehras Sahib and Kirtan Sohila.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gurdwara-blue mb-2">Kirtan (Devotional Music)</h3>
                        <p className="text-gray-600 mb-4">
                          Traditional devotional music is performed daily by our Raagis (musicians). Special Kirtan programs take place on weekends and holidays.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex items-center">
                                <Music className="h-5 w-5 mr-2 text-gurdwara-orange" />
                                <h4 className="font-medium">Weekend Kirtan</h4>
                              </div>
                              <p className="text-sm mt-2">Saturday & Sunday, 10:00 AM - 12:00 PM</p>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4">
                              <div className="flex items-center">
                                <Music className="h-5 w-5 mr-2 text-gurdwara-orange" />
                                <h4 className="font-medium">Evening Kirtan</h4>
                              </div>
                              <p className="text-sm mt-2">Wednesday & Friday, 7:00 PM - 8:00 PM</p>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gurdwara-blue mb-2">Akhand Path</h3>
                        <p className="text-gray-600 mb-4">
                          An Akhand Path is a continuous reading of the Sri Guru Granth Sahib that takes approximately 48 hours. We organize Akhand Path ceremonies for special occasions or upon request.
                        </p>
                        <Button className="bg-gurdwara-orange hover:bg-amber-600">
                          Request an Akhand Path
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Langar Tab */}
            <TabsContent value="langar">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <Card className="card-shadow h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                        alt="Langar Hall" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <h2 className="text-3xl font-bold text-white">Langar Service</h2>
                      </div>
                    </div>
                    <CardContent className="pt-6 space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-gurdwara-blue mb-2">About Langar</h3>
                        <p className="text-gray-600">
                          Langar is a community kitchen that serves free vegetarian meals to all visitors, regardless of faith, religion, or background. It's one of the core principles of Sikhism, emphasizing equality and community service.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gurdwara-blue mb-2">Langar Etiquette</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          <li>Everyone sits on the floor at the same level, symbolizing equality</li>
                          <li>Heads must be covered</li>
                          <li>Shoes must be removed</li>
                          <li>No tobacco, alcohol, or intoxicants allowed</li>
                          <li>Finish all the food on your plate to avoid waste</li>
                        </ul>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-gurdwara-orange hover:bg-amber-600">
                          Volunteer for Langar
                        </Button>
                        <Button variant="outline">
                          Donate for Langar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="lg:col-span-2">
                  <Card className="card-shadow h-full">
                    <CardHeader className="bg-gurdwara-blue text-white">
                      <CardTitle>Langar Schedule</CardTitle>
                      <CardDescription className="text-gray-200">
                        Open to everyone, every day
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="border-b pb-4">
                          <h3 className="font-bold text-gurdwara-blue mb-2">Weekdays</h3>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-gurdwara-orange" />
                            <span>11:00 AM - 2:00 PM</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <Clock className="h-4 w-4 mr-2 text-gurdwara-orange" />
                            <span>6:00 PM - 8:00 PM</span>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-gurdwara-blue mb-2">Weekends & Holidays</h3>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-gurdwara-orange" />
                            <span>10:00 AM - 3:00 PM</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <Clock className="h-4 w-4 mr-2 text-gurdwara-orange" />
                            <span>5:00 PM - 8:00 PM</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
                        <div className="flex items-start">
                          <Info className="h-5 w-5 mr-2 text-amber-600 flex-shrink-0 mt-0.5" />
                          <p className="text-amber-700">
                            Special extended hours may apply during festivals and special events. Please check our event calendar for specific dates.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">Religious Education</CardTitle>
                    <CardDescription>Learn about Sikhism and its teachings</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gurdwara-blue mb-2">Gurmat Classes</h3>
                      <p className="text-gray-600 mb-4">
                        We offer classes on Sikh philosophy, history, and principles for all age groups. The curriculum includes the study of Sikh scriptures, ethical teachings, and practical application of Sikh values.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <h4 className="font-medium">Children's Classes</h4>
                            <p className="text-sm mt-2">Sunday, 10:00 AM - 12:00 PM</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <h4 className="font-medium">Adult Learning</h4>
                            <p className="text-sm mt-2">Wednesday, 7:00 PM - 8:30 PM</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gurdwara-blue mb-2">Punjabi Language</h3>
                      <p className="text-gray-600 mb-4">
                        Learn to read, write, and speak Punjabi, the language of the Sikh scriptures. Classes are available for beginners to advanced learners of all ages.
                      </p>
                      <Button className="bg-gurdwara-orange hover:bg-amber-600">
                        Register for Classes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="text-2xl">Music & Cultural Training</CardTitle>
                    <CardDescription>Preserve and learn traditional arts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gurdwara-blue mb-2">Kirtan Classes</h3>
                      <p className="text-gray-600 mb-4">
                        Learn to sing hymns from the Sikh scriptures and play traditional instruments like the harmonium and tabla. Classes are available for beginners to advanced students.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <h4 className="font-medium">Beginner Kirtan</h4>
                            <p className="text-sm mt-2">Saturday, 11:00 AM - 12:30 PM</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardContent className="p-4">
                            <h4 className="font-medium">Advanced Training</h4>
                            <p className="text-sm mt-2">Saturday, 1:00 PM - 3:00 PM</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gurdwara-blue mb-2">Cultural Programs</h3>
                      <p className="text-gray-600 mb-4">
                        We offer various cultural programs to learn Punjabi folk dances like Bhangra and Giddha, as well as traditional crafts and cooking.
                      </p>
                      <Button className="bg-gurdwara-orange hover:bg-amber-600">
                        View Schedule
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Community Tab */}
            <TabsContent value="community">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="card-shadow lg:col-span-3">
                  <CardHeader>
                    <CardTitle className="text-2xl">Community Services</CardTitle>
                    <CardDescription>Serving the wider community with compassion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="bg-gurdwara-cream rounded-full p-6 inline-flex justify-center mb-4">
                          <Heart className="h-12 w-12 text-gurdwara-orange" />
                        </div>
                        <h3 className="text-xl font-bold text-gurdwara-blue mb-2">Charitable Works</h3>
                        <p className="text-gray-600">
                          We regularly organize food drives, clothing donations, and other charitable activities to support those in need.
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-gurdwara-cream rounded-full p-6 inline-flex justify-center mb-4">
                          <Users className="h-12 w-12 text-gurdwara-orange" />
                        </div>
                        <h3 className="text-xl font-bold text-gurdwara-blue mb-2">Senior Support</h3>
                        <p className="text-gray-600">
                          Special programs and services for elderly members of the community, including transportation assistance and companionship.
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="bg-gurdwara-cream rounded-full p-6 inline-flex justify-center mb-4">
                          <Book className="h-12 w-12 text-gurdwara-orange" />
                        </div>
                        <h3 className="text-xl font-bold text-gurdwara-blue mb-2">Counseling</h3>
                        <p className="text-gray-600">
                          Spiritual and personal counseling services for individuals and families facing challenges or seeking guidance.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-shadow lg:col-span-3">
                  <CardHeader>
                    <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gurdwara-blue hover:bg-gurdwara-lightBlue">
                      Contact Us With Questions
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Services;
