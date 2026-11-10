#!/bin/sh
# Renders scripts/og-image.html to public/og.png (1200x630) with headless Chrome.
# Set CHROME to the browser binary if it is not at the default macOS location.
set -eu
ROOT=$(cd "$(dirname "$0")/.." && pwd)
CHROME=${CHROME:-"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"}
PROFILE=$(mktemp -d)
trap 'rm -rf "$PROFILE"' EXIT
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
  --no-first-run --disable-background-networking --disable-component-update --disable-sync \
  --disable-default-apps --user-data-dir="$PROFILE" --allow-file-access-from-files \
  --window-size=1200,630 --screenshot="$ROOT/public/og.png" "file://$ROOT/scripts/og-image.html"
