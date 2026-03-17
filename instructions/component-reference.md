# Cloudscape Component Reference

Comprehensive reference with examples and common usage patterns.

> **Package:** `@cloudscape-design/components`
> **Icons:** `@cloudscape-design/components`
> **CSS:** css-modules


## Feedback Components

# Cloudscape React Components Documentation

## Alert
Displays a short, important message to attract user attention without interrupting the user's task. Alerts are persistent and remain visible until dismissed or replaced.

```tsx
import { Alert } from '@cloudscape-design/components';

<Alert type="success" dismissible onDismiss={() => {}}>
  Your changes have been saved successfully.
</Alert>
```

**Key Props:**
- `type: 'success' | 'info' | 'warning' | 'error'` – Alert severity level
- `dismissible?: boolean` – Allow user to close the alert
- `onDismiss?: () => void` – Callback when alert is dismissed
- `statusIconAriaLabel?: string` – Accessibility label for status icon
- `header?: string` – Optional alert title
- `children: ReactNode` – Alert message content

---

## Flashbar
Displays a stack of flash messages for notifications, typically positioned at the top or bottom of the page. Messages are usually auto-dismissing and appear in a queue.

```tsx
import { Flashbar } from '@cloudscape-design/components';

<Flashbar items={[
  {
    type: 'success',
    content: 'Operation completed',
    dismissible: true,
    id: 'msg-1'
  }
]} />
```

**Key Props:**
- `items: FlashbarItem[]` – Array of flash messages to display
- `stackItems?: boolean` – Stack messages vertically
- `items[].type: 'success' | 'info' | 'warning' | 'error'` – Message severity
- `items[].content: string | ReactNode` – Message text or component
- `items[].dismissible?: boolean` – Allow dismissal of this message
- `items[].id: string` – Unique identifier for the message

---

## HelpPanel
Side panel for contextual help and documentation. Usually positioned on the right side and contains guides, documentation, or tutorial content related to the current page.

```tsx
import { HelpPanel } from '@cloudscape-design/components';

<HelpPanel header="Getting Started" footer={<a href="#">Learn more</a>}>
  <p>Follow these steps to set up your account...</p>
</HelpPanel>
```

**Key Props:**
- `header: string` – Panel title
- `children: ReactNode` – Help content
- `footer?: ReactNode` – Optional footer with links or actions
- `loading?: boolean` – Show loading state
- `closeButtonAriaLabel?: string` – Accessibility label for close button

---

## Hotspot
Highlights a UI element to draw attention and guide users to specific features. Often used in tutorials or onboarding flows.

```tsx
import { Hotspot } from '@cloudscape-design/components';

<Hotspot side="right" direction="down">
  <button>Click me</button>
</Hotspot>
```

**Key Props:**
- `children: ReactNode` – Element to highlight
- `side?: 'left' | 'right' | 'top' | 'bottom'` – Position relative to element
- `direction?: 'up' | 'down' | 'left' | 'right'` – Pointer direction
- `ariaLabel?: string` – Accessibility description

---

## ProgressBar
Shows the progress of an operation as a visual bar. Supports both determinate (percentage-based) and indeterminate (unknown duration) progress.

```tsx
import { ProgressBar } from '@cloudscape-design/components';

<ProgressBar value={65} label="Upload progress" />
```

**Key Props:**
- `value?: number` – Progress percentage (0-100) for determinate state
- `label?: string` – Text label displayed above the bar
- `description?: string` – Additional descriptive text
- `variant?: 'standalone' | 'key-value'` – Visual style variant
- `additionalInfo?: string` – Text displayed below the bar
- `status?: 'in-progress' | 'success' | 'error'` – Visual status indicator

---

## Spinner
Loading indicator displayed while content is loading or an operation is in progress. Shows a rotating animation to indicate activity.

```tsx
import { Spinner } from '@cloudscape-design/components';

<Spinner size="large" />
```

**Key Props:**
- `size?: 'small' | 'normal' | 'large'` – Spinner dimensions
- `variant?: 'normal' | 'standalone'` – Visual presentation style
- `delay?: number` – Delay before spinner appears (milliseconds)

---

## Tutorial
Guided tutorial component for onboarding that walks users through features step-by-step. Typically includes previous/next buttons and progress indicators.

```tsx
import { Tutorial } from '@cloudscape-design/components';

<Tutorial
  tutorials={[
    { title: 'Step 1', description: 'First step content' },
    { title: 'Step 2', description: 'Second step content' }
  ]}
  currentTutorial={0}
  onExitTutorial={() => {}}
/>
```

**Key Props:**
- `tutorials: TutorialPanel[]` – Array of tutorial steps
- `tutorials[].title: string` – Step title
- `tutorials[].description: string | ReactNode` – Step content
- `currentTutorial: number` – Active step index
- `onExitTutorial: () => void` – Callback when user exits tutorial
- `onFinish?: () => void` – Callback when tutorial completes
- `i18nStrings?: TutorialI18nStrings` – Localization strings

---

## AppLayoutNotifications
Notifications component for AppLayout that integrates with the layout's header area. Displays notifications, alerts, and other interactive messages.

```tsx
import { AppLayoutNotifications } from '@cloudscape-design/components';

<AppLayoutNotifications
  notifications={[
    {
      type: 'info',
      content: 'System update available',
      id: 'notif-1'
    }
  ]}
/>
```

**Key Props:**
- `notifications: Notification[]` – Array of notifications to display
- `notifications[].type: 'success' | 'info' | 'warning' | 'error'` – Notification type
- `notifications[].content: string | ReactNode` – Notification message
- `notifications[].id: string` – Unique notification identifier
- `notifications[].dismissible?: boolean` – Allow dismissal
- `onNotificationDismiss?: (id: string) => void` – Dismiss callback


## Layout Components

# Cloudscape React Layout Components

## AppLayout
Provides the overall page layout structure with navigation, tools panel, breadcrumbs, and content areas. Serves as the primary container for multi-section layouts with sidebar navigation and optional split panels.

```tsx
import { AppLayout } from '@cloudscape-design/components';

<AppLayout
  navigation={<Navigation />}
  breadcrumbs={<BreadcrumbGroup items={[]} />}
  tools={<div>Tools Panel</div>}
  toolsHide={false}
  content={<div>Main Content</div>}
/>
```

**Key Props:**
- `content: ReactNode` – Main content area
- `navigation?: ReactNode` – Left navigation panel
- `tools?: ReactNode` – Right tools panel
- `toolsHide?: boolean` – Hide/show tools panel
- `breadcrumbs?: ReactNode` – Breadcrumb navigation above content
- `notifications?: ReactNode` – Notification area
- `maxContentWidth?: number` – Maximum width of content
- `disableBodyScroll?: boolean` – Disable scrolling on body element

---

## Box
Basic container component with standardized spacing and layout props. Provides flexible layout with margin, padding, and display utilities for simple content wrapping.

```tsx
import { Box } from '@cloudscape-design/components';

<Box margin="m" padding="l" color="text-body-secondary">
  Box content with spacing
</Box>
```

**Key Props:**
- `margin?: string` – Margin values (xs, s, m, l, xl, xxl)
- `padding?: string` – Padding values (xs, s, m, l, xl, xxl)
- `color?: string` – Text color variants
- `display?: string` – Display property (block, inline, inline-block)
- `variant?: string` – Pre-defined styling variants
- `className?: string` – Additional CSS classes

---

