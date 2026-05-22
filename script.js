if (sessionStorage.getItem("examAllowed") !== "yes") {
  window.location.href = "instructions.html";
}

if (!localStorage.getItem("studentName")) {
  window.location.href = "login.html";
}

/* ===============================
   BACKUP QUESTIONS ARRAY
================================ */

let questions = [
  {
     question: "In which of the following regions in India are Tropical Evergreen Forests found?",
options: [
"Punjab",
"Sunderbans",
"Western Ghats",
"Rajasthan"
],
answer: null
},

{
question: "As of March 14, 2024, which of the following is the world’s tallest statue?",
options: [
"Tathagata Tsal, Sikkim",
"Statue of Unity, Gujarat",
"Thiruvalluvar Statue, Kanyakumari",
"Adiyogi Shiva Statue, Coimbatore"
],
answer: null
},

{
question: "What was a major focus of the 61st Constitutional Amendment?",
options: [
"Introduction of Anti-Defection Law",
"Reduction of voting age from 21 to 18 years",
"Reservation of seats for women in Panchayats",
"Abolition of Privy Purses for former rulers"
],
answer: null
},

{
question: "The term 'Sangam' refers to which of the following?",
options: [
"A Tamil dynasty",
"A literary assembly of Tamil scholars",
"A type of Tamil poetry",
"South Indian religious texts"
],
answer: null
},

{
question: "Which international organisation supports globalisation and free trade?",
options: [
"WHO",
"WTO",
"UNESCO",
"IMF"
],
answer: null
},

{
question: "The desktop background is also known as:",
options: [
"wallpaper",
"icon",
"file",
"menu"
],
answer: null
},

{
question: "Which Indian state hosted the 38th National Games in 2025?",
options: [
"Odisha",
"Uttarakhand",
"Bihar",
"Madhya Pradesh"
],
answer: null
},

{
question: "What can happen if rocks are not weathered in the context of the movement of Earth's materials?",
options: [
"Mass movement would be more frequent",
"Soil fertility would improve",
"Erosion would be insignificant",
"Erosion would increase"
],
answer: null
},

{
question: "Which of the following Acts aims to prevent money laundering in India?",
options: [
"SEBI",
"FEMA",
"PMLA",
"FCRA"
],
answer: null
},

{
question: "Which sweetener, first used in 1879, has received FDA approval for use in fruit juice beverages?",
options: [
"Aspartame",
"Sucralose",
"Saccharin",
"Neotame"
],
answer: null
},

{
question: "Which event marked the pivot moment in the extremist and moderate struggle during the Indian freedom struggle?",
options: [
"Jallianwala Bagh Massacre",
"Champaran Satyagraha",
"Surat Split",
"Partition of Bengal"
],
answer: null
},

{
question: "Which of the following best describes the public sector's role in the Indian economy during 1947–1991?",
options: [
"Dominant in core and heavy industries",
"Only limited to agriculture",
"Minimal presence",
"Focussed only on foreign trade"
],
answer: null
},

{
question: "According to Ibn Battuta, a Moroccan traveller to India during the Delhi Sultanate, the method of postal system in which the royal horses were used to transfer packages, is called:",
options: [
"Dawa",
"Uluq",
"Mansabdari",
"Ikat"
],
answer: null
},

{
question: "How many small states of present-day Odisha were integrated into the Indian Union at the time of Partition?",
options: [
"26",
"42",
"34",
"15"
],
answer: null
},

{
question: "Which programme aims to ensure access to safe and adequate drinking water through tap connections by 2024?",
options: [
"Jal Jeevan Mission",
"Jal Kranti Abhiyan",
"PM-KUSUM",
"Atal Bhujal Yojana"
],
answer: null
},

{
question: "The distribution of population in India is:",
options: [
"uniform across all regions",
"more in desert areas",
"denser in hilly regions",
"uneven, with variations across regions"
],
answer: null
},

{
question: "Which acid is used in non-ionic detergent reactions to improve cleaning qualities and thicken detergents?",
options: [
"Stearic acid",
"Barbituric acid",
"Propanoic acid",
"Oxalic acid"
],
answer: null
},

{
question: "In April 2025, which Indian cricketer was named for Wisden Leading Cricketers in the World 2024 who scored 1659 runs across formats in 2024?",
options: [
"Harmanpreet Kaur",
"Smriti Mandhana",
"Jemimah Rodrigues",
"Harleen Deol"
],
answer: null
},

{
question: "Which State Government launched India's first ferret research facility in February 2025?",
options: [
"Punjab",
"Rajasthan",
"Delhi",
"Haryana"
],
answer: null
},

{
question: "The US Army contingent that participated in Exercise YUDH ABHYAS held in September 2024 belonged to which of the following divisions?",
options: [
"82nd Airborne Division",
"11th Airborne Division",
"1st Infantry Division",
"101st Airborne Division"
],
answer: null
}
,
{
question: "Which state became the leading beneficiary of the Green Revolution in India?",
options: [
"Bihar",
"Assam",
"Punjab",
"Odisha"
],
answer: null
},

{
question: "Which of the following elements is classified as an actinoid group element?",
options: [
"Thorium",
"Ytterbium",
"Lanthanum",
"Cerium"
],
answer: null
},

{
question: "Which department has notified rules for the use of radar equipment to measure vehicle speed under the Legal Metrology (General) Rules, 2011?",
options: [
"Department of Consumer Affairs",
"Ministry of Electronics and Information Technology",
"Ministry of Road Transport and Highways",
"Ministry of Home Affairs"
],
answer: null
},

{
question: "Which of the following is the easternmost range of the Himalayas?",
options: [
"Zanskar",
"Purvanchal Range",
"Dhauladhar",
"Pir Panjal"
],
answer: null
},

{
question: "The Bhimbetka rock shelters, known for prehistoric cave paintings, are located in which of the following states of India?",
options: [
"Madhya Pradesh",
"Uttar Pradesh",
"Rajasthan",
"Gujarat"
],
answer: null
},

{
question: "Protection of environment and wildlife is mentioned in which Article of the Indian Constitution?",
options: [
"Article 48A",
"Article 48",
"Article 47",
"Article 49"
],
answer: null
},

{
question: "Which of the following operating systems is NOT typically used on desktop or laptop computers?",
options: [
"Windows",
"Android",
"Linux",
"macOS"
],
answer: null
},

{
question: "A single narrative detailing one of Buddha's former existences is known by which of the following names?",
options: [
"Vinaya",
"Jataka",
"Tripitaka",
"Sutra"
],
answer: null
},

{
question: "What legal document allowed Princely States to join either India or Pakistan after independence?",
options: [
"Instrument of Accession",
"Standstill Agreement",
"Treaty of Accession",
"Pact of Unity"
],
answer: null
},

{
question: "Which of the following is the Chief Minister of a state in India primarily responsible for?",
options: [
"President of India",
"Supreme Court",
"State Legislative Assembly",
"Governor of the State"
],
answer: null
},

{
question: "Which region of India is most suitable for tea cultivation due to its climate and soil?",
options: [
"Western Rajasthan",
"Deccan Plateau",
"Assam and North Bengal",
"Punjab and Haryana"
],
answer: null
},

{
question: "What is the name of the programme that supports AI-based learning in government schools?",
options: [
"Smart EduTech",
"Vidya Connect",
"FLN-AXL",
"Digital India Learning"
],
answer: null
},

{
question: "Which of the following best describes 'intergenerational equity'?",
options: [
"Fair allocation of resources among various income groups",
"Fair use of resources to ensure availability for future generations",
"Fair distribution of resources among present-day nations",
"Equal economic opportunities for all age-based population groups"
],
answer: null
},

{
question: "The indigenous CAR-T therapy has shown maximum efficacy against B-ALL and which other blood cancer?",
options: [
"Non-Hodgkin Lymphoma",
"Hodgkin Lymphoma",
"Chronic Myeloid Leukaemia",
"Multiple Myeloma"
],
answer: null
},

{
question: "At the Global Production Awards held on 20 May 2025 during the Cannes Film Festival, which city was honoured with the Best City of Film Award?",
options: [
"Dublin",
"Cardiff",
"Edinburgh",
"Belfast"
],
answer: null
},

{
question: "On 19 February 2025, which state’s cabinet approved the Bhoo Kanoon (Land Law Amendment Bill) to regulate the purchase and sale of agricultural, horticultural and residential land by non-residents?",
options: [
"Jammu and Kashmir",
"Arunachal Pradesh",
"Himachal Pradesh",
"Uttarakhand"
],
answer: null
},

{
question: "Who among the following was appointed as a Deputy Governor of the Reserve Bank of India (RBI) in May 2025?",
options: [
"Dr. Rakesh Mohan",
"Dr. Anshula Kant",
"Dr. Poonam Gupta",
"Dr. Urjit Patel"
],
answer: null
},

{
question: "What is the projected annual growth rate of India-UK bilateral trade under the new Free Trade Agreement (FTA)?",
options: [
"20%",
"10%",
"15%",
"12%"
],
answer: null
},

{
question: "Who is the highest law officer in a state?",
options: [
"Legal Advisor",
"Attorney General",
"Law Secretary",
"Advocate General"
],
answer: null
},

{
question: "Who among the following launched the Ayushman Vay Vandana Card in Delhi in April 2025, along with Delhi Chief Minister Rekha Gupta?",
options: [
"Pinarayi Vijayan",
"Vinai Kumar Saxena",
"JP Nadda",
"Hardeep Singh Puri"
],
answer: null
}
,
{
question: "A number, when increased by 100%, gives 2820. The number is:",
options: [
"705",
"2820",
"1410",
"4230"
],
answer: null
},

{
question: "The cost of 8 pens and 10 pencils is ₹132. If the cost of a pen decreases by ₹2 and the cost of a pencil increases by ₹7, then the cost of 17 pens and 6 pencils is ₹136. What is the original cost of 12 pens and 9 pencils?",
options: [
"₹138",
"₹143",
"₹136",
"₹135"
],
answer: null
},

{
question: "In △ABC, BD ⟂ AC at D and ∠DBC = 16°. E is a point on BC such that ∠CAE = 51°. What is the measure of ∠AEB?",
options: [
"135°",
"139°",
"113°",
"125°"
],
answer: null
},

{
question: "₹75,400 were divided among A, B and C, such that 3 times the share of A = 9 times the share of B = 4 times the share of C. Find the share of A.",
options: [
"₹36,127",
"₹36,192",
"₹36,032",
"₹36,236"
],
answer: null
},

{
question: "Which of the following numbers divides 774359327?",
options: [
"7",
"12",
"2",
"16"
],
answer: null
},

{
question: "Which of the following numbers divides 545714151?",
options: [
"10",
"6",
"7",
"3"
],
answer: null
},

{
question: "A sector is formed by a circular arc with a radius of 9 cm, subtending an 18° angle at the centre. What is its perimeter? (Use π = 3.14)",
options: [
"22.46 cm",
"24.14 cm",
"20.83 cm",
"18.38 cm"
],
answer: null
},

{
question: "In an election between two candidates, 85% of the registered voters cast their vote and 4% of the votes polled were found invalid. The winning candidate got 65% of the valid votes and won the election by a margin of 2142 votes. How many voters were registered?",
options: [
"8747",
"8750",
"8751",
"8752"
],
answer: null
},

{
question: "If the third proportional of 16 and 56 be x, then what is the value of x?",
options: [
"196",
"195",
"198",
"193"
],
answer: null
},

{
question: "Priya can do a certain piece of work in 26 days. Priya and Varsha can together do the same work in 13 days, and Priya, Varsha and Nisha can do the same work together in 10 days. In how many days can Priya and Nisha do the same work together?",
options: [
"1",
"2",
"3",
"4",
],
answer: null
},

{
question: "Arjun and Malaika have to travel from Delhi to Kanpur in their respective cars. Arjun is driving at 138 km/hr while Malaika is driving at 92 km/hr. Find the time taken by Malaika to reach Kanpur if Arjun takes 8 hours.",
options: [
"13 hours",
"12 hours",
"4 hours",
"7 hours"
],
answer: null
},

{
question: "A trader claims to sell flour at a profit of 47%, but also dishonestly uses a weight which is 8% less than what is mentioned on it. Find the total percentage of profit earned by the trader.",
options: [
"1",
"2",
"3",
"4"
],
answer: null
},

{
question: "If 3 times Mary’s present age is 20 years more than 5 times Diya's present age, and 2 times Diya's present age is 2 years less than Mary's present age, then what is the difference (in years) between the ages of Mary and Diya?",
options: [
"11",
"12",
"16",
"15"
],
answer: null
},

{
question: "Find a single discount equivalent to successive discounts of 20%, 25% and 15%.",
options: [
"49%",
"42%",
"46%",
"44%"
],
answer: null
},

{
question: "The number of prime numbers lying between 331 and 345, both included, is:",
options: [
"5",
"3",
"4",
"2"
],
answer: null
},

{
question: "Varun bought some erasers at the rate of ₹150/dozen. He sold them for ₹18 each. His profit percentage is ______%.",
options: [
"48",
"46",
"44",
"42"
],
answer: null
},

{
question: "The LCM of the numbers 15.4 and 0.006 is:",
options: [
"0.462",
"462",
"46.2",
"4.62"
],
answer: null
},

{
question: "Find the circumference (in m) of the largest circle that can be drawn completely inside a rectangle whose dimensions are given as 14 m and 116 m.",
options: [
"47",
"44",
"36",
"37"
],
answer: null
},

{
question: "What sum of money (in ₹) will amount to ₹2,400 at 4% per annum simple interest in 5 years?",
options: [
"₹12,000",
"₹2,050",
"₹2,000",
"₹1,950"
],
answer: null
},

{
question: "Find the value of 62³ ÷ 62² × 62⁻¹³.",
options: [
"62⁻18",
"62⁻26",
"62⁻23",
"62⁻12"
],
answer: null
}
,
{
question: "A jacket is marked at ₹4,000. During a festive sale, it is given two successive discounts of 32% and 22%. What is the final price after both discounts, and what is the effective percentage discount?",
options: [
"₹1,840 ; 54%",
"₹2,352.2 ; 44.23%",
"₹1,820 ; 49%",
"₹2,121.6 ; 46.96%"
],
answer: null
},

{
question: "The average runs scored by a batsman in 23 matches is 41. In the next 10 matches, the batsman scored an average of 16 runs. Find his average runs scored (rounded off to two decimal places) in all the 33 matches.",
options: [
"34.42",
"33.42",
"35.42",
"32.42"
],
answer: null
},

{
question: "In covering a distance of 150 km, Pranay takes 2 hours more than Aman. If Pranay doubles his speed, then he would take 3 hours less than Aman. Pranay's speed is:",
options: [
"6 km/hr",
"11 km/hr",
"15 km/hr",
"20 km/hr"
],
answer: null
},

{
question: "Find the simple interest (in ₹) on ₹4,000 at 6.75% per annum rate of interest deposited on 25 February 2024 and withdrawn on 26 April 2024.",
options: [
"₹44",
"₹43",
"₹45",
"₹46"
],
answer: null
},

{
question: "Sanjana, Kartik and Deepa invested ₹1,050, ₹1,320 and ₹1,730, respectively to start a business. If the profit at the end of the year is ₹1,230, what is Deepa's share of the profit?",
options: [
"₹516",
"₹519",
"₹517",
"₹520"
],
answer: null
},

{
question: "A can lay railway track between two given stations in 22 days and B can do the same job in 11 days. With the help of C, they did the job in 5 days only. Then, C alone can do the job in:",
options: [
"13 hours",
"12 hours",
"4 hours",
"7 hours"
],
answer: null
},

{
question: "What is the median of the following data? 76, 35, 42, 49, 95, 21, 68, 41, 20, 27, 17",
options: [
"42",
"41.5",
"41",
"40.5"
],
answer: null
},

{
question: "If 2 is added to each odd digit and 1 is subtracted from each even digit in the number 8354671, then how many digits will appear more than once in the new number thus formed?",
options: [
"One",
"Two",
"None",
"Three"
],
answer: null
},

{
question: "In the following triads, each group of letters is related to the subsequent one following a certain logic. Select from the given options, the one which follows the same logic. NEST - ESNT - TSEN / GONE - ONGE - ENOG",
options: [
"LIES - IELS - SEIL",
"MAST - AMST - TASM",
"COPE - OPCE - OPEC",
"SING - SNIG - GNIS"
],
answer: null
},

{
question: "Which of the following letter-number clusters will replace the question mark (?) in the given series to make it logically complete? ICV 16 LGS 5 OKP -6 ROM -17 ?",
options: [
"SJD -21",
"UHT -21",
"USJ -28",
"JUD -20"
],
answer: null
},

{
question: "Refer to the following number and symbol series and answer the question that follows. (Left) ? > @ ^ @ \\ ? + $ 6 7 \\ 1 & @ 1 4 2 2 % 9 (Right). How many such numbers are there, each of which is immediately preceded by a symbol and also immediately followed by another number?",
options: [
"None",
"Two",
"Three",
"One"
],
answer: null
},

{
question: "Read the given statements and conclusions carefully. Statements: All teas are bins. No tea is a sock. Conclusions: (I) Some socks are bins. (II) All bins are socks.",
options: [
"Both conclusions follow",
"Only conclusion I follows",
"Only conclusion II follows",
"Neither conclusion follows"
],
answer: null
},

{
question: "Satish starts from Point Y and drives 19 km towards west. He then takes a right turn, drives 10 km. He then turns right and drives 11 km. He takes a final right turn, drives 10 km and stops at Point Z. How far and towards which direction should he drive in order to reach Point Y again?",
options: [
"7 km towards south",
"5 km towards north",
"6 km towards west",
"8 km towards east"
],
answer: null
},

{
question: "Based on the English alphabetical order, three of the following four letter-clusters are alike in a certain way and thus form a group. Which letter-cluster DOES NOT belong to that group?",
options: [
"HLF",
"MQK",
"KOI",
"FJC"
],
answer: null
},

{
question: "T is the daughter of A. A is married to M. M is the son of K. K is married to J. J is the father of D. D is the brother of N. G is the son of N. How is K related to T?",
options: [
"Father's mother",
"Mother's brother",
"Father's father",
"Mother's father"
],
answer: null
},

{
question: "In a certain code language, ‘like his attitude’ is coded as ‘nt yg fr’ and ‘his first salary’ is coded as ‘kt lo yg’. How is ‘his’ coded in the given language?",
options: [
"yg",
"fr",
"kt",
"nt"
],
answer: null
},

{
question: "In a row of people all facing north, Rikshit is 31st from the right end and Palak is 32nd from the right end. The number of people between Palak and Rikshit is same as the number of people between Palak and Huma. If Huma is 10th from the left end of the row, how many people are there in the row?",
options: [
"43",
"41",
"44",
"42"
],
answer: null
},

{
question: "If ‘A’ stands for ‘÷’, ‘B’ stands for ‘×’, ‘C’ stands for ‘+’ and ‘D’ stands for ‘−’, what will come in place of the question mark (?) in the following equation? 46 A 2 C 21 D 8 B 3 = ?",
options: [
"33",
"20",
"26",
"41"
],
answer: null
},

{
question: "This question is based on the five three-digit numbers: 324, 523, 643, 136, 441. If 3 is added to the first digit of every number, in how many numbers will the first digit be exactly divisible by the second digit?",
options: [
"1",
"4",
"3",
"2"
],
answer: null
},

{
question: "Seven boxes, A, B, C, D, M, N and O, are kept one over the other but not necessarily in the same order. No box is kept above B. Only three boxes are kept between B and N. Only one box is kept between D and A. Only C is kept below O. A is kept immediately above N. Only four boxes are kept between D and C. How many boxes are kept below M?",
options: [
"Five",
"Four",
"Two",
"Three"
],
answer: null
}
,
{
question: "In a certain code language, ‘GALE’ is coded as ‘7513’ and ‘FLEA’ is coded as ‘5197’. What is the code for ‘F’ in that language?",
options: [
"1",
"9",
"5",
"7"
],
answer: null
},

{
question: "Seven people, A, B, C, T, U, V and W are sitting in a row, facing north. Only two people sit to the right of C. Only two people sit between C and U. Only two people sit between A and V. V sits to the immediate left of C. T sits to the immediate right of W. Who sits at third position from the left end of the line?",
options: [
"T",
"U",
"A",
"B"
],
answer: null
},

{
question: "Read the given statements and conclusions carefully. Statements: All Cabbages are Peas. No Peas are Broccolis. Conclusions: I: No Broccolis are Cabbages. II: Some Broccolis are Cabbages.",
options: [
"Only conclusion I follows",
"Neither conclusion I nor II follows",
"Only conclusion II follows",
"Both conclusions follow"
],
answer: null
},

{
question: "What should come in place of the question mark (?) in the given series? 779 780 784 793 809 ?",
options: [
"831",
"837",
"834",
"841"
],
answer: null
},

{
question: "Select the triad that follows the same pattern as that followed by the two triads given below. GN-JQ-MP / DK-GN-JM",
options: [
"JQ-MT-PR",
"JQ-MT-PS",
"IQ-NT-PR",
"IQ-MT-PR"
],
answer: null
},

{
question: "Which of the following letter-number clusters will replace the question mark (?) in the given series to make it logically complete? FJN 45, DHL 40, BFJ 35, ZDH 30, XBF 25, ?",
options: [
"VZD 20",
"VUD 20",
"VZE 20",
"UZD 20"
],
answer: null
},

{
question: "If 2 is added to each odd digit and 3 is subtracted from each even digit in the number 7843651, how many digits will appear more than once in the new number thus formed?",
options: [
"Three",
"Two",
"One",
"None"
],
answer: null
},

{
question: "Based on the English alphabetical order, three of the following four letter-clusters are alike in a certain way and thus form a group. Which letter-cluster DOES NOT belong to that group?",
options: [
"HDK",
"FBJ",
"MIP",
"JFM"
],
answer: null
},

{
question: "In the following triads, each group of letters is related to the subsequent one following a certain logic. Select from the given options, the one which follows the same logic. RACK - AKCR - KCAR / LOAD - ODAL - DAOL",
options: [
"ABLE - BALE - EBLA",
"NAPS - NPAS - SPAN",
"ITEM - TMEI - METI",
"FLAT - LFAT - TLAF"
],
answer: null
},

{
question: "What should come in place of the question mark (?) in the given series? 456 457 455 456 454 455 453 ?",
options: [
"454",
"453",
"456",
"455"
],
answer: null
},

{
question: "A, B, C, D, E, F and G are sitting around a circular table facing the centre. B sits second to the right of C. E sits third to the left of B. D is the immediate neighbour of G and A. F sits second to the left of G. How many people sit between A and B when counted from the left of A?",
options: [
"Four",
"Two",
"Three",
"One"
],
answer: null
},

{
question: "What should come in place of the question mark (?) in the given series? 6 9 15 24 36 ?",
options: [
"51",
"41",
"75",
"52"
],
answer: null
},

{
question: "All 105 students in a class are standing in a row facing north. Ravi is 49th from the right end while Shruti is 38th from the left end. How many people stand between Ravi and Shruti?",
options: [
"19",
"17",
"16",
"18"
],
answer: null
},

{
question: "Based on the English alphabetical order, three of the following four letter-cluster pairs are alike in a certain way and thus form a group. Which letter-cluster pair DOES NOT belong to that group?",
options: [
"PN−QO",
"QO−RP",
"LJ−MK",
"US−UV"
],
answer: null
},

{
question: "In the following number-pairs, the second number is obtained by applying certain mathematical operations to the first number. Select the pair in which the numbers are related in the same way as the numbers of the following pairs: 52, 81 and 72, 101",
options: [
"84, 107",
"75, 104",
"79, 102",
"53, 76"
],
answer: null
},

{
question: "Mr. Oxi starts from Point A and drives 9 km towards the south. He then takes a right turn and drives 3 km, then turns right and drives 15 km. He then takes a right turn and drives 11 km. He takes a final right turn, drives 6 km and stops at Point P. How far and in which direction should he drive in order to reach Point A again?",
options: [
"8 km to the west",
"7 km to the east",
"8 km to the south",
"8 km to the east"
],
answer: null
},

{
question: "If 1 is added for each even digit and 1 is subtracted from each odd digit of the number 56218643, how many digits are repeated more than once in the new number thus formed?",
options: [
"None",
"Three",
"One",
"Two"
],
answer: null
  }
];

