"use strict";

import { default as PropertyEntry } from "./user/property";

/**
 * The JSON object that contains information of a user.
 * 
 * @since 0.0.1
 * @see {@link AuthenticateResponse.user|`AuthenticateResponse#user`}
 * @see {@link RefreshResponse.user|`RefreshResponse#user`}
 */
export interface YggdrasilUser
{
    /**
     * The unique identifier of the user.
     */
    id: string;

    /**
     * The username of the user.
     * 
     * @remarks
     * The username could be either an email address, or player's name for
     * unmigrated accounts.
     */
    username: string;

    /**
     * The email address of the user.
     */
    email?: string;

    /**
     * Determine whether the {@link email|email address} of this user was
     * verified or not.
     */
    emailVerified?: boolean;

    /**
     * The date of birth of this user.
     * 
     * @remarks
     * The time format is the amount of milliseconds since 1st Jan 1970.
     */
    dateOfBirth?: number;

    /**
     * The IP address used when this user was registered.
     * 
     * @remarks
     * The last part of the IP address was censored, e.g. `192.168.0.*`.
     */
    registerIp?: string;

    /**
     * The time when this user was registered.
     * 
     * @remarks
     * The time format is the amount of milliseconds since 1st Jan 1970.
     */
    registeredAt?: number;

    /**
     * Determine whether this user was migrated or not.
     */
    migrated?: boolean;

    /**
     * The service where this user was {@link migrated|migrated} from.
     * 
     * @remarks The currently known values were:
     * * `minecraft.net`
     */
    migratedFrom?: string;

    /**
     * The time when this user was {@link migrated|migrated}.
     * 
     * @remarks
     * The time format is the amount of milliseconds since 1st Jan 1970.
     */
    migratedAt?: number;

    /**
     * The time when the password of this user was changed the last time.
     * 
     * @remarks
     * The time format is the amount of milliseconds since 1st Jan 1970.
     */
    passwordChangedAt?: number;

    /**
     * Determine whether this user is a legacy user or not.
     */
    legacyUser?: boolean;

    /**
     * Determine whether this user was verified by parent or not.
     */
    verifiedByParent?: boolean;

    /**
     * Determine whether this user was secured or not.
     */
    secured?: boolean;

    /**
     * Determine whether this user was suspended or not.
     */
    suspended?: boolean;

    /**
     * Determine whether this user was blocked or not.
     */
    blocked?: boolean;

    /**
     * A list of additional properties that provide extra information of the user.
     * 
     * @remarks
     * The currently known {@link PropertyEntry.name|property names} were:
     * * `preferredLanguage`
     * * `twitch_access_token`
     */
    properties?: PropertyEntry[];
}

export namespace YggdrasilUser
{
    export type Property = PropertyEntry;
}

export default YggdrasilUser;
