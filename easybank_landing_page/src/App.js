import "./App.scss";

import React from "react";

import Item from "./comps/reusables/Item/Item";
import Button from "./comps/reusables/Button/Button";
import SectionText from "./comps/reusables/SectionText/SectionText";

import { logo, bgIntroDesktop, mockupsImg } from "./const/Const";

const App = () => {
  return (
    <div className="app">
      <div className="app_top_strip">
        <div className="app_top_strip_wrapper">
          {logo({ ...{ logoClass: "logo" } })}
          <div className="app_top_strip_items_cont">
            <Item {...{ itemText: "Home" }} />
            <Item {...{ itemText: "About" }} />
            <Item {...{ itemText: "Contact" }} />
            <Item {...{ itemText: "Blog" }} />
            <Item {...{ itemText: "Careers" }} />
          </div>
          <Button {...{ btnText: "Request Invite" }} />
        </div>
      </div>
      <div className="main_second_part">
        {bgIntroDesktop({ ...{ bgIntroDesktopClass: "bg_intro_desktop" } })}
        <img src={mockupsImg} alt="mockups image" className="bg_mockups_img" />
        <SectionText
          {...{
            sectionContClass: "main_cont",
            sectionTextTitleClass: "main_title",
            sectionTextTitleText: "Next generation digital banking",
            sectionTextCommentClass: "main_comment",
            sectionTextComment:
              "Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.",
          }}
        />
        <Button {...{ btnText: "Request Invite" }} />
      </div>
      <div className="main_third_part">
        <SectionText
          {...{
            sectionContClass: "main_third_cont",
            sectionTextTitleClass: "main_third_title",
            sectionTextTitleText: "Why choose Easybank?",
            sectionTextCommentClass: "main_third_comment",
            sectionTextComment:
              "We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",
          }}
        />
      </div>
    </div>
  );
};

export default App;
