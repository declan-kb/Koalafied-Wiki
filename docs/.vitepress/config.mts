import { defineConfig } from 'vitepress'

// Site settings. The part you will edit most is `sidebar` below:
// to add a page, copy one line in the right section and change the text and link.
// Full reference: https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Koalafied Wiki',
  description: 'Team Koalafied (FRC) knowledge base: electrical, software, mechanical and manufacturing.',
  lang: 'en-AU',

  // The site lives at https://declan-kb.github.io/Koalafied-Wiki/
  // If we ever move to a custom domain, change this to '/'.
  base: '/Koalafied-Wiki/',

  cleanUrls: true,   // /electrical/basic-soldering instead of /electrical/basic-soldering.html
  lastUpdated: true, // shows "Last updated" at the bottom of each page (from git history)

  head: [
    ['link', { rel: 'icon', href: '/Koalafied-Wiki/logo.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Inter+Tight:ital,wght@0,400;0,600;0,800;1,800&family=IBM+Plex+Mono:wght@400;500;600&display=swap' }],
  ],

  markdown: {
    // Lets you write maths like $P = VI$ (inline) or $$P = VI$$ (on its own line)
    math: true,

    // Turns "- [ ] item" / "- [x] item" into tickable checkboxes (used by checklists)
    config(md) {
      md.core.ruler.after('inline', 'task-lists', (state) => {
        for (const token of state.tokens) {
          const first = token.type === 'inline' ? token.children?.[0] : undefined
          const match = first?.type === 'text' && first.content.match(/^\[([ xX])\] /)
          if (!match) continue
          first.content = first.content.slice(4)
          const box = new state.Token('html_inline', '', 0)
          box.content = `<input type="checkbox"${match[1] === ' ' ? '' : ' checked'}> `
          token.children!.unshift(box)
        }
      })
    },
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Koalafied Wiki',

    search: { provider: 'local' },

    editLink: {
      pattern: 'https://github.com/declan-kb/Koalafied-Wiki/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    lastUpdated: { text: 'Last updated' },
    docFooter: { prev: 'Previous page', next: 'Next page' },
    outline: { level: [2, 3], label: 'On this page' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/declan-kb/Koalafied-Wiki' },
    ],

    // Links across the top of every page
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Electrical', link: '/electrical/' },
      { text: 'Software', link: '/software/' },
      { text: 'Mechanical', link: '/mechanical/' },
      { text: 'How to edit', link: '/contributing/how-to-edit' },
    ],

    // Left-hand menu, one list per section. One line per page:
    //   { text: 'Page title', link: '/section/file-name-without-.md' },
    sidebar: {
      '/electrical/': [
        {
          text: 'Electrical',
          items: [{ text: 'Overview', link: '/electrical/' }],
        },
        {
          text: 'Reference',
          items: [
            { text: 'Control System Diagram', link: '/electrical/control-system-diagram' },
            { text: 'Understanding DC Motors', link: '/electrical/understanding-dc-motors' },
            { text: 'Wire Gauge Guide', link: '/electrical/wire-gauge-guide' },
          ],
        },
        {
          text: 'Skills Tree',
          items: [
            { text: 'Skills Tree Overview', link: '/electrical/skills-tree' },
            { text: 'Basic Electrical Knowledge', link: '/electrical/basic-electrical-knowledge' },
            { text: 'Basic Electrical Knowledge II', link: '/electrical/basic-electrical-knowledge-ii' },
            { text: 'Basic Soldering', link: '/electrical/basic-soldering' },
            { text: 'Power Soldering', link: '/electrical/power-soldering' },
            { text: 'Component Soldering', link: '/electrical/component-soldering' },
            { text: 'Common Component Connectors', link: '/electrical/common-component-connectors' },
            { text: 'Anderson Powerpole Connectors', link: '/electrical/anderson-powerpole-connectors' },
            { text: 'Specialised Component Connectors', link: '/electrical/specialised-component-connectors' },
            { text: 'Spade Connectors', link: '/electrical/spade-connectors' },
            { text: 'Deutsch DTM Connectors', link: '/electrical/deutsch-dtm-connectors' },
            { text: 'Basic Circuit Design', link: '/electrical/basic-circuit-design' },
            { text: 'Circuit Topologies', link: '/electrical/circuit-topologies' },
            { text: 'Belly/Brainpan Layout', link: '/electrical/belly-brainpan-layout' },
            { text: 'Wire Gauge Selection', link: '/electrical/wire-gauge-selection' },
            { text: 'Mechanism Wiring Layout', link: '/electrical/mechanism-wiring-layout' },
          ],
        },
      ],
      '/software/': [
        {
          text: 'Software',
          items: [
            { text: 'Overview', link: '/software/' },
            { text: 'Setup Guide', link: '/software/setup-guide' },
            { text: 'Software Organisation', link: '/software/organisation' },
            { text: 'C++ Coding Standard', link: '/software/coding-standard' },
            { text: 'C++ Cheat Sheet', link: '/software/cpp-cheat-sheet' },
            { text: 'Mechanism Structure', link: '/software/mechanism-structure' },
            { text: 'Simulation', link: '/software/simulation' },
          ],
        },
      ],
      '/mechanical/': [
        {
          text: 'Mechanical',
          items: [{ text: 'Overview', link: '/mechanical/' }],
        },
        {
          text: 'Onshape',
          items: [
            { text: 'Onshape Setup', link: '/mechanical/onshape' },
            { text: 'Onshape Tips & Tricks', link: '/mechanical/onshape-tips-and-tricks' },
            { text: 'Feature Scripts', link: '/mechanical/feature-scripts' },
          ],
        },
        {
          text: 'Fundamentals',
          items: [
            { text: 'Power Transmission Basics', link: '/mechanical/power-transmission-basics' },
            { text: 'FRC Robot Rules Basics', link: '/mechanical/frc-robot-rules' },
            { text: 'Mechanisms', link: '/mechanical/mechanisms' },
          ],
        },
        {
          text: 'How We CAD',
          items: [
            { text: 'CAD Standards', link: '/mechanical/cad-standards' },
            { text: 'CAD Checklist', link: '/mechanical/cad-checklist' },
          ],
        },
        {
          text: 'Designing the Robot',
          items: [
            { text: 'Design Rules', link: '/mechanical/design-rules' },
            { text: 'Parts & Materials', link: '/mechanical/parts-and-materials' },
            { text: '3D Printing', link: '/mechanical/3d-printing' },
            { text: 'External Resources', link: '/mechanical/external-resources' },
          ],
        },
        {
          text: 'Manufacturing',
          items: [
            { text: 'Fusion 360 CAM', link: '/mechanical/fusion-360-cam' },
            { text: '3D Printing & Slicing', link: '/mechanical/3d-printing-slicing' },
          ],
        },
      ],
      '/contributing/': [
        {
          text: 'Contributing',
          items: [
            { text: 'How to edit', link: '/contributing/how-to-edit' },
            { text: 'Markdown cheatsheet', link: '/contributing/markdown-cheatsheet' },
          ],
        },
      ],
    },
  },
})
