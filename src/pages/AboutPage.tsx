import { PageHeader } from '@/components/PageHeader';
import { SectionLabel } from '@/components/SectionLabel';
import { Card } from '@/components/ui/card';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';
import { Target, Lightbulb, Heart, MapPin, Hash, Building2 } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="About G.S. Apagie/Musha"
        description="A centre of excellence in Rwamagana District, Eastern Province, Rwanda"
      />

      <section className="py-12 px-4 bg-accent/5 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Building2, label: 'School Name', value: 'G.S. Apagie/Musha' },
              { icon: Hash, label: 'School Code', value: '0501030' },
              { icon: MapPin, label: 'Location', value: 'Musha Sector, Rwamagana District, Eastern Province' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-accent" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-0.5">{item.label}</p>
                  <p className="font-semibold text-foreground text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Our Story" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-8">
            About G.S. Apagie/Musha
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
            <ScrollFadeIn>
              <p>
                G.S. Apagie/Musha (Groupe Scolaire Apagie Musha) is a registered boarding secondary school located in <strong>Musha Sector, Rwamagana District, Eastern Province, Rwanda</strong>. The school sits on the beautiful hill of Musha, along the Kigali–Rwamagana highway, with a scenic view of the Muhazi plains.
              </p>
            </ScrollFadeIn>
            <ScrollFadeIn delay={100}>
              <p>
                G.S. Apagie/Musha is registered with the Ministry of Education (MINEDUC) and the National Examination and School Inspection Authority (NESA) to provide educational services in Rwanda. The school is proud to be recognized as a <strong>Science Model School in Rwamagana</strong> and an <strong>SIIQS Project Model School</strong>, reflecting its commitment to quality science education and international standards.
              </p>
            </ScrollFadeIn>
            <ScrollFadeIn delay={200}>
              <p>
                The school provides a comprehensive boarding environment with excellent facilities including state-of-the-art science laboratories, well-maintained playgrounds, and structured lesson plans aligned with Rwanda's Competence-Based Curriculum (CBC) as designed by the Rwanda Basic Education Board (REB).
              </p>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollFadeIn>
              <div>
                <SectionLabel label="Mission" />
                <h2 className="serif-heading text-3xl md:text-4xl font-bold text-balance mb-6">
                  Our School Mission
                </h2>
                <div className="border-l-4 border-accent pl-6 py-2">
                  <p className="text-lg text-foreground leading-relaxed font-medium italic">
                    "To transform the learner into globally competitive human by ensuring quality education focusing on the promotion of science and technology, critical thinking and positive values."
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay={100}>
              <div>
                <SectionLabel label="Vision" />
                <h2 className="serif-heading text-3xl md:text-4xl font-bold text-balance mb-6">
                  Our School Vision
                </h2>
                <div className="border-l-4 border-accent pl-6 py-2">
                  <p className="text-lg text-foreground leading-relaxed font-medium italic">
                    "To be a centre of excellence that meets the highest standards in education, producing graduates who are ready for the global stage."
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="Our Values" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            Guiding Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Academic Excellence',
                description:
                  'We pursue the highest standards in everything we do — from academics aligned with Rwanda\'s CBC to co-curricular and character development.',
              },
              {
                icon: Lightbulb,
                title: 'Science & Technology',
                description:
                  'As a Science Model School, we champion innovation, inquiry-based learning, and ICT integration as central pillars of student growth.',
              },
              {
                icon: Heart,
                title: 'Positive Values',
                description:
                  'We cultivate integrity, respect, peace, environmental responsibility, and national identity in every learner we serve.',
              },
            ].map((value, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <Card className="p-8 border border-border bg-background">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="text-accent" size={28} />
                  </div>
                  <h3 className="serif-heading text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Facilities" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            School Facilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Science Laboratories',
                description:
                  'State-of-the-art science labs supporting Physics, Chemistry, and Biology practical sessions — a key feature of this recognized Science Model School.',
              },
              {
                title: 'Playgrounds & Sports',
                description:
                  'Well-maintained playgrounds and sports facilities where students develop physical fitness, teamwork, and a competitive spirit.',
              },
              {
                title: 'Boarding Facilities',
                description:
                  'Comfortable boarding accommodation providing a safe and structured residential environment for students from across Rwanda.',
              },
              {
                title: 'Classrooms & Learning Spaces',
                description:
                  'Well-equipped classrooms with structured lesson plans and CBC-aligned teaching materials to ensure effective delivery of all subjects.',
              },
              {
                title: 'Environment-Friendly Campus',
                description:
                  'Recognized as an environment-friendly school, the campus sits on the beautiful hill of Musha with a scenic view of the Muhazi plains.',
              },
              {
                title: 'Professional Development',
                description:
                  'The school supports its teachers through continuous professional development, including School-Based Mentorship (SBM) programs since 2014.',
              },
            ].map((facility, i) => (
              <ScrollFadeIn key={i} delay={i * 50}>
                <Card className="p-6 border border-border bg-background hover:shadow-lg transition-shadow">
                  <h3 className="serif-heading text-xl font-bold mb-3">{facility.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {facility.description}
                  </p>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionLabel label="Recognition" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            Official Accreditations
          </h2>

          <div className="space-y-6">
            {[
              {
                org: 'MINEDUC — Ministry of Education Rwanda',
                detail: 'Accredited boarding secondary school listed in the official MINEDUC schools directory for Rwamagana District.',
              },
              {
                org: 'NESA — National Examination and School Inspection Authority',
                detail: 'Fully registered with NESA and appearing in the list of accredited schools in Rwamagana District.',
              },
              {
                org: 'REB — Rwanda Basic Education Board',
                detail: 'Implementing Rwanda\'s Competence-Based Curriculum (CBC) across all O-Level and A-Level programs.',
              },
              {
                org: 'SIIQS Project Model School',
                detail: 'Designated as an SIIQS (School Improvement and Institutional Quality Standards) Model School in Rwamagana.',
              },
            ].map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 50}>
                <Card className="p-6 border-l-4 border-l-accent border border-border bg-muted">
                  <h3 className="serif-heading text-lg font-bold mb-2">{item.org}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.detail}</p>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
