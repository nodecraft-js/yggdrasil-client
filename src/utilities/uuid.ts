"use strict";

import uuid from "uuid/v4";

export function generateRandomUuid(): string
{
    return uuid().replace(/-/g, "");
}

export default {
    generateRandomUuid,
};
