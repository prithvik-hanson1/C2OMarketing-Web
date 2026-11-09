import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {services,internalPricing} from './content/catalogue.mjs';
import {projects} from './content/projects.mjs';
const expected={'single-page':[1999],'multi-page':[3999],'digital-menu':[499,999],'google-profile':[799,1499],'poster-package':[499,899],'card-basic':[199],'card-standard':[399],'card-premium':[599,799],'product-label':[399,799],sticker:[199,399],packaging:[799,1999],flyer:[399,699],poster:[249,499],'restaurant-menu':[599,999],brochure:[999,1799],'insert-card':[199,349],letterhead:[249,399],certificate:[299,499],'social-post':[199,349],banner:[399,799],'starter-kit':[999],'restaurant-kit':[1499],'product-kit':[1999]};
for(const [id,value] of Object.entries(expected))assert.deepEqual(services.find(s=>s.id===id)?.price,value,id);
assert.deepEqual(internalPricing.customDoubleSidedBusinessCard,[299,499]);assert.equal(projects.length,0);assert.equal(new Set(services.map(s=>s.id)).size,services.length);
const team=JSON.parse(await fs.readFile('content/team.json','utf8'));assert.deepEqual(team.map(p=>p.name),['Krishna Sai Kannan','Prithvik T Hanson','Hannah Ann Leejo','Neha Maria Tedy']);
for(const name of ['index','services','work','process','about','contact','thanks']){const html=await fs.readFile(`site/${name}.html`,'utf8');assert(!/completely free|always free|get free direction|swaad|tea_time|free marketing assistance/i.test(html),`Old content: ${name}`);assert.equal((html.match(/<h1>/g)||[]).length,1);for(const [,href] of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g))await fs.access('site'+(href==='/'?'/index.html':href));}
assert(!(await fs.readFile('site/catalogue.json','utf8')).includes('customDoubleSidedBusinessCard'));
const form=await fs.readFile('site/contact.html','utf8');assert(form.includes('data-netlify="true"'));assert(form.includes('netlify-honeypot="bot-field"'));for(const name of ['name','business','email','service','description'])assert(new RegExp(`(?:input|select|textarea)[^>]*name="${name}"[^>]*required`).test(form),name);
console.log('PASS: 23 approved prices, internal reference isolation, empty portfolio, four team profiles, local links, old-copy removal and required Netlify fields.');

