import MobilMenu from "./modules/MobilMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from 'jquery';

var mobilMenu = new MobilMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");