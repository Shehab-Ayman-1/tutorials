import header from "../components/header.js";
import subMenu from "../components/subMenu.js";
import settings from "../components/settings.js";
import megaMenu from "../components/megaMenu.js";
import themes from "../options/themes.js";
import fonts from "../options/fonts.js";

// =================== Header ===================
header();

// =================== Sidebar ==================
subMenu("aside.sidebar#sidebar .link-title", 90);

// =================== Setting ==================
settings();
subMenu("aside.setting-side .link-title", -90);

// ================== Mega Menu =================
megaMenu();

// =================== Themes ===================
themes();

// =================== Fonts ====================
fonts();
