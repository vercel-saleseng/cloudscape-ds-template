# Cloudscape v3.0.1174 Next.js Setup Guide

## Installation

```bash
pnpm add @cloudscape-design/components @cloudscape-design/global-styles
```

## CSS Setup

Import the design system's CSS in your `app/globals.css` or `app/layout.tsx`:

```tsx
// Try one of these common patterns:
import '@cloudscape-design/components/dist/styles.css';
// or
import '@cloudscape-design/components/styles.css';
// or
import '@cloudscape-design/components/dist/index.css';
```

Check the package's `dist` folder or `package.json` exports for the exact CSS path.

## Layout Setup

Wrap your app with the Cloudscape provider in `app/layout.tsx`.

## Important Notes

Import the global styles in your root application file (_app.tsx or main entry point), then import individual components as needed throughout your application.

---

## Basic Usage

```tsx

// pages/dashboard.tsx
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import Button from '@cloudscape-design/components/button';
import Cards from '@cloudscape-design/components/cards';

export default function DashboardPage() {
  const items = [
    { id: '1', title: 'Item 1', description: 'First card' },
    { id: '2', title: 'Item 2', description: 'Second card' },
    { id: '3', title: 'Item 3', description: 'Third card' }
  ];

  return (
    <Container header={<Header variant="h1">Dashboard</Header>}>
      <Cards
        items={items}
        cardDefinition={{
          header: item => item.title,
          sections: [{ id: 'description', content: item => item.description }]
        }}
        visibleSections={['description']}
      />
      <Button>Get Started</Button>
    </Container>
  );
}

```

## Client Components

```tsx

// components/InteractiveForm.tsx
'use client';

import { useState } from 'react';
import Form from '@cloudscape-design/components/form';
import FormField from '@cloudscape-design/components/form-field';
import Input from '@cloudscape-design/components/input';
import Select from '@cloudscape-design/components/select';
import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';

export default function InteractiveForm() {
  const [name, setName] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, selectedOption });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormField label="Full Name" description="Enter your full name">
          <Input
            value={name}
            onChange={e => setName(e.detail.value)}
            placeholder="John Doe"
          />
        </FormField>
        
        <FormField label="Category">
          <Select
            selectedOption={selectedOption}
            onChange={e => setSelectedOption(e.detail.selectedOption)}
            options={[
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' }
            ]}
            placeholder="Choose an option"
          />
        </FormField>

        <Button variant="primary">Submit</Button>
      </Form>
    </Container>
  );
}

```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Components not rendering or styles not applied | Ensure you import global styles in your root _app.tsx or main entry point: import '@cloudscape-design/global-styles/index.css'. This must be done before importing individual components. |
| onChange handlers not working correctly | Cloudscape uses detail objects in events. Access values via e.detail.value for Input, e.detail.selectedOption for Select, and similar patterns for other components. |
| TypeScript errors with event types | Import event types from '@cloudscape-design/components' or use the onChange callback signature that matches the component (e.g., React.ChangeEvent for native inputs vs Cloudscape event detail objects). |
| Components appearing unstyled or broken layout | Verify that the Cloudscape CSS is imported globally. Check that you're using v3.0.1174 and all components are from '@cloudscape-design/components' package. |
| Form data not updating state correctly | Use 'use client' directive at the top of components using useState. Always update state using the detail object: onChange={e => setState(e.detail.value)} |
| Select/Dropdown options not displaying | Ensure options are formatted as { label: string, value: string } objects. Check that selectedOption state matches one of the option values or is null/undefined initially. |
