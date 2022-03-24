// Applies an attract force towards centerOfMass
export default class Attract {

    static RequiresUpdate = true;
    static RunInteraction(scn, options) {

        let attraction = 0.001;

        let iteration = 0;

        if (Object.keys(options).length > 0){
            ({ iteration, attraction } = options);
        }

        if (iteration === 0 || iteration == null) {
            const attract = (bodyA, bodyB) => {
                const force = new scn.Phaser.Math.Vector2(bodyA.position).subtract(bodyB.position);
                 return {
                     x: force.x * attraction,
                     y: force.y * attraction    
                 };
             }

            for (let i = 0; i < scn.flubbers.length; i++) {
                const flubberBody = scn.flubbers[i];
                if (flubberBody === scn.centerOfMass) {
                    flubberBody.plugin = {
                        attractors: [
                            attract
                        ]
                    }
                    continue;
                }
            }
        } else {
            
        }
        
    }
}