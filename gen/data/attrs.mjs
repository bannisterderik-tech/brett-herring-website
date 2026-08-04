// Per-area attributes. These drive genuinely DIFFERENT advice on every
// area x service page, instead of recycling the same paragraphs.
//
// Each flag is a real, checkable characteristic of the place. The combo-page
// generator reads these and writes guidance that is actually true for that
// area — a septic paragraph only appears where septic is actually the norm,
// a historic-district warning only where a district actually exists.
//
//   setting  : 'intown' | 'edge' | 'rural' | 'remote'
//   water    : true when a river/reservoir/floodplain question is routine
//   septic   : true when private well + on-site septic is the norm
//   acreage  : true when parcels of real size are commonly available
//   resource : true when farm (EFU) or forest zoning is common
//   historic : true when there is a designated district or notable old stock
//   wildfire : true when insurance/wildfire risk is a live purchase issue
//   usda     : true when USDA rural eligibility is plausible (verify by address)
//   commute  : short description of the drive into the metro
//   district : the school district name to say out loud
//   rental   : 'strong' | 'mixed' | 'thin' — depth of the local rental market
//   build    : the dominant land-use constraint on building

export const attrs = {
  thurston:        { setting:'edge',   water:true,  septic:'edges', acreage:'edges', resource:false, historic:false, wildfire:false, usda:false, commute:'minutes across Springfield', district:'Springfield Public Schools', rental:'strong', build:'city limits, with county rules past the edge' },
  'pleasant-hill': { setting:'rural',  water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:false, usda:true,  commute:'a highway run up 58 into Springfield', district:'Pleasant Hill School District', rental:'thin',   build:'Lane County rural zoning, no city services' },
  springfield:     { setting:'intown', water:true,  septic:false, acreage:false, resource:false, historic:true,  wildfire:false, usda:false, commute:'minutes to either downtown', district:'Springfield Public Schools', rental:'strong', build:'city permitting and utilities' },
  gateway:         { setting:'intown', water:false, septic:false, acreage:false, resource:false, historic:false, wildfire:false, usda:false, commute:'immediate freeway and medical access', district:'Springfield Public Schools', rental:'strong', build:'city permitting and utilities' },
  glenwood:        { setting:'intown', water:true,  septic:false, acreage:false, resource:false, historic:false, wildfire:false, usda:false, commute:'between the two downtowns', district:'Springfield Public Schools', rental:'strong', build:'Glenwood refinement plan zoning, worth reading before you buy' },
  'mohawk-valley': { setting:'rural',  water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:true,  usda:true,  commute:'ten to twenty minutes down Marcola Road', district:'Springfield and Marcola districts by location', rental:'thin', build:'farm and forest zoning with real dwelling limits' },
  marcola:         { setting:'rural',  water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:true,  usda:true,  commute:'a real drive to Springfield', district:'Marcola School District', rental:'thin', build:'forest and farm zoning with real dwelling limits' },
  walterville:     { setting:'rural',  water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:true,  usda:true,  commute:'a straight shot down 126', district:'Springfield Public Schools', rental:'thin', build:'county rural zoning plus floodplain near the river' },
  leaburg:         { setting:'remote', water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:true,  usda:true,  commute:'up the McKenzie corridor', district:'McKenzie School District', rental:'thin', build:'county rural zoning, wildfire and river constraints' },
  vida:            { setting:'remote', water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:true,  usda:true,  commute:'well up the McKenzie corridor', district:'McKenzie School District', rental:'thin', build:'county rural zoning, wildfire and river constraints' },
  'blue-river':    { setting:'remote', water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:true,  usda:true,  commute:'a long drive to town', district:'McKenzie School District', rental:'thin', build:'county rural zoning inside a rebuilding fire footprint' },
  'mckenzie-bridge':{setting:'remote', water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:true,  usda:true,  commute:'an hour-plus to Eugene', district:'McKenzie School District', rental:'thin', build:'surrounded by national forest, verify everything' },
  jasper:          { setting:'rural',  water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:false, usda:true,  commute:'fifteen-ish minutes to Springfield', district:'Pleasant Hill and Springfield districts by location', rental:'thin', build:'Lane County rural zoning' },
  dexter:          { setting:'rural',  water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:false, usda:true,  commute:'a highway run up 58', district:'Pleasant Hill School District', rental:'thin', build:'county zoning, with smaller lots than its neighbors' },
  lowell:          { setting:'rural',  water:true,  septic:'mixed', acreage:true, resource:true,  historic:false, wildfire:false, usda:true,  commute:'a highway drive to Springfield', district:'Lowell School District', rental:'thin', build:'city services in town, county rules outside it' },
  'fall-creek':    { setting:'remote', water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:true,  usda:true,  commute:'off the highway and then some', district:'Lowell School District', rental:'thin', build:'farm and forest zoning with real dwelling limits' },
  oakridge:        { setting:'remote', water:true,  septic:'mixed', acreage:true, resource:true,  historic:false, wildfire:true,  usda:true,  commute:'about forty miles up Highway 58', district:'Oakridge School District', rental:'mixed', build:'city services in town, forest zoning around it' },
  westfir:         { setting:'remote', water:true,  septic:'mixed', acreage:true, resource:true,  historic:true,  wildfire:true,  usda:true,  commute:'past Oakridge', district:'Oakridge School District', rental:'thin', build:'the smallest incorporated city in the county' },
  goshen:          { setting:'edge',   water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:false, usda:true,  commute:'ten minutes to Eugene', district:'Springfield and Pleasant Hill districts by location', rental:'thin', build:'rural industrial and rural residential zoning at a highway junction' },
  creswell:        { setting:'edge',   water:false, septic:'edges', acreage:'edges', resource:true, historic:false, wildfire:false, usda:true, commute:'a straight interstate run to Eugene', district:'Creswell School District', rental:'mixed', build:'city services in town, county rules on the farm ground' },
  'cottage-grove': { setting:'edge',   water:true,  septic:'edges', acreage:'edges', resource:true, historic:true, wildfire:false, usda:true, commute:'about twenty minutes down I-5', district:'South Lane School District', rental:'mixed', build:'a locally designated historic district downtown' },
  dorena:          { setting:'remote', water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:true,  usda:true,  commute:'past Cottage Grove', district:'South Lane School District', rental:'thin', build:'county rural zoning around a Corps reservoir' },
  lorane:          { setting:'remote', water:false, septic:true,  acreage:true,  resource:true,  historic:false, wildfire:true,  usda:true,  commute:'a winding drive to Eugene', district:'Crow-Applegate-Lorane School District', rental:'thin', build:'farm and forest zoning, wine country ground' },
  eugene:          { setting:'intown', water:true,  septic:false, acreage:false, resource:false, historic:true,  wildfire:false, usda:false, commute:'you are already there', district:'Eugene 4J and Bethel districts by address', rental:'strong', build:'city permitting, with neighborhood overlays in places' },
  'south-eugene':  { setting:'intown', water:false, septic:false, acreage:false, resource:false, historic:false, wildfire:false, usda:false, commute:'minutes to downtown and campus', district:'Eugene School District 4J', rental:'strong', build:'city permitting, plus slope and access on the hill lots' },
  'santa-clara':   { setting:'intown', water:true,  septic:'edges', acreage:false, resource:false, historic:false, wildfire:false, usda:false, commute:'quick access to Beltline', district:'Bethel and 4J by address, so verify', rental:'strong', build:'a patchwork of city and unincorporated county parcels' },
  'river-road':    { setting:'intown', water:true,  septic:'edges', acreage:false, resource:false, historic:false, wildfire:false, usda:false, commute:'minutes up the river side of town', district:'Bethel and 4J by address, so verify', rental:'strong', build:'a patchwork of city and unincorporated county parcels' },
  bethel:          { setting:'intown', water:false, septic:false, acreage:false, resource:false, historic:false, wildfire:false, usda:false, commute:'west side, quick to Beltline', district:'Bethel School District 52', rental:'strong', build:'city permitting and utilities' },
  churchill:       { setting:'intown', water:false, septic:false, acreage:false, resource:false, historic:false, wildfire:false, usda:false, commute:'southwest side, central', district:'Eugene School District 4J', rental:'strong', build:'city permitting and utilities' },
  whiteaker:       { setting:'intown', water:true,  septic:false, acreage:false, resource:false, historic:true,  wildfire:false, usda:false, commute:'walkable to downtown', district:'Eugene School District 4J', rental:'strong', build:'a historic commercial overlay on Blair Boulevard' },
  'cal-young':     { setting:'intown', water:false, septic:false, acreage:false, resource:false, historic:false, wildfire:false, usda:false, commute:'central, quick to both cities', district:'Eugene School District 4J', rental:'strong', build:'city permitting and utilities' },
  veneta:          { setting:'edge',   water:true,  septic:'edges', acreage:'edges', resource:true, historic:false, wildfire:false, usda:true, commute:'roughly twelve to fifteen miles west of Eugene', district:'Fern Ridge School District', rental:'mixed', build:'city services in town, county rules on the farm ground' },
  elmira:          { setting:'rural',  water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:false, usda:true,  commute:'a short run past Veneta', district:'Fern Ridge School District', rental:'thin', build:'county rural and farm zoning' },
  'junction-city': { setting:'edge',   water:false, septic:'edges', acreage:'edges', resource:true, historic:false, wildfire:false, usda:true, commute:'north of Eugene on 99', district:'Junction City School District', rental:'mixed', build:'city services in town, EFU farm ground around it' },
  coburg:          { setting:'edge',   water:false, septic:'edges', acreage:'edges', resource:true, historic:true, wildfire:false, usda:true, commute:'ten minutes down I-5', district:'Eugene School District 4J', rental:'thin', build:'a National Register historic district with design review' },
  noti:            { setting:'remote', water:false, septic:true,  acreage:true,  resource:true,  historic:false, wildfire:true,  usda:true,  commute:'west toward the coast range', district:'Fern Ridge School District', rental:'thin', build:'forest and farm zoning with real dwelling limits' },
  crow:            { setting:'remote', water:false, septic:true,  acreage:true,  resource:true,  historic:false, wildfire:true,  usda:true,  commute:'southwest on Territorial', district:'Crow-Applegate-Lorane School District', rental:'thin', build:'farm and forest zoning with real dwelling limits' },
  florence:        { setting:'edge',   water:true,  septic:'mixed', acreage:'edges', resource:false, historic:false, wildfire:false, usda:true, commute:'an hour and change from Eugene', district:'Siuslaw School District', rental:'mixed', build:'coastal construction, dunes, and shoreline rules' },
  mapleton:        { setting:'remote', water:true,  septic:true,  acreage:true,  resource:true,  historic:false, wildfire:true,  usda:true,  commute:'between the valley and the coast', district:'Mapleton School District', rental:'thin', build:'county rural zoning plus tidal floodplain along the river' },
};

