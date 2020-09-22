# Stretch goal 4: Fancy tags

In the original version of this workshop, the tags use border-radius and a background color:

<img src="../__lecture/assets/tag-before.png" alt="Our tag element" />

We can spruce this up a bit, do something a little bit fancy. Let's fold the top-left corner downwards:

<img src="../__lecture/assets/tag-after.png" alt="Our tag element, with a folded corner" />

Your challenge is to figure out how this can be done, with some CSS. For bonus points, no HTML changes should be required.

**HINT:** So there is no "folding" ability in CSS. We're faking this.

**HINT:** You can use the `clip-path` CSS property to "trim off" certain sections. `clip-path` lets you draw a polygon, and everything outside that polygon will be made invisible. https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path

**HINT:** Every element can be given a "before" and "after" pseudo-element. A pseudo-element lets you render an additional "box". You might want to use a `:before` for the "flap" in the top left. https://developer.mozilla.org/en-US/docs/Web/CSS/::before
