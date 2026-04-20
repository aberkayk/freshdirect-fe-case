# FreshDirect - Frontend Live Coding Case

## Goal

Build a grocery e-commerce homepage inspired by [FreshDirect](https://www.freshdirect.com).

## Requirements

### 1. Homepage - Product Listing

- Display products from `mocks/product.tsx` as cards
- Products can be grouped by category
- The design should be clean, user-friendly, and similar to FreshDirect's current website

### 2. Product Card

- Each card should display the product **image**, **name**, and **price**
- **Top-right corner:** a save/bookmark button
- **Bottom-right corner:** an "Add to Cart" button

### 3. Header

- A fixed header at the top of the page
- Contains the logo/site name, a **search input**, and a **cart icon**
- The search input should filter products by name in real time as the user types
- The cart icon should show the number of items in the cart (badge)

### 4. Cart Drawer

- Clicking the cart icon in the header opens a **drawer sliding in from the right**
- The drawer lists all items added to the cart (name, price, quantity)
- Users should be able to increase/decrease item quantity
- The total price should be displayed

## Technical Details

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Library:** shadcn/ui (Radix UI) - already integrated
- **Icons:** lucide-react
- **Data:** `data/product.json` (static JSON, no API)

### Adding shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add sheet
npx shadcn@latest add badge
```

### Running the Project

```bash
npm install
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Evaluation Criteria

- Component structure and code organization
- React state management (Context API or useState)
- UI/UX quality and resemblance to FreshDirect
- TypeScript usage
- Tailwind CSS usage

## Time Limit

**60 minutes**