## ColumnLayout
Arranges content in responsive columns with automatic wrapping and consistent column widths. Adapts column count based on screen size for responsive designs.

```tsx
import { ColumnLayout } from '@cloudscape-design/components';

<ColumnLayout columns={3} variant="text-grid">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</ColumnLayout>
```

**Key Props:**
- `columns?: number` – Number of columns (1-4)
- `variant?: string` – Display variant (default, text-grid)
- `borders?: string` – Border visibility (vertical, horizontal, both)
- `disableGutters?: boolean` – Remove spacing between columns
- `children: ReactNode` – Column content

---

## Container
Groups related content with optional header and footer sections. Provides visual containment with customizable background and footer styling.

```tsx
import { Container } from '@cloudscape-design/components';

<Container
  header={<Header variant="h2">Section Title</Header>}
  footer={<div>Footer content</div>}
>
  Container content
</Container>
```

**Key Props:**
- `header?: ReactNode` – Header section
- `footer?: ReactNode` – Footer section
- `disableContentPaddings?: boolean` – Remove internal padding
- `variant?: string` – Visual style (default, stacked)
- `children: ReactNode` – Main content area

---

## ContentLayout
Provides structure for page content with header area, main content, and optional secondary content. Establishes consistent spacing and alignment for page-level layouts.

```tsx
import { ContentLayout } from '@cloudscape-design/components';

<ContentLayout
  header={<Header variant="h1">Page Title</Header>}
>
  Main page content
</ContentLayout>
```

**Key Props:**
- `header?: ReactNode` – Page header with title
- `defaultPadding?: boolean` – Apply default padding
- `children: ReactNode` – Main content area

---

## Grid
CSS Grid-based layout component for advanced multi-dimensional layouts. Allows fine-grained control over grid columns, rows, and gap spacing.

```tsx
import { Grid } from '@cloudscape-design/components';

<Grid gridDefinition={[{ colspan: 6 }, { colspan: 6 }]} gap="s">
  <div>Left column</div>
  <div>Right column</div>
</Grid>
```

**Key Props:**
- `gridDefinition: Array<{colspan?: number; rowspan?: number}>` – Column definitions for each child
- `gap?: string` – Gap between items (xxs, xs, s, m, l, xl, xxl)
- `disableGutters?: boolean` – Remove gaps between items
- `children: ReactNode` – Grid items

---

## SpaceBetween
Adds consistent spacing between child elements in a stack. Applies uniform margin spacing in vertical or horizontal direction without requiring margin utilities on children.

```tsx
import { SpaceBetween } from '@cloudscape-design/components';

<SpaceBetween size="m" direction="vertical">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</SpaceBetween>
```

**Key Props:**
- `size?: string` – Spacing size (xxs, xs, s, m, l, xl, xxl)
- `direction?: string` – Stack direction (vertical, horizontal)
- `children: ReactNode` – Child elements to space

---

## SplitPanel
Resizable panel that splits the layout into two sections with adjustable proportions. Supports collapsible header with customizable width persistence.

```tsx
import { SplitPanel } from '@cloudscape-design/components';

<SplitPanel
  header="Panel Title"
  i18nStrings={{hidePreferencesLabel: 'Hide'}}
>
  Split panel content
</SplitPanel>
```

**Key Props:**
- `header?: string` – Panel header text
- `i18nStrings?: Object` – Localization strings
- `hidePreferencesButton?: boolean` – Hide preferences toggle
- `disableHeaderPaddings?: boolean` – Remove header padding
- `size?: number` – Panel width in pixels
- `children: ReactNode` – Panel content


## Input Components

# Cloudscape React Components Documentation

## AttributeEditor
Allows users to add, edit, and remove key-value pairs or attributes in a structured format. Useful for managing configurations, metadata, or custom properties with validation and flexible editing modes.

```tsx
import { AttributeEditor } from '@cloudscape-design/components';

<AttributeEditor
  items={[{ key: 'name', value: 'John' }]}
  onChange={({ detail }) => setItems(detail.items)}
  addButtonText="Add attribute"
  removeButtonText="Remove"
  definition={[
    { label: 'Key', control: input => input },
    { label: 'Value', control: input => input }
  ]}
/>
```

**Key Props:**
- `items: Array<Record<string, string>>` – Array of key-value pair objects
- `onChange: (event: AttributeEditorChangeDetail) => void` – Fired when items change
- `definition: Array<{ label: string; control: (input: any) => ReactNode }>` – Column definitions
- `addButtonText?: string` – Label for add button
- `removeButtonText?: string` – Label for remove button
- `disableAddButton?: boolean` – Disable adding new items

---

## Autosuggest
Text input with suggestions that appear as the user types, filtering options dynamically. Essential for search experiences and autocomplete functionality with keyboard navigation support.

```tsx
import { Autosuggest } from '@cloudscape-design/components';

<Autosuggest
  value={value}
  onChange={({ detail }) => setValue(detail.value)}
  onLoadItems={({ detail }) => fetchSuggestions(detail.filteringText)}
  options={[
    { value: 'option1' },
    { value: 'option2' }
  ]}
  placeholder="Search..."
/>
```

**Key Props:**
- `value: string` – Current input value
- `onChange: (event: AutosuggestChangeDetail) => void` – Fired on value change
- `onLoadItems: (event: AutosuggestLoadItemsDetail) => void` – Fired to load suggestions
- `options: Array<{ value: string; description?: string; tags?: string[] }>` – Suggestion items
- `placeholder?: string` – Input placeholder text
- `disabled?: boolean` – Disable input
- `statusText?: string` – Loading/status message

---

## Button
Clickable element that triggers an action or navigates to a destination. Supports multiple variants for different visual emphasis and use cases.

```tsx
import { Button } from '@cloudscape-design/components';

<Button onClick={handleClick} variant="primary">
  Submit
</Button>
```

**Key Props:**
- `onClick?: (event: ButtonClickDetail) => void` – Click handler
- `variant?: 'primary' | 'normal' | 'secondary' | 'icon' | 'inline-icon'` – Visual style
- `href?: string` – Link destination
- `target?: string` – Link target (e.g., '_blank')
- `disabled?: boolean` – Disable button
- `loading?: boolean` – Show loading state
- `iconName?: string` – Icon from Cloudscape icon library
- `iconAlign?: 'left' | 'right'` – Icon position

---

## ButtonDropdown
Button that opens a dropdown menu with action options when clicked. Ideal for grouping related actions under a single button to reduce UI clutter.

```tsx
import { ButtonDropdown } from '@cloudscape-design/components';

<ButtonDropdown
  items={[
    { id: 'edit', text: 'Edit' },
    { id: 'delete', text: 'Delete', disabled: true }
  ]}
  onItemClick={({ detail }) => handleAction(detail.id)}
>
  Actions
</ButtonDropdown>
```

**Key Props:**
- `items: Array<{ id: string; text: string; disabled?: boolean; href?: string }>` – Menu items
- `onItemClick: (event: ButtonDropdownClickDetail) => void` – Item click handler
- `variant?: 'primary' | 'normal' | 'icon' | 'inline-icon'` – Button style
- `disabled?: boolean` – Disable dropdown
- `expandableGroups?: boolean` – Enable groupable items
- `expandToViewport?: boolean` – Dropdown expands to viewport

---

## Calendar
Displays a month calendar for date selection with navigation between months and years. Supports single/range selection with keyboard navigation and accessible date picking.

