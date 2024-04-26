// Copyright (c) 2024 tacosontitan
// This file is part of the Hazel.js project, which is distributed under the MIT license.
// See LICENSE for more information.

import {Vote} from "./Vote.js";
import fs from 'fs';

/**
 * A simple service for loading the facts defined
 * by the community about language preferences.
 */
export class VoteService {
    /**
     * Gets the community defined votes on language preferences.
     * @returns {Vote[]} The votes about which language is best.
     */
    getVotes() {
        let rawData = fs.readFileSync('resources/votes.json');
        let factsJson = JSON.parse(rawData);
        return factsJson.map(this.mapVote);
    }

    /**
     * Maps a JSON object to a Vote object.
     * @param fact The JSON object to map.
     * @returns {Vote} The mapped Vote object.
     */
    mapVote(fact) {
        return new Vote(fact.language, fact.reason);
    }
}