"use strict";

import { YggdrasilProfile } from "src/yggdrasil/types/profile";

/**
 * The JSON object that the authentication server will receive when accessing
 * the "refresh" endpoint via `POST` request.
 * 
 * @since 0.0.1
 * @see {@link RawYggdrasilClient.validate|`RawYggdrasilClient#validate`}
 */
export interface RefreshPayload
{
    /**
     * A valid unique identifier for a login session.
     */
    accessToken: string;

    /**
     * The unique identifier of a Yggdrasil client.
     * 
     * @remarks
     * The token must be identical to the one used to obtain the {@link accessToken|`accessToken`}.
     */
    clientToken: string;

    /**
     * The profile that the {@link accessToken|`accessToken`} will be linked to.
     */
    selectedProfile?: YggdrasilProfile;

    /**
     * Determine whether to request the authentication server to also return the
     * information of the user.
     * 
     * @default
     * false
     */
    requestUser?: boolean;
}

export default RefreshPayload;