```tsx
import { Calendar } from '@cloudscape-design/components';

<Calendar
  value={selectedDate}
  onChange={({ detail }) => setSelectedDate(detail.value)}
  locale="en-US"
/>
```

**Key Props:**
- `value: string` – Selected date (ISO 8601 format: 'YYYY-MM-DD')
- `onChange: (event: CalendarChangeDetail) => void` – Selection change handler
- `locale?: string` – Locale for formatting (e.g., 'en-US')
- `todayAriaLabel?: string` – Accessibility label for today button
- `previousMonthAriaLabel?: string` – Previous month navigation label
- `nextMonthAriaLabel?: string` – Next month navigation label
- `disabled?: boolean` – Disable calendar interaction

---

## Checkbox
Allows users to select one or more options from a set independently. Supports checked, unchecked, and indeterminate states for flexible selection patterns.

```tsx
import { Checkbox } from '@cloudscape-design/components';

<Checkbox
  checked={isChecked}
  onChange={({ detail }) => setIsChecked(detail.checked)}
  indeterminate={false}
>
  Accept terms and conditions
</Checkbox>
```

**Key Props:**
- `checked: boolean` – Checkbox state
- `onChange: (event: CheckboxChangeDetail) => void` – State change handler
- `indeterminate?: boolean` – Indeterminate state (partially selected)
- `disabled?: boolean` – Disable checkbox
- `description?: string` – Helper text below label
- `ariaLabel?: string` – Accessibility label

---

## CodeEditor
Code editing component with syntax highlighting, line numbers, and support for multiple languages. Includes theme options and accessibility features for editing code snippets.

```tsx
import { CodeEditor } from '@cloudscape-design/components';

<CodeEditor
  value={code}
  onChange={({ detail }) => setCode(detail.value)}
  language="javascript"
  themes={{ light: 'vs', dark: 'vs-dark' }}
/>
```

**Key Props:**
- `value: string` – Editor content
- `onChange: (event: CodeEditorChangeDetail) => void` – Content change handler
- `language: string` – Programming language for syntax highlighting
- `themes: { light: string; dark: string }` – Theme names
- `ace?: any` – Ace editor instance reference
- `onDelayedChange?: (event: CodeEditorChangeDetail) => void` – Debounced change handler
- `loading?: boolean` – Loading state

---

## DateInput
Text input for entering dates with validation, format enforcement, and optional calendar picker integration. Supports flexible date formats and clear button for easy value reset.

```tsx
import { DateInput } from '@cloudscape-design/components';

<DateInput
  value={dateValue}
  onChange={({ detail }) => setDateValue(detail.value)}
  placeholder="YYYY-MM-DD"
  openCalendarAriaLabel="Open calendar"
/>
```

**Key Props:**
- `value: string` – Current date value (ISO 8601 format)
- `onChange: (event: DateInputChangeDetail) => void` – Value change handler
- `placeholder?: string` – Input placeholder text
- `disabled?: boolean` – Disable input
- `readOnly?: boolean` – Read-only mode
- `autoFocus?: boolean` – Auto-focus on mount
- `ariaLabel?: string` – Accessibility label
- `onBlur?: () => void` – Blur event handler

# Cloudscape React Form Components

## DatePicker
Input field with calendar dropdown for selecting a single date. Users can type dates directly or use the calendar interface to navigate and select dates.

```tsx
import { DatePicker } from '@cloudscape-design/components';

<DatePicker
  value="2024-01-15"
  onChange={(event) => console.log(event.detail.value)}
  placeholder="YYYY-MM-DD"
/>
```

**Key Props:**
- `value: string` – The selected date in ISO format (YYYY-MM-DD)
- `onChange: (event: { detail: { value: string } }) => void` – Callback when date changes
- `placeholder?: string` – Placeholder text for input
- `disabled?: boolean` – Disables the input
- `readOnly?: boolean` – Makes input read-only
- `minDate?: string` – Minimum selectable date
- `maxDate?: string` – Maximum selectable date

---

## DateRangePicker
Input for selecting a date range with dual calendar dropdowns. Allows users to pick both start and end dates through typing or calendar navigation.

```tsx
import { DateRangePicker } from '@cloudscape-design/components';

<DateRangePicker
  value={{
    startDate: "2024-01-01",
    endDate: "2024-01-31"
  }}
  onChange={(event) => console.log(event.detail.value)}
  placeholder="YYYY-MM-DD – YYYY-MM-DD"
  relativeOptions={[
    { key: "previous-7-days", label: "Previous 7 days" }
  ]}
/>
```

**Key Props:**
- `value: { startDate: string; endDate: string }` – Selected date range in ISO format
- `onChange: (event: { detail: { value } }) => void` – Callback when range changes
- `placeholder?: string` – Placeholder text for input
- `disabled?: boolean` – Disables the input
- `readOnly?: boolean` – Makes input read-only
- `minDate?: string` – Minimum selectable date
- `maxDate?: string` – Maximum selectable date
- `relativeOptions?: RelativeOption[]` – Preset date range options

---

## FileUpload
Allows users to upload files through drag-and-drop or file browser. Supports file validation and displays upload progress.

```tsx
import { FileUpload } from '@cloudscape-design/components';

<FileUpload
  value={[]}
  onChange={(event) => console.log(event.detail.value)}
  accept="image/*,.pdf"
  multiple={true}
/>
```

**Key Props:**
- `value: File[]` – Array of selected files
- `onChange: (event: { detail: { value: File[] } }) => void` – Callback when files change
- `accept?: string` – Accepted file types (MIME types or extensions)
- `multiple?: boolean` – Allow multiple file selection
- `disabled?: boolean` – Disables the input
- `showFileSize?: boolean` – Display file sizes
- `tokenLimit?: number` – Maximum number of files

---

## Form
Container for form fields with standardized layout and validation handling. Provides consistent spacing and alignment for grouped form inputs.

```tsx
import { Form } from '@cloudscape-design/components';

<Form
  actions={
    <Button variant="primary">Submit</Button>
  }
>
  <FormField label="Email">
    <Input value="" />
  </FormField>
</Form>
```

**Key Props:**
- `actions?: ReactNode` – Form action buttons (typically Submit/Cancel)
- `children: ReactNode` – Form field elements
- `errorText?: string` – Error message for the entire form
- `variant?: "standalone" | "embedded"` – Layout style

---

## FormField
Wrapper for form inputs with label, description, and error handling. Provides consistent styling and accessibility features for individual form controls.

```tsx
import { FormField } from '@cloudscape-design/components';

<FormField
  label="Username"
  description="Enter your username (3-20 characters)"
  errorText={error}
>
  <Input value={username} onChange={handleChange} />
</FormField>
```

**Key Props:**
- `label: string` – Label text for the field
- `description?: string` – Helper text displayed below label
- `errorText?: string` – Error message (displays when present)
- `children: ReactNode` – Form control element
- `required?: boolean` – Shows required indicator
- `stretch?: boolean` – Makes field full width
- `constrainedWidth?: boolean` – Limits field width

---

## Input
Single-line text input field for basic text entry. Supports various input types and keyboard interactions.

```tsx
import { Input } from '@cloudscape-design/components';

<Input
  value={text}
  onChange={(event) => setText(event.detail.value)}
  placeholder="Enter text..."
  type="text"
/>
```

