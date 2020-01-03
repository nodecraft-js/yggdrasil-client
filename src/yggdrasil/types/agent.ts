"use strict";

/**
 * The JSON object that contains information of the service that this Yggdrasil
 * client serve for.
 * 
 * @since 0.0.1
 * @see {@link AuthenticatePayload.agent|`AuthenticatePayload#agent`}
 */
export interface YggdrasilAgent
{
    /**
     * The name of the service that this client serve for.
     * 
     * @remarks The currently known values were:
     * * Minecraft
     * * Scrolls
     */
    name: string;

    /**
     * The version of the authentication scheme.
     */
    version: number;
}

export default YggdrasilAgent;
