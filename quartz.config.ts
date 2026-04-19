import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Cerulea Wiki",
    pageTitleSuffix: " · Fragmentos de um Sonho Cerúleo",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "pt-BR",
    baseUrl: "gabinska.github.io/Cerulea",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Philosopher",
        body: "Nunito",
        code: "JetBrains Mono",
        title: "Uncial Antiqua",
      },
      colors: {
        lightMode: {
          light: "#F5F0E8",
          lightgray: "#E0D8C8",
          gray: "#8A9199",
          darkgray: "#3A4449",
          dark: "#1F2A2E",
          secondary: "#2E5C94",
          tertiary: "#C8960C",
          highlight: "rgba(46, 92, 148, 0.10)",
          textHighlight: "#C8960C44",
        },
        darkMode: {
          light: "#141A1E",
          lightgray: "#2A3238",
          gray: "#6B7680",
          darkgray: "#D0D4D8",
          dark: "#EDE4D3",
          secondary: "#7BA4D1",
          tertiary: "#E5B84A",
          highlight: "rgba(123, 164, 209, 0.12)",
          textHighlight: "#C8960C55",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