/* ===============================
   LOAD SELECTED MOCK TEST
================================ */

let selectedTest =
  JSON.parse(localStorage.getItem("selectedTestData"));

let selectedMockTest =
  selectedTest ? selectedTest.name : "Default Test";

if(selectedTest && selectedTest.questions && selectedTest.questions.length > 0){
  questions = selectedTest.questions;
}

/* ===============================
   TIMER SETUP
================================ */

let testDuration = selectedTest && selectedTest.duration
  ? Number(selectedTest.duration)
  : 90;

  let negativeMark =
  selectedTest && selectedTest.negativeMarking
    ? Number(selectedTest.negativeMarking)
    : 0.33;
let savedTime = localStorage.getItem("timeLeft");
let timeLeft = savedTime ? Number(savedTime) : testDuration * 60;

const timer = document.getElementById("timer");

/* ===============================
   EXAM STATE
================================ */

let savedQuestion = localStorage.getItem("currentQuestion");
let currentQuestion = savedQuestion ? Number(savedQuestion) : 0;

let selectedAnswers =
  JSON.parse(localStorage.getItem("selectedAnswers")) ||
  Array(questions.length).fill(null);

let questionStatus =
  JSON.parse(localStorage.getItem("questionStatus")) ||
  Array(questions.length).fill("not-visited");

