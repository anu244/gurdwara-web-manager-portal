
import { useState } from "react";
import { DollarSign, CreditCard, Heart, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Mock donation uses
const donationUses = [
  {
    title: "Langar Services",
    description: "Support our community kitchen that serves free meals to all visitors.",
    icon: <Heart className="h-8 w-8 text-gurdwara-orange" />
  },
  {
    title: "Building Maintenance",
    description: "Help us maintain and improve our facilities for the community.",
    icon: <Heart className="h-8 w-8 text-gurdwara-orange" />
  },
  {
    title: "Educational Programs",
    description: "Fund our religious education and cultural programs for all ages.",
    icon: <Heart className="h-8 w-8 text-gurdwara-orange" />
  },
  {
    title: "Charitable Initiatives",
    description: "Support our outreach and assistance programs for those in need.",
    icon: <Heart className="h-8 w-8 text-gurdwara-orange" />
  }
];

const Donate = () => {
  const [amount, setAmount] = useState<string>("50");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<string>("one-time");

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount || amount;
    toast.success(`Thank you for your ${donationType} donation of $${finalAmount}!`);
    console.log({
      amount: finalAmount,
      type: donationType
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header Banner */}
      <div className="bg-gurdwara-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Support Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your generous donations help us maintain our services, support the community, and preserve our traditions.
          </p>
        </div>
      </div>

      {/* Donation Info Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Why Your Support Matters</h2>
            <p className="text-gray-600 mb-8">
              As a religious institution, we rely on the support of our community to continue our services and programs. 
              Your donations enable us to maintain our facilities, provide community services, and support those in need.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {donationUses.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="flex justify-center mb-4">
                  <div className="bg-gurdwara-cream rounded-full p-3">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gurdwara-blue">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-8">Make a Donation</h2>
            
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Choose Your Donation</CardTitle>
                <CardDescription className="text-center">
                  All donations are tax-deductible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="one-time" className="w-full" onValueChange={setDonationType}>
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="one-time">One-time Donation</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly Donation</TabsTrigger>
                  </TabsList>
                  <TabsContent value="one-time" className="space-y-4">
                    <form onSubmit={handleDonationSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label>Select Amount</Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {["25", "50", "100", "250"].map((value) => (
                            <Button
                              key={value}
                              type="button"
                              variant={amount === value && !customAmount ? "default" : "outline"}
                              className={`${
                                amount === value && !customAmount 
                                  ? "bg-gurdwara-orange hover:bg-amber-600" 
                                  : "hover:bg-gurdwara-orange/10"
                              }`}
                              onClick={() => {
                                setAmount(value);
                                setCustomAmount("");
                              }}
                            >
                              ${value}
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="custom-amount">Custom Amount</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="custom-amount"
                            placeholder="Enter amount"
                            className="pl-10"
                            value={customAmount}
                            onChange={(e) => {
                              const value = e.target.value.replace(/[^0-9.]/g, '');
                              setCustomAmount(value);
                              if (value) {
                                setAmount("");
                              }
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <Label>Payment Method</Label>
                        <RadioGroup defaultValue="card" className="space-y-3">
                          <div className="flex items-center space-x-2 border rounded-lg p-3">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex items-center">
                              <CreditCard className="h-5 w-5 mr-2 text-gray-500" />
                              Credit/Debit Card
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2 border rounded-lg p-3">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal">PayPal</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gurdwara-orange hover:bg-amber-600 text-lg py-6"
                      >
                        Donate ${customAmount || amount}
                      </Button>
                    </form>
                  </TabsContent>
                  
                  <TabsContent value="monthly" className="space-y-4">
                    <form onSubmit={handleDonationSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label>Select Monthly Amount</Label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {["10", "20", "50", "100"].map((value) => (
                            <Button
                              key={value}
                              type="button"
                              variant={amount === value && !customAmount ? "default" : "outline"}
                              className={`${
                                amount === value && !customAmount 
                                  ? "bg-gurdwara-orange hover:bg-amber-600" 
                                  : "hover:bg-gurdwara-orange/10"
                              }`}
                              onClick={() => {
                                setAmount(value);
                                setCustomAmount("");
                              }}
                            >
                              ${value}/mo
                            </Button>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="custom-amount-monthly">Custom Monthly Amount</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <Input
                            id="custom-amount-monthly"
                            placeholder="Enter amount"
                            className="pl-10"
                            value={customAmount}
                            onChange={(e) => {
                              const value = e.target.value.replace(/[^0-9.]/g, '');
                              setCustomAmount(value);
                              if (value) {
                                setAmount("");
                              }
                            }}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <Label>Payment Method</Label>
                        <RadioGroup defaultValue="card" className="space-y-3">
                          <div className="flex items-center space-x-2 border rounded-lg p-3">
                            <RadioGroupItem value="card" id="card-monthly" />
                            <Label htmlFor="card-monthly" className="flex items-center">
                              <CreditCard className="h-5 w-5 mr-2 text-gray-500" />
                              Credit/Debit Card
                            </Label>
                          </div>
                          
                          <div className="flex items-center space-x-2 border rounded-lg p-3">
                            <RadioGroupItem value="paypal" id="paypal-monthly" />
                            <Label htmlFor="paypal-monthly">PayPal</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gurdwara-orange hover:bg-amber-600 text-lg py-6"
                      >
                        Donate ${customAmount || amount}/month
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2 items-start text-gray-600 text-sm">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <p>Your donation is secure and encrypted</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <p>You will receive a receipt for tax purposes</p>
                </div>
              </CardFooter>
            </Card>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gurdwara-blue mb-4">Other Ways to Donate</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">By Mail</h4>
                  <p className="text-gray-600">
                    Send checks payable to "Gurdwara Management System" to:<br />
                    123 Sikh Temple Road, City, State 12345
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold">In Person</h4>
                  <p className="text-gray-600">
                    Donations can be made in person during regular service hours or at the office.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold">Planned Giving</h4>
                  <p className="text-gray-600">
                    For information about including our gurdwara in your will or estate plans, please contact our office.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
