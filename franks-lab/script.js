const canvas = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");
const clearBtn = document.getElementById("clearBtn");

const ctx = canvas.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const particlesArray = [];
let rabbitParticleArray = [];
const numberOfRabbitParticles = 1000;
let hue = 0;

let maomaomao = [
  [296, 39],
  [296, 38],
  [296, 38],
  [295, 37],
  [294, 37],
  [293, 36],
  [293, 35],
  [292, 34],
  [291, 34],
  [291, 34],
  [290, 33],
  [290, 32],
  [289, 32],
  [289, 31],
  [288, 31],
  [288, 30],
  [287, 30],
  [286, 29],
  [285, 28],
  [284, 27],
  [283, 27],
  [282, 26],
  [281, 26],
  [277, 24],
  [275, 24],
  [271, 24],
  [268, 23],
  [265, 23],
  [262, 23],
  [259, 23],
  [256, 23],
  [253, 23],
  [250, 23],
  [246, 23],
  [241, 24],
  [236, 24],
  [231, 27],
  [227, 27],
  [221, 30],
  [217, 30],
  [213, 32],
  [209, 34],
  [205, 36],
  [201, 37],
  [196, 40],
  [193, 41],
  [191, 42],
  [190, 43],
  [188, 44],
  [186, 45],
  [184, 46],
  [183, 47],
  [180, 49],
  [179, 50],
  [176, 51],
  [173, 53],
  [171, 55],
  [169, 57],
  [164, 59],
  [162, 60],
  [159, 62],
  [156, 64],
  [153, 67],
  [150, 69],
  [147, 70],
  [145, 73],
  [142, 74],
  [140, 76],
  [137, 77],
  [136, 79],
  [133, 80],
  [130, 82],
  [129, 84],
  [127, 85],
  [126, 86],
  [125, 87],
  [123, 88],
  [121, 90],
  [119, 92],
  [116, 94],
  [115, 94],
  [114, 96],
  [113, 97],
  [111, 98],
  [110, 100],
  [108, 102],
  [106, 104],
  [103, 107],
  [100, 109],
  [99, 111],
  [96, 114],
  [95, 116],
  [93, 117],
  [92, 119],
  [90, 121],
  [87, 124],
  [84, 127],
  [82, 130],
  [80, 133],
  [78, 135],
  [76, 137],
  [74, 138],
  [73, 141],
  [71, 144],
  [69, 146],
  [66, 150],
  [63, 153],
  [61, 157],
  [59, 160],
  [56, 164],
  [55, 165],
  [54, 167],
  [53, 168],
  [51, 170],
  [50, 174],
  [47, 176],
  [46, 180],
  [43, 184],
  [42, 188],
  [39, 192],
  [38, 195],
  [36, 200],
  [35, 202],
  [34, 204],
  [33, 206],
  [33, 208],
  [33, 210],
  [32, 214],
  [31, 216],
  [30, 220],
  [30, 222],
  [30, 225],
  [29, 227],
  [28, 230],
  [28, 232],
  [28, 235],
  [28, 238],
  [27, 244],
  [26, 247],
  [26, 251],
  [25, 254],
  [23, 260],
  [23, 264],
  [23, 267],
  [23, 270],
  [22, 274],
  [21, 276],
  [21, 279],
  [21, 281],
  [21, 284],
  [20, 287],
  [20, 290],
  [20, 296],
  [20, 300],
  [20, 302],
  [20, 305],
  [20, 307],
  [20, 312],
  [20, 314],
  [20, 317],
  [20, 320],
  [20, 322],
  [20, 325],
  [20, 328],
  [20, 330],
  [20, 334],
  [20, 336],
  [20, 340],
  [20, 343],
  [21, 346],
  [22, 349],
  [22, 352],
  [22, 354],
  [23, 357],
  [23, 358],
  [23, 360],
  [23, 361],
  [23, 363],
  [24, 364],
  [24, 366],
  [25, 367],
  [25, 370],
  [25, 370],
  [26, 374],
  [26, 374],
  [27, 376],
  [27, 377],
  [28, 379],
  [29, 380],
  [29, 382],
  [30, 384],
  [30, 386],
  [30, 389],
  [31, 390],
  [31, 391],
  [32, 391],
  [33, 393],
  [33, 394],
  [33, 394],
  [34, 394],
  [35, 396],
  [36, 397],
  [36, 398],
  [38, 399],
  [39, 399],
  [40, 400],
  [40, 400],
  [41, 401],
  [42, 401],
  [43, 402],
  [44, 404],
  [45, 404],
  [49, 406],
  [51, 407],
  [53, 408],
  [55, 410],
  [56, 410],
  [57, 410],
  [60, 411],
  [62, 412],
  [63, 413],
  [66, 413],
  [69, 414],
  [73, 414],
  [81, 414],
  [88, 414],
  [94, 414],
  [103, 414],
  [110, 414],
  [114, 414],
  [117, 414],
  [118, 414],
  [119, 414],
  [120, 414],
  [122, 414],
  [128, 414],
  [136, 414],
  [144, 412],
  [150, 411],
  [156, 410],
  [162, 409],
  [166, 407],
  [167, 407],
  [168, 407],
  [170, 406],
  [172, 404],
  [173, 404],
  [176, 404],
  [179, 401],
  [182, 400],
  [186, 399],
  [188, 397],
  [190, 396],
  [192, 394],
  [194, 393],
  [196, 390],
  [199, 389],
  [202, 387],
  [203, 386],
  [204, 384],
  [206, 384],
  [207, 380],
  [211, 378],
  [213, 376],
  [214, 374],
  [216, 373],
  [216, 372],
  [217, 371],
  [219, 370],
  [220, 369],
  [221, 367],
  [223, 365],
  [224, 364],
  [225, 363],
  [226, 362],
  [226, 360],
  [226, 360],
  [227, 359],
  [227, 358],
  [228, 357],
  [228, 357],
  [228, 356],
  [229, 356],
  [230, 355],
  [230, 354],
  [230, 354],
  [231, 354],
  [231, 353],
  [165, 275],
  [166, 275],
  [168, 275],
  [170, 275],
  [173, 275],
  [176, 275],
  [177, 275],
  [178, 275],
  [180, 275],
  [182, 275],
  [184, 274],
  [185, 274],
  [186, 274],
  [188, 274],
  [191, 274],
  [193, 274],
  [196, 274],
  [197, 274],
  [200, 274],
  [202, 274],
  [203, 274],
  [205, 274],
  [208, 274],
  [210, 274],
  [212, 274],
  [214, 274],
  [216, 274],
  [219, 274],
  [220, 274],
  [222, 274],
  [223, 274],
  [224, 275],
  [225, 276],
  [226, 276],
  [227, 277],
  [228, 277],
  [230, 277],
  [231, 279],
  [233, 280],
  [234, 281],
  [236, 283],
  [237, 283],
  [238, 284],
  [239, 284],
  [240, 285],
  [241, 286],
  [242, 287],
  [243, 288],
  [244, 289],
  [245, 289],
  [246, 290],
  [248, 292],
  [250, 294],
  [251, 295],
  [253, 296],
  [253, 297],
  [255, 300],
  [257, 302],
  [259, 304],
  [260, 306],
  [262, 308],
  [263, 310],
  [264, 311],
  [266, 314],
  [267, 317],
  [268, 323],
  [270, 329],
  [271, 335],
  [273, 345],
  [273, 353],
  [274, 358],
  [275, 367],
  [275, 373],
  [275, 377],
  [275, 381],
  [274, 384],
  [273, 388],
  [273, 393],
  [272, 396],
  [270, 400],
  [269, 405],
  [267, 409],
  [266, 412],
  [264, 420],
  [263, 424],
  [261, 428],
  [260, 433],
  [257, 437],
  [256, 442],
  [254, 445],
  [253, 449],
  [251, 452],
  [249, 456],
  [247, 460],
  [246, 462],
  [243, 465],
  [241, 470],
  [240, 473],
  [237, 476],
  [234, 480],
  [232, 484],
  [230, 487],
  [229, 490],
  [226, 494],
  [224, 497],
  [222, 500],
  [220, 503],
  [218, 505],
  [216, 507],
  [214, 511],
  [212, 514],
  [210, 516],
  [207, 520],
  [205, 523],
  [200, 527],
  [197, 530],
  [195, 532],
  [193, 534],
  [191, 535],
  [190, 537],
  [186, 539],
  [183, 540],
  [182, 542],
  [180, 544],
  [179, 545],
  [177, 545],
  [176, 546],
  [175, 547],
  [174, 547],
  [173, 548],
  [170, 549],
  [165, 550],
  [162, 551],
  [157, 554],
  [156, 554],
  [151, 556],
  [149, 557],
  [148, 557],
  [147, 557],
  [146, 557],
  [146, 558],
  [145, 558],
  [141, 560],
  [140, 560],
  [140, 560],
  [139, 560],
  [138, 560],
  [138, 560],
  [137, 560],
  [136, 560],
  [136, 560],
  [136, 561],
  [135, 562],
  [134, 562],
  [331, 157],
  [333, 155],
  [335, 153],
  [335, 152],
  [338, 149],
  [340, 147],
  [342, 145],
  [345, 143],
  [348, 140],
  [351, 137],
  [355, 135],
  [357, 133],
  [360, 130],
  [363, 128],
  [366, 127],
  [371, 124],
  [374, 122],
  [378, 120],
  [381, 118],
  [384, 117],
  [387, 116],
  [390, 114],
  [393, 113],
  [400, 110],
  [406, 107],
  [410, 107],
  [413, 104],
  [417, 103],
  [422, 101],
  [426, 100],
  [431, 98],
  [434, 97],
  [437, 97],
  [442, 95],
  [449, 94],
  [454, 93],
  [459, 92],
  [464, 91],
  [469, 91],
  [474, 90],
  [480, 89],
  [486, 89],
  [490, 88],
  [494, 88],
  [501, 87],
  [510, 87],
  [516, 87],
  [519, 87],
  [522, 87],
  [524, 88],
  [526, 88],
  [528, 89],
  [529, 89],
  [530, 89],
  [532, 90],
  [534, 90],
  [536, 91],
  [540, 92],
  [542, 93],
  [543, 94],
  [544, 94],
  [545, 94],
  [546, 94],
  [547, 95],
  [547, 96],
  [549, 96],
  [551, 97],
  [553, 98],
  [556, 100],
  [558, 100],
  [561, 102],
  [564, 104],
  [566, 106],
  [569, 108],
  [575, 113],
  [580, 117],
  [583, 121],
  [584, 124],
  [586, 127],
  [586, 130],
  [587, 134],
  [589, 137],
  [590, 140],
  [591, 144],
  [593, 147],
  [594, 151],
  [595, 154],
  [596, 157],
  [597, 160],
  [598, 164],
  [599, 167],
  [600, 170],
  [600, 173],
  [601, 177],
  [602, 180],
  [603, 185],
  [603, 189],
  [604, 194],
  [605, 199],
  [606, 204],
  [606, 208],
  [606, 213],
  [606, 217],
  [606, 224],
  [606, 229],
  [606, 242],
  [606, 250],
  [606, 257],
  [606, 264],
  [606, 270],
  [606, 275],
  [604, 280],
  [603, 284],
  [603, 287],
  [601, 290],
  [600, 294],
  [600, 297],
  [597, 304],
  [596, 308],
  [596, 310],
  [596, 317],
  [595, 320],
  [594, 324],
  [593, 327],
  [592, 331],
  [591, 334],
  [590, 337],
  [590, 340],
  [589, 342],
  [588, 344],
  [587, 345],
  [586, 347],
  [586, 349],
  [586, 350],
  [585, 351],
  [585, 352],
  [584, 353],
  [583, 354],
  [583, 354],
  [583, 355],
  [582, 357],
  [581, 359],
  [580, 360],
  [579, 361],
  [578, 364],
  [576, 365],
  [575, 367],
  [573, 368],
  [572, 370],
  [571, 371],
  [570, 372],
  [569, 373],
  [568, 374],
  [567, 374],
  [566, 375],
  [565, 376],
  [563, 377],
  [563, 378],
  [562, 379],
  [561, 379],
  [559, 380],
  [557, 382],
  [556, 383],
  [556, 384],
  [555, 384],
  [554, 384],
  [554, 385],
  [553, 386],
  [552, 387],
  [550, 389],
  [547, 390],
  [545, 392],
  [544, 393],
  [543, 394],
  [543, 394],
  [543, 394],
  [541, 395],
  [540, 395],
  [540, 396],
  [538, 397],
  [537, 397],
  [536, 398],
  [534, 399],
  [531, 400],
  [526, 400],
  [517, 402],
  [510, 403],
  [507, 404],
  [506, 404],
  [401, 260],
  [402, 259],
  [403, 258],
  [404, 258],
  [408, 257],
  [410, 257],
  [413, 257],
  [416, 257],
  [417, 256],
  [419, 256],
  [421, 256],
  [423, 256],
  [426, 256],
  [428, 256],
  [430, 256],
  [432, 256],
  [434, 256],
  [438, 256],
  [442, 256],
  [444, 256],
  [446, 256],
  [446, 256],
  [447, 256],
  [448, 256],
  [449, 257],
  [451, 258],
  [453, 259],
  [454, 260],
  [456, 262],
  [457, 264],
  [459, 264],
  [460, 265],
  [460, 266],
  [460, 267],
  [460, 268],
  [461, 269],
  [462, 270],
  [463, 273],
  [463, 276],
  [465, 280],
  [466, 282],
  [467, 287],
  [468, 290],
  [470, 295],
  [471, 300],
  [472, 304],
  [472, 307],
  [473, 311],
  [473, 317],
  [474, 321],
  [475, 325],
  [476, 330],
  [476, 335],
  [478, 338],
  [478, 340],
  [480, 344],
  [480, 346],
  [480, 348],
  [480, 350],
  [480, 353],
  [480, 356],
  [480, 360],
  [480, 364],
  [480, 367],
  [480, 370],
  [480, 373],
  [480, 376],
  [480, 379],
  [480, 381],
  [480, 385],
  [480, 388],
  [480, 392],
  [480, 395],
  [480, 400],
  [480, 403],
  [480, 405],
  [479, 408],
  [478, 410],
  [476, 415],
  [476, 418],
  [475, 420],
  [473, 424],
  [473, 426],
  [471, 429],
  [470, 431],
  [470, 434],
  [469, 436],
  [467, 439],
  [466, 442],
  [464, 445],
  [463, 448],
  [462, 450],
  [460, 452],
  [460, 454],
  [458, 457],
  [456, 459],
  [456, 460],
  [454, 462],
  [451, 466],
  [450, 468],
  [448, 470],
  [446, 473],
  [445, 474],
  [443, 477],
  [441, 479],
  [440, 481],
  [439, 482],
  [438, 484],
  [437, 484],
  [436, 486],
  [435, 487],
  [434, 488],
  [433, 490],
  [432, 491],
  [431, 493],
  [430, 494],
  [430, 494],
  [429, 495],
  [429, 496],
  [428, 497],
  [426, 498],
  [425, 500],
  [423, 502],
  [421, 504],
  [418, 507],
  [416, 510],
  [415, 511],
  [414, 512],
  [413, 514],
  [413, 514],
  [412, 514],
  [412, 515],
  [410, 516],
  [409, 517],
  [407, 519],
  [406, 520],
  [403, 523],
  [403, 523],
  [401, 524],
  [400, 525],
  [400, 526],
  [400, 527],
  [399, 527],
  [398, 530],
  [396, 531],
  [395, 533],
  [393, 534],
  [389, 538],
  [386, 540],
  [385, 542],
  [384, 543],
  [384, 544],
  [383, 544],
  [380, 547],
  [378, 547],
  [374, 548],
  [371, 550],
  [369, 553],
  [367, 554],
  [366, 554],
  [365, 554],
  [365, 555],
  [364, 555],
  [363, 556],
  [362, 557],
  [360, 557],
  [358, 558],
  [357, 559],
  [355, 559],
  [353, 560],
  [353, 560],
  [352, 560],
  [351, 560],
  [350, 561],
  [350, 561],
  [349, 562],
  [346, 562],
  [346, 563],
  [344, 563],
  [343, 563],
  [343, 563],
  [342, 563],
  [341, 563],
  [340, 563],
  [340, 563],
  [339, 563],
  [338, 563],
  [337, 564],
  [336, 564],
  [336, 565],
  [336, 566],
  [83, 273],
  [83, 274],
  [83, 274],
  [82, 275],
  [82, 276],
  [82, 277],
  [82, 277],
  [81, 278],
  [81, 279],
  [81, 280],
  [81, 280],
  [81, 281],
  [82, 282],
  [83, 283],
  [83, 284],
  [83, 284],
  [83, 285],
  [84, 285],
  [84, 286],
  [85, 286],
  [86, 286],
  [86, 286],
  [87, 287],
  [88, 287],
  [90, 287],
  [92, 287],
  [93, 287],
  [93, 287],
  [94, 287],
  [95, 286],
  [96, 285],
  [96, 284],
  [97, 284],
  [97, 284],
  [98, 283],
  [98, 282],
  [100, 281],
  [100, 280],
  [100, 280],
  [100, 279],
  [100, 278],
  [100, 277],
  [100, 276],
  [100, 275],
  [100, 274],
  [100, 274],
  [100, 273],
  [100, 272],
  [100, 271],
  [98, 270],
  [98, 270],
  [97, 270],
  [96, 269],
  [96, 268],
  [95, 267],
  [94, 267],
  [93, 267],
  [93, 267],
  [92, 267],
  [91, 267],
  [90, 267],
  [90, 267],
  [89, 268],
  [88, 268],
  [88, 269],
  [87, 269],
  [86, 269],
  [86, 270],
  [86, 270],
  [86, 271],
  [86, 272],
  [85, 272],
];