**Key Props:**
- `value: string` – Current input value
- `onChange: (event: { detail: { value: string } }) => void` – Callback on value change
- `placeholder?: string` – Placeholder text
- `type?: string` – Input type (text, email, password, number, etc.)
- `disabled?: boolean` – Disables the input
- `readOnly?: boolean` – Makes input read-only
- `clearable?: boolean` – Shows clear button when focused
- `autoComplete?: string` – Autocomplete attribute value

---

## Multiselect
Dropdown for selecting multiple options with search and filtering. Supports custom rendering and complex option structures.

```tsx
import { Multiselect } from '@cloudscape-design/components';

<Multiselect
  selectedOptions={[{ label: "Option 1", value: "1" }]}
  onChange={(event) => console.log(event.detail.selectedOptions)}
  options={[
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" }
  ]}
  placeholder="Select options..."
/>
```

**Key Props:**
- `selectedOptions: Option[]` – Array of currently selected options
- `onChange: (event: { detail: { selectedOptions: Option[] } }) => void` – Callback on selection change
- `options: Option[]` – Array of available options
- `placeholder?: string` – Placeholder text
- `disabled?: boolean` – Disables the dropdown
- `loadingText?: string` – Text shown while loading
- `filteringType?: "auto" | "manual"` – Search behavior
- `deselectAriaLabel?: string` – Accessibility label for deselect button

---

## PromptInput
Specialized input for AI prompt interactions with enhanced UX for large text. Supports auto-expanding height and context awareness.

```tsx
import { PromptInput } from '@cloudscape-design/components';

<PromptInput
  value={prompt}
  onChange={(event) => setPrompt(event.detail.value)}
  placeholder="Enter your prompt..."
  actionButtonAriaLabel="Send prompt"
/>
```

**Key Props:**
- `value: string` – Current prompt text
- `onChange: (event: { detail: { value: string } }) => void` – Callback on text change
- `onAction?: () => void` – Callback when action button clicked
- `placeholder?: string` – Placeholder text
- `disabled?: boolean` – Disables the input
- `actionButtonAriaLabel?: string` – Accessibility label for action button
- `maxLength?: number` – Maximum character length
- `autoFocus?: boolean` – Focus input on mount

# Cloudscape React Components Documentation

## PropertyFilter
Advanced filtering component for building complex queries with multiple conditions. Enables users to create sophisticated filter expressions with support for properties, operators, and values.

```tsx
import { PropertyFilter } from '@cloudscape-design/components';

<PropertyFilter
  query={query}
  onChange={({ detail }) => setQuery(detail)}
  propertyOptions={properties}
  filteringOptions={filterOptions}
  virtualScroll
/>
```

**Key Props:**
- `query: PropertyFilterQuery` – Current filter query state
- `onChange: (event: PropertyFilterChangeDetail) => void` – Callback when filter changes
- `propertyOptions: PropertyFilterOption[]` – Available properties to filter by
- `filteringOptions: PropertyFilterOption[]` – Available operators and values
- `virtualScroll?: boolean` – Enable virtual scrolling for large lists
- `disabled?: boolean` – Disable the component
- `expandToViewport?: boolean` – Expand dropdown to viewport

---

## RadioGroup
Group of radio buttons for selecting a single option from multiple choices. Only one radio button can be selected at a time.

```tsx
import { RadioGroup } from '@cloudscape-design/components';

<RadioGroup
  value={selectedValue}
  onChange={({ detail }) => setSelectedValue(detail.value)}
  items={[
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' }
  ]}
/>
```

**Key Props:**
- `value: string` – Currently selected option value
- `onChange: (event: RadioGroupChangeDetail) => void` – Callback on selection change
- `items: RadioGroupItem[]` – Array of radio button options
- `disabled?: boolean` – Disable all radio buttons
- `ariaLabel?: string` – Accessibility label
- `ariaRequired?: boolean` – Mark as required for accessibility

---

## S3ResourceSelector
Specialized component for selecting AWS S3 resources including buckets, objects, and folders. Provides browsing and searching capabilities for S3.

```tsx
import { S3ResourceSelector } from '@cloudscape-design/components';

<S3ResourceSelector
  resource={selectedResource}
  onChange={({ detail }) => setSelectedResource(detail.resource)}
  selectableItemsTypes={['buckets', 'objects']}
  bucketName={bucketName}
/>
```

**Key Props:**
- `resource: S3Resource` – Currently selected S3 resource
- `onChange: (event: S3ResourceSelectorChangeDetail) => void` – Callback on resource selection
- `selectableItemsTypes: string[]` – Types of items selectable: 'buckets', 'objects', 'versions'
- `bucketName?: string` – Pre-selected bucket name
- `objectsIsLoading?: boolean` – Loading state for object list
- `viewHref?: string` – Href for S3 console link
- `disabled?: boolean` – Disable the component

---

## Select
Dropdown for selecting a single option from a list. Supports filtering, custom options, and async loading.

```tsx
import { Select } from '@cloudscape-design/components';

<Select
  selectedOption={selected}
  onChange={({ detail }) => setSelected(detail.selectedOption)}
  options={[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]}
  placeholder="Choose an option"
/>
```

**Key Props:**
- `selectedOption: SelectOption | null` – Currently selected option
- `onChange: (event: SelectChangeDetail) => void` – Callback on selection
- `options: SelectOption[]` – Available options to select
- `placeholder?: string` – Placeholder text
- `disabled?: boolean` – Disable the select
- `isLoading?: boolean` – Show loading state
- `filteringType?: 'auto' | 'manual'` – Filtering behavior
- `expandToViewport?: boolean` – Expand dropdown to viewport

---

## Slider
Input for selecting a value from a range using a slider control. Supports single value or range selection.

```tsx
import { Slider } from '@cloudscape-design/components';

<Slider
  value={value}
  onChange={({ detail }) => setValue(detail.value)}
  min={0}
  max={100}
  step={5}
/>
```

**Key Props:**
- `value: number` – Current slider value
- `onChange: (event: SliderChangeDetail) => void` – Callback when value changes
- `min: number` – Minimum value
- `max: number` – Maximum value
- `step?: number` – Increment step size
- `disabled?: boolean` – Disable the slider
- `ariaLabel?: string` – Accessibility label
- `ariaValuetext?: string` – Accessibility value description

---

## TagEditor
Allows users to add, edit, and remove tags with validation. Supports custom formatting and constraints.

```tsx
import { TagEditor } from '@cloudscape-design/components';

<TagEditor
  tags={tags}
  onChange={({ detail }) => setTags(detail.tags)}
  tagLimit={50}
  allowedCharacterPattern="^[a-zA-Z0-9._-]*$"
/>
```

**Key Props:**
- `tags: Tag[]` – Array of current tags
- `onChange: (event: TagEditorChangeDetail) => void` – Callback when tags change
- `tagLimit?: number` – Maximum number of tags allowed
- `allowedCharacterPattern?: string` – Regex pattern for tag validation
- `keysAreCaseSensitive?: boolean` – Case sensitivity for keys
- `keysSyntaxDescription?: string` – Help text for key format
- `disabled?: boolean` – Disable tag editing

---

## Textarea
Multi-line text input field for longer text content. Supports auto-expansion and validation.

```tsx
import { Textarea } from '@cloudscape-design/components';

<Textarea
  value={text}
  onChange={({ detail }) => setText(detail.value)}
  placeholder="Enter your message..."
  rows={5}
/>
```

