import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1 } from "@emdash-cms/cloudflare";
import icon from "astro-iconset";
import { defineConfig, fontProviders } from "astro/config";
import emdash, { local } from "emdash/astro";

export default defineConfig({
	output: "server",
        adapter: cloudflare({ legacy_env: false }),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	vite: {
		ssr: {
			optimizeDeps: {
				// Pre-bundle so it isn't discovered mid-render, which would trigger
				// a Vite dep re-optimization and break in-flight worker imports
				// under the Cloudflare dev runner (workerd).
				include: ["astro-iconset/components"],
			},
		},
	},
	integrations: [
		react(),
		icon({
			// Only ship the Phosphor icons actually referenced in templates,
			// not the full @iconify-json/ph set (which adds megabytes to the
			// deployed worker bundle).
			include: {
				ph: [
					"airplane-tilt",
					"bank",
					"brain",
					"certificate",
					"chart-bar",
					"chats-circle",
					"check-circle",
					"check-square",
					"clock",
					"clipboard-text",
					"cloud",
					"code",
					"currency-dollar",
					"envelope",
					"eye",
					"file-text",
					"globe",
					"graduation-cap",
					"handshake",
					"heart",
					"identification-card",
					"lifebuoy",
					"lightning",
					"link",
					"list-checks",
					"lock",
					"pen-nib",
					"robot",
					"scales",
					"seal-check",
					"shield-check",
					"sparkle",
					"stack",
					"star",
					"translate",
					"trophy",
					"user",
					"users-three",
				],
			},
		}),
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			// R2 isn't enabled on the Cloudflare account yet; local storage is a
			// placeholder so the build/deploy works. It doesn't persist on
			// Workers, so media uploads won't work until this is swapped for r2().
			storage: local({
				directory: "./uploads",
				baseUrl: "/_emdash/api/media/file",
			}),
			plugins: [
				{
					id: "marketing-blocks",
					version: "0.1.0",
					// Absolute file:// URL so the virtual emdash/plugins module
					// can resolve this at build time (relative paths fail because
					// the virtual module has no on-disk location to anchor them).
					entrypoint: new URL("./src/plugins/marketing-blocks/index.ts", import.meta.url).href,
				},
			],
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Inter",
			cssVariable: "--font-sans",
			weights: [400, 500, 600, 700, 800],
			fallbacks: ["sans-serif"],
		},
	],
	devToolbar: { enabled: false },
});
