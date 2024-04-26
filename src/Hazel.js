// Copyright (c) 2024 tacosontitan
// This file is part of the Hazel.js project, which is distributed under the MIT license.
// See LICENSE for more information.

import { FactService } from "./FactService.js";

let factService = new FactService();
let facts = factService.getFacts();

for (let fact of facts)
    printFact(fact);

/**
 * Prints the given fact to the console.
 * @param fact The fact to print.
 */
function printFact(fact) {
    let statement = fact.language + ": " + fact.value;
    console.log(statement);
}