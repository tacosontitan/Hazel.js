// Copyright (c) 2024 tacosontitan
// This file is part of the Hazel.js project, which is distributed under the MIT license.
// See LICENSE for more information.

/**
 * Represents a vote as defined by the community.
 */
export class Vote
{
    /**
     * Represents the language the vote is for.
     */
    language;

    /**
     * Represents the reason behind the vote.
     */
    reason;

    /**
     * Creates a new vote for the given language and reason.
     * @param language The language the vote is for.
     * @param reason The reason supporting the vote.
     */
    constructor(language, reason)
    {
        this.language = language;
        this.reason = reason;
    }
}