import classNames from "classnames";
import cls from "./Footer.module.css";
import { Button } from "@/common/Button/Button";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <div className={classNames(cls.footer, {}, [className])}>
      <div className={cls.footer_wrapper}>
        <div className={cls.logo}>BrainWave</div>

        <div className={cls.footer_content_wrapper}>
          <div className={cls.column}>
            <ul>
              <li>Lorem, ipsum dolor.</li>
              <li>
                <Button>Find us</Button>
              </li>
              <li>
                <Button>Support us</Button>
              </li>
            </ul>
          </div>
          <div className={cls.column}>
            <ul>
              <li>Explore</li>
              <li>POpvdg</li>
              <li>POpvdg</li>
              <li>POpvdg</li>
              <li>POpvdg</li>
            </ul>
          </div>
          <div className={cls.column}>
            <ul>
              <li>Let`s connect</li>
              <li>Contact us</li>
              <li>GitHub</li>
              <li>Telegram</li>
              <li>Outlook</li>
            </ul>
          </div>
        </div>

        <div className={cls.copyright}>
          <p>Made with ❤ by @moemadea</p>
          <p>No cookies 🍪 Just education 🎨 and performance 🔡</p>
          <p>Copyright © 2023 All Rights Reserved. CC BY-NC-ND License.</p>
        </div>
      </div>
    </div>
  );
};
