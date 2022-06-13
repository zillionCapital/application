import NoroImg from "../assets/tokens/NORO.png";
import SNoroImg from "../assets/tokens/SNORO.png";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name === "noro") {
        return toUrl(NoroImg);
    }

    if (name === "snoro") {
        return toUrl(SNoroImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}
