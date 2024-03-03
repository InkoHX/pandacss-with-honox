# Using Panda CSS with HonoX

2024-03-04 時点で HonoX で Panda CSS を使いたいときの構成

## 直接スタイルを挿入する方法（別の手段）

`app/routes/_renderer.tsx`と`package.json`を以下のように変更する:

```diff
import { jsxRenderer } from 'hono/jsx-renderer'
import { Script } from 'honox/server'
+import styles from '../global.css?inline'

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <Script src="/app/client.ts" async />
-        {
-          import.meta.env.PROD ? <link rel="stylesheet" href="/static/style.css" /> : <link rel="stylesheet" href="/app/global.css" />
-        }
+        <style>{styles}</style>
      </head>
      <body>{children}</body>
    </html>
  )
})
```

```diff
{
  ... 省略 ...
  "scripts": {
    "prepare": "panda codegen",
    "dev": "vite",
-    "build": "vite build --mode client && vite build && panda cssgen --minify --outfile ./dist/static/style.css",
+    "build": "vite build --mode client && vite build",
    "preview": "wrangler pages dev ./dist",
    "deploy": "$npm_execpath run build && wrangler pages deploy ./dist"
  },
  ... 省略 ...
}
```
