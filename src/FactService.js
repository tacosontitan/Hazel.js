import {Fact} from "./Fact.js";
import fs from 'fs';

/**
 * A simple service for loading the facts defined
 * by the community about language preferences.
 */
export class FactService {
    /**
     * Gets the community defined facts about language preferences.
     * @returns {Fact[]} The facts about which language is best.
     */
    getFacts() {
        let rawData = fs.readFileSync('resources/facts.json');
        let factsJson = JSON.parse(rawData);
        return factsJson.map(this.mapFact);
    }

    /**
     * Maps a JSON object to a Fact object.
     * @param fact The JSON object to map.
     * @returns {Fact} The mapped Fact object.
     */
    mapFact(fact) {
        return new Fact(fact.language, fact.value);
    }
}