exports.BattleScripts = {
        updateLearnsets: function(set) {
                for (var i in this.data.Learnsets)
                var template = this.getTemplate(set.types);
                if (template.hasType('Normal')) {
                        this.modData('Learnsets', i).learnset.extremespeed = ['5L0'];
                        this.modData('Learnsets', i).learnset.hypervoice = ['5L0'];
                        this.modData('Learnsets', i).learnset.whirlwind = ['5L0'];
                        this.modData('Learnsets', i).learnset.rapidspin = ['5L0'];
                } else if (template.hasType('Fire')) {
                        this.modData('Learnsets', i).learnset.flareblitz = ['5L0'];
                        this.modData('Learnsets', i).learnset.fireblast = ['5L0'];
                        this.modData('Learnsets', i).learnset.willowisp = ['5L0'];
                        this.modData('Learnsets', i).learnset.flamecharge = ['5L0'];
                } else if (pokemon.hasType('Grass')) {
                        this.modData('Learnsets', i).learnset.woodhammer = ['5L0'];
                        this.modData('Learnsets', i).learnset.leafstorm = ['5L0'];
                        this.modData('Learnsets', i).learnset.leechseed = ['5L0'];
                        this.modData('Learnsets', i).learnset.bulletseed = ['5L0'];
                } else if (template.hasType('Water')) {
                        this.modData('Learnsets', i).learnset.waterfall = ['5L0'];
                        this.modData('Learnsets', i).learnset.surf = ['5L0'];
                        this.modData('Learnsets', i).learnset.soak = ['5L0'];
                        this.modData('Learnsets', i).learnset.aquajet = ['5L0'];
                } else if (template.hasType('Electric')) {
                        this.modData('Learnsets', i).learnset.wildcharge = ['5L0'];
                        this.modData('Learnsets', i).learnset.thunderbolt = ['5L0'];
                        this.modData('Learnsets', i).learnset.thunderwave = ['5L0'];
                        this.modData('Learnsets', i).learnset.charge = ['5L0'];
                } else if (template.hasType('Ground')) {
                        this.modData('Learnsets', i).learnset.earthquake = ['5L0'];
                        this.modData('Learnsets', i).learnset.earthpower = ['5L0'];
                        this.modData('Learnsets', i).learnset.spikes = ['5L0'];
                        this.modData('Learnsets', i).learnset.bonemerang = ['5L0'];
                } else if (template.hasType('Poison')) {
                        this.modData('Learnsets', i).learnset.gunkshot = ['5L0'];
                        this.modData('Learnsets', i).learnset.sludgewave = ['5L0'];
                        this.modData('Learnsets', i).learnset.toxicspikes = ['5L0'];
                        this.modData('Learnsets', i).learnset.coil = ['5L0'];
                } else if (template.hasType('Bug')) {
                        this.modData('Learnsets', i).learnset.megahorn = ['5L0'];
                        this.modData('Learnsets', i).learnset.bugbuzz = ['5L0'];
                        this.modData('Learnsets', i).learnset.quiverdance = ['5L0'];
                        this.modData('Learnsets', i).learnset.bugbite = ['5L0'];
                } else if (template.hasType('Ice')) {
                        this.modData('Learnsets', i).learnset.iciclecrash = ['5L0'];
                        this.modData('Learnsets', i).learnset.icebeam = ['5L0'];
                        this.modData('Learnsets', i).learnset.haze = ['5L0'];
                        this.modData('Learnsets', i).learnset.iceshard = ['5L0'];
                } else if (template.hasType('Fighting')) {
                        this.modData('Learnsets', i).learnset.hijumpkick = ['5L0'];
                        this.modData('Learnsets', i).learnset.aurasphere = ['5L0'];
                        this.modData('Learnsets', i).learnset.bulkup = ['5L0'];
                        this.modData('Learnsets', i).learnset.drainpunch = ['5L0'];
                } else if (template.hasType('Psychic')) {
                        this.modData('Learnsets', i).learnset.zenheadbutt = ['5L0'];
                        this.modData('Learnsets', i).learnset.psychic = ['5L0'];
                        this.modData('Learnsets', i).learnset.trickroom = ['5L0'];
                        this.modData('Learnsets', i).learnset.cosmicpower = ['5L0'];
                } else if (template.hasType('Flying')) {
                        this.modData('Learnsets', i).learnset.bravebird = ['5L0'];
                        this.modData('Learnsets', i).learnset.hurricane = ['5L0'];
                        this.modData('Learnsets', i).learnset.tailwind = ['5L0'];
                        this.modData('Learnsets', i).learnset.airslash = ['5L0'];
                } else if (template.hasType('Rock')) {
                        this.modData('Learnsets', i).learnset.stoneedge = ['5L0'];
                        this.modData('Learnsets', i).learnset.paleowave = ['5L0'];
                        this.modData('Learnsets', i).learnset.stealthrock = ['5L0'];
                        this.modData('Learnsets', i).learnset.rockblast = ['5L0'];
                } else if (template.hasType('Ghost')) {
                        this.modData('Learnsets', i).learnset.shadowstrike = ['5L0'];
                        this.modData('Learnsets', i).learnset.shadowball = ['5L0'];
                        this.modData('Learnsets', i).learnset.destinybond = ['5L0'];
                        this.modData('Learnsets', i).learnset.nightshade = ['5L0'];
                } else if (template.hasType('Dark')) {
                        this.modData('Learnsets', i).learnset.crunch = ['5L0'];
                        this.modData('Learnsets', i).learnset.darkpulse = ['5L0'];
                        this.modData('Learnsets', i).learnset.nastyplot = ['5L0'];
                        this.modData('Learnsets', i).learnset.fling = ['5L0'];
                } else if (template.hasType('Steel')) {
                        this.modData('Learnsets', i).learnset.ironhead = ['5L0'];
                        this.modData('Learnsets', i).learnset.flashcannon = ['5L0'];
                        this.modData('Learnsets', i).learnset.autotomize = ['5L0'];
                        this.modData('Learnsets', i).learnset.geargrind = ['5L0'];
                } else if (template.hasType('Dragon')) {
                        this.modData('Learnsets', i).learnset.outrage = ['5L0'];
                        this.modData('Learnsets', i).learnset.dracometeor = ['5L0'];
                        this.modData('Learnsets', i).learnset.dragondance = ['5L0'];
                        this.modData('Learnsets', i).learnset.dragontail = ['5L0'];
                }
        }
};
