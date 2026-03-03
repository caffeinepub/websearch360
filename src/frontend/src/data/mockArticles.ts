import type { Article } from "../types/article";

const now = new Date();
const hoursAgo = (h: number) =>
  new Date(now.getTime() - h * 60 * 60 * 1000).toISOString();
const minutesAgo = (m: number) =>
  new Date(now.getTime() - m * 60 * 1000).toISOString();

export const MOCK_ARTICLES: Article[] = [
  // ===== POLITICS =====
  {
    id: "pol-1",
    category: "politics",
    headline:
      "Senate Passes Landmark Infrastructure Overhaul Bill in 67-33 Vote",
    summary:
      'The U.S. Senate approved a sweeping $1.4 trillion infrastructure package late Tuesday, marking the largest federal investment in roads, bridges, and broadband in over three decades. The bipartisan bill now heads to the House where leadership expects a vote within two weeks. President Martinez called the passage "a historic moment for working Americans."',
    source: "Reuters",
    timestamp: minutesAgo(45),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "pol-2",
    category: "politics",
    headline:
      "EU Parliament Votes to Expand Digital Sovereignty Act Amid Tech Giant Pushback",
    summary:
      "European lawmakers voted 412-189 to extend the Digital Sovereignty Act, requiring major technology companies to store EU citizen data exclusively on European servers by 2027. Silicon Valley firms have threatened legal challenges, arguing the measure violates international trade agreements. The European Commission defended the legislation as essential for protecting democratic institutions.",
    source: "BBC",
    timestamp: hoursAgo(2),
    severity: "normal",
    breaking: false,
  },
  {
    id: "pol-3",
    category: "politics",
    headline:
      "Governor Chen Announces 2028 Presidential Bid, Shaking Up Democratic Primary",
    summary:
      'California Governor Angela Chen officially entered the 2028 presidential race on Wednesday, becoming the fifth major Democrat to declare candidacy. Her campaign platform centers on climate resilience, universal childcare, and a proposed "Digital New Deal" for rural broadband access. Early polling shows her within striking distance of frontrunner Senator James Holloway.',
    source: "AP",
    timestamp: hoursAgo(3),
    severity: "normal",
    breaking: false,
  },
  {
    id: "pol-4",
    category: "politics",
    headline:
      "Supreme Court Agrees to Hear Landmark AI Liability Case This Fall",
    summary:
      "The U.S. Supreme Court announced it will take up a pivotal case determining whether artificial intelligence companies can be held liable for harms caused by their systems. The case, stemming from a 2024 incident in which an AI-generated deepfake led to financial fraud affecting thousands, could reshape the legal landscape for the entire tech industry. Oral arguments are scheduled for October.",
    source: "CNN",
    timestamp: hoursAgo(4),
    severity: "normal",
    breaking: false,
  },
  {
    id: "pol-5",
    category: "politics",
    headline:
      "UK Prime Minister Faces No-Confidence Vote After Budget Controversy",
    summary:
      'British Prime Minister David Harrington faces a no-confidence motion after his government\'s emergency budget sparked widespread protests across England and Scotland. The budget included a 3% increase in income tax for middle earners and cuts to public pension benefits. Opposition leader Sarah Okafor called the measures "a betrayal of ordinary British families."',
    source: "BBC",
    timestamp: hoursAgo(5),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "pol-6",
    category: "politics",
    headline:
      "G20 Summit Ends With Fragile Agreement on Global Minimum Corporate Tax",
    summary:
      "Leaders of the world's twenty largest economies concluded their annual summit with a tentative agreement to enforce a 15% global minimum corporate tax rate, though three nations withheld full endorsement. The deal, if ratified, would close offshore tax havens used by multinational corporations to shelter an estimated $800 billion annually. Implementation is expected to begin in 2027.",
    source: "Reuters",
    timestamp: hoursAgo(6),
    severity: "normal",
    breaking: false,
  },
  {
    id: "pol-7",
    category: "politics",
    headline: "Brazil's Congress Passes Historic Amazon Protection Legislation",
    summary:
      "Brazil's lower house approved sweeping legislation that permanently protects 85% of the Amazon rainforest from commercial development, a landmark victory for environmental advocates. The bill, backed by President Lula's coalition, imposes criminal penalties of up to 20 years for illegal deforestation. Indigenous land rights groups praised the measure as long overdue.",
    source: "Al Jazeera",
    timestamp: hoursAgo(7),
    severity: "normal",
    breaking: false,
  },
  {
    id: "pol-8",
    category: "politics",
    headline:
      "NATO Expands Rapid Response Force to 100,000 Troops Amid Eastern Tensions",
    summary:
      "NATO defense ministers agreed to double the alliance's rapid response force to 100,000 troops, the largest expansion since the Cold War. The decision follows increased military activity along the alliance's eastern flank and comes with a commitment from member states to raise defense spending to 2.5% of GDP. Secretary General Rutte called the move \"a clear signal of unity and resolve.\"",
    source: "Reuters",
    timestamp: hoursAgo(8),
    severity: "normal",
    breaking: false,
  },

  // ===== NATIONAL =====
  {
    id: "nat-1",
    category: "national",
    headline:
      "Federal Reserve Holds Interest Rates Steady, Signals Two Cuts Possible in 2026",
    summary:
      "The Federal Reserve kept its benchmark interest rate unchanged at 4.25% on Wednesday, but Fed Chair Powell hinted that two quarter-point reductions could come later this year if inflation continues its downward trend. Markets rallied on the news, with the S&P 500 gaining 1.8% in afternoon trading. Economists say the cautious stance reflects ongoing uncertainty in the labor market.",
    source: "Bloomberg",
    timestamp: minutesAgo(30),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "nat-2",
    category: "national",
    headline:
      "Nationwide Teachers' Strike Enters Third Week as Negotiations Stall",
    summary:
      "More than 400,000 public school teachers across 22 states remain on strike as contract negotiations between unions and state governments collapsed for the second time this month. Students in affected districts are attending virtual classes, though educators say remote learning is an inadequate substitute. The American Federation of Teachers is demanding a 12% pay increase and reduced class sizes.",
    source: "AP",
    timestamp: hoursAgo(1),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "nat-3",
    category: "national",
    headline:
      "New High-Speed Rail Corridor Connecting Chicago to Detroit Opens to Passengers",
    summary:
      "The Midwest Express Rail Corridor officially opened Tuesday, cutting travel time between Chicago and Detroit from five hours to under two hours. The $28 billion project, a decade in the making, is the first new high-speed rail line in the United States since Amtrak's Acela expansion. Officials expect the line to carry 4 million passengers annually by 2028.",
    source: "CNN",
    timestamp: hoursAgo(3),
    severity: "normal",
    breaking: false,
  },
  {
    id: "nat-4",
    category: "national",
    headline:
      "Drought Emergency Declared Across Seven Western States as Reservoirs Hit Record Lows",
    summary:
      "The Biden-Martinez administration declared a federal drought emergency across California, Nevada, Arizona, Utah, Colorado, New Mexico, and Oregon after reservoir levels fell to their lowest point in recorded history. Water rationing measures will take effect immediately, affecting agriculture, municipalities, and hydroelectric power generation. Scientists warn the drought could persist through 2027 without significant precipitation.",
    source: "Reuters",
    timestamp: hoursAgo(4),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "nat-5",
    category: "national",
    headline:
      "Congress Approves $50 Billion Affordable Housing Act to Address National Crisis",
    summary:
      "Bipartisan legislation allocating $50 billion for affordable housing construction and rental assistance passed both chambers of Congress on Thursday. The bill includes incentives for municipalities to relax zoning restrictions and funds 500,000 new housing units over five years. Housing advocates called it the most significant federal housing investment since the 1970s.",
    source: "AP",
    timestamp: hoursAgo(5),
    severity: "normal",
    breaking: false,
  },
  {
    id: "nat-6",
    category: "national",
    headline: "FDA Approves Revolutionary Gene Therapy for Sickle Cell Disease",
    summary:
      "The Food and Drug Administration granted full approval to GeneCure's CRISPR-based therapy for sickle cell disease, offering a potential one-time cure for the debilitating genetic condition. Clinical trials showed 94% of patients achieved functional remission after a single treatment. The therapy, priced at $2.8 million per patient, raises immediate questions about insurance coverage and access.",
    source: "Reuters",
    timestamp: hoursAgo(6),
    severity: "normal",
    breaking: false,
  },
  {
    id: "nat-7",
    category: "national",
    headline:
      "Border Security Bill Fails in Senate After Last-Minute Defections",
    summary:
      "A comprehensive border security and immigration reform bill fell three votes short of the 60 needed to advance in the Senate, dealing a significant blow to the administration's legislative agenda. The bill would have added 5,000 border agents, established new asylum processing centers, and created a pathway to legal status for 2 million undocumented immigrants. Negotiations are expected to resume after the congressional recess.",
    source: "Fox News",
    timestamp: hoursAgo(7),
    severity: "normal",
    breaking: false,
  },
  {
    id: "nat-8",
    category: "national",
    headline:
      "National Cybersecurity Agency Reports Record 2.3 Million Ransomware Attacks in 2025",
    summary:
      "The Cybersecurity and Infrastructure Security Agency released its annual threat report showing ransomware attacks on U.S. entities surged 47% in 2025, with total damages exceeding $89 billion. Healthcare systems and municipal governments were the most targeted sectors. The agency is calling for mandatory cybersecurity standards for critical infrastructure operators.",
    source: "CNN",
    timestamp: hoursAgo(9),
    severity: "normal",
    breaking: false,
  },

  // ===== INTERNATIONAL =====
  {
    id: "int-1",
    category: "international",
    headline:
      "China and India Sign Historic Border Demarcation Agreement After 60 Years",
    summary:
      "In a landmark diplomatic breakthrough, China and India signed a comprehensive border demarcation agreement resolving territorial disputes that have simmered since the 1962 war. The deal, brokered with assistance from the United Nations, establishes a 20-kilometer buffer zone along the Line of Actual Control. Both nations agreed to withdraw troops from contested areas within 90 days.",
    source: "Al Jazeera",
    timestamp: hoursAgo(1),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "int-2",
    category: "international",
    headline:
      "African Union Launches $200 Billion Continental Development Fund",
    summary:
      'The African Union unveiled a $200 billion continental development fund at its annual summit in Addis Ababa, aimed at financing infrastructure, education, and healthcare across 54 member states. The fund, backed by sovereign wealth contributions and international development banks, represents the largest coordinated investment initiative in African history. The AU chair called it "the foundation of Africa\'s century."',
    source: "BBC",
    timestamp: hoursAgo(2),
    severity: "normal",
    breaking: false,
  },
  {
    id: "int-3",
    category: "international",
    headline:
      "Japan Announces $500 Billion Green Energy Transition Plan by 2035",
    summary:
      "Japanese Prime Minister Tanaka unveiled an ambitious plan to achieve 80% renewable energy by 2035, backed by $500 billion in public and private investment. The strategy includes offshore wind farms, next-generation nuclear reactors, and a national hydrogen distribution network. Japan aims to become the world's first major economy to achieve carbon neutrality by 2045.",
    source: "Reuters",
    timestamp: hoursAgo(3),
    severity: "normal",
    breaking: false,
  },
  {
    id: "int-4",
    category: "international",
    headline:
      "UN Security Council Passes Resolution Demanding Ceasefire in Sudan",
    summary:
      "The United Nations Security Council unanimously passed a resolution demanding an immediate ceasefire in Sudan's ongoing civil conflict, which has displaced over 12 million people since 2023. The resolution authorizes a 15,000-strong peacekeeping force and establishes humanitarian corridors for aid delivery. Sudan's warring factions have 72 hours to respond to the ceasefire demand.",
    source: "Al Jazeera",
    timestamp: hoursAgo(4),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "int-5",
    category: "international",
    headline:
      "South Korea and North Korea Hold First Direct Talks in Seven Years",
    summary:
      "Delegations from South Korea and North Korea met at the Panmunjom truce village for the first direct diplomatic talks since 2019, raising cautious hopes for a reduction in tensions on the Korean Peninsula. The discussions focused on family reunification programs and the possibility of reopening the Kaesong Industrial Complex. A follow-up meeting is scheduled for next month.",
    source: "BBC",
    timestamp: hoursAgo(5),
    severity: "normal",
    breaking: false,
  },
  {
    id: "int-6",
    category: "international",
    headline: "Mexico Becomes World's Sixth Largest Economy, Surpassing France",
    summary:
      "Mexico's GDP surpassed France's for the first time in history, making it the world's sixth largest economy according to IMF data released Thursday. The milestone reflects a decade of nearshoring investment as companies relocated manufacturing from Asia to North America. Mexico's manufacturing sector grew 8.3% in 2025, driven by automotive, electronics, and aerospace industries.",
    source: "Reuters",
    timestamp: hoursAgo(6),
    severity: "normal",
    breaking: false,
  },
  {
    id: "int-7",
    category: "international",
    headline: "Australia Announces Largest Military Buildup Since World War II",
    summary:
      "Australia's government unveiled a $368 billion defense spending plan over the next decade, the largest military expansion in the country's history. The package includes nuclear-powered submarines under the AUKUS agreement, long-range missile systems, and a doubling of the Australian Defence Force's active personnel. Prime Minister Walsh cited \"a fundamentally changed strategic environment\" in the Indo-Pacific.",
    source: "Reuters",
    timestamp: hoursAgo(7),
    severity: "normal",
    breaking: false,
  },
  {
    id: "int-8",
    category: "international",
    headline:
      "WHO Declares End to Mpox Global Health Emergency After Vaccine Rollout Success",
    summary:
      'The World Health Organization officially declared the end of the mpox global health emergency, citing a 94% reduction in cases following a successful international vaccination campaign. Over 180 million doses were administered across 60 countries in the past 18 months. WHO Director-General praised the response as "a model for future outbreak preparedness."',
    source: "WHO",
    timestamp: hoursAgo(8),
    severity: "normal",
    breaking: false,
  },

  // ===== SPORTS =====
  {
    id: "spo-1",
    category: "sports",
    headline:
      "LeBron James Jr. Signs Record $350 Million NBA Contract with Los Angeles Lakers",
    summary:
      "Bronny James, son of NBA legend LeBron James, signed a five-year, $350 million maximum contract extension with the Los Angeles Lakers, becoming the highest-paid player in NBA history. The 22-year-old guard averaged 28.4 points, 7.2 assists, and 5.1 rebounds per game last season. The deal surpasses the previous record set by his father in 2023.",
    source: "ESPN",
    timestamp: minutesAgo(20),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "spo-2",
    category: "sports",
    headline:
      "Manchester City Wins Champions League Final in Dramatic Penalty Shootout",
    summary:
      'Manchester City claimed their fourth UEFA Champions League title in six years, defeating Real Madrid 4-3 on penalties after a 1-1 draw in Munich. Erling Haaland, who missed the decisive penalty in last year\'s final, converted the winning spot kick to send City fans into delirium. Manager Pep Guardiola called it "the most emotional night of my career."',
    source: "BBC",
    timestamp: hoursAgo(2),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "spo-3",
    category: "sports",
    headline:
      "Serena Williams' Daughter Alexis Wins First Grand Slam at Australian Open",
    summary:
      "Alexis Ohanian Jr., 19, claimed her first Grand Slam title at the Australian Open, defeating world number one Iga Swiatek 6-4, 3-6, 7-5 in a thrilling final. The American teenager, who turned professional just two years ago, becomes the youngest Australian Open champion since Maria Sharapova in 2008. Her mother Serena Williams watched from the players' box in tears.",
    source: "AP",
    timestamp: hoursAgo(3),
    severity: "normal",
    breaking: false,
  },
  {
    id: "spo-4",
    category: "sports",
    headline:
      "NFL Announces Expansion to 36 Teams with Mexico City and London Franchises",
    summary:
      "The NFL owners voted 28-4 to approve expansion franchises in Mexico City and London, bringing the league to 36 teams by the 2027 season. The Mexico City franchise, to be called the Aztecs, will play home games at Estadio Azteca, while the London franchise will be based at Tottenham Hotspur Stadium. Each expansion fee is set at $4 billion.",
    source: "ESPN",
    timestamp: hoursAgo(4),
    severity: "normal",
    breaking: false,
  },
  {
    id: "spo-5",
    category: "sports",
    headline:
      "Novak Djokovic Announces Retirement After Record 28th Grand Slam Title",
    summary:
      'Tennis legend Novak Djokovic announced his retirement from professional tennis at age 39, one week after claiming his record 28th Grand Slam title at Roland Garros. The Serbian champion, widely regarded as the greatest player in the sport\'s history, said he wanted to "leave at the top." He finishes with a career record of 1,247-198 and 428 weeks at world number one.',
    source: "Reuters",
    timestamp: hoursAgo(5),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "spo-6",
    category: "sports",
    headline:
      "Los Angeles 2028 Olympics Ticket Sales Shatter All Previous Records",
    summary:
      "Ticket sales for the 2028 Los Angeles Summer Olympics surpassed $2.1 billion in the first 48 hours of public availability, breaking every previous Olympic record. Demand was highest for athletics, swimming, and the newly added esports events. Organizers have announced a lottery system for the most sought-after events due to overwhelming demand.",
    source: "AP",
    timestamp: hoursAgo(6),
    severity: "normal",
    breaking: false,
  },
  {
    id: "spo-7",
    category: "sports",
    headline: "Formula 1 Introduces Electric Hybrid Class for 2027 Season",
    summary:
      "Formula 1 announced a new hybrid electric class that will run alongside the traditional combustion engine category starting in 2027. The new class, called F1-E, will feature cars producing 1,200 horsepower from a combination of electric motors and a small turbocharged engine. Ferrari, Mercedes, and a new Chinese manufacturer have already committed to fielding teams.",
    source: "Reuters",
    timestamp: hoursAgo(7),
    severity: "normal",
    breaking: false,
  },
  {
    id: "spo-8",
    category: "sports",
    headline:
      "Golden State Warriors Win NBA Championship in Six Games Over Boston Celtics",
    summary:
      "The Golden State Warriors captured their sixth NBA championship in franchise history, defeating the Boston Celtics 4-2 in the Finals. Stephen Curry, at 38, was named Finals MVP after averaging 31.2 points per game in the series. The victory gives Curry his fifth championship ring, tying him with Kobe Bryant on the all-time list.",
    source: "ESPN",
    timestamp: hoursAgo(8),
    severity: "normal",
    breaking: false,
  },

  // ===== WAR =====
  {
    id: "war-1",
    category: "war",
    headline:
      "⚠️ CRITICAL: Nuclear Facility in Eastern Europe Reports Radiation Leak After Drone Strike",
    summary:
      'A nuclear power facility in eastern Ukraine reported a radiation leak following a precision drone strike on its cooling infrastructure, triggering emergency protocols and evacuation orders for a 30-kilometer radius. The International Atomic Energy Agency has dispatched an emergency response team and is monitoring radiation levels. NATO has called an emergency session and described the attack as "a red line that cannot be crossed."',
    source: "Reuters",
    timestamp: minutesAgo(15),
    severity: "critical",
    breaking: true,
  },
  {
    id: "war-2",
    category: "war",
    headline:
      "Israel and Iran Exchange Missile Strikes in Escalating Regional Conflict",
    summary:
      "Israel launched a series of precision airstrikes on Iranian military installations in response to a ballistic missile barrage that struck Tel Aviv's outskirts, killing 12 civilians. Iran's Revolutionary Guard vowed \"devastating retaliation\" while the United States deployed two additional carrier strike groups to the Persian Gulf. The UN Security Council convened an emergency session as world leaders urged de-escalation.",
    source: "Al Jazeera",
    timestamp: minutesAgo(45),
    severity: "critical",
    breaking: true,
  },
  {
    id: "war-3",
    category: "war",
    headline:
      "Ukraine Launches Largest Drone Offensive Deep Into Russian Territory",
    summary:
      'Ukraine deployed over 500 long-range drones in a coordinated strike on Russian oil refineries, military depots, and railway infrastructure, marking the deepest penetration into Russian territory since the war began. Russian air defenses intercepted approximately 60% of the drones, but significant damage was reported at three major fuel storage facilities. The Kremlin called the attack "an act of terrorism" and promised a severe response.',
    source: "BBC",
    timestamp: hoursAgo(1),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "war-4",
    category: "war",
    headline:
      "Myanmar Junta Loses Control of Second Largest City to Resistance Forces",
    summary:
      "Armed resistance forces in Myanmar seized control of Mandalay, the country's second largest city, after a three-week siege that left the military junta's garrison surrounded and cut off from supply lines. The fall of Mandalay represents the most significant territorial loss for the junta since the 2021 coup. The UN estimates 2.5 million people have been displaced by the ongoing civil war.",
    source: "Al Jazeera",
    timestamp: hoursAgo(2),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "war-5",
    category: "war",
    headline:
      "Sudan Peace Talks Collapse as Paramilitary Forces Resume Offensive in Darfur",
    summary:
      "Ceasefire negotiations in Sudan broke down after the Rapid Support Forces resumed their offensive in Darfur, shelling civilian areas in El Fasher. The collapse of talks, which had been mediated by the African Union and United States, dashes hopes for an end to a conflict that has killed an estimated 150,000 people. Aid organizations warn of imminent famine conditions affecting 8 million people.",
    source: "Reuters",
    timestamp: hoursAgo(3),
    severity: "normal",
    breaking: false,
  },
  {
    id: "war-6",
    category: "war",
    headline:
      "Taiwan Strait Tensions Spike as China Conducts Largest Military Exercise in Decade",
    summary:
      "China's People's Liberation Army launched its largest military exercise around Taiwan in ten years, deploying 80 warships, 200 aircraft, and conducting live-fire drills within 20 nautical miles of the island. Taiwan scrambled its air force and placed its military on high alert. The United States called the exercises \"destabilizing and provocative\" and urged Beijing to stand down.",
    source: "Reuters",
    timestamp: hoursAgo(4),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "war-7",
    category: "war",
    headline: "Gaza Ceasefire Holds as Hostage Exchange Enters Second Phase",
    summary:
      "The Gaza ceasefire entered its second month with relative stability as Hamas and Israel completed the second phase of a hostage-for-prisoner exchange. Forty-two remaining hostages were released in exchange for 420 Palestinian prisoners. International monitors report that humanitarian aid deliveries have increased significantly, though reconstruction of destroyed infrastructure has barely begun.",
    source: "Al Jazeera",
    timestamp: hoursAgo(5),
    severity: "normal",
    breaking: false,
  },
  {
    id: "war-8",
    category: "war",
    headline:
      "NATO Deploys Permanent Bases in Finland and Sweden for First Time",
    summary:
      "NATO officially established its first permanent military bases in Finland and Sweden, completing the alliance's historic expansion following both countries' accession. The bases, located near the Russian border, will house multinational battle groups of approximately 3,000 troops each. Russia condemned the deployments as \"a direct threat to regional security\" and announced counter-measures.",
    source: "BBC",
    timestamp: hoursAgo(6),
    severity: "normal",
    breaking: false,
  },

  // ===== BUSINESS =====
  {
    id: "bus-1",
    category: "business",
    headline:
      "Apple Becomes First Company to Reach $5 Trillion Market Capitalization",
    summary:
      "Apple Inc. crossed the $5 trillion market capitalization threshold on Thursday, becoming the first company in history to achieve this milestone. The milestone was driven by strong iPhone 17 sales, explosive growth in Apple Intelligence services, and the company's expanding financial products division. Apple's stock has gained 68% over the past 12 months.",
    source: "Bloomberg",
    timestamp: minutesAgo(10),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "bus-2",
    category: "business",
    headline:
      "Global Recession Fears Mount as Manufacturing PMI Falls to 18-Month Low",
    summary:
      "The global manufacturing Purchasing Managers' Index fell to 47.2 in February, its lowest reading in 18 months and the fourth consecutive month below the 50-point expansion threshold. Economists at Goldman Sachs raised their probability of a global recession within 12 months to 35%. The data triggered a broad selloff in equity markets, with the Dow Jones falling 2.3%.",
    source: "Bloomberg",
    timestamp: hoursAgo(1),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "bus-3",
    category: "business",
    headline: "Amazon Acquires Robotics Giant Boston Dynamics for $8.5 Billion",
    summary:
      "Amazon announced the acquisition of Boston Dynamics from Hyundai for $8.5 billion, its largest deal since the MGM purchase in 2021. The acquisition gives Amazon access to Boston Dynamics' advanced humanoid and quadruped robots, which the company plans to deploy in its fulfillment centers and delivery operations. The deal is subject to regulatory approval and is expected to close by year-end.",
    source: "Reuters",
    timestamp: hoursAgo(2),
    severity: "normal",
    breaking: false,
  },
  {
    id: "bus-4",
    category: "business",
    headline:
      "OPEC+ Cuts Oil Production by 1.5 Million Barrels Per Day, Sending Prices Surging",
    summary:
      "OPEC+ members agreed to reduce oil production by 1.5 million barrels per day starting next month, sending crude oil prices up 8% to $94 per barrel. The surprise cut, led by Saudi Arabia and Russia, comes amid concerns about weakening global demand. Analysts warn the move could reignite inflation in major economies and complicate central bank policy decisions.",
    source: "Reuters",
    timestamp: hoursAgo(3),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "bus-5",
    category: "business",
    headline:
      "Tesla Reports Record Q4 Earnings, Announces $25,000 Model 2 Launch Date",
    summary:
      'Tesla reported record fourth-quarter earnings of $4.8 billion, beating analyst estimates by 23%, and announced the Model 2 compact electric vehicle will begin deliveries in September 2026 at a starting price of $24,990. CEO Elon Musk said the Model 2 is "the most important product in Tesla\'s history" and expects it to outsell all other Tesla models combined. The stock surged 12% in after-hours trading.',
    source: "Bloomberg",
    timestamp: hoursAgo(4),
    severity: "normal",
    breaking: false,
  },
  {
    id: "bus-6",
    category: "business",
    headline:
      "Bitcoin Surges Past $180,000 as Institutional Adoption Accelerates",
    summary:
      "Bitcoin reached a new all-time high of $182,400 on Thursday, driven by record inflows into spot Bitcoin ETFs and announcements from three major sovereign wealth funds that they have added Bitcoin to their portfolios. Total assets under management in Bitcoin ETFs surpassed $500 billion for the first time. Analysts at JPMorgan raised their 12-month price target to $250,000.",
    source: "Bloomberg",
    timestamp: hoursAgo(5),
    severity: "normal",
    breaking: false,
  },
  {
    id: "bus-7",
    category: "business",
    headline:
      "Microsoft and Google Announce Joint AI Safety Research Initiative",
    summary:
      "Microsoft and Google announced an unprecedented joint initiative to develop safety standards and testing protocols for advanced AI systems, committing $2 billion to the effort over five years. The partnership, which will operate as an independent nonprofit, will focus on alignment research, interpretability tools, and red-teaming methodologies. OpenAI and Anthropic have been invited to join.",
    source: "Reuters",
    timestamp: hoursAgo(6),
    severity: "normal",
    breaking: false,
  },
  {
    id: "bus-8",
    category: "business",
    headline:
      "China's Economy Grows 5.8% in 2025, Defying Slowdown Predictions",
    summary:
      "China's National Bureau of Statistics reported GDP growth of 5.8% for 2025, exceeding the government's 5% target and surprising economists who had forecast a slowdown. The stronger-than-expected performance was driven by robust domestic consumption, a recovery in the property sector, and surging exports of electric vehicles and renewable energy equipment. The yuan strengthened 1.2% against the dollar on the news.",
    source: "Reuters",
    timestamp: hoursAgo(7),
    severity: "normal",
    breaking: false,
  },

  // ===== TECHNOLOGY =====
  {
    id: "tec-1",
    category: "technology",
    headline:
      "OpenAI Releases GPT-6 with Human-Level Performance Across All Benchmarks",
    summary:
      'OpenAI unveiled GPT-6, claiming it achieves human-level or superhuman performance on every major cognitive benchmark, including the bar exam, medical licensing tests, and advanced mathematics competitions. The model demonstrates unprecedented reasoning capabilities and can autonomously complete complex multi-step tasks. CEO Sam Altman called it "the most significant technological development in human history."',
    source: "Reuters",
    timestamp: minutesAgo(5),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "tec-2",
    category: "technology",
    headline:
      "Google DeepMind Achieves Breakthrough in Room-Temperature Superconductivity",
    summary:
      "Google DeepMind researchers announced the discovery of a material that exhibits superconductivity at room temperature and ambient pressure, a breakthrough that has eluded scientists for over a century. The material, a complex hydrogen-rich compound, was identified using AI-driven materials discovery algorithms. If independently verified, the discovery could revolutionize energy transmission, computing, and transportation.",
    source: "Nature",
    timestamp: hoursAgo(1),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "tec-3",
    category: "technology",
    headline:
      "Meta Launches Neural Interface Headset That Reads Thoughts With 95% Accuracy",
    summary:
      "Meta unveiled its Reality Pro Neural headset, which uses non-invasive brain-computer interface technology to interpret user intentions with 95% accuracy, allowing hands-free control of digital environments. The device, priced at $3,499, will be available to developers in Q3 2026. Privacy advocates immediately raised concerns about the collection and storage of neural data.",
    source: "Reuters",
    timestamp: hoursAgo(2),
    severity: "normal",
    breaking: false,
  },
  {
    id: "tec-4",
    category: "technology",
    headline:
      "China's Huawei Unveils 2nm Chip, Challenging TSMC's Manufacturing Dominance",
    summary:
      "Huawei Technologies revealed a domestically produced 2-nanometer processor, a significant leap that challenges the assumption that U.S. export controls had permanently set back China's semiconductor industry. The chip, manufactured using a novel extreme ultraviolet lithography process developed entirely within China, performs comparably to TSMC's latest offerings. The announcement sent shockwaves through global semiconductor markets.",
    source: "Reuters",
    timestamp: hoursAgo(3),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "tec-5",
    category: "technology",
    headline: "SpaceX Starship Completes First Crewed Mission to Lunar Orbit",
    summary:
      "SpaceX's Starship successfully completed its first crewed mission, carrying four NASA astronauts to lunar orbit and back in a 14-day mission that serves as a dress rehearsal for the Artemis Moon landing planned for 2027. The mission validated Starship's life support systems, orbital refueling capability, and reentry heat shield. NASA Administrator Nelson called it \"a giant leap toward returning humans to the Moon.\"",
    source: "Reuters",
    timestamp: hoursAgo(4),
    severity: "normal",
    breaking: false,
  },
  {
    id: "tec-6",
    category: "technology",
    headline:
      "Quantum Computing Startup Achieves 10,000-Qubit Milestone, Threatening Current Encryption",
    summary:
      "IonQ announced it has achieved a stable 10,000-qubit quantum computer, a milestone that experts say brings practical quantum computing within reach and poses a credible threat to current RSA and elliptic curve encryption standards. The U.S. National Institute of Standards and Technology immediately urged organizations to accelerate migration to post-quantum cryptography. The announcement triggered emergency meetings at major financial institutions.",
    source: "Reuters",
    timestamp: hoursAgo(5),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "tec-7",
    category: "technology",
    headline:
      "EU Fines Meta $4.2 Billion for Systematic GDPR Violations in AI Training",
    summary:
      "The European Data Protection Board issued a record $4.2 billion fine against Meta for using European users' personal data to train its AI models without proper consent, the largest GDPR penalty in history. Meta has 90 days to appeal and must immediately cease using EU user data for AI training. The ruling sets a precedent that could affect every major AI company operating in Europe.",
    source: "BBC",
    timestamp: hoursAgo(6),
    severity: "normal",
    breaking: false,
  },
  {
    id: "tec-8",
    category: "technology",
    headline:
      "Apple Vision Pro 3 Sells Out in 4 Minutes, Demand Overwhelms Supply Chain",
    summary:
      "Apple's Vision Pro 3 spatial computing headset sold out globally within four minutes of going on sale, with over 8 million pre-orders placed before the device was officially available. The third-generation device features a 40% lighter design, 8K per-eye displays, and a new AI co-pilot feature. Apple has apologized for supply constraints and says additional inventory will be available within six weeks.",
    source: "Bloomberg",
    timestamp: hoursAgo(7),
    severity: "normal",
    breaking: false,
  },

  // ===== SCIENCE =====
  {
    id: "sci-1",
    category: "science",
    headline:
      "NASA's Europa Clipper Discovers Evidence of Active Hydrothermal Vents on Jupiter's Moon",
    summary:
      "NASA's Europa Clipper spacecraft has detected chemical signatures strongly suggesting active hydrothermal vents beneath the ice shell of Jupiter's moon Europa, dramatically increasing the likelihood of microbial life in its subsurface ocean. The discovery, published in Nature Astronomy, shows plumes of water vapor containing complex organic molecules and hydrogen sulfide. Scientists are now advocating for an accelerated mission to drill through Europa's ice.",
    source: "Nature",
    timestamp: hoursAgo(1),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "sci-2",
    category: "science",
    headline:
      "Scientists Reverse Aging in Human Cells by 30 Years Using New Epigenetic Therapy",
    summary:
      "Researchers at the Salk Institute published results showing a new epigenetic reprogramming therapy successfully reversed cellular aging markers by the equivalent of 30 years in human skin and blood cells. The therapy, which uses a cocktail of four proteins, showed no signs of causing cancer in extensive safety testing. Clinical trials in elderly patients are expected to begin in 2027.",
    source: "Nature",
    timestamp: hoursAgo(2),
    severity: "normal",
    breaking: false,
  },
  {
    id: "sci-3",
    category: "science",
    headline:
      "James Webb Telescope Captures First Direct Image of Earth-Like Exoplanet Atmosphere",
    summary:
      "The James Webb Space Telescope captured the first detailed atmospheric spectrum of an Earth-sized exoplanet in the habitable zone, revealing the presence of water vapor, carbon dioxide, and methane in proportions that could indicate biological activity. The planet, designated Kepler-452c, orbits a sun-like star 1,400 light-years away. Astronomers caution that non-biological explanations cannot yet be ruled out.",
    source: "Nature",
    timestamp: hoursAgo(3),
    severity: "normal",
    breaking: false,
  },
  {
    id: "sci-4",
    category: "science",
    headline:
      "CERN Announces Discovery of New Fundamental Particle Beyond Standard Model",
    summary:
      'Physicists at CERN\'s Large Hadron Collider announced the discovery of a new fundamental particle that does not fit within the Standard Model of particle physics, potentially pointing to a new force of nature. The particle, provisionally named the "X boson," was detected in 47 billion collision events with a statistical significance of 7.2 sigma. The discovery, if confirmed, would be the most significant advance in fundamental physics since the Higgs boson.',
    source: "Nature",
    timestamp: hoursAgo(4),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "sci-5",
    category: "science",
    headline:
      "Arctic Sea Ice Reaches Lowest Recorded Extent for Second Consecutive Year",
    summary:
      "Arctic sea ice extent reached its lowest recorded minimum for the second year in a row, covering just 3.1 million square kilometers at its September nadir, according to the National Snow and Ice Data Center. Scientists say the accelerating loss is consistent with climate models projecting an ice-free Arctic summer by 2035. The shrinking ice is disrupting weather patterns across the Northern Hemisphere.",
    source: "Reuters",
    timestamp: hoursAgo(5),
    severity: "normal",
    breaking: false,
  },
  {
    id: "sci-6",
    category: "science",
    headline:
      "Fusion Energy Milestone: NIF Achieves Net Energy Gain for 10th Consecutive Time",
    summary:
      "The National Ignition Facility at Lawrence Livermore National Laboratory achieved net energy gain from nuclear fusion for the tenth consecutive time, demonstrating the consistency needed for commercial viability. The latest experiment produced 3.8 megajoules of energy from 2.1 megajoules of laser input. The Department of Energy announced $12 billion in funding for the first commercial fusion power plant.",
    source: "Reuters",
    timestamp: hoursAgo(6),
    severity: "normal",
    breaking: false,
  },
  {
    id: "sci-7",
    category: "science",
    headline:
      "Scientists Successfully Grow Functional Human Kidney in Lab for First Time",
    summary:
      "Researchers at the University of Tokyo and Harvard Medical School jointly announced the successful growth of a functional human kidney from stem cells in a laboratory setting, a breakthrough that could eventually eliminate the organ transplant waiting list. The lab-grown kidney, while smaller than a natural organ, successfully filtered waste products when connected to a circulatory system in animal models. Human trials are at least five years away.",
    source: "Nature",
    timestamp: hoursAgo(7),
    severity: "normal",
    breaking: false,
  },
  {
    id: "sci-8",
    category: "science",
    headline:
      "Astronomers Detect Strongest Evidence Yet for Parallel Universe in CMB Data",
    summary:
      "A team of cosmologists analyzing data from the Planck satellite and the South Pole Telescope identified anomalous cold spots in the cosmic microwave background that are statistically consistent with a collision between our universe and a parallel universe approximately 380,000 years after the Big Bang. The finding, published in Physical Review Letters, has a significance of 4.2 sigma. Independent verification is underway.",
    source: "Nature",
    timestamp: hoursAgo(8),
    severity: "normal",
    breaking: false,
  },

  // ===== HEALTH =====
  {
    id: "hea-1",
    category: "health",
    headline:
      "⚠️ CRITICAL: Novel H5N2 Bird Flu Strain Shows Human-to-Human Transmission in Southeast Asia",
    summary:
      "The World Health Organization confirmed the first documented cases of human-to-human transmission of a novel H5N2 avian influenza strain in Vietnam and Thailand, raising pandemic alarm levels to their highest since COVID-19. At least 47 people have been infected across three countries, with a case fatality rate of 38%. WHO has activated its Emergency Committee and is urging nations to prepare pandemic response plans.",
    source: "WHO",
    timestamp: minutesAgo(30),
    severity: "critical",
    breaking: true,
  },
  {
    id: "hea-2",
    category: "health",
    headline:
      "Alzheimer's Drug Lecanemab Shows 45% Reduction in Cognitive Decline in Phase 3 Trial",
    summary:
      "Eisai and Biogen reported that their Alzheimer's drug lecanemab demonstrated a 45% reduction in cognitive decline in a 3,000-patient Phase 3 clinical trial, the most effective result ever achieved in Alzheimer's treatment. The drug, which targets amyloid plaques in the brain, showed benefits across all stages of the disease. The FDA is expected to grant priority review for an expanded indication.",
    source: "Reuters",
    timestamp: hoursAgo(1),
    severity: "normal",
    breaking: false,
  },
  {
    id: "hea-3",
    category: "health",
    headline:
      "WHO Recommends Universal mRNA Vaccine Platform for Future Pandemic Preparedness",
    summary:
      "The World Health Organization issued new guidelines recommending that all nations develop domestic mRNA vaccine manufacturing capacity as a core component of pandemic preparedness. The recommendation follows the success of COVID-19 mRNA vaccines and new data showing the platform can be adapted to new pathogens within 100 days. WHO is providing $3 billion to help low-income countries build manufacturing infrastructure.",
    source: "WHO",
    timestamp: hoursAgo(2),
    severity: "normal",
    breaking: false,
  },
  {
    id: "hea-4",
    category: "health",
    headline:
      "GLP-1 Drugs Show Dramatic Reduction in Cardiovascular Disease Risk in Landmark Study",
    summary:
      "A landmark 10-year study of 85,000 patients published in the New England Journal of Medicine found that GLP-1 receptor agonists like semaglutide reduced the risk of major cardiovascular events by 42% in patients with obesity, independent of weight loss. The findings suggest the drugs have direct cardioprotective effects beyond their metabolic benefits. Cardiologists are calling for expanded prescribing guidelines.",
    source: "Reuters",
    timestamp: hoursAgo(3),
    severity: "normal",
    breaking: false,
  },
  {
    id: "hea-5",
    category: "health",
    headline:
      "Universal Cancer Vaccine Shows 90% Efficacy in Early Clinical Trials",
    summary:
      "BioNTech announced preliminary results from Phase 1/2 trials of its personalized mRNA cancer vaccine showing 90% efficacy in preventing cancer recurrence across 12 different tumor types. The vaccine, which is customized to each patient's specific tumor mutations, was tested in 340 patients with advanced cancers. Full Phase 3 trials are expected to begin in 2027.",
    source: "Reuters",
    timestamp: hoursAgo(4),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "hea-6",
    category: "health",
    headline:
      "Mental Health Crisis Among Teenagers Reaches Epidemic Proportions, CDC Reports",
    summary:
      "The Centers for Disease Control and Prevention released a report showing rates of depression, anxiety, and suicidal ideation among American teenagers have reached their highest levels since tracking began in 1991. One in three teenage girls reported persistent feelings of sadness or hopelessness in 2025. The CDC is calling for a national mental health emergency declaration and increased funding for school-based counseling.",
    source: "CNN",
    timestamp: hoursAgo(5),
    severity: "normal",
    breaking: false,
  },
  {
    id: "hea-7",
    category: "health",
    headline:
      "Antibiotic-Resistant Superbug Outbreak Spreads to 15 Countries, WHO Warns",
    summary:
      "The World Health Organization issued an urgent alert about a rapidly spreading outbreak of a carbapenem-resistant Klebsiella pneumoniae strain that has been detected in hospitals across 15 countries on four continents. The superbug, which is resistant to all known antibiotics, has a mortality rate of 65% in immunocompromised patients. WHO is coordinating an emergency response and calling for accelerated development of new antimicrobials.",
    source: "WHO",
    timestamp: hoursAgo(6),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "hea-8",
    category: "health",
    headline:
      "Study Links Ultra-Processed Food Consumption to 32% Higher Dementia Risk",
    summary:
      "A 20-year longitudinal study of 200,000 adults published in JAMA Neurology found that people who consumed more than 20% of their daily calories from ultra-processed foods had a 32% higher risk of developing dementia compared to those who ate minimal amounts. The association held even after controlling for overall diet quality, physical activity, and socioeconomic factors. Researchers are calling for warning labels on ultra-processed foods.",
    source: "Reuters",
    timestamp: hoursAgo(7),
    severity: "normal",
    breaking: false,
  },

  // ===== ENTERTAINMENT =====
  {
    id: "ent-1",
    category: "entertainment",
    headline:
      'Taylor Swift\'s "Eras Tour: The Final Chapter" Breaks All-Time Concert Revenue Record',
    summary:
      "Taylor Swift's final Eras Tour leg grossed $2.1 billion, making it the highest-grossing concert tour in history, surpassing the previous record set by the original Eras Tour. The 120-show global run sold out in every market within minutes of tickets going on sale. Swift announced the tour's conclusion with a surprise album release titled \"The Last Chapter,\" which broke Spotify's single-day streaming record.",
    source: "Variety",
    timestamp: hoursAgo(1),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "ent-2",
    category: "entertainment",
    headline:
      'Netflix\'s AI-Generated Series "Synthetic Dreams" Wins Emmy for Best Drama',
    summary:
      'Netflix\'s "Synthetic Dreams," the first television series created entirely by artificial intelligence with human creative direction, won the Emmy Award for Outstanding Drama Series, sparking intense debate about the future of creative work. The show\'s AI-generated scripts, visual effects, and musical score were overseen by a team of 12 human producers. The Writers Guild of America called the win "a dark day for human creativity."',
    source: "Variety",
    timestamp: hoursAgo(2),
    severity: "normal",
    breaking: false,
  },
  {
    id: "ent-3",
    category: "entertainment",
    headline:
      'Marvel Announces "Avengers: Rebirth" with Original Cast Returning via De-Aging Technology',
    summary:
      'Marvel Studios announced "Avengers: Rebirth," a new film that will feature the original Avengers cast — including Robert Downey Jr. and Scarlett Johansson — using advanced AI de-aging technology to portray their characters at peak age. The film, set for a 2027 release, has already generated $400 million in advance ticket sales. Industry analysts predict it will become the highest-grossing film of all time.',
    source: "Variety",
    timestamp: hoursAgo(3),
    severity: "normal",
    breaking: false,
  },
  {
    id: "ent-4",
    category: "entertainment",
    headline:
      'Beyoncé\'s "Renaissance III" Album Debuts at Number One in 87 Countries Simultaneously',
    summary:
      'Beyoncé\'s "Renaissance III" debuted at number one in 87 countries simultaneously, breaking the record for the most simultaneous chart-toppers in music history. The album, which blends Afrobeats, classical orchestration, and electronic music, received universal critical acclaim with a perfect 100 score on Metacritic. The accompanying visual album will premiere exclusively on Apple TV+ next month.',
    source: "Variety",
    timestamp: hoursAgo(4),
    severity: "normal",
    breaking: false,
  },
  {
    id: "ent-5",
    category: "entertainment",
    headline:
      "Hollywood Writers Strike Over AI Compensation Enters Second Month",
    summary:
      'The Writers Guild of America strike over AI compensation and residuals entered its second month with no resolution in sight, halting production on over 200 film and television projects. The WGA is demanding that studios pay writers a percentage of revenue generated by AI systems trained on their work. Studios have offered a one-time payment structure that the union has rejected as "wholly inadequate."',
    source: "Variety",
    timestamp: hoursAgo(5),
    severity: "normal",
    breaking: false,
  },
  {
    id: "ent-6",
    category: "entertainment",
    headline:
      "Video Game Industry Surpasses $300 Billion in Annual Revenue for First Time",
    summary:
      "The global video game industry generated $312 billion in revenue in 2025, surpassing the $300 billion milestone for the first time and exceeding the combined revenues of the film and music industries. Mobile gaming accounted for 52% of total revenue, while cloud gaming grew 78% year-over-year. The industry now employs more than 2.5 million people worldwide.",
    source: "Reuters",
    timestamp: hoursAgo(6),
    severity: "normal",
    breaking: false,
  },
  {
    id: "ent-7",
    category: "entertainment",
    headline: "Cannes Film Festival Bans AI-Generated Films from Competition",
    summary:
      "The Cannes Film Festival announced it will ban films created primarily by artificial intelligence from its main competition categories, requiring filmmakers to certify that their work is predominantly human-created. The decision follows controversy at this year's festival where three AI-generated films were shortlisted for the Palme d'Or. The ruling has divided the film community between traditionalists and AI advocates.",
    source: "Variety",
    timestamp: hoursAgo(7),
    severity: "normal",
    breaking: false,
  },
  {
    id: "ent-8",
    category: "entertainment",
    headline: "Streaming Wars End as Disney+ and Netflix Announce Merger Talks",
    summary:
      "Disney and Netflix confirmed they are in preliminary merger discussions that would create the world's largest entertainment company with a combined market capitalization of $650 billion and over 500 million subscribers. The potential deal would bring together Disney's content library — including Marvel, Star Wars, and Pixar — with Netflix's global distribution infrastructure. Regulatory approval would be required in over 40 countries.",
    source: "Bloomberg",
    timestamp: hoursAgo(8),
    severity: "breaking",
    breaking: true,
  },

  // ===== WEATHER =====
  {
    id: "wea-1",
    category: "weather",
    headline:
      "⚠️ CRITICAL: Category 5 Hurricane Dominic Makes Landfall in Florida, 2 Million Evacuated",
    summary:
      'Hurricane Dominic, a catastrophic Category 5 storm with sustained winds of 185 mph, made landfall near Fort Myers, Florida at 3:47 AM, triggering the largest evacuation in Florida history with over 2 million residents displaced. Storm surge of up to 20 feet is expected along a 150-mile stretch of coastline. The National Hurricane Center warns of "unsurvivable" conditions in the direct path of the storm.',
    source: "Weather Channel",
    timestamp: minutesAgo(20),
    severity: "critical",
    breaking: true,
  },
  {
    id: "wea-2",
    category: "weather",
    headline:
      "Magnitude 7.8 Earthquake Strikes Tokyo, Triggering Tsunami Warning",
    summary:
      "A powerful 7.8 magnitude earthquake struck 45 kilometers off the coast of Tokyo at 6:23 AM local time, triggering a tsunami warning for the entire Pacific coast of Japan. The Japan Meteorological Agency is warning of waves up to 5 meters. Tokyo's emergency management system activated immediately, with millions of residents receiving evacuation alerts on their mobile devices.",
    source: "Reuters",
    timestamp: minutesAgo(35),
    severity: "critical",
    breaking: true,
  },
  {
    id: "wea-3",
    category: "weather",
    headline:
      "Unprecedented Heat Dome Bakes Pacific Northwest, Temperatures Hit 125°F",
    summary:
      "A historic heat dome settled over the Pacific Northwest, pushing temperatures to 125°F in Portland and 118°F in Seattle, shattering all previous records by more than 10 degrees. Cooling centers are overwhelmed, power grids are under extreme stress, and health officials are reporting hundreds of heat-related hospitalizations. Climate scientists say events of this magnitude are now 150 times more likely due to climate change.",
    source: "Weather Channel",
    timestamp: hoursAgo(1),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "wea-4",
    category: "weather",
    headline:
      "Massive Wildfire Complex Threatens Los Angeles, 500,000 Under Evacuation Orders",
    summary:
      "A rapidly expanding wildfire complex driven by 70 mph Santa Ana winds has forced evacuation orders for 500,000 residents across Los Angeles County, with flames threatening neighborhoods in the San Fernando Valley and Malibu. The fires have already consumed 85,000 acres and destroyed over 3,000 structures. Governor Chen has declared a state of emergency and requested federal disaster assistance.",
    source: "CNN",
    timestamp: hoursAgo(2),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "wea-5",
    category: "weather",
    headline:
      "Polar Vortex Collapse Sends Arctic Air Plunging Into Central United States",
    summary:
      "A sudden stratospheric warming event has caused the polar vortex to collapse, sending a mass of Arctic air southward that will bring temperatures as low as -40°F to the central United States next week. The National Weather Service has issued extreme cold warnings for 18 states. Energy grid operators are warning of potential rolling blackouts as heating demand is expected to shatter records.",
    source: "Weather Channel",
    timestamp: hoursAgo(3),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "wea-6",
    category: "weather",
    headline:
      "Flooding in Bangladesh Displaces 4 Million as Monsoon Season Intensifies",
    summary:
      "Catastrophic flooding across Bangladesh has displaced 4 million people and submerged one-third of the country following the most intense monsoon season in recorded history. The floods have destroyed 200,000 homes and damaged critical infrastructure including roads, bridges, and water treatment facilities. The Bangladesh government has declared a national emergency and appealed for international humanitarian assistance.",
    source: "Al Jazeera",
    timestamp: hoursAgo(4),
    severity: "breaking",
    breaking: true,
  },
  {
    id: "wea-7",
    category: "weather",
    headline:
      "Sahara Desert Experiences Unprecedented Snowfall for Third Time in Five Years",
    summary:
      "Parts of the Sahara Desert in Algeria and Morocco received significant snowfall for the third time in five years, a phenomenon that was virtually unheard of before 2021. Meteorologists attribute the unusual weather to disruptions in the jet stream caused by Arctic warming. While visually striking, scientists warn the event is a symptom of the broader climate disruption affecting global weather patterns.",
    source: "Reuters",
    timestamp: hoursAgo(5),
    severity: "normal",
    breaking: false,
  },
  {
    id: "wea-8",
    category: "weather",
    headline:
      "2025 Atlantic Hurricane Season Most Active on Record with 28 Named Storms",
    summary:
      "The 2025 Atlantic hurricane season concluded as the most active on record with 28 named storms, 16 hurricanes, and 8 major hurricanes of Category 3 or higher. The season caused an estimated $380 billion in damages across the Caribbean, Gulf Coast, and Eastern Seaboard. Climate scientists say the record-breaking season is consistent with projections showing that warming ocean temperatures are intensifying tropical cyclones.",
    source: "Weather Channel",
    timestamp: hoursAgo(6),
    severity: "normal",
    breaking: false,
  },
];

