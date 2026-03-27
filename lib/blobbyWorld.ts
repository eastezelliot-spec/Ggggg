class BlobbyWorld {
    constructor() {
        this.entities = [];
        this.events = [];
        this.environmentFactors = {};
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    removeEntity(entityId) {
        this.entities = this.entities.filter(entity => entity.id !== entityId);
    }

    addEvent(event) {
        this.events.push(event);
    }

    triggerEvent(eventId) {
        const event = this.events.find(e => e.id === eventId);
        if (event) {
            event.execute(this.entities, this.environmentFactors);
        }
    }

    setEnvironmentalFactor(key, value) {
        this.environmentFactors[key] = value;
    }

    simulate() {
        // Logic for simulation based on events and environmental factors
        for (const entity of this.entities) {
            entity.update(this.environmentFactors);
        }
    }
}

class Entity {
    constructor(id, attributes) {
        this.id = id;
        this.attributes = attributes;
        this.relationships = {};
    }

    update(environmentFactors) {
        // Implement update logic considering environmental factors
    }

    addRelationship(entityId, relationshipType) {
        this.relationships[entityId] = relationshipType;
    }
}

// Example usage:
const world = new BlobbyWorld();
const blob1 = new Entity(1, {name: 'Blob1'});
const blob2 = new Entity(2, {name: 'Blob2'});
world.addEntity(blob1);
world.addEntity(blob2);

// Event example:
world.addEvent({
    id: 'foodAvailable',
    execute: (entities) => {
        // Logic to handle food availability event
    }
});

world.setEnvironmentalFactor('temperature', 22);
world.simulate();