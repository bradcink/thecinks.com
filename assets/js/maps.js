// In the following example, markers appear when the user clicks on the map.
// The markers are stored in an array.
// The user can then click an option to hide, show or delete the markers.
var map;
var markers = [];
var polygons = [];
var gMarkers = [];
var gPolygons = [];

gMarkers['isa']={lat:37.800391, lng:-122.437609};
gMarkers['offthegrid']={lat:37.806599, lng:-122.430780};
gMarkers['littlestarpizza']={lat:37.777820, lng:-122.437977};
gMarkers['foreigncinema']={lat:37.756702, lng:-122.419214};
gMarkers['missionchinese']={lat:37.761481, lng:-122.419605};
gMarkers['delarosa']={lat:37.800519, lng:-122.439021};
gMarkers['brendas']={lat:37.778332, lng:-122.438673};
gMarkers['flourandwater']={lat:37.759095, lng:-122.412284};
gMarkers['umamiburger']={lat:37.797290, lng:-122.435153};
gMarkers['birite']={lat:37.774945, lng:-122.437547};
gMarkers['greenchilekitchen']={lat:37.777414, lng:-122.441922};
gMarkers['lemaraisbakery']={lat:37.800823, lng:-122.437434};
gMarkers['eltecho']={lat:37.756670, lng:-122.418833};
gMarkers['maunaloa']={lat:37.797437, lng:-122.435698};
gMarkers['biergarten']={lat:37.776134, lng:-122.423972};
gMarkers['southernpacificbrewery']={lat:37.760196, lng:-122.414217};
gMarkers['tongaroomhurricanebar']={lat:37.792154, lng:-122.410007};
gMarkers['bourbonandbranch']={lat:37.78596, lng:-122.4132460};
gMarkers['theintervalatlongnow']={lat:37.806627, lng:-122.431984};
gMarkers['californiawinemerchant']={lat:37.800364, lng:-122.438236};
gMarkers['alcatraz']={lat:37.826944, lng:-122.422957};
gMarkers['dolorespark']={lat:37.759755, lng:-122.427042};
gMarkers['alamosquare']={lat:37.776218, lng:-122.434619};
gMarkers['bikethegoldengatebridge']={lat:37.819937, lng:-122.478266};
gMarkers['goldengatepark']={lat:37.769412, lng:-122.486278};
gMarkers['sutrobaths']={lat:37.779974, lng:-122.513762};
gMarkers['angelisland']={lat:37.861181, lng:-122.432205};
gMarkers['hikinginmarin']={lat:37.826463, lng:-122.499962};
gMarkers['ferrybuilding']={lat:37.795579, lng:-122.393299};
gMarkers['giantsgame']={lat:37.778578, lng:-122.389323};
gMarkers['muirwoods']={lat:37.895318, lng:-122.578082};
gMarkers['thehaight'] = {lat: 37.770045,lng: -122.446922};
gMarkers['frogsleap'] = {lat: 38.474190,lng: -122.402429};
gMarkers['caymus'] = {lat: 38.469920,lng: -122.398049};
gMarkers['paraduxx'] = {lat: 38.435510,lng: -122.350864};
gMarkers['minerfamily'] = {lat: 38.462778,lng: -122.370737};
gMarkers['sinskey'] = {lat: 38.425384,lng: -122.336469};
gMarkers['swanson'] = {lat: 38.450364,lng: -122.418668};
gMarkers['honig'] = {lat: 38.471914,lng: -122.406785};
gMarkers['fleury'] = {lat: 38.481407,lng: -122.424102};
gMarkers['oakville'] = {lat: 38.437326,lng: -122.402955};
gMarkers['redd'] = {lat: 38.399456,lng: -122.358388};
gMarkers['lucy'] = {lat: 38.402974,lng: -122.359937};
gMarkers['solbar'] = {lat: 38.583983,lng: -122.570197};

