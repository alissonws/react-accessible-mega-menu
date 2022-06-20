import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";

import AccessibleMegaMenu from "./AccessibleMegaMenu";

const MockContent = () => {
  return (
    <div className="submenu-submenu-uu0">
      <div className="submenu-isdark-tQ2"></div>
      <div className="submenu-submenuItems" style={{ minWidth: 864 + "px" }}>
        <div className="megbox-container">
          <div className="sub-menu-group">
            <div className="lg_ml-[25px]">
              <div className="textlabel font-bold text-black" role="heading">
                Editorial
              </div>
              <ul className="mega-links">
                <li>
                  <a href="/Explore-the-edit.html">Explore The Edit</a>
                </li>
                <li>
                  <a href="/Fashion.html">Fashion</a>
                </li>
                <li>
                  <a href="/Beauty.html">Beauty</a>
                </li>
                <li>
                  <a href="/In-the-spotlight.html">In The Spotlight</a>
                </li>
                <li>
                  <a href="/Meet-The-Editors.html">Meet The Editors</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="sub-menu-group">
            <div className="lg_ml-[9px]">
              <div className="slides-item slide-1">
                <div className="ContentDouble" tabIndex={0}>
                  <img
                    className="h-full"
                    src="images.ctfassets.net/2sd79uhztxd5/1m9RkyLjwpurqw5uL5pUC0/f2a909c8d1585ca35f0e4498333fa76e/article_2_col.png"
                    alt="Shop the Issue"
                  />
                </div>
              </div>
              <div className=" theEditTextBox ">
                <div
                  className="inline leading-[16.8px]
                              font-helveticanow
                              text-[14px] text-black"
                >
                  <span className="font-bold uppercase inline designerTitle">
                    Shop the Issue
                    <p>March - Unexpected Bag Shapes Taking Over 2022</p>{" "}
                    <span className="inline">
                      <a
                        className="eyeBrowTextLineLink uppercase inline"
                        href="https://integration2-hohc4oi-6zw6udofqhuw4.us-5.magentosite.cloud/editor/amanda-alagem"
                      >
                        Amanda Alagem
                      </a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-menu-group">
            <div className="lg_ml-[9px]">
              <div className="slides-item slide-2">
                <div className="midImgBorder" tabIndex={0}>
                  <img
                    className="h-full"
                    src="images.ctfassets.net/2sd79uhztxd5/IRYxnqRtqYyHC9cV6sqQh/6094ca1e338fdbc01378d2c87ac92b8a/article_1_col_-_2.png"
                    alt="Editor's Pick"
                  />
                </div>
              </div>
              <div className=" theEditTextBox ">
                <div
                  className="inline leading-[16.8px]
                              font-helveticanow
                              text-[14px] text-black"
                >
                  <span className="font-bold uppercase inline designerTitle">
                    Editor's Pick<p>Lafayette 148 New York By dsds</p>{" "}
                    <span className="inline">
                      <a
                        className="eyeBrowTextLineLink uppercase inline"
                        href="https://integration2-hohc4oi-6zw6udofqhuw4.us-5.magentosite.cloud/editor/amanda-alagem"
                      >
                        Amanda Alagem
                      </a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-menu-group">
            <div className="bigheaderContainer">
              <label className="font-bold label-text">
                Stories from our Editors
              </label>
              <div className="w-full mainheaderContainer">
                <div
                  className="undefined headerContainer w-1/2 mt-2.5 mx-1  "
                  aria-live="polite"
                  aria-busy="false"
                >
                  <div className="relative">
                    <a
                      className="item-images--uD"
                      href="/wide-leg-denim-pants.html"
                    >
                      <div className="item-imageContainer-z-A bg-white   image-container-F6P"></div>
                    </a>
                  </div>
                  <div className="flex flex-col flex-wrap font-helveticanow text-sm leading-custom-2 break-all mt-2.5   ">
                    <p className="w-full font-normal uppercase font-helveticanow break-words-custom item-light-wMt   ">
                      <span>
                        <a href="/designer/"></a>
                      </span>
                    </p>
                    <a
                      className="item-adjustWidth-63O pr-2 font-normal text-sm leading-custom-2 block item-light-wMt "
                      href="/wide-leg-denim-pants.html"
                    >
                      <p className="break-words-custom">
                        <span aria-labelledby="product_name" className="mr-3">
                          Wide Leg Denim Pants
                        </span>
                        <span className="item-price-RxIbreak-words-custom font-normal text-sm leading-custom-2NaN hidden ">
                          <span>$</span>
                          <span>370</span>
                          <span className="hidden">.</span>
                          <span className="hidden">00</span>
                        </span>
                      </p>
                    </a>
                    <div className="">
                      <p className="item-price-RxIfont-normal text-sm leading-custom-2 item-light-wMt block ">
                        <span>$</span>
                        <span>370</span>
                        <span className="hidden">.</span>
                        <span className="hidden">00</span>
                      </p>
                      <p className="flex font-normal text-sm leading-custom-2 mt-3 break-words-custom item-light-wMt  font-helveticanow">
                        Picked by&nbsp;
                        <a
                          className="item-images--uD"
                          href="/editor/minna-shim"
                        >
                          <span className="underline uppercase cursor-pointer">
                            MINNA SHIM
                          </span>
                        </a>
                      </p>
                      <div className="flex items-center justify-start mt-3 text-sm font-normal text-dark-grey leading-custom-2">
                        15 Colors
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="undefined headerContainer w-1/2 mx-1  "
                  aria-live="polite"
                  aria-busy="false"
                >
                  <div className="relative">
                    <a
                      className="item-images--uD"
                      href="/wide-leg-denim-pants.html"
                    >
                      <div className="item-imageContainer-z-A bg-white   image-container-F6P"></div>
                    </a>
                  </div>
                  <div className="flex flex-col flex-wrap font-helveticanow text-sm leading-custom-2 break-all mt-2.5   ">
                    <p className="w-full font-normal uppercase font-helveticanow break-words-custom item-light-wMt   ">
                      <span>
                        <a href="/designer/"></a>
                      </span>
                    </p>
                    <a
                      className="item-adjustWidth-63O pr-2 font-normal text-sm leading-custom-2 block item-light-wMt "
                      href="/wide-leg-denim-pants.html"
                    >
                      <p className="break-words-custom">
                        <span aria-labelledby="product_name" className="mr-3">
                          Wide Leg Denim Pants
                        </span>
                        <span className="item-price-RxIbreak-words-custom font-normal text-sm leading-custom-2NaN hidden ">
                          <span>$</span>
                          <span>370</span>
                          <span className="hidden">.</span>
                          <span className="hidden">00</span>
                        </span>
                      </p>
                    </a>
                    <div className="">
                      <p className="item-price-RxIfont-normal text-sm leading-custom-2 item-light-wMt block ">
                        <span>$</span>
                        <span>370</span>
                        <span className="hidden">.</span>
                        <span className="hidden">00</span>
                      </p>
                      <p className="flex font-normal text-sm leading-custom-2 mt-3 break-words-custom item-light-wMt  font-helveticanow">
                        Picked by&nbsp;
                        <a
                          className="item-images--uD"
                          href="/editor/minna-shim"
                        >
                          <span className="underline uppercase cursor-pointer">
                            MINNA SHIM
                          </span>
                        </a>
                      </p>
                      <div className="flex items-center justify-start mt-3 text-sm font-normal text-dark-grey leading-custom-2">
                        15 Colors
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-menu-group"></div>
        </div>
      </div>
    </div>
  );
};

const menuData = [
  {
    label: "The edit",
    subnav: <MockContent />,
    href: "the-edit.html",
  },
  {
    label: "New arrivals",
    subnav: <MockContent />,
    href: "new-arrivals.html",
  },
  {
    label: "Designers",
    subnav: <MockContent />,
    href: "degisners.html",
  },
  {
    label: "Clothing",
    subnav: <MockContent />,
    href: "new-arrivals.html",
  },
  {
    label: "Shoes",
    subnav: <MockContent />,
    href: "new-arrivals.html",
  },
  {
    label: "Accessories",
    subnav: <MockContent />,
    href: "new-arrivals.html",
  },
];

describe("AccessibleMegaMenu", () => {
  test("renders the AccessibleMegaMenu component", () => {
    render(
      <AccessibleMegaMenu
        menuData={menuData}
        menuBarClassName="hearst-menu-bar"
        menuItemClassName="hearst-menu-item"
        subMenuClassName="hearst-sub-menu"
        subMenuGroupClassName="sub-menu-group" // Required for right-left arrow navigation
      />
    );

    const AccessibleMegaMenuComponent = screen.getByTestId("accessible-mega-menu");

    expect(AccessibleMegaMenuComponent).toBeInTheDocument();
  });
});
