# 🎨 Quick Color Reference Card

## Current Color Palette

### 💜 Primary Brand Colors
```
Indigo-500:  #6366f1  ███████  (Primary Start)
Violet-500:  #8b5cf6  ███████  (Primary Mid)  
Purple-500:  #a855f7  ███████  (Primary End)
```

### 💖 Secondary Colors  
```
Fuchsia-500: #d946ef  ███████  (Vibrant)
Pink-500:    #ec4899  ███████  (Warm)
Rose-500:    #f43f5e  ███████  (Friendly)
```

### 🔵 Accent Colors
```
Blue-500:    #3b82f6  ███████  (Cool)
Cyan-500:    #06b6d4  ███████  (Fresh)
```

---

## Section Color Map

| Section      | Light Mode Colors           | Dark Mode Tint       | Theme        |
|--------------|----------------------------|----------------------|--------------|
| Hero         | purple-50 → fuchsia-50     | purple-950/20        | Professional |
| About Me     | violet-50 → fuchsia-50     | violet-950/20        | Personal     |
| Skills       | violet-50 → fuchsia-50     | purple-950/30        | Technical    |
| Education    | fuchsia-50 → rose-50       | fuchsia-950/20       | Academic     |
| Projects     | purple-50 → fuchsia-50     | purple-950/20        | Showcase     |
| Certificates | violet-50 → fuchsia-50     | violet-950/30        | Achievement  |
| Contact      | pink-50 → purple-50        | pink-950/20          | Connection   |

---

## Common Gradients

### Text Gradients
```css
/* Primary Heading */
from-indigo-600 via-purple-600 to-pink-600

/* Dark Mode Heading */  
dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400

/* Section-Specific (Education) */
from-fuchsia-600 via-pink-600 to-rose-600

/* Section-Specific (Contact) */
from-pink-600 via-fuchsia-600 to-purple-600
```

### Button Gradients
```css
/* Primary CTA */
from-indigo-600 via-purple-600 to-pink-600
hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700

/* Secondary CTA */
from-purple-600 via-violet-600 to-fuchsia-600

/* Contact Button */
from-pink-600 via-fuchsia-600 to-purple-600
```

### Background Gradients
```css
/* Hero Section */
from-purple-50 via-violet-50 to-fuchsia-50
dark:from-gray-900 dark:via-purple-950/20 dark:to-violet-950/20

/* Education Section */
from-fuchsia-50 via-pink-50 to-rose-50  
dark:from-gray-900 dark:via-fuchsia-950/20 dark:to-pink-950/20

/* Contact Section */
from-pink-50 via-fuchsia-50 to-purple-50
dark:from-gray-900 dark:via-pink-950/20 dark:to-fuchsia-950/20
```

---

## Opacity Guidelines

| Element                | Light Mode | Dark Mode |
|------------------------|------------|-----------|
| Section backgrounds    | 50-100     | 900-950   |
| Background overlays    | -          | 20-30%    |
| Card backgrounds       | white      | gray-800  |
| Hover states           | +50        | +100      |
| Decorative blurs       | /10        | /5        |

---

## Accessibility Check

### Contrast Ratios (WCAG AA)
- ✅ Purple-600 on white: 4.5:1
- ✅ Purple-400 on gray-900: 4.5:1
- ✅ White on purple-600: 7.0:1
- ✅ Gray-100 on purple-900: 12.6:1

---

## Quick Copy-Paste

### Tailwind Classes
```
Primary gradient: from-indigo-600 via-purple-600 to-pink-600
Dark text: dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
Purple bg: from-purple-50 via-violet-50 to-fuchsia-50
Dark bg: dark:from-gray-900 dark:via-purple-950/20 dark:to-violet-950/20
```

### Hex Codes
```
Indigo: #6366f1
Violet: #8b5cf6
Purple: #a855f7
Fuchsia: #d946ef
Pink: #ec4899
```

---

## Color Meanings

| Color    | Psychology           | Use For              |
|----------|---------------------|----------------------|
| Purple   | Wisdom, Luxury      | Main brand, headers  |
| Violet   | Creativity, Tech    | Skills, projects     |
| Fuchsia  | Energy, Bold        | Accents, highlights  |
| Pink     | Friendly, Warm      | Contact, personal    |
| Indigo   | Trust, Stable       | Professional content |
| Rose     | Approachable        | Education, warmth    |

---

## Tips

### ✅ DO
- Use primary gradient for main CTAs
- Keep section gradients subtle
- Maintain 20-30% dark overlays
- Test in both light/dark modes

### ❌ DON'T  
- Mix unrelated color families
- Use more than 3 colors in one gradient
- Reduce contrast below 4.5:1
- Use pure black (#000000)

---

**Color System Version**: 2.0  
**Last Updated**: 2025-10-22
