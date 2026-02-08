
---

```markdown
# 🅰️ Angular UI Core: Enterprise Component Library

A professional-grade repository of reusable, **Standalone Angular Components**. Designed for high-performance enterprise applications with a focus on OnPush change detection and strict typing.

---

## 🏛 Architecture
Each component follows the Angular folder-per-feature pattern, ensuring that logic, templates, and styles are encapsulated.

---

## 🚀 Key Features

* **Standalone Ready:** No unnecessary `NgModules`. Import only what you need.
* **OnPush Strategy:** Optimized for performance by reducing change detection cycles.
* **CVA Compatible:** Form components implement `ControlValueAccessor` for seamless integration with `ReactiveFormsModule`.
* **Tailwind/SCSS:** Flexible styling using CSS Variables or Tailwind utility classes.

---

## 📖 Usage Guide

### 1. Installation

Clone this repository into your workspace or add it as a Git Submodule:

```bash
git submodule add [https://github.com/SairajRajput12/usable-ui-components](https://github.com/SairajRajput12/usable-ui-components) src/app/shared/ui

```

### 2. Implementation

Since components are **Standalone**, simply import the specific component into your parent component's `imports` array:

```typescript
import { CustomButtonComponent } from '@shared/ui/button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CustomButtonComponent], // <--- Add here
  template: `
    <ui-button variant="primary" (btnClick)="onSave()">
      Save Changes
    </ui-button>
  `
})
export class DashboardComponent { ... }

```

---

## 🛠 Engineering Standards

To maintain professional quality, every component must adhere to:

| Feature | Standard |
| --- | --- |
| **Change Detection** | Must use `ChangeDetectionStrategy.OnPush` |
| **Encapsulation** | Must use `ViewEncapsulation.Emulated` or `None` (if global) |
| **Typing** | No `any` types; use Interfaces or Types for Inputs |
| **Accessibility** | Semantic HTML with appropriate ARIA labels |

---

## 🎨 Global Theme Configuration

Define your design tokens in `styles.scss` to power the components:

```scss
:root {
  --ui-primary: #3b82f6;
  --ui-secondary: #64748b;
  --ui-radius: 8px;
  --ui-font-family: 'Inter', sans-serif;
}

```

---

## 🤝 Adding New Components

1. Generate using CLI: `ng g c shared/components/name --standalone`
2. Ensure `OnPush` detection is set.
3. Add a brief usage example in the component's doc-block.
4. Verify accessibility using a screen reader or Axe DevTools.

---

**Maintained by [Your Name]** • 2026

```

---

### Why this works for Angular:
* **Git Submodule Mention:** For professional work, you often want to pull your UI repo into different projects without re-publishing to NPM every time. Submodules are great for this.
* **OnPush Emphasis:** Professional Angular devs look for `OnPush` immediately; it shows the components won't tank the app's performance.
* **CVA (Control Value Accessor):** This is the "secret sauce" for professional Angular forms. It allows your custom inputs to work with `formControlName`.

Would you like me to write the **TypeScript code for a "Base Input" component** that implements `ControlValueAccessor` so it works perfectly with Angular Reactive Forms?

```