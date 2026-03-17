# Cloudscape v3.0.1174 Development Guide

## Installation
```bash
pnpm add @cloudscape-design/components @cloudscape-design/global-styles
```

## CSS Setup
Import CSS from: `@cloudscape-design/components/dist/styles.css` or similar.

## Critical Rules
Import the global styles in your root application file (_app.tsx or main entry point), then import individual components as needed throughout your application.

---

## Import Patterns

```tsx
// ✅ Use named imports from the main package entry point for better tree shaking and consistency
import { Alert, Button, Box } from '@cloudscape-design/components';

// ❌ Wrong
import Alert from '@cloudscape-design/components/alert';
```

```tsx
// ✅ Global styles must be imported in your root application file (_app.tsx or main entry) for proper theming
import '@cloudscape-design/global-styles/index.css';

// ❌ Wrong
import '@cloudscape-design/components/styles.css';
```

```tsx
// ✅ Named imports are preferred over namespace imports for better performance and clearer dependencies
import { AppLayout, BreadcrumbGroup } from '@cloudscape-design/components';

// ❌ Wrong
import * as Cloudscape from '@cloudscape-design/components';
```

## Component Examples

### Alert with Actions
Alert component with custom actions and dismissible functionality
```tsx
import { Alert, Button } from '@cloudscape-design/components';

function NotificationAlert() {
  return (
    <Alert
      type="success"
      dismissible
      header="Success!"
      action={
        <Button variant="primary" size="small">
          View details
        </Button>
      }
    >
      Your changes have been saved successfully.
    </Alert>
  );
}
```

### AppLayout with Navigation
Complete app layout with navigation sidebar and breadcrumb navigation
```tsx
import { AppLayout, BreadcrumbGroup, Button } from '@cloudscape-design/components';

function DashboardLayout({ children }) {
  return (
    <AppLayout
      navigationOpen={true}
      navigation={
        <div style={{ padding: '16px' }}>
          <Button>Dashboard</Button>
        </div>
      }
      breadcrumbs={
        <BreadcrumbGroup
          items={[
            { text: 'Home', href: '/' },
            { text: 'Dashboard', href: '/dashboard' }
          ]}
        />
      }
      content={children}
    />
  );
}
```

### AttributeEditor Form
Dynamic attribute editor for key-value pairs with add/remove functionality
```tsx
import { AttributeEditor, Button } from '@cloudscape-design/components';
import { useState } from 'react';

function TagEditor() {
  const [items, setItems] = useState([{ key: '', value: '' }]);
  
  return (
    <AttributeEditor
      items={items}
      onAddButtonClick={() => setItems([...items, { key: '', value: '' }])}
      onRemoveButtonClick={({ detail }) => {
        const newItems = [...items];
        newItems.splice(detail.itemIndex, 1);
        setItems(newItems);
      }}
      definition={[
        {
          label: 'Key',
          control: (item, itemIndex) => (
            <input
              value={item.key}
              onChange={(e) => {
                const newItems = [...items];
                newItems[itemIndex].key = e.target.value;
                setItems(newItems);
              }}
            />
          )
        },
        {
          label: 'Value',
          control: (item, itemIndex) => (
            <input
              value={item.value}
              onChange={(e) => {
                const newItems = [...items];
                newItems[itemIndex].value = e.target.value;
                setItems(newItems);
              }}
            />
          )
        }
      ]}
    />
  );
}
```

### Autosuggest Search
Autocomplete search input with dynamic filtering and suggestions
```tsx
import { Autosuggest } from '@cloudscape-design/components';
import { useState } from 'react';

function SearchAutocomplete() {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  
  const suggestions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' }
  ];
  
  return (
    <Autosuggest
      onChange={({ detail }) => setValue(detail.value)}
      value={value}
      options={options}
      onLoadItems={({ detail }) => {
        const filtered = suggestions.filter(item =>
          item.label.toLowerCase().includes(detail.filteringText.toLowerCase())
        );
        setOptions(filtered);
      }}
      placeholder="Search fruits..."
      empty="No matches found"
    />
  );
}
```

### Cards Collection with Filters
Responsive card collection with selection, badges, and empty state handling
```tsx
import { Cards, Badge, Box, Button, CollectionPreferences } from '@cloudscape-design/components';
import { useState } from 'react';

function ProductCards() {
  const [selectedItems, setSelectedItems] = useState([]);
  const products = [
    { id: '1', name: 'Product A', status: 'active', price: '$99' },
    { id: '2', name: 'Product B', status: 'inactive', price: '$149' }
  ];
  
  return (
    <Cards
      onSelectionChange={({ detail }) => setSelectedItems(detail.selectedItems)}
      selectedItems={selectedItems}
      ariaLabels={{
        itemSelectionLabel: (e, t) => `Select ${t.name}`,
        selectionGroupLabel: 'Item selection'
      }}
      cardDefinition={{
        header: item => item.name,
        sections: [
          {
            id: 'status',
            header: 'Status',
            content: item => <Badge color={item.status === 'active' ? 'green' : 'grey'}>{item.status}</Badge>
          },
          {
            id: 'price',
            header: 'Price',
            content: item => <Box fontSize="heading-m">{item.price}</Box>
          }
        ]
      }}
      cardsPerRow={[
        { cards: 1 },
        { minWidth: 500, cards: 2 }
      ]}
      items={products}
      loadingText="Loading products"
      selectionType="multi"
      trackBy="id"
      empty={
        <Box textAlign="center">
          <b>No products</b>
          <Box padding={{ bottom: 's' }} />
          <Button>Create product</Button>
        </Box>
      }
    />
  );
}
```

## Common Patterns

### Form Layout Pattern
```tsx
import { Box, ColumnLayout, Button, Checkbox } from '@cloudscape-design/components';

function FormSection() {
  return (
    <Box padding="l">
      <ColumnLayout columns={2} variant="text-grid">
        <div>
          <Checkbox>Enable notifications</Checkbox>
        </div>
        <div>
          <Button variant="primary">Save settings</Button>
        </div>
      </ColumnLayout>
    </Box>
  );
}
```

### Calendar Integration
```tsx
import { Calendar } from '@cloudscape-design/components';
import { useState } from 'react';

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState('');
  
  return (
    <Calendar
      onChange={({ detail }) => setSelectedDate(detail.value)}
      value={selectedDate}
      locale="en-US"
      startOfWeek={1}
    />
  );
}
```

### ButtonDropdown Menu
```tsx
import { ButtonDropdown } from '@cloudscape-design/components';

function ActionMenu() {
  return (
    <ButtonDropdown
      items={[
        { text: 'Edit', id: 'edit' },
        { text: 'Delete', id: 'delete', disabled: true },
        { text: 'Download', id: 'download' }
      ]}
      onItemClick={({ detail }) => console.log(detail.id)}
    >
      Actions
    </ButtonDropdown>
  );
}
```

### CodeEditor Setup
```tsx
import { CodeEditor } from '@cloudscape-design/components';
import { useState } from 'react';

function JSONEditor() {
  const [code, setCode] = useState('{\n  "example": "value"\n}');
  
  return (
    <CodeEditor
      ace={window.ace}
      language="json"
      value={code}
      onChange={({ detail }) => setCode(detail.value)}
      preferences={{
        fontSize: 14,
        tabSize: 2
      }}
      themes={{
        light: ['cloud9_day'],
        dark: ['cloud9_night']
      }}
    />
  );
}
```