gPolygons['NOPA'] = [{lat: 37.790379, lng: -122.422379},  {lat: 37.787128, lng: -122.446411},  {lat: 37.786251, lng: -122.446327},  {lat: 37.785301, lng: -122.447273},  {lat: 37.782921, lng: -122.446762},  {lat: 37.782181, lng: -122.447609},  {lat: 37.775871, lng: -122.446503},  {lat: 37.77478, lng: -122.45285},  {lat: 37.772202, lng: -122.452248},  {lat: 37.774029, lng: -122.437401},  {lat: 37.779671, lng: -122.43869},  {lat: 37.780548, lng: -122.432083},  {lat: 37.77858, lng: -122.431557},  {lat: 37.778992, lng: -122.428223},  {lat: 37.777901, lng: -122.427872},  {lat: 37.778889, lng: -122.421677},  {lat: 37.781654, lng: -122.422195},  {lat: 37.781921, lng: -122.420441},  {lat: 37.790379, lng: -122.422379},  ];
gPolygons['West Portal'] = [{lat: 37.74313, lng: -122.470184},  {lat: 37.739094, lng: -122.469925},  {lat: 37.73838, lng: -122.469711},  {lat: 37.737701, lng: -122.470825},  {lat: 37.736378, lng: -122.470741},  {lat: 37.735596, lng: -122.47113},  {lat: 37.734749, lng: -122.471298},  {lat: 37.739094, lng: -122.466324},  {lat: 37.740009, lng: -122.463577},  {lat: 37.740177, lng: -122.459625},  {lat: 37.740822, lng: -122.459541},  {lat: 37.742756, lng: -122.461517},  {lat: 37.743641, lng: -122.463707},  {lat: 37.743336, lng: -122.465637},  {lat: 37.743366, lng: -122.466148},  {lat: 37.743267, lng: -122.468254},  {lat: 37.74313, lng: -122.470184},  ];
gPolygons['Visitacion Valley'] = [{lat: 37.721783, lng: -122.40033},  {lat: 37.719067, lng: -122.410973},  {lat: 37.71825, lng: -122.414749},  {lat: 37.720016, lng: -122.424957},  {lat: 37.715809, lng: -122.426849},  {lat: 37.716488, lng: -122.430969},  {lat: 37.712955, lng: -122.433197},  {lat: 37.710377, lng: -122.424789},  {lat: 37.709084, lng: -122.423073},  {lat: 37.708065, lng: -122.423843},  {lat: 37.708542, lng: -122.39492},  {lat: 37.712749, lng: -122.396118},  {lat: 37.715809, lng: -122.398438},  {lat: 37.721783, lng: -122.40033},  ];
gPolygons['Twin Peaks'] = [{lat: 37.759209, lng: -122.447258},  {lat: 37.75853, lng: -122.450127},  {lat: 37.757851, lng: -122.452621},  {lat: 37.755508, lng: -122.454468},  {lat: 37.75375, lng: -122.45575},  {lat: 37.749401, lng: -122.45575},  {lat: 37.749439, lng: -122.457176},  {lat: 37.746552, lng: -122.457176},  {lat: 37.745602, lng: -122.453789},  {lat: 37.745399, lng: -122.45134},  {lat: 37.747059, lng: -122.444603},  {lat: 37.754929, lng: -122.441681},  {lat: 37.756031, lng: -122.440857},  {lat: 37.75626, lng: -122.440903},  {lat: 37.756329, lng: -122.441261},  {lat: 37.756329, lng: -122.4422},  {lat: 37.756359, lng: -122.442131},  {lat: 37.757755, lng: -122.44323},  {lat: 37.758259, lng: -122.444603},  {lat: 37.759209, lng: -122.447258},  ];
gPolygons['The Castro'] = [{lat: 37.76379, lng: -122.433319},  {lat: 37.762699, lng: -122.43512},  {lat: 37.765549, lng: -122.435417},  {lat: 37.765591, lng: -122.436661},  {lat: 37.76545, lng: -122.440559},  {lat: 37.765011, lng: -122.442291},  {lat: 37.764599, lng: -122.442757},  {lat: 37.763481, lng: -122.442757},  {lat: 37.763378, lng: -122.44352},  {lat: 37.76199, lng: -122.444992},  {lat: 37.761749, lng: -122.447609},  {lat: 37.759209, lng: -122.447311},  {lat: 37.757751, lng: -122.44323},  {lat: 37.756329, lng: -122.4422},  {lat: 37.756321, lng: -122.441238},  {lat: 37.756248, lng: -122.440872},  {lat: 37.756229, lng: -122.440865},  {lat: 37.755482, lng: -122.441299},  {lat: 37.755821, lng: -122.438766},  {lat: 37.756458, lng: -122.429581},  {lat: 37.765831, lng: -122.430779},  {lat: 37.76379, lng: -122.433319},  ];
gPolygons['Tenderloin'] = [{lat: 37.788551, lng: -122.421867},  {lat: 37.781925, lng: -122.420464},  {lat: 37.782314, lng: -122.417305},  {lat: 37.780338, lng: -122.416962},  {lat: 37.78051, lng: -122.415237},  {lat: 37.780891, lng: -122.412849},  {lat: 37.780411, lng: -122.412247},  {lat: 37.783192, lng: -122.408913},  {lat: 37.789982, lng: -122.410278},  {lat: 37.788551, lng: -122.421867},  ];
gPolygons['Telegraph Hill'] = [{lat: 37.806259, lng: -122.405579},  {lat: 37.803818, lng: -122.401459},  {lat: 37.799339, lng: -122.397682},  {lat: 37.797985, lng: -122.405235},  {lat: 37.797714, lng: -122.406776},  {lat: 37.79961, lng: -122.408669},  {lat: 37.805714, lng: -122.409523},  {lat: 37.806259, lng: -122.405579},  ];
gPolygons['South Beach'] = [{lat: 37.78886, lng: -122.388046},  {lat: 37.782009, lng: -122.396545},  {lat: 37.777161, lng: -122.389847},  {lat: 37.778278, lng: -122.387489},  {lat: 37.787979, lng: -122.387657},  {lat: 37.78886, lng: -122.388046},  ];
gPolygons['SoMa'] = [{lat: 37.795273, lng: -122.393974},  {lat: 37.771664, lng: -122.423332},  {lat: 37.770241, lng: -122.421524},  {lat: 37.769764, lng: -122.415604},  {lat: 37.769424, lng: -122.41037},  {lat: 37.768951, lng: -122.408554},  {lat: 37.771259, lng: -122.405807},  {lat: 37.772274, lng: -122.406403},  {lat: 37.77404, lng: -122.406921},  {lat: 37.775059, lng: -122.405975},  {lat: 37.781975, lng: -122.396896},  {lat: 37.78883, lng: -122.388054},  {lat: 37.791336, lng: -122.390541},  {lat: 37.792694, lng: -122.39106},  {lat: 37.795273, lng: -122.393974},  ];
gPolygons['Russian Hill'] = [{lat: 37.795815, lng: -122.422913},  {lat: 37.797035, lng: -122.413986},  {lat: 37.804089, lng: -122.414505},  {lat: 37.805309, lng: -122.416908},  {lat: 37.804089, lng: -122.424973},  {lat: 37.795815, lng: -122.422913},  ];
gPolygons['Richmond District'] = [{lat: 37.786793, lng: -122.459976},  {lat: 37.786724, lng: -122.462471},  {lat: 37.789371, lng: -122.462555},  {lat: 37.788284, lng: -122.465813},  {lat: 37.786995, lng: -122.465813},  {lat: 37.786655, lng: -122.478951},  {lat: 37.78754, lng: -122.484184},  {lat: 37.787403, lng: -122.487358},  {lat: 37.783672, lng: -122.487099},  {lat: 37.783604, lng: -122.49234},  {lat: 37.781433, lng: -122.492424},  {lat: 37.780685, lng: -122.50985},  {lat: 37.77906, lng: -122.509247},  {lat: 37.775124, lng: -122.508987},  {lat: 37.774921, lng: -122.510788},  {lat: 37.771191, lng: -122.510788},  {lat: 37.77248, lng: -122.47998},  {lat: 37.773293, lng: -122.464439},  {lat: 37.775871, lng: -122.446587},  {lat: 37.782383, lng: -122.447708},  {lat: 37.781433, lng: -122.4562},  {lat: 37.781162, lng: -122.458778},  {lat: 37.786724, lng: -122.459122},  {lat: 37.786793, lng: -122.459976},  ];
gPolygons['Presidio Heights'] = [{lat: 37.791599, lng: -122.447533},  {lat: 37.789032, lng: -122.462708},  {lat: 37.787266, lng: -122.462883},  {lat: 37.786995, lng: -122.45945},  {lat: 37.78109, lng: -122.458603},  {lat: 37.782108, lng: -122.447609},  {lat: 37.78299, lng: -122.447006},  {lat: 37.785301, lng: -122.447357},  {lat: 37.786518, lng: -122.446579},  {lat: 37.791599, lng: -122.447533},  ];
gPolygons['Potrero Hill'] = [{lat: 37.749882, lng: -122.392174},  {lat: 37.75259, lng: -122.391144},  {lat: 37.75531, lng: -122.39225},  {lat: 37.763996, lng: -122.392632},  {lat: 37.766575, lng: -122.394646},  {lat: 37.765759, lng: -122.405128},  {lat: 37.763378, lng: -122.404869},  {lat: 37.76046, lng: -122.406326},  {lat: 37.75951, lng: -122.406067},  {lat: 37.756329, lng: -122.403236},  {lat: 37.754219, lng: -122.40255},  {lat: 37.751781, lng: -122.402901},  {lat: 37.749062, lng: -122.403412},  {lat: 37.749882, lng: -122.392174},  ];
gPolygons['Portola'] = [{lat: 37.73481, lng: -122.40667},  {lat: 37.732029, lng: -122.414307},  {lat: 37.731762, lng: -122.418854},  {lat: 37.728977, lng: -122.419197},  {lat: 37.728359, lng: -122.423668},  {lat: 37.724091, lng: -122.421768},  {lat: 37.723885, lng: -122.42366},  {lat: 37.722191, lng: -122.424858},  {lat: 37.721916, lng: -122.424088},  {lat: 37.719948, lng: -122.42495},  {lat: 37.719131, lng: -122.419456},  {lat: 37.718182, lng: -122.414734},  {lat: 37.718929, lng: -122.410789},  {lat: 37.72184, lng: -122.400414},  {lat: 37.729309, lng: -122.403328},  {lat: 37.73481, lng: -122.40667},  ];
gPolygons['Parkside'] = [{lat: 37.747639, lng: -122.494652},  {lat: 37.736301, lng: -122.493958},  {lat: 37.73753, lng: -122.48941},  {lat: 37.737122, lng: -122.486931},  {lat: 37.737591, lng: -122.470688},  {lat: 37.738415, lng: -122.469749},  {lat: 37.74683, lng: -122.470436},  {lat: 37.746819, lng: -122.473351},  {lat: 37.748322, lng: -122.473686},  {lat: 37.748589, lng: -122.475769},  {lat: 37.747639, lng: -122.494652},  ];
gPolygons['Pacific Heights'] = [{lat: 37.794697, lng: -122.446709},  {lat: 37.791607, lng: -122.447609},  {lat: 37.787231, lng: -122.4468},  {lat: 37.790421, lng: -122.422424},  {lat: 37.797714, lng: -122.423668},  {lat: 37.797646, lng: -122.424011},  ];
gPolygons['Outer Sunset'] = [{lat: 37.765152, lng: -122.477158},  {lat: 37.764065, lng: -122.509773},  {lat: 37.735153, lng: -122.506172},  {lat: 37.735291, lng: -122.50222},  {lat: 37.733253, lng: -122.49604},  {lat: 37.734341, lng: -122.47493},  {lat: 37.737465, lng: -122.475273},  {lat: 37.73719, lng: -122.487114},  {lat: 37.737598, lng: -122.489517},  {lat: 37.736511, lng: -122.493813},  {lat: 37.747711, lng: -122.494743},  {lat: 37.748592, lng: -122.475685},  {lat: 37.737465, lng: -122.475273},  {lat: 37.765152, lng: -122.477158},  ];
gPolygons['North Beach'] = [{lat: 37.797577, lng: -122.406776},  {lat: 37.796764, lng: -122.413818},  {lat: 37.803818, lng: -122.415016},  {lat: 37.805172, lng: -122.417076},  {lat: 37.80558, lng: -122.409355},  {lat: 37.799339, lng: -122.408493},  {lat: 37.797577, lng: -122.406776},  ];
gPolygons['Noe Valley'] = [{lat: 37.7565, lng: -122.425591},  {lat: 37.756458, lng: -122.429802},  {lat: 37.755482, lng: -122.441299},  {lat: 37.754929, lng: -122.441597},  {lat: 37.746819, lng: -122.444733},  {lat: 37.74638, lng: -122.443573},  {lat: 37.7472, lng: -122.44117},  {lat: 37.74662, lng: -122.440178},  {lat: 37.74543, lng: -122.440048},  {lat: 37.742043, lng: -122.43589},  {lat: 37.74231, lng: -122.424217},  {lat: 37.7565, lng: -122.425591},  ];
gPolygons['Nob Hill'] = [{lat: 37.797405, lng: -122.410271},  {lat: 37.795712, lng: -122.42334},  {lat: 37.788486, lng: -122.421921},  {lat: 37.790134, lng: -122.408768},  {lat: 37.797405, lng: -122.410271},  ];
gPolygons['Mission Terrace'] = [{lat: 37.731762, lng: -122.42762},  {lat: 37.725243, lng: -122.434402},  {lat: 37.716282, lng: -122.44101},  {lat: 37.717369, lng: -122.441696},  {lat: 37.720219, lng: -122.445389},  {lat: 37.721104, lng: -122.447792},  {lat: 37.724499, lng: -122.447105},  {lat: 37.728027, lng: -122.443756},  {lat: 37.731354, lng: -122.435257},  {lat: 37.732235, lng: -122.43174},  {lat: 37.731762, lng: -122.42762},  ];
gPolygons['Mission District'] = [{lat: 37.77166, lng: -122.423317},  {lat: 37.765759, lng: -122.430878},  {lat: 37.756329, lng: -122.429764},  {lat: 37.756531, lng: -122.425468},  {lat: 37.747768, lng: -122.424782},  {lat: 37.748322, lng: -122.407951},  {lat: 37.749035, lng: -122.405724},  {lat: 37.749237, lng: -122.403358},  {lat: 37.753681, lng: -122.402809},  {lat: 37.75415, lng: -122.402412},  {lat: 37.75687, lng: -122.40358},  {lat: 37.75951, lng: -122.406097},  {lat: 37.760399, lng: -122.406326},  {lat: 37.763649, lng: -122.404793},  {lat: 37.767792, lng: -122.405388},  {lat: 37.76857, lng: -122.406868},  {lat: 37.769291, lng: -122.410278},  {lat: 37.769619, lng: -122.416634},  {lat: 37.770241, lng: -122.42144},  {lat: 37.77166, lng: -122.423317},  ];
gPolygons['Mission Bay'] = [{lat: 37.781841, lng: -122.39637},  {lat: 37.775188, lng: -122.405731},  {lat: 37.773361, lng: -122.406593},  {lat: 37.76569, lng: -122.404961},  {lat: 37.767288, lng: -122.385551},  {lat: 37.768951, lng: -122.384697},  {lat: 37.773628, lng: -122.386681},  {lat: 37.77668, lng: -122.387192},  {lat: 37.776749, lng: -122.389847},  {lat: 37.781841, lng: -122.39637},  ];
gPolygons['Marina District'] = [{lat: 37.801579, lng: -122.424568},  {lat: 37.804428, lng: -122.425255},  {lat: 37.80341, lng: -122.431908},  {lat: 37.805309, lng: -122.432205},  {lat: 37.805073, lng: -122.433792},  {lat: 37.806767, lng: -122.436501},  {lat: 37.805038, lng: -122.448082},  {lat: 37.803612, lng: -122.449974},  {lat: 37.802425, lng: -122.449585},  {lat: 37.801411, lng: -122.447784},  {lat: 37.798595, lng: -122.447266},  {lat: 37.801579, lng: -122.424568},  ];
gPolygons['Lower Haight'] = [{lat: 37.774719, lng: -122.437653},  {lat: 37.770206, lng: -122.43679},  {lat: 37.769119, lng: -122.435677},  {lat: 37.769527, lng: -122.426659},  {lat: 37.776245, lng: -122.427864},  {lat: 37.774853, lng: -122.437653},  ];
gPolygons['Japantown'] = [{lat: 37.786129, lng: -122.433243},  {lat: 37.784248, lng: -122.432777},  {lat: 37.785049, lng: -122.428017},  {lat: 37.786751, lng: -122.428383},  {lat: 37.786129, lng: -122.433243},  ];
gPolygons['Inner Sunset'] = [{lat: 37.765961, lng: -122.457588},  {lat: 37.766102, lng: -122.458794},  {lat: 37.765152, lng: -122.477135},  {lat: 37.748589, lng: -122.475777},  {lat: 37.748451, lng: -122.473717},  {lat: 37.746689, lng: -122.473381},  {lat: 37.746891, lng: -122.470428},  {lat: 37.74316, lng: -122.470428},  {lat: 37.743301, lng: -122.467598},  {lat: 37.746552, lng: -122.467369},  {lat: 37.750759, lng: -122.464111},  {lat: 37.753479, lng: -122.464622},  {lat: 37.75375, lng: -122.463249},  {lat: 37.75185, lng: -122.459473},  {lat: 37.752121, lng: -122.455704},  {lat: 37.753479, lng: -122.455872},  {lat: 37.757408, lng: -122.45295},  {lat: 37.758228, lng: -122.451233},  {lat: 37.761082, lng: -122.451752},  {lat: 37.761211, lng: -122.455704},  {lat: 37.76474, lng: -122.456383},  {lat: 37.764599, lng: -122.457932},  {lat: 37.765961, lng: -122.457588},  ];
gPolygons['Hayes Valley'] = [{lat: 37.778721, lng: -122.423355},  {lat: 37.778042, lng: -122.428162},  {lat: 37.770645, lng: -122.426788},  {lat: 37.769493, lng: -122.42662},  {lat: 37.770782, lng: -122.424782},  {lat: 37.772903, lng: -122.422157},  {lat: 37.778721, lng: -122.423355},  ];
gPolygons['Haight-Ashbury'] = [{lat: 37.771088, lng: -122.453789},  {lat: 37.768238, lng: -122.453278},  {lat: 37.768814, lng: -122.448341},  {lat: 37.765186, lng: -122.447571},  {lat: 37.76498, lng: -122.448555},  {lat: 37.761757, lng: -122.447609},  {lat: 37.761894, lng: -122.445122},  {lat: 37.763386, lng: -122.443489},  {lat: 37.763454, lng: -122.442802},  {lat: 37.764572, lng: -122.442894},  {lat: 37.765083, lng: -122.442291},  {lat: 37.765457, lng: -122.440834},  {lat: 37.765625, lng: -122.435341},  {lat: 37.769188, lng: -122.435593},  {lat: 37.770309, lng: -122.436882},  {lat: 37.77319, lng: -122.437309},  {lat: 37.771088, lng: -122.453789},  ];
gPolygons['Glen Park'] = [{lat: 37.742317, lng: -122.424301},  {lat: 37.741978, lng: -122.43589},  {lat: 37.739971, lng: -122.435768},  {lat: 37.738071, lng: -122.437141},  {lat: 37.738682, lng: -122.439293},  {lat: 37.73793, lng: -122.439888},  {lat: 37.737251, lng: -122.439461},  {lat: 37.734539, lng: -122.439552},  {lat: 37.735291, lng: -122.440659},  {lat: 37.735828, lng: -122.441948},  {lat: 37.735489, lng: -122.443497},  {lat: 37.731419, lng: -122.443497},  {lat: 37.73148, lng: -122.439377},  {lat: 37.729919, lng: -122.439201},  {lat: 37.731758, lng: -122.435509},  {lat: 37.735901, lng: -122.426407},  {lat: 37.73827, lng: -122.424438},  {lat: 37.74004, lng: -122.423927},  {lat: 37.742317, lng: -122.424301},  ];
gPolygons['Fishermans Wharf'] = [{lat: 37.806664, lng: -122.425682},  {lat: 37.804222, lng: -122.425041},  {lat: 37.806564, lng: -122.406029},  {lat: 37.80724, lng: -122.406502},  {lat: 37.808224, lng: -122.409248},  {lat: 37.808735, lng: -122.412895},  {lat: 37.809006, lng: -122.416245},  {lat: 37.808292, lng: -122.416367},  {lat: 37.807919, lng: -122.420105},  {lat: 37.808327, lng: -122.420319},  {lat: 37.808292, lng: -122.421219},  {lat: 37.806732, lng: -122.423706},  {lat: 37.806664, lng: -122.425682},  ];
gPolygons['Financial District'] = [{lat: 37.798901, lng: -122.398262},  {lat: 37.798084, lng: -122.405426},  {lat: 37.787605, lng: -122.40332},  {lat: 37.794323, lng: -122.395126},  {lat: 37.795609, lng: -122.396805},  {lat: 37.798527, lng: -122.397614},  {lat: 37.798901, lng: -122.398262},  ];
gPolygons['Excelsior'] = [{lat: 37.731762, lng: -122.428047},  {lat: 37.724834, lng: -122.434662},  {lat: 37.716282, lng: -122.440926},  {lat: 37.712887, lng: -122.433197},  {lat: 37.716488, lng: -122.430969},  {lat: 37.715874, lng: -122.42659},  {lat: 37.721985, lng: -122.424187},  {lat: 37.722324, lng: -122.424873},  {lat: 37.72382, lng: -122.423676},  {lat: 37.724091, lng: -122.421783},  {lat: 37.728436, lng: -122.423676},  {lat: 37.728909, lng: -122.419121},  {lat: 37.731831, lng: -122.418777},  {lat: 37.731014, lng: -122.424271},  {lat: 37.731762, lng: -122.428047},  ];
gPolygons['Duboce Triangle'] = [{lat: 37.76907, lng: -122.435722},  {lat: 37.762775, lng: -122.435165},  {lat: 37.769562, lng: -122.426476},  {lat: 37.76907, lng: -122.435722},  ];
gPolygons['Downtown'] = [{lat: 37.789776, lng: -122.410454},  {lat: 37.783264, lng: -122.408997},  {lat: 37.787876, lng: -122.403328},  {lat: 37.790726, lng: -122.404015},  {lat: 37.789776, lng: -122.410454},  ];
gPolygons['Dogpatch'] = [{lat: 37.74818, lng: -122.385902},  {lat: 37.760601, lng: -122.387283},  {lat: 37.763721, lng: -122.386162},  {lat: 37.766029, lng: -122.38607},  {lat: 37.76725, lng: -122.385559},  {lat: 37.766571, lng: -122.394493},  {lat: 37.763859, lng: -122.392601},  {lat: 37.75531, lng: -122.392174},  {lat: 37.752659, lng: -122.39122},  {lat: 37.749817, lng: -122.392075},  {lat: 37.748589, lng: -122.392769},  {lat: 37.747639, lng: -122.390106},  {lat: 37.74818, lng: -122.385902},  ];
gPolygons['Diamond Heights'] = [{lat: 37.746929, lng: -122.444778},  {lat: 37.745472, lng: -122.451477},  {lat: 37.743095, lng: -122.449631},  {lat: 37.742687, lng: -122.448601},  {lat: 37.742317, lng: -122.446457},  {lat: 37.741127, lng: -122.445938},  {lat: 37.740723, lng: -122.444435},  {lat: 37.739975, lng: -122.443924},  {lat: 37.739803, lng: -122.442589},  {lat: 37.739227, lng: -122.442421},  {lat: 37.738243, lng: -122.442551},  {lat: 37.737156, lng: -122.442291},  {lat: 37.736477, lng: -122.443748},  {lat: 37.73597, lng: -122.443962},  {lat: 37.735561, lng: -122.443367},  {lat: 37.735901, lng: -122.441864},  {lat: 37.735428, lng: -122.440788},  {lat: 37.734749, lng: -122.440147},  {lat: 37.734715, lng: -122.439758},  {lat: 37.737667, lng: -122.43959},  {lat: 37.738209, lng: -122.439934},  {lat: 37.73875, lng: -122.439461},  {lat: 37.738277, lng: -122.437401},  {lat: 37.738819, lng: -122.436584},  {lat: 37.739906, lng: -122.435936},  {lat: 37.742283, lng: -122.435936},  {lat: 37.745438, lng: -122.440102},  {lat: 37.746693, lng: -122.440231},  {lat: 37.747234, lng: -122.441048},  {lat: 37.74649, lng: -122.443619},  {lat: 37.746929, lng: -122.444778},  ];
gPolygons['Cow Hollow'] = [{lat: 37.798527, lng: -122.447266},  {lat: 37.794697, lng: -122.446671},  {lat: 37.79768, lng: -122.423798},  {lat: 37.801441, lng: -122.424484},  {lat: 37.798527, lng: -122.447266},  ];
gPolygons['Cole Valley'] = [{lat: 37.758228, lng: -122.451385},  {lat: 37.759315, lng: -122.447266},  {lat: 37.765083, lng: -122.448303},  {lat: 37.765152, lng: -122.447365},  {lat: 37.768814, lng: -122.448395},  {lat: 37.768204, lng: -122.453285},  {lat: 37.766373, lng: -122.452942},  {lat: 37.765831, lng: -122.457916},  {lat: 37.764812, lng: -122.457748},  {lat: 37.764881, lng: -122.456635},  {lat: 37.761147, lng: -122.455933},  {lat: 37.761215, lng: -122.451912},  {lat: 37.758228, lng: -122.451385},  ];
gPolygons['Civic Center'] = [{lat: 37.782333, lng: -122.417282},  {lat: 37.781654, lng: -122.422218},  {lat: 37.778851, lng: -122.421677},  {lat: 37.778648, lng: -122.423317},  {lat: 37.772678, lng: -122.421951},  {lat: 37.780411, lng: -122.412338},  {lat: 37.780891, lng: -122.412682},  {lat: 37.780281, lng: -122.41687},  {lat: 37.782333, lng: -122.417282},  ];
gPolygons['Chinatown'] = [{lat: 37.797405, lng: -122.410294},  {lat: 37.790115, lng: -122.408791},  {lat: 37.79076, lng: -122.404053},  {lat: 37.798019, lng: -122.40551},  {lat: 37.797405, lng: -122.410294},  ];
gPolygons['Bernal Heights'] = [{lat: 37.749271, lng: -122.403412},  {lat: 37.749035, lng: -122.405724},  {lat: 37.748253, lng: -122.407951},  {lat: 37.747711, lng: -122.424782},  {lat: 37.740009, lng: -122.42392},  {lat: 37.73827, lng: -122.42453},  {lat: 37.735901, lng: -122.426239},  {lat: 37.731892, lng: -122.4356},  {lat: 37.73148, lng: -122.434052},  {lat: 37.732101, lng: -122.431908},  {lat: 37.731892, lng: -122.427788},  {lat: 37.731152, lng: -122.42453},  {lat: 37.73196, lng: -122.419289},  {lat: 37.732029, lng: -122.414139},  {lat: 37.735149, lng: -122.40667},  {lat: 37.737801, lng: -122.407791},  {lat: 37.742142, lng: -122.407021},  {lat: 37.744179, lng: -122.405212},  {lat: 37.749271, lng: -122.403412},  ];
gPolygons['Bayview'] = [{lat: 37.747849, lng: -122.403999},  {lat: 37.737591, lng: -122.383926},  {lat: 37.734402, lng: -122.382729},  {lat: 37.733452, lng: -122.379639},  {lat: 37.730671, lng: -122.379288},  {lat: 37.73019, lng: -122.38092},  {lat: 37.730808, lng: -122.382469},  {lat: 37.730129, lng: -122.382812},  {lat: 37.727619, lng: -122.377663},  {lat: 37.72633, lng: -122.37809},  {lat: 37.725441, lng: -122.37912},  {lat: 37.725441, lng: -122.377411},  {lat: 37.724091, lng: -122.376549},  {lat: 37.72361, lng: -122.378777},  {lat: 37.721642, lng: -122.380501},  {lat: 37.72422, lng: -122.3853},  {lat: 37.72456, lng: -122.386589},  {lat: 37.724152, lng: -122.386932},  {lat: 37.721642, lng: -122.382378},  {lat: 37.71764, lng: -122.386681},  {lat: 37.71492, lng: -122.382729},  {lat: 37.70908, lng: -122.382896},  {lat: 37.709831, lng: -122.386253},  {lat: 37.708401, lng: -122.387787},  {lat: 37.709492, lng: -122.389771},  {lat: 37.708939, lng: -122.39045},  {lat: 37.709621, lng: -122.391479},  {lat: 37.70874, lng: -122.392601},  {lat: 37.708542, lng: -122.394737},  {lat: 37.712681, lng: -122.396294},  {lat: 37.715389, lng: -122.398178},  {lat: 37.729382, lng: -122.403328},  {lat: 37.735149, lng: -122.40667},  {lat: 37.737598, lng: -122.407951},  {lat: 37.739429, lng: -122.407784},  {lat: 37.742008, lng: -122.407349},  {lat: 37.744453, lng: -122.405289},  {lat: 37.747849, lng: -122.403999},  ];
gPolygons['Alamo Square'] = [{lat: 37.775429, lng: -122.434303},  {lat: 37.776379, lng: -122.428001},  {lat: 37.778111, lng: -122.428215},  {lat: 37.778111, lng: -122.427917},  {lat: 37.77906, lng: -122.428299},  {lat: 37.778549, lng: -122.431602},  {lat: 37.78072, lng: -122.432159},  {lat: 37.779705, lng: -122.43856},  {lat: 37.774887, lng: -122.437607},  {lat: 37.775429, lng: -122.434303},  ];
  gPolygons['AllNeighborhoods'] = [
    gPolygons['NOPA'],
    gPolygons['West Portal'],
    gPolygons['Visitacion Valley'],
    gPolygons['Twin Peaks'],
    gPolygons['The Castro'],
    gPolygons['Tenderloin'],
    gPolygons['Telegraph Hill'],
    gPolygons['South Beach'],
    gPolygons['SoMa'],
    gPolygons['Russian Hill'],
    gPolygons['Richmond District'],
    gPolygons['Presidio Heights'],
    gPolygons['Potrero Hill'],
    gPolygons['Portola'],
    gPolygons['Parkside'],
    gPolygons['Pacific Heights'],
    gPolygons['Outer Sunset'],
    gPolygons['North Beach'],
    gPolygons['Noe Valley'],
    gPolygons['Nob Hill'],
    gPolygons['Mission Terrace'],
    gPolygons['Mission District'],
    gPolygons['Mission Bay'],
    gPolygons['Marina District'],
    gPolygons['Lower Haight'],
    gPolygons['Japantown'],
    gPolygons['Inner Sunset'],
    gPolygons['Hayes Valley'],
    gPolygons['Haight-Ashbury'],
    gPolygons['Glen Park'],
    gPolygons['Fishermans Wharf'],
    gPolygons['Financial District'],
    gPolygons['Excelsior'],
    gPolygons['Duboce Triangle'],
    gPolygons['Downtown'],
    gPolygons['Dogpatch'],
    gPolygons['Diamond Heights'],
    gPolygons['Cow Hollow'],
    gPolygons['Cole Valley'],
    gPolygons['Civic Center'],
    gPolygons['Chinatown'],
    gPolygons['Bernal Heights'],
    gPolygons['Bayview'],
    gPolygons['Alamo Square']
  ];

