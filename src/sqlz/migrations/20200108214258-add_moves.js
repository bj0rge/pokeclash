'use strict';

const uuid = require('uuid');

const MOVES = [
  {
    "name": "Abîme",
    "type": "Sol",
    "category": "Physique",
    "power": "OHKO",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Acidarmure",
    "type": "Poison",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Acide",
    "type": "Poison",
    "category": "Spéciale",
    "power": "40",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Affûtage",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Amnésie",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Armure",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Balayage",
    "type": "Combat",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Bec Vrille",
    "type": "Vol",
    "category": "Physique",
    "power": "80",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Bélier",
    "type": "Normal",
    "category": "Physique",
    "power": "90",
    "precision": "85%",
    "pp": "20"
  },
  {
    "name": "Berceuse",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "55%",
    "pp": "15"
  },
  {
    "name": "Blizzard",
    "type": "Glace",
    "category": "Spéciale",
    "power": "110",
    "precision": "70%",
    "pp": "5"
  },
  {
    "name": "Bomb'Œuf",
    "type": "Normal",
    "category": "Physique",
    "power": "100",
    "precision": "75%",
    "pp": "10"
  },
  {
    "name": "Bouclier",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Boul'Armure",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "40"
  },
  {
    "name": "Brouillard",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Brume",
    "type": "Glace",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Buée Noire",
    "type": "Glace",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Bulles d'O",
    "type": "Eau",
    "category": "Spéciale",
    "power": "65",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Cage-Éclair",
    "type": "Électrik",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Cascade",
    "type": "Eau",
    "category": "Physique",
    "power": "80",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Charge",
    "type": "Normal",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "35"
  },
  {
    "name": "Choc Mental",
    "type": "Psy",
    "category": "Spéciale",
    "power": "50",
    "precision": "100%",
    "pp": "25"
  },
  {
    "name": "Claquoir",
    "type": "Eau",
    "category": "Physique",
    "power": "35",
    "precision": "85%",
    "pp": "15"
  },
  {
    "name": "Clonage",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Combo-Griffe",
    "type": "Normal",
    "category": "Physique",
    "power": "18",
    "precision": "80%",
    "pp": "15"
  },
  {
    "name": "Constriction",
    "type": "Normal",
    "category": "Physique",
    "power": "10",
    "precision": "100%",
    "pp": "35"
  },
  {
    "name": "Conversion",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Copie",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Coud'Krâne",
    "type": "Normal",
    "category": "Physique",
    "power": "130",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Coup d'Boule",
    "type": "Normal",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Coupe",
    "type": "Normal",
    "category": "Physique",
    "power": "50",
    "precision": "95%",
    "pp": "30"
  },
  {
    "name": "Coupe-Vent",
    "type": "Normal",
    "category": "Spéciale",
    "power": "80",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Croc de Mort",
    "type": "Normal",
    "category": "Physique",
    "power": "80",
    "precision": "90%",
    "pp": "15"
  },
  {
    "name": "Croc Fatal",
    "type": "Normal",
    "category": "Physique",
    "power": "—",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Croissance",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Cru-Aile",
    "type": "Vol",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "35"
  },
  {
    "name": "Cyclone",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Damoclès",
    "type": "Normal",
    "category": "Physique",
    "power": "120",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Danse Flamme",
    "type": "Feu",
    "category": "Spéciale",
    "power": "35",
    "precision": "85%",
    "pp": "15"
  },
  {
    "name": "Danse-Fleur",
    "type": "Plante",
    "category": "Spéciale",
    "power": "120",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Danse-Lames",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Dard-Nuée",
    "type": "Insecte",
    "category": "Physique",
    "power": "25",
    "precision": "95%",
    "pp": "20"
  },
  {
    "name": "Dard-Venin",
    "type": "Poison",
    "category": "Physique",
    "power": "15",
    "precision": "100%",
    "pp": "35"
  },
  {
    "name": "Déflagration",
    "type": "Feu",
    "category": "Spéciale",
    "power": "110",
    "precision": "85%",
    "pp": "5"
  },
  {
    "name": "Destruction",
    "type": "Normal",
    "category": "Physique",
    "power": "200",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Détritus",
    "type": "Poison",
    "category": "Spéciale",
    "power": "65",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Dévorêve",
    "type": "Psy",
    "category": "Spéciale",
    "power": "100",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Double-Dard",
    "type": "Insecte",
    "category": "Physique",
    "power": "25",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Double Pied",
    "type": "Combat",
    "category": "Physique",
    "power": "30 (x2)",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Draco-Rage",
    "type": "Dragon",
    "category": "Spéciale",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Éboulement",
    "type": "Roche",
    "category": "Physique",
    "power": "75",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "E-Coque",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Éclair",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "40",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Écrasement",
    "type": "Normal",
    "category": "Physique",
    "power": "65",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Écras'Face",
    "type": "Normal",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "35"
  },
  {
    "name": "Écume",
    "type": "Eau",
    "category": "Spéciale",
    "power": "40",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Empal'Korne",
    "type": "Normal",
    "category": "Physique",
    "power": "OHKO",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Entrave",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Étreinte",
    "type": "Normal",
    "category": "Physique",
    "power": "15",
    "precision": "85%",
    "pp": "20"
  },
  {
    "name": "Explosion",
    "type": "Normal",
    "category": "Physique",
    "power": "250",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Fatal-Foudre",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "110",
    "precision": "70%",
    "pp": "10"
  },
  {
    "name": "Flammèche",
    "type": "Feu",
    "category": "Spéciale",
    "power": "40",
    "precision": "100%",
    "pp": "25"
  },
  {
    "name": "Flash",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Force",
    "type": "Normal",
    "category": "Physique",
    "power": "80",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Force Poigne",
    "type": "Normal",
    "category": "Physique",
    "power": "55",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Fouet Lianes",
    "type": "Plante",
    "category": "Physique",
    "power": "45",
    "precision": "100%",
    "pp": "25"
  },
  {
    "name": "Frappe Atlas",
    "type": "Combat",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Frénésie",
    "type": "Normal",
    "category": "Physique",
    "power": "20",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Furie",
    "type": "Normal",
    "category": "Physique",
    "power": "15",
    "precision": "85%",
    "pp": "20"
  },
  {
    "name": "Gaz Toxik",
    "type": "Poison",
    "category": "Statut",
    "power": "—",
    "precision": "90%",
    "pp": "40"
  },
  {
    "name": "Griffe",
    "type": "Normal",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "35"
  },
  {
    "name": "Grincement",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "85%",
    "pp": "40"
  },
  {
    "name": "Grobisou",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "75%",
    "pp": "10"
  },
  {
    "name": "Groz'Yeux",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Guillotine",
    "type": "Normal",
    "category": "Physique",
    "power": "OHKO",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Hâte",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Hurlement",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Hydrocanon",
    "type": "Eau",
    "category": "Spéciale",
    "power": "110",
    "precision": "80%",
    "pp": "5"
  },
  {
    "name": "Hypnose",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "60%",
    "pp": "20"
  },
  {
    "name": "Jackpot",
    "type": "Normal",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Jet de Sable",
    "type": "Sol",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Jet-Pierres",
    "type": "Roche",
    "category": "Physique",
    "power": "50",
    "precision": "90%",
    "pp": "15"
  },
  {
    "name": "Koud'Korne",
    "type": "Normal",
    "category": "Physique",
    "power": "65",
    "precision": "100%",
    "pp": "25"
  },
  {
    "name": "Lance-Flammes",
    "type": "Feu",
    "category": "Spéciale",
    "power": "90",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Lance-Soleil",
    "type": "Plante",
    "category": "Spéciale",
    "power": "200",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Laser Glace",
    "type": "Glace",
    "category": "Spéciale",
    "power": "90",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Léchouille",
    "type": "Spectre",
    "category": "Physique",
    "power": "30",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Ligotage",
    "type": "Normal",
    "category": "Physique",
    "power": "15",
    "precision": "90%",
    "pp": "20"
  },
  {
    "name": "Lilliput",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Lutte",
    "type": "Normal",
    "category": "Physique",
    "power": "50",
    "precision": "100%",
    "pp": "—"
  },
  {
    "name": "Mania",
    "type": "Normal",
    "category": "Physique",
    "power": "120",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Massd'Os",
    "type": "Sol",
    "category": "Physique",
    "power": "65",
    "precision": "85%",
    "pp": "20"
  },
  {
    "name": "Mawashi Geri",
    "type": "Combat",
    "category": "Physique",
    "power": "60",
    "precision": "85%",
    "pp": "15"
  },
  {
    "name": "Méga-Sangsue",
    "type": "Plante",
    "category": "Spéciale",
    "power": "40",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Météores",
    "type": "Normal",
    "category": "Spéciale",
    "power": "60",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Métronome",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Mimi-Queue",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Mimique",
    "type": "Vol",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Morphing",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Morsure",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "25"
  },
  {
    "name": "Mur Lumière",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Ombre Nocturne",
    "type": "Spectre",
    "category": "Spéciale",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Onde Boréale",
    "type": "Glace",
    "category": "Spéciale",
    "power": "65",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Onde Folie",
    "type": "Spectre",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Osmerang",
    "type": "Sol",
    "category": "Physique",
    "power": "50 (x 2)",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Para-Spore",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "75%",
    "pp": "30"
  },
  {
    "name": "Patience",
    "type": "Normal",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Picanon",
    "type": "Normal",
    "category": "Physique",
    "power": "20",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Picpic",
    "type": "Vol",
    "category": "Physique",
    "power": "35",
    "precision": "100%",
    "pp": "35"
  },
  {
    "name": "Pied Sauté",
    "type": "Combat",
    "category": "Physique",
    "power": "100",
    "precision": "95%",
    "pp": "10"
  },
  {
    "name": "Pied Voltige",
    "type": "Combat",
    "category": "Physique",
    "power": "130",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Pilonnage",
    "type": "Normal",
    "category": "Physique",
    "power": "15",
    "precision": "85%",
    "pp": "20"
  },
  {
    "name": "Pince-Masse",
    "type": "Eau",
    "category": "Physique",
    "power": "100",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Piqué",
    "type": "Vol",
    "category": "Physique",
    "power": "140",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Pistolet à O",
    "type": "Eau",
    "category": "Spéciale",
    "power": "40",
    "precision": "100%",
    "pp": "25"
  },
  {
    "name": "Plaquage",
    "type": "Normal",
    "category": "Physique",
    "power": "85",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Poing Comète",
    "type": "Normal",
    "category": "Physique",
    "power": "18",
    "precision": "85%",
    "pp": "15"
  },
  {
    "name": "Poing de Feu",
    "type": "Feu",
    "category": "Physique",
    "power": "75",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Poing-Éclair",
    "type": "Électrik",
    "category": "Physique",
    "power": "75",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Poing-Glace",
    "type": "Glace",
    "category": "Physique",
    "power": "75",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Poing-Karaté",
    "type": "Combat",
    "category": "Physique",
    "power": "50",
    "precision": "100%",
    "pp": "25"
  },
  {
    "name": "Poudre Dodo",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "75%",
    "pp": "15"
  },
  {
    "name": "Poudre Toxik",
    "type": "Poison",
    "category": "Statut",
    "power": "—",
    "precision": "75%",
    "pp": "35"
  },
  {
    "name": "Protection",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Psyko",
    "type": "Psy",
    "category": "Spéciale",
    "power": "90",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Puissance",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Purédpois",
    "type": "Poison",
    "category": "Spéciale",
    "power": "30",
    "precision": "70%",
    "pp": "20"
  },
  {
    "name": "Rafale Psy",
    "type": "Psy",
    "category": "Spéciale",
    "power": "65",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Reflet",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Regard Médusant",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Repli",
    "type": "Eau",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "40"
  },
  {
    "name": "Repos",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Riposte",
    "type": "Combat",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Rugissement",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "40"
  },
  {
    "name": "Sacrifice",
    "type": "Combat",
    "category": "Physique",
    "power": "80",
    "precision": "80%",
    "pp": "25"
  },
  {
    "name": "Sécrétion",
    "type": "Insecte",
    "category": "Statut",
    "power": "—",
    "precision": "95%",
    "pp": "40"
  },
  {
    "name": "Séisme",
    "type": "Sol",
    "category": "Physique",
    "power": "100",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Soin",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Sonicboom",
    "type": "Normal",
    "category": "Spéciale",
    "power": "—",
    "precision": "90%",
    "pp": "20"
  },
  {
    "name": "Souplesse",
    "type": "Normal",
    "category": "Physique",
    "power": "80",
    "precision": "75%",
    "pp": "20"
  },
  {
    "name": "Spore",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Surf",
    "type": "Eau",
    "category": "Spéciale",
    "power": "90",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Télékinésie",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "80%",
    "pp": "15"
  },
  {
    "name": "Téléport",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Tonnerre",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "90",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Torgnoles",
    "type": "Normal",
    "category": "Physique",
    "power": "15",
    "precision": "85%",
    "pp": "10"
  },
  {
    "name": "Tornade",
    "type": "Vol",
    "category": "Spéciale",
    "power": "40",
    "precision": "100%",
    "pp": "35"
  },
  {
    "name": "Toxik",
    "type": "Poison",
    "category": "Statut",
    "power": "—",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Tranche",
    "type": "Normal",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Tranch'Herbe",
    "type": "Plante",
    "category": "Physique",
    "power": "55",
    "precision": "95%",
    "pp": "25"
  },
  {
    "name": "Trempette",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "40"
  },
  {
    "name": "Triplattaque",
    "type": "Normal",
    "category": "Spéciale",
    "power": "80",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Tunnel",
    "type": "Sol",
    "category": "Physique",
    "power": "80",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Ultimapoing",
    "type": "Normal",
    "category": "Physique",
    "power": "80",
    "precision": "85%",
    "pp": "20"
  },
  {
    "name": "Ultimawashi",
    "type": "Normal",
    "category": "Physique",
    "power": "120",
    "precision": "75%",
    "pp": "5"
  },
  {
    "name": "Ultralaser",
    "type": "Normal",
    "category": "Spéciale",
    "power": "150",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Ultrason",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "55%",
    "pp": "20"
  },
  {
    "name": "Uppercut",
    "type": "Normal",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Vague Psy",
    "type": "Psy",
    "category": "Spéciale",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Vampigraine",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Vampirisme",
    "type": "Insecte",
    "category": "Physique",
    "power": "80",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Vive-Attaque",
    "type": "Normal",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Vol",
    "type": "Vol",
    "category": "Physique",
    "power": "90",
    "precision": "95%",
    "pp": "15"
  },
  {
    "name": "Vol-Vie",
    "type": "Plante",
    "category": "Spéciale",
    "power": "20",
    "precision": "100%",
    "pp": "25"
  },
  {
    "name": "Yoga",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "40"
  },
  {
    "name": "Gribouille",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "1"
  },
  {
    "name": "Triple Pied",
    "type": "Combat",
    "category": "Physique",
    "power": "10",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Larcin",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "25"
  },
  {
    "name": "Toile",
    "type": "Insecte",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Lire-Esprit",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Cauchemar",
    "type": "Spectre",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Roue de Feu",
    "type": "Feu",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "25"
  },
  {
    "name": "Ronflement",
    "type": "Normal",
    "category": "Spéciale",
    "power": "50",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Malédiction",
    "type": "Spectre",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Fléau",
    "type": "Normal",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Conversion 2",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Aéroblast",
    "type": "Vol",
    "category": "Spéciale",
    "power": "100",
    "precision": "95%",
    "pp": "5"
  },
  {
    "name": "Spore Coton",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "40"
  },
  {
    "name": "Contre",
    "type": "Combat",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Dépit",
    "type": "Spectre",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Poudreuse",
    "type": "Glace",
    "category": "Spéciale",
    "power": "40",
    "precision": "100%",
    "pp": "25"
  },
  {
    "name": "Abri",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Mach Punch",
    "type": "Combat",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Grimace",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Feinte",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "60",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Doux Baiser",
    "type": "Fée",
    "category": "Statut",
    "power": "—",
    "precision": "75%",
    "pp": "10"
  },
  {
    "name": "Cognobidon",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Bomb-Beurk",
    "type": "Poison",
    "category": "Spéciale",
    "power": "90",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Coud'Boue",
    "type": "Sol",
    "category": "Spéciale",
    "power": "20",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Octazooka",
    "type": "Eau",
    "category": "Spéciale",
    "power": "65",
    "precision": "85%",
    "pp": "10"
  },
  {
    "name": "Picots",
    "type": "Sol",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Élécanon",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "120",
    "precision": "50%",
    "pp": "5"
  },
  {
    "name": "Clairvoyance",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "40"
  },
  {
    "name": "Prélèvem. Destin",
    "type": "Spectre",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Requiem",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Vent Glace",
    "type": "Glace",
    "category": "Spéciale",
    "power": "55",
    "precision": "95%",
    "pp": "15"
  },
  {
    "name": "Détection",
    "type": "Combat",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Charge-Os",
    "type": "Sol",
    "category": "Physique",
    "power": "25",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Verrouillage",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Colère",
    "type": "Dragon",
    "category": "Physique",
    "power": "120",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Tempête de Sable",
    "type": "Roche",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Giga-Sangsue",
    "type": "Plante",
    "category": "Spéciale",
    "power": "75",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Ténacité",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Charme",
    "type": "Fée",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Roulade",
    "type": "Roche",
    "category": "Physique",
    "power": "30",
    "precision": "90%",
    "pp": "20"
  },
  {
    "name": "Faux-Chage",
    "type": "Normal",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "40"
  },
  {
    "name": "Vantardise",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "85%",
    "pp": "15"
  },
  {
    "name": "Lait à Boire",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Étincelle",
    "type": "Électrik",
    "category": "Physique",
    "power": "65",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Taillade",
    "type": "Insecte",
    "category": "Physique",
    "power": "40",
    "precision": "95%",
    "pp": "20"
  },
  {
    "name": "Aile d'Acier",
    "type": "Acier",
    "category": "Physique",
    "power": "70",
    "precision": "90%",
    "pp": "25"
  },
  {
    "name": "Regard Noir",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Attraction",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Blabla Dodo",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Glas de Soin",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Retour",
    "type": "Normal",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Cadeau",
    "type": "Normal",
    "category": "Physique",
    "power": "—",
    "precision": "90%",
    "pp": "15"
  },
  {
    "name": "Frustration",
    "type": "Normal",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Rune Protect",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "25"
  },
  {
    "name": "Balance",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Feu Sacré",
    "type": "Feu",
    "category": "Physique",
    "power": "100",
    "precision": "95%",
    "pp": "5"
  },
  {
    "name": "Ampleur",
    "type": "Sol",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Dynamopoing",
    "type": "Combat",
    "category": "Physique",
    "power": "100",
    "precision": "50%",
    "pp": "5"
  },
  {
    "name": "Mégacorne",
    "type": "Insecte",
    "category": "Physique",
    "power": "120",
    "precision": "85%",
    "pp": "10"
  },
  {
    "name": "Dracosouffle",
    "type": "Dragon",
    "category": "Spéciale",
    "power": "60",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Relais",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "40"
  },
  {
    "name": "Encore",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Poursuite",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Tour Rapide",
    "type": "Normal",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Doux Parfum",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Queue de Fer",
    "type": "Acier",
    "category": "Physique",
    "power": "100",
    "precision": "75%",
    "pp": "15"
  },
  {
    "name": "Griffe Acier",
    "type": "Acier",
    "category": "Physique",
    "power": "50",
    "precision": "95%",
    "pp": "35"
  },
  {
    "name": "Corps Perdu",
    "type": "Combat",
    "category": "Physique",
    "power": "70",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Aurore",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Synthèse",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Rayon Lune",
    "type": "Fée",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Puissance Cachée",
    "type": "Normal",
    "category": "Spéciale",
    "power": "60",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Coup-Croix",
    "type": "Combat",
    "category": "Physique",
    "power": "100",
    "precision": "80%",
    "pp": "5"
  },
  {
    "name": "Ouragan",
    "type": "Dragon",
    "category": "Spéciale",
    "power": "40",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Danse Pluie",
    "type": "Eau",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Zénith",
    "type": "Feu",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Mâchouille",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "80",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Voile Miroir",
    "type": "Psy",
    "category": "Spéciale",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Boost",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Vitesse Extrême",
    "type": "Normal",
    "category": "Physique",
    "power": "80",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Pouvoir Antique",
    "type": "Roche",
    "category": "Spéciale",
    "power": "60",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Ball'Ombre",
    "type": "Spectre",
    "category": "Spéciale",
    "power": "80",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Prescience",
    "type": "Psy",
    "category": "Spéciale",
    "power": "120",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Éclate-Roc",
    "type": "Combat",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Siphon",
    "type": "Eau",
    "category": "Spéciale",
    "power": "35",
    "precision": "85%",
    "pp": "15"
  },
  {
    "name": "Baston",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Bluff",
    "type": "Normal",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Brouhaha",
    "type": "Normal",
    "category": "Spéciale",
    "power": "90",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Stockage",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Relâche",
    "type": "Normal",
    "category": "Spéciale",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Avale",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Canicule",
    "type": "Feu",
    "category": "Spéciale",
    "power": "100",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Grêle",
    "type": "Glace",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Tourmente",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Flatterie",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Feu Follet",
    "type": "Feu",
    "category": "Statut",
    "power": "—",
    "precision": "85%",
    "pp": "15"
  },
  {
    "name": "Souvenir",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Façade",
    "type": "Normal",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Mitra-Poing",
    "type": "Combat",
    "category": "Physique",
    "power": "150",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Stimulant",
    "type": "Normal",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Par Ici",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Force-Nature",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "95%",
    "pp": "20"
  },
  {
    "name": "Chargeur",
    "type": "Électrik",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Provoc",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Coup d'Main",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Tourmagik",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Imitation",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Vœu",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Assistance",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Racines",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Surpuissance",
    "type": "Combat",
    "category": "Physique",
    "power": "120",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Reflet Magik",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Recyclage",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Vendetta",
    "type": "Combat",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Casse-Brique",
    "type": "Combat",
    "category": "Physique",
    "power": "75",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Bâillement",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Sabotage",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "20",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Effort",
    "type": "Normal",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Éruption",
    "type": "Feu",
    "category": "Spéciale",
    "power": "150",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Échange",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Possessif",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Régénération",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Rancune",
    "type": "Spectre",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Saisie",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Force Cachée",
    "type": "Normal",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Plongée",
    "type": "Eau",
    "category": "Physique",
    "power": "80",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Cogne",
    "type": "Combat",
    "category": "Physique",
    "power": "15",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Camouflage",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Lumiqueue",
    "type": "Insecte",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Lumi-Éclat",
    "type": "Psy",
    "category": "Spéciale",
    "power": "70",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Ball'Brume",
    "type": "Psy",
    "category": "Spéciale",
    "power": "70",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Danse-Plume",
    "type": "Vol",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Danse-Folle",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Pied Brûleur",
    "type": "Feu",
    "category": "Physique",
    "power": "85",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Lance-Boue",
    "type": "Sol",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Ball'Glace",
    "type": "Glace",
    "category": "Physique",
    "power": "30",
    "precision": "90%",
    "pp": "20"
  },
  {
    "name": "Poing Dard",
    "type": "Plante",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Paresse",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Mégaphone",
    "type": "Normal",
    "category": "Spéciale",
    "power": "90",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Crochet Venin",
    "type": "Poison",
    "category": "Physique",
    "power": "50",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Éclate Griffe",
    "type": "Normal",
    "category": "Physique",
    "power": "75",
    "precision": "95%",
    "pp": "10"
  },
  {
    "name": "Rafale Feu",
    "type": "Feu",
    "category": "Spéciale",
    "power": "150",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Hydroblast",
    "type": "Eau",
    "category": "Spéciale",
    "power": "150",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Poing Météor",
    "type": "Acier",
    "category": "Physique",
    "power": "100",
    "precision": "85%",
    "pp": "10"
  },
  {
    "name": "Étonnement",
    "type": "Spectre",
    "category": "Physique",
    "power": "30",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Ball'Météo",
    "type": "Normal",
    "category": "Spéciale",
    "power": "50",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Aromathérapie",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Croco Larme",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Tranch'Air",
    "type": "Vol",
    "category": "Spéciale",
    "power": "55",
    "precision": "95%",
    "pp": "25"
  },
  {
    "name": "Surchauffe",
    "type": "Feu",
    "category": "Spéciale",
    "power": "140",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Flair",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "40"
  },
  {
    "name": "Tomberoche",
    "type": "Roche",
    "category": "Physique",
    "power": "50",
    "precision": "80%",
    "pp": "10"
  },
  {
    "name": "Vent Argenté",
    "type": "Insecte",
    "category": "Spéciale",
    "power": "60",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Strido-Son",
    "type": "Acier",
    "category": "Statut",
    "power": "—",
    "precision": "85%",
    "pp": "40"
  },
  {
    "name": "Siffl'Herbe",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "55%",
    "pp": "15"
  },
  {
    "name": "Chatouille",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Force Cosmik",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Giclédo",
    "type": "Eau",
    "category": "Spéciale",
    "power": "—",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Rayon Signal",
    "type": "Insecte",
    "category": "Spéciale",
    "power": "75",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Poing Ombre",
    "type": "Spectre",
    "category": "Physique",
    "power": "60",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Extrasenseur",
    "type": "Psy",
    "category": "Spéciale",
    "power": "80",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Stratopercut",
    "type": "Combat",
    "category": "Physique",
    "power": "85",
    "precision": "90%",
    "pp": "15"
  },
  {
    "name": "Tourbi-Sable",
    "type": "Sol",
    "category": "Physique",
    "power": "35",
    "precision": "85%",
    "pp": "15"
  },
  {
    "name": "Glaciation",
    "type": "Glace",
    "category": "Spéciale",
    "power": "OHKO",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Ocroupi",
    "type": "Eau",
    "category": "Spéciale",
    "power": "95",
    "precision": "85%",
    "pp": "10"
  },
  {
    "name": "Balle Graine",
    "type": "Plante",
    "category": "Physique",
    "power": "25",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Aéropique",
    "type": "Vol",
    "category": "Physique",
    "power": "60",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Stalagtite",
    "type": "Glace",
    "category": "Physique",
    "power": "25",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Mur de Fer",
    "type": "Acier",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Barrage",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Grondement",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "40"
  },
  {
    "name": "Dracogriffe",
    "type": "Dragon",
    "category": "Physique",
    "power": "80",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Végé-Attak",
    "type": "Plante",
    "category": "Spéciale",
    "power": "150",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Gonflette",
    "type": "Combat",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Rebond",
    "type": "Vol",
    "category": "Physique",
    "power": "85",
    "precision": "85%",
    "pp": "5"
  },
  {
    "name": "Tir de Boue",
    "type": "Sol",
    "category": "Spéciale",
    "power": "55",
    "precision": "95%",
    "pp": "15"
  },
  {
    "name": "Queue-Poison",
    "type": "Poison",
    "category": "Physique",
    "power": "50",
    "precision": "100%",
    "pp": "25"
  },
  {
    "name": "Implore",
    "type": "Normal",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "40"
  },
  {
    "name": "Électacle",
    "type": "Électrik",
    "category": "Physique",
    "power": "120",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Feuille Magik",
    "type": "Plante",
    "category": "Spéciale",
    "power": "60",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Tourniquet",
    "type": "Eau",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Plénitude",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Lame-Feuille",
    "type": "Plante",
    "category": "Physique",
    "power": "90",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Danse Draco",
    "type": "Dragon",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Boule Roc",
    "type": "Roche",
    "category": "Physique",
    "power": "25",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Onde de Choc",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "60",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Vibraqua",
    "type": "Eau",
    "category": "Spéciale",
    "power": "60",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Carnareket",
    "type": "Acier",
    "category": "Spéciale",
    "power": "140",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Psycho Boost",
    "type": "Psy",
    "category": "Spéciale",
    "power": "140",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Atterrissage",
    "type": "Vol",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Gravité",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Œil Miracle",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "40"
  },
  {
    "name": "Réveil Forcé",
    "type": "Combat",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Marto-Poing",
    "type": "Combat",
    "category": "Physique",
    "power": "100",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Gyroballe",
    "type": "Acier",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Vœu Soin",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Saumure",
    "type": "Eau",
    "category": "Spéciale",
    "power": "65",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Don Naturel",
    "type": "Normal",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Ruse",
    "type": "Normal",
    "category": "Physique",
    "power": "30",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Picore",
    "type": "Vol",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Vent Arrière",
    "type": "Vol",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Acupression",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Fulmifer",
    "type": "Acier",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Demi-Tour",
    "type": "Insecte",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Close Combat",
    "type": "Combat",
    "category": "Physique",
    "power": "120",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Représailles",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "50",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Assurance",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "50",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Embargo",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Dégommage",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Échange Psy",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Atout",
    "type": "Normal",
    "category": "Spéciale",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Anti-Soin",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Essorage",
    "type": "Normal",
    "category": "Spéciale",
    "power": "—",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Astuce Force",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Suc Digestif",
    "type": "Poison",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Air Veinard",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Moi d'Abord",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Photocopie",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Permuforce",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Permugarde",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Punition",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Dernier Recours",
    "type": "Normal",
    "category": "Physique",
    "power": "140",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Soucigraine",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Coup Bas",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Pics Toxik",
    "type": "Poison",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Permucœur",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Anneau Hydro",
    "type": "Eau",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Vol Magnétik",
    "type": "Électrik",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Boutefeu",
    "type": "Feu",
    "category": "Physique",
    "power": "120",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Forte-Paume",
    "type": "Combat",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Aurasphère",
    "type": "Combat",
    "category": "Spéciale",
    "power": "90",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Poliroche",
    "type": "Roche",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Direct Toxik",
    "type": "Poison",
    "category": "Physique",
    "power": "80",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Vibrobscur",
    "type": "Ténèbres",
    "category": "Spéciale",
    "power": "80",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Tranche-Nuit",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Hydroqueue",
    "type": "Eau",
    "category": "Physique",
    "power": "90",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Canon Graine",
    "type": "Plante",
    "category": "Physique",
    "power": "80",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Lame d'Air",
    "type": "Vol",
    "category": "Spéciale",
    "power": "75",
    "precision": "95%",
    "pp": "20"
  },
  {
    "name": "Plaie-Croix",
    "type": "Insecte",
    "category": "Physique",
    "power": "80",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Bourdon",
    "type": "Insecte",
    "category": "Spéciale",
    "power": "90",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Dracochoc",
    "type": "Dragon",
    "category": "Spéciale",
    "power": "85",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Dracocharge",
    "type": "Dragon",
    "category": "Physique",
    "power": "100",
    "precision": "75%",
    "pp": "10"
  },
  {
    "name": "Rayon Gemme",
    "type": "Roche",
    "category": "Spéciale",
    "power": "70",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Vampipoing",
    "type": "Combat",
    "category": "Physique",
    "power": "75",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Onde Vide",
    "type": "Combat",
    "category": "Spéciale",
    "power": "40",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Exploforce",
    "type": "Combat",
    "category": "Spéciale",
    "power": "120",
    "precision": "70%",
    "pp": "5"
  },
  {
    "name": "Éco-Sphère",
    "type": "Plante",
    "category": "Spéciale",
    "power": "80",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Rapace",
    "type": "Vol",
    "category": "Physique",
    "power": "120",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Telluriforce",
    "type": "Sol",
    "category": "Spéciale",
    "power": "90",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Passe-Passe",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Giga Impact",
    "type": "Normal",
    "category": "Physique",
    "power": "150",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Machination",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Pisto-Poing",
    "type": "Acier",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Avalanche",
    "type": "Glace",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Éclats Glace",
    "type": "Glace",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Griffe Ombre",
    "type": "Spectre",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Crocs Éclair",
    "type": "Électrik",
    "category": "Physique",
    "power": "65",
    "precision": "95%",
    "pp": "15"
  },
  {
    "name": "Crocs Givre",
    "type": "Glace",
    "category": "Physique",
    "power": "65",
    "precision": "95%",
    "pp": "15"
  },
  {
    "name": "Crocs Feu",
    "type": "Feu",
    "category": "Physique",
    "power": "65",
    "precision": "95%",
    "pp": "15"
  },
  {
    "name": "Ombre Portée",
    "type": "Spectre",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "30"
  },
  {
    "name": "Boue-Bombe",
    "type": "Sol",
    "category": "Spéciale",
    "power": "65",
    "precision": "85%",
    "pp": "10"
  },
  {
    "name": "Coupe Psycho",
    "type": "Psy",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Psykoud'Boul",
    "type": "Psy",
    "category": "Physique",
    "power": "80",
    "precision": "90%",
    "pp": "15"
  },
  {
    "name": "Miroi-Tir",
    "type": "Acier",
    "category": "Spéciale",
    "power": "65",
    "precision": "85%",
    "pp": "10"
  },
  {
    "name": "Luminocanon",
    "type": "Acier",
    "category": "Spéciale",
    "power": "80",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Escalade",
    "type": "Normal",
    "category": "Physique",
    "power": "90",
    "precision": "85%",
    "pp": "20"
  },
  {
    "name": "Anti-Brume",
    "type": "Vol",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Distorsion",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Draco Météore",
    "type": "Dragon",
    "category": "Spéciale",
    "power": "140",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Coup d'Jus",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "80",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Ébullilave",
    "type": "Feu",
    "category": "Spéciale",
    "power": "80",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Tempête Verte",
    "type": "Plante",
    "category": "Spéciale",
    "power": "140",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Mégafouet",
    "type": "Plante",
    "category": "Physique",
    "power": "120",
    "precision": "85%",
    "pp": "10"
  },
  {
    "name": "Roc-Boulet",
    "type": "Roche",
    "category": "Physique",
    "power": "150",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Poison-Croix",
    "type": "Poison",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Détricanon",
    "type": "Poison",
    "category": "Physique",
    "power": "120",
    "precision": "70%",
    "pp": "5"
  },
  {
    "name": "Tête de Fer",
    "type": "Acier",
    "category": "Physique",
    "power": "80",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Bombaimant",
    "type": "Acier",
    "category": "Physique",
    "power": "60",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Lame de Roc",
    "type": "Roche",
    "category": "Physique",
    "power": "100",
    "precision": "80%",
    "pp": "5"
  },
  {
    "name": "Séduction",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Piège de Roc",
    "type": "Roche",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Nœud Herbe",
    "type": "Plante",
    "category": "Spéciale",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Babil",
    "type": "Vol",
    "category": "Spéciale",
    "power": "60",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Jugement",
    "type": "Normal",
    "category": "Spéciale",
    "power": "100",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Piqûre",
    "type": "Insecte",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Rayon Chargé",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "50",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Martobois",
    "type": "Plante",
    "category": "Physique",
    "power": "120",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Aqua-Jet",
    "type": "Eau",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Appel Attaque",
    "type": "Insecte",
    "category": "Physique",
    "power": "90",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Appel Défense",
    "type": "Insecte",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Appel Soins",
    "type": "Insecte",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Fracass'Tête",
    "type": "Roche",
    "category": "Physique",
    "power": "150",
    "precision": "80%",
    "pp": "5"
  },
  {
    "name": "Coup Double",
    "type": "Normal",
    "category": "Physique",
    "power": "35",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Hurle-Temps",
    "type": "Dragon",
    "category": "Spéciale",
    "power": "150",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Spatio-Rift",
    "type": "Dragon",
    "category": "Spéciale",
    "power": "100",
    "precision": "95%",
    "pp": "5"
  },
  {
    "name": "Danse-Lune",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Presse",
    "type": "Normal",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Vortex Magma",
    "type": "Feu",
    "category": "Spéciale",
    "power": "120",
    "precision": "75%",
    "pp": "5"
  },
  {
    "name": "Trou Noir",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "80%",
    "pp": "10"
  },
  {
    "name": "Fulmigraine",
    "type": "Plante",
    "category": "Spéciale",
    "power": "120",
    "precision": "85%",
    "pp": "5"
  },
  {
    "name": "Vent Mauvais",
    "type": "Spectre",
    "category": "Spéciale",
    "power": "60",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Revenant",
    "type": "Spectre",
    "category": "Physique",
    "power": "120",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Aiguisage",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Garde Large",
    "type": "Roche",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Partage Garde",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Partage Force",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Zone Étrange",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Choc Psy",
    "type": "Psy",
    "category": "Spéciale",
    "power": "80",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Choc Venin",
    "type": "Poison",
    "category": "Spéciale",
    "power": "65",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Allègement",
    "type": "Acier",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Poudre Fureur",
    "type": "Insecte",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Lévikinésie",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Zone Magique",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Anti-Air",
    "type": "Roche",
    "category": "Physique",
    "power": "50",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Yama Arashi",
    "type": "Combat",
    "category": "Physique",
    "power": "40",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Rebondifeu",
    "type": "Feu",
    "category": "Spéciale",
    "power": "70",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Cradovague",
    "type": "Poison",
    "category": "Spéciale",
    "power": "95",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Papillodanse",
    "type": "Insecte",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Tacle Lourd",
    "type": "Acier",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Synchropeine",
    "type": "Psy",
    "category": "Spéciale",
    "power": "70",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Boule Élek",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Détrempage",
    "type": "Eau",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Nitrocharge",
    "type": "Feu",
    "category": "Physique",
    "power": "50",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Enroulement",
    "type": "Poison",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Balayette",
    "type": "Combat",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Bombe Acide",
    "type": "Poison",
    "category": "Spéciale",
    "power": "40",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Tricherie",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "95",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Rayon Simple",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Ten-danse",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Après Vous",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Chant Canon",
    "type": "Normal",
    "category": "Spéciale",
    "power": "60",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Écho",
    "type": "Normal",
    "category": "Spéciale",
    "power": "40",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Attrition",
    "type": "Normal",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Bain de Smog",
    "type": "Poison",
    "category": "Spéciale",
    "power": "50",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Force Ajoutée",
    "type": "Psy",
    "category": "Spéciale",
    "power": "20",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Prévention",
    "type": "Combat",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Interversion",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Ébullition",
    "type": "Eau",
    "category": "Spéciale",
    "power": "80",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Exuviation",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Vibra Soin",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Châtiment",
    "type": "Spectre",
    "category": "Spéciale",
    "power": "50",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Chute Libre",
    "type": "Vol",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Chgt Vitesse",
    "type": "Acier",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Projection",
    "type": "Combat",
    "category": "Physique",
    "power": "60",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Calcination",
    "type": "Feu",
    "category": "Spéciale",
    "power": "30",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "À la Queue",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Acrobatie",
    "type": "Vol",
    "category": "Physique",
    "power": "55",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Copie-Type",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Vengeance",
    "type": "Normal",
    "category": "Physique",
    "power": "70",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Tout ou Rien",
    "type": "Combat",
    "category": "Spéciale",
    "power": "—",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Passe-Cadeau",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Feu d'Enfer",
    "type": "Feu",
    "category": "Spéciale",
    "power": "100",
    "precision": "50%",
    "pp": "5"
  },
  {
    "name": "Aire d'Eau",
    "type": "Eau",
    "category": "Spéciale",
    "power": "50",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Aire de Feu",
    "type": "Feu",
    "category": "Spéciale",
    "power": "50",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Aire d'Herbe",
    "type": "Plante",
    "category": "Spéciale",
    "power": "50",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Change Éclair",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "70",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Survinsecte",
    "type": "Insecte",
    "category": "Spéciale",
    "power": "30",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Piétisol",
    "type": "Sol",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Souffle Glacé",
    "type": "Glace",
    "category": "Spéciale",
    "power": "40",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Draco-Queue",
    "type": "Dragon",
    "category": "Physique",
    "power": "60",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Rengorgement",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Toile Élek",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "55",
    "precision": "95%",
    "pp": "15"
  },
  {
    "name": "Éclair Fou",
    "type": "Électrik",
    "category": "Physique",
    "power": "90",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Tunnelier",
    "type": "Sol",
    "category": "Physique",
    "power": "80",
    "precision": "95%",
    "pp": "10"
  },
  {
    "name": "Double Baffe",
    "type": "Dragon",
    "category": "Physique",
    "power": "40",
    "precision": "90%",
    "pp": "15"
  },
  {
    "name": "Crèvecœur",
    "type": "Psy",
    "category": "Physique",
    "power": "60",
    "precision": "100%",
    "pp": "25"
  },
  {
    "name": "Encornebois",
    "type": "Plante",
    "category": "Physique",
    "power": "75",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Lame Sainte",
    "type": "Combat",
    "category": "Physique",
    "power": "90",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Coquilame",
    "type": "Eau",
    "category": "Physique",
    "power": "75",
    "precision": "95%",
    "pp": "10"
  },
  {
    "name": "Tacle Feu",
    "type": "Feu",
    "category": "Physique",
    "power": "—",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Phytomixeur",
    "type": "Plante",
    "category": "Spéciale",
    "power": "65",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Bulldoboule",
    "type": "Insecte",
    "category": "Physique",
    "power": "65",
    "precision": "100%",
    "pp": "20"
  },
  {
    "name": "Cotogarde",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Explonuit",
    "type": "Ténèbres",
    "category": "Spéciale",
    "power": "85",
    "precision": "95%",
    "pp": "10"
  },
  {
    "name": "Frappe Psy",
    "type": "Psy",
    "category": "Spéciale",
    "power": "100",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Plumo-Queue",
    "type": "Normal",
    "category": "Physique",
    "power": "25",
    "precision": "85%",
    "pp": "10"
  },
  {
    "name": "Vent Violent",
    "type": "Vol",
    "category": "Spéciale",
    "power": "120",
    "precision": "70%",
    "pp": "10"
  },
  {
    "name": "Peignée",
    "type": "Normal",
    "category": "Physique",
    "power": "120",
    "precision": "100%",
    "pp": "15"
  },
  {
    "name": "Lancécrou",
    "type": "Acier",
    "category": "Physique",
    "power": "50",
    "precision": "85%",
    "pp": "15"
  },
  {
    "name": "Incendie",
    "type": "Feu",
    "category": "Spéciale",
    "power": "100",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Techno Buster",
    "type": "Normal",
    "category": "Spéciale",
    "power": "85",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Chant Antique",
    "type": "Normal",
    "category": "Spéciale",
    "power": "75",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Lame Ointe",
    "type": "Combat",
    "category": "Spéciale",
    "power": "85",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Ère Glaciaire",
    "type": "Glace",
    "category": "Spéciale",
    "power": "65",
    "precision": "95%",
    "pp": "10"
  },
  {
    "name": "Charge Foudre",
    "type": "Électrik",
    "category": "Physique",
    "power": "130",
    "precision": "85%",
    "pp": "5"
  },
  {
    "name": "Flamme Bleue",
    "type": "Feu",
    "category": "Spéciale",
    "power": "130",
    "precision": "85%",
    "pp": "5"
  },
  {
    "name": "Danse du Feu",
    "type": "Feu",
    "category": "Spéciale",
    "power": "80",
    "precision": "100%",
    "pp": "10"
  },
  {
    "name": "Aboiement",
    "type": "Ténèbres",
    "category": "Spéciale",
    "power": "55",
    "precision": "95%",
    "pp": "15"
  },
  {
    "name": "Chute Glace",
    "type": "Glace",
    "category": "Physique",
    "power": "85",
    "precision": "90%",
    "pp": "10"
  },
  {
    "name": "Coup Victoire",
    "type": "Feu",
    "category": "Physique",
    "power": "180",
    "precision": "95%",
    "pp": "5"
  },
  {
    "name": "Flamme Croix",
    "type": "Feu",
    "category": "Spéciale",
    "power": "100",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Éclair Croix",
    "type": "Électrik",
    "category": "Physique",
    "power": "100",
    "precision": "100%",
    "pp": "5"
  },
  {
    "name": "Éclair Gelé",
    "type": "Glace",
    "category": "Physique",
    "power": "140",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Feu Glacé",
    "type": "Glace",
    "category": "Spéciale",
    "power": "140",
    "precision": "90%",
    "pp": "5"
  },
  {
    "name": "Bang Sonique",
    "type": "Normal",
    "category": "Spéciale",
    "power": "140",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Bouclier Royal",
    "type": "Acier",
    "category": "Statut",
    "power": "—",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Brume Capiteuse",
    "type": "Fée",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Câlinerie",
    "type": "Fée",
    "category": "Physique",
    "power": "90",
    "precision": "90",
    "pp": "10"
  },
  {
    "name": "Camaraderie",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Célébration",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "40"
  },
  {
    "name": "Champ Brumeux",
    "type": "Fée",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Champ Électrifié",
    "type": "Électrik",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Champ Herbu",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Confidence",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Dard Mortel",
    "type": "Insecte",
    "category": "Physique",
    "power": "30",
    "precision": "100",
    "pp": "25"
  },
  {
    "name": "DélugePlasmique",
    "type": "Électrik",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "25"
  },
  {
    "name": "Dernier Mot",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "Éclat Magique",
    "type": "Fée",
    "category": "Spéciale",
    "power": "80",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Électrisation",
    "type": "Électrik",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Éructation",
    "type": "Poison",
    "category": "Spéciale",
    "power": "120",
    "precision": "90",
    "pp": "10"
  },
  {
    "name": "Étrennes",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Fertilisation",
    "type": "Sol",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Feu Ensorcelé",
    "type": "Feu",
    "category": "Spéciale",
    "power": "65",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Flying Press",
    "type": "Combat",
    "category": "Physique",
    "power": "85",
    "precision": "95",
    "pp": "10"
  },
  {
    "name": "Force Chtonienne",
    "type": "Sol",
    "category": "Physique",
    "power": "90",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Frotte-Frimousse",
    "type": "Électrik",
    "category": "Physique",
    "power": "20",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "Garde Florale",
    "type": "Fée",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Géo-Contrôle",
    "type": "Fée",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Halloween",
    "type": "Spectre",
    "category": "Statut",
    "power": "—",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "Hantise",
    "type": "Spectre",
    "category": "Physique",
    "power": "90",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Harcèlement",
    "type": "Insecte",
    "category": "Spéciale",
    "power": "20",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "Jet de Vapeur",
    "type": "Eau",
    "category": "Spéciale",
    "power": "110",
    "precision": "90",
    "pp": "5"
  },
  {
    "name": "Lyophilisation",
    "type": "Glace",
    "category": "Spéciale",
    "power": "70",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "Magné-Contrôle",
    "type": "Électrik",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Mains Jointes",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "40"
  },
  {
    "name": "Maléfice Sylvain",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "Mort-Ailes",
    "type": "Vol",
    "category": "Spéciale",
    "power": "80",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Nuée de Poudre",
    "type": "Insecte",
    "category": "Statut",
    "power": "—",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "Ondes Étranges",
    "type": "Électrik",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Orage Adamantin",
    "type": "Roche",
    "category": "Physique",
    "power": "100",
    "precision": "95",
    "pp": "5"
  },
  {
    "name": "Parabocharge",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "50",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "Pico-Défense",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Piège de Venin",
    "type": "Poison",
    "category": "Statut",
    "power": "—",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "Poing Boost",
    "type": "Combat",
    "category": "Physique",
    "power": "40",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "Pouvoir Lunaire",
    "type": "Fée",
    "category": "Spéciale",
    "power": "95",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Râle Mâle",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "100",
    "pp": "30"
  },
  {
    "name": "Regard Touchant",
    "type": "Fée",
    "category": "Statut",
    "power": "—",
    "precision": "100",
    "pp": "30"
  },
  {
    "name": "Renversement",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Retenue",
    "type": "Normal",
    "category": "Physique",
    "power": "40",
    "precision": "100",
    "pp": "40"
  },
  {
    "name": "Sheauriken",
    "type": "Eau",
    "category": "Spéciale",
    "power": "15",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Tatamigaeshi",
    "type": "Combat",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Tempête Florale",
    "type": "Plante",
    "category": "Physique",
    "power": "90",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Toile Gluante",
    "type": "Insecte",
    "category": "Statut",
    "power": "—",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "TrouDimensionnel",
    "type": "Psy",
    "category": "Spéciale",
    "power": "80",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Vampibaiser",
    "type": "Fée",
    "category": "Spéciale",
    "power": "50",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Vent Féérique",
    "type": "Fée",
    "category": "Spéciale",
    "power": "40",
    "precision": "100",
    "pp": "30"
  },
  {
    "name": "Verrou Enchanté",
    "type": "Fée",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Vigilance",
    "type": "Fée",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Voix Enjôleuse",
    "type": "Fée",
    "category": "Spéciale",
    "power": "40",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Draco Ascension",
    "type": "Vol",
    "category": "Physique",
    "power": "120",
    "precision": "100",
    "pp": "5"
  },
  {
    "name": "Furie Dimension",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "100",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Lame Pangéenne",
    "type": "Sol",
    "category": "Physique",
    "power": "120",
    "precision": "85",
    "pp": "10"
  },
  {
    "name": "Onde Originelle",
    "type": "Eau",
    "category": "Spéciale",
    "power": "110",
    "precision": "85",
    "pp": "10"
  },
  {
    "name": "Affilage",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "30"
  },
  {
    "name": "Amass'Sable",
    "type": "Sol",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Ancrage",
    "type": "Acier",
    "category": "Physique",
    "power": "80",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "Aqua-Brèche",
    "type": "Eau",
    "category": "Physique",
    "power": "85",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Aria de l'Écume",
    "type": "Eau",
    "category": "Spéciale",
    "power": "90",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Arrogance",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "20",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Bec-Canon",
    "type": "Vol",
    "category": "Physique",
    "power": "100",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Botte Sucrette",
    "type": "Plante",
    "category": "Physique",
    "power": "70",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Boule Pollen",
    "type": "Insecte",
    "category": "Spéciale",
    "power": "90",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Blockhaus",
    "type": "Poison",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Canon Floral",
    "type": "Fée",
    "category": "Spéciale",
    "power": "130",
    "precision": "90",
    "pp": "5"
  },
  {
    "name": "Carapiège",
    "type": "Feu",
    "category": "Spéciale",
    "power": "150",
    "precision": "100",
    "pp": "5"
  },
  {
    "name": "Cavalerie Lourde",
    "type": "Sol",
    "category": "Physique",
    "power": "95",
    "precision": "95",
    "pp": "10"
  },
  {
    "name": "Centrifugifle",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "60",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "Champ Psychique",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Choc Météore",
    "type": "Acier",
    "category": "Physique",
    "power": "100",
    "precision": "100",
    "pp": "5"
  },
  {
    "name": "Clepto-Mânes",
    "type": "Spectre",
    "category": "Physique",
    "power": "90",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Coup Varia-Type",
    "type": "Normal",
    "category": "Physique",
    "power": "90",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Danse Éveil",
    "type": "Normal",
    "category": "Spéciale",
    "power": "90",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Dark Lariat",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "85",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Draco-Marteau",
    "type": "Dragon",
    "category": "Physique",
    "power": "90",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Électrikipik",
    "type": "Électrik",
    "category": "Physique",
    "power": "80",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Engrenage",
    "type": "Acier",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Escarmouche",
    "type": "Insecte",
    "category": "Physique",
    "power": "90",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Estocorne",
    "type": "Acier",
    "category": "Physique",
    "power": "70",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Exécu-Son",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "80",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Feuillage",
    "type": "Plante",
    "category": "Physique",
    "power": "40",
    "precision": "100",
    "pp": "40"
  },
  {
    "name": "Flamme Ultime",
    "type": "Feu",
    "category": "Spéciale",
    "power": "130",
    "precision": "100",
    "pp": "5"
  },
  {
    "name": "Fil Toxique",
    "type": "Poison",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Fouet de Feu",
    "type": "Feu",
    "category": "Physique",
    "power": "80",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Furie-Bond",
    "type": "Insecte",
    "category": "Physique",
    "power": "80",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Ire de la Nature",
    "type": "Fée",
    "category": "Spéciale",
    "power": "—",
    "precision": "90",
    "pp": "10"
  },
  {
    "name": "Lame Solaire",
    "type": "Plante",
    "category": "Physique",
    "power": "125",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Larme à l'Œil",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Laser Prisme",
    "type": "Psy",
    "category": "Spéciale",
    "power": "160",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Marteau de Glace",
    "type": "Glace",
    "category": "Physique",
    "power": "100",
    "precision": "90",
    "pp": "10"
  },
  {
    "name": "Myria-Flèches",
    "type": "Sol",
    "category": "Physique",
    "power": "90",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Myria-Vagues",
    "type": "Sol",
    "category": "Physique",
    "power": "90",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Os'Ombre",
    "type": "Spectre",
    "category": "Physique",
    "power": "85",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Permuvitesse",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Projecteur",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Psycho-Croc",
    "type": "Psy",
    "category": "Physique",
    "power": "85",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Purification",
    "type": "Poison",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Rayon Spectral",
    "type": "Spectre",
    "category": "Spéciale",
    "power": "100",
    "precision": "100",
    "pp": "5"
  },
  {
    "name": "Sanction Suprême",
    "type": "Dragon",
    "category": "Spéciale",
    "power": "100",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Soin Floral",
    "type": "Fée",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Sommation",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Tisse Ombre",
    "type": "Spectre",
    "category": "Physique",
    "power": "80",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Trépignement",
    "type": "Sol",
    "category": "Physique",
    "power": "75",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Vibrécaille",
    "type": "Dragon",
    "category": "Spéciale",
    "power": "110",
    "precision": "100",
    "pp": "5"
  },
  {
    "name": "Vif Roc",
    "type": "Roche",
    "category": "Physique",
    "power": "40",
    "precision": "100",
    "pp": "20"
  },
  {
    "name": "Voile Aurore",
    "type": "Glace",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Vol-Force",
    "type": "Plante",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Caboche-Kaboum",
    "type": "Feu",
    "category": "Spéciale",
    "power": "150",
    "precision": "100",
    "pp": "5"
  },
  {
    "name": "Photo-Geyser",
    "type": "Psy",
    "category": "Spéciale",
    "power": "100",
    "precision": "100",
    "pp": "5"
  },
  {
    "name": "Plasma Punch",
    "type": "Électrik",
    "category": "Physique",
    "power": "100",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Écrous d'Poing",
    "type": "Acier",
    "category": "Physique",
    "power": "60",
    "precision": "100",
    "pp": "5"
  },
  {
    "name": "Évo-Chardasso",
    "type": "Normal",
    "category": "Physique",
    "power": "_",
    "precision": "_",
    "pp": "20"
  },
  {
    "name": "Évo-Congélo",
    "type": "Glace",
    "category": "Spéciale",
    "power": "90",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Évo-Dynamo",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "90",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Évo-Écolo",
    "type": "Plante",
    "category": "Physique",
    "power": "90",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Évo-Fabulo",
    "type": "Fée",
    "category": "Spéciale",
    "power": "90",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Évo-Flambo",
    "type": "Feu",
    "category": "Physique",
    "power": "90",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Évo-Psycho",
    "type": "Psy",
    "category": "Spéciale",
    "power": "90",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Évo-Ténébro",
    "type": "Ténèbres",
    "category": "Spéciale",
    "power": "90",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Évo-Thalasso",
    "type": "Eau",
    "category": "Spéciale",
    "power": "90",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Pika-Fracas",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "_",
    "precision": "_",
    "pp": "20"
  },
  {
    "name": "Pika-Piqué",
    "type": "Vol",
    "category": "Physique",
    "power": "90",
    "precision": "95",
    "pp": "15"
  },
  {
    "name": "Pika-Splash",
    "type": "Eau",
    "category": "Spéciale",
    "power": "90",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Pika-Sprint",
    "type": "Électrik",
    "category": "Physique",
    "power": "50",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Abattage",
    "type": "Dragon",
    "category": "Physique",
    "power": "60",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Acide Malique",
    "type": "Plante",
    "category": "Spéciale",
    "power": "80",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Aegis Maxima",
    "type": "Acier",
    "category": "Physique",
    "power": "100",
    "precision": "100",
    "pp": "5"
  },
  {
    "name": "Ballon Brûlant",
    "type": "Feu",
    "category": "Physique",
    "power": "120",
    "precision": "90",
    "pp": "5"
  },
  {
    "name": "Big Splash",
    "type": "Combat",
    "category": "Physique",
    "power": "80",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Blocage",
    "type": "Ténèbres",
    "category": "Statut",
    "power": "—",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Branchicrok",
    "type": "Eau",
    "category": "Physique",
    "power": "85",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Canon Dynamax",
    "type": "Dragon",
    "category": "Spéciale",
    "power": "100",
    "precision": "100",
    "pp": "5"
  },
  {
    "name": "Change-Côté",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Choc Émotionnel",
    "type": "Fée",
    "category": "Physique",
    "power": "75",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Croque Fort",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "80",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Dracacophonie",
    "type": "Dragon",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Draco-Flèches",
    "type": "Dragon",
    "category": "Physique",
    "power": "50",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Fontaine de Vie",
    "type": "Eau",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Force G",
    "type": "Plante",
    "category": "Physique",
    "power": "80",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Fourbette",
    "type": "Ténèbres",
    "category": "Physique",
    "power": "80",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Garde-à-Joues",
    "type": "Normal",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Gladius Maximus",
    "type": "Acier",
    "category": "Physique",
    "power": "100",
    "precision": "100",
    "pp": "5"
  },
  {
    "name": "Goudronnage",
    "type": "Roche",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Joute Astrale",
    "type": "Combat",
    "category": "Physique",
    "power": "150",
    "precision": "100",
    "pp": "5"
  },
  {
    "name": "Laser Infinimax",
    "type": "Dragon",
    "category": "Spéciale",
    "power": "160",
    "precision": "90",
    "pp": "5"
  },
  {
    "name": "Métalaser",
    "type": "Acier",
    "category": "Spéciale",
    "power": "145",
    "precision": "95",
    "pp": "5"
  },
  {
    "name": "Nappage",
    "type": "Fée",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "15"
  },
  {
    "name": "Octoprise",
    "type": "Combat",
    "category": "Statut",
    "power": "—",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Overdrive",
    "type": "Électrik",
    "category": "Spéciale",
    "power": "80",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Roue Libre",
    "type": "Électrik",
    "category": "Physique",
    "power": "110",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Poudre Magique",
    "type": "Psy",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "20"
  },
  {
    "name": "Prise de Bec",
    "type": "Électrik",
    "category": "Physique",
    "power": "85",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Tambour Battant",
    "type": "Plante",
    "category": "Physique",
    "power": "80",
    "precision": "100",
    "pp": "10"
  },
  {
    "name": "Tapotige",
    "type": "Plante",
    "category": "Physique",
    "power": "40",
    "precision": "100",
    "pp": "40"
  },
  {
    "name": "Thérémonie",
    "type": "Normal",
    "category": "Spéciale",
    "power": "—",
    "precision": "—",
    "pp": "10"
  },
  {
    "name": "Tir de Précision",
    "type": "Eau",
    "category": "Spéciale",
    "power": "80",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Troquenard",
    "type": "Plante",
    "category": "Physique",
    "power": "35",
    "precision": "100",
    "pp": "15"
  },
  {
    "name": "Ultime Bastion",
    "type": "Combat",
    "category": "Statut",
    "power": "—",
    "precision": "—",
    "pp": "5"
  },
  {
    "name": "Vapeur Féérique",
    "type": "Fée",
    "category": "Spéciale",
    "power": "90",
    "precision": "95",
    "pp": "10"
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { sequelize } = queryInterface;
    await sequelize.transaction(async (transaction) => {
      const query = `
        SELECT *
        FROM "Types";
      `;
      const types = await sequelize.query(
        query,
        {
          type: sequelize.QueryTypes.SELECT,
          transaction,
        },
      );

      await queryInterface.createTable('Moves', {
        id: {
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1,
          primaryKey: true,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING(25),
        },
        typeId: {
          allowNull: false,
          type: Sequelize.UUID,
          references: {
            model: 'Types',
            key: 'id'
          },
        },
        category: Sequelize.ENUM('physical', 'special', 'status'),
        power: Sequelize.INTEGER,
        accuracyPercentage: Sequelize.INTEGER,
        powerPoints: Sequelize.INTEGER,
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
      }, { transaction });

      await queryInterface.addIndex(
        'Moves',
        ['name'],
        {
          indicesType: 'UNIQUE',
          name: 'Moves_name_unique',
          transaction,
        },
      );

      const typesMapping = new Map(types.map(type => [type.name, type.id]));

      const valuesToInsert = MOVES.map((move) => {
        let category;
        if (move.category === 'Physique') {
          category = 'physical';
        } else if (move.category === 'Spéciale') {
          category = 'special';
        } else if (move.category === 'Statut') {
          category = 'status'
        } else {
          throw new Error(`Unknown category: ${move.category}`);
        }

        let { power } = move;
        if (power === '—' || power === '_') {
          power = null;
        } else if (power === 'OHKO') {
          power = 999;
        } else if (/^\d+$/.test(power)) {
          power = parseInt(power);
        } else if (/^\d+ \(x ?\d\)/.test(power)) {
          const [, basePower, nbTimeExecuted] = /^(\d+) \(x ?(\d)\)/.exec(power);
          power = parseInt(basePower) * parseInt(nbTimeExecuted);
        } else {
          throw new Error(`Unknown power: ${power}`);
        }


        let { precision } = move;
        if (precision === '—' || precision === '_') {
          precision = null;
        } else if (/^\d+\%?$/.test(precision)) {
          const [, precisionNb] = /^(\d+)\%?$/.exec(precision);
          precision = parseInt(precisionNb);
        } else {
          throw new Error(`Unknown precision: ${precision}`);
        }

        return {
          id: uuid.v1(),
          name: move.name,
          typeId: typesMapping.get(move.type),
          category,
          power,
          accuracyPercentage: precision,
          powerPoints: move.pp === '—' ? null : parseInt(move.pp),
        };
      });


      const valuesToInsertArray = [];
      while(valuesToInsert.length > 0) {
        const subArray = valuesToInsert.splice(0, 50);
        valuesToInsertArray.push(subArray);
      }

      for (const values of valuesToInsertArray) {
        await queryInterface.bulkInsert(
          'Moves',
          values.map(val => ({
            ...val,
            createdAt: Sequelize.fn('NOW'),
            updatedAt: Sequelize.fn('NOW'),
          })),
          { transaction },
        );
      }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Moves');
  }
};
