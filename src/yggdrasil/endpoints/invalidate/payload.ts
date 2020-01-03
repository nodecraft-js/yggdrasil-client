"use strict";

/**
 * The JSON object that the authentication server will receive when accessing
 * the "invalidate" endpoint via `POST` request.
 * 
 * @since 0.0.1
 * @see {@link RawYggdrasilClient.invalidate|`RawYggdrasilClient#invalidate`}
 */
export interface InvalidatePayload
{
    /**
     * The unique identifier of a Yggdrasil client.
     * 
     * @remarks
     * The token must be identical to the one used to obtain the {@link accessToken|`accessToken`}.
     */
    clientToken: string;

    /**
     * A valid unique identifier for a login session.
     */
    accessToken: string;
}

export default InvalidatePayload;
