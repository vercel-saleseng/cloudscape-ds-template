# Cloudscape Icons Guide

## Importing

```tsx
import { Icon } from '@cloudscape-design/components';
```

**Critical:** Icons use the Icon namespace pattern. Access them as `Icon.IconName`, not as individual imports.

## Naming Patterns

Icons follow PascalCase naming within the Icon namespace:
- `Icon.Search` - Search functionality
- `Icon.Close` - Close/dismiss actions
- `Icon.Menu` - Menu navigation
- `Icon.Download` - Download actions
- `Icon.Upload` - Upload actions
- `Icon.Settings` - Settings/configuration
- `Icon.Bell` - Notifications
- `Icon.User` - User profiles
- `Icon.Calendar` - Date selection
- `Icon.Clock` - Time-related
- `Icon.CheckCircle` - Success states
- `Icon.Alert` - Warnings/errors
- `Icon.Copy` - Copy to clipboard
- `Icon.Share` - Sharing actions
- `Icon.ArrowRight` - Navigation arrows
- `Icon.Home` - Home/dashboard

## Sizing

Control icon size using the `size` prop (numeric values):

```tsx
<Icon.Search size={2} />        {/* Extra small */}
<Icon.Search size={3} />        {/* Small (default) */}
<Icon.Search size={4} />        {/* Medium */}
<Icon.Search size={5} />        {/* Large */}
```

## Usage with Components

### Buttons
```tsx
<Button type="button" variant="primary">
  <Icon.Download /> Download File
</Button>

<Button type="icon" variant="normal">
  <Icon.Close size={4} />
</Button>
```

### Navigation
```tsx
<SideNavigation
  items={[
    { type: 'link', href: '/', text: 'Home', icon: Icon.Home },
    { type: 'link', href: '/search', text: 'Search', icon: Icon.Search }
  ]}
/>
```

### Status Indicators
```tsx
<Box>
  <Icon.CheckCircle size={4} />
  Success!
</Box>

<Box>
  <Icon.Alert size={4} />
  Warning
</Box>
```

### Form Inputs
```tsx
<Input
  type="search"
  placeholder="Search..."
  inputPrefix={<Icon.Search />}
/>
```

## Accessibility

- Icons are **decorative by default** in most Cloudscape components
- Use `aria-label` for standalone icons with semantic meaning:

```tsx
<Button
  type="icon"
  variant="normal"
  aria-label="Close dialog"
>
  <Icon.Close />
</Button>
```

- Pair icons with text labels when possible for clarity
- Icons inherit text color; use `color` prop when needed:

```tsx
<Icon.CheckCircle size={4} color="success" />
```

## Common Status Icons

| Icon | Usage |
|------|-------|
| `Icon.CheckCircle` | Success/completion |
| `Icon.Alert` | Warning/caution |
| `Icon.Close` | Error/dismissal |
| `Icon.Bell` | Notifications |
| `Icon.Clock` | Pending/time |

All icons scale responsively and maintain proper alignment with surrounding content.
