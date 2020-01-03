"use strict";

import { default as YggdrasilEndpoints } from "./yggdrasil/endpoints";
import { default as YggdrasilTypes } from "./yggdrasil/types";

type YggdrasilSchemas = void;

namespace YggdrasilSchemas
{
    export type Endpoints = YggdrasilEndpoints;
    export type Types = YggdrasilTypes;
}

export {
    YggdrasilEndpoints,
    YggdrasilTypes,
};

export default YggdrasilSchemas;
