import { Project, TeamMember } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: '72-munjoy-st',
    address: '72 Munjoy Street',
    location: 'Munjoy Hill, Portland, Maine',
    category: 'Custom New Builds',
    shortDesc: 'A striking 5-unit luxury condominium building on Munjoy Hill, blending expansive roof decks, soundproofing, and bespoke architecture.',
    image: '/src/assets/images/munjoy_hill_condo_1779365201345.png',
    specs: {
      size: '8,000 sq.ft. total living area + common areas',
      garage: '5-car integrated secure parking garage',
      features: [
        '2 expansive private wood roof decks (Unit #2 and Unit #5) with panoramic Portland coast views',
        'Private in-unit state-of-the-art security-locked elevator serving Unit #5',
        'Multi-stage high-efficiency heat pump space heating and cooling systems',
        'Dual-system electric heat pump hot water heaters for immediate, lowenergy hot water',
        'Two separate fire-rated enclosed steel and drywall structural stairwells',
        'Continuous structurally isolated vertical full-barrier masonry firewall',
        'Premium LP SmartSide composite lumber siding with protective water barrier wrapping',
        'Azek exterior trim and PVC window surrounds for weatherproof aging resistance',
        'Luxurious wide-plank white oak flooring in living quarters and master bedrooms',
        'Full set of high-end, kitchen chef-suite luxury appliances',
        'Dedicated modern plumbing-ready laundry utility room',
        'Custom master-craftsman kitchen cabinetry and custom soft-close configurations',
        'Industrial rubber membrane fully waterproofed roofing system (EPDM/TPO)',
        'Andersen Series 400 high-efficiency dual-pane insulate glass windows',
        'Matching solid granite slab countertops and vanities throughout all bathrooms',
        'Custom hand-tiled designer master bathrooms, showers, and radiant floors',
        'Advanced 3-tiered acoustic isolation and soundproofing inside major common walls and floors'
      ]
    }
  },
  {
    id: '31-fore-st',
    address: '31 Fore Street',
    location: 'Munjoy Hill, Portland, Maine',
    category: 'Custom New Builds',
    shortDesc: 'High-end 4-unit residential building on Portlands waterfront coast, featuring steel accents, a 4-stop elevator, and extensive glazing.',
    image: '/src/assets/images/fore_street_condo_1779365264392.png',
    specs: {
      size: '6,000 sq.ft. total living area + common areas',
      timeline: '11 Months',
      garage: 'Enclosed 6-car parking garage',
      features: [
        'Panoramic private luxury roof deck designated for Unit #4',
        'Four secure structural storage units built directly into the parking garage',
        'Advanced eco-friendly electric heat pump hot water heaters',
        'Zoned multi-room split heat pump climate control (heating & cooling)',
        'Fully integrated 4-stop mechanical passenger elevator serving all levels',
        'One structurally optimized fire-rated secure central stairwell',
        'Engineered full-thickness structural firewall separating building zones',
        'High-density Nichiha cement composite architectural rainscreen siding',
        'Custom-dressed Boral composite wood and heavy-gauge bent metal exterior trim sheets',
        'Bespoke hand-selected white oak wide-plank natural grain flooring',
        'Integrated professional-grade culinary appliances in all units',
        'Oversized dedicated laundry room with specialized acoustic dampening',
        'Locally handcrafted premium custom kitchen cabinets and islands',
        'Resilient commercial-grade rubber membrane waterproof roofing platform',
        'Premium Koltech architectural-line high-efficiency window packages',
        'Stunning solid granite countertops and vanities throughout each bathroom',
        'Bespoke custom tile bathrooms, zero-entry custom showers, and tiled floors',
        'Comprehensive 3-tiered soundproofing core layout inside shared walls and floor bays',
        'Remote smart entry exterior security door system with visual intercom feed'
      ]
    }
  },
  {
    id: '24-daybreak-ln',
    address: '24 Daybreak Lane',
    location: 'Cumberland, Maine',
    category: 'Custom New Builds',
    shortDesc: 'A flawless Modern Colonial estate highlighting dynamic front and back covered porches, double waterfall island, and 9-foot ceilings.',
    image: '/src/assets/images/colonial_cumberland_1779365220984.png',
    specs: {
      size: '3,450 sq.ft.',
      timeline: '6.5 Months',
      beds: '4 Bedrooms',
      baths: '3.5 Bathrooms',
      features: [
        'Heavy architectural composition weather-rated shingle roof with zinc mold resistance',
        'Premium LP SmartSide clapboards and siding with extreme weather paint coating',
        'Andersen 400 high-efficiency insulated sash pane windows',
        'LP brand composite exterior architectural trim work and custom soffit vents',
        'Solid 5-inch thick red oak natural grain hardwood flooring',
        'Multi-unit ducted and split heating and cooling architectural systems',
        'Integrated ultra-premium home chef appliance array',
        'Full custom built-in cabinetry (kitchen, bath vanities, walk-in pantry, wet bar, laundry)',
        'Polished quartz countertops throughout, featuring a double waterfall kitchen island',
        'Custom-poured tile shower beds, detailed shower-wall tiling, and floor masonry',
        'Spacious rear entertaining deck crafted with Trex composite maintenance-free boards',
        'Atlas pre-engineered floor and roof truss systems for structural clear spans',
        'Generous 9-foot high ceiling framing across both primary levels',
        'Premium custom insulated metal front Provia entry door with sidelights',
        'Symmetrical front and back deep-covered country porches with timber posts',
        'Elegant custom interior structural archway passthroughs connecting principal rooms',
        'Dedicated heat pump high-efficiency storage hot water heater',
        'Dual-sided gas fireplaces with custom master-crafted mantel surround',
        'Auxiliary utility setups with laundry closets on both primary and second floors',
        'Tailored, oversized bespoke master walk-in custom closet system'
      ]
    }
  },
  {
    id: '58-harris-rd',
    address: '58 Harris Road',
    location: 'Cumberland, Maine',
    category: 'Custom New Builds',
    shortDesc: 'A stunning ground-up luxury modern farmhouse with a beautifully disassembled and rebuilt 40’ x 40’ historical timber-frame barn.',
    image: '/src/assets/images/harris_road_farmhouse_1779365284321.png',
    specs: {
      size: '2,850 sq.ft. (House) + 40’ x 40’ Barn',
      timeline: '9 Months',
      beds: '4 Bedrooms',
      baths: '4 Bathrooms',
      features: [
        'Complete precision disassembly of a historical timber post-and-beam barn, meticulously cataloged, repaired, and reassembled on-site on a brand-new reinforced concrete footing slab',
        'Reconstructed barn roof with premium plywood underlayment and full HD ice and water shield system',
        'Salvaged, historically re-treated, and beautifully reinstalled existing weather-patina metal farm roof on the barn structure',
        'Custom-built heavy sliding barn main entry door and two insulated modern garage doors',
        'Main residence features architectural wind-rated shingle roofing',
        'Premium LP SmartSide clapboard siding with protective rain barrier',
        'High-specification Andersen 400 window packages throughout',
        'Azek synthetic high-durability exterior trim boards and decorative elements',
        'Locally sourced 5-inch wide-plank clear white oak premium flooring',
        'Multi-zoned super high-efficiency electric heat pumps for ultimate thermal comfort',
        'Fully integrated custom premium kitchen and butler appliances',
        'Bespoke custom-milled cabinetry and solid wood vanities',
        'Solid quartz natural surfaces, countertops, and waterfall islands',
        'Master-crafted custom walk-in shower tiles, benches, and bath floors',
        'Expansive rear dining deck featuring premium Trex composite decking',
        'Atlas pre-engineered floor joists and high-pitch roof truss system'
      ]
    }
  },
  {
    id: '25-penrith-st',
    address: '25 Penrith Street',
    location: 'Stroudwater, Portland, Maine',
    category: 'Luxury Renovations',
    shortDesc: 'Complete exterior and interior restoration of a 1941 historical brick colonial, modernized with heat pumps, PEX plumbing, and a pool deck refresh.',
    image: '/src/assets/images/brick_colonial_renovation_1779365241227.png',
    specs: {
      size: '3,884 sq.ft.',
      timeline: '4 Months',
      beds: '4 Bedrooms',
      baths: '5 Bathrooms',
      features: [
        'Complete removal of failing roof wood; replaced with heavy wind-rated architectural shingles',
        'Reconditioned and custom hand-painted historical cedar siding shingles on the structure',
        'Removed damaged brick main entrance and retrofitted with custom-carved Maine granite slabs',
        'Replaced all historical home windows with specialized energy-efficient replica Provia architectural series windows',
        'Sanded, walnut stained, and re-finished all original solid hardwood timber floors throughout',
        'Hand-applied premium interior paints on all walls, trim, doors, and original wooden kitchen cabinetry',
        'Replaced outdated appliances with zero-clearance, high-end professional kitchen suites',
        'Removed compromised brick kitchen flooring; built a floating subfloor and installed premium large-format tiling',
        'Fully removed ancient boiler oil system; installed ultra-quiet, multi-head heat pump heating and cooling system',
        'Replaced entire basement old copper and galvanized lines with contemporary clean PEX manifold plumbing system',
        'Engineered a new first-floor master suite layout completed with luxurious tile bathroom and organized walk-in closet configurations',
        'Completely overhauled inground pool system with brand-new variable-speed pumps, active media filters, and line fittings',
        'Re-leveled, repaired, and recoated the entire inground pool deck with a weather-safe durable Cool Deck concrete membrane',
        'Custom-expanded central kitchen layout with a solid custom granite bar overhang island',
        'Upgraded the entire estate with designer light fixtures, recessed LED cans, and custom brass switch plates'
      ]
    }
  },
  {
    id: '59-moody-st',
    address: '59 Moody Street',
    location: 'Munjoy Hill, Portland, Maine',
    category: 'Luxury Renovations',
    shortDesc: 'A dramatic down-to-the-studs historic building restoration transformed into two ultra-modern, high-efficiency coastal condominiums with roof decks.',
    image: '/src/assets/images/moody_street_renovation_1779365305673.png',
    specs: {
      size: '3,000 sq.ft. total living area + common areas',
      timeline: '7 Months',
      garage: '4 outside parking spots',
      features: [
        'Configured static private scenic roof deck specifically for Unit #1 with integrated marine waterproofing',
        'Highly stable multi-zone natural gas continuous hot water loop and copper baseboard heating systems',
        'Sanded, repaired, and expertly painted exterior custom wood shingles and architectural wood brackets',
        'Sanded, hand-stained, and premium satin-lacquered the original solid antique floor joists and boards',
        'Stripped all historical interior lath-and-plaster walls back to raw studs to execute complete structural auditing',
        'Completely replaced outdated wiring, panel boxes, waste vents, and incoming plumbing lines from the city tie-in',
        'Hung greenboard/sheetrock, applied multi-coat smooth level-5 plaster finish, and hand-painted the interior rooms',
        'Furnished all kitchens with state-of-the-art high-end professional smart appliance suites',
        'Completed full laundry plumbing runs with dynamic sound-insulation dampening around stacks',
        'Fully customized soft-close solid maple kitchen cabinetry and islands',
        'Applied high-tensile rubber membrane waterproof roofing systems',
        'Replaced existing window apertures with Andersen 400 series high-efficiency dual-glass frames',
        'Imported gorgeous solid granite counters, backsplashes, and vanity tops throughout the properties',
        'Custom ceramic mosaic tiles in bathrooms with walk-in full glass showers and tile borders',
        'Fully refinished basement with specialized waterproof epoxy painted floor and open-joist architectural painted modern ceiling'
      ]
    }
  }
];

export const TEAM_DATA: TeamMember[] = [
  {
    id: 'bob-leblanc',
    name: 'Bob Leblanc',
    role: 'Founder & Master Builder',
    bio: 'With over twenty-five years of hands-on custom craftsmanship in southern Maine, Bob has earned a stellar reputation for structural excellence and uncompromising quality. He personally oversees every piece of carpentry and raw framing on the site. His building philosophy is centered on utilizing premium Maine materials, solid structural engineering, and maintaining real, transparent relationships with homeowners to bring their custom modern estates to life.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    id: 'ed-ricker',
    name: 'Ed Ricker',
    role: 'Co-Owner & Project Director',
    bio: 'Ed manages site operations, project logistics, architectural engineering details, and subcontractor scheduling. With deep expertise in historical renovations, coastal weatherproofing systems, and full-scale modern insulation mechanics, he ensures that every complex multi-unit project is executed with pinpoint planning and strict adherence to architectural guidelines. Ed is dedicated to keeping projects on budget, on timeline, and above standards.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500'
  }
];