// https://www.pinterest.com/pin/400187116901580744/

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.font = "60px Lato";
canvas2.width = 626;
canvas2.height = 626;

// const myImage = new Image();
// myImage.src = "./rabbit.jpg";
// let mappedImage = [];
// myImage.addEventListener("load", function () {
//   ctx2.drawImage(myImage, 0, 0, canvas2.width, canvas2.height);
//   const pixels = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);

//   ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

//   for (let y = 0; y < canvas2.height; y++) {
//     let row = [];
//     for (let x = 0; x < canvas2.width; x++) {
//       const red = pixels.data[y * 4 * pixels.width + x * 4];
//       const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
//       const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
//       const brightness =
//         red == 239 ? 0 : calculateRelativeBrightness(red, green, blue);
//       const cell = [brightness];
//       row.push(cell);
//     }
//     mappedImage.push(row);
//   }
//   function calculateRelativeBrightness(red, green, blue) {
//     return (
//       Math.sqrt(
//         red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114
//       ) / 100
//     );
//   }

//   class RabbitParticle {
//     constructor() {
//       this.x = Math.random() * canvas2.width;
//       this.y = 0;
//       this.speed = 0;
//       this.velocity = Math.random() * 2.5;
//       this.size = Math.random() * 1.5 + 1;
//       this.position1 = Math.floor(this.y);
//       this.position2 = Math.floor(this.x);
//     }
//     update() {
//       this.position1 = Math.floor(this.y);
//       this.position2 = Math.floor(this.x);
//       if (
//         mappedImage[this.position1] &&
//         mappedImage[this.position1][this.position2]
//       ) {
//         this.speed = mappedImage[this.position1][this.position2][0];
//       }
//       let movement = 2.5 - this.speed + this.velocity;