**Key Props:**
- `value: string` – Current textarea value
- `onChange: (event: TextareaChangeDetail) => void` – Callback on value change
- `placeholder?: string` – Placeholder text
- `disabled?: boolean` – Disable the textarea
- `rows?: number` – Number of visible rows
- `maxLength?: number` – Maximum character limit
- `readOnly?: boolean` – Read-only state
- `ariaLabel?: string` – Accessibility label

---

## Tiles
Selectable tile options displayed as cards in a grid layout. Supports single or multiple selection.

```tsx
import { Tiles } from '@cloudscape-design/components';

<Tiles
  value={selected}
  onChange={({ detail }) => setSelected(detail.value)}
  items={[
    { label: 'Tile 1', value: 'tile1', description: 'Description' },
    { label: 'Tile 2', value: 'tile2', description: 'Description' }
  ]}
/>
```

**Key Props:**
- `value: string` – Currently selected tile value
- `onChange: (event: TilesChangeDetail) => void` – Callback on tile selection
- `items: TileItem[]` – Array of tile options
- `columns?: number` – Number of columns in grid
- `disabled?: boolean` – Disable all tiles
- `ariaLabel?: string` – Accessibility label

# Cloudscape React Components

## TimeInput
An input field component that allows users to enter and select time values in a standardized format. It provides validation, formatting, and optional time picker functionality for consistent time entry across applications.

```tsx
import { TimeInput } from '@cloudscape-design/components';

<TimeInput
  value="14:30"
  onChange={(e) => console.log(e.detail.value)}
  placeholder="HH:mm"
/>
```

**Key Props:**
- `value: string` – The current time value in HH:mm or HH:mm:ss format
- `onChange: (event: TimeInputChangeDetail) => void` – Callback fired when time value changes
- `placeholder?: string` – Placeholder text displayed in the input field
- `disabled?: boolean` – Disables the input field
- `readOnly?: boolean` – Makes the input read-only
- `format?: string` – Time format specification (default: "HH:mm")
- `autoFocus?: boolean` – Automatically focuses the input on mount

---

## Toggle
A switch component that allows users to toggle between two states (on/off or true/false). Commonly used for enabling/disabling features or settings with clear visual feedback.

```tsx
import { Toggle } from '@cloudscape-design/components';

<Toggle
  checked={isEnabled}
  onChange={(e) => setIsEnabled(e.detail.checked)}
>
  Enable notifications
</Toggle>
```

**Key Props:**
- `checked: boolean` – The current toggle state (true = on, false = off)
- `onChange: (event: ToggleChangeDetail) => void` – Callback fired when toggle state changes
- `disabled?: boolean` – Disables the toggle interaction
- `ariaLabel?: string` – Accessible label for screen readers
- `ariaLabelledby?: string` – ID of element labeling the toggle
- `name?: string` – HTML name attribute for form submission


## Display Components

# Cloudscape React Components Documentation

## Badge

A small visual indicator used to display status, count, or label information. Commonly used for notifications, status badges, or category labels in lists and cards.

```tsx
import { Badge } from '@cloudscape-design/components';

<Badge color="blue" content="New" />
```

**Key Props:**
- `content: string` – Text displayed in the badge
- `color?: string` – Badge color; options: `"blue"`, `"red"`, `"green"`, `"grey"`
- `ariaLabel?: string` – Accessible label for screen readers

---

## ExpandableSection

A collapsible container that shows or hides content with a toggle. Useful for organizing information hierarchically and reducing visual clutter on the page.

```tsx
import { ExpandableSection } from '@cloudscape-design/components';

<ExpandableSection header="Advanced Options" variant="default">
  <p>Hidden content goes here</p>
</ExpandableSection>
```

**Key Props:**
- `header: string | ReactNode` – Section title or header element
- `children: ReactNode` – Content to show/hide
- `expanded?: boolean` – Controls open/closed state
- `onChange?: (detail: { expanded: boolean }) => void` – Fired when toggled
- `variant?: string` – Options: `"default"`, `"footer"`, `"container"`, `"stacked"`
- `headingTagOverride?: string` – HTML heading tag override

---

## Header

A page or section header with title and optional action buttons. Typically used at the top of pages or major sections with support for descriptions and action controls.

```tsx
import { Header } from '@cloudscape-design/components';

<Header
  title="Dashboard"
  description="Overview of your resources"
  actions={<Button>Refresh</Button>}
/>
```

**Key Props:**
- `title: string | ReactNode` – Main header title
- `description?: string | ReactNode` – Subtitle or descriptive text
- `actions?: ReactNode` – Buttons or action elements aligned right
- `counter?: string` – Text counter (e.g., "5 items")
- `variant?: string` – Options: `"h1"`, `"h2"`, `"h3"`

---

## Icon

Displays icons from the Cloudscape icon set. Used for visual communication throughout the UI.

```tsx
import { Icon } from '@cloudscape-design/components';

<Icon name="settings" size="large" variant="normal" />
```

**Key Props:**
- `name: string` – Icon name (e.g., `"settings"`, `"star"`, `"check"`, `"close"`, `"download"`)
- `size?: string` – Icon size; options: `"small"`, `"normal"`, `"medium"`, `"large"`
- `variant?: string` – Style options: `"normal"`, `"disabled"`, `"link"`, `"subtle"`
- `alt?: string` – Alternative text for accessibility
- `ariaLabel?: string` – Accessible label for icon-only usage

---

## StatusIndicator

Displays status with an accompanying icon and text label. Commonly used to show state (success, error, warning, loading) in tables, cards, or status sections.

```tsx
import { StatusIndicator } from '@cloudscape-design/components';

<StatusIndicator type="success">Active</StatusIndicator>
```

**Key Props:**
- `children: string | ReactNode` – Status text displayed alongside icon
- `type?: string` – Status type; options: `"success"`, `"error"`, `"warning"`, `"loading"`, `"stopped"`, `"pending"`, `"in-progress"`
- `wrapText?: boolean` – Allow text to wrap to multiple lines
- `iconAriaLabel?: string` – Accessible label for the icon

---

## TokenGroup

Displays a group of removable tokens or tags. Useful for showing selected items, filters, or tags with the ability to remove individual items.

```tsx
import { TokenGroup } from '@cloudscape-design/components';

<TokenGroup
  items={[
    { label: "JavaScript", dismissLabel: "Remove JavaScript" },
    { label: "React", dismissLabel: "Remove React" }
  ]}
  onDismiss={({ detail: { itemIndex } }) => console.log('Removed:', itemIndex)}
/>
```

**Key Props:**
- `items: TokenItem[]` – Array of token objects with `label` and `dismissLabel` properties
- `onDismiss?: (detail: { itemIndex: number }) => void` – Fired when a token is removed
- `disabled?: boolean` – Disables all token removal actions
- `alignment?: string` – Token alignment; options: `"horizontal"`, `"vertical"`
- `limit?: number` – Max tokens displayed before collapsing


## Navigation Components

# Cloudscape Navigation Components

## BreadcrumbGroup
Shows the path to the current page in the navigation hierarchy, helping users understand their location and navigate back to parent pages.

```tsx
import { BreadcrumbGroup } from '@cloudscape-design/components';

<BreadcrumbGroup
  items={[
    { text: 'Home', href: '/' },
    { text: 'Services', href: '/services' },
    { text: 'Current Page' }
  ]}
  onFollow={(event) => console.log(event.detail.href)}
/>
```