// ── Per-service, per-attribute guidance ────────────────────────────────
// Returns 3-5 genuinely area-specific sections for a given service.
// Nothing here is invented: each block only fires when the attribute is true.

export function comboSections(l, s, a) {
  const N = l.name;
  const rural = a.setting === 'rural' || a.setting === 'remote';
  const out = [];

  const septicBlock = {
    h: `Water and septic in ${N}`,
    p: a.septic === true
      ? `Assume private well and on-site septic unless you are told otherwise. That means the well log, the depth and flow rate, a current water test, and the county septic permit record all belong on your list before contingencies come off. Oregon also requires a seller to test a domestic well for arsenic, nitrates, and total coliform once an offer is accepted, so ask for those results. Septic permits for this area are held by Lane County, and the permitted capacity is tied to bedroom count, which matters if you plan to add on later.`
      : a.septic === 'mixed'
        ? `${N} has both. Properties inside the townsite are typically on city services; anything outside it is usually on private well and on-site septic. Confirm which one you are buying before you budget, because the diligence list and the ongoing maintenance are completely different between the two.`
        : a.septic === 'edges'
          ? `Most of ${N} is on city water and sewer, but the edges are not. Parcels toward the outskirts can be on private well and on-site septic, and that changes both your inspection list and your annual upkeep. It is a simple question to ask early and an expensive one to discover late.`
          : `${N} is on city water and sewer, which takes the well and septic diligence off your list entirely. On older homes the more useful spend is a sewer scope, because a collapsed lateral under the yard is the expensive surprise here rather than a drainfield.`,
  };

  const zoningBlock = {
    h: `What you can actually build in ${N}`,
    p: a.resource
      ? `Zoning does more work here than acreage does. Farm and forest zones in Lane County exist to keep working land working, and they put real limits on new dwellings, second homes for family, and some business uses. A dwelling right is verified through a land use application, not inferred from how many acres are on the listing. If your plan involves building anything, get the answer from Lane County planning in writing before your contingencies expire. ${a.build.charAt(0).toUpperCase() + a.build.slice(1)}.`
      : `${a.build.charAt(0).toUpperCase() + a.build.slice(1)}. That is generally the straightforward end of the spectrum, but if your plan involves an addition, an accessory dwelling, or a change of use, confirm it against the current code before you count on it. Rules change more often than people expect.`,
  };

  const waterBlock = {
    h: `Floodplain and water, ${N} specifics`,
    p: `Water is part of the appeal here and part of the diligence. Check the FEMA maps for any parcel near a river, creek, or reservoir, because floodplain status affects insurance cost and sometimes what you can build. On the Corps reservoirs, levels are managed seasonally and drawn down for flood storage, so the shoreline you see in June is not the shoreline in October. If a water view or water access is part of why you want the property, look at it in two different seasons.`,
  };

  const wildfireBlock = {
    h: `Insurance is an early question in ${N}`,
    p: `Wildfire risk affects insurance availability and price in this part of the county, and it is the item most likely to surprise a buyer late. Get a written quote during your inspection period rather than assuming coverage will be routine. It is also worth asking about defensible space around the structures, since it affects both your premium and your risk.`,
  };

  const historicBlock = {
    h: `Historic property in ${N}`,
    p: `Older and designated buildings come with character and with process. Where a historic district applies, exterior alterations can be subject to design review, which is not a reason to avoid the area but is a reason to ask before you plan a remodel. Older construction also brings its own inspection list: original wiring, original plumbing, foundation and drainage. Inspect accordingly and budget honestly.`,
  };

  const usdaBlock = {
    h: `The financing angle most buyers miss here`,
    p: `Parts of the county outside the Eugene and Springfield core have historically fallen inside USDA Rural Development boundaries, which can mean a loan with no down payment for buyers who qualify. Eligibility is decided address by address and the maps get updated, so the only reliable move is to check the specific property rather than assume based on the town name. If it applies to you, it is one of the most useful programs available.`,
  };

  const commuteBlock = {
    h: `The drive, honestly`,
    p: `Getting to the metro from ${N} is ${a.commute}. That is worth driving yourself, at the hour you would actually be doing it, before you commit. Maps are optimistic about this part of the county and a route that looks quick on a screen can feel different in February rain with a log truck ahead of you.`,
  };

  const schoolBlock = {
    h: `Schools, said plainly`,
    p: `${a.district} serves ${N}. School assignment in Lane County is by address rather than by the boundary people assume, and district lines do not always follow the obvious streets. If schools matter to your decision, verify the assignment for the specific property with the district rather than trusting a listing field.`,
  };

  // Always-on, still area-specific: what your money buys, and how to inspect here.
  const settingBlock = {
    h: `What ${N} is actually like to own in`,
    p: rural
      ? `This is ${a.setting === 'remote' ? 'genuinely remote' : 'genuinely rural'} property, not a subdivision with a view. You take on your own water and waste, longer drives for everything, and weather that occasionally takes the power out. In exchange you get room, quiet, and neighbors who show up with equipment when you need it. Most people who move out here would not go back. The ones who struggle are almost always the ones nobody told in advance.`
      : a.setting === 'edge'
        ? `${N} sits on the useful edge: a real town with its own identity and services, close enough to the metro that the drive is a commute rather than an expedition. That combination is why it holds value. You are trading a little convenience for a lot of character and usually a better price per square foot.`
        : `${N} is in-town living, which means city water and sewer, services close by, and a shorter drive to almost everything. The trade is price per square foot and lot size. For a lot of buyers that is exactly the right trade, because the location is the part you cannot renovate later.`,
  };

  const inspectBlock = {
    h: `What I check on a ${N} property`,
    p: rural
      ? `Beyond the standard inspection: well head condition and pressure tank, drainfield location and whether anyone is parking on it, outbuilding structure and power, fence lines, how the driveway holds up in wet weather, and which way water moves across the site in February. Rural properties hide their problems outdoors, not in the kitchen.`
      : `Roof age and condition, the electrical panel brand, water heater date, and which way the ground slopes away from the foundation. On the older stock here, a sewer scope is the single highest-value add-on inspection, because a failed lateral under the front yard is the expensive surprise in this part of the county.`,
  };

  // ── service-specific ordering ──
  switch (s.slug) {
    case 'rural-acreage':
      if (a.septic === true || a.septic === 'mixed' || a.septic === 'edges') out.push(septicBlock);
      out.push(zoningBlock);
      if (a.water) out.push(waterBlock);
      if (a.wildfire) out.push(wildfireBlock);
      break;
    case 'land':
      out.push(zoningBlock);
      if (a.septic !== false) out.push({
        h: `Septic feasibility comes first in ${N}`,
        p: `On unsewered land, a site evaluation determines whether and where a system can go, and that answer usually decides where the house sits. Lane County runs this process and it requires test pits dug on the property. Do it during your inspection period. Buying land first and asking later is how people end up owning a view they cannot build on.`,
      });
      if (a.water) out.push(waterBlock);
      if (a.wildfire) out.push(wildfireBlock);
      out.push({
        h: `Access and utilities around ${N}`,
        p: `Driving down a road is not the same as having a recorded legal right to use it. Look for easements, road maintenance agreements, and any seasonal access limits. Then get a written utility estimate for bringing power to the building site, because distance and terrain drive that number and it can rival the price of the land itself.`,
      });
      break;
    case 'first-time-buyers':
      if (a.usda) out.push(usdaBlock);
      out.push({
        h: `What your money does in ${N}`,
        p: rural
          ? `Out here your budget usually buys more space and fewer services. That trade works well for some people and badly for others, and the deciding factor is almost never the house. It is the drive, the well and septic upkeep, and how you actually spend a Saturday. Run the whole monthly picture, not just the payment.`
          : `In ${N} you are buying into services, walkability, and a shorter drive, and paying for them in price per square foot. For a first purchase that trade is often the right one, because a smaller place in a location you love beats a larger one you resent driving to.`,
      });
      out.push(schoolBlock);
      out.push({
        h: `Where to actually start`,
        p: `Two calls. A lender approved for Oregon Flex Lending, to find out what you qualify for and what the payment really looks like with taxes and insurance. And DevNW in Springfield, which is the designated homeownership center for Lane County, to ask what down payment assistance is currently funded and when the next homebuyer education class runs. Programs change and city-level funds go in and out, so ask rather than read.`,
      });
      break;
    case 'selling':
      out.push({
        h: `Who your ${N} buyer actually is`,
        p: rural
          ? `Rural listings pull heavily from buyers who are not local and who shop online for months before they ever drive out. That changes what your marketing has to do. Documentation, mapped boundaries, drone coverage, and photography timed to the season are not extras on a property like this. They are the showing.`
          : `Your buyer here is usually local or relocating into the metro, and they are comparing your house against several others in the same week. That makes preparation and photography the whole game, because you are competing for attention in the first ten days and that window does not come back.`,
      });
      if (a.septic === true || a.septic === 'mixed') out.push({
        h: `Get the paper together before you list`,
        p: `Well log, recent water test, septic permit and pumping records, permits for any outbuildings, and a survey if you have one. Sellers who answer questions with documents keep control of the negotiation. Sellers who shrug watch buyers subtract from their offer. Oregon also requires that domestic well test once you accept an offer, so you may as well be ahead of it.`,
      });
      if (a.historic) out.push(historicBlock);
      out.push({
        h: `Pricing in a market this size`,
        p: `Smaller areas have thinner comparable data, which makes pricing more craft and less arithmetic. An online estimate is at its least reliable exactly here, because it cannot see your outbuildings, your view, your water, or the condition of the place that sold down the road. I price from actual closed sales plus what the local features genuinely add.`,
      });
      break;
    case 'homes-for-sale':
      out.push({
        h: `What the housing here is actually like`,
        p: clean(l.propertyNotes),
      });
      if (a.septic !== false) out.push(septicBlock);
      out.push(schoolBlock);
      out.push(commuteBlock);
      break;
    case 'relocation':
      out.push(commuteBlock);
      out.push({
        h: `What a normal week looks like in ${N}`,
        p: `${clean(l.lifestyle)}`,
      });
      out.push(schoolBlock);
      if (rural) out.push({
        h: `The part people underestimate`,
        p: `Rural living is genuinely different, not just further away. You own your water and your waste. Power goes out and takes longer to come back. Deliveries are less reliable and a forgotten grocery item is a real decision. Most people who move out here love it, and the ones who struggle are almost always the ones nobody told in advance.`,
      });
      break;
    case 'investment-property':
      out.push({
        h: `The rental picture in ${N}`,
        p: a.rental === 'strong'
          ? `This is one of the deeper rental markets in the county, which cuts both ways: more comparable rents to price against, and more competition when you buy. Get real rent comparables from actual listed rentals rather than a national estimate, and build in vacancy and a capital reserve before you decide a deal works.`
          : a.rental === 'mixed'
            ? `The rental market here is real but shallower than the metro. That means fewer comparable rents to price against and a longer time to fill a vacancy, both of which belong in your model. Talk to a local property manager about realistic rent and realistic days-vacant before you make an offer.`
            : `Be careful here. This is a thin rental market, and a property that pencils on paper can sit empty far longer than a metro model predicts. Fewer comparable rents means less pricing confidence, and distance makes management harder and more expensive. It can work. It needs conservative assumptions.`,
      });
      out.push({
        h: `Know the rules before you buy`,
        p: `Oregon has statewide landlord tenant law that is more tenant protective than many states, covering notice requirements and limits on rent increases. None of that makes rentals a bad idea and all of it makes going in informed a good one. Talk to a property manager or an attorney before your first purchase so you start compliant instead of correcting later.`,
      });
      if (a.septic === true) out.push({
        h: `Rural rentals carry extra load`,
        p: `A tenant will not notice a slow leak, watch the pressure tank, or keep vehicles off the drainfield. On well and septic property that turns routine maintenance into deferred maintenance fast. Budget for it, inspect harder than you would in town, and set expectations with tenants in writing.`,
      });
      out.push({
        h: `The numbers that decide it`,
        p: `Gross rent is the least interesting figure in the analysis. What matters is what survives taxes, insurance, vacancy, maintenance reserve, management, and debt service. I will run that honestly for a ${N} property, including on deals I would not do myself.`,
      });
      break;
    default:
      out.push(zoningBlock);
  }
  // Guarantee substance on every page, in a way that is still specific to this area.
  out.push(settingBlock);
  if (out.length < 4) out.push(inspectBlock);
  return out;
}

const clean = (s) => String(s).replace(/\s+/g, ' ').trim();
