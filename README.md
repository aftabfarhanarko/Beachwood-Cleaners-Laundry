# Beachwood Cleaners & Laundry - Premium Garment Care Website

A high-converting, premium, multi-page Next.js web application built for **Beachwood Cleaners & Laundry** (located at 2699 Beachwood Dr, Los Angeles, CA 90068). This application features state-of-the-art glassmorphism styling, clean animations, and a user-centric design optimized for Los Angeles residential and commercial clients.

**🔗 Live Website URL**: [https://beachwood-cleaners-laundry.vercel.app/](https://beachwood-cleaners-laundry.vercel.app/)

---

## 📋 Project Specifications & US Market UX Standards

Designed in strict compliance with the **USA Laundry Industry Market Research & UX Insights**:
*   **Trust-First Hero Section**: Single prominent phone CTA (`+1 323-828-7503`) and instant scheduling triggers positioned above the fold.
*   **Design & Color Psychology**: Features custom brand assets inspired by the company logo (`logo1.png`):
    *   **Deep Coastal Blue (`#003B65`)**: Section headers, trust signals, and main elements representing authority and trust.
    *   **Ocean Turquoise Cyan (`#00A8B5`)**: Brand accent, primary action buttons ("Book Pickup"), active tabs, and focus indicators.
    *   **Aqua Teal (`#0091A4`)**: Eco-friendly badges, fresh delivery tags, and secondary action callouts.
    *   **Warm Sun Gold (`#FFC72C`)**: Special highlights, 5-Star rating tags, and urgent banners.
    *   **Slate Midnight Surface (`#00223D`)**: Sleek dark contrast blocks.
*   **Typography**: Inter Google Font globally standardized across headings, body narrative, and data tables to preserve crisp readability.
*   **Responsive Container Limits**: Maximum width capped at `80rem` (`max-w-7xl` / `1280px`) to prevent awkward wide-screen stretching on high-resolution displays.

---

## ✨ Key Features Built

1.  **6-Core Pages Layout**:
    *   `Home (/)`: High-conversion landing experience containing value grids, reviews, interactive calculator, 4-step workflow, and localized Google Maps.
    *   `Services (/services)`: Detailed capability list for Wash & Fold ($2.45/lb), Executive Dry Cleaning (Suits, Dresses, Jackets, Pants), Shirt Launder, and Commercial/Airbnb clients.
    *   `Pricing (/pricing)`: Direct and upfront rate cards eliminating consumer pricing uncertainty.
    *   `About Us (/about)`: Beachwood community heritage, 100% toxic-free, PERC-free organic eco-solvents, and 5-point quality audit standards.
    *   `Contact & Booking (/contact)`: Interactive doorstep pickup scheduling form (Name, Phone, Service, Date, Address, Instructions) and full store directions.
    *   `FAQ (/faq)`: Categorized help accordions reducing customer support volume.
2.  **Top Utility Marquee**: Integrated `react-fast-marquee` in the top header displaying express same-day announcements, address coordinates, and support hotlines in a slow, elegant motion.
3.  **Framer Motion Active Tabs**: Smooth spring-based active tab transition in core services for instant tactile feedback.
4.  **AOS (Animate On Scroll)**: Customized scrolling reveal transitions across page sections.
5.  **Local Business Schema**: Integrated JSON-LD structured data in the layout root mapping to `DryCleaner` local schema.

---

## 🛠️ Tech Stack & Dependencies

*   **Framework**: Next.js (App Router)
*   **Styling**: Tailwind CSS
*   **Animation**: `framer-motion` & `aos`
*   **Scroller**: `react-fast-marquee`
*   **Icons**: `lucide-react`

---

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
```

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live result.
