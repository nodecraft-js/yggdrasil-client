"use strict";

import { YggdrasilAgent } from "../../types/agent";

/**
 * The JSON object that the authentication server will receive when accessing
 * the "authenticate" endpoint via `POST` request.
 * 
 * @since 0.0.1
 * @see {@link RawYggdrasilClient.authenticate|`RawYggdrasilClient#authenticate`}
 */
export interface AuthenticatePayload
{
    /**
     * A unique identifier for this Yggdrasil client.
     * 
     * @remarks
     * The authentication server will generate one randomly if none is provided.
     */
    clientToken?: string;

    /**
     * The information about the service that this Yggdrasil client serve for.
     * 
     * @see {@link AuthenticateResponse.availableProfiles|`AuthenticateResponse#availableProfiles`}
     * @see {@link AuthenticateResponse.selectedProfile|`AuthenticateResponse#selectedProfile`}
     */
    agent?: YggdrasilAgent;

    /**
     * The username of the user.
     * 
     * @remarks
     * The username could be either an email address, or player's name for
     * unmigrated accounts.
     */
    username: string;

    /**
     * The password of the user.
     */
    password: string;

    /**
     * Determine whether to request the authentication server to also return the
     * information of the user.
     * 
     * @see {@link AuthenticateResponse.user|`AuthenticateResponse#user`}
     * 
     * @default
     * false
     */
    requestUser?: boolean;
}

export default AuthenticatePayload;
