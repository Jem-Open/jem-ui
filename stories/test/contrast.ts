type Rgba = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

export type ContrastMeasurement = {
  foreground: string;
  background: string;
  ratio: number;
};

const OPAQUE_WHITE: Rgba = {
  red: 255,
  green: 255,
  blue: 255,
  alpha: 1,
};

function parseChannel(value: string): number {
  if (value.endsWith("%")) {
    return (Number.parseFloat(value) / 100) * 255;
  }

  return Number.parseFloat(value);
}

function parseCssColor(value: string): Rgba {
  if (value === "transparent") {
    return { red: 0, green: 0, blue: 0, alpha: 0 };
  }

  const channels = value.match(/[\d.]+%?/g);
  if (!channels || channels.length < 3) {
    throw new Error(`Unsupported computed CSS color: ${value}`);
  }

  return {
    red: parseChannel(channels[0]),
    green: parseChannel(channels[1]),
    blue: parseChannel(channels[2]),
    alpha: channels[3] === undefined ? 1 : Number.parseFloat(channels[3]),
  };
}

function composite(foreground: Rgba, background: Rgba): Rgba {
  const alpha = foreground.alpha + background.alpha * (1 - foreground.alpha);
  if (alpha === 0) {
    return { red: 0, green: 0, blue: 0, alpha: 0 };
  }

  return {
    red:
      (foreground.red * foreground.alpha +
        background.red * background.alpha * (1 - foreground.alpha)) /
      alpha,
    green:
      (foreground.green * foreground.alpha +
        background.green * background.alpha * (1 - foreground.alpha)) /
      alpha,
    blue:
      (foreground.blue * foreground.alpha +
        background.blue * background.alpha * (1 - foreground.alpha)) /
      alpha,
    alpha,
  };
}

function effectiveBackground(element: Element): Rgba {
  let background: Rgba = { red: 0, green: 0, blue: 0, alpha: 0 };
  let current: Element | null = element;

  while (current && background.alpha < 1) {
    const layer = parseCssColor(getComputedStyle(current).backgroundColor);
    background = composite(background, layer);
    current = current.parentElement;
  }

  return background.alpha < 1 ? composite(background, OPAQUE_WHITE) : background;
}

function linearChannel(channel: number): number {
  const normalized = channel / 255;
  return normalized <= 0.04045
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4;
}

function luminance(color: Rgba): number {
  return (
    0.2126 * linearChannel(color.red) +
    0.7152 * linearChannel(color.green) +
    0.0722 * linearChannel(color.blue)
  );
}

function ratioBetween(first: Rgba, second: Rgba): number {
  const lighter = Math.max(luminance(first), luminance(second));
  const darker = Math.min(luminance(first), luminance(second));
  return (lighter + 0.05) / (darker + 0.05);
}

function serialize(color: Rgba): string {
  const channels = [color.red, color.green, color.blue].map((channel) =>
    Math.round(channel),
  );
  return `rgb(${channels.join(", ")})`;
}

export function measureContrast(
  foregroundElement: Element,
  backgroundElement: Element = foregroundElement,
  foregroundProperty: "color" | "stroke" = "color",
): ContrastMeasurement {
  const background = effectiveBackground(backgroundElement);
  const computed = getComputedStyle(foregroundElement);
  const rawForeground =
    foregroundProperty === "stroke" && computed.stroke !== "none"
      ? computed.stroke
      : computed.color;
  const foreground = composite(parseCssColor(rawForeground), background);

  return {
    foreground: serialize(foreground),
    background: serialize(background),
    ratio: ratioBetween(foreground, background),
  };
}

export async function waitForVisualState(element: Element): Promise<void> {
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
  const animations = element.getAnimations();
  await Promise.all(
    animations.map(async (animation) => {
      try {
        await animation.finished;
      } catch {
        // Replaced transitions reject their prior animation's finished promise.
      }
    }),
  );
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
}

export function formatMeasurement(measurement: ContrastMeasurement): string {
  return `${measurement.ratio.toFixed(2)}:1 (${measurement.foreground} on ${measurement.background})`;
}
