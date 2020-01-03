"use strict";

/**
 * The JSON object that the authentication server will receive when accessing
 * the "signout" endpoint via `POST` request.
 * 
 * @since 0.0.1
 * @see {@link RawYggdrasilClient.signout|`RawYggdrasilClient#signout`}
 */
export interface SignoutPayload
{
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
}

export default SignoutPayload;
