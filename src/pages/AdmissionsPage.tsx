import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { SectionLabel } from '@/components/SectionLabel';
import { Card } from '@/components/ui/card';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { AlertCircle } from 'lucide-react';

export const AdmissionsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentSchool: '',
    gradeLevel: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      currentSchool: '',
      gradeLevel: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Admissions"
        description="Join G.S. Apagie/Musha — a centre of excellence in Rwamagana"
      />

      <section className="py-12 px-4 bg-amber-50 border-b border-amber-200">
        <div className="max-w-5xl mx-auto flex gap-3 items-start">
          <AlertCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <p className="font-semibold text-amber-900 mb-1">How to Apply</p>
            <p className="text-amber-800 text-sm leading-relaxed">
              Visit G.S. Apagie/Musha in person to obtain your admission form. All applicants must collect the <strong>G.S. Apagie/Musha Application Form</strong> from the Admissions Office at the school in Musha Sector, Rwamagana District.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Entry Requirements" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            Admission Criteria by Grade Level
          </h2>

          <div className="space-y-8">
            {[
              {
                level: 'O-Level Entry (S1) — Age ~13',
                requirements: [
                  'Completion of Primary 6 (P6)',
                  'Strong performance in Mathematics, English, and Science',
                  'Meeting national placement criteria via REB/NESA',
                  'Ability to follow school rules and positive values',
                ],
              },
              {
                level: 'A-Level Entry (S4) — Age ~16',
                requirements: [
                  'Completion of O-Level (S1–S3)',
                  'Pass in core subjects and national O-Level examinations (NESA)',
                  'Selection of pathway: Sciences, MEG, or Arts & Humanities',
                  'Meeting minimum grades set for chosen A-Level stream',
                ],
              },
              {
                level: 'Transfer Students',
                requirements: [
                  'Official transfer request from previous school',
                  'Transcript and academic record review',
                  'Confirmation of space availability in target class',
                  'Interview with admissions office',
                ],
              },
            ].map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <Card className="p-8 border-l-4 border-l-accent border border-border bg-muted">
                  <h3 className="serif-heading text-2xl font-bold mb-6">{item.level}</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.requirements.map((req, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-accent font-bold flex-shrink-0">✓</span>
                        <span className="text-foreground">{req}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Application Process" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            How to Apply
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Visit the School',
                description: 'Come to G.S. Apagie/Musha in Musha Sector, Rwamagana to enquire about admission',
              },
              {
                step: 2,
                title: 'Collect Form',
                description: 'Pick up the official G.S. Apagie/Musha Application Form from the Admissions Office',
              },
              {
                step: 3,
                title: 'Complete & Submit',
                description: 'Fill in the application form with all required documents and submit to the admissions office',
              },
              {
                step: 4,
                title: 'Await Confirmation',
                description: 'The admissions team will review your application and contact you with next steps',
              },
            ].map((item) => (
              <ScrollFadeIn key={item.step} delay={item.step * 100}>
                <Card className="p-6 border border-border bg-background text-center">
                  <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-4 serif-heading text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="serif-heading text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Tuition & Fees" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-6">
            Fee Structure
          </h2>

          <ScrollFadeIn>
            <Card className="p-10 border border-border bg-muted text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="text-accent" size={28} />
              </div>
              <h3 className="serif-heading text-2xl font-bold mb-3">Fee Information Not Yet Available</h3>
              <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                The official fee structure for G.S. Apagie/Musha is currently unavailable. Our team is working to obtain this information. Please visit the school's Admissions Office directly or contact us for the most up-to-date fee details.
              </p>
            </Card>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Documents Required" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            What to Bring When You Apply
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Completed G.S. Apagie/Musha Application Form (from admissions office)',
              'Copy of birth certificate',
              'Previous school academic transcripts / report cards',
              'National examination results (for S4/A-Level entry)',
              'Transfer letter from previous school (for transfers)',
              'Passport-sized photos (as specified by admissions office)',
            ].map((doc, i) => (
              <ScrollFadeIn key={i} delay={i * 50}>
                <div className="flex gap-3 items-start p-4 bg-background border border-border rounded-lg">
                  <span className="text-accent font-bold flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-foreground text-sm leading-relaxed">{doc}</span>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-3xl mx-auto">
          <SectionLabel label="Send an Enquiry" className="justify-center" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-4 text-center">
            Have Questions?
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Send us a message and our admissions team will get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <ScrollFadeIn delay={0}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="h-12 border-border bg-muted"
                />
                <Input
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="h-12 border-border bg-muted"
                />
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={50}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 border-border bg-muted"
                />
                <Input
                  placeholder="Phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 border-border bg-muted"
                />
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={100}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Current School"
                  name="currentSchool"
                  value={formData.currentSchool}
                  onChange={handleChange}
                  className="h-12 border-border bg-muted"
                />
                <select
                  name="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={handleChange}
                  className="h-12 px-4 border border-border rounded-md bg-muted text-foreground"
                >
                  <option value="">Select Level</option>
                  <option value="s1">O-Level Entry (S1)</option>
                  <option value="s4">A-Level Entry (S4)</option>
                  <option value="transfer">Transfer Student</option>
                </select>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn delay={150}>
              <Textarea
                placeholder="Your question or message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="border-border bg-muted"
              />
            </ScrollFadeIn>

            <ScrollFadeIn delay={200} className="flex justify-center">
              <Button
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 text-base"
              >
                Send Enquiry
              </Button>
            </ScrollFadeIn>
          </form>
        </div>
      </section>
    </div>
  );
};
