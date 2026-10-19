# A11y focus regression check

The mobile category selector in `src/components/TechStack.tsx` already includes a visible keyboard focus treatment:

```tsx
focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
```

No source change is needed for `a11y/focus-removed`. This branch documents why the reported finding is a false positive and preserves the existing focus styling.