let testSubmitted = false;

/* ===============================
   TIMER FUNCTION
================================ */

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  timer.innerText =
    `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

  if (timeLeft > 0) {
    timeLeft--;
    localStorage.setItem("timeLeft", timeLeft);
  } else {
    if (!testSubmitted) {
      alert("Time Up! Test Submitted Automatically.");
      submitTest();
    }
  }
}

setInterval(updateTimer, 1000);

/* ===============================
   LOAD QUESTION
================================ */

function loadQuestion() {
  localStorage.setItem("currentQuestion", currentQuestion);

  if (questions.length === 0) {
    document.querySelector(".question-text").innerText = "No questions added.";
    return;
  }

  if (questionStatus[currentQuestion] === "not-visited") {
    questionStatus[currentQuestion] = "not-answered";
  }

  const q = questions[currentQuestion];

  document.querySelector(".question-top h3").innerText =
    `Question No. ${currentQuestion + 1}`;

  document.querySelector(".question-text").innerText = q.question;

  const optionLabels = document.querySelectorAll(".option");

  optionLabels.forEach((label, index) => {
    label.innerHTML = `
      <input type="radio" name="answer" ${
        selectedAnswers[currentQuestion] === index ? "checked" : ""
      }>
      ${q.options[index] || ""}
    `;

    label.onclick = () => {
      selectedAnswers[currentQuestion] = index;
      localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
    };
  });

  updateQuestionPalette();
  updateLegend();
}

/* ===============================
   BUTTON FUNCTIONS
================================ */

function saveAndNext() {
  questionStatus[currentQuestion] =
    selectedAnswers[currentQuestion] !== null ? "answered" : "not-answered";

  localStorage.setItem("questionStatus", JSON.stringify(questionStatus));

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }

  updateQuestionPalette();
  updateLegend();
}

function markForReviewAndNext() {
  questionStatus[currentQuestion] = "review";
  localStorage.setItem("questionStatus", JSON.stringify(questionStatus));

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  }

  updateQuestionPalette();
  updateLegend();
}

function clearResponse() {
  selectedAnswers[currentQuestion] = null;
  questionStatus[currentQuestion] = "not-answered";

  localStorage.setItem("selectedAnswers", JSON.stringify(selectedAnswers));
  localStorage.setItem("questionStatus", JSON.stringify(questionStatus));

  loadQuestion();
}

function goToQuestion(index) {
  currentQuestion = index;
  loadQuestion();
}

/* ===============================
   QUESTION PALETTE
================================ */

function updateQuestionPalette() {
  const grid = document.querySelector(".question-grid");
  grid.innerHTML = "";

  questions.forEach((q, index) => {
    const btn = document.createElement("button");

    btn.innerText = index + 1;
    btn.className = `q-btn ${questionStatus[index]}`;

    if (index === currentQuestion) {
      btn.classList.add("active");
    }

    btn.onclick = () => goToQuestion(index);

    grid.appendChild(btn);
  });
}

/* ===============================
   LEGEND COUNTS
================================ */

function updateLegend() {
  document.querySelector(".answered").innerText =
    questionStatus.filter(s => s === "answered").length;

  document.querySelector(".not-answered").innerText =
    questionStatus.filter(s => s === "not-answered").length;

  document.querySelector(".not-visited").innerText =
    questionStatus.filter(s => s === "not-visited").length;

  document.querySelector(".review").innerText =
    questionStatus.filter(s => s === "review").length;
}
/* ===============================
    SUBMIT TEST
================================ */
function submitTest() {

  sessionStorage.removeItem("examAllowed");
  localStorage.removeItem("timeLeft");
  localStorage.removeItem("selectedAnswers");
  localStorage.removeItem("questionStatus");
  localStorage.removeItem("currentQuestion");

  testSubmitted = true;

  let correct = 0;
  let wrong = 0;
  let attempted = 0;

  let subjectStats = {};

  questions.forEach((q, index) => {

    if (selectedAnswers[index] !== null) {

      let subjectName =
        q.category || selectedTest?.category || "General";

      if (!subjectStats[subjectName]) {

        subjectStats[subjectName] = {
          total: 0,
          correct: 0
        };

      }

      subjectStats[subjectName].total++;

      attempted++;

      if (q.answer !== null) {

        if (selectedAnswers[index] === q.answer) {

          correct++;

          subjectStats[subjectName].correct++;

        } else {

          wrong++;

        }

      }

    }

  });

  let score = correct - (wrong * negativeMark);

  let percentage =
    (score / questions.length) * 100;

  let passStatus =
    percentage >= 40
      ? "Passed ✅"
      : "Failed ❌";

  let studentName =
    localStorage.getItem("studentName") || "Unknown Student";

  let resultData = {
    name: studentName,
    testName: selectedMockTest || "Default Test",
    totalQuestions: questions.length,
    attempted: attempted,
    correct: correct,
    wrong: wrong,
    score: score.toFixed(2),
    date: new Date().toLocaleString()
  };

  fetch("https://rrb-mock-test.onrender.com/api/results/save", {

  method: "POST",

 headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer " + localStorage.getItem("token")
},
  body: JSON.stringify({
    studentName: studentName,
    testName: selectedMockTest || "Default Test",
    totalQuestions: questions.length,
    attempted: attempted,
    correct: correct,
    wrong: wrong,
    score: score
  })

})
.then(res => res.json())
.then(data => {
  console.log(data.message);
})
.catch(err => {
  console.log(err);
});

  let allResults =
    JSON.parse(localStorage.getItem("studentResults")) || [];

  allResults.push(resultData);

  allResults.sort(
    (a, b) => Number(b.score) - Number(a.score)
  );

  localStorage.setItem(
    "studentResults",
    JSON.stringify(allResults)
  );

  let rank =
    allResults.findIndex(
      r =>
        r.name === studentName &&
        r.date === resultData.date
    ) + 1;

  let totalStudents = allResults.length;

  let analyticsHTML = "";

  for (let subject in subjectStats) {

    let total =
      subjectStats[subject].total;

    let correctAnswers =
      subjectStats[subject].correct;

    let subjectPercentage =
      ((correctAnswers / total) * 100).toFixed(1);

    analyticsHTML += `
      <div class="stat">
        <h2>${subjectPercentage}%</h2>
        <p>${subject}</p>
      </div>
    `;

  }

  document.body.innerHTML = `

    <div class="result-page">

      <div class="result-card">

        <h1>🎉 Test Submitted</h1>

        <h2>${studentName}</h2>

        <h2>${passStatus}</h2>

        <div class="score-circle">
          ${score.toFixed(2)}
        </div>

        <h2>🏆 Rank: ${rank} / ${totalStudents}</h2>

        <h2>📊 Subject Analytics</h2>
        <canvas id="resultChart"></canvas>

        <div class="result-stats">
          ${analyticsHTML}
        </div>

        <div class="result-stats">

          <div class="stat">
            <h2>${questions.length}</h2>
            <p>Total Questions</p>
          </div>

          <div class="stat">
            <h2>${attempted}</h2>
            <p>Attempted</p>
          </div>

          <div class="stat">
            <h2>${correct}</h2>
            <p>Correct</p>
          </div>

          <div class="stat">
            <h2>${wrong}</h2>
            <p>Wrong</p>
          </div>

        </div>

        <button onclick="location.reload()">
          Restart Test
        </button>

        <button onclick="showReview()">
          Review Answers
        </button>

        <button onclick="logoutAfterTest()">
          Logout
        </button>

        <button onclick="window.print()">
          Download / Print Result
        </button>

       <button onclick="showCertificate('${studentName}', '${score.toFixed(2)}', '${rank}', '${passStatus}', '${selectedMockTest || "Default Test"}')">
  Download Certificate
