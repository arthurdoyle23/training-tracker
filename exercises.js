// Exercise library: how-to text + stick-figure poses (viewBox 0 -10 120 124).
// Pose joints: h head, n neck, p pelvis, k1/f1 near leg, k2/f2 far leg, e1/w1 near arm, e2/w2 far arm, t1 toe (optional).
// front:true = facing you (arms/legs start from shoulders/hips spread apart).
// attach: kb (kettlebell) | plate | roller | platform | pad, placed at a joint or "mid" (between hands).

const STAND = {h:[60,19],n:[60,28],p:[60,62],k1:[60,85],f1:[60,108],k2:[60,85],f2:[60,108],e1:[60,45],w1:[60,62],e2:[60,45],w2:[60,62]};
const P = (base, over) => Object.assign({}, base, over);

const FLOOR = [["line",0,110,120,110]];

const kneeExtA = {h:[46,24],n:[47,33],p:[50,68],k1:[72,70],f1:[74,96],k2:[72,72],f2:[73,98],e1:[48,52],w1:[58,68],e2:[48,52],w2:[58,68]};
const legPressA = {h:[17,44],n:[22,52],p:[40,82],k1:[60,58],f1:[82,72],k2:[58,72],f2:[56,100],e1:[32,68],w1:[42,82],e2:[32,68],w2:[42,82]};
const trapA = {h:[79,46],n:[72,52],p:[44,70],k1:[66,87],f1:[58,108],k2:[65,88],f2:[56,108],e1:[71,67],w1:[69,82],e2:[70,67],w2:[68,82]};
const stepA = {h:[55,10],n:[55,18],p:[54,48],k1:[55,70],f1:[54,92],k2:[60,70],f2:[68,90],e1:[64,33],w1:[56,46],e2:[64,33],w2:[56,46]};
const calfA = {h:[44,26],n:[45,35],p:[48,70],k1:[74,70],f1:[74,98],t1:[86,100],k2:[74,70],f2:[74,98],e1:[50,52],w1:[64,64],e2:[50,52],w2:[64,64]};
const birdA = {h:[50,21],n:[50,30],p:[50,62],k1:[50,85],f1:[50,108],k2:[54,84],f2:[48,100],e1:[50,46],w1:[51,62],e2:[50,46],w2:[51,62]};
const plateA = {front:true,h:[60,18],n:[60,28],p:[60,62],k1:[56,85],f1:[56,108],k2:[68,78],f2:[66,96],e1:[46,40],w1:[54,46],e2:[74,40],w2:[66,46]};
const lieA = {h:[23,98],n:[32,100],p:[62,100],k1:[78,82],f1:[92,108],k2:[78,82],f2:[92,108],e1:[18,100],w1:[6,98],e2:[18,100],w2:[6,98]};
const uppA = {front:true,h:[60,18],n:[60,28],p:[60,62],k1:[52,85],f1:[48,108],k2:[68,85],f2:[72,108],e1:[50,46],w1:[57,40],e2:[70,46],w2:[63,40]};
const curlA = {front:true,h:[60,18],n:[60,28],p:[60,62],k1:[55,85],f1:[54,108],k2:[65,85],f2:[66,108],e1:[52,46],w1:[57,62],e2:[68,46],w2:[63,62]};
const marchA = {front:true,h:[60,18],n:[60,28],p:[60,62],k1:[56,85],f1:[56,108],k2:[64,85],f2:[64,108],e1:[46,46],w1:[47,62],e2:[69,16],w2:[69,2]};
const pushA = {h:[26,73],n:[34,76],p:[64,90],k1:[83,98],f1:[102,106],k2:[83,98],f2:[102,106],e1:[34,92],w1:[34,108],e2:[34,92],w2:[34,108]};
const rowA = {h:[86,52],n:[78,56],p:[46,70],k1:[64,88],f1:[58,108],k2:[62,88],f2:[56,108],e1:[78,72],w1:[78,88],e2:[70,66],w2:[62,80]};
const pullA = {front:true,h:[60,25],n:[60,34],p:[60,68],k1:[57,88],f1:[56,106],k2:[63,88],f2:[64,106],e1:[49,18],w1:[46,4],e2:[71,18],w2:[74,4]};
const bikeA = {h:[83,30],n:[76,36],p:[48,58],e1:[82,46],w1:[88,54],e2:[82,46],w2:[88,54],k1:[68,72],f1:[64,94],k2:[62,76],f2:[48,94]};

const BIKE = [["circle",28,94,15],["circle",92,94,15],["circle",56,94,8],
  ["line",56,94,48,62],["line",48,62,82,60],["line",56,94,82,60],["line",82,60,92,94],["line",56,94,28,94],["line",48,62,28,94],
  ["line",82,60,84,52],["line",84,52,92,54],["rect",40,58,14,3]];

