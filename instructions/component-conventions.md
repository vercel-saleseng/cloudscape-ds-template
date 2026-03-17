# Cloudscape Conventions

## Naming Conventions

**Components**
- PascalCase for component names: `UserTable`, `FormSection`, `HeaderNav`
- Suffix with functional type if unclear: `UserTableContainer`, `FormDialog`
- Private/internal components: prefix with underscore `_InternalRow`

**Props**
- camelCase for all prop names: `onSubmit`, `isVisible`, `maxItems`
- Boolean props: prefix with `is`, `has`, `can`: `isLoading`, `hasError`, `canDelete`
- Event handlers: `on` prefix followed by action: `onSubmit`, `onChange`, `onDismiss`

**Files & Folders**
- Component files: PascalCase matching component name: `Button.tsx`, `Modal.tsx`
- Utility/hook files: camelCase: `useTable.ts`, `formatDate.ts`
- Folders: kebab-case: `form-controls/`, `table-components/`
- CSS modules: `ComponentName.module.css`

**CSS Classes**
- kebab-case for all classes: `.button-primary`, `.form-error`, `.table-header`
- Namespace within component: `.button-container`, `.button-action`
- Avoid global classes; use CSS modules exclusively

## Import Patterns

```tsx
// ✅ CORRECT - Named imports from main package
import { Button, Modal, Table, Box } from '@cloudscape-design/components';
import { ChevronDownIcon } from '@cloudscape-design/components';

// ✅ CORRECT - Multiple icon imports
import { 
  CheckmarkIcon, 
  StatusIndicator,
  Icon 
} from '@cloudscape-design/components';

// ✅ CORRECT - CSS Modules
import styles from './Button.module.css';

// ❌ WRONG - Default imports
import Button from '@cloudscape-design/components';

// ❌ WRONG - Deep path imports
import { Button } from '@cloudscape-design/components/button';

// ❌ WRONG - Wildcard imports for components
import * as Components from '@cloudscape-design/components';
```

## Styling Approach

**CSS Modules Pattern**
```tsx
// Button.module.css
.buttonRoot {
  padding: var(--spacing-m);
  border-radius: var(--border-radius-default);
  font-family: var(--font-family-base);
}

.buttonPrimary {
  background-color: var(--color-background-button-primary);
  color: var(--color-text-button-primary);
}

.buttonPrimary:hover {
  background-color: var(--color-background-button-primary-hover);
}

.buttonDisabled {
  opacity: var(--opacity-disabled);
  cursor: not-allowed;
}
```

**Design Tokens**
- Use CSS custom properties (`--color-*`, `--spacing-*`, `--font-*`)
- Never hardcode colors, sizes, or spacing
- Reference Cloudscape design token documentation
- Common tokens: `--spacing-xs`, `--spacing-s`, `--spacing-m`, `--spacing-l`

**Theme Customization**
```tsx
import { applyDensity, applyMode } from '@cloudscape-design/global-styles';

// In root component or layout
applyMode('light'); // or 'dark'
applyDensity('compact'); // or 'comfortable'
```

**Inline Styles (Minimal)**
```tsx
// ✅ Use Box component for spacing/layout
<Box padding="m" margin={{ bottom: 's' }}>
  Content
</Box>

// ✅ CSS modules for styling
<div className={styles.container}>
  Content
</div>

// ❌ Avoid inline style objects
<div style={{ padding: '16px' }}>Content</div>
```

## Common Patterns

**Controlled Components**
```tsx
const [value, setValue] = useState('');

<Input
  value={value}
  onChange={(e) => setValue(e.detail.value)}
  placeholder="Enter text"
/>
```

**Event Handling**
```tsx
const handleSubmit = (event: FormEvent) => {
  event.preventDefault();
  // Handle submission
};

const handleModalDismiss = () => {
  setVisible(false);
};

<Button onClick={handleSubmit}>Submit</Button>
<Modal onDismiss={handleModalDismiss} visible={visible} />
```

**Composition with Box**
```tsx
<Box padding="l" margin={{ bottom: 'm' }}>
  <Button>Action</Button>
</Box>
```