</button>

      </div>

    </div>

  `;
  const ctx =
  document.getElementById("resultChart");

new Chart(ctx, {

  type: "pie",

  data: {

    labels: [
      "Correct",
      "Wrong",
      "Unattempted"
    ],

    datasets: [{

      data: [
        correct,
        wrong,
        questions.length - attempted
      ],

      backgroundColor: [
        "#22c55e",
        "#ef4444",
        "#94a3b8"
      ]

    }]

  }

});
}

/* ===============================
   REVIEW ANSWERS
================================ */

function showReview() {
  let html = `
    <div class="review-page">
      <h1>📘 Answer Review</h1>
  `;

  questions.forEach((q, index) => {
    let selected = selectedAnswers[index];
    let correct = q.answer;

    let status = "Not Attempted";

    if (correct === null) {
      status = "Answer Key Not Available";
    } else if (selected !== null && selected === correct) {
      status = "Correct";
    } else if (selected !== null && selected !== correct) {
      status = "Wrong";
    }

    html += `
      <div class="review-card">
        <h3>Q${index + 1}. ${q.question}</h3>

        <p><b>Your Answer:</b> ${
          selected !== null ? q.options[selected] : "Not Attempted"
        }</p>

        <p><b>Correct Answer:</b> ${
          correct !== null ? q.options[correct] : "Not Available"
        }</p>

        <p><b>Status:</b> ${status}</p>
      </div>
    `;
  });

  html += `
    <button onclick="location.reload()" class="back-btn">
      Restart Test
    </button>
    </div>
  `;

  document.body.innerHTML = html;
}

/* ===============================
   LOGOUT
================================ */

function logoutAfterTest() {
  localStorage.removeItem("studentName");
  sessionStorage.removeItem("examAllowed");
  window.location.href = "login.html";
}

/* ===============================
   EVENT LISTENERS
================================ */

document.querySelector(".next-btn").onclick = saveAndNext;
document.querySelector(".review-btn").onclick = markForReviewAndNext;
document.querySelector(".clear-btn").onclick = clearResponse;
document.querySelector(".bookmark-btn").onclick =
  bookmarkQuestion;

document.querySelector(".report-btn").onclick =
  reportQuestion;

document.querySelector(".submit-btn").onclick = function () {
  let confirmSubmit = confirm("Are you sure you want to submit the test?");
  if (confirmSubmit) {
    submitTest();
  }
};

loadQuestion();

/* ===============================
   SECURITY
================================ */

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden && !testSubmitted) {
    alert("Warning: Tab switching detected!");
  }
});

/* ===============================
   STUDENT NAME
================================ */

const studentName = localStorage.getItem("studentName");

if (studentName && document.getElementById("student-name")) {
  document.getElementById("student-name").innerText = studentName;
}

/* ===============================
   DARK MODE
================================ */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerText = "☀ Light Mode";
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeToggle.innerText = "☀ Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.innerText = "🌙 Dark Mode";
    }
  });
}


function showCertificate(studentName, score, rank, passStatus, testName){

  let currentDate = new Date().toLocaleDateString();

  let certificateHTML = `
    <html>
    <head>
      <title>Certificate</title>

      <style>
        body{
          font-family:Arial;
          background:#f8fafc;
          padding:40px;
        }

        .certificate{
          max-width:900px;
          margin:auto;
          background:white;
          border:15px solid gold;
          border-radius:25px;
          padding:60px;
          text-align:center;
          box-shadow:0 10px 25px rgba(0,0,0,0.15);
        }

        h1{
          color:#1e3a8a;
          font-size:52px;
        }

        h2{
          color:#2563eb;
          font-size:42px;
        }

        p{
          font-size:22px;
          color:#334155;
        }

        .score-box{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px;
          margin:40px 0;
        }

        .score-card{
          background:#eff6ff;
          padding:25px;
          border-radius:18px;
        }

        .score-card h3{
          color:#2563eb;
          font-size:34px;
        }

        .footer{
          margin-top:60px;
          display:flex;
          justify-content:space-between;
        }

        .line{
          width:180px;
          border-top:2px solid black;
          margin-bottom:10px;
        }
      </style>
    </head>

    <body>

      <div class="certificate">

        <h1>Certificate of Achievement</h1>

        <p>This certificate is proudly presented to</p>

        <h2>${studentName}</h2>

        <p>For successfully completing the mock examination</p>

        <div class="score-box">

          <div class="score-card">
            <h3>${score}</h3>
            <p>Score</p>
          </div>

          <div class="score-card">
            <h3>#${rank}</h3>
            <p>Rank</p>
          </div>

          <div class="score-card">
            <h3>${passStatus}</h3>
            <p>Status</p>
          </div>

        </div>

        <p><b>Test:</b> ${testName}</p>
        <p><b>Date:</b> ${currentDate}</p>

        <div class="footer">

          <div>
            <div class="line"></div>
            <p>Instructor Signature</p>
          </div>

          <div>
            <div class="line"></div>
            <p>Director Signature</p>
          </div>

        </div>

      </div>

    </body>
    </html>
  `;

  let newWindow = window.open("", "_blank");

  newWindow.document.write(certificateHTML);
  newWindow.document.close();

  setTimeout(() => {
    newWindow.print();
  }, 500);
}


let bookmarkedQuestions =
  JSON.parse(localStorage.getItem("bookmarkedQuestions")) || [];

function bookmarkQuestion(){

  if(!bookmarkedQuestions.includes(currentQuestion)){

    bookmarkedQuestions.push(currentQuestion);

    localStorage.setItem(
      "bookmarkedQuestions",
      JSON.stringify(bookmarkedQuestions)
    );

    alert("Question bookmarked");

  }else{

    alert("Already bookmarked");

  }

}

function reportQuestion(){

  let reports =
    JSON.parse(localStorage.getItem("reportedQuestions")) || [];

  reports.push({
    questionNumber: currentQuestion + 1,
    question: questions[currentQuestion].question,
    date: new Date().toLocaleString()
  });

  localStorage.setItem(
    "reportedQuestions",
    JSON.stringify(reports)
  );

  alert("Question reported to admin");

}