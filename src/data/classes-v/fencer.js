let Fencer = {
  titles: [{
    name: "Phantom Duelist",
    value: "A"
  }, {
    name: "Chain Duelist",
    value: "B"
  }],
  skills: {
    rapierMastery: {
      id: "rapierMastery",
      name: "Rapier Mastery",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 0,
        y: 0
      }
    },
    chainFlame: {
      id: "chainFlame",
      name: "Chain Flame",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 0,
        y: 1
      }
    },
    chainFreeze: {
      id: "chainFreeze",
      name: "Chain Freeze",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 0,
        y: 2
      }
    },
    chainShock: {
      id: "chainShock",
      name: "Chain Shock",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 0,
        y: 3
      }
    },
    predict: {
      id: "predict",
      name: "Predict",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 0,
        y: 4
      }
    },
    chainBoost: {
      id: "chainBoost",
      name: "Chain Boost",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 1,
        y: 1.5
      }
    },
    chainBurst: {
      id: "chainBurst",
      name: "Chain Burst",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 1,
        y: 2.5
      }
    },
    windCurtain: {
      id: "windCurtain",
      name: "Wind Curtain",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 1,
        y: 4
      }
    },
    opticThrust: {
      id: "opticThrust",
      name: "Optic Thrust",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 1,
        y: 5
      }
    },
    sylphid: {
      id: "sylphid",
      name: "Sylphid",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 1,
        y: 6
      }
    }
  },
  prereqs: [
    {
      startSkills: [{ id: "chainFlame", level: 2 }, { id: "chainFreeze", level: 2 }, { id: "chainShock", level: 2 }],
      endSkills: [{ id: "chainBoost" }, { id: "chainBurst" }]
    },
    {
      startSkills: [{ id: "predict", level: 2 }],
      endSkills: [{ id: "windCurtain" }]
    }
  ],
  titleA: {
    titleName: "Phantom Duelist",
    skills: {
      rayOfLight: {
        id: "rayOfLight",
        name: "Ray of Light",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 0
        }
      },
      phantomSwords: {
        id: "phantomSwords",
        name: "Phantom Swords",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 1.5
        }
      },
      autoCurtain: {
        id: "autoCurtain",
        name: "Auto-Curtain",
        pointCurrent: 0,
        pointMax: 5,
        coords: {
          x: 2,
          y: 4
        }
      },
      deftThrust: {
        id: "deftThrust",
        name: "Deft Thrust",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 5
        }
      },
      counterBoost: {
        id: "counterBoost",
        name: "Counter Boost",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 6
        }
      },
      lightweight: {
        id: "lightweight",
        name: "Lightweight",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 3,
          y: 0
        }
      },
      lure: {
        id: "lure",
        name: "Lure",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 3,
          y: 1
        }
      },
      dodgeBoon: {
        id: "dodgeBoon",
        name: "Dodge Boon",
        pointCurrent: 0,
        pointMax: 5,
        coords: {
          x: 3,
          y: 2
        }
      },
      divineGust: {
        id: "divineGust",
        name: "Divine Gust",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 3,
          y: 4
        }
      },
      revengeThrust: {
        id: "revengeThrust",
        name: "Revenge Thrust",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 3,
          y: 5
        }
      }
    },
    prereqs: [
      {
        startSkills: [{ id: "windCurtain", level: 3 }],
        endSkills: [{ id: "autoCurtain" }]
      },
      {
        startSkills: [{ id: "opticThrust", level: 3 }],
        endSkills: [{ id: "deftThrust" }]
      },
      {
        startSkills: [{ id: "sylphid", level: 5 }],
        endSkills: [{ id: "counterBoost" }]
      },
      {
        startSkills: [{ id: "phantomSwords", level: 3 }],
        endSkills: [{ id: "lure" }, { id: "dodgeBoon" }]
      },
      {
        startSkills: [{ id: "autoCurtain", level: 3 }],
        endSkills: [{ id: "divineGust" }]
      },
      {
        startSkills: [{ id: "deftThrust", level: 5 }],
        endSkills: [{ id: "revengeThrust" }]
      }
    ]
  },
  titleB: {
    skills: {
      sonicBlade: {
        id: "sonicBlade",
        name: "Sonic Blade",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 0
        }
      },
      chainKiller: {
        id: "chainKiller",
        name: "Chain Killer",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 2
        }
      },
      sylphscreen: {
        id: "sylphscreen",
        name: "Sylphscreen",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 4
        }
      },
      multiStab: {
        id: "multiStab",
        name: "Multi-Stab",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 5
        }
      },
      speedUp: {
        id: "speedUp",
        name: "Speed Up",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 6
        }
      },
      physAtkUp: {
        id: "physAtkUp",
        name: "Phys ATK Up",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 3,
          y: 0
        }
      },
      chainAll: {
        id: "chainAll",
        name: "Chain All",
        pointCurrent: 0,
        pointMax: 5,
        coords: {
          x: 3,
          y: 1
        }
      },
      chainPlus: {
        id: "chainPlus",
        name: "Chain Plus",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 3,
          y: 2
        }
      },
      chainDouble: {
        id: "chainDouble",
        name: "Chain Double",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 3,
          y: 3
        }
      },
      resonance: {
        id: "resonance",
        name: "Resonance",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 3,
          y: 5
        }
      }
    },
    prereqs: [
      {
        startSkills: [{ id: "rapierMastery", level: 3 }],
        endSkills: [{ id: "sonicBlade" }]
      },
      {
        startSkills: [{ id: "chainBoost", level: 3 }, { id: "chainBurst", level: 3 }],
        endSkills: [{ id: "chainKiller" }]
      },
      {
        startSkills: [{ id: "opticThrust", level: 3 }],
        endSkills: [{ id: "multiStab" }]
      },
      {
        startSkills: [{ id: "chainKiller", level: 5 }],
        endSkills: [{ id: "chainAll" }, { id: "chainPlus" }, { id: "chainDouble" }]
      },
      {
        startSkills: [{ id: "multiStab", level: 5 }],
        endSkills: [{ id: "resonance" }]
      }
    ]
  }
}

export default Fencer;