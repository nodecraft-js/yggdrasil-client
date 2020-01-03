"use strict";

/**
 * The JSON object that the authentication server will receive when accessing
 * the "validate" endpoint via `POST` request.
 * 
 * @since 0.0.1
 * @see {@link RawYggdrasilClient.validate|`RawYggdrasilClient#validate`}
 */
export interface ValidatePayload
{
    /**
     * The unique identifier of a Yggdrasil client.
     * 
     * @remarks
     * If provided, the token must be identical to the one used to obtain the
     * {@link accessToken|`accessToken`}.
     */
    clientToken?: string;

    /**
     * A valid unique identifier for a login session.
     */
    accessToken: string;
}

export default ValidatePayload;