**Accessibility Best Practices**
```tsx
// ✅ Always provide labels
<FormField label="Email Address" required>
  <Input type="email" />
</FormField>

// ✅ Use aria attributes for dynamic content
<Button ariaLabel="Close notification" onClick={dismiss}>
  <StatusIndicator type="success" />
</Button>

// ✅ Meaningful button text
<Button>Delete Item</Button> // Not "Click Here"
```

**Table with Selection**
```tsx
const [selectedItems, setSelectedItems] = useState<Row[]>([]);

<Table
  items={items}
  selectionType="multi"
  selectedItems={selectedItems}
  onSelectionChange={(e) => setSelectedItems(e.detail.selectedItems)}
  columnDefinitions={columns}
/>
```

## Best Practices

1. **Component Composition** - Build small, focused components; compose larger features from smaller pieces
2. **Prop Drilling Prevention** - Use Context API or state management for deeply nested prop passing
3. **Type Safety** - Always use TypeScript; define prop interfaces explicitly
4. **Event Naming** - Consistent `on*` naming; always use Cloudscape event detail patterns
5. **Error Boundaries** - Wrap feature sections with error boundaries; handle async errors gracefully
6. **Lazy Loading** - Use `React.lazy()` for route-based code splitting; defer non-critical imports
7. **Memoization** - Wrap expensive child components with `React.memo`; use `useCallback` for event handlers
8. **Responsive Design** - Test on mobile; use Cloudscape responsive utilities, avoid fixed widths
9. **Testing** - Test components in isolation; mock Cloudscape event handlers in unit tests
10. **Documentation** - Document non-obvious props; include usage examples in Storybook

## Example

**UserForm Component**

```tsx
// UserForm.tsx
import { useState } from 'react';
import {
  FormField,
  Input,
  Select,
  Button,
  Box,
  Alert,
  SpaceBetween,
} from '@cloudscape-design/components';
import { CheckmarkIcon } from '@cloudscape-design/components';
import styles from './UserForm.module.css';

interface UserFormProps {
  onSubmit: (user: UserData) => Promise<void>;
  initialUser?: UserData;
}

interface UserData {
  name: string;
  email: string;
  role: string;
}

export const UserForm: React.FC<UserFormProps> = ({
  onSubmit,
  initialUser,
}) => {
  const [formData, setFormData] = useState<UserData>(
    initialUser || { name: '', email: '', role: '' }
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (field: keyof UserData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.role) {
      setError('All fields are required');
      return;
    }

    setIsLoading(true);
    try {
      await onSubmit(formData);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box padding="l" className={styles.formRoot}>
      <SpaceBetween size="m" direction="vertical">
        {error && <Alert type="error">{error}</Alert>}
        {success && (
          <Alert type="success" icon={<CheckmarkIcon />}>
            User saved successfully
          </Alert>
        )}

        <FormField label="Full Name" required>
          <Input
            value={formData.name}
            onChange={(e) => handleChange('name', e.detail.value)}
            placeholder="John Doe"
            disabled={isLoading}
          />
        </FormField>

        <FormField label="Email Address" required>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.detail.value)}
            placeholder="user@example.com"
            disabled={isLoading}
          />
        </FormField>

        <FormField label="Role" required>
          <Select
            selectedOption={
              formData.role ? { value: formData.role, label: formData.role } : null
            }
            onChange={(e) => handleChange('role', e.detail.selectedOption.value || '')}
            options={[
              { label: 'Admin', value: 'admin' },
              { label: 'User', value: 'user' },
              { label: 'Guest', value: 'guest' },
            ]}
            disabled={isLoading}
          />
        </FormField>

        <Box className={styles.actions}>
          <Button
            variant="primary"
            onClick={handleSubmit}
            loading={isLoading}
          >
            Save User
          </Button>
        </Box>
      </SpaceBetween>
    </Box>
  );
};
```

**UserForm.module.css**

```css
.formRoot {
  max-width: 500px;
  background-color: var(--color-background-container-content);
  border-radius: var(--border-radius-default);
  border: 1px solid var(--color-border-divider-default);
}

.actions {
  display: flex;
  gap: var(--spacing-m);
  justify-content: flex-end;
  margin-top: var(--spacing-m);
}
```
