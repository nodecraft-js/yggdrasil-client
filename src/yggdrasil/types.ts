"use strict";

import { default as YggdrasilAgent } from "./types/agent";
import { default as YggdrasilProfile } from "./types/profile";
import { default as YggdrasilUser } from "./types/user";

type YggdrasilTypes = void;

/**
 * @since 0.0.1
 */
namespace YggdrasilTypes
{
    export type Agent = YggdrasilAgent;
    export type Profile = YggdrasilProfile;
    export type User = YggdrasilUser;
}

export {
    YggdrasilAgent,
    YggdrasilProfile,
    YggdrasilUser,
};

export default YggdrasilTypes;
