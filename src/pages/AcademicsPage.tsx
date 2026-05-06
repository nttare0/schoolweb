import { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { SectionLabel } from '@/components/SectionLabel';
import { Card } from '@/components/ui/card';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const AcademicsPage = () => {
  const [selectedProgram, setSelectedProgram] = useState('mpc');

  const programs = {
    mpc: {
      title: 'Mathematics, Physics, Chemistry & Biology',
      badge: 'A-Level — Stream 1',
      description:
        'Rigorous science education preparing students for careers in medicine, engineering, and research. Aligned with Rwanda\'s CBC emphasis on science and technology promotion.',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
      highlights: [
        'State-of-the-art science laboratories',
        'Recognized Science Model School in Rwamagana',
        'CBC learner-centred, practical approach',
        'Pathway to medicine, engineering, and research',
        'Aligned with REB Competence-Based Curriculum',
      ],
    },
    meg: {
      title: 'Mathematics, Economics, Geography & Physics',
      badge: 'A-Level — Stream 2',
      description:
        'A stream integrating quantitative analysis with economic and geographical understanding, preparing students for business, policy, social sciences, and environmental fields.',
      subjects: ['Mathematics', 'Economics', 'Geography', 'Physics'],
      highlights: [
        'Strong foundation in analytical and economic thinking',
        'Preparation for business, finance, and policy careers',
        'CBC competency development in critical thinking',
        'Quantitative methods with real-world application',
        'Aligned with East African Community curriculum framework',
      ],
    },
  };

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Academics"
        description="Rwanda's Competence-Based Curriculum delivered with excellence at G.S. Apagie/Musha"
      />

      <section className="py-12 px-4 bg-accent/5 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
            G.S. Apagie/Musha follows Rwanda's <strong>Competence-Based Curriculum (CBC)</strong> introduced by the <strong>Rwanda Basic Education Board (REB)</strong>. The CBC shifts from knowledge-based learning to skill application — targeting critical thinking, problem-solving, and employability. It is learner-centered, focusing on core competencies, values, and attitudes across O-Level and A-Level.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="A-Level Programs" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            Career Pathway Streams
          </h2>

          <Tabs value={selectedProgram} onValueChange={setSelectedProgram} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="mpc">Stream 1 — Sciences</TabsTrigger>
              <TabsTrigger value="meg">Stream 2 — Maths & Economics</TabsTrigger>
            </TabsList>

            {Object.entries(programs).map(([key, program]) => (
              <TabsContent key={key} value={key}>
                <ScrollFadeIn>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <div className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                        {program.badge}
                      </div>
                      <h3 className="serif-heading text-3xl font-bold mb-4">
                        {program.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                        {program.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-4">Key Subjects:</h4>
                        <div className="flex flex-wrap gap-3">
                          {program.subjects.map((subject) => (
                            <span
                              key={subject}
                              className="px-4 py-2 bg-accent/10 text-accent rounded-md text-sm font-medium"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <Card className="p-8 border border-border bg-muted">
                        <h4 className="font-semibold mb-6">Program Highlights:</h4>
                        <ul className="space-y-4">
                          {program.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3">
                              <span className="text-accent font-bold flex-shrink-0">✓</span>
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </div>
                </ScrollFadeIn>
              </TabsContent>
            ))}
          </Tabs>

          <ScrollFadeIn delay={100}>
            <div className="mt-10 border border-border rounded-xl p-8 bg-muted">
              <div className="inline-block text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">
                Arts & Humanities Pathway
              </div>
              <h3 className="serif-heading text-2xl font-bold mb-3">
                History, Geography, Literature in English & Psychology
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                Students may also follow the Arts & Humanities pathway, developing critical thinking, communication, and cultural awareness — supporting careers in law, journalism, diplomacy, and the social sciences.
              </p>
              <div className="flex flex-wrap gap-3">
                {['History', 'Geography', 'Literature in English', 'Psychology'].map((s) => (
                  <span key={s} className="px-4 py-2 bg-accent/10 text-accent rounded-md text-sm font-medium">{s}</span>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 italic">
                All A-Level students additionally take compulsory CBC cross-pathway subjects: ICT, Entrepreneurship, General Studies, and Physical Education.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="O-Level Curriculum (S1–S3)" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-8">
            Lower Secondary — Common Core Subjects
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            All students at G.S. Apagie/Musha study a <strong>common core curriculum</strong> at O-Level (S1–S3) before choosing their A-Level pathway. This is in line with REB's CBC framework.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'English', 'Kinyarwanda', 'French', 'Mathematics', 'Physics',
              'Chemistry', 'Biology', 'Geography', 'History', 'Entrepreneurship',
              'ICT / Computer Science', 'Religious Education', 'Physical Education', 'Music', 'Kiswahili',
            ].map((subject, i) => (
              <ScrollFadeIn key={i} delay={i * 30}>
                <div className="p-3 text-center bg-background border border-border rounded-lg text-sm font-medium hover:border-accent hover:text-accent transition-colors">
                  {subject}
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="Curriculum Structure" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            Grade Progression at G.S. Apagie/Musha
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                level: 'O-Level (S1–S3)',
                focus: 'Foundation Building',
                description:
                  'All students study the REB CBC common core — 15 subjects covering languages, sciences, humanities, ICT, and PE. This broad foundation prepares students for A-Level pathway selection.',
              },
              {
                level: 'A-Level (S4–S6) — Sciences',
                focus: 'Mathematics & Sciences / MEG',
                description:
                  'Students choose between the Sciences stream (Maths, Physics, Chemistry, Biology) or the MEG stream (Maths, Economics, Geography, Physics), plus compulsory ICT, Entrepreneurship, and PE.',
              },
              {
                level: 'A-Level (S4–S6) — Arts',
                focus: 'Humanities Pathway',
                description:
                  'Students in the Arts pathway study History, Geography, Literature in English, and Psychology alongside compulsory cross-pathway subjects: ICT, Entrepreneurship, General Studies, and PE.',
              },
            ].map((level, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <Card className="p-8 border-l-4 border-l-accent border border-border bg-background">
                  <h3 className="serif-heading text-2xl font-bold mb-2">{level.level}</h3>
                  <p className="text-accent font-semibold mb-4">{level.focus}</p>
                  <p className="text-muted-foreground leading-relaxed">{level.description}</p>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="CBC Cross-Cutting Issues" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-8">
            Integrated Across All Subjects
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Rwanda's CBC embeds 8 cross-cutting issues across all subjects at G.S. Apagie/Musha. These are not standalone subjects but are woven throughout the curriculum.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: '01', label: 'Environment & Sustainability' },
              { num: '02', label: 'Peace & Values Education' },
              { num: '03', label: 'Gender Equality' },
              { num: '04', label: 'Comprehensive Sexuality Education (CSE)' },
              { num: '05', label: 'Financial Education' },
              { num: '06', label: 'Standardization Culture' },
              { num: '07', label: 'Genocide Studies & Prevention' },
              { num: '08', label: 'ICT Integration' },
            ].map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 50}>
                <div className="flex gap-4 items-center p-4 bg-background border border-border rounded-lg hover:border-accent transition-colors">
                  <span className="text-2xl font-bold text-accent/30 font-mono">{item.num}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="Teaching Excellence" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            Qualified Faculty & Modern Methods
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollFadeIn>
              <Card className="p-8 border border-border bg-muted">
                <h3 className="serif-heading text-2xl font-bold mb-4">Our Teachers</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Experienced, university-qualified educators</li>
                  <li>• School-Based Mentors (SBM) since 2014</li>
                  <li>• Trained Mentor Trainers in Musha Sector</li>
                  <li>• Continuous professional development programs</li>
                  <li>• Committed to CBC learner-centred methods</li>
                </ul>
              </Card>
            </ScrollFadeIn>

            <ScrollFadeIn delay={100}>
              <Card className="p-8 border border-border bg-muted">
                <h3 className="serif-heading text-2xl font-bold mb-4">Teaching Approach</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Learner-centred, constructivist methods (CBC)</li>
                  <li>• Criterion-referenced, outcome-focused learning</li>
                  <li>• Formative assessment throughout the year</li>
                  <li>• Integration of ICT in all subject areas</li>
                  <li>• Hands-on practical work in science labs</li>
                </ul>
              </Card>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="Academic Calendar" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            Rwanda Academic Year — Three Terms
          </h2>

          <div className="space-y-6">
            {[
              {
                term: 'Term 1',
                period: 'September – December',
                activities: 'Classes, continuous assessment, NESA preparation activities',
              },
              {
                term: 'Term 2',
                period: 'January – April',
                activities: 'Classes, mid-year exams, internal assessments, cultural events',
              },
              {
                term: 'Term 3',
                period: 'April – July',
                activities: 'Final term classes, national examinations (NESA), graduation',
              },
            ].map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <Card className="p-6 border border-border bg-background hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent text-accent-foreground font-bold">
                        {i + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="serif-heading text-xl font-bold mb-1">{item.term}</h3>
                      <p className="text-accent font-semibold mb-2">{item.period}</p>
                      <p className="text-muted-foreground">{item.activities}</p>
                    </div>
                  </div>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
