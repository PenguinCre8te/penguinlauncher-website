const VERSION = "11.0.2";

export const PLATFORMS = [
	{
		name: "Windows",
		path: "/download/windows",
		key: "windows",
		icon: "simple-icons:windows",
	},
	{
		name: "macOS",
		path: "/download/macos",
		key: "macos",
		icon: "simple-icons:apple",
	},
	{
		name: "Steam Deck",
		path: "/download/steam-deck",
		key: "steam-deck",
		icon: "simple-icons:steam",
	},
	{
		name: "Linux",
		path: "/download/linux",
		key: "linux",
		icon: "simple-icons:linux",
	},
] as const;

export const DOWNLOADS = {
	windows: [
		{
			title: "x86-64",
			downloads: [
				{
					title: "Installer (.exe)",
					href: `https://github.com/penguincre8te/PenguinLauncher/releases/download/${VERSION}/PenguinLauncher-Windows-MSVC-Setup-${VERSION}.exe`,
					type: "primary" as const,
					icon: "simple-icons:windows",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Portable (.zip)",
					href: `https://github.com/penguincre8te/PenguinLauncher/releases/download/${VERSION}/PenguinLauncher-Windows-MinGW-w64-Portable-${VERSION}.zip`,
					type: "secondary" as const,
					icon: "simple-icons:windows",
					secondaryIcon: "lucide:download",
				},
			],
		},
		{
			title: "ARM64",
			downloads: [
				{
					title: "Installer (.exe)",
					href: `https://github.com/penguincre8te/PenguinLauncher/releases/download/${VERSION}/PenguinLauncher-Windows-MSVC-arm64-Setup-${VERSION}.exe`,
					type: "primary" as const,
					icon: "simple-icons:windows",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Portable (.zip)",
					href: `https://github.com/penguincre8te/PenguinLauncher/releases/download/${VERSION}/PenguinLauncher-Windows-MinGW-arm64-Portable-${VERSION}.zip`,
					type: "secondary" as const,
					icon: "simple-icons:windows",
					secondaryIcon: "lucide:download",
				},
			],
		},
	],

	linux: [
		{
			title: "x86-64",
			downloads: [
				{
					title: "AppImage (.appimage)",
					href: `https://github.com/penguincre8te/PenguinLauncher/releases/download/${VERSION}/PenguinLauncher-Linux-x86_64.AppImage`,
					type: "primary" as const,
					icon: "simple-icons:linux",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Portable (tar.gz)",
					href: `https://github.com/penguincre8te/PenguinLauncher/releases/download/${VERSION}/PenguinLauncher-Linux-Qt6-Portable-${VERSION}.tar.gz`,
					type: "secondary" as const,
					icon: "simple-icons:linux",
					secondaryIcon: "lucide:download",
				},
			],
		},
		{
			title: "ARM64",
			downloads: [
				{
					title: "AppImage (.appimage)",
					href: `https://github.com/penguincre8te/PenguinLauncher/releases/download/${VERSION}/PenguinLauncher-Linux-aarch64.AppImage`,
					type: "primary" as const,
					icon: "simple-icons:linux",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Portable (tar.gz)",
					href: `https://github.com/penguincre8te/PenguinLauncher/releases/download/${VERSION}/PenguinLauncher-Linux-aarch64-Qt6-Portable-${VERSION}.tar.gz`,
					type: "secondary" as const,
					icon: "simple-icons:linux",
					secondaryIcon: "lucide:download",
				},
			],
		},
	],

	macos: [
		{
			title: "Monterey or later",
			downloads: [
				{
					title: "Universal (.zip)",
					href: `https://github.com/penguincre8te/PenguinLauncher/releases/download/${VERSION}/PenguinLauncher-macOS-${VERSION}.zip`,
					type: "primary" as const,
					icon: "simple-icons:apple",
					secondaryIcon: "lucide:download",
				},
			],
		},
	],

	"steam-deck": [
		{
			title: "Steam Deck",
			downloads: [
				{
					title: "Currently not supported",
					href: "",
					type: "secondary" as const,
					icon: "",
					secondaryIcon: "",
				},
			],
		},
	],
};