**Key Props:**
- `items: BreadcrumbGroupProps.Item[]` – Array of breadcrumb items with `text` and optional `href`
- `onFollow?: (event: CustomEvent<{ href: string }>) => void` – Callback when a breadcrumb is clicked
- `ariaLabel?: string` – Accessible label for the breadcrumb group

---

## Link
Hyperlink component for navigation within the application or to external pages.

```tsx
import { Link } from '@cloudscape-design/components';

<Link href="/target-page" external>
  Navigate Here
</Link>
```

**Key Props:**
- `href: string` – URL destination for the link
- `external?: boolean` – Opens link in new tab/window
- `variant?: 'primary' | 'secondary'` – Visual style
- `color?: 'normal' | 'inverted'` – Color scheme

---

## Pagination
Controls for navigating through pages of content with previous/next buttons and page number input.

```tsx
import { Pagination } from '@cloudscape-design/components';

<Pagination
  currentPageIndex={1}
  pagesCount={10}
  onPreviousPageClick={() => setPage(page - 1)}
  onNextPageClick={() => setPage(page + 1)}
/>
```

**Key Props:**
- `currentPageIndex: number` – Current active page (1-based)
- `pagesCount: number` – Total number of pages
- `onPreviousPageClick: () => void` – Previous button callback
- `onNextPageClick: () => void` – Next button callback
- `openEnd?: boolean` – Displays "..." instead of page count when unknown

---

## SideNavigation
Vertical navigation menu for the application providing access to main sections and sub-items.

```tsx
import { SideNavigation } from '@cloudscape-design/components';

<SideNavigation
  items={[
    { type: 'link', text: 'Dashboard', href: '/dashboard' },
    { type: 'link', text: 'Settings', href: '/settings' },
    {
      type: 'section',
      text: 'Resources',
      items: [
        { type: 'link', text: 'Instances', href: '/instances' }
      ]
    }
  ]}
  activeHref={currentPath}
  onFollow={(event) => navigate(event.detail.href)}
/>
```

**Key Props:**
- `items: SideNavigationProps.Item[]` – Navigation items with `type`, `text`, `href`, and nested `items`
- `activeHref?: string` – Currently active item's href for highlighting
- `onFollow?: (event: CustomEvent<{ href: string }>) => void` – Navigation callback
- `header?: SideNavigationProps.Header` – Header section with logo/title

---

## Steps
Shows progress through a multi-step process with visual indicators and descriptions for each step.

```tsx
import { Steps } from '@cloudscape-design/components';

<Steps
  items={[
    { title: 'Step 1', status: 'finished' },
    { title: 'Step 2', status: 'current', description: 'In progress' },
    { title: 'Step 3', status: 'pending' }
  ]}
/>
```

**Key Props:**
- `items: StepsProps.Step[]` – Array of steps with `title`, optional `description`, and `status`
- `status?: 'finished' | 'current' | 'pending'` – Step progress state
- `onNavigationClick?: (event: CustomEvent<{ requestedStepIndex: number }>) => void` – Step selection callback

---

## Tabs
Organizes content into tabbed sections with easy switching between multiple content areas.

```tsx
import { Tabs } from '@cloudscape-design/components';

<Tabs
  tabs={[
    { label: 'Tab 1', id: 'tab1', content: <div>Content 1</div> },
    { label: 'Tab 2', id: 'tab2', content: <div>Content 2</div> }
  ]}
  activeTabId={activeTab}
  onChange={(event) => setActiveTab(event.detail.activeTabId)}
/>
```

**Key Props:**
- `tabs: TabsProps.Tab[]` – Array of tabs with `label`, `id`, and `content`
- `activeTabId?: string` – Currently active tab identifier
- `onChange?: (event: CustomEvent<{ activeTabId: string }>) => void` – Tab change callback
- `variant?: 'default' | 'container'` – Visual style

---

## TopNavigation
Horizontal navigation bar at the top of the page displaying branding, navigation links, and utility items.

```tsx
import { TopNavigation } from '@cloudscape-design/components';

<TopNavigation
  identity={{ href: '/', logo: <img src="logo.png" />, title: 'App' }}
  utilities={[
    { type: 'button', text: 'Settings', ariaLabel: 'Settings' },
    { type: 'menu-button', text: 'User', items: [...] }
  ]}
  onNavigationOpen={() => setSideNavOpen(true)}
/>
```

**Key Props:**
- `identity?: { href: string; logo?: ReactNode; title?: string }` – Branding section
- `utilities?: TopNavigationProps.Utility[]` – Right-side utility buttons/menus
- `search?: TopNavigationProps.Search` – Search box configuration
- `onNavigationOpen?: () => void` – Mobile menu toggle callback

---

## Wizard
Multi-step form with navigation between steps, validation, and progress tracking for guided workflows.

```tsx
import { Wizard } from '@cloudscape-design/components';

<Wizard
  steps={[
    { title: 'Step 1', content: <Form1 /> },
    { title: 'Step 2', content: <Form2 /> },
    { title: 'Review', content: <ReviewForm /> }
  ]}
  onSubmit={() => submitForm()}
  onCancel={() => navigate('/')}
/>
```

**Key Props:**
- `steps: WizardProps.Step[]` – Array of wizard steps with `title` and `content`
- `activeStepIndex?: number` – Currently active step index
- `onSubmit?: () => void` – Final submission callback
- `onCancel?: () => void` – Cancellation callback
- `isLoadingNextStep?: boolean` – Loading state for async operations
- `allowSkipSteps?: boolean` – Enables skipping steps

# AppLayout Navigation Component

## AppLayout

The AppLayout component provides a responsive page layout with a sidebar navigation, main content area, and optional tools panel. It's the primary layout container for Cloudscape applications and automatically handles responsive behavior across device sizes.

```tsx
import { AppLayout } from '@cloudscape-design/components';

<AppLayout
  navigation={<Navigation items={navItems} />}
  content={<YourContent />}
  tools={<YourTools />}
  toolsOpen={toolsOpen}
  onToolsChange={({ detail }) => setToolsOpen(detail.open)}
/>
```

**Key Props:**
- `navigation?: ReactNode` – Navigation component or content to display in the left sidebar
- `content: ReactNode` – Main content area of the layout
- `tools?: ReactNode` – Optional tools panel content displayed on the right side
- `toolsOpen?: boolean` – Controls visibility of the tools panel
- `onToolsChange?: (event: AppLayoutProps.ToolsChangeDetail) => void` – Callback when tools panel visibility changes
- `navigationOpen?: boolean` – Controls visibility of navigation sidebar on mobile
- `onNavigationChange?: (event: AppLayoutProps.NavigationChangeDetail) => void` – Callback when navigation visibility changes
- `notifications?: ReactNode` – Notifications area at the top
- `headerSelector?: string` – CSS selector for the header element
- `breadcrumbs?: ReactNode` – Breadcrumb navigation component
- `disableBodyScroll?: boolean` – Prevents scrolling of the body element
- `maxContentWidth?: number` – Maximum width of the content area in pixels
- `minContentWidth?: number` – Minimum width of the content area in pixels

## Navigation

The Navigation component displays hierarchical navigation items within the AppLayout sidebar. It supports nested items, external links, and active state styling.

```tsx
import { Navigation } from '@cloudscape-design/components';

<Navigation
  items={[
    { type: 'link', text: 'Dashboard', href: '/dashboard' },
    { type: 'section', text: 'Admin', items: [
      { type: 'link', text: 'Users', href: '/admin/users' },
      { type: 'link', text: 'Settings', href: '/admin/settings' }
    ]}
  ]}
  activeHref="/dashboard"
/>
```

