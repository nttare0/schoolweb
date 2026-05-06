import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SectionLabel } from '@/components/SectionLabel';
import { StatCard } from '@/components/StatCard';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Award, Users, BookOpen, MapPin, FlaskConical, Lightbulb } from 'lucide-react';

export const HomePage = () => {
  const { ref: statsRef } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <section className="relative py-20 md:py-32 px-4 overflow-hidden texture-overlay ambient-glow">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-b from-accent via-transparent to-transparent" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <ScrollFadeIn delay={0}>
            <div className="inline-flex items-center gap-2 text-xs text-accent font-semibold uppercase tracking-widest mb-4 border border-accent/30 rounded-full px-4 py-1.5">
              <MapPin size={12} />
              Rwamagana District · Eastern Province · Rwanda
            </div>
            <h1 className="serif-heading text-5xl md:text-7xl font-bold text-balance mb-6 text-foreground">
              G.S. <span className="text-accent">Apagie/Musha</span>
            </h1>
          </ScrollFadeIn>
          <ScrollFadeIn delay={100}>
            <p className="text-lg md:text-xl text-muted-foreground mb-3 leading-relaxed max-w-2xl mx-auto">
              A Science Model School of Excellence in Rwamagana
            </p>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto italic">
              "Transforming learners into globally competitive humans through quality education, science, technology, and positive values."
            </p>
          </ScrollFadeIn>
          <ScrollFadeIn delay={200} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 text-base"
            >
              <Link to="/admissions">Explore Admissions</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 px-8 text-base border-accent text-accent hover:bg-accent/5"
            >
              <Link to="/about">Learn Our Story</Link>
            </Button>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="py-8 px-4 bg-accent text-accent-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-sm font-medium text-center">
            <span>School Code: <strong>0501030</strong></span>
            <span className="hidden sm:block">·</span>
            <span>Province: <strong>East</strong></span>
            <span className="hidden sm:block">·</span>
            <span>District: <strong>Rwamagana</strong></span>
            <span className="hidden sm:block">·</span>
            <span>Type: <strong>Boarding Secondary School</strong></span>
            <span className="hidden sm:block">·</span>
            <span>Curriculum: <strong>CBC (REB)</strong></span>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-16 md:py-24 px-4 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <StatCard number={2} label="A-Level Streams" />
            <StatCard number={3} label="O-Level Years (S1–S3)" />
            <StatCard number={15} label="Core Subjects Offered" />
            <StatCard number={7} label="CBC Key Competences" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="Why G.S. Apagie/Musha" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            A Comprehensive Approach to Education
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FlaskConical,
                title: 'Science Model School',
                description:
                  'Recognized as a Science Model School in Rwamagana with state-of-the-art laboratories and experienced science teachers.',
              },
              {
                icon: Users,
                title: 'Holistic Development',
                description:
                  'Well-equipped playgrounds, sports facilities, and structured lesson plans support the complete growth of every learner.',
              },
              {
                icon: Award,
                title: 'CBC Excellence',
                description:
                  'Following Rwanda\'s Competence-Based Curriculum (CBC) by REB, focusing on critical thinking, problem-solving, and employability.',
              },
            ].map((feature, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <Card className="p-8 border border-border hover:shadow-lg hover:border-accent transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="serif-heading text-xl font-bold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="Learning Pathways" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            A-Level Career Pathways at G.S. Apagie/Musha
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Mathematics & Sciences',
                badge: 'O\'Level & A\'Level',
                description: 'Stream 1: Mathematics, Physics, Chemistry, Biology — preparing future scientists, engineers, and medical professionals.',
                subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
              },
              {
                title: 'Mathematics, Economics & Geography',
                badge: 'O\'Level & A\'Level',
                description: 'Stream 2: Mathematics, Economics, Geography, and Physics — building analytical thinkers for business and social sciences.',
                subjects: ['Mathematics', 'Economics', 'Geography', 'Physics'],
              },
              {
                title: 'Arts & Humanities',
                badge: 'O\'Level & A\'Level',
                description: 'History, Geography, Literature in English, and Psychology — developing critical thinkers and communicators.',
                subjects: ['History', 'Geography', 'Literature in English', 'Psychology'],
              },
              {
                title: 'CBC Cross-Cutting Subjects',
                badge: 'All Students',
                description: 'Compulsory for all: ICT, Entrepreneurship, General Studies, and Physical Education — aligned with Rwanda\'s CBC framework.',
                subjects: ['ICT', 'Entrepreneurship', 'General Studies', 'Physical Education'],
              },
            ].map((program, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <div className="border-l-2 border-accent pl-6 py-4">
                  <div className="inline-block text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded mb-2">
                    {program.badge}
                  </div>
                  <h3 className="serif-heading text-2xl font-bold mb-2">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
                    {program.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {program.subjects.map((s) => (
                      <span key={s} className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="Rwanda's CBC Curriculum" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-8">
            Competence-Based Curriculum (CBC)
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mb-12 text-lg">
            G.S. Apagie/Musha follows Rwanda's <strong>Competence-Based Curriculum (CBC)</strong> introduced by the Rwanda Basic Education Board (REB). This curriculum shifts from knowledge-based learning to skill application — targeting critical thinking, problem-solving, and employability. It is learner-centered and focuses on core competencies, values, and attitudes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Lightbulb, label: 'Critical Thinking & Problem Solving' },
              { icon: BookOpen, label: 'Research & Lifelong Learning' },
              { icon: Users, label: 'Cooperation & Teamwork' },
              { icon: Award, label: 'Citizenship & National Identity' },
            ].map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 80}>
                <Card className="p-6 text-center border border-border hover:border-accent transition-colors">
                  <item.icon className="text-accent mx-auto mb-3" size={28} />
                  <p className="text-sm font-medium leading-snug">{item.label}</p>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-accent/5 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel label="School Recognition" className="justify-center" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            A Recognized Centre of Excellence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: 'G.S. Apagie/Musha is a beautiful school situated on the hill of Musha, with a view of the Muhazi plains — a school of excellence with experienced teachers.',
                author: 'School Community',
                role: 'Musha Sector, Rwamagana',
              },
              {
                quote: 'Recognized as an SIIQS Project Model School and an environment-friendly school, committed to professional development and academic excellence.',
                author: 'MINEDUC Accreditation',
                role: 'Ministry of Education, Rwanda',
              },
            ].map((testimonial, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <Card className="p-8 border border-border bg-background">
                  <div className="mb-4 text-4xl text-accent font-bold">"</div>
                  <p className="text-lg mb-6 leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-background/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Visit G.S. Apagie/Musha to pick up your admission form from the admissions office. Our team is ready to welcome you.
          </p>
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 text-base"
          >
            <Link to="/admissions" className="inline-flex items-center gap-2">
              Start Your Application
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
