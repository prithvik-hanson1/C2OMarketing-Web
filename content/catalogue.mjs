export const policy = {
  pricing: 'Prices are indicative and negotiable. Final quotations depend on project scope and requirements.',
  expenses: 'Printing, hosting, domains, and other third-party expenses are quoted separately where applicable.',
  revisions: 'Planning and design-direction revisions are free within the original agreed scope. One free minor revision is included after handover. Extra deliverables, major changes and project restarts are quoted separately.',
  bugs: 'Website bug fixes needed to meet the original agreed scope are part of completing that work, not paid design revisions.',
  concepts: 'Each business-card package includes two initial design options. You choose one direction for the final card; this does not include two independently finalized projects.',
  payment: 'Payment terms, schedule, support and any applicable revision time limits are agreed in your proposal.',
  print: 'Digital design only. Printing, physical production, materials, delivery and external vendor charges are separate.',
  compliance: 'Clients supply accurate regulatory information for labels and packaging. Our role is the agreed design work; we do not provide legal certification.'
};
export const categories = [
  {id:'websites',name:'Websites',description:'A clear, useful place for customers to find your business.'},
  {id:'digital',name:'Digital Solutions',description:'Small digital improvements that make everyday business easier.'},
  {id:'cards',name:'Business Cards',description:'A considered first impression, ready to share.'},
  {id:'print',name:'Branding & Print',description:'A consistent identity across the things your customers see and hold.'},
  {id:'packages',name:'Business Packages',description:'Related essentials brought together in one agreed project.'}
];
const service = (id,category,name,price,description,deliverables,extra={}) => ({id,category,name,price,description,deliverables,enabled:true,exclusions:category==='websites'?'Domains, hosting, substantial content creation, additional integrations and advanced functionality are separately quoted.':policy.print,...extra});
export const services = [
 service('single-page','websites','Single-Page Business Website',[1999],'A focused online home for a small business.',['One-page responsive layout','Business introduction and offerings','Contact details and WhatsApp or enquiry link','Basic on-page SEO and deployment assistance']),
 service('multi-page','websites','Basic Multi-Page Business Website',[3999],'More room to explain your business, services and products.',['Responsive design across agreed pages','Business and service or product sections','Contact functionality','Basic SEO foundations and deployment assistance'],{note:'Page count, features and integrations are agreed in the quotation. Unlimited pages and custom applications are not included.'}),
 service('custom-web','websites','Custom Website Solutions',null,'A practical upgrade built around a specific need.',['Landing pages and website redesign','QR-code menu websites and digital catalogues','Simple booking enquiry interfaces','Website upgrades, maintenance and feasible small-business solutions']),
 service('digital-menu','digital','Digital Menu Design',[499,999],'A clear menu layout for digital sharing.',['Agreed menu content and layout','Digital files in agreed formats'],{note:'This is a standalone menu design, not a fully developed interactive website.'}),
 service('google-profile','digital','Google Business Profile Setup or Improvement',[799,1499],'Help customers understand and contact your business.',['Business information, categories and descriptions','Owner-supplied photos and contact details','Links and presentation improvements'],{exclusions:'Business-owner authorization is required. Work follows Google policies; no guaranteed rankings or fabricated reviews.'}),
 service('poster-package','digital','Promotional Poster Package',[499,899],'Three promotional designs for an agreed brief.',['Three designs with agreed dimensions and requirements'],{note:'Additional unrelated creatives and scope changes require a separate quotation.'}),
 service('card-basic','cards','Basic Business Card',[199],'A concise one-sided card.',['One-sided business card design','Two initial concepts; one finalized direction','Print-ready files in agreed formats'],{note:policy.concepts}),
 service('card-standard','cards','Standard Business Card',[399],'Space for your business on both sides.',['Double-sided business card design','Two initial concepts; one finalized direction','Print-ready files in agreed formats'],{note:policy.concepts}),
 service('card-premium','cards','Premium Business Card',[599,799],'A custom card with a direct digital connection.',['Custom double-sided design','QR-code integration and detailed visual customization','Two initial concepts; one finalized direction'],{note:policy.concepts}),
 ...[
 ['product-label','Product Label',[399,799],'One product label design.'],
 ['sticker','Sticker Design',[199,399],'One agreed sticker design.'],
 ['packaging','Product Packaging Design',[799,1999],'Packaging artwork for the agreed product and format.'],
 ['flyer','Flyer / Leaflet',[399,699],'A focused printed introduction or promotion.'],
 ['poster','Promotional Poster',[249,499],'An individual promotional design.'],
 ['restaurant-menu','Restaurant Menu',[599,999],'A one- or two-page menu design.'],
 ['brochure','Brochure',[999,1799],'A four-page brochure design.'],
 ['insert-card','Thank-you / Insert Card',[199,349],'A small, considered addition to an order.'],
 ['letterhead','Letterhead',[249,399],'A consistent layout for business correspondence.'],
 ['certificate','Certificate Design',[299,499],'A certificate layout for an agreed use.'],
 ['social-post','Social Media Post',[199,349],'One graphic for an agreed platform and size.'],
 ['banner','Banner / Flex Design',[399,799],'Artwork for an agreed banner or flex format.']
 ].map(([id,name,price,description])=>service(id,'print',name,price,description,['Agreed layout and design','Final digital artwork in agreed formats'],{note:id==='social-post'?'A graphic design service, not recurring account management.':id==='product-label'?'A single label is not a complete packaging identity.':id==='restaurant-menu'?'Menu design does not include website development.':id==='poster'?'One poster; the three-poster package is listed under Digital Solutions.':undefined})),
 service('identity','print','Logo & Visual Identity',null,'Build a recognizable visual direction for your business.',['Logo and identity requirements scoped individually','Agreed visual system and handover files']),
 service('local-tools','digital','Local Business Tools',null,'Useful connections between your customers and your business.',['WhatsApp integrations and contact systems','Digital catalogues and feasible custom business tools'],{exclusions:policy.expenses}),
 service('starter-kit','packages','Starter Business Kit',[999],'For small businesses preparing their brand and promotional essentials.',['Business card','Sticker design','Product label design','One promotional poster']),
 service('restaurant-kit','packages','Restaurant Branding Kit',[1499],'For restaurants, cafés and takeaways seeking a consistent identity.',['Two-page restaurant menu','Takeaway sticker','Business card','Two promotional posters']),
 service('product-kit','packages','Product Launch Kit',[1999],'For small product brands introducing or refreshing an offering.',['Product label','Packaging artwork','Sticker design','Three promotional graphics'])
];
// Internal reference only: deliberately excluded from every public template and browser payload.
export const internalPricing = {customDoubleSidedBusinessCard:[299,499]};
export const enquiryGroups = [
 {id:'business-cards',name:'Business Cards'}, {id:'branding-print',name:'Branding & Print Design'},
 {id:'custom-solution',name:'Custom Digital Solution'}, {id:'multiple',name:'Multiple Services'}, {id:'not-sure',name:'Not Sure Yet'}
];
export const steps = [
 ['Discover','We learn about your business, customers, requirements, budget and the problem you want to solve.'],
 ['Strategize','Together we agree the solution, scope, price, deliverables and schedule before work begins.'],
 ['Create','We design and build with clear communication and agreed review stages.'],
 ['Deliver','We test the work and hand over the agreed files, access, documentation and deliverables.'],
 ['Review','We honour the agreed revisions and support, and review useful measures where tracking is in scope.']
];
export const faqs = [
 ['Are your prices fixed?',policy.pricing],
 ['Do I have to pay for monthly services?','No. Most C20 services are project-based. Ongoing maintenance, hosting management or recurring reporting is optional and separately scoped.'],
 ['Is printing included?',policy.print],
 ['Can I request revisions?',policy.revisions+' '+policy.bugs+' '+policy.payment],
 ['Do business-card packages include multiple concepts?',policy.concepts+' This entitlement applies to the three card packages, not automatically to bundled services or websites.'],
 ['Do you offer custom solutions?','Yes, depending on feasibility and requirements. Tell us what you need and we will discuss an appropriate scope.'],
 ['Can you host and maintain my website?','We can discuss hosting and maintenance requirements and quote them separately. Ownership, access and support responsibilities are agreed in the proposal.'],
 ['Do you guarantee increased sales?','No. We focus on useful solutions and measurable outcomes where tracking is feasible.'],
 ['How long does a project take?','Each project has an agreed schedule based on its scope, content, review stages and dependencies. We do not promise one delivery time for every project.'],
 ['What happens after I enquire?','We review your requirements, clarify the brief and discuss an appropriate proposal. Sending an enquiry does not commit you to a project.']
];