**Key Props:**
- `items: ReadonlyArray<NavigationItem>` – Array of navigation items to display
- `activeHref?: string` – URL path that marks a navigation item as active
- `onFollow?: (event: NavigationProps.FollowDetail) => void` – Callback when a navigation item is clicked
- `header?: ReactNode` – Optional header content displayed above navigation items
- `ariaLabel?: string` – Accessibility label for the navigation

**NavigationItem Types:**

- **Link Item:**
  - `type: 'link'` – Navigation link
  - `text: string` – Display text
  - `href: string` – Link URL
  - `external?: boolean` – Opens in new tab if true
  - `items?: NavigationItem[]` – Nested items (sub-navigation)

- **Section Item:**
  - `type: 'section'` – Grouping header
  - `text: string` – Section title
  - `items: ReadonlyArray<NavigationItem>` – Child navigation items
  - `expanded?: boolean` – Whether section is expanded by default

- **Divider Item:**
  - `type: 'divider'` – Visual separator between items


## Data-display Components

# Cloudscape React Components Documentation

## Cards
Displays a collection of items as individual cards with support for selection, filtering, and pagination features.

```tsx
import { Cards } from '@cloudscape-design/components';

<Cards
  cardDefinition={cardDefinition}
  items={items}
  visibleSections={["id", "name"]}
/>
```

**Key Props:**
- `cardDefinition: CardDefinition` – Defines structure and fields for each card
- `items: object[]` – Array of data objects to display as cards
- `visibleSections?: string[]` – Which sections to display
- `selectionType?: "single" | "multi"` – Selection mode
- `selectedItems?: object[]` – Currently selected cards
- `onSelectionChange?: (event) => void` – Selection change handler
- `pagination?: PaginationProps` – Pagination configuration
- `filter?: FilterProps` – Filter configuration
- `variant?: "container" | "full-page"` – Card layout style

---

## KeyValuePairs
Displays a list of key-value pairs in a structured, easy-to-read format.

```tsx
import { KeyValuePairs } from '@cloudscape-design/components';

<KeyValuePairs
  columns={2}
  items={[
    { label: "Name", value: "John Doe" },
    { label: "Status", value: "Active" }
  ]}
/>
```

**Key Props:**
- `items: Array<{ label: string, value: string | ReactNode }>` – Key-value pair data
- `columns?: number` – Number of columns (1-4)
- `columnDefinitions?: ColumnDefinition[]` – Custom column configuration
- `variant?: "default" | "container"` – Display style

---

## PieChart
Displays categorical data as a pie or donut chart with legend and tooltips.

```tsx
import { PieChart } from '@cloudscape-design/components';

<PieChart
  data={[
    { title: "Category A", value: 30 },
    { title: "Category B", value: 50 }
  ]}
  variant="pie"
  hideFilter={false}
/>
```

**Key Props:**
- `data: Array<{ title: string, value: number }>` – Chart data points
- `variant?: "pie" | "donut"` – Chart type
- `hideFilter?: boolean` – Show/hide filter control
- `hideLegend?: boolean` – Show/hide legend
- `hideTitles?: boolean` – Show/hide data labels
- `size?: "small" | "medium" | "large"` – Chart size
- `i18nStrings?: PieChartI18nStrings` – Localization strings

---

## Table
Displays data in rows and columns with built-in sorting, filtering, selection, and pagination.

```tsx
import { Table } from '@cloudscape-design/components';

<Table
  columnDefinitions={columns}
  items={data}
  sortingColumn={sortingColumn}
  selectionType="multi"
/>
```

**Key Props:**
- `columnDefinitions: ColumnDefinition[]` – Column configuration
- `items: object[]` – Table row data
- `selectionType?: "single" | "multi"` – Row selection mode
- `selectedItems?: object[]` – Currently selected rows
- `onSelectionChange?: (event) => void` – Selection handler
- `sortingColumn?: SortingColumn` – Active sorting configuration
- `onSortingChange?: (event) => void` – Sorting change handler
- `filter?: FilterProps` – Filter configuration
- `pagination?: PaginationProps` – Pagination settings
- `variant?: "container" | "full-page" | "embedded" | "stacked"` – Table style
- `loading?: boolean` – Loading state
- `empty?: ReactNode` – Empty state content
- `resizableColumns?: boolean` – Allow column resizing
- `stickyHeader?: boolean` – Sticky header on scroll

---

## AreaChart
Displays data as an area chart showing trends over time or categories.

```tsx
import { AreaChart } from '@cloudscape-design/components';

<AreaChart
  data={[
    { x: "Jan", y: 100 },
    { x: "Feb", y: 150 }
  ]}
  xTitle="Month"
  yTitle="Value"
  hideFilter={false}
/>
```

**Key Props:**
- `data: Array<{ x: string | number, y: number }>` – Chart data points
- `xTitle?: string` – X-axis label
- `yTitle?: string` – Y-axis label
- `hideFilter?: boolean` – Show/hide filter control
- `hideLegend?: boolean` – Show/hide legend
- `hideTitles?: boolean` – Show/hide axis titles
- `size?: "small" | "medium" | "large"` – Chart size
- `statistic?: AreaChartProps.StatisticObject` – Aggregate statistic display
- `i18nStrings?: AreaChartI18nStrings` – Localization strings

---

## BarChart
Displays data as a bar chart for comparing categorical values.

```tsx
import { BarChart } from '@cloudscape-design/components';

<BarChart
  data={[
    { title: "Item A", value: 100 },
    { title: "Item B", value: 200 }
  ]}
  xTitle="Categories"
  yTitle="Amount"
/>
```

**Key Props:**
- `data: Array<{ title: string, value: number }>` – Chart data points
- `xTitle?: string` – X-axis label
- `yTitle?: string` – Y-axis label
- `hideFilter?: boolean` – Show/hide filter control
- `hideLegend?: boolean` – Show/hide legend
- `hideTitles?: boolean` – Show/hide axis titles
- `size?: "small" | "medium" | "large"` – Chart size
- `horizontalBars?: boolean` – Horizontal bar orientation
- `statistic?: BarChartProps.StatisticObject` – Aggregate statistic display
- `i18nStrings?: BarChartI18nStrings` – Localization strings

---

## LineChart
Displays data as a line chart for tracking trends and changes over time.

```tsx
import { LineChart } from '@cloudscape-design/components';

<LineChart
  data={[
    { x: "Mon", y: 50 },
    { x: "Tue", y: 75 }
  ]}
  xTitle="Day"
  yTitle="Count"
/>
```

**Key Props:**
- `data: Array<{ x: string | number, y: number }>` – Chart data points
- `xTitle?: string` – X-axis label
- `yTitle?: string` – Y-axis label
- `hideFilter?: boolean` – Show/hide filter control
- `hideLegend?: boolean` – Show/hide legend
- `hideTitles?: boolean` – Show/hide axis titles
- `size?: "small" | "medium" | "large"` – Chart size
- `statistic?: LineChartProps.StatisticObject` – Aggregate statistic display
- `i18nStrings?: LineChartI18nStrings` – Localization strings

---

## MixedLineBarChart
Displays combined line and bar chart data for comparing different metrics.

