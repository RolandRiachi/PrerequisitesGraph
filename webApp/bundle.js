(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
global.bio_src = {
    "BIOL 101": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 111": {
        "prereqs": [
            "BIOL 206",
            "BIOL 215",
            "BIOL 240"
        ],
        "coreqs": [],
        "restricts": [
            "BIOL 101",
            "BIOL 115"
        ]
    },
    "BIOL 102": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 112": {
        "prereqs": [
            "BIOL 200",
            "BIOL 219"
        ],
        "coreqs": [],
        "restricts": [
            "BIOL 102",
            "BIOL 115"
        ]
    },
    "AEBI 122": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 115": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 200": {
        "prereqs": [
            "BIOL 201",
            "BIOL 202",
            "BIOL 205",
            "BIOL 300",
            "BIOL 301",
            "BIOL 303",
            "BIOL 313",
            "BIOL 314",
            "BIOL 319",
            "BIOL 370",
            "BIOL 377",
            "BIOL 395",
            "BIOL 413"
        ],
        "coreqs": [],
        "restricts": [
            "BIOL 219"
        ]
    },
    "CHEM 212": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 219": {
        "prereqs": [
            "BIOL 202",
            "BIOL 205",
            "BIOL 300",
            "BIOL 301",
            "BIOL 303",
            "BIOL 306",
            "BIOL 313",
            "BIOL 314",
            "BIOL 316",
            "BIOL 319",
            "BIOL 370",
            "BIOL 377",
            "BIOL 395",
            "BIOL 413",
            "BIOL 551"
        ],
        "coreqs": [
            "BIOL 205"
        ],
        "restricts": [
            "BIOL 200",
            "BIOL 201"
        ]
    },
    "BIOL 201": {
        "prereqs": [
            "BIOL 300",
            "BIOL 301",
            "BIOL 303",
            "BIOL 306",
            "BIOL 313",
            "BIOL 314",
            "BIOL 316",
            "BIOL 370",
            "BIOL 377",
            "BIOL 413",
            "BIOL 551"
        ],
        "coreqs": [
            "BIOL 205"
        ],
        "restricts": [
            "BIOL 219"
        ]
    },
    "ANAT 212": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOC 212": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 202": {
        "prereqs": [
            "BIOL 301",
            "BIOL 313",
            "BIOL 324",
            "BIOL 370",
            "BIOL 413",
            "BIOL 416",
            "BIOL 544",
            "BIOL 546",
            "BIOL 568",
            "BIOL 575"
        ],
        "coreqs": [
            "BIOL 303"
        ],
        "restricts": []
    },
    "CELL 204": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 205": {
        "prereqs": [
            "BIOL 304",
            "BIOL 307",
            "BIOL 335",
            "BIOL 342",
            "BIOL 350",
            "BIOL 385",
            "BIOL 413",
            "BIOL 418",
            "BIOL 427"
        ],
        "coreqs": [],
        "restricts": []
    },
    "PHYS 101": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "PHYS 131": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 206": {
        "prereqs": [
            "BIOL 301",
            "BIOL 331",
            "BIOL 334",
            "BIOL 432",
            "BIOL 466"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 210": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 215": {
        "prereqs": [
            "BIOL 304",
            "BIOL 305",
            "BIOL 307",
            "BIOL 308",
            "BIOL 310",
            "BIOL 331",
            "BIOL 334",
            "BIOL 342",
            "BIOL 352",
            "BIOL 377",
            "BIOL 413",
            "BIOL 418",
            "BIOL 429",
            "BIOL 432",
            "BIOL 441",
            "BIOL 465",
            "BIOL 553"
        ],
        "coreqs": [],
        "restricts": []
    },
    "ENVR 202": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 222": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 240": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "PLNT 358": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 300": {
        "prereqs": [
            "BIOL 303",
            "BIOL 416",
            "BIOL 520",
            "BIOL 524",
            "BIOL 544",
            "BIOL 546",
            "BIOL 568",
            "BIOL 575",
            "BIOL 588"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 301": {
        "prereqs": [
            "BIOL 466",
            "BIOL 509",
            "BIOL 592"
        ],
        "coreqs": [],
        "restricts": []
    },
    "PHYS 102": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "PHYS 142": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOC 300": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 303": {
        "prereqs": [
            "BIOL 416",
            "BIOL 520",
            "BIOL 524",
            "BIOL 532",
            "BIOL 544",
            "BIOL 546",
            "BIOL 569"
        ],
        "coreqs": [],
        "restricts": []
    },
    "ANAT 381": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 304": {
        "prereqs": [
            "BIOL 436",
            "BIOL 509",
            "BIOL 569",
            "BIOL 573",
            "BIOL 594"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 305": {
        "prereqs": [
            "BIOL 427",
            "BIOL 428",
            "BIOL 463"
        ],
        "coreqs": [],
        "restricts": []
    },
    "ENVR 200": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 306": {
        "prereqs": [
            "BIOL 320",
            "BIOL 389",
            "BIOL 514",
            "BIOL 530",
            "BIOL 532",
            "BIOL 580",
            "BIOL 588"
        ],
        "coreqs": [
            "BIOL 507"
        ],
        "restricts": []
    },
    "NSCI 200": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 307": {
        "prereqs": [],
        "coreqs": [
            "BIOL 507"
        ],
        "restricts": []
    },
    "BIOL 308": {
        "prereqs": [
            "BIOL 434",
            "BIOL 509",
            "BIOL 510",
            "BIOL 540",
            "BIOL 594"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 309": {
        "prereqs": [
            "BIOL 434"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 310": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 112": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 313": {
        "prereqs": [
            "BIOL 518"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 314": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 316": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 319": {
        "prereqs": [
            "BIOL 551"
        ],
        "coreqs": [],
        "restricts": []
    },
    "PHYS 230": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "PHYS 232": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "PHYS 253": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "PHYS 319": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 320": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "NSCI 201": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 324": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 331": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 334": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 335": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 342": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 350": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "ENTO 330": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "ENTO 350": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 352": {
        "prereqs": [
            "BIOL 573"
        ],
        "coreqs": [],
        "restricts": []
    },
    "EPSC 233": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 370": {
        "prereqs": [
            "BIOL 568"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 373": {
        "prereqs": [
            "BIOL 596",
            "BIOL 597",
            "BIOL 598"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 377": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 385": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 389": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "NEUR 310": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "PHGY 311": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 395": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "COMP 250": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 396": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 413": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 416": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 418": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 427": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 327": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "BIOL 427"
        ]
    },
    "BIOL 428": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 451": {
        "prereqs": [],
        "coreqs": [
            "BIOL 428",
            "BIOL 429"
        ],
        "restricts": []
    },
    "NRSC 451": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "ANTH 451": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "GEOG 451": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 328": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "BIOL 428"
        ]
    },
    "BIOL 429": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 329": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "BIOL 429"
        ]
    },
    "BIOL 432": {
        "prereqs": [
            "BIOL 515"
        ],
        "coreqs": [],
        "restricts": []
    },
    "ENVB 432": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 434": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 436": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 441": {
        "prereqs": [
            "BIOL 515"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 463": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "WILD 350": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 465": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 466": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 468": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 469": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 479": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 499": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 507": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 509": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 510": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "GEOG 350": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 514": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "PSYC 514": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 515": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 518": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 520": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 524": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 530": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 532": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 540": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "ENVR 540": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 544": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 546": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 551": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "CHEM 115": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "CHEM 120": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 133": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 141": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "COMP 204": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 553": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "HISP 218": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 203": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "ENVR 451": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "HIST 510": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "GEOG 404": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 568": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 569": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 570": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 573": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 575": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 580": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 588": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 592": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BINF 511": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 594": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 596": {
        "prereqs": [
            "BIOL 597"
        ],
        "coreqs": [],
        "restricts": [
            "BIOL 598"
        ]
    },
    "BIOL 597": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "BIOL 598"
        ]
    },
    "BIOL 598": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