function reinitializeMap1 (){
  $(document).ready(function initialize(condition) {
      var myOptions = {
          zoom: 13,
          center: new google.maps.LatLng(37.7833, -122.4167),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          disableDefaultUI: true
      };
      map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);


    // Adds a marker at the center of the map.
    $('article').on('hover', function(e) {
      var poi_type = $(this).attr('name');
      var mapIconLabel = $(this).data('icon');
      e.type == 'mouseenter' ? addMarker(gMarkers[poi_type], mapIconLabel) : clearMarkers();
    });

    $('.neighborhoods article').on('hover', function(e) {
      var path = gPolygons[$(this).attr('name')];
      e.type == 'mouseenter' ? addPolygon(path) : clearPolygons();
    });
  });
}

// Adds a marker to the map and push to the array.
function addMarker(location, mapIconLabel) {
  var marker = new Marker({
    position: location,
    map: map,
    icon: {
      path: MAP_PIN,
      fillColor: '#779ECB',
      fillOpacity: 0.8,
      strokeColor: '',
      strokeWeight: 0
    },
    map_icon_label: '<span class="map-icon ' + mapIconLabel + '"></span>'
  });
  markers.push(marker);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setMapOnAll(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setMapOnAll(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

function addPolygon(path) {
  var polygon = new google.maps.Polygon({
    paths: path, // pre-defined polygon shape
    map: map,
    strokeColor: '#337ab7',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#337ab7',
    fillOpacity: 0.8
  });
  polygons.push(polygon);
}

// Sets the map on all markers in the array.
function setMapOnAllPolygons(map) {
  for (var i = 0; i < polygons.length; i++) {
    polygons[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearPolygons() {
  setMapOnAllPolygons(null);
}

// Shows any markers currently in the array.
function showPolygons() {
  setMapOnAllPolygons(map);
}

// Deletes all markers in the array by removing references to them.
function deletePolygons() {
  clearPolygons();
  polygons = [];
}

function newLocation(newLat,newLng){
  map.setCenter({
    lat : newLat,
    lng : newLng
  });
}

$(document).ready(function($) {
  reinitializeMap1();

  $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("href") // activated tab
    if (target == "#wine") {
      newLocation(38.401416, -122.360695);
      map.setZoom(10);
    }
    else {
      newLocation(37.7833, -122.4167);
      map.setZoom(13);
    }
  });

});
