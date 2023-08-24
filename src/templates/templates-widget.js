const CSS_DEFAULT = `
<style>
  body {
    margin: 1rem;
    font-family: monospace;
  }
</style>`;

const CSS_RIS = `
<style>
  body {
    margin: 1rem;
    font-family: monospace;
  }
</style>`;

const SCRIPT_DEFAULT = `
<script>
    console.log('widget loaded');

</script>`;

exports.HTML_DEFAULT = `
${CSS_DEFAULT}
${CSS_RIS}
${SCRIPT_DEFAULT}
`;

exports.HTML_CUSTOM = `
${CSS_DEFAULT}
${SCRIPT_DEFAULT}
`;

export default { HTML_DEFAULT, HTML_CUSTOM };