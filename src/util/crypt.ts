import { randomBytes, scryptSync } from "crypto";

export const Crypt = {
    hash: (raw: string): string => {
        const salt = randomBytes(16).toString("hex");
        const hash = scryptSync(raw, salt, 64);
        const hashedPassword = `${hash.toString('hex')}.${salt}`;

        return hashedPassword;
    },
    compare: (rawString: string, hashedString: string): boolean => {
        console.log('crypt.compare : ' + rawString +" vs "+ hashedString);
        const [hashed, salt] = hashedString.split('.');
        return scryptSync(rawString, salt, 64).toString("hex") === hashed;
    }
}