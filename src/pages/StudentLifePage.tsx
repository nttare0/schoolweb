import { PageHeader } from '@/components/PageHeader';
import { SectionLabel } from '@/components/SectionLabel';
import { Card } from '@/components/ui/card';
import { ScrollFadeIn } from '@/components/ScrollFadeIn';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Music, Users, BookOpen } from 'lucide-react';

export const StudentLifePage = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Student Life"
        description="Beyond the classroom — a vibrant boarding community at G.S. Apagie/Musha"
      />

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="Campus Life" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            A Community of Excellence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollFadeIn>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Life at G.S. Apagie/Musha extends far beyond the classroom. Situated on the beautiful hill of Musha with a view of the Muhazi plains, our boarding school provides a rich and structured environment where students grow academically, socially, and personally.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that education encompasses not just academic learning, but also character development, leadership skills, and social responsibility. In line with Rwanda's CBC, our students develop critical thinking, teamwork, and civic values alongside their academic subjects.
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={100}>
              <Card className="p-8 border border-border bg-muted">
                <h3 className="serif-heading text-2xl font-bold mb-6">Our Promise to Students</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent flex-shrink-0 font-bold">✓</span>
                    <span>Safe, structured, and inclusive boarding environment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent flex-shrink-0 font-bold">✓</span>
                    <span>Well-maintained playgrounds and sports facilities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent flex-shrink-0 font-bold">✓</span>
                    <span>Structured lesson plans aligned with CBC (REB)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent flex-shrink-0 font-bold">✓</span>
                    <span>Mentorship from experienced School-Based Mentors</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent flex-shrink-0 font-bold">✓</span>
                    <span>Personal development through CBC's 7 core competences</span>
                  </li>
                </ul>
              </Card>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="Activities & Clubs" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            Explore Your Interests
          </h2>

          <Tabs defaultValue="sports" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="arts">Arts</TabsTrigger>
              <TabsTrigger value="clubs">Clubs</TabsTrigger>
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
            </TabsList>

            <TabsContent value="sports">
              <ScrollFadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="serif-heading text-3xl font-bold mb-6">Sports Program</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Our well-maintained playgrounds and sports facilities support a strong physical education culture, aligned with CBC's emphasis on Physical Education & Sport for all students.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {['Football', 'Basketball', 'Volleyball', 'Athletics', 'Handball', 'Table Tennis'].map((sport) => (
                        <div key={sport} className="px-4 py-2 bg-accent/10 text-accent rounded-md text-sm font-medium">
                          {sport}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Card className="p-8 border border-border bg-background">
                    <Trophy className="text-accent mb-4" size={32} />
                    <h4 className="serif-heading text-xl font-bold mb-4">Sports at G.S. Apagie/Musha</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Active sports competitions within Rwamagana District</li>
                      <li>• Well-equipped playground facilities</li>
                      <li>• Physical Education as a CBC compulsory subject</li>
                      <li>• Inter-school sports events participation</li>
                    </ul>
                  </Card>
                </div>
              </ScrollFadeIn>
            </TabsContent>

            <TabsContent value="arts">
              <ScrollFadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="serif-heading text-3xl font-bold mb-6">Arts & Culture</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Students express creativity and celebrate Rwandan culture through a range of artistic activities, aligned with the CBC's cross-cutting issues including peace and values education.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {['Drama Club', 'Music & Choir', 'Dance', 'Visual Arts', 'Debate', 'Poetry & Prose'].map((art) => (
                        <div key={art} className="px-4 py-2 bg-accent/10 text-accent rounded-md text-sm font-medium">
                          {art}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Card className="p-8 border border-border bg-background">
                    <Music className="text-accent mb-4" size={32} />
                    <h4 className="serif-heading text-xl font-bold mb-4">Annual Cultural Events</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• End-of-year cultural performances</li>
                      <li>• Inter-school Debate Championships</li>
                      <li>• Rwandan cultural celebrations</li>
                      <li>• Music and choir competitions</li>
                    </ul>
                  </Card>
                </div>
              </ScrollFadeIn>
            </TabsContent>

            <TabsContent value="clubs">
              <ScrollFadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="serif-heading text-3xl font-bold mb-6">Student Clubs</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Join clubs that align with your interests and support your CBC competence development — from scientific inquiry to entrepreneurship and environmental stewardship.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {['Science Club', 'Debate', 'Environment Club', 'Tech & ICT Club', 'Entrepreneurship', 'Writers\' Club'].map((club) => (
                        <div key={club} className="px-4 py-2 bg-accent/10 text-accent rounded-md text-sm font-medium">
                          {club}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Card className="p-8 border border-border bg-background">
                    <BookOpen className="text-accent mb-4" size={32} />
                    <h4 className="serif-heading text-xl font-bold mb-4">Club Benefits</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Leadership and teamwork opportunities</li>
                      <li>• Community service and environmental projects</li>
                      <li>• Skill development beyond the classroom</li>
                      <li>• Entrepreneurship and financial literacy</li>
                    </ul>
                  </Card>
                </div>
              </ScrollFadeIn>
            </TabsContent>

            <TabsContent value="leadership">
              <ScrollFadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="serif-heading text-3xl font-bold mb-6">Leadership Roles</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      G.S. Apagie/Musha nurtures the next generation of Rwandan leaders through structured roles in student governance, peer mentorship, and community representation.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {['Head Prefect', 'House Leaders', 'Club Presidents', 'Peer Mentors', 'Class Monitors', 'Student Council'].map((role) => (
                        <div key={role} className="px-4 py-2 bg-accent/10 text-accent rounded-md text-sm font-medium">
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Card className="p-8 border border-border bg-background">
                    <Users className="text-accent mb-4" size={32} />
                    <h4 className="serif-heading text-xl font-bold mb-4">CBC Leadership Competences</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Cooperation, teamwork & leadership (CBC core)</li>
                      <li>• Communication in English and Kinyarwanda</li>
                      <li>• Citizenship and national identity</li>
                      <li>• Decision-making and event organisation</li>
                    </ul>
                  </Card>
                </div>
              </ScrollFadeIn>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="Boarding Life" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            A Home Away from Home
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Boarding Facilities',
                description:
                  'G.S. Apagie/Musha is a fully accredited boarding secondary school. Students live in a safe, structured residential environment on the beautiful hill of Musha.',
              },
              {
                title: 'Meals & Nutrition',
                description:
                  'Balanced, nutritious meals prepared daily for boarding students. The school supports the wellbeing and physical health of every learner.',
              },
              {
                title: 'Study Halls & Learning',
                description:
                  'Structured evening study sessions with well-prepared lesson plans aligned with the CBC curriculum ensure students stay on track throughout the year.',
              },
              {
                title: 'Playgrounds & Recreation',
                description:
                  'Well-maintained playgrounds and sports facilities give students the space to relax, exercise, and develop teamwork outside of class hours.',
              },
              {
                title: 'Health & Safety',
                description:
                  'Student health and safety are a priority. The school maintains a safe campus environment for all its boarding students.',
              },
              {
                title: 'Pastoral & Mentorship Care',
                description:
                  'Dedicated School-Based Mentors (SBMs) — active since 2014 — provide ongoing personal support and professional development guidance.',
              },
            ].map((item, i) => (
              <ScrollFadeIn key={i} delay={i * 100}>
                <Card className="p-6 border border-border bg-muted hover:shadow-lg transition-shadow">
                  <h3 className="serif-heading text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </Card>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <SectionLabel label="CBC Competences in Student Life" />
          <h2 className="serif-heading text-4xl md:text-5xl font-bold text-balance mb-12">
            Developing the 7 CBC Competences
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollFadeIn>
              <Card className="p-8 border border-border bg-background">
                <h3 className="serif-heading text-2xl font-bold mb-6">Academic Competences</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Critical Thinking & Problem Solving</li>
                  <li>• Research & Lifelong Learning</li>
                  <li>• ICT & Digital Literacy</li>
                  <li>• Communication (English, Kinyarwanda, French)</li>
                </ul>
              </Card>
            </ScrollFadeIn>

            <ScrollFadeIn delay={100}>
              <Card className="p-8 border border-border bg-background">
                <h3 className="serif-heading text-2xl font-bold mb-6">Social & Civic Competences</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Creativity & Innovation</li>
                  <li>• Cooperation, Teamwork & Leadership</li>
                  <li>• Citizenship & National Identity</li>
                  <li>• Peace, values, and environmental responsibility</li>
                </ul>
              </Card>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};
