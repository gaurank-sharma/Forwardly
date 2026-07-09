import { Fragment } from "react";

/**
 * SplitText — splits a string into per-character spans (class `split-char`)
 * for GSAP to animate individually. Characters are grouped into words wrapped
 * in `whitespace-nowrap` spans, so a line only ever breaks at a space — never
 * mid-word or before trailing punctuation (which used to orphan the "." onto
 * its own line on mobile). When `gradient` is set, each character gets an
 * interpolated brand color so the whole line reads as one smooth gradient.
 */
function lerpColor(a, b, t) {
  const ah = parseInt(a.slice(1), 16);
  const bh = parseInt(b.slice(1), 16);
  const ar = (ah >> 16) & 255,
    ag = (ah >> 8) & 255,
    ab = ah & 255;
  const br = (bh >> 16) & 255,
    bg = (bh >> 8) & 255,
    bb = bh & 255;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return `rgb(${r},${g},${bl})`;
}

export default function SplitText({
  text,
  gradient = false,
  className = "",
  from = "#c2f54b",
  to = "#a6e635",
}) {
  const chars = [...text];
  const visible = chars.filter((c) => c !== " ").length;
  let idx = -1;

  // group characters into words so a word (with its punctuation) never breaks
  const words = [];
  let cur = [];
  chars.forEach((ch, i) => {
    if (ch === " ") {
      if (cur.length) words.push(cur);
      cur = [];
    } else {
      cur.push({ ch, i });
    }
  });
  if (cur.length) words.push(cur);

  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          {wi > 0 && <span aria-hidden> </span>}
          <span className="inline-block whitespace-nowrap">
            {word.map(({ ch, i }) => {
              idx++;
              const t = visible > 1 ? idx / (visible - 1) : 0;
              const style = gradient ? { color: lerpColor(from, to, t) } : undefined;
              return (
                <span
                  key={i}
                  aria-hidden
                  style={style}
                  className="split-char inline-block will-change-transform"
                >
                  {ch}
                </span>
              );
            })}
          </span>
        </Fragment>
      ))}
    </span>
  );
}
