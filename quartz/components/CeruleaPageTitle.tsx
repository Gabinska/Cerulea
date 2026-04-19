import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const CeruleaPageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? "Cerulea Wiki"
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} class="page-title-link">
        <img
          src={`${baseDir}/static/cerulea-emblem.png`}
          alt="Emblema de Cerulea"
          class="page-title-emblem"
        />
        <span>{title}</span>
      </a>
    </h2>
  )
}

CeruleaPageTitle.css = `
.page-title {
  margin-top: -0.5rem !important;
  margin-bottom: 1rem;
}

.page-title-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--secondary);
  text-align: center;
}

.page-title-emblem {
  width: 96px;
  height: 96px;
  flex-shrink: 0;
}

.page-title span {
  font-size: 1.75rem;
  line-height: 0.75;
}
`

export default (() => CeruleaPageTitle) satisfies QuartzComponentConstructor