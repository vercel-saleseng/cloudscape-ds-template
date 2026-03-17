# Cloudscape React API Guide

## Overview
Cloudscape is AWS's open-source design system for React applications. Components follow standard React patterns with controlled/uncontrolled component support, event handlers, and comprehensive accessibility features.

## Common Props

All Cloudscape components support standard React props:

```tsx
// Universal props
<Button
  id="my-button"
  className="custom-class"
  style={{ marginBottom: '10px' }}
  disabled={false}
  aria-label="Custom label"
/>
```

| Prop | Type | Description |
|------|------|-------------|
| `id` | string | HTML element ID |
| `className` | string | CSS class names |
| `style` | CSSProperties | Inline styles |
| `disabled` | boolean | Disable interaction |
| `readOnly` | boolean | Prevent modification |

## Controlled vs Uncontrolled Components

### Controlled Pattern
```tsx
import { Input } from '@cloudscape-design/components';

export function ControlledInput() {
  const [value, setValue] = useState('');

  return (
    <Input
      value={value}
      onChange={(event) => setValue(event.detail.value)}
      placeholder="Type something..."
    />
  );
}
```

### Uncontrolled Pattern
```tsx
export function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    console.log(inputRef.current?.value);
  };

  return (
    <>
      <Input
        ref={inputRef}
        defaultValue="initial value"
        placeholder="Type something..."
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}
```

## Event Handlers

Cloudscape components use `detail` property for accessing event data:

```tsx
// Input events
<Input onChange={(e) => console.log(e.detail.value)} />

// Select events
<Select
  onChange={(e) => console.log(e.detail.selectedOption)}
  options={[
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' }
  ]}
/>

// Checkbox events
<Checkbox onChange={(e) => console.log(e.detail.checked)} />

// Button click
<Button onClick={() => console.log('clicked')} />
```

| Component | Event | Detail Property |
|-----------|-------|-----------------|
| Input | onChange | `value: string` |
| Select | onChange | `selectedOption: Option` |
| Checkbox | onChange | `checked: boolean` |
| Radio | onChange | `value: string` |
| Textarea | onChange | `value: string` |
| Multiselect | onChange | `selectedOptions: Option[]` |

## Ref Forwarding

```tsx
import { forwardRef } from 'react';
import { Input } from '@cloudscape-design/components';

export const CustomInput = forwardRef(({ label, ...props }, ref) => (
  <Input
    ref={ref}
    label={label}
    {...props}
  />
));

// Usage
const inputRef = useRef(null);
<CustomInput ref={inputRef} label="Name" />
```

Common ref methods:
```tsx
inputRef.current?.focus();
inputRef.current?.select();
inputRef.current?.blur();
```

## Accessibility Props

```tsx
// ARIA labels
<Button aria-label="Close dialog">✕</Button>

// Live regions
<Alert ariaLive="polite" ariaAtomic={true}>
  Form updated successfully
</Alert>

// Form associations
<FormField label="Email" htmlFor="email-input">
  <Input id="email-input" type="email" />
</FormField>

// Descriptions
<Input
  ariaDescribedBy="hint-text"
  placeholder="Enter password"
/>
<p id="hint-text">Minimum 8 characters</p>
```

## Form Validation

```tsx
import { FormField, Input, Button } from '@cloudscape-design/components';

export function ValidatedForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!email.includes('@')) {
      newErrors.email = 'Invalid email format';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('Form valid, submitting...');
    }
  };

  return (
    <>
      <FormField
        label="Email"
        errorText={errors.email}
        error={!!errors.email}
      >
        <Input
          value={email}
          onChange={(e) => setEmail(e.detail.value)}
          type="email"
          placeholder="user@example.com"
        />
      </FormField>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}
```

## Common Component Patterns

### Form with Multiple Fields
```tsx
import {
  Form,
  FormField,
  Input,
  Select,
  Button,
  SpaceBetween
} from '@cloudscape-design/components';

export function MyForm() {
  const [formData, setFormData] = useState({
    name: '',
    country: null
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Form
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button variant="link">Cancel</Button>
          <Button variant="primary">Submit</Button>
        </SpaceBetween>
      }
    >
      <SpaceBetween size="m">
        <FormField label="Full Name" required>
          <Input
            value={formData.name}
            onChange={(e) => handleChange('name', e.detail.value)}
          />
        </FormField>
        
        <FormField label="Country" required>
          <Select
            selectedOption={formData.country}
            onChange={(e) => handleChange('country', e.detail.selectedOption)}
            options={[
              { label: 'USA', value: 'us' },
              { label: 'Canada', value: 'ca' }
            ]}
          />
        </FormField>
      </SpaceBetween>
    </Form>
  );
}
```

## Best Practices

1. **Always use FormField wrapper** for better accessibility
2. **Use SpaceBetween** for consistent spacing
3. **Prefer controlled components** in forms for validation
4. **Implement loading states** on async actions
5. **Provide meaningful error messages** via errorText prop
6. **Use ariaLabel/ariaDescribedBy** for complex inputs
7. **Test keyboard navigation** and screen reader compatibility

This guide covers the fundamental patterns for building accessible, maintainable UIs with Cloudscape React components.
