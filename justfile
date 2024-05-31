dev:
    bunx --bun astro dev --host --port 4322

check:
    bunx --bun astro check

build:
    bunx --bun astro build

fetch-notation-fun:
    curl -L "https://github.com/notation-fun/notation/blob/main/README.md?raw=true" \
        -o readme/notation-fun.md

fetch-dioxus-class:
    curl -L "https://github.com/edger-dev/dioxus-class/blob/main/README.md?raw=true" \
        -o readme/dioxus-class.md

fetch-based-cooking:
    curl -L "https://github.com/edger-dev/demos/blob/main/based.cooking/README.md?raw=true" \
        -o readme/based-cooking.md

fetch-all:
    just fetch-notation-fun
    just fetch-dioxus-class
    just fetch-based-cooking
