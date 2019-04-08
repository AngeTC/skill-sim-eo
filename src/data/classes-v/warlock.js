let Warlock = {
  titles: [{
    name: "Omnimancer",
    value: "A"
  }, {
    name: "Elemancer",
    value: "B"
  }],
  skills: {
    magiMastery: {
      id: "magiMastery",
      name: "Magi Mastery",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 0,
        y: 0
      }
    },
    amplifier: {
      id: "amplifier",
      name: "Amplifier",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 0,
        y: 4
      }
    },
    levitation: {
      id: "levitation",
      name: "Levitation",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 0,
        y: 6
      }
    },
    quickChant: {
      id: "quickChant",
      name: "Quick-Chant",
      pointCurrent: 0,
      pointMax: 5,
      coords: {
        x: 1,
        y: 0
      }
    },
    fireball: {
      id: "fireball",
      name: "Fireball",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 1,
        y: 1
      }
    },
    icicleLance: {
      id: "icicleLance",
      name: "Icicle Lance",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 1,
        y: 2
      }
    },
    lightning: {
      id: "lightning",
      name: "Lightning",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 1,
        y: 3
      }
    },
    magicShield: {
      id: "magicShield",
      name: "Magic Shield",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 1,
        y: 4
      }
    },
    focusChant: {
      id: "focusChant",
      name: "Focus Chant",
      pointCurrent: 0,
      pointMax: 10,
      coords: {
        x: 1,
        y: 5
      }
    },
    invisibility: {
      id: "invisibility",
      name: "Invisibility",
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
      startSkills: [{ id: "magiMastery", level: 5 }],
      endSkills: [{ id: "quickChant" }]
    },
    {
      startSkills: [{ id: "amplifier", level: 2 }],
      endSkills: [{ id: "magicShield" }]
    }
  ],
  titleA: {
    titleName: "Omnimancer",
    skills: {
      reserveMagic: {
        id: "reserveMagic",
        name: "Reserve Magic",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 0
        }
      },
      windstorm: {
        id: "windstorm",
        name: "Windstorm",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 1
        }
      },
      earthspike: {
        id: "earthspike",
        name: "Earthspike",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 2
        }
      },
      rockfall: {
        id: "rockfall",
        name: "Rockfall",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 3
        }
      },
      antiMagic: {
        id: "antiMagic",
        name: "Anti-Magic",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 4
        }
      },
      spreadChant: {
        id: "spreadChant",
        name: "Spread Chant",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 5
        }
      },
      magicDefUp: {
        id: "magicDefUp",
        name: "Magic DEF Up",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 6
        }
      },
      tpUp: {
        id: "tpUp",
        name: "TP Up",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 3,
          y: 0
        }
      },
      altar: {
        id: "altar",
        name: "Altar",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 3,
          y: 2
        }
      },
      lifeSiphon: {
        id: "lifeSiphon",
        name: "Life Siphon",
        pointCurrent: 0,
        pointMax: 5,
        coords: {
          x: 3,
          y: 4
        }
      },
    },
    prereqs: [
      {
        startSkills: [{ id: "fireball", level: 3 }, { id: "icicleLance", level: 3 }, { id: "lightning", level: 3 }],
        endSkills: [{ id: "windstorm" }, { id: "earthspike" }, { id: "rockfall" }]
      },
      {
        startSkills: [{ id: "magicShield", level: 3 }],
        endSkills: [{ id: "antiMagic" }]
      },
      {
        startSkills: [{ id: "focusChant", level: 5 }],
        endSkills: [{ id: "spreadChant" }]
      },
      {
        startSkills: [{ id: "windstorm", level: 5 }, { id: "earthspike", level: 5 }, { id: "rockfall", level: 5 }],
        endSkills: [{ id: "altar" }]
      },
      {
        startSkills: [{ id: "antiMagic", level: 3 }],
        endSkills: [{ id: "lifeSiphon" }]
      }
    ]
  },
  titleB: {
    titleName: "Elemancer",
    skills: {
      commonMagic: {
        id: "commonMagic",
        name: "Common Magic",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 0
        }
      },
      explosion: {
        id: "explosion",
        name: "Explosion",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 1
        }
      },
      hailstorm: {
        id: "hailstorm",
        name: "Hailstorm",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 2
        }
      },
      thunderbreak: {
        id: "thunderbreak",
        name: "Thunderbreak",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 3
        }
      },
      cleverStrike: {
        id: "cleverStrike",
        name: "Clever Strike",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 4
        }
      },
      abatingChant: {
        id: "abatingChant",
        name: "Abating Chant",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 5
        }
      },
      statusDefUp: {
        id: "statusDefUp",
        name: "Status DEF Up",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 2,
          y: 6
        }
      },
      magicAtkUp: {
        id: "magicAtkUp",
        name: "Magic ATK Up",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 3,
          y: 0
        }
      },
      manaFlow: {
        id: "manaFlow",
        name: "Mana Flow",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 3,
          y: 1.5
        }
      },
      cuttingCosts: {
        id: "cuttingCosts",
        name: "Cutting Costs",
        pointCurrent: 0,
        pointMax: 10,
        coords: {
          x: 3,
          y: 2.5
        }
      },
    },
    prereqs: [
      {
        startSkills: [{ id: "fireball", level: 5 }],
        endSkills: [{ id: "explosion" }]
      },
      {
        startSkills: [{ id: "icicleLance", level: 5 }],
        endSkills: [{ id: "hailstorm" }]
      },
      {
        startSkills: [{ id: "lightning", level: 5 }],
        endSkills: [{ id: "thunderbreak" }]
      },
      {
        startSkills: [{ id: "magicShield", level: 3 }],
        endSkills: [{ id: "cleverStrike" }]
      },
      {
        startSkills: [{ id: "focusChant", level: 5 }],
        endSkills: [{ id: "abatingChant" }]
      },
      {
        startSkills: [{ id: "explosion", level: 3 }, { id: "hailstorm", level: 3 }, { id: "thunderbreak", level: 3 }],
        endSkills: [{ id: "manaFlow" }, { id: "cuttingCosts" }]
      },
    ]
  }
}

export default Warlock;