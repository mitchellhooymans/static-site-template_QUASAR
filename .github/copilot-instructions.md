1. Project Context & Stack
Define exactly what the "source of truth" is for the project.
Project Context: This is a static website based on a custom HTML5 template.
Tech Stack: Semantic HTML5, CSS3 (using [mention your framework, e.g., Tailwind or Vanilla]), and modern JavaScript (ES6+).
Deployment: Hosted on GitHub Pages.
2. Design & UI Guidelines
This prevents the AI from suggesting ugly or inconsistent components.
Design Rules:
Maintain the existing CSS variable system defined in assets/css/variables.css.
All new sections must be fully responsive and follow a mobile-first approach.
Use modern design trends: glassmorphism for cards, subtle transitions (0.3s ease), and high-contrast typography for accessibility.
Avoid inline styles; always use external stylesheets or utility classes.
3. Coding Standards
Ensure the Agent writes clean, professional code.
Code Quality:
Use Semantic HTML (e.g., <article>, <section>, <nav>) instead of generic <div> soup.
Ensure all images have descriptive alt tags.
Follow the BEM (Block Element Modifier) naming convention for CSS classes.
Keep JavaScript functions modular and document complex logic with JSDoc comments.
4. Workflow Preferences
Tell the Agent how to behave when it "works" for you.
Agent Behavior:
Before making major structural changes to the template, provide a summary of the planned changes.
If a requested feature requires a new library (like AOS for animations or FontAwesome), ask for permission before adding the CDN link.