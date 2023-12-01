// import TEMPLATES from '../templates/templates-widget.mjs';
const TEMPLATES = require('../templates/templates-widget');

const get = async (request, response) => {
    // const { custom } = request.params;
    let template = TEMPLATES.JS_WIDGET;    // `<script>console.log('error loading widget')`;
    // if (custom) {
    //     html = TEMPLATES.JS_WIDGET;
    // }
    // return ;

    // response.code(200).header("Content-Type", "text/plain; charset=utf-8").send(html);

    let keyAPI = request.query["key"];

    const searchRegExp = /API_KEY/g;
    const html = template.replace(searchRegExp, keyAPI);

    console.log('search', html.search('API_KEY'));

    response.raw.writeHead(200, { 'Content-Type': 'text/plain' });
    response.raw.write(html);
    response.raw.end();
};

// export default { get };

module.exports = { get };