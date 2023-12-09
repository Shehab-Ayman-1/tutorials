// Root
import Home from "@/layout/home.vue";

// Basics
import Structure from "@/lessons/basics/structure.vue";
import Filters from "@/lessons/basics/filters.vue";

// Effects
import Computed from "@/lessons/effects/computed.vue";
import Watch from "@/lessons/effects/watch.vue";

// Directives
import Text from "@/lessons/directives/v-text.vue";
import For from "@/lessons/directives/v-for.vue";
import If from "@/lessons/directives/v-if.vue";
import Once from "@/lessons/directives/v-once.vue";
import Show from "@/lessons/directives/v-show.vue";
import Bind from "@/lessons/directives/v-bind.vue";
import On from "@/lessons/directives/v-on.vue";
import Model from "@/lessons/directives/v-model.vue";
import CustomeDirectives from "@/lessons/directives/v-custome.vue";

// Ajax
import Get from "@/lessons/ajax/get.vue";
import Create from "@/lessons/ajax/create.vue";
import Update from "@/lessons/ajax/update.vue";

// Applications
import TogglePassword from "@/lessons/applications/toggle-password.vue";
import ConvertToSluge from "@/lessons/applications/convert-to-slug.vue";
import SystemColors from "@/lessons/applications/system-colors.vue";
import FormValidation from "@/lessons/applications/form-validation.vue";
import Todos from "@/lessons/applications/todos.vue";
import GradientGenerator from "@/lessons/applications/gradient-generator.vue";
import tabsMenu from "@/lessons/applications/tabs-menu.vue";
import RandomImage from "@/lessons/applications/random-image.vue";
import Accordion from "@/lessons/applications/accordion.vue";

export const createRoute = (heading = "", parentPath = "", linkPaths = []) => {
	const links = linkPaths.map((link) => ({
		name: `${link.charAt(0).toUpperCase()}${link.slice(1)}`.replaceAll("-", " "),
		path: `/${parentPath}/${link}`,
	}));
	return { heading, links };
};

export const navlinks = [
	createRoute("Basics", "basics", ["structure", "filters"]),
	createRoute("Directives", "directives", ["v-text", "v-for", "v-if", "v-once", "v-show", "v-bind", "v-on", "v-model", "v-custome"]),
	createRoute("Effects", "effects", ["computed", "watch"]),
	createRoute("Ajax API", "ajax", ["get / update / delete", "create"]),
	createRoute("Applications", "apps", ["toggle-password", "convert-to-slug", "system-colors", "form-validation", "todos", "gradient-generator", "tabs-menu", "random-image", "accordion"]),
];

export const routes = [
	// Root
	{ path: "/", component: Home },

	// Basics
	{ path: "/basics/structure", component: Structure },
	{ path: "/basics/filters", component: Filters },

	// Directives
	{ path: "/directives/v-text", component: Text },
	{ path: "/directives/v-for", component: For },
	{ path: "/directives/v-if", component: If },
	{ path: "/directives/v-once", component: Once },
	{ path: "/directives/v-show", component: Show },
	{ path: "/directives/v-bind", component: Bind },
	{ path: "/directives/v-on", component: On },
	{ path: "/directives/v-model", component: Model },
	{ path: "/directives/v-custome", component: CustomeDirectives },

	// Ajax
	{ path: "/ajax/get", component: Get },
	{ path: "/ajax/create", component: Create },
	{ path: "/ajax/update/:id", component: Update },

	// Effects
	{ path: "/effects/computed", component: Computed },
	{ path: "/effects/watch", component: Watch },

	// Applications
	{ path: "/apps/toggle-password", component: TogglePassword },
	{ path: "/apps/convert-to-slug", component: ConvertToSluge },
	{ path: "/apps/system-colors", component: SystemColors },
	{ path: "/apps/form-validation", component: FormValidation },
	{ path: "/apps/todos", component: Todos },
	{ path: "/apps/gradient-generator", component: GradientGenerator },
	{ path: "/apps/tabs-menu", component: tabsMenu },
	{ path: "/apps/random-image", component: RandomImage },
	{ path: "/apps/accordion", component: Accordion },
];
