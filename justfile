dev:
    bunx --bun astro dev --host --port 4322

check:
    bunx --bun astro check

build:
    bunx --bun astro build

fetch-notation-fun:
    curl -L "https://github.com/notation-fun/notation/blob/main/README.md?raw=true" \
        -o src/content/readme/notation-fun.md

fetch-dioxus-class:
    curl -L "https://github.com/edger-dev/dioxus-class/blob/main/README.md?raw=true" \
        -o src/content/readme/dioxus-class.md

fetch-based-cooking:
    curl -L "https://github.com/edger-dev/demos/blob/main/based.cooking/README.md?raw=true" \
        -o src/content/readme/based-cooking.md

fetch-all:
    just fetch-notation-fun
    just fetch-dioxus-class
    just fetch-based-cooking

list-pages:
    npx wrangler pages deployment list

copy-headers:
    cp -v _headers dist/

preview:
    just copy-headers
    npx wrangler pages dev dist --ip 0.0.0.0

deploy:
    just copy-headers
    npx wrangler pages deploy
