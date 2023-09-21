import lume from "lume/mod.ts";
import basePath from "lume/plugins/base_path.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog@v0.12.0/mod.ts";

import "npm:prismjs/components/prism-markdown.js";
import "npm:prismjs/components/prism-yaml.js";
import "npm:prismjs/components/prism-markup-templating.js";
import "npm:prismjs/components/prism-liquid.js";
import "npm:prismjs/components/prism-typescript.js";
import "npm:prismjs/components/prism-json.js";
import "https://deno.land/x/vento@v0.8.0/prism-vento.js";

export default lume({ location: new URL("https://lume.land/blog/") })
  .use(blog())
  .use(basePath());
