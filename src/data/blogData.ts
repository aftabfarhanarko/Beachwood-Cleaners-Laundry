export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  image: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "essential-laundry-hacks",
    title: "Essential Laundry Hacks Every Homeowner Should Know",
    category: "Laundry",
    date: "Friday, March 15, 2024",
    readTime: "4 Min Read",
    author: "Elena Rostova",
    authorRole: "Senior Master Cleaner",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&auto=format&fit=crop&q=80",
    excerpt: "Simple, highly effective tricks to preserve garment colors, prevent cotton shrinkage, and optimize your washing machine performance for years.",
    content: [
      "Doing laundry might seem straightforward, but small mistakes can significantly shorten the lifespan of your favorite garments. From water temperature settings to detergent dosage, minor adjustments can yield noticeably softer, cleaner, and longer-lasting clothes.",
      "One of the most common pitfalls is over-filling the washing machine drum. When clothes are packed tightly, detergent cannot circulate evenly, leading to detergent residue spots and incomplete odor removal. Always leave at least a hand-width gap at the top of the drum.",
      "Another crucial tip is turning printed graphic tees and dark jeans inside-out prior to washing. Friction against other fabrics during spin cycles causes color fading and lint accumulation on surface fibers.",
      "Finally, consider washing in cold or lukewarm water whenever possible. Modern organic detergents are formulated to activate efficiently in cold water, saving energy while keeping vibrant colors from bleeding.",
    ],
    keyTakeaways: [
      "Always leave space at the top of your washer drum for optimal agitation.",
      "Wash dark jeans and printed tees inside-out to prevent color fading.",
      "Cold water washing preserves fabric elasticity and prevents shrinkage.",
      "Clean your washing machine filter once a month to prevent mildew odors.",
    ],
  },
  {
    id: "ultimate-stain-removal-guide",
    title: "The Ultimate Guide to Removing Common Stains",
    category: "Stain Removal",
    date: "Tuesday, March 12, 2024",
    readTime: "6 Min Read",
    author: "Marcus Vance",
    authorRole: "Fabric Restoration Expert",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=800&auto=format&fit=crop&q=80",
    excerpt: "Proven techniques for pre-treating tough wine, grease, coffee, and ink stains without damaging delicate fabric dyes or textures.",
    content: [
      "Accidents happen—whether it's a splash of red wine at dinner or a drop of morning coffee on your favorite white shirt. The secret to successful stain removal lies in acting quickly and using the right pre-treatment agent.",
      "For red wine stains, never rub vigorously! Rubbing pushes the pigment deeper into the fabric weaves. Instead, gently blot the excess liquid with a clean white napkin, then apply cold water or club soda before applying enzyme stain remover.",
      "Oil and grease stains (such as salad dressing or butter) require a grease-cutting agent. Applying a tiny drop of dish soap directly to the dry stain before washing works wonders to break down lipids.",
      "For ink stains, dab rubbing alcohol onto the reverse side of the fabric with a cotton pad to push the ink pigment out rather than smearing it across the front.",
    ],
    keyTakeaways: [
      "Blot stains gently—never rub vigorously into fabric fibers.",
      "Use cold water for protein and tannin stains like blood or wine.",
      "Dish liquid works as an excellent emergency pre-treater for grease spots.",
      "Test any stain treatment on an inconspicuous inner seam first.",
    ],
  },
  {
    id: "sorting-laundry-for-families",
    title: "Efficient Laundry Sorting Techniques for Busy Families",
    category: "Laundry",
    date: "Sunday, March 10, 2024",
    readTime: "5 Min Read",
    author: "Sarah Jenkins",
    authorRole: "Home Organization Specialist",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&auto=format&fit=crop&q=80",
    excerpt: "How to organize family hampers, sort by fabric weight and wash temperature for faster laundry turnaround times every week.",
    content: [
      "Managing laundry for a household of four or five can quickly feel overwhelming without a structured system. Sorting clothes at the moment of disposal saves hours of work on laundry day.",
      "We recommend setting up a 3-compartment hamper in central bedrooms or bathrooms: one for Lights, one for Darks, and one for Heavy Towels & Linens. Educating family members to sort items immediately eliminates pre-wash pile sorting.",
      "Always wash heavy bath towels separate from light clothing items. Heavy terrycloth fabric acts like sandpaper against delicate cotton shirts during spin cycles, causing pilling and premature wear.",
    ],
    keyTakeaways: [
      "Implement a 3-bin sorting hamper (Lights, Darks, Towels).",
      "Separate heavy bath towels from lightweight cotton shirts.",
      "Wash gym activewear in dedicated synthetic mesh bags.",
    ],
  },
  {
    id: "eco-friendly-detergents-matter",
    title: "Why Eco-Friendly Detergents Matter for Garment Longevity",
    category: "Eco Care",
    date: "Wednesday, March 06, 2024",
    readTime: "4 Min Read",
    author: "Elena Rostova",
    authorRole: "Senior Master Cleaner",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&auto=format&fit=crop&q=80",
    excerpt: "Discover how non-toxic organic detergents keep clothing fibers soft while protecting sensitive skin and local water ecosystems.",
    content: [
      "Conventional commercial detergents often contain optical brighteners, synthetic fragrances, and harsh sulfates that coat garment fibers over time. While they make clothes appear bright temporarily, they leave a stiff residue that traps odors.",
      "Eco-friendly plant-based detergents use natural enzymes to digest organic soil and odor molecules. They rinse away cleanly without leaving chemical films, preserving fabric breathability and natural softness.",
      "At Beachwood Cleaners & Laundry, we exclusively use zero-phosphate, hypoallergenic organic detergent blends that protect your garments and the environment.",
    ],
    keyTakeaways: [
      "Plant-based enzymes digest stain molecules without damaging fibers.",
      "Eliminates chemical residue build-up that causes fabric stiffness.",
      "Safe for infants and individuals with sensitive skin allergies.",
    ],
  },
  {
    id: "dry-clean-vs-machine-wash",
    title: "When Should You Dry Clean vs. Machine Wash Delicate Garments?",
    category: "Dry Cleaning",
    date: "Saturday, March 02, 2024",
    readTime: "5 Min Read",
    author: "Marcus Vance",
    authorRole: "Fabric Restoration Expert",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?w=800&auto=format&fit=crop&q=80",
    excerpt: "Understand clothing care labels and learn when professional dry cleaning is essential for wool suits, silk dresses, and structured blazers.",
    content: [
      "Deciphering garment care labels can be confusing. Knowing when to trust your home washing machine versus turning to a professional dry cleaner is crucial for preserving high-end garments.",
      "Tailored suits, wool coats, silk blouses, and sequined formal dresses should almost always be professionally dry cleaned. Water causes wool fibers to felt and shrink, while silk loses its natural luster when immersed in water.",
      "Garments marked 'Dry Clean Only' should never be home washed. However, items labeled 'Dry Clean' (without 'Only') can sometimes be gently hand-washed in cold water using delicate silk soap.",
    ],
    keyTakeaways: [
      "Respect 'Dry Clean Only' labels on structured suits and silk dresses.",
      "Water causes wool garments to felt and permanently shrink.",
      "Professional dry cleaning restores jacket shoulder structure and linings.",
    ],
  },
  {
    id: "seasonal-clothes-storage",
    title: "How to Properly Store Seasonal Clothes & Heavy Winter Coats",
    category: "Fabric Guide",
    date: "Monday, Feb 26, 2024",
    readTime: "4 Min Read",
    author: "Sarah Jenkins",
    authorRole: "Home Organization Specialist",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80",
    excerpt: "Prevent moth damage, mildew, and fabric creasing when storing winter jackets, wool sweaters, and comforters for summer.",
    content: [
      "As seasons change, transitioning your wardrobe requires proper cleaning and storage techniques. Storing unwashed clothes traps body oils and food micro-particles that attract moths and cause yellowing.",
      "Always wash or dry clean garments before long-term storage. Store wool sweaters flat in breathable canvas garment bags rather than wire hangers, which stretch out shoulder seams.",
      "Add natural cedar blocks or lavender sachets to storage bins to repel insects naturally without harsh mothball odors.",
    ],
    keyTakeaways: [
      "Always clean garments before storing to prevent moth infestation.",
      "Fold heavy knits flat; never hang heavy sweaters on hangers.",
      "Use breathable fabric bags rather than sealed plastic containers.",
    ],
  },
];
