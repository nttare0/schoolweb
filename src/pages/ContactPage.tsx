import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { SectionLabel } from '@/components/SectionLabel';
import { Card } from '@/components/ui/card';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Clock, Globe, Hash, Building2 } from 'lucide-react';
import { toast } from 'sonner';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message. We will respond shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Contact Us"
        description="Get in touch with G.S. Apagie/Musha"
      />

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionLabel label="School Information" />
              <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
                Find Us
              </h2>

              <div className="space-y-8">
                <ScrollFadeIn>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Building2 className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="serif-heading text-lg font-bold mb-2">School Name</h3>
                      <p className="text-foreground font-medium">G.S. Apagie/Musha</p>
                      <p className="text-muted-foreground text-sm">Groupe Scolaire Apagie Musha</p>
                    </div>
                  </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={50}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Hash className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="serif-heading text-lg font-bold mb-2">School Code</h3>
                      <p className="text-muted-foreground">0501030</p>
                    </div>
                  </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={100}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="serif-heading text-lg font-bold mb-2">Location</h3>
                      <p className="text-muted-foreground">Musha Sector</p>
                      <p className="text-muted-foreground">Rwamagana District</p>
                      <p className="text-muted-foreground">Eastern Province, Rwanda</p>
                      <p className="text-muted-foreground text-sm mt-1 italic">On the Kigali–Rwamagana highway, ~1 hour from Kigali</p>
                    </div>
                  </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={150}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Mail className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="serif-heading text-lg font-bold mb-2">Email</h3>
                      <p className="text-muted-foreground">info@gsapagiemusha.rw</p>
                    </div>
                  </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={200}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Globe className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="serif-heading text-lg font-bold mb-2">Online Presence</h3>
                      <a
                        href="https://apagiemusha.wordpress.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline block"
                      >
                        apagiemusha.wordpress.com
                      </a>
                      <a
                        href="https://www.facebook.com/apagiemusha/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline block"
                      >
                        facebook.com/apagiemusha
                      </a>
                    </div>
                  </div>
                </ScrollFadeIn>

                <ScrollFadeIn delay={250}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="serif-heading text-lg font-bold mb-2">Office Hours</h3>
                      <p className="text-muted-foreground">Monday – Friday: 8:00 AM – 5:00 PM</p>
                      <p className="text-muted-foreground">Saturday: 9:00 AM – 2:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Closed</p>
                    </div>
                  </div>
                </ScrollFadeIn>
              </div>
            </div>

            <div>
              <SectionLabel label="Send Us a Message" />
              <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
                We're Here to Help
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <ScrollFadeIn delay={0}>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 border-border bg-muted"
                  />
                </ScrollFadeIn>

                <ScrollFadeIn delay={50}>
                  <Input
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 border-border bg-muted"
                  />
                </ScrollFadeIn>

                <ScrollFadeIn delay={100}>
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-12 border-border bg-muted"
                  />
                </ScrollFadeIn>

                <ScrollFadeIn delay={150}>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="border-border bg-muted"
                  />
                </ScrollFadeIn>

                <ScrollFadeIn delay={200}>
                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base"
                  >
                    Send Message
                  </Button>
                </ScrollFadeIn>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="Key Offices" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            Get Help From the Right Office
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Admissions Office',
                detail: 'For application forms, enrollment, and admission enquiries. Visit us in person to collect your application form.',
                note: 'Visit school directly',
              },
              {
                title: 'Academic Affairs',
                detail: 'For curriculum information, CBC subjects, A-Level pathway selection, and academic support.',
                note: 'Aligned with REB CBC',
              },
              {
                title: 'Student Services',
                detail: 'For boarding arrangements, student welfare, extracurricular activities, and general student life enquiries.',
                note: 'Boarding school support',
              },
            ].map((dept, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <Card className="p-6 border border-border bg-background">
                  <h3 className="serif-heading text-xl font-bold mb-4">{dept.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{dept.detail}</p>
                  <span className="inline-block text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">{dept.note}</span>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="FAQ" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                question: 'Where is G.S. Apagie/Musha located?',
                answer:
                  'G.S. Apagie/Musha is located in Musha Sector, Rwamagana District, Eastern Province, Rwanda — on the Kigali–Rwamagana highway, approximately one hour\'s drive from Kigali, on the beautiful hill of Musha with a view of the Muhazi plains.',
              },
              {
                question: 'What is the school code for G.S. Apagie/Musha?',
                answer:
                  'The official school code is 0501030. The school is registered with MINEDUC and NESA as a boarding secondary school in Rwamagana District.',
              },
              {
                question: 'What curriculum does G.S. Apagie/Musha follow?',
                answer:
                  'The school follows Rwanda\'s Competence-Based Curriculum (CBC) as designed by the Rwanda Basic Education Board (REB). This shifts from knowledge-based to skill-based learning, focusing on critical thinking, problem-solving, and employability.',
              },
              {
                question: 'How do I apply to G.S. Apagie/Musha?',
                answer:
                  'Visit the school in person to collect the G.S. Apagie/Musha Application Form from the Admissions Office. There is no online application — all applicants must visit the school directly.',
              },
              {
                question: 'What A-Level subjects are offered?',
                answer:
                  'G.S. Apagie/Musha offers: Stream 1 (Mathematics, Physics, Chemistry, Biology), Stream 2 (Mathematics, Economics, Geography, Physics), and Arts & Humanities (History, Geography, Literature in English, Psychology). All streams include compulsory ICT, Entrepreneurship, General Studies, and PE.',
              },
              {
                question: 'What are the school fees?',
                answer:
                  'The fee structure for G.S. Apagie/Musha is currently not publicly available. Please visit the school\'s Admissions Office directly for up-to-date information on fees and payment arrangements.',
              },
            ].map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 50}>
                <Card className="p-6 border border-border bg-muted hover:shadow-lg transition-shadow">
                  <h3 className="serif-heading font-bold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.answer}</p>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-background/80 mb-8 leading-relaxed">
            Visit G.S. Apagie/Musha directly in Musha Sector, Rwamagana. Our team is ready to answer all your questions in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apagiemusha.wordpress.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 text-base">
                Visit School Blog
              </Button>
            </a>
            <a href="https://www.facebook.com/apagiemusha/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="h-12 px-8 text-base border-background/30 text-background hover:bg-background/10">
                Find Us on Facebook
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
