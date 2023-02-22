import "./App.scss";

import React from "react";

// used comps

import Title from "./comps/title/Title";
import Btn from "./comps/btn/Btn";
import Feature from "./comps/feature/Feature";
import Sponsor from "./comps/sponsor/Sponsor";

// imgs
import {
  headerBg,
  computerImg,
  devicesImg,
  googleImg,
  hpImg,
  ibmImg,
  microsoftImg,
  vectorImg,
} from "./utilities/constants";

// svgs
import {
  logoSvg,
  blacklistSvg,
  textSvg,
  sneakSvg,
  facebookSvg,
  twitterSvg,
  instagramSvg,
} from "./utilities/constants";

const App = () => {
  return (
    <div className="app">
      <img className="header_bg" src={headerBg} alt="mountains" />
      <div className="main_first_part">
        {logoSvg({ ...{ svgClasses: "logo_svg" } })}
        <Title
          {...{
            titleClass: "main_title",
            subtitleClass: "main_title_subtitle",
            titleText: "A history of everything you copy",
            subtitleText: (
              <>
                Clipboard allows you to track and organize everything you copy.
                Instantly
                <br></br>
                acces your clipboard on all your devices.
              </>
            ),
          }}
        />
        <div className="btns_cont">
          <Btn
            {...{
              btnClass: "general_btn btn_modifier_green",
              btnText: "Download for IOS",
            }}
          />
          <Btn
            {...{
              btnClass: "general_btn btn_modifier_blue",
              btnText: "Download for MAC",
            }}
          />
        </div>
        <Title
          {...{
            titleClass: "main_subtitle",
            subtitleClass: "main_subtitle_subtitle",
            titleText: "Keep track of your snippets",
            subtitleText: (
              <>
                Clipboard instantly stores any item you copy in the cloud,
                meaning you can access
                <br></br> your snippets immediately on al your devices. Our Mac
                and IOS apps will help you <br></br> organize everything.
              </>
            ),
          }}
        />
      </div>
      <div className="main_second_part">
        <img className="computer_img" src={computerImg} alt="computer" />
        <div className="main_second_part_site_points_cont">
          <Title
            {...{
              titleClass: "main_title_point",
              subtitleClass: "main_title_point_subtitle",
              titleText: "Quick Search",
              subtitleText: (
                <>
                  Easily search your snippets by content, <br></br>category, web
                  address, application, and more.
                </>
              ),
            }}
          />
          <Title
            {...{
              titleClass: "main_title_point",
              subtitleClass: "main_title_point_subtitle",
              titleText: "Quick Search",
              subtitleText: (
                <>
                  Easily search your snippets by content, <br></br>category, web
                  address, application, and more.
                </>
              ),
            }}
          />
          <Title
            {...{
              titleClass: "main_title_point",
              subtitleClass: "main_title_point_subtitle",
              titleText: "Quick Search",
              subtitleText: (
                <>
                  Easily search your snippets by content, <br></br>category, web
                  address, application, and more.
                </>
              ),
            }}
          />
        </div>
      </div>
      <div className="main_third_part">
        <Title
          {...{
            titleClass: "main_subtitle",
            subtitleClass: "main_subtitle_subtitle",
            titleText: "Access Clipboard anywhere",
            subtitleText: (
              <>
                Whether you're on the go, or at your computer, you can access
                all your Clipboard
                <br></br> snippets in a few simple clicks.
              </>
            ),
          }}
        />
        <img
          className="devices_img"
          src={devicesImg}
          alt="phone_and_tablet_devices"
        />
      </div>
      <div className="main_fourth_part">
        <Title
          {...{
            titleClass: "main_subtitle",
            subtitleClass: "main_subtitle_subtitle",
            titleText: "Supercharge your workflow",
            subtitleText: <>We've got the tools to boost your productivity.</>,
          }}
        />
        <div className="main_features_cont">
          <Feature
            {...{
              svgIcon: blacklistSvg({
                svgClasses: "features_icon",
              }),
              titleText: "Create blacklists",
              subtitleText: (
                <>
                  Ensure sensitive information never makes its <br></br>way to
                  your clipboard by excluding certain <br></br>sources.
                </>
              ),
            }}
          />
          <Feature
            {...{
              svgIcon: textSvg({
                svgClasses: "features_icon",
              }),
              titleText: "Plain text snippets",
              subtitleText: (
                <>
                  Remove unwanted formatting from copied text <br></br>for a
                  consistent look.
                </>
              ),
            }}
          />
          <Feature
            {...{
              svgIcon: sneakSvg({
                svgClasses: "features_icon",
              }),
              titleText: "Sneak preview",
              subtitleText: (
                <>
                  Quick preview of all snippets on your Clipboard <br></br>for
                  easy access.
                </>
              ),
            }}
          />
        </div>
      </div>
      <div className="main_fifth_part">
        <div className="main_sponsors">
          <Sponsor
            {...{ sponsorClass: "main_sponsor_item", svgIcon: googleImg }}
          />
          <Sponsor
            {...{ sponsorClass: "main_sponsor_item", svgIcon: ibmImg }}
          />
          <Sponsor
            {...{
              sponsorClass: "main_sponsor_item main_sponsor_size_modifier",
              svgIcon: microsoftImg,
            }}
          />
          <Sponsor {...{ sponsorClass: "main_sponsor_item", svgIcon: hpImg }} />
          <Sponsor
            {...{
              sponsorClass: "main_sponsor_item main_sponsor_size_modifier",
              svgIcon: vectorImg,
            }}
          />
        </div>
      </div>
      <div className="main_sixth_part">
        <Title
          {...{
            titleClass: "main_subtitle",
            subtitleClass: "main_subtitle_subtitle",
            titleText: "Clipboard for iOS and Mac OS",
            subtitleText: (
              <>
                Available for free on the App Store. Download for Mac or iOS,
                sync with iCloud and <br></br>you're ready to start adding to
                your clipboard.
              </>
            ),
          }}
        />
        <div className="btns_cont">
          <Btn
            {...{
              btnClass: "general_btn btn_modifier_green",
              btnText: "Download for iOS",
            }}
          />
          <Btn
            {...{
              btnClass: "general_btn btn_modifier_blue",
              btnText: "Download for Mac",
            }}
          />
        </div>
      </div>
      <div className="main_footer_part">
        {logoSvg({ ...{ svgClasses: "logo_svg logo_svg_small" } })}
        <div className="footer_flex_wrapper">
          <div className="footer_cont">
            <div className="footer_column">
              <div className="footer_point">FAQs</div>
              <div className="footer_point">Contact Us</div>
            </div>
            <div className="footer_column">
              <div className="footer_point">Privacy Policy</div>
              <div className="footer_point">Press Kit</div>
            </div>
            <div className="footer_column">
              <div className="footer_point">Install Guide</div>
            </div>
          </div>
          <div className="footer_icons footer_icons_modifier">
            {facebookSvg({ ...{ svgClasses: "footer_icon" } })}
            {twitterSvg({ ...{ svgClasses: "footer_icon" } })}
            {instagramSvg({ ...{ svgClasses: "footer_icon" } })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
