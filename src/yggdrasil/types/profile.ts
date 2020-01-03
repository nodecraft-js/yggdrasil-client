"use strict";

/**
 * The JSON object that contains information of a player's profile.
 * 
 * @since 0.0.1
 * @see {@link AuthenticateResponse.availableProfiles|`AuthenticateResponse#availableProfiles`}
 * @see {@link AuthenticateResponse.selectedProfile|`AuthenticateResponse#selectedProfile`}
 * @see {@link RefreshPayload.selectedProfile|`RefreshPayload#selectedProfile`}
 * @see {@link RefreshResponse.selectedProfile|`RefreshResponse#selectedProfile`}
 */
export interface YggdrasilProfile
{
    /**
     * The name of the service that this profile belongs to.
     */
    agent?: string;

    /**
     * The {@link YggdrasilUser.id|unique identifier} of the {@link YggdrasilUser|user}
     * that this profile belongs to.
     */
    userId?: string;

    /**
     * The unique identifier of this profile.
     */
    id: string;

    /**
     * The in-game name of this profile.
     */
    name: string;

    /**
     * The time when this profile was created.
     * 
     * @remarks
     * The time format is the amount of milliseconds since 1st Jan 1970.
     */
    createdAt?: number;

    /**
     * Determine whether this profile is a legacy profile or not.
     * 
     * @remarks
     * This field will only present if the value is `true`.
     */
    legacy?: boolean;

    /**
     * Determine whether this profile is a legacy profile or not.
     */
    legacyProfile?: boolean;

    /**
     * Determine whether this profile was migrated or not.
     */
    migrated?: boolean;

    /**
     * Determine whether this profile was paid or not.
     */
    paid?: boolean;

    /**
     * Determine whether this profile was suspended or not.
     */
    suspended?: boolean;
}

export default YggdrasilProfile;