const EXERCISES = {
  kneeExt: {
    name: "Single-leg knee extension", tag: "Physio · machine",
    poses: [kneeExtA, P(kneeExtA,{f1:[98,66]})], attach: [["roller","f1"]],
    scene: [["rect",34,30,6,44],["rect",34,72,40,6],["line",52,78,52,108],...FLOOR],
    timing: "slow",
    steps: [
      "Sit in the knee extension machine, back against the pad. Roller sits on the front of your ankle.",
      "Use BOTH legs to lift the weight up until knees are straight (2 up).",
      "Take your good leg off. Lower slowly with your rehab leg only, about 3 seconds (1 down).",
      "Repeat. Do the set on each side."
    ],
    cues: ["Squeeze the thigh hard at the top.", "Hold the handles, keep your bum on the seat."],
    knee: "Should feel like muscle work, not sharp pain at the kneecap. If it's sore, cut the range so you don't go as low and tell your physio.",
    video: "single leg knee extension 2 up 1 down"
  },
  legPress: {
    name: "Single-leg leg press", tag: "Physio · machine",
    poses: [legPressA, P(legPressA,{k1:[66,70],f1:[92,62]})], attach: [["platform","f1"]],
    scene: [["line",14,48,36,86,4],["line",36,88,58,88,4],...FLOOR],
    steps: [
      "Sit in the leg press, back flat on the pad. Put one foot in the middle of the platform.",
      "Release the safety. Push the platform away until your leg is almost straight. Don't lock the knee.",
      "Lower slowly until your knee is about 90°, then push again.",
      "Finish the reps, then switch legs."
    ],
    cues: ["Knee tracks in line with your 2nd toe, not caving in.", "Push through the whole foot, heel included."],
    knee: "Don't go deeper than is comfortable. Stop above any range that pinches.",
    video: "single leg leg press form"
  },
  trapBar: {
    name: "Trap bar deadlift", tag: "Physio · free weight",
    poses: [trapA, P(STAND,{h:[61,21],n:[60,30]})], attach: [["plate","mid",14,12]],
    scene: FLOOR,
    steps: [
      "Stand in the middle of the hex bar, feet hip-width.",
      "Push your hips back, bend your knees, and grab the handles. Chest up, back flat.",
      "Push the floor away and stand up tall. Hips and shoulders rise together.",
      "Lower under control by pushing your hips back first."
    ],
    cues: ["Brace your stomach before each rep.", "Weight spread evenly through both feet."],
    knee: "If the rehab leg feels unstable, use the high handles to shorten the range.",
    video: "trap bar deadlift form"
  },
  stepDown: {
    name: "Single-leg step down", tag: "Physio · free weight",
    poses: [stepA, {h:[66,25],n:[62,33],p:[48,62],k1:[66,76],f1:[54,92],k2:[62,84],f2:[78,108],e1:[74,40],w1:[88,40],e2:[74,40],w2:[88,40]}],
    scene: [["rect",24,92,38,18],...FLOOR], timing: "slow",
    steps: [
      "Stand on a step or box with your rehab leg. The other foot hangs off the front.",
      "Slowly bend the standing knee and lower until the free heel just taps the floor.",
      "Push back up through the standing leg. Don't push off the floor.",
      "Hold dumbbells or a kettlebell if your physio has added load."
    ],
    cues: ["Knee goes forward over the toes, NOT inward.", "Hips stay level. Arms forward for balance.", "Slow on the way down, about 3 seconds."],
    knee: "Use a lower step if you can't control it or if the front of the knee hurts.",
    video: "single leg step down exercise knee"
  },
  sidePlank: {
    name: "Side plank", tag: "Physio · core",
    poses: [{h:[24,72],n:[32,77],p:[64,90],k1:[84,98],f1:[104,106],k2:[84,96],f2:[104,103],e1:[32,104],w1:[48,104],e2:[46,82],w2:[62,86]}],
    scene: FLOOR,
    steps: [
      "Lie on your side, elbow directly under your shoulder, legs straight and stacked.",
      "Lift your hips so your body is a straight line from head to feet.",
      "Hold for the time your physio set, then switch sides."
    ],
    cues: ["Don't let your hips sag or pike up.", "Push the floor away with your forearm."],
    knee: "Too much on the knee? Bend both knees and do it from your knees.",
    video: "side plank form"
  },
  calfRaise: {
    name: "Seated calf raise", tag: "Physio · machine",
    poses: [calfA, P(calfA,{k1:[74,64],f1:[74,92],k2:[74,64],f2:[74,92]})], attach: [["pad","k1"]],
    scene: [["rect",30,72,32,6],["line",46,78,46,108],["rect",72,100,22,8],...FLOOR],
    steps: [
      "Sit in the seated calf machine. Balls of your feet go on the block, pad snug on your thighs.",
      "Lower your heels as far as is comfortable for a stretch.",
      "Push up onto your toes as high as you can. Pause 1 second.",
      "Lower slowly and repeat."
    ],
    cues: ["Full range: deep stretch, high squeeze.", "No bouncing."],
    knee: "Knee-friendly. The knee stays bent and still.",
    video: "seated calf raise machine form"
  },
  drinkingBird: {
    name: "Drinking Bird bench touch", tag: "Physio · balance",
    poses: [birdA, {h:[90,51],n:[82,54],p:[50,64],k1:[56,86],f1:[52,108],k2:[28,62],f2:[6,60],e1:[86,68],w1:[88,80],e2:[84,68],w2:[86,80]}],
    scene: [["rect",84,80,30,6],["line",88,86,88,108],["line",110,86,110,108],...FLOOR], timing: "slow",
    steps: [
      "Stand on your rehab leg, facing a bench about a body length away.",
      "Hinge at the hips. Tip your chest forward while your free leg goes straight back, like a see-saw.",
      "Touch the bench with your hands, then return to standing tall.",
      "Do the reps, then switch legs."
    ],
    cues: ["Soft bend in the standing knee.", "Hips stay square to the floor, don't open up.", "Slow and controlled."],
    knee: "If balance is shaky, touch a wall with one hand.",
    video: "single leg RDL bench touch balance"
  },
  plateRotation: {
    name: "Single-leg plate rotation", tag: "Physio · balance",
    poses: [plateA, P(plateA,{e1:[60,38],w1:[74,46],e2:[80,40],w2:[86,46]}), plateA, P(plateA,{e1:[40,40],w1:[34,46],e2:[60,38],w2:[46,46]})],
    attach: [["plate","mid",9,0]], scene: FLOOR,
    steps: [
      "Stand on your rehab leg holding a weight plate at chest height, arms out.",
      "Rotate your arms and shoulders to one side, then the other. Hips and standing knee stay still.",
      "One rep = both sides. Switch legs after the set."
    ],
    cues: ["Standing knee soft and pointing forward.", "Turn through the upper body only."],
    knee: "Keep the knee from twisting. Use a lighter plate if it wobbles inward.",
    video: "single leg balance plate rotation"
  },
  pulloverExt: {
    name: "Pullover to tricep extension", tag: "KB",
    poses: [lieA, P(lieA,{e1:[32,86],w1:[32,70],e2:[32,86],w2:[32,70]}), P(lieA,{e1:[32,82],w1:[20,90],e2:[32,82],w2:[20,90]}), P(lieA,{e1:[32,86],w1:[32,70],e2:[32,86],w2:[32,70]})],
    attach: [["kb","mid"]], scene: FLOOR,
    steps: [
      "Lie on your back, knees bent, holding the kettlebell by the horns over your chest.",
      "Pullover: with arms nearly straight, lower the bell back behind your head, then pull it back over your chest.",
      "Tricep extension: keep elbows pointing up and bend only at the elbows to lower the bell toward your forehead. Straighten again.",
      "Pullover + extension = 1 rep."
    ],
    cues: ["Ribs down, don't arch your back.", "Elbows stay narrow on the extension."],
    video: "kettlebell pullover to skull crusher"
  },
  uppercuts: {
    name: "Kettlebell uppercuts", tag: "KB",
    poses: [uppA, P(uppA,{e1:[62,32],w1:[76,20],e2:[76,34],w2:[80,22]}), uppA, P(uppA,{e1:[44,34],w1:[40,22],e2:[58,32],w2:[44,20]})],
    attach: [["kb","mid"]], scene: FLOOR,
    steps: [
      "Hold the kettlebell by the horns at chest height, feet a bit wider than hips.",
      "Drive the bell up and across to one side like an uppercut punch.",
      "Bring it back to your chest and punch to the other side.",
      "Each punch counts as 1 (10 each side)."
    ],
    cues: ["Rotate through your chest and shoulders.", "Brace your core, control it back down."],
    knee: "Keep BOTH feet planted. Don't pivot on your back foot, because the twist goes through the knee.",
    video: "kettlebell uppercut exercise"
  },
  curlHalo: {
    name: "Horn curl to halo", tag: "KB",
    poses: [curlA, P(curlA,{w1:[56,36],w2:[64,36]}), P(curlA,{e1:[46,30],w1:[50,12],e2:[64,24],w2:[56,10]}), P(curlA,{e1:[48,22],w1:[58,6],e2:[72,22],w2:[62,6]}), P(curlA,{e1:[56,24],w1:[64,10],e2:[74,30],w2:[70,12]}), P(curlA,{w1:[56,36],w2:[64,36]})],
    attach: [["kb","mid"]], scene: FLOOR,
    steps: [
      "Stand tall holding the kettlebell by the horns, arms down.",
      "Curl it up to your chest, elbows tucked.",
      "Halo: circle the bell around your head, close to your ears and behind your head. Return to the chest.",
      "Lower back down. Alternate halo direction each rep."
    ],
    cues: ["Squeeze glutes and abs so your lower back doesn't arch.", "Keep the bell close to your head on the halo."],
    video: "kettlebell horn curl halo"
  },
  ohMarch: {
    name: "Single-arm overhead march", tag: "KB",
    poses: [marchA, P(marchA,{k2:[67,70],f2:[67,92]}), marchA, P(marchA,{k1:[53,70],f1:[53,92]})],
    attach: [["kb","w2"]], scene: FLOOR,
    steps: [
      "Press the kettlebell overhead with one arm. Lock the arm out, bicep by your ear.",
      "March on the spot, lifting each knee to hip height slowly.",
      "Do 10 marches with the bell in one hand, then switch hands."
    ],
    cues: ["Ribs down, don't lean away from the bell.", "Wrist straight, bell resting on the back of the forearm."],
    knee: "Lifting the rehab leg is low load. If standing on that leg is uncomfortable, do a seated overhead hold instead.",
    video: "kettlebell overhead march"
  },
  pushups: {
    name: "Push-ups", tag: "KB circuit",
    poses: [pushA, {h:[26,95],n:[34,98],p:[64,102],k1:[83,104],f1:[102,106],k2:[83,104],f2:[102,106],e1:[46,90],w1:[34,108],e2:[46,90],w2:[34,108]}],
    scene: FLOOR,
    steps: [
      "Hands slightly wider than shoulders, body straight from head to heels.",
      "Lower until your chest is about a fist from the floor, elbows about 45° from your body.",
      "Push back up to straight arms."
    ],
    cues: ["Squeeze glutes so hips don't sag.", "Too hard? Hands on a bench."],
    knee: "Toes on the floor, not knees, so nothing presses on the knee. Use a cushion if you do go to your knees.",
    video: "push up proper form"
  },
  ballisticRow: {
    name: "Ballistic rows", tag: "KB",
    poses: [rowA, P(rowA,{e1:[60,54],w1:[64,70]})], attach: [["kb","w1"]], scene: FLOOR, timing: "fast",
    steps: [
      "Hinge forward with a flat back, knees soft, kettlebell hanging in one hand. Other hand on your thigh.",
      "Explosively row the bell up to your hip, driving the elbow back.",
      "Let it drop back down under control and immediately row again.",
      "Switch hands halfway (15 total, or split it how you like)."
    ],
    cues: ["Pull with your back and lats, not your bicep.", "Back stays flat. Only the arm moves."],
    knee: "The hinge stance puts some load through the knees. If it's sore, put your free hand and knee on a bench and row from there.",
    video: "kettlebell ballistic row"
  },
  pullups: {
    name: "Pull-ups", tag: "Bar",
    poses: [pullA, {front:true,h:[60,-2],n:[60,8],p:[60,44],k1:[57,64],f1:[56,82],k2:[63,64],f2:[64,82],e1:[38,14],w1:[46,4],e2:[82,14],w2:[74,4]}],
    scene: [["line",16,4,104,4,3]],
    steps: [
      "Grab the bar, hands just wider than shoulders, palms away (palms facing you = chin-ups, which are easier).",
      "Hang with arms straight, shoulders pulled down away from your ears.",
      "Pull until your chin is over the bar, then lower slowly.",
      "Only 1-3 reps? Loop a resistance band under your feet, or jump up and lower over 5 seconds (negatives)."
    ],
    cues: ["Lead with your chest, not your chin.", "No kicking or swinging."],
    knee: "Don't drop off the bar onto the rehab leg. Step down onto a box or lower yourself onto both feet.",
    video: "band assisted pull up"
  },
  zwift: {
    name: "Zwift ride", tag: "Cycling",
    poses: [bikeA, P(bikeA,{f1:[56,86],k1:[70,66],f2:[56,102],k2:[64,80]}), P(bikeA,{f1:[48,94],k1:[62,76],f2:[64,94],k2:[68,72]}), P(bikeA,{f1:[56,102],k1:[64,80],f2:[56,86],k2:[70,66]})],
    scene: BIKE, loop: true,
    steps: [
      "Easy to moderate spin. You should be able to talk in full sentences.",
      "Keep cadence around 80-90 rpm with light resistance rather than grinding big gears.",
      "Do the time your physio set and warm up for the first 5 minutes."
    ],
    cues: ["Seat height: knee slightly bent (about 25-30°) at the bottom of the stroke.", "Smooth circles, no stomping."],
    knee: "Ache at the front of the knee usually means the seat is too low. Seat too high makes your hips rock. Drop the resistance if the knee flares.",
    video: "bike fit saddle height knee"
  }
};
