import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../../assets/icons/github.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/twitter.svg";
import { ReactComponent as Telegram } from "../../../assets/icons/telegram.svg";
import { ReactComponent as Discord } from "../../../assets/icons/discord.svg";

export default function Social() {
    return (
        <div className="social-row">
            <Link href="https://github.com/cunoro" style={{ pointerEvents: "none" }} target="_blank">
                <SvgIcon color="primary" component={GitHub} />
            </Link>

            <Link href="https://twitter.com/cunorofinance" style={{ textDecoration: "none" }} target="_blank">
                <SvgIcon color="primary" component={Twitter} />
            </Link>

            <Link href="https://t.me/+O7pOJ6H7KEJiNDIy" style={{ pointerEvents: "none" }} target="_blank">
                <SvgIcon viewBox="0 0 32 32" color="primary" component={Telegram} />
            </Link>

            <Link href="https://discord.gg/7uP2SQ2t5F" style={{ pointerEvents: "none" }} target="_blank">
                <SvgIcon color="primary" component={Discord} />
            </Link>
        </div>
    );
}