export const BREAKING_TICKER_HEADLINES = [
  "🔴 BREAKING: Nuclear facility radiation leak reported after drone strike in Eastern Europe",
  "⚡ MARKETS: Apple crosses $5 trillion market cap for first time in history",
  "🌀 WEATHER ALERT: Category 5 Hurricane Dominic makes landfall in Florida — 2 million evacuated",
  "🤖 TECH: OpenAI releases GPT-6 claiming human-level performance across all benchmarks",
  "⚠️ HEALTH ALERT: WHO confirms human-to-human H5N2 bird flu transmission in Southeast Asia",
  "🚀 SPACE: NASA Europa Clipper finds evidence of hydrothermal vents on Jupiter's moon",
  "💰 CRYPTO: Bitcoin surges past $180,000 as institutional adoption accelerates",
  "🏆 SPORTS: LeBron James Jr. signs record $350 million NBA contract with Lakers",
  "🌍 DIPLOMACY: China and India sign historic border agreement after 60 years",
  "⚡ EARTHQUAKE: 7.8 magnitude quake strikes Tokyo, tsunami warning issued",
  "🔬 SCIENCE: CERN announces discovery of new fundamental particle beyond Standard Model",
  "🎬 ENTERTAINMENT: Disney and Netflix confirm merger talks — combined value $650 billion",
  "🛡️ WAR: Israel and Iran exchange missile strikes in escalating regional conflict",
  "🌡️ CLIMATE: Arctic sea ice reaches lowest recorded extent for second consecutive year",
  "💊 HEALTH: Universal cancer vaccine shows 90% efficacy in early clinical trials",
];
