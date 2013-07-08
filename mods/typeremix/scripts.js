exports.BattleScripts = {
        updateLearnsets: function(set) {
                var template = this.getTemplate(set.types);
                if (template.hasType('Normal')) {
                        this.modData('Learnsets', template).learnset.extremespeed = ['5L0'];
                        this.modData('Learnsets', template).learnset.hypervoice = ['5L0'];
                        this.modData('Learnsets', template).learnset.whirlwind = ['5L0'];
                        this.modData('Learnsets', template).learnset.rapidspin = ['5L0'];
                } else if (template.hasType('Fire')) {
                        this.modData('Learnsets', template).learnset.flareblitz = ['5L0'];
                        this.modData('Learnsets', template).learnset.fireblast = ['5L0'];
                        this.modData('Learnsets', template).learnset.willowisp = ['5L0'];
                        this.modData('Learnsets', template).learnset.flamecharge = ['5L0'];
                } else if (pokemon.hasType('Grass')) {
                        this.modData('Learnsets', template).learnset.woodhammer = ['5L0'];
                        this.modData('Learnsets', template).learnset.leafstorm = ['5L0'];
                        this.modData('Learnsets', template).learnset.leechseed = ['5L0'];
                        this.modData('Learnsets', template).learnset.bulletseed = ['5L0'];
                } else if (template.hasType('Water')) {
                        this.modData('Learnsets', template).learnset.waterfall = ['5L0'];
                        this.modData('Learnsets', template).learnset.surf = ['5L0'];
                        this.modData('Learnsets', template).learnset.soak = ['5L0'];
                        this.modData('Learnsets', template).learnset.aquajet = ['5L0'];
                } else if (template.hasType('Electric')) {
                        this.modData('Learnsets', template).learnset.wildcharge = ['5L0'];
                        this.modData('Learnsets', template).learnset.thunderbolt = ['5L0'];
                        this.modData('Learnsets', template).learnset.thunderwave = ['5L0'];
                        this.modData('Learnsets', template).learnset.charge = ['5L0'];
                } else if (template.hasType('Ground')) {
                        this.modData('Learnsets', template).learnset.earthquake = ['5L0'];
                        this.modData('Learnsets', template).learnset.earthpower = ['5L0'];
                        this.modData('Learnsets', template).learnset.spikes = ['5L0'];
                        this.modData('Learnsets', template).learnset.bonemerang = ['5L0'];
                } else if (template.hasType('Poison')) {
                        this.modData('Learnsets', template).learnset.gunkshot = ['5L0'];
                        this.modData('Learnsets', template).learnset.sludgewave = ['5L0'];
                        this.modData('Learnsets', template).learnset.toxicspikes = ['5L0'];
                        this.modData('Learnsets', template).learnset.coil = ['5L0'];
                } else if (template.hasType('Bug')) {
                        this.modData('Learnsets', template).learnset.megahorn = ['5L0'];
                        this.modData('Learnsets', template).learnset.bugbuzz = ['5L0'];
                        this.modData('Learnsets', template).learnset.quiverdance = ['5L0'];
                        this.modData('Learnsets', template).learnset.bugbite = ['5L0'];
                } else if (template.hasType('Ice')) {
                        this.modData('Learnsets', template).learnset.iciclecrash = ['5L0'];
                        this.modData('Learnsets', template).learnset.icebeam = ['5L0'];
                        this.modData('Learnsets', template).learnset.haze = ['5L0'];
                        this.modData('Learnsets', template).learnset.iceshard = ['5L0'];
                } else if (template.hasType('Fighting')) {
                        this.modData('Learnsets', template).learnset.hijumpkick = ['5L0'];
                        this.modData('Learnsets', template).learnset.aurasphere = ['5L0'];
                        this.modData('Learnsets', template).learnset.bulkup = ['5L0'];
                        this.modData('Learnsets', template).learnset.drainpunch = ['5L0'];
                } else if (template.hasType('Psychic')) {
                        this.modData('Learnsets', template).learnset.zenheadbutt = ['5L0'];
                        this.modData('Learnsets', template).learnset.psychic = ['5L0'];
                        this.modData('Learnsets', template).learnset.trickroom = ['5L0'];
                        this.modData('Learnsets', template).learnset.cosmicpower = ['5L0'];
                } else if (template.hasType('Flying')) {
                        this.modData('Learnsets', template).learnset.bravebird = ['5L0'];
                        this.modData('Learnsets', template).learnset.hurricane = ['5L0'];
                        this.modData('Learnsets', template).learnset.tailwind = ['5L0'];
                        this.modData('Learnsets', template).learnset.airslash = ['5L0'];
                } else if (template.hasType('Rock')) {
                        this.modData('Learnsets', template).learnset.stoneedge = ['5L0'];
                        this.modData('Learnsets', template).learnset.paleowave = ['5L0'];
                        this.modData('Learnsets', template).learnset.stealthrock = ['5L0'];
                        this.modData('Learnsets', template).learnset.rockblast = ['5L0'];
                } else if (template.hasType('Ghost')) {
                        this.modData('Learnsets', template).learnset.shadowstrike = ['5L0'];
                        this.modData('Learnsets', template).learnset.shadowball = ['5L0'];
                        this.modData('Learnsets', template).learnset.destinybond = ['5L0'];
                        this.modData('Learnsets', template).learnset.nightshade = ['5L0'];
                } else if (template.hasType('Dark')) {
                        this.modData('Learnsets', template).learnset.crunch = ['5L0'];
                        this.modData('Learnsets', template).learnset.darkpulse = ['5L0'];
                        this.modData('Learnsets', template).learnset.nastyplot = ['5L0'];
                        this.modData('Learnsets', template).learnset.fling = ['5L0'];
                } else if (template.hasType('Steel')) {
                        this.modData('Learnsets', template).learnset.ironhead = ['5L0'];
                        this.modData('Learnsets', template).learnset.flashcannon = ['5L0'];
                        this.modData('Learnsets', template).learnset.autotomize = ['5L0'];
                        this.modData('Learnsets', template).learnset.geargrind = ['5L0'];
                } else if (template.hasType('Dragon')) {
                        this.modData('Learnsets', template).learnset.outrage = ['5L0'];
                        this.modData('Learnsets', template).learnset.dracometeor = ['5L0'];
                        this.modData('Learnsets', template).learnset.dragondance = ['5L0'];
                        this.modData('Learnsets', template).learnset.dragontail = ['5L0'];
                }
        }
};