global.bio_tar = {
    "BIOL 101": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "BIOL 111"
        ]
    },
    "BIOL 102": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "BIOL 112"
        ]
    },
    "BIOL 111": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 112": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "AEBI 122"
        ]
    },
    "BIOL 115": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "BIOL 111",
            "BIOL 112"
        ]
    },
    "BIOL 200": {
        "prereqs": [
            "BIOL 112"
        ],
        "coreqs": [
            "CHEM 212"
        ],
        "restricts": [
            "BIOL 219"
        ]
    },
    "BIOL 201": {
        "prereqs": [
            "BIOL 200"
        ],
        "coreqs": [],
        "restricts": [
            "BIOL 219",
            "ANAT 212",
            "BIOC 212"
        ]
    },
    "BIOL 202": {
        "prereqs": [
            "BIOL 200",
            "BIOL 219"
        ],
        "coreqs": [],
        "restricts": [
            "CELL 204"
        ]
    },
    "BIOL 205": {
        "prereqs": [
            "BIOL 200",
            "BIOL 219",
            "PHYS 101",
            "PHYS 131"
        ],
        "coreqs": [
            "BIOL 201",
            "BIOL 219",
            "ANAT 212",
            "BIOC 212"
        ],
        "restricts": []
    },
    "BIOL 206": {
        "prereqs": [
            "BIOL 111"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 210": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 215": {
        "prereqs": [
            "BIOL 111"
        ],
        "coreqs": [],
        "restricts": [
            "ENVR 202"
        ]
    },
    "BIOL 219": {
        "prereqs": [
            "BIOL 112"
        ],
        "coreqs": [
            "MATH 222"
        ],
        "restricts": [
            "ANAT 212",
            "BIOC 212",
            "BIOL 200",
            "BIOL 201"
        ]
    },
    "BIOL 240": {
        "prereqs": [
            "BIOL 111"
        ],
        "coreqs": [],
        "restricts": [
            "PLNT 358"
        ]
    },
    "BIOL 300": {
        "prereqs": [
            "BIOL 200",
            "BIOL 201",
            "ANAT 212",
            "BIOC 212",
            "BIOL 219"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 301": {
        "prereqs": [
            "PHYS 102",
            "PHYS 142",
            "BIOL 200",
            "BIOL 201",
            "ANAT 212",
            "BIOC 212",
            "BIOL 219",
            "BIOL 202",
            "BIOL 206"
        ],
        "coreqs": [],
        "restricts": [
            "BIOC 300"
        ]
    },
    "BIOL 303": {
        "prereqs": [
            "BIOL 200",
            "BIOL 201",
            "ANAT 212",
            "BIOC 212",
            "BIOL 219",
            "BIOL 300"
        ],
        "coreqs": [
            "BIOL 202"
        ],
        "restricts": [
            "ANAT 381"
        ]
    },
    "BIOL 304": {
        "prereqs": [
            "BIOL 205",
            "BIOL 215",
            "ENVR 202"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 305": {
        "prereqs": [
            "BIOL 215",
            "ENVR 200",
            "ENVR 202"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 306": {
        "prereqs": [
            "PHYS 102",
            "PHYS 142",
            "BIOL 201",
            "ANAT 212",
            "BIOC 212",
            "BIOL 219",
            "NSCI 200"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 307": {
        "prereqs": [
            "BIOL 205",
            "BIOL 215"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 308": {
        "prereqs": [
            "BIOL 215",
            "ENVR 200",
            "ENVR 202"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 309": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 310": {
        "prereqs": [
            "BIOL 215",
            "ENVR 200",
            "ENVR 202",
            "MATH 112"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 313": {
        "prereqs": [
            "BIOL 200",
            "BIOL 201",
            "ANAT 212",
            "BIOC 212",
            "BIOL 219",
            "BIOL 202"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 314": {
        "prereqs": [
            "BIOL 200",
            "BIOL 201",
            "ANAT 212",
            "BIOC 212",
            "BIOL 219"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 316": {
        "prereqs": [
            "BIOL 201",
            "ANAT 212",
            "BIOC 212",
            "BIOL 219"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 319": {
        "prereqs": [
            "BIOL 200",
            "BIOL 219",
            "MATH 222",
            "PHYS 230",
            "PHYS 232",
            "PHYS 253"
        ],
        "coreqs": [],
        "restricts": [
            "PHYS 319"
        ]
    },
    "BIOL 320": {
        "prereqs": [
            "NSCI 201",
            "BIOL 306"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 324": {
        "prereqs": [
            "BIOL 202"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 331": {
        "prereqs": [
            "BIOL 206",
            "BIOL 215"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 334": {
        "prereqs": [
            "BIOL 206",
            "BIOL 215",
            "ENVR 200",
            "ENVR 202"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 335": {
        "prereqs": [
            "BIOL 205"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 342": {
        "prereqs": [
            "BIOL 205",
            "BIOL 215",
            "ENVR 200",
            "ENVR 202"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 350": {
        "prereqs": [
            "BIOL 205"
        ],
        "coreqs": [],
        "restricts": [
            "ENTO 330",
            "ENTO 350"
        ]
    },
    "BIOL 352": {
        "prereqs": [
            "BIOL 215",
            "ENVR 202",
            "EPSC 233"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 370": {
        "prereqs": [
            "BIOL 200",
            "BIOL 201",
            "ANAT 212",
            "BIOC 212",
            "BIOL 219",
            "BIOL 202"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 373": {
        "prereqs": [
            "MATH 112"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 377": {
        "prereqs": [
            "BIOL 200",
            "BIOL 201",
            "ANAT 212",
            "BIOC 212",
            "BIOL 215",
            "BIOL 219"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 385": {
        "prereqs": [
            "BIOL 205"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 389": {
        "prereqs": [
            "BIOL 306",
            "NEUR 310",
            "NSCI 200",
            "PHGY 311"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 395": {
        "prereqs": [
            "BIOL 200",
            "BIOL 219",
            "CHEM 212",
            "COMP 250",
            "MATH 222"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 396": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 413": {
        "prereqs": [
            "BIOL 200",
            "BIOL 201",
            "ANAT 212",
            "BIOC 212",
            "BIOL 219",
            "BIOL 202",
            "BIOL 205",
            "BIOL 215"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 416": {
        "prereqs": [
            "BIOL 202",
            "BIOL 300",
            "BIOL 303"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 418": {
        "prereqs": [
            "BIOL 205",
            "BIOL 215",
            "ENVR 200",
            "ENVR 202"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 427": {
        "prereqs": [
            "BIOL 205",
            "BIOL 305"
        ],
        "coreqs": [],
        "restricts": [
            "BIOL 327"
        ]
    },
    "BIOL 428": {
        "prereqs": [
            "BIOL 305"
        ],
        "coreqs": [
            "BIOL 451",
            "NRSC 451",
            "ANTH 451",
            "GEOG 451"
        ],
        "restricts": [
            "BIOL 328"
        ]
    },
    "BIOL 429": {
        "prereqs": [
            "BIOL 215"
        ],
        "coreqs": [
            "BIOL 451",
            "NRSC 451",
            "ANTH 451",
            "GEOG 451"
        ],
        "restricts": [
            "BIOL 329"
        ]
    },
    "BIOL 432": {
        "prereqs": [
            "BIOL 206",
            "BIOL 215"
        ],
        "coreqs": [],
        "restricts": [
            "ENVB 432"
        ]
    },
    "BIOL 434": {
        "prereqs": [
            "BIOL 308",
            "BIOL 309"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 436": {
        "prereqs": [
            "BIOL 304"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 441": {
        "prereqs": [
            "BIOL 215",
            "ENVR 200",
            "ENVR 202"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 451": {
        "prereqs": [],
        "coreqs": [
            "ANTH 451",
            "GEOG 451"
        ],
        "restricts": [
            "NRSC 451"
        ]
    },
    "BIOL 463": {
        "prereqs": [
            "BIOL 305",
            "WILD 350"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 465": {
        "prereqs": [
            "BIOL 215",
            "ENVR 200",
            "ENVR 202"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 466": {
        "prereqs": [
            "BIOL 206",
            "BIOL 301"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 468": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 469": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 479": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 499": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 507": {
        "prereqs": [],
        "coreqs": [
            "BIOL 306",
            "NEUR 310",
            "NSCI 200",
            "NSCI 201",
            "PHGY 311",
            "BIOL 307"
        ],
        "restricts": []
    },
    "BIOL 509": {
        "prereqs": [
            "BIOL 301",
            "BIOL 304",
            "BIOL 308"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 510": {
        "prereqs": [
            "BIOL 308",
            "GEOG 350"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 514": {
        "prereqs": [
            "BIOL 306",
            "NEUR 310",
            "NSCI 201",
            "PHGY 311"
        ],
        "coreqs": [],
        "restricts": [
            "PSYC 514"
        ]
    },
    "BIOL 515": {
        "prereqs": [
            "BIOL 432",
            "BIOL 441"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 518": {
        "prereqs": [
            "BIOL 313"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 520": {
        "prereqs": [
            "BIOL 300",
            "BIOL 303"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 524": {
        "prereqs": [
            "BIOL 300",
            "BIOL 303"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 530": {
        "prereqs": [
            "BIOL 306",
            "NSCI 200",
            "PHGY 311"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 532": {
        "prereqs": [
            "BIOL 303",
            "BIOL 306"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 540": {
        "prereqs": [
            "BIOL 308"
        ],
        "coreqs": [],
        "restricts": [
            "ENVR 540"
        ]
    },
    "BIOL 544": {
        "prereqs": [
            "BIOL 202",
            "BIOL 300",
            "BIOL 303"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 546": {
        "prereqs": [
            "BIOL 202",
            "BIOL 300",
            "BIOL 303"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 551": {
        "prereqs": [
            "CHEM 115",
            "CHEM 120",
            "MATH 133",
            "MATH 141",
            "PHYS 142",
            "BIOL 201",
            "BIOL 219",
            "ANAT 212",
            "BIOC 212",
            "COMP 204",
            "PHYS 230",
            "BIOL 319",
            "PHYS 319"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 553": {
        "prereqs": [
            "HISP 218",
            "MATH 203",
            "BIOL 215",
            "ENVR 200",
            "ENVR 202"
        ],
        "coreqs": [
            "ENVR 451",
            "HIST 510",
            "GEOG 404"
        ],
        "restricts": []
    },
    "BIOL 568": {
        "prereqs": [
            "BIOL 202",
            "BIOL 300",
            "BIOL 370"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 569": {
        "prereqs": [
            "BIOL 303",
            "BIOL 304"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 570": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 573": {
        "prereqs": [
            "BIOL 304",
            "BIOL 352"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 575": {
        "prereqs": [
            "BIOL 202",
            "BIOL 300"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 580": {
        "prereqs": [
            "BIOL 306",
            "NSCI 200",
            "NSCI 201",
            "PHGY 311"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 588": {
        "prereqs": [
            "BIOL 300",
            "BIOL 306"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 592": {
        "prereqs": [
            "BIOL 301"
        ],
        "coreqs": [],
        "restricts": [
            "BINF 511"
        ]
    },
    "BIOL 594": {
        "prereqs": [
            "BIOL 304",
            "BIOL 308"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 596": {
        "prereqs": [
            "BIOL 373"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 597": {
        "prereqs": [
            "BIOL 373",
            "BIOL 596"
        ],
        "coreqs": [],
        "restricts": []
    },
    "BIOL 598": {
        "prereqs": [
            "BIOL 373"
        ],
        "coreqs": [],
        "restricts": [
            "BIOL 596",
            "BIOL 597"
        ]
    }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],3:[function(require,module,exports){
(function (global){
require('./math_tar.js')
require('./math_src.js')
require('./bio_tar.js')
require('./bio_src.js')

global.departments = {
    'MATH': [math_tar, math_src],
    'BIOL': [bio_tar, bio_src]
}

global.courses = [];
for ( var d in departments ){
  for ( course in departments[d][1] ) {
    if ( !courses.includes(course) ) courses.push(course);
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./bio_src.js":1,"./bio_tar.js":2,"./math_src.js":4,"./math_tar.js":5}],4:[function(require,module,exports){
(function (global){
global.math_src = {
    "MATH 111": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 112": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 111"
        ]
    },
    "MATH 122": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 122",
            "MATH 125"
        ]
    },
    "MATH 130": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 122"
        ]
    },
    "MATH 131": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 122"
        ]
    },
    "MATH 139": {
        "prereqs": [
            "MATH 141"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 122",
            "MATH 122",
            "MATH 122",
            "MATH 140"
        ]
    },
    "MATH 140": {
        "prereqs": [
            "MATH 141"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 122",
            "MATH 122",
            "MATH 122"
        ]
    },
    "MATH 150": {
        "prereqs": [
            "MATH 141",
            "MATH 151"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 122",
            "MATH 122",
            "MATH 222"
        ]
    },
    "MATH 141": {
        "prereqs": [
            "MATH 222",
            "MATH 242",
            "MATH 254",
            "MATH 262",
            "MATH 323",
            "MATH 329"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 122",
            "MATH 122",
            "MATH 125"
        ]
    },
    "MATH 151": {
        "prereqs": [
            "MATH 264"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 122",
            "MATH 222",
            "MATH 262"
        ]
    },
    "MATH 123": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 223": {
        "prereqs": [
            "MATH 319",
            "MATH 320",
            "MATH 326",
            "MATH 327",
            "MATH 350",
            "MATH 376",
            "MATH 407",
            "MATH 417",
            "MATH 423",
            "MATH 517"
        ],
        "coreqs": [
            "MATH 340"
        ],
        "restricts": [
            "MATH 123"
        ]
    },
    "MATH 133": {
        "prereqs": [
            "MATH 222",
            "MATH 223",
            "MATH 235",
            "MATH 247",
            "MATH 248",
            "MATH 262",
            "MATH 314",
            "MATH 348",
            "MATH 398"
        ],
        "coreqs": [
            "MATH 222",
            "MATH 240",
            "MATH 315"
        ],
        "restricts": [
            "MATH 123",
            "MATH 123",
            "MATH 134"
        ]
    },
    "MATH 125": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 221": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 133"
        ]
    },
    "MATH 134": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 120": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 140"
        ]
    },
    "MATH 121": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 141"
        ]
    },
    "MATH 180": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 203": {
        "prereqs": [
            "MATH 204"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 204": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 222": {
        "prereqs": [
            "MATH 248",
            "MATH 314",
            "MATH 315",
            "MATH 325",
            "MATH 326",
            "MATH 356",
            "MATH 376",
            "MATH 490"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 262"
        ]
    },
    "MATH 227": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 222"
        ]
    },
    "MATH 236": {
        "prereqs": [
            "MATH 319",
            "MATH 320",
            "MATH 327",
            "MATH 335",
            "MATH 407",
            "MATH 417",
            "MATH 423",
            "MATH 517"
        ],
        "coreqs": [
            "MATH 340"
        ],
        "restricts": [
            "MATH 223"
        ]
    },
    "MATH 247": {
        "prereqs": [
            "MATH 320",
            "MATH 327",
            "MATH 397",
            "MATH 456",
            "MATH 458",
            "MATH 475",
            "MATH 533",
            "MATH 547",
            "MATH 578"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 223",
            "MATH 251"
        ]
    },
    "MATH 251": {
        "prereqs": [
            "MATH 327",
            "MATH 350",
            "MATH 397",
            "MATH 456",
            "MATH 458",
            "MATH 475",
            "MATH 488",
            "MATH 533",
            "MATH 547",
            "MATH 578",
            "MATH 590"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 223"
        ]
    },
    "MATH 228": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 235": {
        "prereqs": [
            "MATH 236",
            "MATH 251",
            "MATH 318",
            "MATH 335",
            "MATH 340",
            "MATH 346",
            "MATH 350",
            "MATH 456"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 240"
        ]
    },
    "MATH 240": {
        "prereqs": [
            "MATH 318",
            "MATH 340",
            "MATH 350"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 242": {
        "prereqs": [
            "MATH 243",
            "MATH 255",
            "MATH 318",
            "MATH 340"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 254"
        ]
    },
    "MATH 254": {
        "prereqs": [
            "MATH 243",
            "MATH 255"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 242"
        ]
    },
    "MATH 243": {
        "prereqs": [
            "MATH 316",
            "MATH 356",
            "MATH 587"
        ],
        "coreqs": [
            "MATH 387"
        ],
        "restricts": []
    },
    "MATH 248": {
        "prereqs": [
            "MATH 249",
            "MATH 320",
            "MATH 458",
            "MATH 466",
            "MATH 475"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 314"
        ]
    },
    "MATH 249": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 316",
            "MATH 466"
        ]
    },
    "MATH 255": {
        "prereqs": [
            "MATH 356",
            "MATH 454",
            "MATH 488",
            "MATH 587",
            "MATH 590"
        ],
        "coreqs": [
            "MATH 357",
            "MATH 387"
        ],
        "restricts": []
    },
    "MATH 262": {
        "prereqs": [
            "MATH 264"
        ],
        "coreqs": [
            "MATH 263"
        ],
        "restricts": []
    },
    "MATH 152": {
        "prereqs": [
            "MATH 264"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 262"
        ]
    },
    "MATH 263": {
        "prereqs": [
            "MATH 270",
            "MATH 271",
            "MATH 317",
            "MATH 363",
            "MATH 478"
        ],
        "coreqs": [
            "MATH 264"
        ],
        "restricts": []
    },
    "MATH 315": {
        "prereqs": [
            "MATH 317",
            "MATH 319",
            "MATH 387",
            "MATH 407",
            "MATH 437",
            "MATH 478",
            "MATH 555"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 263"
        ]
    },
    "MATH 325": {
        "prereqs": [
            "MATH 317",
            "MATH 387",
            "MATH 437",
            "MATH 475",
            "MATH 478",
            "MATH 537",
            "MATH 574"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 263",
            "MATH 315"
        ]
    },
    "MATH 264": {
        "prereqs": [
            "MATH 271",
            "MATH 363",
            "MATH 381"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 319": {
        "prereqs": [
            "MATH 555"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 264"
        ]
    },
    "MATH 475": {
        "prereqs": [
            "MATH 579",
            "MATH 580"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 264"
        ]
    },
    "MATH 270": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 271": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 314": {
        "prereqs": [
            "MATH 316",
            "MATH 319",
            "MATH 320",
            "MATH 407",
            "MATH 417",
            "MATH 458",
            "MATH 517"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 316": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 466"
        ]
    },
    "MATH 366": {
        "prereqs": [
            "MATH 566",
            "MATH 595"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 316",
            "MATH 466"
        ]
    },
    "MATH 381": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 316",
            "MATH 466"
        ]
    },
    "MATH 466": {
        "prereqs": [
            "MATH 566",
            "MATH 595"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 316"
        ]
    },
    "MATH 317": {
        "prereqs": [
            "MATH 478"
        ],
        "coreqs": [],
        "restricts": []
    },
    "COMP 202": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "COMP 350": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 318": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 320": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 323": {
        "prereqs": [
            "MATH 324",
            "MATH 407",
            "MATH 427",
            "MATH 437",
            "MATH 447",
            "MATH 490",
            "MATH 540",
            "MATH 541"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 356"
        ]
    },
    "MATH 324": {
        "prereqs": [
            "MATH 423",
            "MATH 427",
            "MATH 524",
            "MATH 525",
            "MATH 541",
            "MATH 545"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 357"
        ]
    },
    "MATH 357": {
        "prereqs": [
            "MATH 533",
            "MATH 545",
            "MATH 556"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 324"
        ]
    },
    "MATH 326": {
        "prereqs": [],
        "coreqs": [
            "MATH 437"
        ],
        "restricts": [
            "MATH 376"
        ]
    },
    "MATH 376": {
        "prereqs": [
            "MATH 537"
        ],
        "coreqs": [
            "MATH 437"
        ],
        "restricts": [
            "MATH 326"
        ]
    },
    "MATH 327": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 329": {
        "prereqs": [
            "MATH 540"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 335": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 338": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 340": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 350"
        ]
    },
    "MATH 343": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 340",
            "MATH 350"
        ]
    },
    "MATH 350": {
        "prereqs": [
            "MATH 552",
            "MATH 553"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 340"
        ]
    },
    "MATH 346": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 377"
        ]
    },
    "MATH 377": {
        "prereqs": [
            "MATH 596"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 346"
        ]
    },
    "MATH 348": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 398"
        ]
    },
    "MATH 398": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 348"
        ]
    },
    "MATH 352": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 356": {
        "prereqs": [
            "MATH 357",
            "MATH 437",
            "MATH 537",
            "MATH 547",
            "MATH 587",
            "MATH 598"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 363": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 387": {
        "prereqs": [
            "MATH 478",
            "MATH 578",
            "MATH 579"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 396": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 397": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 407": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 410": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 417": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 517"
        ]
    },
    "MATH 487": {
        "prereqs": [
            "MATH 553"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 417",
            "MATH 517"
        ]
    },
    "MATH 517": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 417"
        ]
    },
    "MATH 420": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 423": {
        "prereqs": [
            "MATH 523"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 533"
        ]
    },
    "MATH 533": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 423"
        ]
    },
    "MATH 427": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 430": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 490"
        ]
    },
    "MATH 330": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 430",
            "MATH 490"
        ]
    },
    "MATH 490": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 430"
        ]
    },
    "MATH 437": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 537"
        ]
    },
    "MATH 447": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 547"
        ]
    },
    "MATH 547": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 447"
        ]
    },
    "MATH 454": {
        "prereqs": [
            "MATH 553",
            "MATH 564",
            "MATH 574",
            "MATH 576",
            "MATH 595",
            "MATH 599"
        ],
        "coreqs": [
            "MATH 466"
        ],
        "restricts": []
    },
    "MATH 354": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 454"
        ]
    },
    "MATH 455": {
        "prereqs": [
            "MATH 564",
            "MATH 567",
            "MATH 581"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 355": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 455"
        ]
    },
    "MATH 456": {
        "prereqs": [
            "MATH 583",
            "MATH 596"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 370": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 456"
        ]
    },
    "MATH 457": {
        "prereqs": [
            "MATH 570"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 371": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 457"
        ]
    },
    "MATH 458": {
        "prereqs": [
            "MATH 599"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 380": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 458"
        ]
    },
    "MATH 470": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 375": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 475"
        ]
    },
    "MATH 478": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MECH 309": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 480": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 488": {
        "prereqs": [
            "MATH 591",
            "MATH 592"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 590"
        ]
    },
    "MATH 590": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 488"
        ]
    },
    "MATH 523": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 426": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 523"
        ]
    },
    "MATH 524": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 424": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 524"
        ]
    },
    "MATH 525": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 425": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 525"
        ]
    },
    "MATH 537": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 540": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 541": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 545": {
        "prereqs": [
            "MATH 681"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 550": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 552": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "COMP 362": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "COMP 552": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 553": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "COMP 553": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 555": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 556": {
        "prereqs": [
            "MATH 557",
            "MATH 680",
            "MATH 686"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 557": {
        "prereqs": [
            "MATH 680",
            "MATH 686"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 560": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 564": {
        "prereqs": [
            "MATH 565",
            "MATH 566",
            "MATH 635"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 565": {
        "prereqs": [
            "MATH 635"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 566": {
        "prereqs": [
            "MATH 635"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 567": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 570": {
        "prereqs": [
            "MATH 571"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 571": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 574": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 576": {
        "prereqs": [
            "MATH 577",
            "MATH 582",
            "MATH 583"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 577": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 578": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 579": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 580": {
        "prereqs": [
            "MATH 581"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 581": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 582": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 583": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 587": {
        "prereqs": [
            "MATH 589"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 589": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 591": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 592": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 594": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 595": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 596": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 597": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 598": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 599": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 600": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 640"
        ]
    },
    "MATH 640": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 600"
        ]
    },
    "MATH 601": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 602": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 604": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 605": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 635": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 638": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 641": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 666": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 667": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 671": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 680": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 681": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 686": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 687": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 689": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 690": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 691": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 693": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 695": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 697": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 698": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 699": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 700": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 701": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 704": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 706": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 707": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 720": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 721": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 722": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 723": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 726": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 727": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 740": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 741": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 742": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 743": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 744": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 756": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 758": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 761": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 762": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 763": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 764": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 765": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 782": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 783": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 784": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
(function (global){
global.math_tar = {
    "MATH 111": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 112"
        ]
    },
    "MATH 112": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 122": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 130",
            "MATH 131",
            "MATH 139",
            "MATH 140",
            "MATH 150",
            "MATH 139",
            "MATH 140",
            "MATH 141",
            "MATH 150",
            "MATH 151",
            "MATH 122",
            "MATH 140",
            "MATH 139",
            "MATH 141"
        ]
    },
    "MATH 123": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 223",
            "MATH 133",
            "MATH 133"
        ]
    },
    "MATH 125": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 122",
            "MATH 141"
        ]
    },
    "MATH 133": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 221"
        ]
    },
    "MATH 134": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 133"
        ]
    },
    "MATH 139": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 140": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 120",
            "MATH 139"
        ]
    },
    "MATH 141": {
        "prereqs": [
            "MATH 139",
            "MATH 140",
            "MATH 150"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 121"
        ]
    },
    "MATH 150": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 151": {
        "prereqs": [
            "MATH 150"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 180": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 203": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 204": {
        "prereqs": [
            "MATH 203"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 222": {
        "prereqs": [
            "MATH 141",
            "MATH 133"
        ],
        "coreqs": [
            "MATH 133"
        ],
        "restricts": [
            "MATH 150",
            "MATH 151",
            "MATH 227"
        ]
    },
    "MATH 223": {
        "prereqs": [
            "MATH 133"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 236",
            "MATH 247",
            "MATH 251"
        ]
    },
    "MATH 228": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 235": {
        "prereqs": [
            "MATH 133"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 236": {
        "prereqs": [
            "MATH 235"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 240": {
        "prereqs": [],
        "coreqs": [
            "MATH 133"
        ],
        "restricts": [
            "MATH 235"
        ]
    },
    "MATH 242": {
        "prereqs": [
            "MATH 141"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 254"
        ]
    },
    "MATH 243": {
        "prereqs": [
            "MATH 242",
            "MATH 254"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 247": {
        "prereqs": [
            "MATH 133"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 248": {
        "prereqs": [
            "MATH 133",
            "MATH 222"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 249": {
        "prereqs": [
            "MATH 248"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 251": {
        "prereqs": [
            "MATH 235"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 247"
        ]
    },
    "MATH 254": {
        "prereqs": [
            "MATH 141"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 242"
        ]
    },
    "MATH 255": {
        "prereqs": [
            "MATH 242",
            "MATH 254"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 262": {
        "prereqs": [
            "MATH 141",
            "MATH 133"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 151",
            "MATH 152",
            "MATH 222"
        ]
    },
    "MATH 263": {
        "prereqs": [],
        "coreqs": [
            "MATH 262"
        ],
        "restricts": [
            "MATH 315",
            "MATH 325"
        ]
    },
    "MATH 264": {
        "prereqs": [
            "MATH 262",
            "MATH 151",
            "MATH 152"
        ],
        "coreqs": [
            "MATH 263"
        ],
        "restricts": [
            "MATH 319",
            "MATH 475"
        ]
    },
    "MATH 270": {
        "prereqs": [
            "MATH 263"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 271": {
        "prereqs": [
            "MATH 263",
            "MATH 264"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 314": {
        "prereqs": [
            "MATH 133",
            "MATH 222"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 248"
        ]
    },
    "MATH 315": {
        "prereqs": [
            "MATH 222"
        ],
        "coreqs": [
            "MATH 133"
        ],
        "restricts": [
            "MATH 325"
        ]
    },
    "MATH 316": {
        "prereqs": [
            "MATH 314",
            "MATH 243"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 249",
            "MATH 366",
            "MATH 381",
            "MATH 466"
        ]
    },
    "MATH 317": {
        "prereqs": [
            "MATH 315",
            "MATH 325",
            "MATH 263",
            "COMP 202"
        ],
        "coreqs": [],
        "restricts": [
            "COMP 350"
        ]
    },
    "MATH 318": {
        "prereqs": [
            "MATH 235",
            "MATH 240",
            "MATH 242"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 319": {
        "prereqs": [
            "MATH 223",
            "MATH 236",
            "MATH 314",
            "MATH 315"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 320": {
        "prereqs": [
            "MATH 236",
            "MATH 223",
            "MATH 247",
            "MATH 314",
            "MATH 248"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 323": {
        "prereqs": [
            "MATH 141"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 324": {
        "prereqs": [
            "MATH 323"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 357"
        ]
    },
    "MATH 325": {
        "prereqs": [
            "MATH 222"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 326": {
        "prereqs": [
            "MATH 222",
            "MATH 223"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 376"
        ]
    },
    "MATH 327": {
        "prereqs": [
            "MATH 223",
            "MATH 236",
            "MATH 247",
            "MATH 251",
            "COMP 202"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 329": {
        "prereqs": [
            "MATH 141"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 335": {
        "prereqs": [
            "MATH 235",
            "MATH 236"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 338": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 340": {
        "prereqs": [
            "MATH 235",
            "MATH 240",
            "MATH 242"
        ],
        "coreqs": [
            "MATH 223",
            "MATH 236"
        ],
        "restricts": [
            "MATH 343",
            "MATH 350"
        ]
    },
    "MATH 346": {
        "prereqs": [
            "MATH 235"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 377"
        ]
    },
    "MATH 348": {
        "prereqs": [
            "MATH 133"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 398"
        ]
    },
    "MATH 350": {
        "prereqs": [
            "MATH 235",
            "MATH 240",
            "MATH 251",
            "MATH 223"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 343",
            "MATH 340"
        ]
    },
    "MATH 352": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 356": {
        "prereqs": [
            "MATH 243",
            "MATH 255",
            "MATH 222"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 323"
        ]
    },
    "MATH 357": {
        "prereqs": [
            "MATH 356"
        ],
        "coreqs": [
            "MATH 255"
        ],
        "restricts": [
            "MATH 324"
        ]
    },
    "MATH 363": {
        "prereqs": [
            "MATH 263",
            "MATH 264"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 376": {
        "prereqs": [
            "MATH 222",
            "MATH 223"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 326"
        ]
    },
    "MATH 377": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 346"
        ]
    },
    "MATH 381": {
        "prereqs": [
            "MATH 264"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 387": {
        "prereqs": [
            "MATH 325",
            "MATH 315",
            "COMP 202"
        ],
        "coreqs": [
            "MATH 255",
            "MATH 243"
        ],
        "restricts": []
    },
    "MATH 396": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 397": {
        "prereqs": [
            "MATH 251",
            "MATH 247",
            "COMP 202"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 398": {
        "prereqs": [
            "MATH 133"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 348"
        ]
    },
    "MATH 407": {
        "prereqs": [
            "COMP 202",
            "MATH 223",
            "MATH 236",
            "MATH 314",
            "MATH 315",
            "MATH 323"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 410": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 417": {
        "prereqs": [
            "COMP 202",
            "MATH 223",
            "MATH 236",
            "MATH 314"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 487",
            "MATH 517"
        ]
    },
    "MATH 420": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 423": {
        "prereqs": [
            "MATH 324",
            "MATH 223",
            "MATH 236"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 533"
        ]
    },
    "MATH 427": {
        "prereqs": [
            "MATH 323",
            "MATH 324"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 430": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 330",
            "MATH 490"
        ]
    },
    "MATH 437": {
        "prereqs": [
            "MATH 315",
            "MATH 325",
            "MATH 323",
            "MATH 356"
        ],
        "coreqs": [
            "MATH 326",
            "MATH 376"
        ],
        "restricts": []
    },
    "MATH 447": {
        "prereqs": [
            "MATH 323"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 547"
        ]
    },
    "MATH 454": {
        "prereqs": [
            "MATH 255"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 354"
        ]
    },
    "MATH 455": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 355"
        ]
    },
    "MATH 456": {
        "prereqs": [
            "MATH 235",
            "MATH 247",
            "MATH 251"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 370"
        ]
    },
    "MATH 457": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 371"
        ]
    },
    "MATH 458": {
        "prereqs": [
            "MATH 251",
            "MATH 247",
            "MATH 248",
            "MATH 314"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 380"
        ]
    },
    "MATH 466": {
        "prereqs": [
            "MATH 248"
        ],
        "coreqs": [
            "MATH 454"
        ],
        "restricts": [
            "MATH 366",
            "MATH 249",
            "MATH 316",
            "MATH 381"
        ]
    },
    "MATH 470": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 475": {
        "prereqs": [
            "MATH 247",
            "MATH 251",
            "MATH 248",
            "MATH 325"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 375"
        ]
    },
    "MATH 478": {
        "prereqs": [
            "MATH 315",
            "MATH 325",
            "MATH 263",
            "MATH 317",
            "MATH 387",
            "COMP 350",
            "MECH 309"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 480": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 488": {
        "prereqs": [
            "MATH 251",
            "MATH 255"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 590"
        ]
    },
    "MATH 490": {
        "prereqs": [
            "MATH 222",
            "MATH 323"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 330",
            "MATH 430"
        ]
    },
    "MATH 517": {
        "prereqs": [
            "COMP 202",
            "MATH 223",
            "MATH 236",
            "MATH 314"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 417",
            "MATH 487"
        ]
    },
    "MATH 523": {
        "prereqs": [
            "MATH 423"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 426"
        ]
    },
    "MATH 524": {
        "prereqs": [
            "MATH 324"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 424"
        ]
    },
    "MATH 525": {
        "prereqs": [
            "MATH 324"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 425"
        ]
    },
    "MATH 533": {
        "prereqs": [
            "MATH 357",
            "MATH 247",
            "MATH 251"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 423"
        ]
    },
    "MATH 537": {
        "prereqs": [
            "MATH 325",
            "MATH 356",
            "MATH 376"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 437"
        ]
    },
    "MATH 540": {
        "prereqs": [
            "MATH 323",
            "MATH 329"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 541": {
        "prereqs": [
            "MATH 323",
            "MATH 324"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 545": {
        "prereqs": [
            "MATH 324",
            "MATH 357"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 547": {
        "prereqs": [
            "MATH 356",
            "MATH 247",
            "MATH 251"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 447"
        ]
    },
    "MATH 550": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 552": {
        "prereqs": [
            "MATH 350",
            "COMP 362"
        ],
        "coreqs": [],
        "restricts": [
            "COMP 552"
        ]
    },
    "MATH 553": {
        "prereqs": [
            "COMP 362",
            "MATH 350",
            "MATH 454",
            "MATH 487"
        ],
        "coreqs": [],
        "restricts": [
            "COMP 553"
        ]
    },
    "MATH 555": {
        "prereqs": [
            "MATH 315",
            "MATH 319"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 556": {
        "prereqs": [
            "MATH 357"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 557": {
        "prereqs": [
            "MATH 556"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 560": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 564": {
        "prereqs": [
            "MATH 454",
            "MATH 455"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 565": {
        "prereqs": [
            "MATH 564"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 566": {
        "prereqs": [
            "MATH 366",
            "MATH 466",
            "MATH 564"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 567": {
        "prereqs": [
            "MATH 455"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 570": {
        "prereqs": [
            "MATH 457"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 571": {
        "prereqs": [
            "MATH 570"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 574": {
        "prereqs": [
            "MATH 325",
            "MATH 454"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 576": {
        "prereqs": [
            "MATH 454"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 577": {
        "prereqs": [
            "MATH 576"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 578": {
        "prereqs": [
            "MATH 247",
            "MATH 251",
            "MATH 387"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 579": {
        "prereqs": [
            "MATH 475",
            "MATH 387"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 580": {
        "prereqs": [
            "MATH 475"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 581": {
        "prereqs": [
            "MATH 455",
            "MATH 580"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 582": {
        "prereqs": [
            "MATH 576"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 583": {
        "prereqs": [
            "MATH 456",
            "MATH 576"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 587": {
        "prereqs": [
            "MATH 356",
            "MATH 255",
            "MATH 243"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 589": {
        "prereqs": [
            "MATH 587"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 590": {
        "prereqs": [
            "MATH 251",
            "MATH 255"
        ],
        "coreqs": [],
        "restricts": [
            "MATH 488"
        ]
    },
    "MATH 591": {
        "prereqs": [
            "MATH 488"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 592": {
        "prereqs": [
            "MATH 488"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 594": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 595": {
        "prereqs": [
            "MATH 454",
            "MATH 366",
            "MATH 466"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 596": {
        "prereqs": [
            "MATH 456",
            "MATH 377"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 597": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 598": {
        "prereqs": [
            "MATH 356"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 599": {
        "prereqs": [
            "MATH 454",
            "MATH 458"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 600": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 640"
        ]
    },
    "MATH 601": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 602": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 604": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 605": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 635": {
        "prereqs": [
            "MATH 564",
            "MATH 565",
            "MATH 566"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 638": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 640": {
        "prereqs": [],
        "coreqs": [],
        "restricts": [
            "MATH 600"
        ]
    },
    "MATH 641": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 666": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 667": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 671": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 680": {
        "prereqs": [
            "MATH 556",
            "MATH 557"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 681": {
        "prereqs": [
            "MATH 545"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 686": {
        "prereqs": [
            "MATH 556",
            "MATH 557"
        ],
        "coreqs": [],
        "restricts": []
    },
    "MATH 687": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 689": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 690": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 691": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 693": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 695": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 697": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 698": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 699": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 700": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 701": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 704": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 706": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 707": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 720": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 721": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 722": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 723": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 726": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 727": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 740": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 741": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 742": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 743": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 744": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 756": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 758": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 761": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 762": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 763": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 764": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 765": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 782": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 783": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    },
    "MATH 784": {
        "prereqs": [],
        "coreqs": [],
        "restricts": []
    }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[3]);
