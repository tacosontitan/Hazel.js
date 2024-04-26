// Copyright (c) 2024 tacosontitan
// This file is part of the Hazel.js project, which is distributed under the MIT license.
// See LICENSE for more information.

import { VoteService } from "./VoteService.js";

let voteService = new VoteService();
let votes = voteService.getVotes();

for (let vote of votes)
    printFact(vote);

/**
 * Prints the given vote to the console.
 * @param fact The vote to print.
 */
function printFact(vote) {
    let statement = vote.language + ": " + vote.reason;
    console.log(statement);
}