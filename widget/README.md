ASCIIMoon widget for Hyprland rices
===================================

The asciimoon.com moon as a desktop widget: the same Galileo ASCII art, the
same SunCalc moon math, drawn in your terminal with today's phase shaded in.

`asciimoon` is one Python file with no dependencies (Python 3.8+).

```sh
install -Dm755 widget/asciimoon ~/.local/bin/asciimoon
asciimoon            # print today's moon
asciimoon --watch    # live widget
```

In `--watch` mode:

| key           | action                           |
| ------------- | -------------------------------- |
| `h` / `←`     | previous day                     |
| `l` / `→`     | next day                         |
| `t`           | back to today                    |
| `space`       | animate through the lunar month  |
| `q` / `Esc`   | quit                             |

It refreshes every 10 minutes (`--interval`) and re-centres when the window
is resized.

Put it on your desktop
----------------------

[`hypr/asciimoon.conf`](hypr/asciimoon.conf) has two setups. Copy it to
`~/.config/hypr/` and add `source = ~/.config/hypr/asciimoon.conf` to
`hyprland.conf`.

- **On the wallpaper (kitty):** `kitty +kitten panel --edge=background`
  draws a transparent layer behind every window, so the moon sits on the
  desktop the way conky does.
- **Pinned floating terminal:** exec rules for kitty or foot that float and
  pin a small window in the top-right corner.

Waybar module
-------------

Add the block from [`waybar/config.jsonc`](waybar/config.jsonc) to your
Waybar config and the CSS from [`waybar/style.css`](waybar/style.css) to your
stylesheet. The bar shows `🌔 78%`. Hover it for a coloured ASCII moon
tooltip with days until the next full and new moon. Click it to open the
interactive moon. Each phase sets a CSS class (`.full-moon`,
`.waxing-crescent` and so on) that you can style.

Match your colour scheme
------------------------

The default colour is the site's aqua. To match your theme, pass colours on
the command line or set them in the environment:

```sh
asciimoon --watch --moon-color '#cba6f7' --shadow-color '#1e1e2e'   # catppuccin mocha
export ASCIIMOON_COLOR='#ebdbb2' ASCIIMOON_SHADOW='#282828'           # gruvbox
```

Other options:

- `--hide-shadow` blanks the dark side instead of dimming it.
- `--south` mirrors the moon for the southern hemisphere.
- `--no-info` shows the moon only, with no text.
- `-W 40` sets a fixed width in columns.
- `-d 2026-12-24` shows another day.
- `--cell-aspect` fixes a squashed or stretched moon. The default is `2.1`,
  the height/width ratio of one terminal cell. Try 1.9 to 2.4 for your font.

Run `asciimoon --help` for the full list.
