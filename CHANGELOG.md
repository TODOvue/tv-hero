# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-20

### ✨ Added
- Initial release of `@todovue/tv-hero` component
- Flexible hero component with customizable layout options
- Support for images with responsive design
- Primary and secondary call-to-action buttons powered by `@todovue/tv-button`
- Entry/article mode for blog posts and content pages (`isEntry` prop)
- Custom styling system via `customHero` prop for colors and themes
- Configuration object (`configHero`) for title, description, buttons, and images
- Automatic color adjustment and hover effects for custom button colors
- Decorative separator bar below title with matching theme colors
- Full-width hero mode (without image)
- Standard hero mode (with image)
- Global and local component registration options
- Vue 3 Composition API with `useHero` composable
- SCSS styling with variables, mixins, and global styles
- Click events for primary (`click-button`) and secondary (`click-secondary-button`) buttons
- Accessibility features with semantic HTML and ARIA support
- Dark mode and light mode theme support with customizable colors
- Responsive design for all screen sizes
- TypeScript type definitions for better development experience
- SSR compatibility for Nuxt 3 and other server-side rendering frameworks
- Build configuration with Vite for library distribution
- Comprehensive README documentation with installation, usage, and configuration examples
- Demo playground with multiple examples:
  - Default hero with image
  - Hero with secondary button
  - Custom themed hero
  - Entry hero for articles
  - Entry hero without image
  - Various customization examples

---

[1.0.0]: https://github.com/TODOvue/tv-hero/pull/1/files
