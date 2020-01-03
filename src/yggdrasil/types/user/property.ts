"use strict";

/**
 * A JSON object that contains extra information of the user.
 * 
 * @since 0.0.1
 * @see {@link YggdrasilUser.properties|`YggdrasilUser#properties`}
 */
export interface PropertyEntry
{
    /**
     * The name of the property.
     * 
     * @remarks
     * The currently known values were:
     * * `preferredLanguage`
     * * `twitch_access_token`
     */
    name: string;

    /**
     * The value of the property.
     */
    value: string;
}

export default PropertyEntry;
