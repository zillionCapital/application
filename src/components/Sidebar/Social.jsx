import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";

export default function Social() {
  return (
    <div className="social-row">
      <Link href="https://github.com/cunoro" target="_blank">
        <SvgIcon color="primary" component={GitHub} />
      </Link>

      <Link href="https://www.linkedin.com/company/cunoro/" target="_blank">
        <SvgIcon color="primary" component={Linkedin} />
      </Link>

      <Link href="https://twitter.com/cunorofinance" target="_blank">
        <SvgIcon color="primary" component={Twitter} />
      </Link>

      <Link href="hhttps://discord.gg/7uP2SQ2t5F" target="_blank">
        <SvgIcon color="primary" component={Discord} />
      </Link>
    </div>
  );
}
