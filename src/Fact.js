/**
 * Represents a fact as defined by the community.
 */
export class Fact
{
    /**
     * Represents the language the fact is about.
     */
    language;

    /**
     * Represents the value of the fact.
     */
    value;

    /**
     * Creates a new fact with the given language and value.
     * @param language The language the fact is about.
     * @param value The value of the fact.
     */
    constructor(language, value)
    {
        this.language = language;
        this.value = value;
    }
}