```tsx
import { MixedLineBarChart } from '@cloudscape-design/components';

<MixedLineBarChart
  data={[
    { x: "Jan", y1: 50, y2: 100 },
    { x: "Feb", y1: 75, y2: 120 }
  ]}
  xTitle="Month"
  yTitle="Value"
/>
```

**Key Props:**
- `data: Array<{ x: string | number, y1: number, y2: number, ... }>` – Chart data with multiple series
- `xTitle?: string` – X-axis label
- `yTitle?: string` – Y-axis label
- `hideFilter?: boolean` – Show/hide filter control
- `hideLegend?: boolean` – Show/hide legend
- `hideTitles?: boolean` – Show/hide axis titles
- `size?: "small" | "medium" | "large"` – Chart size
- `series: Array<{ title: string, type: "line" | "bar" }>` – Series configuration
- `statistic?: MixedLineBarChartProps.StatisticObject` – Aggregate statistic display
- `i18nStrings?: MixedLineBarChartI18nStrings` – Localization strings


## Utility Components

# Cloudscape React Components Documentation

## CollectionPreferences

Modal dialog for configuring how data collections (tables, grids) are displayed, including column visibility, sorting, pagination, and density settings. Commonly used in data-heavy interfaces to let users personalize their view.

```tsx
import { CollectionPreferences } from '@cloudscape-design/components';

<CollectionPreferences
  title="Preferences"
  confirmLabel="Confirm"
  cancelLabel="Cancel"
  preferences={preferences}
  onConfirm={({ detail }) => setPreferences(detail)}
  pageSizePreference={{
    title: 'Select page size',
    options: [
      { value: 10, label: '10 items' },
      { value: 25, label: '25 items' }
    ]
  }}
  visibleContentPreference={{
    title: 'Select visible columns',
    options: [
      { id: 'id', label: 'ID', editable: false },
      { id: 'name', label: 'Name' }
    ]
  }}
/>
```

**Key Props:**
- `preferences: Preferences` – Current user preferences object
- `onConfirm: (event) => void` – Fires when user confirms changes
- `onDismiss: () => void` – Fires when modal closes
- `title?: string` – Modal title
- `confirmLabel?: string` – Confirm button text (default: "Confirm")
- `cancelLabel?: string` – Cancel button text (default: "Cancel")
- `pageSizePreference?: PageSizePreference` – Page size configuration
- `visibleContentPreference?: VisibleContentPreference` – Column visibility configuration
- `wrapLinesPreference?: boolean` – Whether to enable text wrapping toggle

---

## CopyToClipboard

Button component that copies specified text to the clipboard with visual feedback. Typically displays a confirmation message briefly after copying.

```tsx
import { CopyToClipboard } from '@cloudscape-design/components';

<CopyToClipboard
  copyButtonText="Copy"
  copySuccessText="Copied!"
  textToCopy="https://example.com/resource"
/>
```

**Key Props:**
- `textToCopy: string` – Text content to copy to clipboard
- `copyButtonText?: string` – Button label (default: "Copy")
- `copySuccessText?: string` – Success message shown after copy
- `variant?: 'normal' | 'icon'` – Button style (default: "normal")
- `copyErrorText?: string` – Error message if copy fails
- `feedback?: 'tooltip' | 'popover'` – Feedback display type

---

## LiveRegion

Accessibility utility that announces dynamic content changes to screen reader users. Messages are read aloud without visually displaying them, essential for real-time updates.

```tsx
import { LiveRegion } from '@cloudscape-design/components';

<LiveRegion>
  <div>{statusMessage}</div>
</LiveRegion>
```

**Key Props:**
- `children: ReactNode` – Content to announce to screen readers
- `delay?: number` – Milliseconds before announcement (default: 0)
- `tagName?: string` – HTML tag for region (default: "div")
- `politeness?: 'polite' | 'assertive'` – Announcement urgency; "assertive" interrupts current speech (default: "polite")

---

## AnnotationContext

Context provider that enables tutorial annotations and guided tours within child components. Wraps your application or section to provide annotation state and styling.

```tsx
import { AnnotationContext } from '@cloudscape-design/components';

<AnnotationContext
  currentTutorialId="tour-123"
  onExitTutorial={() => setTutorialId(null)}
>
  <YourAppComponents />
</AnnotationContext>
```

**Key Props:**
- `currentTutorialId?: string` – Active tutorial identifier
- `onExitTutorial?: () => void` – Callback when user exits tutorial
- `children: ReactNode` – Child components to annotate
- `highlightElementId?: string` – ID of currently highlighted element in tutorial


## Overlay Components

# Cloudscape React Components Documentation

## Drawer

A slide-out panel that appears from the edge of the screen, typically used for navigation, filters, or secondary content. It can be positioned from any edge and usually overlays the main content without blocking interaction with the page underneath.

```tsx
import { Drawer } from '@cloudscape-design/components';

<Drawer
  header="Drawer Title"
  onDismiss={() => setDrawerOpen(false)}
  open={isDrawerOpen}
>
  Content goes here
</Drawer>
```

**Key Props:**
- `open: boolean` – Controls whether the drawer is visible
- `onDismiss: () => void` – Callback when drawer should close
- `header?: ReactNode` – Title displayed at the top of the drawer
- `footer?: ReactNode` – Optional footer content
- `closeButton?: boolean` – Show close button in header (default: true)

---

## Modal

A dialog overlay that appears on top of the page content and requires user interaction before returning to the main page. It blocks interaction with the background content and is ideal for important actions or confirmations.

```tsx
import { Modal } from '@cloudscape-design/components';

<Modal
  header="Confirm Action"
  onDismiss={() => setModalOpen(false)}
  visible={isModalOpen}
  footer={
    <Box float="right">
      <SpaceBetween direction="horizontal" size="xs">
        <Button onClick={() => setModalOpen(false)}>Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </SpaceBetween>
    </Box>
  }
>
  Are you sure you want to proceed?
</Modal>
```

**Key Props:**
- `visible: boolean` – Controls modal visibility
- `onDismiss: () => void` – Callback when modal should close
- `header: ReactNode` – Title displayed at the top
- `footer?: ReactNode` – Action buttons or footer content
- `size?: string` – Options: `small`, `medium`, `large`, `max` (default: `medium`)
- `closeAriaLabel?: string` – Accessibility label for close button

---

## Popover

A small overlay panel that appears near a trigger element, typically used for tooltips, quick information, or contextual actions. It automatically positions itself to stay visible on screen and closes when clicking outside.

```tsx
import { Popover } from '@cloudscape-design/components';

<Popover
  content="This is helpful information"
  position="top"
  triggerType="custom"
>
  <Button>Hover or click for info</Button>
</Popover>
```

**Key Props:**
- `content: ReactNode` – Content displayed in the popover
- `position?: string` – Options: `top`, `bottom`, `left`, `right` (default: `top`)
- `size?: string` – Options: `small`, `medium`, `large` (default: `medium`)
- `triggerType?: string` – Options: `custom`, `text` (default: `custom`)
- `dismissButton?: boolean` – Show close button inside popover
- `fixedWidth?: boolean` – Match trigger element width
- `onDismiss?: () => void` – Callback when popover closes

## Icons

```tsx
import { Add, Close, Search, Settings } from '@cloudscape-design/components';

// Basic usage
<Add size={16} />
<Search size={20} />

// In components
<Button renderIcon={Add}>Add Item</Button>
```

For complete icon list, refer to official Cloudscape documentation.
