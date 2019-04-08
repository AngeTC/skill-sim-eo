let Rover = {
  skills: {
    bowMastery: {
      id: "bowMastery",
      name: "Bow Mastery",
      pointMax: 10,
      coords: {
        x: 0,
        y: 0
      }
    },
    hawkWhistle: {
      id: "hawkWhistle",
      name: "Hawk Whistle",
      pointMax: 10,
      coords: {
        x: 0,
        y: 1.5
      }
    },
    houndWhistle: {
      id: "houndWhistle",
      name: "Hound Whistle",
      pointMax: 10,
      coords: {
        x: 0,
        y: 3.5
      }
    },
    brushing: {
      id: "brushing",
      name: "Brushing",
      pointMax: 10,
      coords: {
        x: 0,
        y: 5
      }
    },
    animalTherapy: {
      id: "animalTherapy",
      name: "Animal Therapy",
      pointMax: 10,
      coords: {
        x: 1,
        y: 0
      }
    },
    hawkArrow: {
      id: "hawkArrow",
      name: "Hawk Arrow",
      pointMax: 10,
      coords: {
        x: 1,
        y: 1
      },
      prereq: {
        hawkWhistle: 3,
      }
    },
    wingThrash: {
      id: "wingThrash",
      name: "Wing Thrash",
      pointMax: 10,
      coords: {
        x: 1,
        y: 2
      },
      prereq: {
        hawkWhistle: 3,
      }
    },
    aidCommand: {
      id: "aidCommand",
      name: "Aid Command",
      pointMax: 10,
      coords: {
        x: 1,
        y: 3
      },
      prereq: {
        houndWhistle: 3,
      }
    },
    hunterShot: {
      id: "hunterShot",
      name: "Hunter Shot",
      pointMax: 10,
      coords: {
        x: 1,
        y: 4
      },
      prereq: {
        houndWhistle: 3,
      }
    },
    targetArrow: {
      id: "targetArrow",
      name: "Target Arrow",
      pointMax: 10,
      coords: {
        x: 1,
        y: 5
      }
    }
  },
  prereqs: [
    {
      startSkills: [{ id: "hawkWhistle", level: 3 }],
      endSkills: [{ id: "hawkArrow" }, { id: "wingThrash" }]
    },
    {
      startSkills: [{ id: "houndWhistle", level: 3 }],
      endSkills: [{ id: "aidCommand" }, { id: "hunterShot" }]
    }
  ]
}

export default Rover;