//       this.y += movement;
//       if (this.y >= canvas2.height) {
//         this.y = 0;
//         this.x = Math.random() * canvas2.width;
//       }
//     }
//     draw() {
//       ctx2.beginPath();
//       ctx2.fillStyle = "rgba(200, 0, 0)";
//       ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//       ctx2.fill();
//     }
//   }

//   function animate() {
//     // ctx2.drawImage(myImage, 0, 0, canvas2.width, canvas2.height);
//     ctx2.globalAlpha = 0.05;
//     ctx2.fillStyle = "rgba(100, 0, 0, 0.1)";
//     ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
//     ctx2.globalAlpha = 0.2;
//     for (let i = 0; i < rabbitParticleArray.length; i++) {
//       rabbitParticleArray[i].update();
//       ctx.globalAlpha = rabbitParticleArray[i].speed;
//       rabbitParticleArray[i].draw();
//     }
//     requestAnimationFrame(animate);
//   }
//   function init() {
//     for (let i = 0; i < numberOfRabbitParticles; i++) {
//       rabbitParticleArray.push(new RabbitParticle());
//     }
//   }
//   init();
//   animate();
// });

const mouse = {
  x: undefined,
  y: undefined,
};

const runAnimation = {
  value: true,
};

class Particle {
  constructor(
    x = Math.random() * canvas.width,
    y = Math.random() * canvas.height,
    size = 5,
    speed = 3
  ) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * size + 1;
    this.speedX = Math.random() * speed - 1.5;
    this.speedY = Math.random() * speed - 1.5;
    this.color = `hsl(${hue}, 100%, 40%)`;
    this.textColor = `hsl(${hue}, 100%, 65%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
  text() {
    ctx.fillStyle = this.textColor;
    ctx.fillText("兔年快樂", canvas.width / 2 - 120, canvas.height / 2 + 30);
  }
}

class Rabbit extends Particle {
  constructor(
    x = Math.random() * canvas.width,
    y = Math.random() * canvas.height,
    size = 10
  ) {
    super();
    this.x = x;
    this.y = y;
    this.size = size === 25 ? 25 : Math.random() * size + 1;
  }
  draw() {
    ctx2.fillStyle = "rgba(255,255,255,0.15)";
    ctx2.beginPath();
    ctx2.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx2.fill();
  }
}

function init() {
  let size10 = [];
  let size15 = [];
  let size25 = [];
  for (let i = 0; i < 1000; i++) {
    particlesArray.push(new Particle());
  }
  for (let i = 0; i < maomaomao.length; i++) {
    size10.push(new Rabbit(maomaomao[i][0], maomaomao[i][1], 10));
    size15.push(new Rabbit(maomaomao[i][0], maomaomao[i][1], 15));
    size25.push(new Rabbit(maomaomao[i][0], maomaomao[i][1], 25));

    rabbitParticleArray.push(size10);
    rabbitParticleArray.push(size15);
    rabbitParticleArray.push(size25);
  }
}

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].draw();
    particlesArray[i].update();
    particlesArray[i].text();
    if (particlesArray[i].size < 0.3) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
}

function handleRabbit(size) {
  let i = 0;
  let intervalID;

  intervalID = setInterval(function () {
    rabbitParticleArray[size][i].draw();
    i++;
    if (i === rabbitParticleArray[size].length) {
      clearInterval(intervalID);
    }
  }, 2);
}

function drawRabbit() {
  handleRabbit(0);
  setTimeout(() => {
    handleRabbit(1);
  }, 4500);
  setTimeout(() => {
    handleRabbit(2);
  }, 9000);
}

window.addEventListener("resize", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas2.width = 626;
  canvas2.height = 626;
});

function animate() {
  if (runAnimation.value) {
    ctx.fillStyle = "rgba(100, 0, 0, 0.01)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue++;
    if (hue > 30) hue = 0;
    console.log("trigger");
    requestAnimationFrame(animate);
  }
}

init();
animate();
setParticle();

function handleMouseMove(event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 50; i++) {
    particlesArray.push(new Particle(mouse.x, mouse.y));
  }
}

let mousedown = false;
let mao = [];

// function handleCanvas2Move(event) {
//   if (mousedown) {
//     mao.push([event.offsetX, event.offsetY]);
//     ctx2.fillStyle = "rgba(0,0,0,1)";
//     ctx2.beginPath();
//     ctx2.arc(event.offsetX, event.offsetY, 10, 0, Math.PI * 2);
//     ctx2.fill();
//   }
// }

// canvas2.addEventListener("mousedown", function (event) {
//   console.log(event);
//   mousedown = true;
// });
// canvas2.addEventListener("mouseup", function () {
//   mousedown = false;
// });
// canvas2.addEventListener("mousemove", handleCanvas2Move);

clearBtn.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
});

var intervalID;

function setParticle() {
  let x = canvas.width - 200;
  let y = canvas.height / 3;
  let direction = "backward";
  intervalID = setInterval(function () {
    mouse.x = x;
    mouse.y = y;

    if (direction == "backward" && x > 200) {
      x -= 2;
    }
    if (x <= 200) {
      direction = "forward";
      y = (canvas.height * 2) / 3;
    }
    if (direction == "forward") {
      x += 2;
    }
    if (direction == "forward" && x > canvas.width - 200) {
      clearInterval(intervalID);
    }
    createRandomParticle();
    particlesArray.push(new Particle(mouse.x, mouse.y));
  }, 3);
}
function stopInterval() {
  clearInterval(intervalID);
}

window.addEventListener("mousedown", handleMouseMove);
canvas.addEventListener("click", function () {
  // runAnimation.value = !runAnimation.value;

  if (runAnimation.value) {
    window.addEventListener("mousedown", handleMouseMove);
    animate();
  } else {
    window.removeEventListener("mousedown", handleMouseMove);
  }
});

function createRandomParticle() {
  particlesArray.push(
    new Particle(
      (x = Math.random() * canvas.width),
      (y = Math.random() * canvas.height),
      (size = 10),
      (speed = 3)
    )
  );
}

setTimeout(drawRabbit, 7000);
