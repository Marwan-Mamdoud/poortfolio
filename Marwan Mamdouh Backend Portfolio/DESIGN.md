---
name: Technical Precision Portfolio
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c0c9bf'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8a938a'
  outline-variant: '#404942'
  surface-tint: '#97d4aa'
  primary: '#97d4aa'
  on-primary: '#00391e'
  primary-container: '#004526'
  on-primary-container: '#76b38a'
  inverse-primary: '#2f6947'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#98da27'
  on-tertiary: '#213600'
  tertiary-container: '#2a4200'
  on-tertiary-container: '#7ab600'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b2f1c5'
  primary-fixed-dim: '#97d4aa'
  on-primary-fixed: '#00210f'
  on-primary-fixed-variant: '#135131'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#b2f746'
  tertiary-fixed-dim: '#98da27'
  on-tertiary-fixed: '#121f00'
  on-tertiary-fixed-variant: '#334f00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The brand identity centers on the persona of an expert backend architect: Marwan Mamdouh. It communicates reliability, structural integrity, and high-performance engineering. The aesthetic merges **Minimalism** with **Modern Corporate** sensibilities, utilizing a "Technical Dark Mode" that emphasizes data flow and system architecture.

The design should evoke the feeling of a sophisticated IDE or a high-end server monitoring dashboard. Key visual motifs include subtle grid overlays, monospaced accents, and bracket-based iconography to signal a deep focus on code and logic. The emotional response is one of trust and professional competence.

## Colors

The palette is anchored by **Deep Forest Green (#004526)**, representing stability and growth. This is paired with a **Slate Navy (#1E293B)** for structural elements and a deep **Midnight Neutral (#0F172A)** for the primary background to ensure maximum contrast and reduced eye strain.

**Vibrant Lime (#A3E635)** is used sparingly as a high-visibility accent for calls to action, status indicators, and syntax-highlighting-inspired details. This creates a "terminal-chic" look that remains professional.

- **Primary:** Branding, key sections, and primary button backgrounds.
- **Secondary:** Surface containers, borders, and secondary buttons.
- **Tertiary (Accent):** Highlights, active states, and success indicators.
- **Neutral:** Backgrounds, deep shadows, and subtle text contrast.

## Typography

This design system uses a dual-font strategy. **Inter** provides high readability and a modern, professional feel for primary content and headlines. **JetBrains Mono** is introduced for labels, metadata, and code snippets to reinforce the backend engineering narrative.

- Use **Display** sizes for hero sections and impact statements.
- Use **Code** styles for technical tags, skill lists, and timestamps.
- Ensure all technical terms are set in the monospaced font to differentiate "system" information from "human" narrative.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop, centered within the viewport to maintain a clean, architectural structure. It utilizes a 12-column system with generous gutters to allow the "technical patterns" (like background grid lines) to breathe.

- **Mobile:** Single column with 20px margins. Headlines scale down to prevent awkward wrapping.
- **Desktop:** 12-column grid. Information-heavy sections (like API documentation or project details) should span 8 columns, while sidebars or metadata span 4.
- **Rhythm:** Use multiples of 8px (the `base` unit) for all padding and margins to ensure mathematical precision in the UI.

## Elevation & Depth

To maintain a minimalist backend aesthetic, elevation is communicated through **Tonal Layering** and **Low-Contrast Outlines** rather than heavy shadows.

- **Surface 0 (Background):** Midnight Neutral (#0F172A).
- **Surface 1 (Cards/Sections):** Slate Navy (#1E293B) with a subtle 1px border in a slightly lighter shade.
- **Interactive State:** Elements should shift their border color to the Primary or Tertiary green on hover, rather than lifting off the page.
- **Grid Pattern:** A faint, non-interactive background grid (10% opacity) should sit on Surface 0 to provide a sense of scale and engineering precision.

## Shapes

The design system utilizes **Soft (0.25rem)** roundedness to maintain a precise, technical look. Sharp corners feel too aggressive, while fully rounded corners feel too consumer-facing. This subtle rounding suggests a refined, modern software interface.

- **Buttons:** 4px radius.
- **Cards:** 8px (rounded-lg equivalent) for structural containers.
- **Inputs:** 4px radius to match buttons.

## Components

### Buttons
- **Primary:** Deep Forest Green background, White text. High contrast, sharp edges.
- **Ghost/Outline:** 1px border in Slate Navy, text in Lime Green. Used for secondary actions.

### Chips & Tags
- Used for "Tech Stack" display.
- Styling: JetBrains Mono font, Slate Navy background, 1px border. No shadows.

### Cards (Project/Experience)
- Background: Surface 1 (Slate Navy).
- Header: Uses the `label-caps` style for category (e.g., "SYSTEM ARCHITECTURE").
- Footer: Contains tech-stack chips.

### Input Fields
- Dark background (Surface 0), 1px Slate Navy border.
- Focus state: Border changes to Lime Green with a subtle outer glow (0 0 0 2px).

### Technical Ornaments
- Use small "bracket motifs" (e.g., `[` and `]`) as decorative bullets for lists or to frame section headers.
- Terminal-style window controls (red/yellow/green dots) can be used on code block containers for a realistic engineering feel.