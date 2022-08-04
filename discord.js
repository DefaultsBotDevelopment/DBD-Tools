/**
 * Format buttons into action rows
 *
 * @param {Array} buttons an array of button objects.
 * @returns a components array with action rows and buttons.
 */

function formatButtons(buttons) {
  let components = [];
  let btns = chunkArray(buttons, 5);

  for (const row of btns) {
    components.push({
      type: 1,
      components: row
    });
  }
  return components

}