"use strict";

import {
    YggdrasilProfile,
    YggdrasilUser,
} from "src/yggdrasil/types";

/**
 * The JSON object that the authentication server will return when accessing the
 * "refresh" endpoint via `POST` request.
 * 
 * @since 0.0.1
 * @see {@link RawYggdrasilClient.refresh|`RawYggdrasilClient#refresh`}
 * @see {@link YggdrasilClient.refresh|`YggdrasilClient#refresh`}
 */
export interface RefreshResponse
{
    /**
     * A unique identifier for this login session.
     */
    accessToken: string;

    /**
     * The unique identifier for this Yggdrasil client.
     * 
     * @remarks
     * It is identical to {@link RefreshPayload.clientToken|the one} in the request
     * {@link RefreshPayload|payload}.
     */
    clientToken: string;

    /**
     * The information of the user.
     * 
     * @remarks
     * This field will only presents if {@link RefreshPayload.requestUser|`requestUser`}
     * was `true` in the request {@link RefreshPayload|payload}.
     */
    user?: YggdrasilUser;

    /**
     * The player's profile that this session will use to play the game.
     * 
     * @remarks
     * This field will only present if a profile was linked with the {@link accessToken|`accessToken`}.
     */
    selectedProfile?: YggdrasilProfile;
}

export default RefreshResponse;
