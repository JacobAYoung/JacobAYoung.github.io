/**
 * The résumé, as data. Everything on the page renders from here; the PDF in /public is the same
 * content laid out for paper. Edit this file, push, and GitHub Actions rebuilds the site.
 */

export interface Job {
  company: string;
  title: string;
  where: string;
  from: string; // "Jun 2025"
  to: string; // "Present"
  points: string[];
  outcome?: string; // the one line an engineer reads first
}

export interface Project {
  name: string;
  when: string;
  what: string;
  built: string; // the stack, plainly
  link?: { label: string; href: string };
}

export const person = {
  name: 'Jake Young',
  title: 'Software developer',
  where: 'Wentzville, Missouri (St. Louis)',
  email: 'JakeAYoung95@gmail.com',
  phone: '(636) 439-0195',
  phoneHref: 'tel:+16364390195',
  github: 'https://github.com/JacobAYoung',
  resumePdf: 'Jake_Young_Resume.pdf',
  headline: 'I build the software that keeps warehouses shipping and simulators flying.',
  summary:
    'Seven years shipping internal systems in C# and .NET: the shipping, picking and purchasing tools a 50-person e-commerce warehouse runs on, then the logging and monitoring tooling for Boeing’s F/A-18 flight simulation team. I like the unglamorous middle of a system — the part that has to work every day — and I ship it with tests.',
};

export const jobs: Job[] = [
  {
    company: 'Boeing',
    title: 'Software developer, flight simulation',
    where: 'Berkeley, MO',
    from: 'Jun 2025',
    to: 'Present',
    outcome: '50 repositories moved to C++20 / .NET 4.8.1 in the first month; the team’s modernization went from 70% to 95% done.',
    points: [
      'Designed a common C++ logging library for the F/A-18 simulation team, with a C-style header API so .NET, Python and Fortran code can use the same logger.',
      'Built a C#/WPF log monitor: applications stream logs over TCP, report heartbeats, and accept logger configuration changes while running.',
      'Rewrote the onboarding wiki (startup, internal tools, Git practice) and mentor new developers through their first weeks.',
    ],
  },
  {
    company: 'etrailer.com',
    title: 'Tech lead, senior software developer',
    where: 'Wentzville, MO',
    from: 'Sep 2022',
    to: 'Jun 2025',
    outcome: 'West Coast delivery estimates went from 3–5 days to 1–2 days; sales rose 10% in that region and 15% nationwide.',
    points: [
      'Led three developers building the internal applications the warehouse runs on: shipping, picking, purchasing, day-to-day logistics for 50+ staff.',
      'Overhauled the website’s shipping calculation across four warehouses with two other teams, integrating internal and carrier APIs.',
      'Wrote the program that moved 60+ applications and a 500-project code base to .NET 6 and current NuGet packages.',
      'Interviewed, trained and mentored new developers.',
    ],
  },
  {
    company: 'etrailer.com',
    title: 'Software developer',
    where: 'Wentzville, MO',
    from: 'May 2019',
    to: 'Sep 2022',
    points: [
      'Added aspect-oriented error tracking to the internal programs, which made failures visible and the applications noticeably more dependable.',
      'Owned the ShipExec shipping software: updates, maintenance, and accurate carrier rates.',
      'Built API services between internal systems and outside partners.',
      'Wrote unit tests for new and existing code.',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'Relay',
    when: '2026',
    what: 'Lead follow-up software for an insurance agency, sold to its first customer in September 2026. It runs on the agent’s own Mac mini: every quote gets one follow-up email the same evening, newsletters go out on approval, replies are read by rule before any AI sees them, and a local language model shapes wording but never decides what is sent.',
    built: 'Angular 19, NestJS, a local model through Ollama behind a deterministic gate, a Cloudflare Worker for unsubscribe links, a signed macOS installer, and a test suite that installs the real package on a clean Mac in CI. Developed with Claude Code, with every generated change gated by tests.',
  },
  {
    name: 'Common logging library',
    when: '2025, Boeing',
    what: 'One logger for a simulation code base written in four languages, plus the WPF tool that watches every process using it.',
    built: 'C++20 with a C header API; C# and WPF for the monitor; TCP sockets and heartbeats.',
  },
  {
    name: 'Multi-warehouse shipping estimates',
    when: '2023–2024, etrailer',
    what: 'The calculation behind every delivery date on the site, rebuilt for four warehouses and real carrier transit data.',
    built: '.NET services, carrier and internal APIs, SQL Server.',
  },
];

export const skills: { area: string; items: string[] }[] = [
  { area: 'Languages', items: ['C#', 'C++', 'VB.NET', 'T-SQL', 'Python', 'TypeScript'] },
  { area: 'Frameworks', items: ['.NET 6/8', 'WPF and XAML', 'Angular', 'NestJS'] },
  { area: 'Data and operations', items: ['SQL Server', 'Splunk', 'Git and TFS', 'GitHub Actions'] },
  { area: 'Practice', items: ['Unit testing', 'API design', 'Code modernization', 'Mentoring'] },
  { area: 'Working with AI', items: ['Frontier models (Claude Fable and Opus, Grok) as a daily part of the workflow', 'Local models through Ollama', 'Verification around every model output: tests, deterministic gates, human review'] },
  { area: 'Domains', items: ['Logistics and shipping', 'Warehouse operations', 'Flight simulation tooling'] },
];

export const education = [
  { school: 'Missouri University of Science and Technology', degree: 'B.S., Computer Science and Engineering', when: '2016–2019' },
  { school: 'St. Charles Community College', degree: 'Associate, Computer Science and Engineering', when: '2014–2016' },
];

export const interests = {
  technical: ['Logistics', 'Cloud infrastructure', 'Electric and hydrogen vehicles'],
  otherwise: ['Golf', 'Home improvement', 'Travel'],
};
