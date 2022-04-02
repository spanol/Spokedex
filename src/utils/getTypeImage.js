export default function getTypeImage(type) {
    switch (type) {
      case "normal":
        return "https://cdn2.bulbagarden.net/upload/3/39/NormalIC_Big.png";
      case "fighting":
        return "https://cdn2.bulbagarden.net/upload/6/67/FightingIC_Big.png";
      case "flying":
        return "https://cdn2.bulbagarden.net/upload/c/cb/FlyingIC_Big.png";
      case "poison":
        return "https://cdn2.bulbagarden.net/upload/3/3d/PoisonIC_Big.png";
      case "ground":
        return "https://cdn2.bulbagarden.net/upload/8/8f/GroundIC_Big.png";
      case "rock":
        return "https://cdn2.bulbagarden.net/upload/c/ce/RockIC_Big.png";
      case "bug":
        return "https://cdn2.bulbagarden.net/upload/c/c8/BugIC_Big.png";
      case "ghost":
        return "https://cdn2.bulbagarden.net/upload/7/73/GhostIC_Big.png";
      case "steel":
        return "https://cdn2.bulbagarden.net/upload/d/d4/SteelIC_Big.png";
      case "fire":
        return "https://cdn2.bulbagarden.net/upload/2/26/FireIC_Big.png";
      case "water":
        return "https://cdn2.bulbagarden.net/upload/5/56/WaterIC_Big.png";
      case "grass":
        return "https://cdn2.bulbagarden.net/upload/7/74/GrassIC_Big.png";
      case "electric":
        return "https://cdn2.bulbagarden.net/upload/4/4a/ElectricIC_Big.png";
      case "psychic":
        return "https://cdn2.bulbagarden.net/upload/6/60/PsychicIC_Big.png";
      case "ice":
        return "https://cdn2.bulbagarden.net/upload/6/6f/IceIC_Big.png";
      case "dragon":
        return "https://cdn2.bulbagarden.net/upload/4/48/DragonIC_Big.png";
      case "dark":
        return "https://cdn2.bulbagarden.net/upload/5/56/DarkIC_Big.png";
      case "fairy":
        return "https://cdn2.bulbagarden.net/upload/d/df/Picross_FairyIC.png";
      default:
        return "https://cdn2.bulbagarden.net/upload/3/3c/UnknownIC_Big.png";
    }
  }