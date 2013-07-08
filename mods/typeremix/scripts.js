exports.BattleScripts = {
        updateLearnsets: function(pokemon) {
                if (pokemon.hasType('Normal')) {
                        this.modData('Learnsets', 'pokemon').learnset.extremespeed = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.hypervoice = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.whirlwind = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.rapidspin = ['5L0'];
                } else if (pokemon.hasType('Fire')) {
                        this.modData('Learnsets', 'pokemon').learnset.flareblitz = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.fireblast = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.willowisp = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.flamecharge = ['5L0'];
                } else if (pokemon.hasType('Grass')) {
                        this.modData('Learnsets', 'pokemon').learnset.woodhammer = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.leafstorm = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.leechseed = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.bulletseed = ['5L0'];
                } else if (pokemon.hasType('Water')) {
                        this.modData('Learnsets', 'pokemon').learnset.waterfall = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.surf = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.soak = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.aquajet = ['5L0'];
                } else if (pokemon.hasType('Electric')) {
                        this.modData('Learnsets', 'pokemon').learnset.wildcharge = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.thunderbolt = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.thunderwave = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.charge = ['5L0'];
                } else if (pokemon.hasType('Ground')) {
                        this.modData('Learnsets', 'pokemon').learnset.earthquake = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.earthpower = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.spikes = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.bonemerang = ['5L0'];
                } else if (pokemon.hasType('Poison')) {
                        this.modData('Learnsets', 'pokemon').learnset.gunkshot = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.sludgewave = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.toxicspikes = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.coil = ['5L0'];
                } else if (pokemon.hasType('Bug')) {
                        this.modData('Learnsets', 'pokemon').learnset.megahorn = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.bugbuzz = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.quiverdance = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.bugbite = ['5L0'];
                } else if (pokemon.hasType('Ice')) {
                        this.modData('Learnsets', 'pokemon').learnset.iciclecrash = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.icebeam = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.haze = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.iceshard = ['5L0'];
                } else if (pokemon.hasType('Fighting')) {
                        this.modData('Learnsets', 'pokemon').learnset.hijumpkick = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.aurasphere = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.bulkup = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.drainpunch = ['5L0'];
                } else if (pokemon.hasType('Psychic')) {
                        this.modData('Learnsets', 'pokemon').learnset.zenheadbutt = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.psychic = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.trickroom = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.cosmicpower = ['5L0'];
                } else if (pokemon.hasType('Flying')) {
                        this.modData('Learnsets', 'pokemon').learnset.bravebird = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.hurricane = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.tailwind = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.airslash = ['5L0'];
                } else if (pokemon.hasType('Rock')) {
                        this.modData('Learnsets', 'pokemon').learnset.stoneedge = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.paleowave = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.stealthrock = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.rockblast = ['5L0'];
                } else if (pokemon.hasType('Ghost')) {
                        this.modData('Learnsets', 'pokemon').learnset.shadowstrike = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.shadowball = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.destinybond = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.nightshade = ['5L0'];
                } else if (pokemon.hasType('Dark')) {
                        this.modData('Learnsets', 'pokemon').learnset.crunch = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.darkpulse = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.nastyplot = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.fling = ['5L0'];
                } else if (pokemon.hasType('Steel')) {
                        this.modData('Learnsets', 'pokemon').learnset.ironhead = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.flashcannon = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.autotomize = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.geargrind = ['5L0'];
                } else if (pokemon.hasType('Dragon')) {
                        this.modData('Learnsets', 'pokemon').learnset.outrage = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.dracometeor = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.dragondance = ['5L0'];
                        this.modData('Learnsets', 'pokemon').learnset.dragontail = ['5L0'];
                }
        }
};
